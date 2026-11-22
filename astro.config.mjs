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
  },
});