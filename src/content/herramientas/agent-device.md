---
title: agent-device
description: "Capa de código abierto para que un agente controle y compruebe apps en móviles, televisores, web y escritorio. Incluye una línea de comandos, un servidor MCP y una API de Node.js."
url: https://agent-device.dev
category: codigo
pricing: gratis
destacado: false
patrocinado: false
lang: es
updated: 2026-11-15
tags:
  - movil
  - agentes
  - codigo-abierto
---

agent-device, de Callstack, es una capa de código abierto para que un agente de programación controle y compruebe apps en dispositivos y simuladores. Cubre iOS, Android, HarmonyOS, tvOS, Android TV, web, macOS y Linux, en local o en la nube.

Expone una línea de comandos, un servidor MCP y una API de Node.js. El agente lee instantáneas de accesibilidad, no solo capturas, y actúa sobre referencias.

## Qué puedes hacer

- Pedirle a tu agente que abra una app en un simulador o en un dispositivo y compruebe lo que ve.
- Instalarlo con npm. Hace falta Node.js 22.12 o posterior. La automatización web pide Node.js 24 o posterior:

```bash
npm install -g agent-device@latest
```

- Usarlo como servidor MCP. Si es tu primero, mira la guía [qué es un servidor MCP](/guias/que-es-un-servidor-mcp).

## Precio

Es gratis y de código abierto, con licencia MIT. El código está en [callstack/agent-device](https://github.com/callstack/agent-device) y la web del proyecto es [agent-device.dev](https://agent-device.dev).

## Ten en cuenta

Según el README, lo usan equipos como los de Expensify y Shopify, y alimenta la automatización móvil de [T3 Code](/agentes/t3-code). A 15 de noviembre de 2026, hacia las 12:45 (hora de Madrid), el repositorio tenía unas 5.399 estrellas según la API de GitHub. No lo conectes a un dispositivo con cuentas o datos que no quieras que el agente toque.
