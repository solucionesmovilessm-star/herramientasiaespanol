---
title: Servidor MCP de archivos
description: "Servidor de referencia del protocolo MCP para leer y modificar carpetas que tú autorizas. Es un ejemplo oficial, no un producto cerrado."
url: https://github.com/modelcontextprotocol/servers/tree/main/src/filesystem
tipo: referencia
destacado: true
patrocinado: false
lang: es
updated: 2026-10-28
tags:
  - archivos
  - referencia
---

El servidor filesystem deja que un cliente MCP lea y cambie archivos dentro de las carpetas que pongas en la configuración. Nada más. Si no escribes una ruta, no debe tocar el resto del disco.

## Qué hace

- Listar y leer archivos.
- Crear, mover y buscar dentro de esas carpetas.
- Pedir aprobación en clientes como Claude Desktop antes de actuar, según explica la documentación del protocolo.

## Cómo probarlo

El paso a paso, con una sola carpeta de prueba, está en [cómo instalar un servidor MCP](/tutoriales/como-instalar-un-servidor-mcp). La guía oficial es [Connect to local MCP servers](https://modelcontextprotocol.io/docs/develop/connect-local-servers).

## Ten en cuenta

El repositorio de servidores de referencia dice que son ejemplos para aprender, no productos listos para producción. El proceso corre con tu usuario: puede hacer lo mismo que tú en esas carpetas. No le des tu carpeta personal entera el primer día.
