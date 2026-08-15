# CMS security

How the WordPress backend is protected, what is deliberately public, and what
must be done by hand at cutover.

---

## What is public, and why

The site is a public brochure site. Everything the CMS serves is already visible
on vantico.com, so the read endpoints are open on purpose:

| Endpoint | Access | Reason |
|---|---|---|
| `GET /wp-json/vantico/v1/*` | Public | Serves the same content the website renders. Putting it behind a token would add key management for no confidentiality gain. |
| `POST /wp-json/vantico/v1/questions` | Public | The contact form posts from browsers. Protected by honeypot, rate limits and optional Turnstile — see below. |
| `POST /wp-json/vantico/v1/import/*` | `manage_options` | Migration tooling only. |
| `POST /api/revalidate` (Next.js) | Shared secret | Clears the site's page cache. Guarded by `x-vantico-secret`, compared in constant time; refuses everything when `REVALIDATE_SECRET` is unset. In wp-admin it additionally needs `edit_posts`, a nonce, and is throttled to one call per 30s. |
| `/wp-json/wp/v2/*` | Restricted | See below. |

The exposure that matters here is **abuse and scraping, not disclosure** — handle
it with caching and rate limiting at the host or CDN.

## What is closed

Implemented in `vantico-cms/includes/security.php` unless noted.

| Control | Effect |
|---|---|
| Custom post types out of the core REST API (`post-types.php`) | `/wp/v2/vt_question` and friends return 404. **This previously exposed every contact-form submission — name, email and message — to anonymous callers.** |
| ACF fields out of the core REST API (`fields.php`) | Custom field values are served only through the curated `vantico/v1` endpoints. |
| User listing blocked for anonymous callers | `/wp-json/wp/v2/users` returns 404, so usernames cannot be harvested. |
| Author archives refused | `/?author=1` and `/author/<name>/` redirect to the home page instead of revealing the username. |
| Author sitemap removed | The same names are not republished through sitemaps. |
| XML-RPC disabled | `POST /xmlrpc.php` returns 403. Removes a brute-force and pingback-amplification path. |
| Version fingerprinting removed | No generator meta tag, no `ver=` query on core assets, no `X-Pingback` header. |
| File editing disabled | `DISALLOW_FILE_EDIT` — a stolen admin password can no longer become code execution. |
| Security headers | `X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options`, `Permissions-Policy`, on both normal and REST responses. |
| Login attempt limiting | 5 failures per IP within an hour → 15-minute lockout, which refuses **even correct credentials**. Login errors are generic, so neither half of the credentials is confirmed. |
| Production sanity check | An admin notice fires if `WP_DEBUG` is on in a production environment. |

## Contact form protection

`POST /vantico/v1/questions`, in order:

1. **Honeypot** — a filled hidden `website` field is discarded. The response is
   still `201` so a bot cannot detect the rejection and retry without it.
2. **Rate limits** — one submission per IP per minute, and ten per IP per day.
3. **Turnstile** (optional) — verified only when `VANTICO_TURNSTILE_SECRET` is
   defined in `wp-config.php`. It fails *open*: a Cloudflare outage will not
   silence the contact form.
4. **Validation** — a valid email is required; name ≤ 100, email ≤ 200 and
   message ≤ 5000 characters.
5. **Link spam** — a URL in the name field, or more than three links in the
   message, is silently discarded.

Submissions store the sender's IP for abuse investigation. The post title is
`Name — date`; the **email address is never written into the title**, because
titles surface in list tables, search and autosaves.

To enable Turnstile, add the widget to the form and put this in `wp-config.php`:

```php
define( 'VANTICO_TURNSTILE_SECRET', '0x...' );
```

## Before going live

### The import replaces the live site

All-in-One WP Migration's *Import* drops the destination database and replaces
`wp-content` with the archive. There is no merge and no per-table choice.
Anything on the live site that is not in the `.wpress` is gone afterwards:
installed plugins **and the settings they store** (API keys, account IDs,
webhook URLs), user accounts, and any content created there.

The one exception worth knowing: **the `/contact` form keeps working**. It is a
LeadConnector iframe embedded in the page content, so it travels with the
content whether or not the LeadConnector plugin is installed.

So, before exporting:

1. **Freeze the live site.** No new plugins, content or settings between now and
   cutover — none of it survives.
2. **Inventory it.** Record the plugin list, each plugin's settings and
   credentials, and the user list with roles. What is not written down cannot be
   restored, because it lives in the database being replaced.
3. **Back it up.** All-in-One WP Migration → *Export → Export to File* on the
   live site, kept somewhere safe. It is the only way back.

### Harden the local site

Run this immediately before taking the migration export:

```bash
./prepare-for-production.sh --check   # report
./prepare-for-production.sh           # apply
```

It turns off `WP_DEBUG`, `WP_DEBUG_LOG` and `WP_DEBUG_DISPLAY`, sets
`DISALLOW_FILE_EDIT` and `WP_ENVIRONMENT_TYPE=production`, deletes any
`debug.log`, revokes application passwords, and regenerates the security salts.

**What actually crosses in the archive**, verified by reading a `.wpress` back:
`database.sql`, `uploads`, `plugins`, `themes`, `index.php`, `package.json`.
**`wp-config.php` is not in it.** So:

- **User accounts do transfer** — they live in the database. The local admin
  password becomes the live one.
- **Application passwords do transfer** — also database rows, which is why the
  script revokes them.
- **wp-config constants do not.** `WP_DEBUG`, `DISALLOW_FILE_EDIT`,
  `WP_ENVIRONMENT_TYPE`, the security salts and the revalidation constants are
  whatever the live server already has. Running `prepare-for-production.sh` puts
  the *local* site in a production-safe state; it does not harden the live one.
  Set those on live directly.

## After the import lands

Not automatable — someone has to do these:

1. **Change the admin password.** The export carries the local one
   (`vantico-local`).
2. **Create a personal account per editor** with the Editor role; stop sharing
   the administrator login.
3. **Verify site URL and home URL** point at the live domain.
4. **Settings → Permalinks → Save** to flush rewrite rules.
5. **Confirm HTTPS is enforced**, including for `/wp-admin`.
6. **Revoke the old Strapi API token** in the Strapi admin — it is still valid
   until you do, regardless of being removed from this repo.
7. **Point the frontend** at the live CMS via `NEXT_PUBLIC_CMS_URL`.
8. **Connect the "Refresh the website" button.** Two ways, depending on whether
   anyone can reach the server's files.

   *With server access* — preferred, because the key stays out of the database
   and therefore out of every backup and export:
   ```bash
   openssl rand -base64 32
   # WordPress wp-config.php
   define( 'VANTICO_FRONTEND_URL', 'https://www.vantico.com' );
   define( 'VANTICO_REVALIDATE_SECRET', '<the secret>' );
   ```

   *Without it* — *Vantico CMS → Site Options → Settings*, press **Generate a
   key**, paste the website address, press Update. Administrators only. The key
   is then stored in the database, so it is included in backups and exports;
   `prepare-for-production.sh` deletes it before an export for that reason, and
   the destination needs its own.

   Either way, set the same value on the frontend as `REVALIDATE_SECRET` (Vercel
   env, all environments) and **redeploy** — env changes do not reach an
   existing deployment.

   Use a **different secret per environment**: one that works on both staging
   and production lets anyone with staging access purge the live cache. Until
   both sides are set the button shows a "not set up yet" notice and
   `/api/revalidate` refuses every request.
8. **Reinstall the plugins live had**, from the inventory above, and re-enter
   their credentials. Reinstalling restores a plugin's code, never its stored
   settings.

## Backups

`backup-wp.sh` dumps the database, the uploads directory and the plugin, with no
plugins or third-party services involved. Suggested cron:

```
15 3 * * * /path/to/backup-wp.sh /var/backups/vantico >> /var/log/vantico-backup.log 2>&1
```

It keeps 14 days by default (`KEEP_DAYS`). **Test a restore before relying on
it** — an untested backup is a guess:

```bash
gunzip -c db-YYYY-MM-DD.sql.gz | mysql -u USER -p DBNAME
tar xzf uploads-YYYY-MM-DD.tar.gz -C wp-content/
```

## Update policy

WordPress core, ACF and All-in-One WP Migration should be kept current — most
WordPress compromises exploit a known, already-patched flaw.

- **Core minor/security releases**: leave automatic updates on.
- **Core major, plugins**: apply monthly, after a backup.
- **Before any update**, run `backup-wp.sh`; afterwards, check
  `/wp-json/vantico/v1/homepage` still returns data and the site still renders.
- Remove plugins you stop using — a deactivated plugin still ships code.

## Out of scope here

- **Hosting-level controls** — WAF, DDoS protection, server-level rate limiting
  and TLS configuration belong to whoever runs the server. A CDN in front of
  WordPress is the most effective single addition.
- **The contact form on `/contact`** is a LeadConnector embed. Its data never
  reaches WordPress; its security posture is LeadConnector's.
