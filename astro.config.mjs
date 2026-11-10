import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { satteri } from '@astrojs/markdown-satteri';
import { trailingSlashPlugin } from './src/lib/trailing-slash-plugin.ts';

const site = 'https://herramientasiaespanol.com';

export default defineConfig({
  site,
  // Pages sirve cada `ruta/index.html` en `/ruta/` y responde 308 si falta la barra.
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  markdown: {
    processor: satteri({
      mdastPlugins: [trailingSlashPlugin],
    }),
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
    },
  },
  integrations: [
    sitemap({
      filter: (page) => {
        const path = new URL(page).pathname;
        return path !== '/en' && path !== '/en/' && !path.startsWith('/en/') && !path.endsWith('indice.json');
      },
    }),
  ],
});
