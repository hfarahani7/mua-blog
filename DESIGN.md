---
# DESIGN.md — design system for jeanicehuangbridal.com
# Source: the Google Stitch "Atelier Editorial" design in references/stitch/
# (DESIGN.md = Stitch's spec, code.html = Stitch's mockup, screen.png = screenshot).
# Stitch's visual system is kept; its sample content (names, prices, press, testimonials,
# address, stats, stock photos) is NOT. See "Banned for this site".
name: "Jeanice Huang"
direction: "Atelier editorial: quiet, warm, photo-first"

colors:
  # Reconciled from Stitch: its prose names Obsidian/Champagne/Umber/Alabaster, its tokens and
  # mockup use slightly different values. Canvas and surfaces follow the mockup (what the
  # screenshot shows); ink follows the prose (#1A1715 instead of pure black).
  canvas:        "#FCF9F4"   # page background (Stitch surface/background)
  canvas-low:    "#F6F3EE"   # alternate section background (Stitch surface-container-low)
  canvas-mid:    "#F0EDE9"   # footer, image placeholders (Stitch surface-container)
  card:          "#FFFFFF"   # raised panels: form card, portfolio frames (Stitch surface-container-lowest)
  ink:           "#1A1715"   # headings, primary text, primary buttons, active states (Stitch "Obsidian")
  ink-hover:     "#322E2B"   # primary button hover
  ink-soft:      "#4D4540"   # body copy, nav links, field labels (Stitch on-surface-variant) — 9:1 on canvas
  umber:         "#745943"   # eyebrows, category labels (Stitch secondary) — 5.9:1 on canvas, OK for small text
  champagne:     "#C9A88E"   # decorative only: eyebrow rule, focus accent. NEVER for text (2.2:1)
  muted:         "#7E7570"   # large text (18px+) and placeholder-adjacent hints only — 4.1:1, fails for small text
  line:          "rgba(26, 23, 21, 0.08)"   # hairlines: section dividers, card frames
  line-strong:   "rgba(26, 23, 21, 0.20)"   # form field bottom borders
  error:         "#BA1A1A"   # form error text and field border
  on-ink:        "#FCF9F4"   # text on ink buttons

typography:
  display:
    family: "Bodoni Moda"         # @fontsource-variable/bodoni-moda (incl. italic)
    fallback: "Georgia, 'Times New Roman', serif"
    weights: [400, 500]
    use: "h1, h2, h3, wordmark, FAQ questions, italic emphasis"
  body:
    family: "Manrope"             # @fontsource-variable/manrope
    fallback: "'Helvetica Neue', Arial, sans-serif"
    weights: [300, 400, 500, 600]
    use: "Body copy, labels, nav, buttons, form fields"
  scale:                          # size / line-height / tracking / weight (from Stitch)
    display-lg:        "3.75rem / 4.25rem / -0.015em / 400"   # h1, md and up
    display-lg-mobile: "2.25rem / 2.75rem / -0.01em / 400"    # h1 on mobile
    headline-lg:       "2.5rem / 3rem / -0.01em / 400"        # h2, md and up
    headline-lg-mobile:"1.75rem / 2.25rem / 0 / 400"          # h2 on mobile
    headline-md:       "1.75rem / 2.25rem / 0 / 400"          # wordmark
    headline-sm:       "1.25rem / 1.75rem / 0.01em / 500"     # h3, captions, FAQ questions
    body-lg:           "1.125rem / 1.875rem / 0.01em / 300"   # lead paragraphs
    body-md:           "1rem / 1.625rem / 0.01em / 300"       # body
    body-sm:           "0.875rem / 1.375rem / 0.015em / 400"  # footer text, helper text
    label-md:          "0.75rem / 1rem / 0.12em / 600"        # nav, buttons (uppercase)
    label-sm:          "0.6875rem / 0.875rem / 0.16em / 600"  # eyebrows, field labels, captions (uppercase)
  measure: "36rem"                # max-w-xl for body paragraphs

spacing:
  base: "4px"
  gutter-mobile: "1.5rem"         # px-6
  gutter-desktop: "4rem"          # md:px-16
  grid-gap: "2.5rem"              # lg:gap-gutter-desktop
  section-y: "6rem / 8rem"        # py-24 md:py-32
  max-width: "80rem"              # max-w-7xl (1280px), as in the mockup

radius:
  default: "0"                    # every box, button, input and image is square
  round: "50%"                    # only tiny dots/indicators

shadow:
  float: "0 24px 48px -12px rgba(26, 23, 21, 0.06), 0 4px 12px -2px rgba(26, 23, 21, 0.03)"   # the form card only

motion:
  duration-fast: "200ms"
  duration-base: "300ms"
  duration-image: "600ms"
  ease: "cubic-bezier(0.2, 0.8, 0.2, 1)"
---

# Design system

## Direction

Quiet, warm and photo-first, like a well-printed bridal lookbook. The interface is a pale frame that steps back so Jeanice's photos do the work. Sharp square edges, hairline rules and lots of air; softness comes from the photos and the serif, never from rounded UI.

Three words: **serene, editorial, warm.**
It should never feel: flashy, corporate, cute, or "luxury brand cosplay" (no fake French, no invented prestige).

References in `references/stitch/` and what to take from each:
- `screen.png` / `code.html`: the overall look. Header, split hero, asymmetric 7/5 image grid with captions below, portrait + text "about" split, centered section intros, form card with bottom-line inputs, footer layout. Use `code.html` for exact class values.
- `DESIGN.md`: the token values, the type pairing and the component rules below.

## Color

Each color has one job. Don't introduce new colors; if something seems to need one, ask.

| Token | Job |
|---|---|
| `canvas` | Default page background |
| `canvas-low` | Every second section (Recent Looks, Services, etc.), to make rhythm without boxes |
| `canvas-mid` | Footer background; placeholder behind images while they load |
| `card` | The form card and portfolio image frames only |
| `ink` | Headings, primary buttons, active nav underline, focus outline |
| `ink-soft` | Body copy, nav links, form labels |
| `umber` | Eyebrows and category labels (uppercase `label-sm`) |
| `champagne` | The short rule before an eyebrow, and the focus accent under a field. Never text |
| `muted` | Only for 18px+ text. Never for labels, captions or body |
| `line` / `line-strong` | Hairline borders and dividers / form field underlines |
| `error` | Form error messages and the errored field's underline |

No gradients (Stitch's dark gradient over the hero photo is dropped). No transparency over photos except a flat `ink` scrim at 30–50% if text must sit on a photo; prefer putting text beside photos instead.

## Typography

- **Bodoni Moda** for headings and the wordmark, weight 400 (500 for `headline-sm`). Sentence case or title case. Never uppercase, except the wordmark (below).
- **Manrope** for everything else. Body is weight 300 at `body-md`/`body-lg`. Labels, eyebrows, nav and buttons are uppercase Manrope 600 with wide tracking (`label-md`, `label-sm`).
- **Wordmark:** "Jeanice Huang" in Bodoni Moda, `headline-md`, uppercase, `tracking-tight`, as in the Stitch header. (Stitch's own rule bans uppercase Bodoni; the wordmark is the one exception, because it's what the mockup shows.) This replaces the old Mr De Haviland script wordmark.
- **Italic Bodoni** can emphasize one phrase in a headline or a short quote. At most once per section.
- **Eyebrows:** an 32px × 1px `champagne` rule, then `label-sm` uppercase in `umber`. Use one per section at most, not on every block.
- Body text: max width `measure`, left-aligned. Centered text only for short section intros (two lines max) and the 404 page.
- Headings follow page structure: one `h1` per page, then `h2` per section, `h3` inside.

## Layout

- Container: `max-w-7xl mx-auto px-6 md:px-16`. Sections: `py-24 md:py-32`, alternating `canvas` and `canvas-low` with a `line` top border.
- 12-column grid at `lg`. Pair spans asymmetrically: 6/6 for the hero, 5/7 or 7/5 for image + text. On mobile, everything is one column with images first only where the image is the point.
- Image aspect ratios: 4:5 for portraits (default), 3:4 for close-ups, 1:1 for square slots, 16:10 for landscape. Crop with `object-cover`; pick the photo for the slot rather than forcing a landscape photo into a tall frame.
- No card grids of identical items. Lists are typographic rows divided by `line` rules.
- Mobile: the primary action ("Inquire") is visible in the header on every page.

## Page plan (Stitch sections mapped to this site)

| Page | Sections |
|---|---|
| **Home `/`** | **Hero** (Stitch split hero): eyebrow, `h1`, lead paragraph, primary "Inquire" + secondary "View portfolio" buttons; 4:5 photo right with the offset hairline frame. No stats row. → **Recent Looks** (`canvas-low`, Stitch "portfolio" grid 7/5 then 5/7): the 4 existing photos with a `label-sm` category under each, plus the Instagram text link. → **About Me** (Stitch "philosophy" split): headshot 5 cols, existing About copy 7 cols, then two image links "Bridal" → `/portfolio#bridal` and "Studio" → `/portfolio#studio`. → **Inquiry prompt** (centered intro + primary button to `/inquiries`). |
| **Portfolio `/portfolio`** | Section intro (eyebrow, `h1`), then two chips "Bridal" / "Studio" that are anchor links (not filters). Then `#bridal` and `#studio`, each an `h2` and a CSS-columns masonry (1 col mobile, 2 at `md`, 3 at `lg`), each photo in a `card` frame with `p-3` and the hover zoom. No captions (we don't have real ones). |
| **Services `/services`** | Centered intro (`h1`). Services as a typographic list: rows divided by `line`, each a `headline-sm`. FAQ as Stitch "Service & Pricing Accords": `<details>` rows divided by `line`, question in `headline-sm`, answer in `body-md`. No prices, no cards. |
| **Inquiries `/inquiries`** | Stitch inquiry split: left 5 cols eyebrow, `h1`, short intro, and the `Dana-28` photo (4:5) in place of Stitch's studio-details card; right 7 cols the form in a `card` with `shadow.float`, `p-8 md:p-12`. |
| **404** | Centered `h1`, one line of body, primary button home. |

## Photos

Use only the existing photos on CloudFront (see `CLAUDE.md` → Images). Suggested slots:
- Home hero: `Kath_Matt_JeanLaurentGaudy_417.webp` (the old hero). If its crop doesn't work at 4:5, propose another existing bridal photo.
- Recent Looks: `IMG_6084`, `IMG_4037`, `IMG_9555`, `IMG_8632` (the old grid, same order).
- About: `IMG_4382` (headshot). Not grayscale; keep the photo's own color. Bridal/Studio links: `IMG_6087` and `C9FBB259-D95B-4990-9992-CFF20769905C`.
- The old parallax break `IMG_6091` may be used as a 16:10 banner between home sections, or dropped.
- Inquiries: `Dana-28`.
- Portfolio: all 35 Bridal and 14 Studio photos, in the old order.

Treatment: no filters, no grayscale, no overlays. Frames are `card` with a `line` border and `p-3`, or flush on the canvas.

## Components

**Header.** Sticky, solid `canvas` background (no blur), `line` bottom border, `py-5`. Wordmark left (link to `/`). Desktop: Portfolio, Services, Inquiries in `label-md` uppercase `ink-soft`; the current page in `ink` with a 1px `ink` underline (`aria-current="page"`). Right: a small primary button "Inquire" → `/inquiries`. Mobile: wordmark + "Inquire" button + a "Menu" button that opens a full-screen `canvas` panel with the three links in Bodoni at `headline-lg`. The home page uses the same header as every other page.

**Primary button.** `ink` background, `on-ink` text, `label-md` uppercase, padding `1rem 2.25rem` (`px-9 py-4`), square. Hover: `ink-hover`, `duration-base`. Focus: 2px `ink` outline, 3px offset. One primary button per screen.

**Secondary button.** Transparent, 1px `ink` border, `ink` text, same size. Hover: fills `ink`, text `on-ink`.

**Text link.** `label-md` uppercase (or inline body), `ink`, with a 1px underline 4px below the baseline that grows from 0 to 100% width on hover/focus, `duration-base`.

**Chips.** `label-sm` uppercase, padding `0.625rem 1.25rem`, 1px `line` border, `ink-soft` text; hover border and text go `ink`. Active/current: `ink` background, `on-ink` text. Minimum 44px tap height.

**Image frame.** `overflow-hidden`, `canvas-mid` background while loading. Hover (pointer devices only): image scales to 1.025 over `duration-image` with `ease`.

**Captions.** Below the image, never on it: `label-sm` uppercase `umber` category, optional `headline-sm` title. Don't invent titles.

**Form.** `card` panel, `shadow.float`, `p-8 md:p-12`. Labels above fields: `label-sm` uppercase `ink-soft`. Fields: transparent background, only a 1px `line-strong` bottom border, `py-3`, `body-md` in `ink`. Focus: bottom border becomes 1px `ink` plus a 2px `champagne` underline accent (`box-shadow: 0 2px 0 0 champagne`) and a visible focus ring for keyboard users. Two-column rows at `md` (first/last name, email/phone, city/state/ZIP). Checkboxes: square, `accent-color: ink`. Native `<input type="date">` and `<select>` (no custom calendar). Error text under the field in `body-sm` `error`. Submit: full-width primary button. Success message replaces the form in place: `headline-md` + `body-md`.

**Accordion (FAQ).** `<details>` / `<summary>`, rows divided by `line`, `py-6`. Summary: `headline-sm` Bodoni + a thin plus/minus drawn in CSS on the right. Answer: `body-md` `ink-soft`, max `measure`.

**Footer.** `canvas-mid` background, `line` top border, `py-16`. Left (5 cols): wordmark + Instagram text link (@mua__jeanice). Middle (3 cols): Portfolio, Services, Inquiries links in `body-sm`. Bottom row above a `line`: "© {year} JEANICEHUANGMUA LLC. All Rights Reserved." left, "Built by Henry Farahani · henryfarahani.com" right, `label-sm` uppercase `ink-soft`.

## Motion

Motion should feel like a page settling, not a show.

- Page load: nothing animates except the home hero text block, which fades in and rises 16px over 600ms with `ease`.
- Scroll: sections may fade in and rise 16px once as they enter (CSS scroll-driven animation, `animation-timeline: view()`, with no-JS fallback = visible). Don't animate individual photos in the portfolio grid.
- Hover: color, border and underline changes at `duration-fast`/`duration-base`; image zoom to 1.025 at `duration-image`. No movement of buttons.
- Mobile menu: fades in at `duration-base`; no sliding drawer.
- Never: bouncing, spinning, parallax on text, scroll-jacking, `background-attachment: fixed`, entrances from `scale(0)`, animated gradients, cursor effects.
- `prefers-reduced-motion: reduce` → no movement and no zoom; instant opacity changes only.

## Banned for this site

In addition to the list in `CLAUDE.md`:
- **Any content from the Stitch mockup**: "Maison Visage", "Camille Laurent", prices, the "10+ Years / 500+" stats, testimonials, press logos (Vogue, Bazaar…), brand kit list (Dior, Chanel…), "18 weddings per season", SoHo address, hours, concierge email, Pinterest, the "Parisian Signature" image badge, the pillars cards ("Hospital-Grade Asepsis"…). None of it is true for this business.
- Stitch's Google-hosted stock photos (`lh3.googleusercontent.com`). Only CloudFront photos.
- Material Symbols / icon fonts. If an icon is truly needed (menu, Instagram), use a small inline SVG with `aria-hidden="true"` and a text label.
- Google Fonts and the Tailwind CDN. Fonts come from `@fontsource`; Tailwind is built.
- `backdrop-blur` / glass panels (Stitch uses them on the header and image badges; use solid surfaces).
- Gradient overlays on photos. Grayscale filters on photos.
- The fake interactive calendar. Use a native date input.
- Category "filter" buttons that don't filter. Chips on the portfolio page are anchor links.
- Pricing cards, or any price.
- Dark mode (Stitch's `dark:` classes are ignored).
- Rounded corners on anything except tiny dots.
- `alert()` dialogs.
- Fake French or "atelier" vocabulary in copy ("Haute Beauté", "commission", "transmit request", "concierge desk").

## Copy voice

Use the existing copy in `BRIEF.md` first. Where something new is needed (eyebrows, page intros, button labels, titles), write the way Jeanice already writes: warm, plain and personal. Short sentences, first person ("I specialize in…") on Home and About, and "we" only where the existing FAQ already uses it. Concrete facts that are already on the site (on-location, Long Island and NYC, trials, deposit) over adjectives. No invented claims, numbers or credentials. Exclamation marks only where the existing copy already has one ("Yes!"). Button labels are short verbs: "Inquire", "View portfolio", "Send inquiry". Mark every new line of copy with a `TODO:` comment in the code so the owner can approve it.
