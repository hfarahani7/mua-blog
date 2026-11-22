// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  site: 'https://jeanicehuangbridal.com',
  output: 'static',

  // Pages build to dist/services.html (not dist/services/index.html), matching the old
  // Next.js export. The deploy workflow also uploads an extensionless copy of each page.
  build: { format: 'file' },

  // Internal links are written without a trailing slash: /services, /portfolio.
  trailingSlash: 'never',

  integrations: [
    sitemap({
      // The 404 page shouldn't be indexed.
      filter: (page) => !page.includes('/404'),
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
    server: {
      // Don't let `npm run dev` watch the build output. On Windows the watcher can lock files
      // in dist/ and make a parallel `npm run build` fail with EBUSY.
      watch: { ignored: ['**/dist/**'] },
    },
    // Pre-bundle the form's dependency when the dev server starts, instead of re-optimizing
    // mid-session the first time /inquiries is opened (that re-run is where Windows Defender
    // can lock node_modules/.vite and crash the dev server with EBUSY).
    optimizeDeps: {
      include: ['@emailjs/browser'],
    },
  },
});