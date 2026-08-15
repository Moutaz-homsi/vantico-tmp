# Vantico CMS — editor manual

Everything you need to run the site's content. No coding.

Developers: see [CMS.md](./CMS.md) for architecture and the REST contract.

---

## Contents

1. [How the site works](#1-how-the-site-works)
2. [Getting around the admin](#2-getting-around-the-admin)
3. [Editing a page](#3-editing-a-page)
4. [The blocks, with examples](#4-the-blocks-with-examples)
5. [Every other content type](#5-every-other-content-type)
6. [Showing your changes straight away](#6-showing-your-changes-straight-away)
7. [Recipes](#7-recipes)
8. [Rules that apply everywhere](#8-rules-that-apply-everywhere)
9. [What you cannot change here](#9-what-you-cannot-change-here)

---

## 1. How the site works

WordPress holds the content. A separate application renders the public site. You
will not see your changes by "viewing" a page from WordPress — open the real site
instead.

**Changes take up to a minute to appear.** The site caches each page for 60
seconds. If an edit hasn't shown up, wait a moment and refresh. A hard refresh
(<kbd>Ctrl</kbd>/<kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>R</kbd>) helps.

**Don't want to wait?** *Vantico CMS → Site Options* has a **Refresh the website
now** button that clears that copy immediately. See
[Showing your changes straight away](#6-showing-your-changes-straight-away).

**Nothing is saved until you press Update** (or *Publish* on a new item).

> ### Only until the site moves
>
> This CMS is being moved onto the live server, and that move **replaces
> whatever is on the live WordPress** — content, accounts and installed
> plugins alike.
>
> Until you are told the move is done: do your work here, and do not add
> content, plugins or settings on the old live WordPress. Anything added there
> will be lost.
>
> After the move, ask a developer to reinstall any plugins the live site had.
> Reinstalling brings back a plugin's features but not its saved settings, so
> logins and API keys have to be entered again. The contact form on `/contact`
> is not affected — it keeps working either way.
>
> *This box can be deleted once the move is finished.*

---

## 2. Getting around the admin

Sign in at `/wp-admin`. The left menu, top to bottom:

| Menu | What it is |
|---|---|
| **Pages** | The site's pages. Their content is built from blocks. |
| **News** | News articles. Ordinary WordPress posts. |
| **Media** | Every uploaded image. |
| **Vantico CMS** | Everything else, grouped: Team, Properties, FAQs, Testimonials, History, Logos, Tenant Logos, Ecosystem Slides, Questions, Homepage, Site Options, and **Reorder News**. Opening it shows the full guide — the same manual as this document. |

Some standard WordPress screens are hidden because this site does not use them
(Comments, and the internal screens behind page blocks). That is deliberate.

---

## 3. Editing a page

**Pages → pick a page.** Under the title is **Page content**: the list of blocks
that make up that page, in the order they appear on the site.

```
┌─ Page content ──────────────────────────────────────┐
│ ↕ ▶ Banner — "Precision. Alignment."         Remove │
│ ↕ ▶ Text content — "Investment Focus"        Remove │
│ ↕ ▶ Banner — "Where We Invest?"              Remove │
│ ↕ ▶ Text content — "Real Estate"             Remove │
│                                                     │
│ Add block [ Text content ▾ ]  [ Add ]               │
└─────────────────────────────────────────────────────┘
```

- **Open a block** — click its header. Click again to collapse.
- **Reorder** — drag the ☰ handle on the left. The top block renders first.
- **Add** — choose a type in the dropdown at the bottom, press **Add**. The new
  block appears at the end, already open; drag it where you want it.
- **Delete** — press **Remove** on the block. It is only really deleted when you
  press **Update**.
- **Save** — press **Update** at the top right. Everything on the page saves at
  once.

> **Newly added blocks** show a plain text box for rich-text fields instead of
> the full editor. Press **Update** once and the full editor appears.

### Images

Any **Select image** button opens the media library: choose an existing image or
upload a new one. **Remove** clears it. Upload images at the size you want them
displayed — the site does not enlarge small images, and very large files slow the
page down.

Some sections have their image **inside the text** rather than in a Background
image field — you will see it in the Content editor itself. Click it there to
select it, then use **Add Media** to swap it, or press Delete to remove it.

The Page screen has no main content box and no Featured image: everything a page
shows comes from its blocks.

---

## 4. The blocks, with examples

Nine block types. Every field is optional unless the example says otherwise.

### Banner

A full-width heading over a background image or video. Used as a page header.

| Field | What it does |
|---|---|
| Title | The heading. Basic HTML such as `<br/>` is allowed to force a line break. |
| Background image | Shown behind the heading. |
| Background video URL | A direct link to an `.mp4`. Takes precedence over the image. |
| Heading CSS class | Advanced styling hook. Leave empty unless a developer gave you a value. |
| Hide backdrop | Removes the dark overlay. Only turn on if the text stays readable. |

> **Example — the header of the Investment Focus page**
> Title: `Precision.<br/> Alignment.<br/> Enduring Value.`
> Background video URL: the drone footage link
> Hide backdrop: off
> Result: full-width video with the heading over it, on three lines.

### Text content

The workhorse: a heading and body text, optionally over a background.

| Field | What it does |
|---|---|
| Title | Section heading. |
| Sub title | Smaller line under the title. |
| Content | The body. Full editor — bold, links, lists. |
| Style | Text alignment: left, right or center. |
| Skin | `Light` = dark text on light background. `Dark` = the inverse. |
| Pattern | Decorative graphic corner: top left, bottom right, or hidden. |
| Background image / video URL | Optional backdrop. |

> **Example — a dark, right-aligned section**
> Title: `Real Estate`
> Content: two paragraphs
> Style: `right`, Skin: `dark`, Pattern: `bottom-right`
> Result: white text on dark, aligned right, with the pattern bottom-right.

### List

A titled section holding repeated items — each with a title, description and
optional image.

| Field | What it does |
|---|---|
| Title / Description | Intro for the section. |
| **List items** | Repeatable. **Add item** for each; drag to reorder. |

> **Example — "Crafting Excellence in Investment"**
> Title: the section heading, Description: the intro paragraph
> Then three items: `Precision`, `Partnership`, `Conviction`, each with a
> sentence and an icon.

### Carousel

A scrolling row of logos or images.

| Field | What it does |
|---|---|
| Title, Description, Sub description | Text above the carousel. |
| Style / Skin / Pattern | As for Text content. |
| **Prebuilt carousel** | Reuses a homepage carousel: `Partners` (the ecosystem slides) or `Tenants` (the tenant logos). |
| **Slides** | Repeatable: image, optional link, "apply mask". |

> **Example A — reuse the partner logos**
> Prebuilt carousel: `Partners`. Leave Slides empty.
> The block then shows exactly what the homepage ecosystem section shows, so
> those logos are maintained in one place.
>
> **Example B — a one-off carousel**
> Leave Prebuilt carousel empty and add slides: one image each, a link if the
> logo should be clickable. "Apply mask" tints a logo to match the design —
> turn it on only if the logo looks wrong in colour.

### Team block

Shows team members you select.

| Field | What it does |
|---|---|
| Title | Section heading. |
| Layout | `Two columns` (grid) or `One column` (stacked, larger). |
| Team members | The people shown, in order. Pick one from the dropdown and press **Add**; drag a row to reorder; **Remove** takes someone out. |

> **Example — leadership on the About page**
> Title: `Our Leadership`, Layout: `One column`, and select the four leaders.
> To change who appears, edit the selection here; to change a person's bio or
> photo, edit them under **Vantico CMS → Team**.

### News

Shows news articles you select.

| Field | What it does |
|---|---|
| Title | Section heading. |
| News items | The articles shown, in order. Pick one from the dropdown and press **Add**; drag a row to reorder; **Remove** takes one out. |

> **Example** — Title: `Recent Articles To Read`, then add the articles you want
> and drag them into the order they should appear.
> Articles themselves are written under **News**. Removing one here only takes
> it off this page; the article itself is untouched.

### Call to action

A short prompt with an optional image.

| Field | What it does |
|---|---|
| Title / Description | The message. |
| Image | Optional. |
| Alignment | left, center, right. |
| Variation | `Small`, `Medium`, or `Two columns`. |

> **Example** — Title: `Ready to invest with purpose?`, Variation: `Two columns`,
> Alignment: `left`, with a photo on the right.

### Cards

A row of small cards, each with an icon.

| Field | What it does |
|---|---|
| Title | Section heading. |
| **Cards** | Repeatable: title, content, icon. |

> **Example** — Title `What Sets Us Apart` and three cards: `Focused Expertise`,
> `Intelligence-Led Strategy`, `Proven Execution`, each with a sentence and an
> icon.

### Automatic list

Lists content automatically, so it stays current without anyone editing the page.

| Field | What it does |
|---|---|
| Title / Description | Text above the list. |
| **Show** | `Latest news` — news articles, newest first. `Team members` — the team, in their Order. `Properties` — properties, in their Order. |
| **How many** | Empty or `0` shows everything; a number caps the list. |

> **Example — the /news page**
> Title: `News & Events`, Show: `Latest news`, How many: `6`
> Result: the six newest articles, and a new one joins the list the moment you
> publish it — no page edit needed.
>
> The block renders nothing at all if there is no matching content yet.
> To pick specific articles by hand instead, use the **News** block.

---

## 5. Every other content type

### News

Ordinary WordPress posts. **News → Add New**.

- **Title**, **Featured image** (the thumbnail in listings) — standard.
- **Excerpt** — the short summary shown on news cards and listings. The 16
  migrated articles have their text here, because that is all the old system
  ever held for them.
- **Body** (the main editor) — the full article. Empty on the migrated articles;
  write here and the article page shows it instead of the summary.
- **Publish date** is the article date shown on the site. By default newest
  sorts first; change it under *Publish → Immediately → Edit*.
- **To choose the order yourself**, use **Vantico CMS → Reorder News**: drag the
  articles into the sequence you want and press *Save order*. That order is used
  on `/news` and in every Automatic list. Articles published afterwards join the
  top until you reorder again.
- **External URL** (below the editor) — set this to point the article at its
  original source instead of a page on this site.
- The **URL slug** comes from the title; edit it under the title if needed.
  Changing it breaks existing links to that article.

### Team

Each member: **Title** = their name, plus Role, Position, Bio, LinkedIn link,
Image, Mobile image (a portrait crop for phones), and Rank.

Order on the site comes from the **Order** field under *Page Attributes*, not
from Rank — Rank is left over from the old system. Lower Order shows first.

### Properties

The homepage property carousel. Name, description, image, and **Order**.

### FAQs, Testimonials, History, Logos

Homepage lists. Each entry is one row; **Order** controls the sequence.

- **FAQs** — question and answer.
- **Testimonials** — author, their role, the quote, and an avatar.
- **History** — title, description, image.
- **Logos** — title and image.

### Tenant Logos

The three scrolling rows of tenant logos. Upload the logo, then tick a **Tenant
Row** (first, second or third) in the sidebar — that decides which row it joins.
**Order** positions it within the row.

### Ecosystem Slides

The three ecosystem carousels, same idea: image, optional link, "apply mask", and
a **Slider Group** (first, second, third) in the sidebar.

### Questions

Submissions from the site's question form — read-only records. Nothing to edit.

### Homepage

One screen, not a list: hero video URL, Calendly link, video ID, and the founder
philosophy section (image and text). Leave the philosophy fields empty to keep
the built-in wording.

The rest of the homepage — the ecosystem carousels, tenants, property tour, FAQs
— comes from the sections above.

### Site Options

ROI percentage and the footer video URL. Used across the site. This screen also
holds the **Refresh the website now** button, below.

---

## 6. Showing your changes straight away

*Vantico CMS → Site Options → **Show my changes on the website now***

The website keeps a copy of each page for up to a minute so it loads quickly.
That copy is why a change you just saved can take a moment to appear.

**Refresh the website now** throws that copy away, so the very next visitor —
including you — gets the newest version.

- You never *have* to press it. Changes go live on their own within a minute.
- Press it when you want to check something immediately, or when a page still
  looks out of date after a minute has passed.
- It affects the whole site, not just the page you were editing.
- Pressing it twice in a row is refused for a few seconds; that is normal and
  nothing has gone wrong.

**"Could not reach the website"** means the site is down or the address is
wrong. **"The website rejected the request"** means the key on the two sides no
longer matches. Both need a developer — nothing you can fix from here, and
neither affects your saved content.

If the button is missing and you see a yellow "not set up yet" note instead, it
still needs connecting. An administrator can do that on the same screen, under
**Settings**: press **Generate a key**, fill in the website address, press
**Update** — then give that key to whoever manages the website, because the
identical value has to be saved there too. Nothing happens until both sides
match.

---

## 7. Recipes

**Publish a news article**
1. News → Add New. 2. Title and body. 3. Set the Featured image. 4. Set the
publish date if it is not today. 5. Add an External URL if it lives elsewhere.
6. Publish. 7. Check `/news` after a minute.

**Change the order articles appear in**
1. Vantico CMS → Reorder News. 2. Drag articles into the order you want — the
top of the list is first on the site. 3. Save order. 4. Check `/news` after a
minute.

**Add a team member and show them on a page**
1. Vantico CMS → Team → Add New; name as the title, fill Role, Bio, Image.
2. Set **Order** to place them in the list. 3. Publish.
4. Pages → the page → open its **Team block** → add the new person → Update.

**Swap a tenant logo**
1. Vantico CMS → Tenant Logos → open the entry. 2. **Remove** the image, then
**Select image** and upload the new one. 3. Keep the same Tenant Row and Order so
nothing shifts. 4. Update.

**Reorder the ecosystem carousel**
Vantico CMS → Ecosystem Slides. Edit each slide's **Order** — lower first. Slides
in the same group scroll together.

**Change the ROI figure**
Vantico CMS → Site Options → ROI percentage → Update. It is a decimal: `0.1`
means 10%.

**Add a section to an existing page**
1. Pages → the page. 2. At the bottom of **Page content**, pick a block type and
press **Add**. 3. Fill it in. 4. Drag it into position. 5. Update.

---

## 8. Rules that apply everywhere

- **Order** (under *Page Attributes*) drives every list. Lower numbers first.
  Ties fall back to newest first, so give every item a distinct number.
- **Publishing status** matters: drafts do not appear on the site.
- **Deleting** removes content from the site as soon as the cache expires. Items
  go to Trash first and can be restored from there.
- **Images**: use the media library rather than pasting image URLs. Give images a
  meaningful filename before uploading; it becomes part of the URL.
- **Alt text** on an image (set in the media library) is what screen readers and
  search engines read.

---

## 9. What you cannot change here

These live in the site's code — ask a developer:

- **The navigation menu** (the header links and dropdowns).
- **The contact form** on `/contact`. It is an embedded LeadConnector form:
  submissions go to LeadConnector, not to WordPress, and the recipient address is
  configured there. (The separate *question* form does save here, under
  **Questions**.)
- **The Products pages** — placeholder content, not connected to the CMS.
- **The investor portal.** `/lp-access` simply redirects to
  `signin.vantico.com`; the portal itself is a separate system.
- **Arabic content.** The `/ar` version shows translated labels but the same
  content; there is no separate Arabic copy to edit.
- **Homepage sections** other than those listed above — the About, philosophy
  intro, globe and partnership sections are built in code.
