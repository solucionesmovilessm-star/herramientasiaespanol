#!/usr/bin/env bash
# Auditoría de privacidad y malware de un Android por ADB.
# SOLO LECTURA: no instala, no desinstala, no cambia permisos ni ajustes
# y no copia archivos del teléfono.
#
# Uso: escanear.sh [carpeta_de_salida]
# Genera informe.md (para leer), apps.tsv (una fila por app) y paquetes.txt.
# Las señales son pistas para revisar, no prueba de malware.

set -u

OUT="${1:-./auditoria-movil-$(date +%Y%m%d-%H%M)}"
mkdir -p "$OUT" || exit 1
INFORME="$OUT/informe.md"
TSV="$OUT/apps.tsv"
PAQ="$OUT/paquetes.txt"
DUMP="$OUT/.dump.txt"
CUTOFF=$(date -v-30d +%F 2>/dev/null || date -d '30 days ago' +%F)

# </dev/null: adb shell consume stdin; sin esto corta el bucle de paquetes tras el primero.
adb_s() { adb shell "$@" </dev/null 2>/dev/null | tr -d '\r'; }

command -v adb >/dev/null 2>&1 || { echo "No encuentro adb. Instalá platform-tools."; exit 1; }

ESTADO=$(adb devices | awk 'NR>1 && NF>=2 {print $2; exit}')
if [ "$ESTADO" != "device" ]; then
  echo "Dispositivo no listo (estado: ${ESTADO:-ninguno})."
  echo "device = listo; unauthorized = aceptá el aviso en el móvil; vacío = revisá el cable y la Depuración USB."
  exit 1
fi

# Apps instaladas por el usuario, solo del usuario 0 (el perfil secundario no es accesible por ADB).
adb_s pm list packages -3 --user 0 | sed 's/^package://' > "$PAQ"
N=$(grep -c . "$PAQ")

ACC=$(adb_s settings get secure enabled_accessibility_services)
NOTIF=$(adb_s settings get secure enabled_notification_listeners)
ADMINS=$(adb_s dumpsys device_policy | grep -E "Enabled Device Admins|Profile Owner|Device Owner|ComponentInfo\{|^ +[A-Za-z0-9_.]+/[.A-Za-z0-9_$]+:$")

# Listas de appops filtradas a apps de usuario (appops también lista apps del sistema).
appops_user() { adb_s appops query-op "$1" allow | grep -Fxf "$PAQ"; }
appops_user SYSTEM_ALERT_WINDOW > "$OUT/superposicion.txt"
appops_user REQUEST_INSTALL_PACKAGES > "$OUT/instalar_apps.txt"
appops_user GET_USAGE_STATS > "$OUT/uso_apps.txt"
appops_user CAMERA > "$OUT/camara.txt"
appops_user MANAGE_EXTERNAL_STORAGE > "$OUT/todos_archivos.txt"

lista() { if [ -s "$1" ]; then cat "$1"; else echo "ninguna"; fi; }

STORE_OK='^(com\.android\.vending|com\.sec\.android\.app\.samsungapps|com\.samsung\.android\.app\.updatecenter|com\.sec\.android\.app\.launcher)$'

printf 'paquete\tinstalador\tinstalada\tactualizada\talto\tmedio\tbanderas\n' > "$TSV"

has() { grep -qE "\.($1): granted=true" "$DUMP"; }

while read -r p; do
  [ -z "$p" ] && continue
  adb_s dumpsys package "$p" > "$DUMP"

  inst=$(grep -m1 'installerPackageName=' "$DUMP" | sed 's/.*installerPackageName=//')
  [ -z "$inst" ] || [ "$inst" = "null" ] && inst="(ninguno)"
  first=$(grep -m1 'firstInstallTime=' "$DUMP" | sed 's/.*firstInstallTime=//' | cut -d' ' -f1)
  upd=$(grep -m1 'lastUpdateTime=' "$DUMP" | sed 's/.*lastUpdateTime=//' | cut -d' ' -f1)

  alto=0; medio=0; flags=""
  add() { flags="${flags:+$flags; }$1"; }

  if has 'READ_SMS|RECEIVE_SMS|SEND_SMS|RECEIVE_MMS|RECEIVE_WAP_PUSH'; then alto=$((alto+1)); add "SMS"; fi
  if has 'READ_CALL_LOG|PROCESS_OUTGOING_CALLS'; then alto=$((alto+1)); add "registro de llamadas"; fi
  if echo "$ACC" | grep -q "$p/"; then alto=$((alto+1)); add "accesibilidad"; fi
  if echo "$NOTIF" | grep -q "$p/"; then alto=$((alto+1)); add "lee notificaciones"; fi
  if echo "$ADMINS" | grep -q "$p"; then alto=$((alto+1)); add "administrador de dispositivo"; fi
  if grep -qx "$p" "$OUT/superposicion.txt"; then alto=$((alto+1)); add "superposición sobre otras apps"; fi
  if grep -qx "$p" "$OUT/instalar_apps.txt"; then alto=$((alto+1)); add "puede instalar apps"; fi

  if has 'CAMERA'; then medio=$((medio+1)); add "cámara"; fi
  if has 'RECORD_AUDIO'; then medio=$((medio+1)); add "micrófono"; fi
  if has 'ACCESS_FINE_LOCATION'; then medio=$((medio+1)); add "ubicación precisa"; fi
  if has 'READ_CONTACTS'; then medio=$((medio+1)); add "contactos"; fi
  if has 'READ_MEDIA_IMAGES|READ_MEDIA_VIDEO|READ_EXTERNAL_STORAGE'; then medio=$((medio+1)); add "fotos/video completos"; fi
  if has 'READ_MEDIA_VISUAL_USER_SELECTED'; then add "fotos seleccionadas"; fi
  if grep -qx "$p" "$OUT/todos_archivos.txt"; then medio=$((medio+1)); add "todos los archivos"; fi
  if grep -qx "$p" "$OUT/uso_apps.txt"; then medio=$((medio+1)); add "estadísticas de uso"; fi
  if ! echo "$inst" | grep -qE "$STORE_OK"; then medio=$((medio+1)); add "instalada fuera de tienda ($inst)"; fi
  if [[ -n "$first" && "$first" > "$CUTOFF" ]]; then medio=$((medio+1)); add "instalada hace menos de 30 días"; fi
  if echo "$p" | grep -qiE 'spy|stalk|keylog|hiddenapp|mspy|xray'; then alto=$((alto+1)); add "nombre sospechoso"; fi

  printf '%s\t%s\t%s\t%s\t%s\t%s\t%s\n' "$p" "$inst" "$first" "$upd" "$alto" "$medio" "${flags:-—}" >> "$TSV"
done < "$PAQ"
rm -f "$DUMP"

{
echo "# Auditoría de privacidad y malware del móvil"
echo
echo "Fecha: $(date '+%Y-%m-%d %H:%M'). Solo lectura: ningún comando cambió el teléfono."
echo "Las señales son pistas para revisar. Una app con varias señales no es malware por sí sola."
echo
echo "## 1. Dispositivo y configuración de seguridad"
echo "- Modelo: $(adb_s getprop ro.product.model)"
echo "- Android: $(adb_s getprop ro.build.version.release), parche de seguridad: $(adb_s getprop ro.build.version.security_patch)"
echo "- Build: $(adb_s getprop ro.build.fingerprint)"
echo "- Tipo de build: $(adb_s getprop ro.build.type) (esperado: user)"
echo "- Depuración USB: $(adb_s settings get global adb_enabled) (1 = activa)"
echo "- SELinux: $(adb_s getenforce)"
echo "- Verificación de apps (Play Protect): $(adb_s settings get global package_verifier_enable) (null = valor por defecto, activo)"
echo "- Instalar de fuentes desconocidas (ajuste global, puede no aplicar en Android reciente): $(adb_s settings get secure install_non_market_apps)"
echo "- VPN siempre activa: $(adb_s settings get secure always_on_vpn_app)"
ROOTS=$(adb_s 'for f in /system/bin/su /system/xbin/su /sbin/su /system/app/Superuser.apk; do [ -e "$f" ] && echo "$f"; done' | tr '\n' ' ')
ROOT_APPS=$(adb_s pm list packages --user 0 | grep -iE 'magisk|supersu|kingroot' | sed 's/package://' | tr '\n' ' ')
echo "- Binarios de root: ${ROOTS:-ninguno}"
echo "- Apps con nombre de root: ${ROOT_APPS:-ninguna}"
echo
echo "## 2. Accesos de alto riesgo"
echo "### Servicios de accesibilidad activos (leen la pantalla y pueden actuar en tu nombre)"
echo '```'; echo "${ACC:-ninguno}"; echo '```'
echo "### Apps que leen notificaciones"
echo '```'; echo "${NOTIF:-ninguna}"; echo '```'
echo "### Administradores de dispositivo"
echo '```'; echo "${ADMINS:-ninguno}"; echo '```'
echo "### Superposición sobre otras apps"
echo '```'; lista "$OUT/superposicion.txt"; echo '```'
echo "### Apps que pueden instalar otras apps"
echo '```'; lista "$OUT/instalar_apps.txt"; echo '```'
echo "### Acceso a todos los archivos"
echo '```'; lista "$OUT/todos_archivos.txt"; echo '```'
echo "### Estadísticas de uso (ven qué apps usás y cuánto)"
echo '```'; lista "$OUT/uso_apps.txt"; echo '```'
echo
echo "## 3. Cámara y fotos"
echo "### Apps de usuario con permiso de cámara concedido"
echo '```'; awk -F'\t' 'NR>1 && $7 ~ /cámara/ {print $1}' "$TSV"; echo '```'
echo "### Modo de cámara en appops «allow» (puede ser el valor por defecto, no un permiso concedido)"
echo '```'; lista "$OUT/camara.txt"; echo '```'
echo "### Uso reciente de la cámara (registro del servicio de cámara)"
echo '```'; adb_s dumpsys media.camera | grep -E "client for package" | head -30; echo '```'
echo "### Miniaturas en el almacenamiento compartido"
echo '```'
adb_s 'for d in /sdcard/DCIM/.thumbnails /sdcard/Pictures/.thumbnails; do if [ -d "$d" ]; then echo "$d: $(ls "$d" | wc -l) archivos"; else echo "$d: no existe"; fi; done'
echo '```'
echo "Las miniaturas son vistas previas de baja calidad, no las fotos originales."
echo
echo "## 4. Apps de usuario: resumen"
echo "Apps revisadas: $N. Con alguna señal: $(awk -F'\t' 'NR>1 && ($5>0 || $6>0)' "$TSV" | wc -l | tr -d ' '). Con señales de alto riesgo: $(awk -F'\t' 'NR>1 && $5>0' "$TSV" | wc -l | tr -d ' ')."
echo
echo "| App | Instalador | Instalada | Alto | Medio | Señales |"
echo "|---|---|---|---|---|---|"
tail -n +2 "$TSV" | sort -t$'\t' -k5,5nr -k6,6nr | awk -F'\t' '$5>0 || $6>0 {printf "| %s | %s | %s | %s | %s | %s |\n", $1, $2, $3, $5, $6, $7}'
echo
echo "## 5. Apps deshabilitadas"
echo '```'; adb_s pm list packages -d --user 0 | sed 's/^package://'; echo '```'
echo
echo "## 6. Límites de esta auditoría"
echo "- Perfiles secundarios (Secure Folder, perfil de trabajo) no se revisan por ADB: el sistema niega el acceso."
echo "- Sin root no se leen /data/system ni el historial de permisos completo."
echo "- Para detectar malware de verdad: Play Protect (Ajustes > Seguridad > Google Play Protect > Analizar), y, si querés más, un análisis con un antivirus de confianza."
echo "- Los permisos se revisan en Ajustes > Gestor de permisos. Esta herramienta no revoca nada."
} > "$INFORME"

echo "Listo. Informe: $INFORME"
echo "Tabla completa: $TSV"
