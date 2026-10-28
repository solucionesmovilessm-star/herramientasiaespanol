---
title: Servidor MCP de memoria
description: "Servidor de referencia que guarda un grafo de datos sencillo para que el asistente recuerde hechos entre conversaciones."
url: https://github.com/modelcontextprotocol/servers/tree/main/src/memory
tipo: referencia
destacado: false
patrocinado: false
lang: es
updated: 2026-10-28
tags:
  - memoria
  - referencia
---

El servidor memory, en el repositorio de referencia de MCP, guarda un grafo pequeño de entidades y relaciones. La idea es que el asistente pueda anotar un hecho y recuperarlo en otra conversación.

## Qué hace

- Crear nodos y relaciones que el modelo consulta como herramienta.
- Arrancar en local con `npx`, como explican los ejemplos del repositorio.
- Vivir en tu máquina, no en un servicio aparte de este sitio.

## Ten en cuenta

Es un ejemplo de referencia. El propio repositorio pide no tratar estos servidores como producto cerrado y revisar la seguridad según tu caso. No guardes ahí contraseñas ni datos que no quieras en un archivo local.

El paquete que cita el README es `@modelcontextprotocol/server-memory`.
