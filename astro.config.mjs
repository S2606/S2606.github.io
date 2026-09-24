import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Switch `site` to https://shagunkhemka.me once the domain is live.
export default defineConfig({
  site: 'https://s2606.github.io',
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
