export const locales = ['es', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'es';

export const ui = {
  es: {
    skip: 'Saltar al contenido',
    menu: 'Menú',
    'nav.tools': 'Herramientas',
    'nav.agents': 'Agentes',
    'nav.skills': 'Skills',
    'nav.mcp': 'MCP',
    'nav.ranking': 'Ranking',
    'nav.guides': 'Guías',
    'nav.tutorials': 'Tutoriales',
    'nav.pro': 'Pro',
    'nav.advertise': 'Anúnciate',
    'nav.about': 'Sobre',
    'nav.newsletter': 'Newsletter',
    'theme.toDark': 'Usar tema oscuro',
    'theme.toLight': 'Usar tema claro',
    'footer.transparency': 'Transparencia: algunos enlaces son de afiliado',
    'footer.free':
      'Casi todo el sitio es gratis. Una ficha de pago lleva la etiqueta Patrocinado. Un enlace de afiliado se marca como tal.',
    'footer.rights': 'Los textos son de este sitio. Las marcas y los productos pertenecen a sus dueños.',
    'footer.english': 'English (próximamente)',
    'search.label': 'Buscar',
    'search.button': 'Buscar',
  },
  en: {
    skip: 'Skip to content',
    menu: 'Menu',
    'nav.tools': 'Tools',
    'nav.agents': 'Agents',
    'nav.skills': 'Skills',
    'nav.mcp': 'MCP',
    'nav.ranking': 'Ranking',
    'nav.guides': 'Guides',
    'nav.tutorials': 'Tutorials',
    'nav.pro': 'Pro',
    'nav.advertise': 'Advertise',
    'nav.about': 'About',
    'nav.newsletter': 'Newsletter',
    'theme.toDark': 'Use dark theme',
    'theme.toLight': 'Use light theme',
    'footer.transparency': 'Transparency: some links are affiliate links',
    'footer.free':
      'Most of the site is free. Paid placements are labeled Sponsored. Affiliate links are labeled too.',
    'footer.rights': 'The writing belongs to this site. Product names belong to their owners.',
    'footer.english': 'English (coming soon)',
    'search.label': 'Search',
    'search.button': 'Search',
  },
} as const;

export type UiKey = keyof typeof ui.es;

export function useTranslations(locale: string | undefined) {
  const lang: Locale = locale === 'en' ? 'en' : 'es';
  return function t(key: UiKey): string {
    return ui[lang][key] ?? ui.es[key];
  };
}
