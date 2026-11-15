---
title: ffmpeg-skill
description: "Skill y servidor MCP para que un agente edite vídeo y audio con FFmpeg en tu ordenador, sin nube ni claves de API. Mide el archivo al empezar y comprueba el resultado al terminar."
url: https://github.com/kajisho5/ffmpeg-skill
category: otra
destacado: false
patrocinado: false
lang: es
updated: 2026-11-15
tags:
  - video
  - ffmpeg
  - codigo-abierto
---

ffmpeg-skill es un motor local para que un agente (Claude Code, Cursor, Codex u otro cliente MCP) edite vídeo y audio con FFmpeg en tu ordenador. No usa una nube ni pide claves de API.

Expone herramientas con un contrato que el agente puede leer. El README habla de 42 herramientas: cortar, subtítulos, reencuadrar, normalizar el volumen y exportar, entre otras. Cada trabajo empieza midiendo el archivo y, al terminar, comprueba el resultado.

## Cómo instalarla

Hace falta tener FFmpeg y Python 3. El comando que documenta el proyecto es:

```bash
npx ffmpeg-skill
```

El código está en [kajisho5/ffmpeg-skill](https://github.com/kajisho5/ffmpeg-skill). Si es tu primera skill, mira el tutorial [cómo añadir skills a Claude](/tutoriales/como-anadir-skills-a-claude). Si aún no has usado un servidor MCP, mira [qué es un servidor MCP](/guias/que-es-un-servidor-mcp).

## Precio

Es gratis y de código abierto, con licencia MIT.

## Ten en cuenta

El 14 de noviembre de 2026 estuvo entre los repositorios de skills que más subían. A 15 de noviembre de 2026, hacia las 12:45 (hora de Madrid), tenía unas 5.750 estrellas según la API de GitHub. El número de herramientas es el que cita el README, no un recuento de esta ficha. FFmpeg trabaja con el archivo que le des: no lo apuntes a una carpeta con vídeos que no quieras transformar.
