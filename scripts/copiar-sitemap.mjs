import { copyFileSync, existsSync } from 'node:fs';

const source = 'dist/sitemap-index.xml';
const target = 'dist/sitemap.xml';

if (!existsSync(source)) {
  console.error('No se encontró dist/sitemap-index.xml. Revisa que el build de Astro haya terminado.');
  process.exit(1);
}

copyFileSync(source, target);
console.log('Sitemap copiado a dist/sitemap.xml');
