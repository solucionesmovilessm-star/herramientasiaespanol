---
name: auditoria-privacidad-movil
description: Audita en modo solo lectura un móvil Android conectado por ADB. Revisa privacidad (cámara, fotos, micrófono, ubicación, contactos, SMS, acceso a todos los archivos, miniaturas), accesos de alto riesgo (accesibilidad, lectura de notificaciones, administradores de dispositivo, superposición sobre otras apps, instalación de apps), señales de malware (apps instaladas fuera de tienda, apps recién instaladas, nombres sospechosos, root) y configuración de seguridad. Úsala cuando el usuario pida revisar si su móvil tiene malware, qué apps acceden a su cámara o fotos, o una auditoría de seguridad del teléfono.
---

# Auditoría de privacidad y malware del móvil (Android, solo lectura)

Probada en un Samsung SM-F926B con Android 15 (oct 2026). En otros fabricantes o versiones, la salida de `dumpsys` puede cambiar: adaptá el análisis a lo que veas.

## Reglas

- **Solo lectura.** El script usa únicamente `getprop`, `settings get`, `dumpsys`, `pm list`, `appops query-op`, `appops get` y `ls`.
- **Nunca** ejecutes `pm uninstall`, `pm revoke`, `pm grant`, `appops set`, `adb install`, `adb push`, `adb pull`, `rm`, `su`, `adb root` ni leas `/data/system` sin permiso explícito del usuario.
- **No revoques ni desinstales nada.** Los cambios los hace el usuario desde Ajustes.
- **No afirmes malware ni espionaje sin pruebas.** Una señal es algo para revisar, no un veredicto. Muchas apps legítimas tienen varias señales.
- **Distingue** «permiso concedido» (`dumpsys package`, lo que cuenta) de «modo appops allow» (puede ser el valor por defecto de la app o del sistema).
- **Distingue** miniatura (vista previa) de foto original.
- **Limitaciones que siempre aclarás:** sin root no se lee `/data/system`; los perfiles secundarios (Secure Folder, perfil de trabajo) no son accesibles por ADB; esta auditoría no reemplaza un antivirus.

## Pasos

1. **Conexión.** Ejecutá `adb devices`. Estados:
   - `device`: listo.
   - `unauthorized`: el usuario tiene que aceptar «Permitir depuración USB» en el móvil.
   - vacío: revisar cable (que sea de datos), Depuración USB y modo de conexión.

2. **Escaneo completo.** Ejecutá el script con una carpeta de salida dentro de la sesión:

   ```bash
   bash ~/.claude/skills/auditoria-privacidad-movil/scripts/escanear.sh <carpeta_de_salida>
   ```

   Genera `informe.md` (lectura), `apps.tsv` (una fila por app de usuario, con instalador, fechas y banderas) y las listas de appops. Tarda unos minutos por la cantidad de apps.

3. **Leer el informe** en este orden:
   - **Sección 1, configuración:** tipo de build (`user`), SELinux `Enforcing`, binarios de root, Play Protect, parche de seguridad. Un build no `user`, root o SELinux en `Permissive` son señales graves.
   - **Sección 2, accesos de alto riesgo:** accesibilidad, lectores de notificaciones, administradores de dispositivo, superposición, instalación de apps, acceso a todos los archivos. Cada entrada es una app que puede hacer mucho sin que se note.
   - **Sección 3, cámara y fotos:** apps con permiso concedido y uso reciente del servicio de cámara.
   - **Sección 4, resumen por app:** ordenadas por señales de alto riesgo. Revisá primero las de alto, después las de medio con combinaciones raras.
   - **Sección 5, apps deshabilitadas.**

4. **Triage de cada app con señales de alto riesgo.** Por cada una:
   - ¿La reconoce el usuario? ¿La instaló a propósito?
   - ¿Tiene sentido la combinación? Por ejemplo, una app de mensajería con lectura de SMS y registro de llamadas es rara; un launcher o una app de vigilancia del sistema puede tenerlas legítimamente.
   - Si es Samsung o Google del sistema (`com.samsung.*`, `com.google.*`, `com.sec.*`), suele ser legítima; igual se revisa.
   - Si la instaló fuera de tienda (`instalador` distinto de Play Store o Galaxy Store) y tiene permisos sensibles, es prioritaria.
   - Si se instaló hace menos de 30 días y tiene permisos sensibles, es prioritaria.

5. **Revisión manual de lo prioritario** (el usuario lo hace en el móvil, no vos):
   - Ajustes > Apps > [app] > Permisos: revisar y, si no hace falta, quitar el permiso.
   - Ajustes > Seguridad y privacidad > Accesos especiales (o Accesibilidad): revisar servicios activos.
   - Ajustes > Seguridad > Administradores de dispositivo: revisar y desactivar lo desconocido.
   - Ajustes > Apps > Acceso especial > Mostrar sobre otras apps: revisar la lista.
   - Ajustes > Apps > Acceso especial > Instalar apps desconocidas: revisar la lista.
   - Si hay una app sospechosa que no se reconoce: desinstalarla desde Ajustes, o con ayuda de Play Protect. Esa acción siempre la hace el usuario.

6. **Escaneo de malware real.** Recomendá, sin hacerlo vos:
   - Google Play Protect: Play Store > perfil > Play Protect > Analizar.
   - Si quiere más, un antivirus de confianza desde la tienda oficial.
   - Si hay señales graves (root, SELinux permisivo, admin desconocido, accesibilidad de una app no reconocida), sugerir un restablecimiento de fábrica después de respaldar, según el caso.

7. **Entregar** una tabla: app, permiso o señal, ¿lo necesita?, recomendación, y en qué sección del informe se ve. Después la lista de acciones que hace el usuario en Ajustes. Mencioná siempre las limitaciones de la sección 6 del informe.

## Qué significa cada señal

| Señal | Por qué importa | Qué hacer |
|---|---|---|
| Accesibilidad activa | Puede leer la pantalla y actuar en nombre del usuario. Es el vector típico de troyanos bancarios. | Revisar cada app; desactivar lo que no se reconoce. |
| Lee notificaciones | Puede leer códigos de dos pasos y mensajes. | Revisar; apps de sistema o de vinculación con PC suelen ser legítimas. |
| Administrador de dispositivo | Puede bloquear o borrar el móvil y evitar su desinstalación. | Desactivar admins desconocidos en Ajustes. |
| Superposición sobre otras apps | Puede dibujar encima de otras apps (phishing de login). | Revisar y quitar lo que no se necesita. |
| Puede instalar apps | Permite instalar otra app sin pasar por la tienda. | Quitar si no hace falta. |
| SMS o registro de llamadas | Lee mensajes de verificación o historial de llamadas. | Justificar caso por caso. |
| Instalada fuera de tienda | Es más difícil de auditar y de confiar. | Confirmar de dónde vino. |
| Instalada hace menos de 30 días | Malware nuevo suele ser reciente. | Confirmar que la instaló el usuario. |
| Root o Magisk | El sistema puede ser modificado por cualquier app. | Señal grave: confirmar si el usuario lo hizo. |
| Build no `user` o SELinux `Permissive` | El sistema tiene protecciones bajadas. | Señal grave: revisar cómo llegó ahí. |
| Acceso a todos los archivos | Puede leer todo el almacenamiento. | Quitar si la app no lo necesita. |
| Modo appops «allow» de cámara | Puede ser el valor por defecto, no un permiso concedido. | Confirmar en Ajustes > Gestor de permisos. |

## Notas de uso

- Miniaturas en `/sdcard/DCIM/.thumbnails` y `/sdcard/Pictures/.thumbnails`: el script revisa ambas. En Samsung suele estar en Pictures.
- Las apps del sistema (`com.android.*`, `com.google.android.*`, `com.samsung.*`) no se listan como apps de usuario; el script revisa solo las de usuario (`pm list packages -3`). Para ver el sistema, usar `pm list packages -s` como paso manual.
- Si el usuario usa Secure Folder, la auditoría no lo cubre; decirlo siempre.
- Si `apps.tsv` queda muy grande, filtrar con `awk -F'\t' '$5>0'` para ver solo las de alto riesgo.
