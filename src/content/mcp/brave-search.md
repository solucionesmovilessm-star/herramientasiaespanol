---
title: Servidor MCP de Brave Search
description: "Servidor oficial de Brave para buscar en la web, noticias, imágenes y otros índices de su API desde un cliente MCP."
url: https://github.com/brave/brave-search-mcp-server
tipo: servidor
destacado: false
patrocinado: false
lang: es
updated: 2026-10-28
tags:
  - busqueda
  - brave
---

Brave mantiene un servidor MCP para su API de búsqueda. El README describe búsquedas web, de negocios locales, lugares, imágenes, vídeo, noticias y un resumen. El transporte por defecto de la serie 2 es STDIO, el modo local habitual de MCP.

## Qué hace

- Lanzar una búsqueda y devolver resultados al asistente.
- Sustituir al servidor de Brave que antes estaba en el repositorio de referencia y que quedó archivado.
- Pedir una clave de la API de Brave. Sin esa clave el servidor no puede consultar el índice.

## Ten en cuenta

La clave es una credencial. No la pegues en un repositorio público ni en una captura. El idioma por defecto de varios parámetros del README es el inglés: si buscas en español, revisa los parámetros de idioma en la documentación del propio servidor.
