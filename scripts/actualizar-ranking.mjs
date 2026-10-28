/**
 * Consulta la API pública de búsqueda de GitHub y guarda el ranking semanal.
 * Usa GITHUB_TOKEN si existe (en Actions es el token por defecto del repositorio).
 * No hace falta un token personal.
 *
 * GitHub no publica una API del listado "Trending" de su web.
 * Este script guarda dos listas distintas y lo dice en el JSON:
 * - enMovimiento: repos públicos, no forks, con temas de IA, con actividad reciente, ordenados por estrellas
 * - masEstrellados: los mismos temas, ordenados por estrellas, sin filtro de fecha
 */
import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const TOKEN = process.env.GITHUB_TOKEN || process.env.GH_TOKEN || '';
const WINDOW_DAYS = 14;
const LIMIT = 12;
const OUTPUT = resolve('src/data/ranking.json');

const since = new Date(Date.now() - WINDOW_DAYS * 24 * 60 * 60 * 1000);
const sinceDay = since.toISOString().slice(0, 10);

const activeQueries = [
  `topic:llm fork:false pushed:>=${sinceDay}`,
  `topic:generative-ai fork:false pushed:>=${sinceDay}`,
  `topic:ai-agents fork:false pushed:>=${sinceDay}`,
  `topic:mcp fork:false pushed:>=${sinceDay}`,
];

const starredQueries = [
  'topic:llm fork:false',
  'topic:machine-learning fork:false',
  'topic:generative-ai fork:false',
];

const NOTE =
  'GitHub no ofrece una API del listado Trending de su web. «En movimiento» reúne repositorios públicos (no forks) con temas de IA actualizados en los últimos 14 días, ordenados por estrellas. «Más estrellados» ordena por estrellas sin filtro de fecha. Las cifras salen de la API de búsqueda y cambian.';

function sleep(ms) {
  return new Promise((resolveSleep) => setTimeout(resolveSleep, ms));
}

async function search(query) {
  const url = new URL('https://api.github.com/search/repositories');
  url.searchParams.set('q', query);
  url.searchParams.set('sort', 'stars');
  url.searchParams.set('order', 'desc');
  url.searchParams.set('per_page', '20');

  const headers = {
    Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
    'User-Agent': 'herramientasiaespanol-ranking',
  };
  if (TOKEN) headers.Authorization = `Bearer ${TOKEN}`;

  const response = await fetch(url, { headers });
  if (response.status === 403 || response.status === 429) {
    const wait = Number(response.headers.get('retry-after') || '5');
    console.warn(`Límite de la API (${response.status}). Reintento en ${wait}s.`);
    await sleep(wait * 1000);
    const retry = await fetch(url, { headers });
    if (!retry.ok) {
      const body = await retry.text();
      throw new Error(`GitHub respondió ${retry.status} para «${query}»: ${body.slice(0, 300)}`);
    }
    return retry.json();
  }
  if (!response.ok) {
    const body = await response.text();
    throw new Error(`GitHub respondió ${response.status} para «${query}»: ${body.slice(0, 300)}`);
  }
  return response.json();
}

function mapRepo(item) {
  return {
    fullName: item.full_name,
    url: item.html_url,
    description: item.description ?? null,
    stars: item.stargazers_count,
    forks: item.forks_count,
    language: item.language ?? null,
    topics: Array.isArray(item.topics) ? item.topics.slice(0, 8) : [],
    pushedAt: item.pushed_at,
    license: item.license?.spdx_id ?? null,
  };
}

function dedupeAndRank(items) {
  const map = new Map();
  for (const item of items) {
    if (!item?.full_name || !item.html_url) continue;
    const mapped = mapRepo(item);
    const current = map.get(mapped.fullName);
    if (!current || mapped.stars > current.stars) map.set(mapped.fullName, mapped);
  }
  return [...map.values()]
    .sort((a, b) => b.stars - a.stars || a.fullName.localeCompare(b.fullName))
    .slice(0, LIMIT)
    .map((repo, index) => ({ rank: index + 1, ...repo }));
}

async function collect(queries) {
  const items = [];
  for (const query of queries) {
    console.log(`Buscando: ${query}`);
    const data = await search(query);
    if (Array.isArray(data.items)) items.push(...data.items);
    await sleep(1500);
  }
  return dedupeAndRank(items);
}

const enMovimiento = await collect(activeQueries);
const masEstrellados = await collect(starredQueries);

if (enMovimiento.length === 0 && masEstrellados.length === 0) {
  console.error('La API no devolvió repositorios. No se ha tocado el JSON anterior.');
  process.exit(1);
}

const payload = {
  generatedAt: new Date().toISOString(),
  windowDays: WINDOW_DAYS,
  windowStart: sinceDay,
  note: NOTE,
  queries: {
    enMovimiento: activeQueries,
    masEstrellados: starredQueries,
  },
  enMovimiento,
  masEstrellados,
};

writeFileSync(OUTPUT, `${JSON.stringify(payload, null, 2)}\n`);
console.log(
  `Guardado ${OUTPUT} (${enMovimiento.length} en movimiento, ${masEstrellados.length} más estrellados).`,
);
