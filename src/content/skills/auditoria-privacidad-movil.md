---
title: "Auditoría de privacidad del móvil Android (BETA)"
description: "Skill propia, en BETA y no probada en dispositivo real: un agente revisa por ADB y en solo lectura qué apps de tu Android usan la cámara o tus fotos."
url: https://herramientasiaespanol.com/descargas/skills/auditoria-privacidad-movil/SKILL.md
category: otra
destacado: false
patrocinado: false
lang: es
updated: 2026-10-28
tags:
  - android
  - privacidad
  - adb
  - beta
---

> **BETA: no probada en dispositivo real.** Hemos revisado los comandos con la documentación oficial de Android, pero no los hemos ejecutado en un móvil. La salida puede cambiar según la versión de Android y el fabricante.

Es una skill del estándar Agent Skills (`SKILL.md`) para Claude Code, Cursor u otro agente compatible. Con el móvil conectado por USB y la Depuración USB activada, el agente usa ADB para revisar qué apps tienen permiso de cámara o de fotos, cuáles tienen acceso a todos los archivos y si hay cachés de miniaturas. Al final te da una tabla con recomendaciones.

## Qué revisa

- Apps con permiso de cámara concedido.
- Apps con acceso a fotos: `READ_MEDIA_IMAGES`, la selección parcial de Android 14 y `READ_EXTERNAL_STORAGE` en versiones antiguas.
- Apps con «acceso a todos los archivos» (`MANAGE_EXTERNAL_STORAGE`).
- Accesos recientes a la cámara, si tu versión de Android los registra.
- Miniaturas en `DCIM/.thumbnails`. Son vistas previas, no las fotos originales.

## Qué no hace

- No cambia nada en el móvil: no revoca permisos, no borra, no instala y no copia fotos fuera.
- No usa root ni intenta leer zonas protegidas como `/data/system`.
- No da por hecho que una app espía: solo enseña qué permisos tiene cada una.

## Cómo usarla

1. Descarga el `SKILL.md` desde el botón de esta ficha.
2. Guárdalo en una carpeta `auditoria-privacidad-movil/` dentro de las skills de tu agente, por ejemplo `.claude/skills/` o `.cursor/skills/`.
3. Instala ADB (Android SDK Platform Tools), activa la Depuración USB en el móvil y pide al agente que revise la privacidad de tu teléfono.

Los permisos se quitan tú mismo desde Ajustes > Gestor de permisos.
