import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative, sep } from 'node:path';

const dist = 'dist';
const site = 'https://herramientasiaespanol.com';
const assetExt =
  /\.(?:avif|css|gif|ico|jpe?g|js|json|map|mjs|mp4|png|sh|svg|txt|webm|webp|woff2?|xml|zip|md)$/i;
const errors = [];

function fail(message) {
  errors.push(message);
}

function walk(dir, acc = []) {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) walk(path, acc);
    else acc.push(path);
  }
  return acc;
}

function decode(value) {
  return value.replaceAll('&amp;', '&').replaceAll('&quot;', '"').replaceAll('&#39;', "'");
}

function attr(tag, name) {
  const match = tag.match(new RegExp(`\\b${name}="([^"]*)"`));
  return match ? decode(match[1]) : undefined;
}

function tags(html, name) {
  return [...html.matchAll(new RegExp(`<${name}\\b[^>]*>`, 'g'))].map((match) => match[0]);
}

function pathOf(value) {
  if (value.startsWith(site)) {
    const rest = value.slice(site.length);
    return rest.startsWith('/') ? rest : `/${rest}`;
  }
  if (value.startsWith('/')) return value;
  return null;
}

function badPublicPath(value) {
  const pathPart = pathOf(value);
  if (pathPart === null) return false;
  const path = pathPart.split('#')[0].split('?')[0];
  if (path === '' || path === '/') return false;
  if (assetExt.test(path)) return path.endsWith('/');
  return !path.endsWith('/');
}

function pageUrl(file) {
  const rel = relative(dist, file).split(sep).join('/');
  if (rel === 'index.html') return `${site}/`;
  if (!rel.endsWith('/index.html')) return null;
  return `${site}/${rel.slice(0, -'index.html'.length)}`;
}

function locs(file) {
  const xml = readFileSync(file, 'utf8');
  return {
    kind: xml.includes('<sitemapindex') ? 'index' : 'urlset',
    locs: [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => decode(match[1].trim())),
  };
}

if (!existsSync(join(dist, '404.html'))) {
  fail('Falta dist/404.html. Cloudflare Pages lo usa como página de error.');
}
if (existsSync(join(dist, '404', 'index.html'))) {
  fail('dist/404/index.html compite con dist/404.html y cambia la URL que responde 200.');
}

const files = walk(dist);
const htmlFiles = files.filter((file) => file.endsWith('.html'));
const pageFiles = new Map();

for (const file of htmlFiles) {
  const rel = relative(dist, file).split(sep).join('/');
  const html = readFileSync(file, 'utf8');
  const links = tags(html, 'link');
  const metas = tags(html, 'meta');
  const canonicals = links.filter((tag) => attr(tag, 'rel') === 'canonical').map((tag) => attr(tag, 'href'));
  const ogUrl = metas.filter((tag) => attr(tag, 'property') === 'og:url').map((tag) => attr(tag, 'content'));
  const robots = metas.find((tag) => attr(tag, 'name') === 'robots');
  const noindex = Boolean(robots && (attr(robots, 'content') ?? '').includes('noindex'));
  const hreflang = links.filter((tag) => attr(tag, 'rel') === 'alternate' && attr(tag, 'hreflang'));
  const expected = pageUrl(file);

  if (rel === '404.html') {
    if (!noindex) fail('dist/404.html no tiene meta robots noindex.');
    if (canonicals.length > 0) fail('dist/404.html no debe tener link rel=canonical.');
    if (ogUrl.length > 0) fail('dist/404.html no debe tener og:url.');
    if (hreflang.length > 0) fail('dist/404.html no debe tener hreflang.');
  } else if (!expected) {
    fail(`HTML inesperado en el build: ${rel}`);
  } else {
    pageFiles.set(expected, { rel, noindex });
    if (canonicals.length !== 1 || canonicals[0] !== expected) {
      fail(`${rel}: el canonical debe ser ${expected} y es ${canonicals.join(', ') || '(ninguno)'}.`);
    }
    if (ogUrl.length !== 1 || ogUrl[0] !== expected) {
      fail(`${rel}: og:url debe ser ${expected} y es ${ogUrl.join(', ') || '(ninguno)'}.`);
    }
    if (noindex) {
      if (hreflang.length > 0) fail(`${rel}: una página noindex no debe emitir hreflang.`);
    } else {
      const byLang = new Map(hreflang.map((tag) => [attr(tag, 'hreflang'), attr(tag, 'href')]));
      if (byLang.get('es') !== expected || byLang.get('x-default') !== expected) {
        fail(`${rel}: hreflang es y x-default deben apuntar a ${expected}.`);
      }
    }
  }

  for (const tag of [...links, ...tags(html, 'a'), ...tags(html, 'form')]) {
    for (const name of ['href', 'action']) {
      const value = attr(tag, name);
      if (value && badPublicPath(value)) fail(`${rel}: ${name}="${value}" no es la URL que responde 200.`);
    }
  }

  for (const match of html.matchAll(/https:\/\/herramientasiaespanol\.com(?:\/[^\s"'<>\\]*)?/g)) {
    if (badPublicPath(match[0])) fail(`${rel}: URL absoluta sin la barra final: ${match[0]}`);
  }
}

const sitemapFiles = files.filter((file) => /sitemap(?:-index|-\d+)?\.xml$/.test(file.split(sep).pop() ?? ''));
const pageLocs = new Set();

for (const file of sitemapFiles) {
  const rel = relative(dist, file).split(sep).join('/');
  const parsed = locs(file);
  for (const loc of parsed.locs) {
    if (parsed.kind === 'index') {
      if (badPublicPath(loc)) fail(`${rel}: el índice apunta a ${loc}, que no es un archivo servido tal cual.`);
      const name = new URL(loc).pathname.slice(1);
      if (!existsSync(join(dist, name))) fail(`${rel}: falta el sitemap ${name}.`);
      continue;
    }
    pageLocs.add(loc);
    if (badPublicPath(loc)) fail(`${rel}: ${loc} no termina en la URL con barra final.`);
    const pathname = new URL(loc).pathname;
    const target = pathname === '/' ? 'index.html' : `${pathname.slice(1)}index.html`;
    if (!existsSync(join(dist, target))) fail(`${rel}: ${loc} no tiene ${target}.`);
    const page = pageFiles.get(loc);
    if (!page) fail(`${rel}: ${loc} no corresponde a una página generada.`);
    else if (page.noindex) fail(`${rel}: ${loc} está en el sitemap y la página es noindex.`);
  }
}

for (const [url, page] of pageFiles) {
  if (page.noindex) {
    if (pageLocs.has(url)) fail(`${url} es noindex y no debe estar en el sitemap.`);
  } else if (!pageLocs.has(url)) {
    fail(`${url} responde como página indexable y no está en el sitemap.`);
  }
}

const indexPath = join(dist, 'indice.json');
if (!existsSync(indexPath)) fail('Falta dist/indice.json.');
else {
  const items = JSON.parse(readFileSync(indexPath, 'utf8'));
  for (const item of items) {
    if (typeof item.href !== 'string' || badPublicPath(item.href)) {
      fail(`indice.json: href inválido ${item.href}`);
    }
  }
}

const robots = readFileSync(join(dist, 'robots.txt'), 'utf8');
if (!robots.includes('Disallow: /videos/')) fail('robots.txt ya no bloquea /videos/.');
if (!robots.includes(`Sitemap: ${site}/sitemap.xml`)) fail('robots.txt no declara el sitemap.');

const headers = readFileSync(join(dist, '_headers'), 'utf8');
if (!/\/videos\/\*\.mp4[\s\S]*X-Robots-Tag:\s*noindex/.test(headers)) {
  fail('_headers ya no marca /videos/*.mp4 como noindex.');
}

if (existsSync(join(dist, '_redirects'))) {
  const redirects = readFileSync(join(dist, '_redirects'), 'utf8');
  for (const line of redirects.split('\n')) {
    if (/binance-hackeo|strategy-dividendos/.test(line)) {
      fail(`_redirects inventa un destino para un vídeo borrado: ${line.trim()}`);
    }
  }
}

if (errors.length > 0) {
  console.error(`La comprobación de URLs falló (${errors.length}):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`URLs comprobadas: ${pageLocs.size} en el sitemap, canonical y og:url coinciden, 404 en noindex.`);
