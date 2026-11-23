# CLAUDE.md

Instructions for the AI agent working in this repo. Read this file and @DESIGN.md at the start of every session.

## What this repo is

The marketing site for Jeanice Huang, a bridal hair and makeup artist: https://jeanicehuangbridal.com. Five pages: `/`, `/portfolio`, `/services`, `/inquiries` and the 404 page. The one action that matters is sending an inquiry through the form on `/inquiries`. Speed, clarity and a distinctive design matter more than features.

- Site brief: `BRIEF.md` (audience, goal, tone, existing copy)
- Visual rules: `DESIGN.md` (follow it strictly; it overrides your own taste and defaults)
- References: `references/` (`references/stitch/` holds the Google Stitch design this site follows)

If `BRIEF.md` or `DESIGN.md` still contains `TODO` placeholders that affect what you're building, stop and ask me before building UI.

**Never invent business facts** (prices, services, hours, testimonials, awards, photographer credits). Reuse the copy in `BRIEF.md` → "Existing copy". Anything you have to draft (page titles, meta descriptions, alt text) gets a `TODO:` comment so I can check it.

## Stack

- **Astro**, static output only: `output: 'static'` and `build: { format: 'file' }`, so pages build to `dist/inquiries.html`, not `dist/inquiries/index.html`. No SSR, no server endpoints, no adapters.
- **Tailwind CSS v4**, configured through `@theme` tokens in `src/styles/global.css`. Every color, font, size, spacing and radius value comes from those tokens, which mirror `DESIGN.md`.
- **No UI framework.** Write Astro components with plain HTML and CSS, plus small inline `<script>` blocks where needed. Only add a React island if a specific interaction truly needs it, and ask me first.
- **Motion:** CSS transitions and CSS scroll-driven animations only. Ask before adding GSAP or any animation library.
- **Fonts:** self-hosted via `@fontsource` packages, using `font-display: swap`. Only the families named in `DESIGN.md`.
- **Images:** see Images below. Not `astro:assets`.
- **Forms:** EmailJS via `@emailjs/browser` (see Forms below). No backend code.
- **Hosting:** an existing S3 bucket (website endpoint) behind an existing CloudFront distribution. There is no infrastructure code in this repo, and there must not be. Don't add `infra/`, CDK, Terraform or CloudFormation files.

Do not add dependencies without telling me what each one is for. Prefer zero-dependency solutions.

## Project layout

```
BRIEF.md            site brief and existing copy
DESIGN.md           design system
references/         design references (references/stitch/ = Stitch export)
migration/          notes from the Next.js → Astro migration
src/
  pages/            index.astro, portfolio.astro, services.astro, inquiries.astro, 404.astro
  layouts/          Base.astro (head, fonts, meta, header, footer)
  components/       one component per section (Header.astro, Footer.astro, Gallery.astro, ...)
  styles/global.css Tailwind import + @theme tokens + base styles
  assets/photos/    website photos (optimized by Astro at build time)
  data/photos.ts    photo lookup + gallery order
public/             favicon, og image, robots.txt (never images/ — see below)
image-sync.js       manual tool: syncs portfolio photos between S3 and a local folder (npm run sync)
.github/workflows/  deploy.yml
```

## Images

**Website photos live in `src/assets/photos/`** (WebP, max 2000px on the long edge, lowercase hyphenated filenames). Astro optimizes them at build time into 400–1600px WebP versions under `dist/_astro/`, which the deploy uploads with one-year caching.

**The S3 bucket's `images/` folder is the archive of originals** (about 200 photos, served at `https://dwxk3eiesmmgs.cloudfront.net/images/<file>`). It is never deployed to or deleted from this repo, and no page should link to it.

- Always render photos with `src/components/Photo.astro` (which uses `astro:assets` `<Image>`), passing a `sizes` value that matches how wide the photo is shown. Never a plain `<img>` with a CloudFront URL.
- Look photos up with `photo('filename.webp')` from `src/data/photos.ts`; it fails the build if the file is missing.
- Give every photo meaningful `alt` text (or `alt=""` if it's decorative inside a labelled link). Only the largest photo above the fold gets `eager`; everything else stays lazy.
- New photos: resize to max 2000px and save as WebP before committing. Don't commit camera originals.
- Use the existing photos only. If a design calls for a photo, pick one from `src/assets/photos/` and tell me which you chose.
- Never put anything in `public/images/`. Astro copies `public/` into `dist/`, and nothing under `images/` may ever be deployed from this repo.

## How to build UI

Work one page or section at a time. For each:

1. Re-read the relevant parts of `DESIGN.md` and `BRIEF.md`.
2. Build it.
3. Start the dev server if it isn't running (`npm run dev`) and take screenshots with Playwright at **1440px** and **375px** wide.
4. Critique the screenshots against `DESIGN.md`: type scale, spacing, color usage, alignment, anything on the banned list. Fix problems before showing me.
5. Show me the screenshots and a short note on any choices you made that `DESIGN.md` didn't cover.
6. Wait for my feedback before starting the next page or section.

When I give feedback, change only what I asked about. If a fix would affect other sections, tell me first.

If a design skill such as `frontend-design` or `impeccable` is installed, use it, but `DESIGN.md` wins whenever they conflict.

### Never do these (unless DESIGN.md explicitly allows it)

- Purple, violet, indigo or blue-to-purple gradients. Gradient text. Gradient borders.
- Inter, Roboto, Arial or system fonts as the visible typeface.
- Rows of three identical cards with an icon on top.
- Icons in colored circles. Emoji as icons.
- Cards inside cards. A thick colored border down one side of a card.
- The "big number + small label + three stats" hero metric block.
- `rounded-2xl` / `rounded-3xl` on everything. Use the radius in `DESIGN.md`.
- Glow effects, aurora or blob backgrounds, glassmorphism.
- Animating every element. Entrances from `scale(0)`. Bounce easing.
- Default Tailwind grays (`gray-*`, `slate-*`, `zinc-*`). Use the neutral tokens.
- Placeholder copy like "Lorem ipsum", "Revolutionize your workflow", "Seamless", "Unlock". Use the existing copy in `BRIEF.md`; mark anything you drafted with `TODO:`.

## Quality bar (check before saying a page is done)

- **Mobile:** works at 375px with no horizontal scroll; tap targets at least 44px.
- **Accessibility:** one `<h1>` per page, logical heading order, text contrast at least 4.5:1 (3:1 for large text), visible keyboard focus styles, labels on every form field, `prefers-reduced-motion` turns off non-essential animation.
- **Performance:** Lighthouse performance 95+ on mobile where the photos allow it. No layout shift from fonts or images (always set `width`/`height`).
- **SEO basics:** unique `<title>` and meta description per page, Open Graph tags, sitemap via `@astrojs/sitemap`, `robots.txt`.
- **URLs:** pages stay at `/`, `/portfolio`, `/services`, `/inquiries`, and `404.html`. Internal links use these extensionless paths. Don't add pages or rename them without asking.
- **Build:** `npm run build` passes with no warnings.

## Forms

The inquiry form on `/inquiries` sends email through EmailJS from the browser with `@emailjs/browser`. The values come from these env vars (in `.env` locally, and GitHub repository **variables** in CI). They are public by design. Never hardcode them in components, and never commit real values to `.env.example`.

| Variable | What it is |
|---|---|
| `PUBLIC_EMAILJS_PUBLIC_KEY` | EmailJS account public key |
| `PUBLIC_EMAILJS_SERVICE_ID` | EmailJS service ID |
| `PUBLIC_EMAILJS_TEMPLATE_ID` | EmailJS template ID |
| `PUBLIC_OWNER_EMAIL` | Where inquiries go (sent as `to_email`) |

Read them in Astro with `import.meta.env.PUBLIC_*`. If any is missing at build time, the form must show a plain error rather than fail silently.

The email format must stay the same as the original `api/sendEmail.js`: template params `to_email`, `from_name`, `from_email`, `subject` ("New Inquiry from {first} {last}"), `message` (the labelled plain-text block of all fields), `reply_to_email`. The EmailJS template in the dashboard depends on those names.

Every form must have:
- A hidden honeypot field. If it's filled in, pretend to succeed and send nothing.
- Labels on every field, `type="email"` and `required` where appropriate, and `autocomplete` attributes.
- Submission in a small script so the page doesn't redirect, with visible loading, success and error states (no `alert()`).
- A plain-language error message if sending fails, and the submit button disabled while sending.

## Deploy, AWS and GitHub rules

These rules are strict.

- **Deploys happen only through `.github/workflows/deploy.yml` on push to `master`.** Never deploy from this machine. Never commit to, merge into or push to `master` yourself; work on a branch and open a pull request.
- **Never run AWS commands that create, change or delete anything** (`s3 cp/sync/rm/mv`, `s3api put-*/delete-*`, `cloudfront create-*/update-*`, IAM changes, and so on). Read-only commands (`aws ... ls/describe/list/get`) are fine.
- **The bucket's `images/` folder holds every portfolio photo, and those files are not in this repo.** Nothing may ever delete or overwrite them. Every `aws s3 sync` in the workflow must have `--exclude "images/*"`, including (especially) any sync with `--delete`. Check this whenever you touch `deploy.yml`.
- Don't run `npm run sync` (image-sync.js uploads to the bucket) unless I ask.
- The existing AWS resources and GitHub secrets stay exactly as they are. The workflow uses the existing secrets `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `AWS_REGION`, `S3_BUCKET` and `CF_DIST_ID`. Never create, change, print or delete GitHub secrets, and never add new AWS resources.
- Never print, log or commit credentials, `.env` / `.env.local` files or AWS account details.
- The S3 website endpoint doesn't map `/services` to `services.html`. The deploy uploads every page twice (as `services.html` and as an extensionless `services` object with `Content-Type: text/html`). Don't remove that step.

## Git

- Work on a branch, never directly on `master`.
- Small commits with clear messages (`services: tighten FAQ spacing`).
- Open a pull request when a page or feature is ready, with before/after screenshots in the description.

## Commands

```
npm run dev       # local dev server
npm run build     # production build to dist/
npm run preview   # serve the production build locally
npm run sync      # image-sync.js: S3 <-> local photos (only when asked; writes to S3)
```
