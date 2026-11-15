---
title: SkillEvaluator
description: "Herramienta oficial de NVIDIA para evaluar skills de agentes: revisa la calidad y compara el rendimiento con la skill y sin ella. El primer nivel se puede ejecutar sin clave de API."
url: https://docs.nvidia.com/skills/skillevaluator/
category: codigo
pricing: gratis
destacado: false
patrocinado: false
lang: es
updated: 2026-11-15
tags:
  - skills
  - nvidia
  - codigo-abierto
---

SkillEvaluator es la herramienta oficial de NVIDIA para evaluar skills de agentes. Primero hace comprobaciones de calidad y después compara cómo rinde un agente con la skill y sin ella.

## Qué puedes hacer

- Ejecutar el primer nivel de validación sin clave de API. Se instala con `pip install skillevaluator`. La documentación también indica `uv tool install`.
- Preguntarle a Claude Code, Codex u otro agente si la skill está bien hecha. Esa skill se añade con:

```bash
npx skills add NVIDIA/SkillEvaluator
```

- Revisar las skills en cada pull request con el flujo de integración continua que publica el proyecto.

## Precio

Es gratis y de código abierto, con licencia Apache-2.0. Las evaluaciones que usen un modelo de pago pueden tener un coste aparte, el de ese modelo. La documentación está en [docs.nvidia.com/skills/skillevaluator](https://docs.nvidia.com/skills/skillevaluator/) y el código en [NVIDIA/SkillEvaluator](https://github.com/NVIDIA/SkillEvaluator).

## Ten en cuenta

A 15 de noviembre de 2026, hacia las 12:45 (hora de Madrid), el repositorio tenía unas 1.300 estrellas según la API de GitHub. Sirve para revisar una skill antes de fiarte de ella, no para sustituir la lectura del archivo. Si aún no has instalado una skill, mira el tutorial [cómo añadir skills a Claude](/tutoriales/como-anadir-skills-a-claude).
