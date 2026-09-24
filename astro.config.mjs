import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://shagunkhemka.me',
  integrations: [sitemap({ filter: (page) => !page.includes('/404') })],
  // Keep links to the old Hugo site working.
  redirects: {
    '/about': '/background/',
    '/posts': '/',
    '/posts/sudoku': '/',
    '/blog': '/',
    '/categories': '/',
    '/tags': '/',
    '/series': '/',
    '/authors': '/',
  },
});
