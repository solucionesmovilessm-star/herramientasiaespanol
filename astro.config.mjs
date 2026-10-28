import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const site = 'https://herramientasiaespanol.com';

export default defineConfig({
  site,
  trailingSlash: 'never',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  markdown: {
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
    },
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/en'),
    }),
  ],
});
