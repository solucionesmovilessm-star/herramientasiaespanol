---
title: Impeccable
description: "Skill que da a tu agente de código un vocabulario de diseño: órdenes para pulir o atreverse más, y revisiones que detectan el diseño genérico hecho con IA antes de publicar."
url: https://github.com/pbakaus/impeccable
category: otra
destacado: false
patrocinado: false
lang: es
updated: 2026-10-31
tags:
  - diseno
  - agentes
  - codigo-abierto
---

Impeccable se presenta como un «vocabulario de diseño» para agentes de código. En vez de explicar con muchas palabras qué no te gusta de una interfaz, usas órdenes cortas y el agente sabe qué hacer.

## Qué puedes hacer

- Pedir que pula un diseño (`polish`) o que lo haga más atrevido (`bolder`).
- Pedir una crítica (`critique`) o una auditoría (`audit`) del diseño.
- Detectar el aspecto genérico típico de las webs hechas con IA antes de publicarlas.

## Cómo instalarla

En la carpeta de tu proyecto, abre la terminal y escribe:

```bash
npx impeccable install
```

El instalador detecta tus herramientas (Claude Code, Cursor, Codex…) y te pregunta si la quieres solo para ese proyecto o para todos. Después reinicia tu agente y escribe `/impeccable init` para que conozca tu proyecto. En Claude Code también puedes instalarla como plugin con `/plugin marketplace add pbakaus/impeccable`. Necesitas Node.js para usar `npx`.

## Revisión sin gastar tokens

Trae un detector que revisa tus archivos o una página sin usar IA: `npx impeccable detect src`. Avisa de cosas como textos con degradé, colores violetas típicos de la IA o poco contraste.

## Nuestra prueba

La probamos en una copia de esta web. El detector encontró 21 problemas en la página de inicio y en una ficha, sobre todo poco contraste en los logos y textos con degradé. Tras aplicar sus guías quedaron 7. Algunos avisos son cuestión de gusto, así que revisa cada cambio antes de publicarlo.

## Precio

Es gratuito y de código abierto, con licencia Apache 2.0. Tiene web propia: [impeccable.style](https://impeccable.style).

## Ten en cuenta

Las órdenes están en inglés, pero puedes hablar con tu agente en español y usar esas palabras clave. El 31 de octubre de 2026, hacia las 12:46 (hora de Madrid), tenía unas 97.650 estrellas según la API de GitHub. Para entender qué es una skill, mira el tutorial [cómo añadir skills a Claude](/tutoriales/como-anadir-skills-a-claude).
