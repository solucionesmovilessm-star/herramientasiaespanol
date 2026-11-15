---
title: agent-desktop
description: "Herramienta de línea de comandos de Vercel Labs para que un agente use el escritorio en macOS, Windows y Linux. Lee el árbol de accesibilidad y no lleva un modelo dentro."
url: https://agent-browser.dev/desktop
category: codigo
pricing: gratis
destacado: false
patrocinado: false
lang: es
updated: 2026-11-15
tags:
  - escritorio
  - agentes
  - codigo-abierto
---

agent-desktop es una herramienta de línea de comandos, y también una librería en C, de Vercel Labs. Sirve para que un agente de IA use el escritorio en macOS, Windows y Linux. En lugar de capturas de pantalla, lee el árbol de accesibilidad del sistema y devuelve un JSON con una referencia por cada elemento sobre el que el agente puede hacer clic o escribir.

No lleva un modelo dentro: el bucle lo pone tu agente.

## Qué puedes hacer

- Dejar que tu agente pulse y escriba en el escritorio a partir de referencias, no de una imagen.
- Instalarlo con npm o con Homebrew:

```bash
npm install -g agent-desktop
brew install agent-desktop
```

## Precio

Es gratis y de código abierto, con licencia Apache-2.0. El agente que lo use puede tener su propio coste. El código está en [vercel-labs/agent-desktop](https://github.com/vercel-labs/agent-desktop) y la documentación en [agent-browser.dev/desktop](https://agent-browser.dev/desktop).

## Ten en cuenta

A 15 de noviembre de 2026, hacia las 12:45 (hora de Madrid), el repositorio tenía unas 23.986 estrellas según la API de GitHub. Un agente con acceso al escritorio puede abrir lo que tengas a mano: pruébalo primero en una cuenta y una carpeta que no te importe. Si lo que buscas es un navegador para agentes, mira también [Playwright](/mcp/playwright).
