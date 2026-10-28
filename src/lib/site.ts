import type { UiKey } from '../i18n/ui';

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
  { href: '/guias', key: 'nav.guides' },
  { href: '/tutoriales', key: 'nav.tutorials' },
];

export const channels = [
  {
    name: 'TodoSobreTecno',
    topic: 'Tecnología',
    href: '#TODO-youtube-todosobretecno',
    todo: 'TODO: sustituir por la URL real del canal',
  },
  {
    name: 'Soluciones para todos',
    topic: 'Finanzas',
    href: '#TODO-youtube-soluciones-para-todos',
    todo: 'TODO: sustituir por la URL real del canal',
  },
];

export const contactHref = '#TODO-email-contacto';
export const contactTodo = 'TODO: sustituir por el correo real de contacto';

export function isActive(href: string, path: string) {
  return path === href || path.startsWith(`${href}/`);
}
