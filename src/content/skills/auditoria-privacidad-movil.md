---
title: "Auditoría de privacidad y malware del móvil (Android)"
description: "Skill propia para Claude Code que revisa por ADB, en modo solo lectura, un móvil Android conectado por USB y genera un informe de privacidad y seguridad."
url: /descargas/skills/auditoria-privacidad-movil.zip
category: otra
destacado: false
patrocinado: false
lang: es
updated: 2026-10-28
tags:
  - android
  - privacidad
  - seguridad
  - adb
---

Skill para Claude Code que revisa un móvil Android conectado por USB, en modo solo lectura, y genera un informe de privacidad y seguridad.

## Qué hace

- **Configuración del sistema:** modelo, versión de Android, parche de seguridad, tipo de build, SELinux, Play Protect, depuración USB, VPN siempre activa y señales de root.
- **Accesos de alto riesgo:** servicios de accesibilidad activos, apps que leen notificaciones, administradores de dispositivo, apps con superposición sobre otras, apps que pueden instalar otras y acceso a todos los archivos.
- **Cámara, fotos y miniaturas:** apps con permiso de cámara concedido, uso reciente del servicio de cámara y miniaturas en las carpetas de fotos.
- **Resumen por app:** tabla con instalador, fecha de instalación y señales. Cada app recibe un puntaje de riesgo alto y medio según SMS, registro de llamadas, micrófono, ubicación, contactos, instalación fuera de tienda, instalación reciente y nombres sospechosos.
- **Guía de revisión:** qué mirar primero, dónde revisar cada permiso en Ajustes y qué significa cada señal.

## Qué no hace

- No instala, desinstala, revoca permisos ni cambia ajustes del teléfono.
- No copia archivos del teléfono ni lee sus fotos.
- No usa root ni lee `/data/system`.
- No reemplaza un antivirus: las señales son pistas para revisar, no un veredicto de malware.

## Requisitos

- Móvil Android con Depuración USB activada y la conexión aceptada en el teléfono.
- `adb` (platform-tools) y bash. Probada en macOS.

## Limitaciones

- Probada en un solo equipo: Samsung SM-F926B con Android 15. Otros fabricantes pueden mostrar otra salida en `dumpsys`.
- Los perfiles secundarios (Secure Folder, perfil de trabajo) no son accesibles por ADB y quedan fuera.
- `appops allow` puede ser el valor por defecto y no un permiso concedido; el informe lo separa.

## Instalación

Descarga el zip con el botón de esta ficha, descomprímelo y copia la carpeta `auditoria-privacidad-movil` en `~/.claude/skills/`. Si solo quieres leerla, aquí tienes el [SKILL.md](/descargas/skills/auditoria-privacidad-movil/SKILL.md) y el [script](/descargas/skills/auditoria-privacidad-movil/scripts/escanear.sh).

## Uso

```bash
bash ~/.claude/skills/auditoria-privacidad-movil/scripts/escanear.sh ./auditoria-movil
```

Genera `informe.md` (para leer), `apps.tsv` (una fila por app) y las listas de appops en la carpeta indicada.
