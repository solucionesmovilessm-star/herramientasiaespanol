import newsletterFile from '../data/newsletter.json';
import { formatDate } from './seo';

export const platformLabel = {
  web: 'Web',
  ios: 'iOS',
  android: 'Android',
  windows: 'Windows',
  macos: 'macOS',
  linux: 'Linux',
  extension: 'Extensión',
} as const;

export const priceFilters = [
  { id: '', label: 'Cualquier precio' },
  { id: 'gratis', label: 'Gratis' },
  { id: 'creditos', label: 'Con créditos gratis' },
  { id: 'freemium', label: 'Gratis con límites' },
  { id: 'de-pago', label: 'De pago' },
] as const;

export function priceCheckLabel(date?: Date) {
  if (!date) return 'Precio sin fecha de verificación';
  return `Precio verificado el ${formatDate(date)}`;
}

export function beehiivEmbedUrl() {
  const fromEnv = typeof import.meta.env.BEEHIIV_EMBED_URL === 'string' ? import.meta.env.BEEHIIV_EMBED_URL : '';
  const raw = (fromEnv || newsletterFile.beehiivEmbed || '').trim();
  return /^https:\/\/\S+$/.test(raw) ? raw : '';
}

export function editorialOrder<T extends { data: { destacado?: boolean; title: string } }>(items: T[]) {
  return [...items].sort((a, b) => {
    const star = Number(Boolean(b.data.destacado)) - Number(Boolean(a.data.destacado));
    if (star !== 0) return star;
    return a.data.title.localeCompare(b.data.title, 'es');
  });
}

export function relativeLabel(date: Date, now = new Date()) {
  const day = (value: Date) => Date.UTC(value.getUTCFullYear(), value.getUTCMonth(), value.getUTCDate());
  const days = Math.round((day(now) - day(date)) / 86400000);
  if (days <= 0) return 'hoy';
  if (days === 1) return 'ayer';
  if (days < 30) return `hace ${days} días`;
  const months = Math.floor(days / 30);
  if (months < 12) return months === 1 ? 'hace 1 mes' : `hace ${months} meses`;
  const years = Math.floor(days / 365);
  return years === 1 ? 'hace 1 año' : `hace ${years} años`;
}
