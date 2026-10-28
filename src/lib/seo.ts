import { SITE_NAME, SITE_URL } from './site';

export function canonicalUrl(pathname: string) {
  const path = pathname === '/' ? '/' : pathname.replace(/\/$/, '');
  return new URL(path, SITE_URL).href;
}

export function isoDate(date?: Date) {
  if (!date) return undefined;
  return date.toISOString().slice(0, 10);
}

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat('es-ES', {
    dateStyle: 'long',
    timeZone: 'UTC',
  }).format(date);
}

export function formatNumber(value: number) {
  return new Intl.NumberFormat('es-ES').format(value);
}

export function breadcrumbLd(items: { name: string; url?: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      ...(item.url ? { item: item.url } : {}),
    })),
  };
}

export function itemListLd(name: string, items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    itemListOrder: 'https://schema.org/ItemListUnordered',
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      url: item.url,
    })),
  };
}

export function articleLd(input: {
  title: string;
  description: string;
  canonical: string;
  published?: string;
  modified?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: input.title,
    description: input.description,
    inLanguage: 'es',
    mainEntityOfPage: input.canonical,
    ...(input.published ? { datePublished: input.published } : {}),
    ...(input.modified || input.published
      ? { dateModified: input.modified ?? input.published }
      : {}),
    author: {
      '@type': 'Person',
      name: 'Gonzalo',
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

export function faqLd(faq: { q: string; a: string }[]) {
  if (faq.length === 0) return undefined;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };
}

export function websiteLd(description: string) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        name: SITE_NAME,
        url: SITE_URL,
        inLanguage: 'es',
        description,
        potentialAction: {
          '@type': 'SearchAction',
          target: `${SITE_URL}/herramientas?q={search_term_string}`,
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@type': 'Organization',
        name: SITE_NAME,
        url: SITE_URL,
      },
    ],
  };
}
