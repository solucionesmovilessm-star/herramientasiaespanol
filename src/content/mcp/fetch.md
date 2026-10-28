---
title: Servidor MCP Fetch
description: "Servidor de referencia que descarga el contenido de una web y lo convierte para que un modelo pueda leerlo."
url: https://github.com/modelcontextprotocol/servers/tree/main/src/fetch
tipo: referencia
destacado: false
patrocinado: false
lang: es
updated: 2026-10-28
tags:
  - web
  - referencia
---

Fetch es el servidor de referencia para traer el contenido de una URL y dejarlo en un formato más cómodo para un modelo. Sustituye a copiar y pegar una página entera cuando el cliente no tiene otra forma de abrirla.

## Qué hace

- Pedir una dirección y devolver el contenido procesado.
- Servir de ejemplo de una herramienta de solo lectura, si lo configuras así.
- Vivir en el mismo repositorio que el resto de servidores de referencia del protocolo.

## Ten en cuenta

Descargar una web puede incluir texto que no esperabas, también instrucciones maliciosas escondidas en la página. No lo conectes a sitios en los que has iniciado sesión. Sigue siendo un ejemplo de referencia, no un proxy de producción.
