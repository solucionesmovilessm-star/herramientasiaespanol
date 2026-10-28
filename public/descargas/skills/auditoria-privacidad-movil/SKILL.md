---
name: auditoria-privacidad-movil
description: Revisa en modo solo lectura la privacidad de un móvil Android conectado por ADB (permisos de cámara y fotos, apps con acceso a todos los archivos, uso reciente de la cámara y cachés de miniaturas). Úsala cuando el usuario pida comprobar qué apps acceden a su cámara o a sus fotos. BETA, no probada en dispositivo real.
---
# Auditoría de privacidad del móvil (Android, solo lectura) — BETA

> BETA: no probada en dispositivo real. La salida de `dumpsys` cambia según la versión de Android y el fabricante, así que adapta el análisis a lo que veas.

## Reglas
- Solo lectura. Usa únicamente los comandos de esta lista o lecturas equivalentes (`dumpsys`, `pm list`, `appops get`, `appops query-op`, `ls`).
- Nunca ejecutes comandos que cambien el móvil: nada de `pm revoke`, `pm grant`, `pm uninstall`, `appops set`, `adb install`, `rm`, `adb push` ni `adb pull` sin permiso explícito del usuario.
- No uses root (`su`, `adb root`) ni intentes leer `/data/system`: sin root no es accesible y no prometas resultados de ahí.
- No afirmes espionaje sin pruebas. Distingue una miniatura (vista previa) de la foto original.
- Las recomendaciones para revocar permisos se hacen desde Ajustes > Gestor de permisos, y las hace el usuario.

## Pasos
1. Comprueba la conexión (el usuario tiene que activar la Depuración USB y aceptar el aviso en el móvil):
   `adb devices`
2. Lista las apps instaladas por el usuario:
   `adb shell pm list packages -3`
3. Apps con permiso de cámara concedido (bucle en el ordenador, compatible con bash):
   ```bash
   for p in $(adb shell pm list packages -3 | tr -d '\r' | sed 's/^package://'); do
     adb shell dumpsys package "$p" | grep -q "android.permission.CAMERA: granted=true" && echo "$p"
   done
   ```
   Como contraste: `adb shell appops query-op CAMERA allow`
4. Apps con acceso a fotos (`READ_MEDIA_IMAGES`, `READ_MEDIA_VISUAL_USER_SELECTED` en Android 14 o superior, y `READ_EXTERNAL_STORAGE` en versiones antiguas):
   ```bash
   for p in $(adb shell pm list packages -3 | tr -d '\r' | sed 's/^package://'); do
     adb shell dumpsys package "$p" | grep -E "android.permission.(READ_MEDIA_IMAGES|READ_MEDIA_VISUAL_USER_SELECTED|READ_EXTERNAL_STORAGE): granted=true" | sed "s/^/$p: /"
   done
   ```
5. Apps con «acceso a todos los archivos»:
   `adb shell appops query-op MANAGE_EXTERNAL_STORAGE allow`
6. Uso reciente de la cámara:
   `adb shell dumpsys appops --op CAMERA` (muestra los últimos accesos por app, si tu versión lo registra)
   `adb shell dumpsys media.camera` (busca la sección de eventos o clientes recientes, si existe en tu versión)
7. Miniaturas en el almacenamiento compartido (puede que la carpeta no exista):
   `adb shell ls -la /sdcard/DCIM/.thumbnails`
   `adb shell ls /sdcard/DCIM/.thumbnails | wc -l`
   Explica que son vistas previas de baja calidad, no las fotos originales.
8. Entrega una tabla: app, permiso, ¿lo necesita?, recomendación (revocar desde Ajustes > Gestor de permisos).
