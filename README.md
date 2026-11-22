# jeanicehuangbridal.com

Static site for Jeanice Huang, bridal hair and makeup. Built with [Astro](https://astro.build) and Tailwind CSS v4, deployed to an existing S3 bucket + CloudFront distribution by GitHub Actions on push to `master`.

Read `CLAUDE.md` (how to work in this repo), `DESIGN.md` (design system) and `BRIEF.md` (content and goals) first.

## Requirements

- Node.js 22.23.4 or newer (`.nvmrc`)

## Commands

```bash
npm install        # install dependencies
npm run dev        # dev server at http://localhost:4321
npm run build      # production build to dist/
npm run preview    # serve the production build locally
npm run sync       # image-sync.js: sync photos between S3 images/ and public/images (writes to S3!)
```

## Configuration

Copy `.env.example` to `.env` and fill in the EmailJS values. See `EMAILJS_SETUP.md`.

## Deploys

`.github/workflows/deploy.yml` builds every pull request and deploys every push to `master`. Photos live in the bucket's `images/` folder, not in this repo, and every sync in the workflow excludes `images/*`.
