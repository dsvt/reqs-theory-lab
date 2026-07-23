import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://theory.reqs.org',
  trailingSlash: 'never',
  integrations: [sitemap()],
  vite: {
    cacheDir: '.vite-cache'
  },
  build: {
    format: 'file'
  }
});
