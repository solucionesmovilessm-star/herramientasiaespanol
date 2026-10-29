---
name: auditoria-router-wifi
description: (BETA) Audita de forma defensiva y de solo lectura tu propio router y red WiFi doméstica (dispositivos conectados, puertos abiertos, exposición a internet, configuración del panel) o detecta posibles cámaras ocultas en una red de alquiler/hotel que tienes permiso para usar. Úsala cuando el usuario pida revisar la seguridad de su router, su WiFi o buscar cámaras en un Airbnb.
---
# Auditoría de router y red WiFi (BETA, solo lectura)

> Estado: **beta**. Pendiente de probar en routers reales. Inspirada en el post de @Supriik_ (x.com/Supriik_/status/2114472429909320044), corregida y ampliada.

## Reglas (obligatorias)
- Solo redes **propias o en las que tienes permiso** para conectarte. Escanear redes ajenas puede ser ilegal.
- Solo lectura: nada de exploits, fuerza bruta de contraseñas ni ataques a WPS. No cambies configuración: explica al usuario qué cambiar y que lo haga él.
- No afirmes que algo es una cámara o una vulnerabilidad sin pruebas: habla de «posible» y explica por qué.
- Nunca pidas ni guardes la contraseña del router ni de la WiFi.

## Preparación: instalar nmap
- **Windows:** instalador oficial en https://nmap.org/download.html (incluye Npcap, necesario para escanear en Windows). Usa «Símbolo del sistema» como administrador.
- **macOS:** instalador .dmg de nmap.org o `brew install nmap`.
- **Linux:** `sudo apt install nmap` (Debian/Ubuntu) o `sudo dnf install nmap` (Fedora).

Averigua tu red y la IP del router (gateway):
- Windows: `ipconfig` → «Puerta de enlace predeterminada».
- macOS: `route -n get default | grep gateway` y `ipconfig getifaddr en0`.
- Linux: `ip route | grep default`.
Normalmente la red es tipo `192.168.1.0/24`; sustituye por la tuya en los comandos.

## Modo 1 · Casa
1. **Inventario de dispositivos** (descubrimiento sin escaneo de puertos):
   `sudo nmap -sn 192.168.1.0/24` (en Windows sin `sudo`). Con privilegios en la red local, nmap muestra la MAC y el fabricante de cada equipo.
   → Pide al usuario que identifique cada aparato. Marca los desconocidos.
2. **Puertos abiertos del router desde la LAN:**
   `sudo nmap -sV 192.168.1.1` (IP del gateway). Revisa servicios como Telnet (23), FTP (21), HTTP sin cifrar (80), UPnP (1900/5000), SMB (445).
3. **Exposición desde internet** (nmap desde dentro no lo ve):
   - En el panel del router, revisa **Reenvío de puertos / NAT / Servidor virtual** y la lista de **UPnP** activos.
   - Comprueba **Administración remota / acceso WAN** desactivada.
   - Opcional: escáner de puertos online de confianza contra tu IP pública (solo tu propia IP), p. ej. ShieldsUP! de GRC.
4. **Checklist del panel del router** (el usuario entra y anota):
   - Contraseña de administración cambiada (no la de la pegatina ni «admin»).
   - Firmware: versión instalada vs. última en la web oficial del fabricante. Busca CVE del modelo en https://nvd.nist.gov/vuln/search y en los avisos de seguridad del fabricante; si el modelo está fuera de soporte, recomienda cambiarlo.
   - **WPS** desactivado.
   - Cifrado **WPA3** o **WPA2-AES** (nunca WEP, WPA/TKIP ni red abierta) y clave WiFi larga.
   - **UPnP** desactivado si no hace falta.
   - Administración remota desactivada.
   - **Red de invitados** para dispositivos IoT (cámaras, enchufes, TV) y visitas.
   - **DNS**: que sean los del operador o un proveedor conocido; unos DNS extraños pueden indicar manipulación.

## Modo 2 · Alquiler u hotel (posibles cámaras ocultas)
1. Conéctate a la WiFi que te han dado y haz el inventario: `sudo nmap -sn 192.168.X.0/24`.
2. Busca fabricantes típicos de cámaras (Hikvision, Dahua, EZVIZ, Imou, Tuya/IoT genérico, «Espressif» u otros chips IoT).
3. Revisa puertos típicos de cámara/vídeo en esos aparatos:
   `sudo nmap -sV -p 80,554,8000,8080,8554,37777 IP_SOSPECHOSA`
   (554 RTSP vídeo en directo y 8554 RTSP alternativo; 80/8080 web; 8000 puerto de servicio por defecto de grabadores Hikvision; 37777 puerto TCP por defecto de Dahua. Son configurables, así que la ausencia no descarta nada).
4. **Limitaciones honestas:**
   - Sin acceso al router no puedes medir el tráfico de cada aparato.
   - Cámaras con su propia WiFi, conectadas por 4G, en otra red/VLAN o que solo graban en tarjeta SD **no aparecen**.
   - Un puerto abierto no prueba que sea una cámara (un NAS o una TV también los abren). Ubicar por señal es muy aproximado.
   - Complementa con inspección física: linterna para reflejos de lentes, detectores, enchufes y detectores de humo extraños.
5. **Si encuentras una posible cámara:** no la manipules ni accedas a ella; haz fotos y capturas del escaneo; contacta con la plataforma (Airbnb no permite cámaras ni dispositivos de grabación que vigilen espacios interiores, aunque estén apagados) y, si está en zonas privadas, denuncia a Policía/Guardia Civil.

## Prompts para pegar a Claude
- «Este es el resultado de `nmap -sn` de mi red doméstica. Hazme una tabla IP, MAC, fabricante y qué tipo de aparato puede ser; marca los que no encajen: [pega]»
- «Este es el `nmap -sV` de mi router (modelo X, firmware Y). Explica cada servicio, su riesgo y qué desactivar en el panel. No propongas ataques: [pega]»
- «Estoy en un alquiler con permiso para usar su WiFi. Analiza este escaneo y dime qué aparatos podrían ser cámaras y por qué, con nivel de confianza: [pega]»

## Plantilla de informe final
```
# Informe de red · AAAA-MM-DD · Modo: Casa / Alquiler
Router: modelo · firmware · ¿con soporte?
| Punto | Estado | Riesgo | Acción recomendada |
|---|---|---|---|
| Contraseña admin | ... | 🔴/🟡/🟢 | ... |
| Firmware y CVE | ... | | |
| WPS | ... | | |
| Cifrado WiFi | ... | | |
| UPnP / reenvío de puertos | ... | | |
| Administración remota | ... | | |
| Red de invitados IoT | ... | | |
| DNS | ... | | |
| Dispositivos desconocidos | ... | | |
| (Alquiler) Posibles cámaras | ... | | |
🔴 actuar hoy · 🟡 revisar esta semana · 🟢 correcto
Acciones prioritarias: 1… 2… 3…
```

## Fuentes
- Nmap, descubrimiento de hosts (-sn): https://nmap.org/book/man-host-discovery.html
- Nmap, detección de versiones (-sV): https://nmap.org/book/man-version-detection.html
- Descarga de Nmap: https://nmap.org/download.html
- NVD (base de datos de CVE del NIST): https://nvd.nist.gov/vuln/search
- Nmap en Windows (Npcap incluido en el instalador): https://nmap.org/book/inst-windows.html
- INCIBE Ciudadanía · Conexiones seguras (configuración del router de casa): https://www.incibe.es/ciudadania/tematicas/conexiones
- Hikvision · Network Port List (puerto de servicio 8000, RTSP 554): https://www.hikvision.com/content/dam/hikvision/ca/bulletin/technical-bulletin/technical-article/tb_network_port_list.pdf
- Dahua · Guía de configuración de cortafuegos (TCP 37777): https://france.dahuatech.com/upload/202310/16/202310160506391691.pdf
- Airbnb · Restricciones sobre cámaras de seguridad y otros dispositivos: https://www.airbnb.es/help/article/3061
- GRC ShieldsUP!: https://www.grc.com/shieldsup
