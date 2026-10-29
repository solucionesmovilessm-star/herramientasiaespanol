---
title: "Auditoría de router y red WiFi (beta)"
description: "Skill propia para Claude Code que te guía, en modo solo lectura, para revisar la seguridad de tu router y tu WiFi de casa, o buscar posibles cámaras ocultas en un alquiler u hotel."
url: /descargas/skills/auditoria-router-wifi.zip
category: otra
destacado: false
patrocinado: false
lang: es
updated: 2026-10-29
tags:
  - wifi
  - router
  - seguridad
  - privacidad
  - nmap
---

Skill para Claude Code que te ayuda a revisar si tu **router** (el aparato que te da internet en casa) y tu **WiFi** están bien protegidos. También sirve para buscar **posibles cámaras ocultas** en un piso de alquiler o un hotel cuya WiFi te dejan usar.

Está en **beta**: todavía la estamos probando en más routers.

## Qué hace

- **Lista los aparatos conectados** a tu WiFi: móviles, TV, enchufes inteligentes… Así ves si hay alguno que no reconoces.
- **Mira qué "puertas" tiene abiertas el router.** Un **puerto** es como una puerta por la que entran y salen datos. Algunas, si están abiertas sin necesidad, son un riesgo.
- **Te da una lista de comprobación** para el panel del router: contraseña, actualizaciones, tipo de cifrado de la WiFi y más.
- **Modo alquiler:** marca aparatos que *podrían* ser cámaras, siempre como "posible" y explicando por qué.
- **Te entrega un informe** con semáforo: 🔴 actuar hoy, 🟡 revisar esta semana, 🟢 correcto.

## Qué no hace

- No ataca nada, no adivina contraseñas ni cambia ajustes. Solo **mira** y te explica qué cambiar a ti.
- No te pide ni guarda la contraseña del router ni de la WiFi.
- No asegura que algo sea una cámara: da pistas para revisar.

> ⚠️ Úsala solo en **tu propia red** o en una que tengas **permiso** para usar. Escanear redes ajenas puede ser ilegal.

## Antes de empezar (5 minutos)

Necesitas un programa gratuito llamado **nmap**, que sirve para ver qué aparatos hay en una red.

1. **Instálalo:**
   - Windows: descarga el instalador de [nmap.org](https://nmap.org/download.html) y dale a "Siguiente" en todo.
   - Mac: descarga el `.dmg` de [nmap.org](https://nmap.org/download.html), o escribe `brew install nmap` si usas Homebrew.
   - Linux: `sudo apt install nmap`.
2. **Abre una terminal** (en Windows, "Símbolo del sistema" como administrador; en Mac, la app "Terminal").
3. **Pídele a Claude que use la skill**, por ejemplo: *"Revisa la seguridad de mi WiFi de casa"*. Claude te dirá qué escribir en cada paso y te explicará los resultados.

## Paso a paso: modo casa

1. **Ver los aparatos conectados.** Claude te da un comando y tú le pegas el resultado. Te devuelve una tabla y te marca los que no reconoces.
2. **Revisar el router por dentro.** Mira qué servicios tiene abiertos y te dice cuáles conviene cerrar.
3. **Entrar al panel del router** (normalmente escribiendo su dirección en el navegador) y comprobar:
   - Que la contraseña del panel **no es la de fábrica** ni "admin".
   - Que el **firmware** (el sistema del router) está actualizado.
   - Que **WPS** (el botón para conectar sin contraseña) está apagado.
   - Que la WiFi usa **WPA3 o WPA2** (los tipos de cifrado seguros) y una clave larga.
   - Que la **administración remota** (entrar al router desde fuera de casa) está apagada.
   - Que tienes una **red de invitados** para visitas y aparatos inteligentes.
4. **Leer el informe** y hacer primero lo marcado en 🔴.

## Paso a paso: modo alquiler u hotel

1. Conéctate a la WiFi que te han dado.
2. Pide a Claude: *"Estoy en un alquiler con permiso para usar su WiFi, busca posibles cámaras"*.
3. Claude busca marcas típicas de cámaras y sus puertas de vídeo, y te dice cuáles son sospechosas y con qué seguridad.
4. Complementa con una **revisión física**: una linterna ayuda a ver reflejos de lentes en enchufes o detectores de humo raros.
5. **Si encuentras algo:** no lo toques, haz fotos y avisa a la plataforma. Airbnb no permite cámaras que vigilen espacios interiores. Si está en zonas privadas, denúncialo a la policía.

**Ojo:** las cámaras con su propia WiFi, con 4G o que solo graban en tarjeta **no aparecen** en el escaneo.

## Instalación

Descarga el zip con el botón de esta ficha, descomprímelo y copia la carpeta `auditoria-router-wifi` en `~/.claude/skills/`. Si solo quieres leerla, aquí tienes el [SKILL.md](/descargas/skills/auditoria-router-wifi/SKILL.md).

<details>
<summary><strong>Para expertos: los comandos que usa</strong></summary>

- Descubrimiento de equipos sin escaneo de puertos: `sudo nmap -sn <tu-red>/24` (con privilegios muestra MAC y fabricante).
- Servicios del gateway: `sudo nmap -sV <ip-del-router>`. Revisa Telnet (23), FTP (21), HTTP sin cifrar (80), UPnP (1900/5000) y SMB (445).
- Exposición a internet: nmap desde la LAN no la ve. Revisa reenvío de puertos/NAT y UPnP en el panel, y opcionalmente ShieldsUP! de GRC contra tu propia IP pública.
- Cámaras: `sudo nmap -sV -p 80,554,8000,8080,8554,37777 <ip>` (RTSP 554/8554, servicio Hikvision 8000, Dahua 37777). Son configurables: que no aparezcan no descarta nada.
- CVE del modelo: [NVD](https://nvd.nist.gov/vuln/search) y avisos del fabricante.

</details>

## Fuentes

- [Nmap: descubrimiento de equipos](https://nmap.org/book/man-host-discovery.html) y [detección de versiones](https://nmap.org/book/man-version-detection.html)
- [INCIBE Ciudadanía: conexiones seguras](https://www.incibe.es/ciudadania/tematicas/conexiones)
- [Airbnb: cámaras y dispositivos de grabación](https://www.airbnb.es/help/article/3061)
