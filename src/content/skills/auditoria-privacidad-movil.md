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

## Cómo preparar tu móvil (activar ADB)

¿Ya usas `adb`? Salta a la instalación. Si es tu primera vez, abre esta guía paso a paso (unos 10 minutos).

<details>
<summary><strong>Ver la guía para principiantes</strong></summary>

**ADB** (Android Debug Bridge) es un programa oficial de Google que permite que tu ordenador lea información del móvil a través del cable USB.

1. **Activa las Opciones de desarrollador.** Abre **Ajustes** y busca **Número de compilación**. Tócalo 7 veces seguidas. Verás un aviso tipo "Ahora eres desarrollador" y puede que te pida el PIN del móvil. La ruta cambia según la marca:
   - Samsung: Ajustes > Acerca del teléfono > Información de software > Número de compilación.
   - Google Pixel: Ajustes > Acerca del teléfono > Número de compilación.
   - Otras marcas: escribe "número de compilación" en el buscador de Ajustes.
2. **Activa la Depuración USB.** Vuelve a Ajustes y entra en el nuevo menú **Opciones de desarrollador**. Suele estar al final de Ajustes o en Ajustes > Sistema. Activa **Depuración USB** y confirma el aviso.
3. **Instala las Platform Tools en tu ordenador.** Así se llama el paquete gratuito de Google que incluye `adb`.
   - Descarga el ZIP para tu sistema (Windows, Mac o Linux) desde la [página oficial](https://developer.android.com/tools/releases/platform-tools).
   - Descomprímelo. Se crea una carpeta `platform-tools` con `adb` dentro.
   - Abre una terminal dentro de esa carpeta: en Windows, "Símbolo del sistema" o PowerShell; en Mac y Linux, "Terminal".
4. **Conecta el móvil con el cable USB** y desbloquea la pantalla. En el móvil aparecerá el aviso **¿Permitir depuración USB?** con la huella de tu ordenador. Pulsa **Permitir**. Si es tu ordenador de siempre, puedes marcar antes "Permitir siempre desde este ordenador".
5. **Comprueba que funciona.** En la terminal, escribe y pulsa Intro:

   ```bash
   adb devices
   ```

   En Mac o Linux, si estás dentro de la carpeta y te dice que no encuentra el comando, usa `./adb devices`. Verás una lista con un código (el número de serie) y una palabra al lado:
   - `device`: todo listo, ya puedes usar la skill.
   - `unauthorized`: falta aceptar el aviso del paso 4.
   - Lista vacía: el ordenador no detecta el móvil. Mira "Si no funciona".
6. **Al terminar, desactiva la Depuración USB** en Opciones de desarrollador, por seguridad. Si quieres, también puedes apagar las Opciones de desarrollador con el interruptor de arriba del todo.

**Si no funciona:**

- **Cable:** algunos cables solo cargan. Prueba con otro que sirva para pasar datos, o con otro puerto USB.
- **El aviso no aparece:** desconecta y vuelve a conectar el cable con la pantalla desbloqueada. Si sigue sin salir, en Opciones de desarrollador pulsa "Revocar autorizaciones de depuración USB" y conecta de nuevo.
- **Sale `unauthorized`:** desbloquea el móvil, acepta el aviso y vuelve a escribir `adb devices`.
- **Windows no detecta el móvil:** puede que necesites instalar el driver USB del fabricante (por ejemplo, el de Samsung).

</details>

## Instalación

Descarga el zip con el botón de esta ficha, descomprímelo y copia la carpeta `auditoria-privacidad-movil` en `~/.claude/skills/`. Si solo quieres leerla, aquí tienes el [SKILL.md](/descargas/skills/auditoria-privacidad-movil/SKILL.md) y el [script](/descargas/skills/auditoria-privacidad-movil/scripts/escanear.sh).

## Uso

```bash
bash ~/.claude/skills/auditoria-privacidad-movil/scripts/escanear.sh ./auditoria-movil
```

Genera `informe.md` (para leer), `apps.tsv` (una fila por app) y las listas de appops en la carpeta indicada.
