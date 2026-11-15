---
title: OmniRoute
description: "Pasarela de código abierto con un endpoint compatible con la API de OpenAI para usar proveedores de modelos. Se autoaloja y funciona con Claude Code, Codex, Cursor y otros."
url: https://omniroute.online
category: codigo
pricing: gratis
destacado: false
patrocinado: false
lang: es
updated: 2026-11-15
tags:
  - pasarela
  - modelos
  - codigo-abierto
---

OmniRoute es una pasarela de IA de código abierto. Concentra en un solo endpoint, compatible con la API de OpenAI, el acceso a proveedores y modelos, y funciona con Claude Code, Codex, Cursor, OpenCode, Cline y Copilot.

Se puede autoalojar. En la documentación de ejemplo, el servicio local escucha en el puerto 20128. El README y la descripción del repositorio hablan de muchos proveedores, de tramos gratuitos, de un enrutado automático (`auto`) y de estrategias de fallback. Esas cifras no están contadas en esta ficha, así que no las damos como dato verificado.

## Qué puedes hacer

- Apuntar un agente compatible con la API de OpenAI a un solo endpoint y cambiar de proveedor detrás.
- Instalarlo en un servidor tuyo, con el ejemplo local de la documentación.
- Usar el enrutado y el fallback que describe el propio proyecto, y comprobar en su web qué proveedores incluye hoy.

## Precio

El programa es gratis y de código abierto, con licencia MIT. Los modelos de pago se facturan en cada proveedor. Los tramos gratis dependen de cada uno. El código está en [cheaper-inference/OmniRoute](https://github.com/cheaper-inference/OmniRoute). La web del proyecto es [omniroute.online](https://omniroute.online) y también [www.omniroute.online](https://www.omniroute.online/).

## Ten en cuenta

Una pasarela ve las peticiones que le mandas, también la clave del proveedor si la configuras ahí. No la expongas a internet sin protección y no subas esas claves al repositorio.
