---
title: "hex.pm sufre un RCE y publica el CVE-2026-129514"
description: "Un tercero ejecutó comandos en los servidores de hex.pm al explotar un fallo del decodificador de cuerpos en formato Erlang. No hay evidencia de paquetes modificados, pero no descartan lecturas de la base."
date: 2026-11-24
nivel: alto
riesgo: "No pueden descartar lecturas de correos, hashes de contraseña, hashes de API keys, secretos de 2FA, sesiones y registros de auditoría. Piden cambiar la contraseña y reiniciar el 2FA."
sources:
  - https://hex.pm/blog/security-incident-on-hexpm
---

Los responsables de hex.pm, el registro de paquetes de Elixir, informaron de que un tercero no autorizado ejecutó comandos en sus servidores web al explotar un fallo en el decodificador de cuerpos en formato Erlang. Bloquearon el tráfico y desplegaron un parche en 20 minutos; no hay evidencia de paquetes modificados, de cambios en la base de datos ni de persistencia, pero no pueden descartar lecturas de la base (correos, hashes de contraseña, hashes de API keys, secretos de 2FA, sesiones y registros de auditoría). El 24 de noviembre a las 13:48 UTC publicaron el CVE-2026-129514 y piden cambiar contraseña, reiniciar el 2FA y, hasta que salga el nuevo sistema de firmas, descargar paquetes solo desde repo.hex.pm. También reportaron un fallo de la misma familia en Ash (CVE-2026-124283), corregido el 24/11 en ash 3.38.0.
