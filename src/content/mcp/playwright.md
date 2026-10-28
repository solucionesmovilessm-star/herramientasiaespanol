---
title: Servidor MCP de Playwright
description: "Servidor MCP de Microsoft para automatizar un navegador con el árbol de accesibilidad de Playwright, sin depender de capturas."
url: https://github.com/microsoft/playwright-mcp
tipo: servidor
destacado: false
patrocinado: false
lang: es
updated: 2026-10-28
tags:
  - navegador
  - microsoft
---

El servidor Playwright MCP, de Microsoft, deja que un modelo interactúe con una página usando la estructura de accesibilidad de Playwright, no una captura de pantalla. El paquete que documentan es `@playwright/mcp`.

## Qué hace

- Abrir páginas y leer su estructura.
- Pulsar y escribir en elementos cuando el cliente lo pide y tú lo apruebas.
- Servir para flujos largos en los que hace falta conservar el estado del navegador.

El propio README distingue este servidor de la vía CLI con skills, que ellos recomiendan para algunos agentes de código porque gasta menos contexto. Si solo quieres probar una web local desde Claude con una skill de ejemplo, mira [Webapp Testing](/skills/claude-webapp-testing).

## Ten en cuenta

Hace falta Node.js. No lo conectes a una sesión ya iniciada de un servicio sensible. El navegador que abre es el de la automatización, y aun así puede llegar a sitios reales si le das una URL.
