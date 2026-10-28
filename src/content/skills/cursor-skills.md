---
title: Skills en Cursor
description: "Cursor carga skills del estándar Agent Skills desde carpetas del proyecto o de tu usuario, y también desde carpetas de Claude y Codex."
url: https://cursor.com/docs/skills
category: cursor
destacado: false
patrocinado: false
lang: es
updated: 2026-10-28
tags:
  - cursor
  - skillmd
---

Cursor entiende el formato Agent Skills. Al abrir el editor busca carpetas `SKILL.md` y enseña al agente el nombre y la descripción. Si la tarea encaja, lee el resto.

## Dónde las busca

La documentación de Cursor indica estas rutas:

- En el proyecto: `.agents/skills/` y `.cursor/skills/`.
- En tu usuario: `~/.agents/skills/` y `~/.cursor/skills/`.
- Por compatibilidad, también carpetas de Claude y de Codex (`.claude/skills/`, `.codex/skills/` y las equivalentes en tu carpeta de usuario).

## Qué puedes hacer

- Escribir un `SKILL.md` con `name` y `description` para una tarea que repites en el repositorio.
- Invocarla a mano escribiendo `/` y el nombre en el chat del agente.
- Limitarla a ciertos archivos con el campo `paths`, si quieres que solo aparezca al tocar esos ficheros.

## Ten en cuenta

Una skill de tu usuario no viaja sola a un agente en la nube. La documentación de Cursor explica qué se copia y qué no. Si la skill tiene que estar en un proyecto compartido, déjala dentro del repositorio.
