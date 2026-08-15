# CMS — developer reference

WordPress is the content store; this Next.js app renders it. WordPress serves no
pages of its own — it exposes a small custom REST API and nothing else.

Content previously lived in Strapi; that backend is retired.

- Editors should read [CMS-GUIDE.md](./CMS-GUIDE.md) instead of this document.
- Security posture, hardening and the cutover checklist: [CMS-SECURITY.md](./CMS-SECURITY.md).

---

## Content model

| wp-admin | Post type | Was in Strapi |
|---|---|---|
| News | `post` (core, relabelled) | `new` collection |
| Pages | `page` (core) | `page` collection |
| Homepage | `vt_homepage` (single) | `homepage` single type |
| Site Options | `vt_option` (single) | `option` single type |
| Team | `vt_team` | `team` collection |
| Properties | `vt_property` | `property` collection |
| FAQs | `vt_faq` | `elements.faq-item` |
| Testimonials | `vt_testimonial` | `elements.testimonials` |
| History | `vt_history` | `pages.list-item` |
| Logos | `vt_logo` | `pages.list-item` |
| Tenant Logos | `vt_tenant` (+ `vt_row` taxonomy) | `elements.tenants` |
| Ecosystem Slides | `vt_slide` (+ `vt_slider_group`) | `pages.ecosystem` |
| Questions | `vt_question` | `question` collection |
| — hidden — | `vt_block`, `vt_block_item` | `page.blocks` dynamic zone |

Strapi's repeatable components became post types because ACF Free has no
Repeater field; named groupings (three tenant rows, three ecosystem sliders) are
taxonomy terms.

**News uses core posts.** Title, body, excerpt, featured image, slug and publish
date are all native — only `external_url` is a custom field.

`GET /news` returns both `content` (the body, run through `the_content` so it
arrives as ready-to-render HTML) and `excerpt` (the summary, falling back to a
40-word trim of the body when the Excerpt box is empty). Everything migrated
from Strapi has an excerpt and an empty body: every value Strapi stored in
`content` was a 109–148 character teaser, so
`move-news-content-to-excerpt.php` moved them into the excerpt. The article page
renders `content` when present and falls back to `excerpt`. The publish date *is* the
article date and the sort key. Note that ACF field groups must not set
`hide_on_screen => ['the_content']` for any type that stores `post_content`; the
`$hideContent` argument of `vantico_register_group()` controls this.

**News ordering** lives in `menu_order` too, but is edited on its own screen
(*Vantico CMS → Reorder News*, `includes/news-order.php`) because core posts have
no Order box. `vantico_news_order_args()` is the single sort definition shared by
the news endpoint and the Automatic list: `menu_order ASC, date DESC, ID DESC`.
The ID is the tiebreak — two articles published the same day otherwise come back
in an order MySQL is free to vary between requests. Zero means
"never ordered by hand", so newly published articles sort to the top until
someone saves an order, and saving renumbers everything from 1.

**Ordering** is `menu_order` everywhere else. Team and Property entries also
carry Strapi's `rank`, which is *not* used for ordering — those ranks contain
ties and nulls and do not define a total order. The migration seeded
`menu_order` from the order the live site rendered.

Not migrated: `project` and `review` (empty upstream, no consumer).

---

## Page blocks

Blocks are `vt_block` posts holding `page` and `block_type` meta; nested rows are
`vt_block_item` posts holding `block` and `item_kind`. Both are hidden from the
admin menu and edited inline on the page screen
(`vantico-cms/includes/page-editor.php`).

`page` has `editor` and `thumbnail` support removed (`includes/admin.php`):
`GET /pages/slug/{slug}` returns only `id`, `title`, `slug` and `blocks`, so a
page's `post_content` and featured image are never read. Left enabled they put an
empty full-height editor and an unused Featured image box above the blocks,
which read as the place to write the page.

**Images inside rich text.** Strapi emitted `<image src="…">`, which is not a
real element — browsers alias it to `<img>` while parsing, so the site rendered
it, but `wp_kses` saw an unknown tag and stripped it: opening such a block and
pressing Update deleted the image, and the editor showed nothing to click.
`normalize-content-images.php` rewrote all 7 to `<img>`, and
`adopt-embedded-images.php` moved the files they pointed at from the old server
into the media library. Both are idempotent.

**Pages and News need the classic editor screen**, and
`use_block_editor_for_post_type` in `includes/admin.php` forces it — no Classic
Editor plugin required. The blocks metabox and ACF's `hide_on_screen`
(which removes the unused `post_content` box on pages) would otherwise sit below
an empty block canvas. Custom post types are unaffected: none support `editor`.

`vantico_block_schema()` in `vantico-cms/includes/block-schema.php` is the single
source of truth: it drives the editor UI, the sanitizing, and the REST
serializer. `__component` names are unchanged from Strapi because
`src/components/page-builder/page-builder.jsx` switches on them.

| Block | `__component` |
|---|---|
| Text content | `pages.text-content` |
| Banner | `pages.banner` |
| List | `pages.lists` (+ items) |
| Team block | `pages.team-block` |
| News | `pages.news` |
| Carousel | `pages.css-carousel` (+ slides) |
| Automatic list | `pages.query` |
| Call to action | `pages.cta` |
| Cards | `elements.cards-block` (+ cards) |

`pages.query` is resolved server-side: `vantico_query_results()` fills a
`results` array from its `type` (`new`, `team`, `property`) and `limit`, so the
frontend renders a ready-made list. Two REST-name overrides live in the schema
as `rest_key`: the carousel's
`description_rich` is exposed as `description`, and nested rows are exposed under
their Strapi names (`items`, `slide_item`, `cards`).

---

## Data flow

```
WordPress  →  /wp-json/vantico/v1/*  →  src/lib/cms/  →  components
```

- `client.ts` — `cmsFetch()`; base URL from `NEXT_PUBLIC_CMS_URL`, 60s ISR.
- `queries.ts` — `getOptions`, `getHomepage`, `getNews`, `getNewsBySlug`,
  `getNewsSlugs`, `getProperties`, `getTeams`, `getPageSlugs`, `getPageBySlug`,
  `submitQuestion`.
- `media.ts` — `getMediaUrl()`, `getMediaAlt()`.
- `types.ts` — response shapes.

| Endpoint | Returns |
|---|---|
| `GET /option` | `{ menu, roi_percentage, footerVideoUrl }` |
| `GET /homepage` | homepage fields + `faq`, `history`, `testimonials`, `logos`, `tenants`, `ecosystem_sliders` |
| `GET /news` | news list; `?slug=`, `?exclude=`, `?limit=`, `?fields=slug` |
| `GET /properties`, `GET /teams` | ordered lists |
| `GET /pages/slugs` | `[{ id, slug, title }]` |
| `GET /pages/slug/{slug}` | `{ id, title, slug, blocks[] }` |
| `POST /questions` | creates a submission |

### On-demand revalidation

`POST /api/revalidate` — a Next.js route, not a WordPress one. It calls
`revalidatePath("/", "layout")`, which clears every route under the root layout,
and is what the **Refresh the website now** button on the Site Options screen
calls (`vantico-cms/includes/revalidate.php`).

Authenticated with a shared secret in the `x-vantico-secret` header, compared
with `timingSafeEqual`; the caller is WordPress and has no session here. With
`REVALIDATE_SECRET` unset the route returns **501 and revalidates nothing**,
rather than running unguarded. Both sides must agree:

| Side | Where | Name |
|---|---|---|
| Next.js | env | `REVALIDATE_SECRET` |
| WordPress | `wp-config.php` | `VANTICO_REVALIDATE_SECRET` |
| WordPress | `wp-config.php` | `VANTICO_FRONTEND_URL` (no trailing slash) |

The secret lives in `wp-config.php` rather than an option, so it never travels
in a `.wpress` export or appears on an admin screen. WordPress throttles to one
call per 30 seconds and stores the last run in the `vantico_revalidate_last`
option. Without the constants the button is replaced by a "not set up yet"
notice, so a missing config is visible rather than silent.

Responses are bare objects and arrays — no Strapi-style `data` envelope.

**The endpoints are shaped to match what the components already expected from
Strapi**, which is why the migration changed no component props. If a component
renders wrong, fix the endpoint, not the component.

Authenticated `/import/*` routes (`vantico-cms/includes/import.php`) exist for
the migration scripts: `entity`, `lookup`, `stats`, `reset`. They require
`manage_options`.

Custom post types, their ACF fields and the internal taxonomies are registered
with `show_in_rest => false`: the frontend reads only through `vantico/v1`, and
publishing them at `/wp/v2/<type>` would expose contact-form submissions to
anonymous callers. See [CMS-SECURITY.md](./CMS-SECURITY.md).

---

## Writing content from another system

Nothing here restricts what else can be installed on the WordPress side — it is
a standard site with one extra plugin. An integration that wants to create
content should know the following.

**News are core posts.** `POST /wp-json/wp/v2/posts` works normally: title,
body, excerpt, featured image, date, slug. `external_url` is post meta. This is
the supported path and needs no custom code.

**Pages are core pages, but a page's content is not `post_content`.** It is a
set of `vt_block` posts, which are registered `show_in_rest => false` on
purpose. `POST /wp-json/wp/v2/pages` therefore creates a page that renders
nothing; someone still has to build its blocks in wp-admin. A system that must
generate whole pages unattended needs a write endpoint added to `vantico/v1`
first — `vantico_block_schema()` already describes every field, so such an
endpoint would validate against it rather than duplicating the shape.

Two consequences of the hardening in
[CMS-SECURITY.md](./CMS-SECURITY.md) that surprise integrators:

- **XML-RPC returns 403.** Older "post to WordPress" connectors use it and will
  fail. Use the REST API with an application password.
- **`/wp-json/wp/v2/users` returns 404 to anonymous callers** but works for
  authenticated ones, so a signed integration is unaffected.

---

## Adding a block type

1. Add an entry to `vantico_block_schema()` — fields, input types, optional
   repeatable `items`. This drives the editor and the API together.
2. Add an input renderer in `vantico-cms/includes/field-renderers.php` only if
   you need a type beyond text, textarea, wysiwyg, url, number, media, select,
   toggle, relationship.
3. Add a `case` in `src/components/page-builder/page-builder.jsx` and write the
   component.
4. Extend `CmsBlock` in `src/lib/cms/types.ts` if it needs a specific shape.

No REST work: `vantico_serialize_block()` reads the schema.

---

## Local setup

WordPress runs on the system PHP and MySQL — no containers. It lives beside this
repo, in `../vantico-wp/`, which is not a git repository and is not deployed;
its own `SETUP.md` covers the tooling and the cutover.

```bash
cd ../vantico-wp && ./wp-up.sh   # http://localhost:8080, idempotent
./wp-up.sh stop
cd ../vantico-frontend && npm run dev   # http://localhost:3000
```

WordPress at `/wp-admin` is `admin` / `vantico-local`; the database is
`vantico_wp`, user `vantico` / `vantico`.

`NEXT_PUBLIC_CMS_URL` selects which WordPress the site reads — it is the only
backend variable the app has.

> This machine's `~/.npmrc` points at `registry.npmmirror.com`, which is
> unreachable — npm needs `--registry=https://registry.npmjs.org`.

Checks:

```bash
node verify-against-cache.mjs                          # REST output vs. the frontend's fetch cache
php wp-cli.phar --path=wordpress --allow-root eval-file test-editor-save.php
```

`compare.mjs` checked the data against the Strapi export; that export and its
API token are gone, so it needs a fresh `STRAPI_TOKEN` and a re-run of
`export-strapi.mjs` before it will work again.

---

## Known quirks

- **`/contact` embeds a LeadConnector (GoHighLevel) iframe** inside a
  text-content block. Submissions never reach WordPress; a `429` in the console
  is that service rate-limiting. Rich-text fields therefore allow `iframe` with
  `data-*` attributes (`vantico_allowed_embed_html()`).
- **Navigation is hardcoded** in `src/components/ui/header/nav-menu.tsx`.
  Strapi's `option.menu` was always empty, and `vt_menu_item` is hidden.
- **`/lp-access` redirects to `signin.vantico.com/account/login`.** It used to
  host a login form that authenticated against Strapi and then discarded the
  result; the portal is a separate system.
- **`/products` is mock data.**
- **`/ar` is not translated content** — no Strapi type was ever localised; only
  UI strings in `src/i18n/messages/ar.json` differ.
- **News slugs were generated during migration**: every Strapi item had
  `slug: null`, so `/news/[slug]` produced `undefined` links and detail pages
  were unreachable.
- **13 images could not be migrated** (6 history, 4 logos, 3 testimonial
  avatars) — those files already 404'd on the Strapi server. None are rendered
  by the current homepage.
- **The homepage is mostly hardcoded React**
  (`src/components/pages/home/index.tsx`); only the hero video, Calendly link,
  ecosystem sliders, tenant rows and property tour come from the CMS.
