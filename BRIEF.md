# BRIEF.md

The brief for this site. Items marked `TODO` need an answer from the owner. Everything else was taken from the existing Next.js site (as of the Astro migration, November 2026). Short, specific answers beat long ones.

## 1. The basics

- **Name:** Jeanice Huang (business: JEANICEHUANGMUA LLC)
- **Domain:** `jeanicehuangbridal.com`
- **What it is, in one sentence:** A bridal hair and makeup artist who works on location throughout Long Island and NYC.
- **Why this site exists now:** TODO (e.g. "So couples can see the work and send a wedding inquiry without DMing on Instagram.")

## 2. The one thing visitors should do

- **Primary action:** Send a wedding inquiry through the form on `/inquiries`.
- **What happens when they do it:** The form emails the owner through EmailJS, with the visitor's email as reply-to. TODO: how and when does Jeanice follow up?
- **Secondary action:** Look at the portfolio (Bridal and Studio), and follow on Instagram ([@mua__jeanice](https://www.instagram.com/mua__jeanice/)).

Every page should make the primary action obvious within the first screen on a phone.

## 3. Who it's for

- **Main visitor:** TODO (assumed: engaged couples, mostly brides, planning a wedding in Long Island / NYC, mostly on phones)
- **What they already know when they arrive:** TODO
- **What they're worried about or need to know before acting:** TODO (the existing FAQ covers trials, travel, deposit, prep and location; see below)

## 4. How it should feel

- **Three words:** TODO, TODO, TODO (the old site was soft, romantic and feminine: muted rose and pastel)
- **It should never feel:** TODO
- **Sites, brands or places with the right feeling:** the Google Stitch design in `references/stitch/`
- **Existing brand assets:** no logo file. The old wordmark "Jeanice Huang" was set in the script font Mr De Haviland, with Cormorant Upright for text; the new Stitch-based design replaces both with Bodoni Moda + Manrope (see `DESIGN.md`). Photos: about 200 portfolio images in S3 (see `CLAUDE.md` → Images).

## 5. Pages and sections

URLs must stay exactly as they are.

- **Home (`/`):** full-screen hero photo with the wordmark and nav → "Recent Looks" (4 photos, Instagram link) → full-width photo break → "About Me" (headshot + short intro) → two image links into the portfolio: Bridal (`/portfolio#bridal`) and Studio (`/portfolio#studio`) → footer
- **Portfolio (`/portfolio`):** two galleries, Bridal (`#bridal`, 35 photos) and Studio (`#studio`, 14 photos)
- **Services (`/services`):** services list + FAQ
- **Inquiries (`/inquiries`):** the inquiry form over a background photo
- **404 page:** short, friendly, link home. (Note: the S3 bucket currently serves `index.html` for unknown URLs, so `404.html` isn't shown until the bucket's error document is changed.)

## 6. Content

| Content | Status | Notes |
|---|---|---|
| Logo / wordmark | have | Text wordmark "Jeanice Huang" in the display/script font; no image logo |
| Photos | have | ~200 in S3 `images/`; the site uses the URLs listed in `migration/` and the page code. TODO: who shot them? Real photographer credits for captions? (The old site's captions "Photo: John Smith / Jane Doe" were placeholders and must not be used.) |
| Headline and intro copy | have | See "Existing copy" |
| Services / products / menu | have | See "Existing copy"; no prices on the site |
| About / story | have (short) | Two sentences; TODO if you want more |
| Testimonials | none | Don't add any unless real ones are provided, with permission |
| Contact details | partial | TODO: show an email or phone publicly? (`mua.jeanice@gmail.com` appeared in an unused component) |
| Page titles / meta descriptions | need to write | The old site had none; the agent drafts them and marks them `TODO:` |

The agent must not invent facts (prices, hours, awards, testimonials, numbers). Anything drafted gets marked `TODO:` for review.

## 7. Practical details

- **Address / service area:** On location throughout Long Island and NYC. No studio address on the site.
- **Hours:** TODO (none on the site)
- **Phone / email to show publicly:** TODO
- **Social links:** Instagram: https://www.instagram.com/mua__jeanice/
- **Legal pages needed:** TODO (a privacy policy is recommended, since the form collects names, addresses and phone numbers)

## 8. The form

- **Purpose:** wedding inquiry
- **Layout:** one form on one page (the old site used a 3-step wizard)
- **Fields (same as the old site):**
  - Contact: first name, last name, email (required), phone, street address, apartment/suite, city, state (US states), ZIP/postal code, wedding date
  - Wedding: venue (max 30 chars), getting-ready location (max 30), number of guests requiring services, bridal party services: Hair / Makeup (checkboxes), additional info (max 180)
- **Where submissions go:** the owner's inbox via EmailJS (`PUBLIC_OWNER_EMAIL`)
- **What the visitor sees after sending:** TODO (the old site showed "Inquiry sent successfully!")

## 9. Constraints

- **Launch date:** TODO
- **Must work well on:** phones first
- **Things to avoid:** stock photos (use only the existing photos); TODO anything else
- **Accessibility needs beyond the defaults:** TODO

## 10. What "done" looks like

TODO (e.g. "A bride can browse the portfolio and send an inquiry from her phone in a couple of minutes, and Jeanice gets a clean email for each one.")

---

## Existing copy (reuse verbatim; fix only obvious typos)

**Wordmark:** Jeanice Huang

**Nav:** Portfolio · Services · Inquiries

**Home: Recent Looks:** heading "Recent Looks", with an Instagram link to @mua__jeanice.

**Home: About Me**
> Enhancing your natural glow for the big day.
> From subtle elegance to show-stopping glam, I specialize in making brides feel confident, radiant, and absolutely stunning.

Image links: "Bridal", "Studio"

**Services** (old heading: "Hair Services"; TODO: the list includes makeup, so a heading like "Services" may fit better, owner to confirm)
- Bridal hair and makeup
- Bridal party hair and makeup
- Mother of the bride/groom hair
- Hair and makeup trials
- Clip-in hair extension application
- Event/photoshoot hair and makeup

**Frequently Asked Questions**
- *Do you offer trials before the big day?* Yes! Hair and makeup trials are encouraged and are booked after contracts are signed.
- *Do you travel?* Absolutely — we specialize in on-location services throughout Long Island and NYC. Travel fees may apply depending on distance.
- *Do you require a deposit?* Yes, a non-refundable deposit is made after initial consultation.
- *How should I prepare my skin and hair?* A prep guide will be sent via email after booking. (old site: "will be send")
- *Where are your services provided?* We work on-location.

**Inquiries:** form headings "Contact Information", "Services" ("Check all that apply"). Old review step: "Confirm Your Information / Please review your details before submitting". Button: "Send Message" / "Sending..."

**404:** "404 - Page Not Found"

**Footer**
> © {year} JEANICEHUANGMUA LLC
> All Rights Reserved
> Built by Henry Farahani 2025, [henryfarahani.com](https://henryfarahani.com)
