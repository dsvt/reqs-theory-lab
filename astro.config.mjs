import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // TODO: Change this to https://theory.reqs.org after domain review and mapping.
  site: 'https://reqs-theory-lab.vercel.app',
  trailingSlash: 'never',
  integrations: [sitemap()],
  vite: {
    cacheDir: '.vite-cache'
  },
  build: {
    format: 'file'
  }
});
