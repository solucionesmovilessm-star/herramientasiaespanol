---
title: "Una versión falsa de la extensión Claude Code se coló en Cursor: cómo saber si te afectó"
date: 2026-10-30
summary: "El 29 de octubre, la tienda de extensiones de Cursor ofreció durante unas 11 horas una versión trucada (2.1.313) de la extensión Claude Code que intentaba dejar una puerta trasera en la compu. Afectó como mucho a 5.000 usuarios y no la hizo Anthropic. Te explicamos cómo comprobar en un minuto si te tocó y qué hacer."
sources:
  - https://cursor.com/blog/claude-code-extension-security-notice
  - https://www.stepsecurity.io/blog/claude-code-extension-trojanized
  - https://x.com/cursor_ai/status/2116074289053175808
  - https://x.com/ArtemR/status/2116061589715689788
ficha: cursor
---

## Qué pasó

El **29 de octubre de 2026**, entre las **10:27 y las 21:35 (hora de Madrid)**, la tienda de extensiones de **Cursor** (un editor de código con IA) ofreció una **versión modificada y maliciosa** de la extensión **Claude Code**: la **2.1.313**.

- **No la hizo Anthropic.** Es la extensión oficial "reempaquetada" con código malicioso agregado.
- **Afectó como mucho a 5.000 usuarios** de Cursor, según la propia Cursor, que dice que los va a contactar directamente.
- También estuvo publicada en **Open VSX**, la tienda abierta de extensiones de la que Cursor copia su catálogo. Todavía no se sabe cómo llegó ahí.
- Cursor la retiró, apagó su tienda por precaución, revisó que ninguna otra extensión estuviera tocada y la volvió a abrir.
- La versión limpia es la **2.1.314**.

**¿Usás Claude Code en la terminal o en la app de Claude?** Esto **no te afecta**. Solo toca a quien tenía la **extensión** instalada en el editor y recibió la versión 2.1.313 ese día.

## Qué hacía la extensión falsa

Una "puerta trasera" es un acceso escondido para que otra persona pueda entrar a tu compu. Esta versión intentaba:

1. **Juntar datos de tu equipo:** nombre de la compu, usuario, sistema operativo, carpetas, tu email de Git, tu IP pública y los *nombres* de tus variables de entorno (no sus valores).
2. **Agregar una llave SSH del atacante** (una especie de "llave de la casa" para entrar a tu compu a distancia) con la etiqueta `svc-telemetry`.
3. **Abrir un túnel** desde tu compu hasta un servidor del atacante.
4. **Quedarse instalada aunque reinicies** (lo que se llama "persistencia").
5. **Mandar todo eso** al servidor del atacante.

### La parte tranquilizadora

- Según Cursor, por **errores en el propio código malicioso**, en la mayoría de las Mac y PC con Windows el túnel **falló**, salvo que hubieras abierto Cursor como administrador. En esos casos el atacante no pudo entrar.
- El **servidor del atacante ya está apagado**: Cursor lo dio de baja junto con el proveedor que lo alojaba.

**Ojo:** aunque el túnel haya fallado, la extensión igual **agregó la llave, instaló la persistencia y mandó los datos**. Por eso hay que revisar igual. Y **desinstalar la extensión no alcanza**: deja scripts sueltos que siguen funcionando.

## Cómo verificar si te afectó

Primero, la pregunta rápida: abrí Cursor, andá a la pestaña **Extensiones**, buscá **Claude Code** y mirá la versión. Si nunca la instalaste, o no se actualizó el 29/10, quedate tranquilo.

Si la tenías, hacé esta prueba. Busca la llave del atacante (`svc-telemetry`) en tu compu.

### En Mac (y Linux)

1. Abrí la app **Terminal**.
2. Copiá y pegá este comando (es de Cursor) y apretá Enter:

```
grep -qs svc-telemetry ~/.ssh/authorized_keys && echo "svc-telemetry key found" || echo "No key found; machine not impacted"
```

3. Leé la respuesta:
   - **"No key found; machine not impacted"** → no estás afectado.
   - **"svc-telemetry key found"** → estás afectado. Seguí con la sección de abajo.

En Linux, StepSecurity indica el mismo chequeo con `grep svc-telemetry ~/.ssh/authorized_keys` (si no muestra nada, la llave no está).

### En Windows

1. Abrí **PowerShell** (buscalo en el menú Inicio).
2. Copiá y pegá esto (es de Cursor) y apretá Enter:

```
$files = "$HOME\.ssh\authorized_keys", "C:\ProgramData\ssh\administrators_authorized_keys" | Where-Object { Test-Path $_ }
if ($files -and (Select-String svc-telemetry $files)) { "svc-telemetry key found" } else { "No key found; machine not impacted" }
```

3. Si dice **"No key found; machine not impacted"**, estás bien. Si dice **"svc-telemetry key found"**, estás afectado.

## Qué hacer si te afectó

1. **Limpiá la compu con el script oficial de Cursor.** En su [aviso de seguridad](https://cursor.com/blog/claude-code-extension-security-notice) podés bajar `remediate-macos.sh` (Mac) o `remediate-windows.ps1` (Windows). Borran la extensión maliciosa, la persistencia, los túneles abiertos y la llave del atacante.
   - **Mac:** en Terminal, desde la carpeta donde lo guardaste y con tu usuario normal (no como administrador): `bash remediate-macos.sh`
   - **Windows:** abrí PowerShell con **"Ejecutar como administrador"**, andá a la carpeta del archivo y corré: `powershell -ExecutionPolicy Bypass -File .\remediate-windows.ps1`
2. **Actualizá la extensión a la 2.1.314** o posterior.
3. **Cambiá tus claves y tokens desde otra compu que esté limpia:** llaves SSH, tokens de GitHub o GitLab, claves de la nube y cualquier contraseña o token que se usara en esa compu.
4. Si sabés que el túnel llegó a conectarse (por ejemplo, abriste Cursor como administrador), lo más seguro es **reinstalar la compu desde cero**.

## Un consejo para la próxima

[Artem R](https://x.com/ArtemR/status/2116061589715689788) recomienda activar en la configuración del editor el ajuste `extensions.installCooldownHours` (por ejemplo en **72**), para que las extensiones nuevas o sus actualizaciones esperen unos días antes de instalarse. Así, si sale una versión trucada, lo más probable es que la detecten y la retiren antes de que te llegue.

## Para expertos

Indicadores publicados por Cursor y StepSecurity:

- **Paquete:** `anthropic.claude-code@2.1.313`. VSIX darwin-arm64 SHA-256 `432ccdee3801f99e52b8fe31f69ea9870118e96ea7ef9ecabed1479621b5ab62`; win32-x64 SHA-256 `3de1722901165769893bef57c72594e9a54459faa23f3091b136b79966edd081`. `extension.js` malicioso SHA-256 `ecb58cb29078d9646ad1dcdbe51526f2d9cfea06be5fb2ab183e8ecc3ab6bf15` (contiene `134.209.82.225` y `svc-telemetry`). El payload corre al cargar el módulo, sin hooks de instalación.
- **Red:** C2 `134.209.82.225` (túnel SSH inverso `tunnel@` por TCP 22; beacon HTTP POST a `:8099/beacon`). Ya fuera de línea. Las consultas a `ifconfig.me` / `api.ipify.org` no son indicador por sí solas.
- **SSH:** llave autorizada con comentario `svc-telemetry`, fingerprint `SHA256:0Z6R+DF64Do2nwQic8a7kkfDLNNk4IiK+2U2Rci4htk`; llave del túnel `SHA256:KOAU57+ZG6u3MG4WwzPzPX2O5YEe9qdOC1Bl+6MVyDQ`.
- **Persistencia macOS:** `~/.config/.smt`, `~/.config/.smtk`, `$TMPDIR/.stk_<10 hex>`, `~/Library/LaunchAgents/com.apple.sysmond.plist` (label `com.apple.sysmond`). StepSecurity también menciona entradas cron `@reboot`.
- **Persistencia Windows:** `%USERPROFILE%\.config\smt.cmd`, `%USERPROFILE%\.config\smtk`, `%TEMP%\.stk_<10 hex>`, tarea programada `SysMon` (intenta correr como SYSTEM) y fallback `%APPDATA%\Microsoft\Windows\Start Menu\Programs\Startup\sysmon.cmd`.
- **Procesos:** `ssh -N -R '*:0:localhost:22'`, `autossh -M 0`, `schtasks /create /tn SysMon`, `systemsetup -setremotelogin on`, `Add-WindowsCapability -Online -Name OpenSSH.Server~~~~0.0.1.0`.
- **Datos exfiltrados:** el beacon incluía los nombres de variables de entorno que coinciden con KEY/TOKEN/SECRET/PASS/AWS/GCP, lo que revela qué credenciales había. Rotalas.

## Lo que aún no se sabe

- **Cómo entró** la versión maliciosa a Open VSX (credenciales robadas del publicador u otro método) no se estableció públicamente.
- **Cuántas personas fuera de Cursor** la instalaron desde Open VSX (VSCodium, Windsurf, etc.): no hay cifra pública.
