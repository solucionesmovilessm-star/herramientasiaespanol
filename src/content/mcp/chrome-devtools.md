---
title: Servidor MCP de Chrome DevTools
description: "Servidor MCP oficial de Chrome DevTools para que un agente controle un Chrome real: navegar, inspeccionar la red y la consola, hacer capturas y pasar auditorías de Lighthouse."
url: https://developer.chrome.com/docs/devtools/agents
tipo: servidor
destacado: false
patrocinado: false
lang: es
updated: 2026-11-15
tags:
  - navegador
  - chrome
  - oficial
---

El equipo de Chrome DevTools publica un servidor MCP para que un agente de IA controle un Chrome real. Puede navegar, emular al usuario, inspeccionar la red y la consola, hacer capturas y pasar auditorías de Lighthouse de accesibilidad, SEO y rendimiento.

El soporte oficial es Chrome y Chrome for Testing. En Antigravity 2.0 viene incluido.

## Qué hace

- Abrir un Chrome de verdad y moverse por la página como lo haría una persona.
- Leer la red y la consola, y sacar capturas.
- Lanzar Lighthouse para accesibilidad, SEO y rendimiento.

## Cómo se instala

En Claude Code se instala como plugin desde el marketplace `ChromeDevTools/chrome-devtools-mcp`. En Codex, el comando que documentan es:

```bash
codex mcp add chrome-devtools -- npx chrome-devtools-mcp@latest
```

La documentación está en [developer.chrome.com/docs/devtools/agents](https://developer.chrome.com/docs/devtools/agents) y el código en [ChromeDevTools/chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp).

## Precio

Es gratis y de código abierto, con licencia Apache-2.0.

## Ten en cuenta

Google recoge estadísticas de uso por defecto. Se pueden desactivar con `--no-usage-statistics`. A 15 de noviembre de 2026, hacia las 12:45 (hora de Madrid), el repositorio tenía unas 56.577 estrellas según la API de GitHub. Es un navegador real: no lo dejes entrar en una sesión ya iniciada de un servicio sensible. Si es tu primer servidor MCP, empieza por la guía [qué es un servidor MCP](/guias/que-es-un-servidor-mcp). Para automatizar con el árbol de accesibilidad y sin Chrome, mira también [Playwright](/mcp/playwright).
