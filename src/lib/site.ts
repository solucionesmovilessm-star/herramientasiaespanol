import type { UiKey } from '../i18n/ui';
import canales from '../data/canales.json';

export const SITE_URL = 'https://herramientasiaespanol.com';
export const SITE_NAME = 'Herramientas IA en español';
export const BRAND_HOST = 'hubtecnoia.com';

export const categories = {
  chat: 'Chat y asistentes',
  imagen: 'Imagen',
  video: 'Vídeo',
  codigo: 'Código',
  escritura: 'Escritura y traducción',
  productividad: 'Productividad',
  audio: 'Audio y música',
  investigacion: 'Investigación',
  local: 'En tu ordenador',
} as const;

export const pricingLabel = {
  gratis: 'Gratis',
  freemium: 'Gratis con límites',
  'de-pago': 'De pago',
} as const;

export const agentCategories = {
  programacion: 'Programación',
  multiagente: 'Varios agentes',
  automatizacion: 'Automatización',
} as const;

export const skillCategories = {
  claude: 'Skills para Claude',
  cursor: 'Skills para Cursor',
  estandar: 'Estándar abierto',
  otra: 'Otras',
} as const;

export const mcpTipos = {
  servidor: 'Servidor',
  registro: 'Registro',
  referencia: 'Referencia oficial',
} as const;

export const appCategoryByTool = {
  chat: 'BusinessApplication',
  imagen: 'MultimediaApplication',
  video: 'MultimediaApplication',
  codigo: 'DeveloperApplication',
  escritura: 'BusinessApplication',
  productividad: 'BusinessApplication',
  audio: 'MultimediaApplication',
  investigacion: 'EducationalApplication',
  local: 'DeveloperApplication',
} as const;

export const nav: { href: string; key: UiKey }[] = [
  { href: '/herramientas', key: 'nav.tools' },
  { href: '/agentes', key: 'nav.agents' },
  { href: '/skills', key: 'nav.skills' },
  { href: '/mcp', key: 'nav.mcp' },
  { href: '/ranking', key: 'nav.ranking' },
  { href: '/noticias', key: 'nav.news' },
  { href: '/guias', key: 'nav.guides' },
  { href: '/tutoriales', key: 'nav.tutorials' },
];

export const channels = canales.channels.map((channel) => ({
  name: channel.name,
  topic: channel.topic,
  handle: channel.handle,
  href: /^https:\/\/\S+$/.test(channel.url) ? channel.url : '',
}));

export const contactEmail = 'contacto@herramientasiaespanol.com';
export const contactHref = `mailto:${contactEmail}`;

export function isActive(href: string, path: string) {
  return path === href || path.startsWith(`${href}/`);
}
