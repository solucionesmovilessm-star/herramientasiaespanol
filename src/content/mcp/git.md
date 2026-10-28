---
title: Servidor MCP de Git
description: "Servidor de referencia para leer, buscar y modificar un repositorio Git local desde un cliente MCP."
url: https://github.com/modelcontextprotocol/servers/tree/main/src/git
tipo: referencia
destacado: false
patrocinado: false
lang: es
updated: 2026-10-28
tags:
  - git
  - referencia
---

El servidor git del repositorio de referencia expone herramientas para trabajar con un repositorio que ya está en tu disco: ver el estado, buscar y hacer operaciones de Git. No es la cuenta de GitHub en la nube. Para la API de GitHub está el [servidor oficial de GitHub](/mcp/github).

## Qué hace

- Operar sobre la ruta de un repositorio que tú indicas.
- Arrancar con `uvx mcp-server-git`, como muestra el README del repositorio de servidores.
- Quedarse en local: no publica nada si tú no haces push.

## Ten en cuenta

Un agente con Git puede crear commits. Revisa el diff y el mensaje antes de subirlos a un remoto. Es un servidor de ejemplo: el README pide tratarlo como material de aprendizaje.
