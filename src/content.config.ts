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
        'grok',
      ]),
      pricing: z.enum(['gratis', 'freemium', 'de-pago']),
      creditosGratis: z.boolean().optional(),
      interfazEspanol: z.boolean().optional(),
      precioDesde: z.string().min(2).optional(),
      pruebaGratisDias: z.number().int().positive().optional(),
      plataformas: z.array(z.enum(['web', 'ios', 'android', 'windows', 'macos', 'linux', 'extension'])).optional(),
      pros: z.array(z.string().min(2)).optional(),
      contras: z.array(z.string().min(2)).optional(),
      noEsPara: z.string().min(10).optional(),
      precioVerificado: z.coerce.date().optional(),
      tutorial: z.string().min(2).optional(),
    }),
  }),
  agentes: defineCollection({
    loader: glob({ base: './src/content/agentes', pattern: '**/*.md' }),
    schema: z.object({
      ...listing,
      category: z.enum(['programacion', 'multiagente', 'automatizacion']),
      pricing: z.enum(['gratis', 'freemium', 'de-pago']),
    }),
  }),
  skills: defineCollection({
    loader: glob({ base: './src/content/skills', pattern: '**/*.md' }),
    schema: z.object({
      ...listing,
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
  comparativas: defineCollection({
    loader: glob({ base: './src/content/comparativas', pattern: '**/*.md' }),
    schema: z.object({
      title: z.string().min(2),
      description: z.string().min(40).max(220),
      lang: z.enum(['es', 'en']).default('es'),
      draft: z.boolean().default(false),
      updated: z.coerce.date(),
      left: z.string().min(2),
      right: z.string().min(2),
      veredicto: z.string().min(40),
    }),
  }),
  tutoriales: defineCollection({
    loader: glob({ base: './src/content/tutoriales', pattern: '**/*.md' }),
    schema: z.object({
      ...common,
      updated: z.coerce.date(),
      minutes: z.number().int().min(5).max(90).optional(),
      level: z.enum(['novato']).default('novato'),
    }),
  }),
};
