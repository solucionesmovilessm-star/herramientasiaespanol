import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const optionalUrl = z
  .string()
  .optional()
  .transform((value) => {
    const trimmed = value?.trim() ?? '';
    return trimmed.length > 0 ? trimmed : undefined;
  })
  .refine((value) => value === undefined || /^https:\/\/\S+$/.test(value), {
    message: 'El enlace tiene que empezar por https:// y no llevar espacios.',
  });

const common = {
  title: z.string().min(2),
  description: z.string().min(40).max(220),
  lang: z.enum(['es', 'en']).default('es'),
  updated: z.coerce.date().optional(),
  draft: z.boolean().default(false),
  destacado: z.boolean().default(false),
  patrocinado: z.boolean().default(false),
  affiliateUrl: optionalUrl,
  tags: z.array(z.string()).default([]),
};

const listing = {
  ...common,
  url: z.string().url(),
};

export const collections = {
  noticias: defineCollection({
    loader: glob({ base: './src/content/noticias', pattern: '**/*.md' }),
    schema: z.object({
      title: z.string().min(2),
      date: z.coerce.date(),
      summary: z.string().min(40),
      sources: z.array(z.string().url()).min(1),
      ficha: z.string().optional(),
      draft: z.boolean().default(false),
    }),
  }),
  herramientas: defineCollection({
    loader: glob({ base: './src/content/herramientas', pattern: '**/*.md' }),
    schema: z.object({
      ...listing,
      category: z.enum([
        'chat',
        'imagen',
        'video',
        'codigo',
        'escritura',
        'productividad',
        'audio',
        'investigacion',
        'local',
      ]),
      pricing: z.enum(['gratis', 'freemium', 'de-pago']),
    }),
  }),
  agentes: defineCollection({
    loader: glob({ base: './src/content/agentes', pattern: '**/*.md' }),
    schema: z.object({
      ...listing,
      category: z.enum(['programacion', 'multiagente', 'automatizacion']),
      pricing: z.enum(['gratis', 'freemium', 'de-pago']).optional(),
    }),
  }),
  skills: defineCollection({
    loader: glob({ base: './src/content/skills', pattern: '**/*.md' }),
    schema: z.object({
      ...listing,
      // Las skills propias se descargan desde el sitio con una ruta relativa (/descargas/...).
      url: z.union([z.string().url(), z.string().regex(/^\/\S*$/)]),
      category: z.enum(['claude', 'cursor', 'estandar', 'otra']),
    }),
  }),
  mcp: defineCollection({
    loader: glob({ base: './src/content/mcp', pattern: '**/*.md' }),
    schema: z.object({
      ...listing,
      tipo: z.enum(['servidor', 'registro', 'referencia']),
    }),
  }),
  guias: defineCollection({
    loader: glob({ base: './src/content/guias', pattern: '**/*.md' }),
    schema: z.object({
      ...common,
      updated: z.coerce.date(),
      faq: z
        .array(
          z.object({
            q: z.string(),
            a: z.string(),
          }),
        )
        .default([]),
    }),
  }),
  tutoriales: defineCollection({
    loader: glob({ base: './src/content/tutoriales', pattern: '**/*.md' }),
    schema: z.object({
      ...common,
      updated: z.coerce.date(),
      minutes: z.number().int().min(5).max(90),
      level: z.enum(['novato']).default('novato'),
    }),
  }),
};
