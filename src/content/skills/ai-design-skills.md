---
title: AI Design Skills
description: "Colección de skills de diseño para Claude Code, Cursor, Codex y Windsurf. Por ahora incluye una skill que crea una landing page desde cero, con textos y sistema visual."
url: https://github.com/elayadesign/ai-design-skills
category: otra
destacado: false
patrocinado: false
lang: es
updated: 2026-10-29
tags:
  - diseno
  - landing-page
  - codigo-abierto
---

AI Design Skills es una colección de skills de diseño para herramientas de programación con IA. Cada skill va en su propia carpeta, así que instalas solo la que necesitas.

## Qué incluye

- `landing-page-design`: crea una landing page (página de aterrizaje) desde cero. Empieza con unas preguntas, propone la estructura, escribe textos pensados para convertir visitas en clientes y define un sistema visual completo: tipografía, espaciado, bordes y animación.
- Por ahora es la única skill de la colección. El autor dice que llegarán más.

## Cómo instalarla en Claude Code

Según el README, en la carpeta de tu proyecto:

```bash
mkdir -p .claude/skills
git clone https://github.com/elayadesign/ai-design-skills.git /tmp/ai-design-skills
cp -r /tmp/ai-design-skills/skills/landing-page-design .claude/skills/
```

Después, pídele a Claude lo que cubre la skill con tus palabras. El repositorio también explica cómo usarla en Cursor, Codex y Windsurf.

## Precio

Es gratuita y de código abierto, con licencia MIT.

## Ten en cuenta

El repositorio se creó en julio de 2026 y tenía unas 11.400 estrellas a 29 de octubre de 2026. Para entender qué es una skill, mira el tutorial [cómo añadir skills a Claude](/tutoriales/como-anadir-skills-a-claude).
