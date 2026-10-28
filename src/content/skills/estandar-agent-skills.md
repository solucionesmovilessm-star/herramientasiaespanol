---
title: Agent Skills
description: "Estándar abierto para ampliar un agente con una carpeta y un archivo SKILL.md. Lo publicó Anthropic y lo documenta agentskills.io."
url: https://agentskills.io
category: estandar
destacado: true
patrocinado: false
lang: es
updated: 2026-10-28
tags:
  - estandar
  - skillmd
---

Agent Skills es un formato abierto: una carpeta con un `SKILL.md`. En ese archivo van el nombre, una descripción y las instrucciones. El agente lee el nombre y la descripción al empezar. El resto del archivo solo entra cuando la tarea encaja.

## Qué incluye

- Un `SKILL.md` obligatorio, con `name` y `description`.
- Carpetas opcionales para scripts, referencias y plantillas.
- El mismo paquete se puede llevar a otro agente que entienda el estándar. Cursor lo documenta en [sus skills](/skills/cursor-skills). Claude lo usa en [sus skills](/skills/claude).

## Cómo se usa

La explicación corta para alguien que empieza está en el tutorial [cómo añadir skills a Claude](/tutoriales/como-anadir-skills-a-claude). La especificación completa está en agentskills.io.

## Ten en cuenta

Una skill es código e instrucciones. Léela antes de activarla, igual que no instalarías un programa sin saber qué hace.
