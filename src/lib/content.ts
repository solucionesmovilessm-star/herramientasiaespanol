import { getCollection, type CollectionEntry } from 'astro:content';

export type CollectionName = 'herramientas' | 'agentes' | 'skills' | 'mcp' | 'guias' | 'tutoriales';

export async function loadPublished<C extends CollectionName>(name: C) {
  const items = await getCollection(
    name,
    ({ data }) => data.draft !== true && (data.lang ?? 'es') === 'es',
  );
  return items.sort((a, b) => a.data.title.localeCompare(b.data.title, 'es'));
}

export function matchesQuery(parts: string[], query: string) {
  const q = query.trim().toLocaleLowerCase('es');
  if (!q) return true;
  return parts.join(' ').toLocaleLowerCase('es').includes(q);
}

export type ToolEntry = CollectionEntry<'herramientas'>;
export type AgentEntry = CollectionEntry<'agentes'>;
export type SkillEntry = CollectionEntry<'skills'>;
export type McpEntry = CollectionEntry<'mcp'>;
export type GuideEntry = CollectionEntry<'guias'>;
export type TutorialEntry = CollectionEntry<'tutoriales'>;

export interface Badge {
  label: string;
  tone: 'paid' | 'feature' | 'muted' | 'free' | 'affiliate' | 'lang';
}

export function moneyBadges(data: {
  destacado?: boolean;
  patrocinado?: boolean;
  pricing?: string;
  pricingLabels?: Record<string, string>;
  affiliateUrl?: string;
  lang?: string;
}): Badge[] {
  const badges: Badge[] = [];
  if (data.patrocinado) badges.push({ label: 'Patrocinado', tone: 'paid' });
  else if (data.destacado) badges.push({ label: 'Destacado', tone: 'feature' });
  if (data.pricing === 'gratis') badges.push({ label: 'Gratis', tone: 'free' });
  else if (data.pricing && data.pricingLabels?.[data.pricing]) {
    badges.push({ label: data.pricingLabels[data.pricing], tone: 'muted' });
  }
  if (data.affiliateUrl) badges.push({ label: 'Afiliado', tone: 'affiliate' });
  if (data.lang === 'es') badges.push({ label: 'En español', tone: 'lang' });
  return badges;
}

export type NewsEntry = CollectionEntry<'noticias'>;

export async function loadNews() {
  const items = await getCollection('noticias', ({ data }) => data.draft !== true);
  return items.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

const fichaSections = ['herramientas', 'agentes', 'skills', 'mcp'] as const;

/** Devuelve la URL de la ficha si existe; si no, undefined (nunca un enlace roto). */
export async function resolveFicha(slug?: string) {
  if (!slug) return undefined;
  for (const section of fichaSections) {
    const items = await loadPublished(section);
    if (items.some((entry) => entry.id === slug)) return `/${section}/${slug}`;
  }
  return undefined;
}
