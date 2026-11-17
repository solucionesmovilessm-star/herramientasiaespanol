import type { APIRoute } from 'astro';
import { loadHackeos, loadPublished } from '../lib/content';
import { markOf } from '../lib/mark';
import { pagePath } from '../lib/page-path';
import { formatDate } from '../lib/seo';
import { agentCategories, categories, mcpTipos, skillCategories } from '../lib/site';

export const GET: APIRoute = async () => {
  const [tools, agents, skills, servers, guides, tutorials, hackeos] = await Promise.all([
    loadPublished('herramientas'),
    loadPublished('agentes'),
    loadPublished('skills'),
    loadPublished('mcp'),
    loadPublished('guias'),
    loadPublished('tutoriales'),
    loadHackeos(),
  ]);

  const items = [
    ...tools.map((entry) => ({
      title: entry.data.title,
      href: pagePath(`/herramientas/${entry.id}`),
      kind: 'Herramienta',
      hint: categories[entry.data.category],
      ...markOf(entry.data.title),
    })),
    ...agents.map((entry) => ({
      title: entry.data.title,
      href: pagePath(`/agentes/${entry.id}`),
      kind: 'Agente',
      hint: agentCategories[entry.data.category],
      ...markOf(entry.data.title),
    })),
    ...skills.map((entry) => ({
      title: entry.data.title,
      href: pagePath(`/skills/${entry.id}`),
      kind: 'Skill',
      hint: skillCategories[entry.data.category],
      ...markOf(entry.data.title),
    })),
    ...servers.map((entry) => ({
      title: entry.data.title,
      href: pagePath(`/mcp/${entry.id}`),
      kind: 'MCP',
      hint: mcpTipos[entry.data.tipo],
      ...markOf(entry.data.title),
    })),
    ...guides.map((entry) => ({
      title: entry.data.title,
      href: pagePath(`/guias/${entry.id}`),
      kind: 'Guía',
      hint: 'Guía',
      ...markOf(entry.data.title),
    })),
    ...tutorials.map((entry) => ({
      title: entry.data.title,
      href: pagePath(`/tutoriales/${entry.id}`),
      kind: 'Tutorial',
      hint: `${entry.data.minutes} min`,
      ...markOf(entry.data.title),
    })),
    ...hackeos.map((entry) => ({
      title: entry.data.title,
      href: pagePath(`/hackeo-del-dia/${entry.id}`),
      kind: 'Hackeo',
      hint: formatDate(entry.data.date),
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
