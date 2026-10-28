import type { APIRoute } from 'astro';
import { loadPublished } from '../lib/content';
import { markOf } from '../lib/mark';
import { agentCategories, categories, mcpTipos, skillCategories } from '../lib/site';

export const GET: APIRoute = async () => {
  const [tools, agents, skills, servers, guides, tutorials] = await Promise.all([
    loadPublished('herramientas'),
    loadPublished('agentes'),
    loadPublished('skills'),
    loadPublished('mcp'),
    loadPublished('guias'),
    loadPublished('tutoriales'),
  ]);

  const items = [
    ...tools.map((entry) => ({
      title: entry.data.title,
      href: `/herramientas/${entry.id}`,
      kind: 'Herramienta',
      hint: categories[entry.data.category],
      ...markOf(entry.data.title),
    })),
    ...agents.map((entry) => ({
      title: entry.data.title,
      href: `/agentes/${entry.id}`,
      kind: 'Agente',
      hint: agentCategories[entry.data.category],
      ...markOf(entry.data.title),
    })),
    ...skills.map((entry) => ({
      title: entry.data.title,
      href: `/skills/${entry.id}`,
      kind: 'Skill',
      hint: skillCategories[entry.data.category],
      ...markOf(entry.data.title),
    })),
    ...servers.map((entry) => ({
      title: entry.data.title,
      href: `/mcp/${entry.id}`,
      kind: 'MCP',
      hint: mcpTipos[entry.data.tipo],
      ...markOf(entry.data.title),
    })),
    ...guides.map((entry) => ({
      title: entry.data.title,
      href: `/guias/${entry.id}`,
      kind: 'Guía',
      hint: 'Guía',
      ...markOf(entry.data.title),
    })),
    ...tutorials.map((entry) => ({
      title: entry.data.title,
      href: `/tutoriales/${entry.id}`,
      kind: 'Tutorial',
      hint: `${entry.data.minutes} min`,
      ...markOf(entry.data.title),
    })),
  ];

  return new Response(JSON.stringify(items), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
