---
title: "Hackean Optimizely: código malicioso en webs como CNN, Zoom o BBC robaba cripto y tarjetas"
description: "Atacantes inyectaron JavaScript en scripts de Optimizely. Cambiaba direcciones de wallets, robaba tarjetas en formularios propios e intentaba exploits en iPhone y iPad. Optimizely dice que eliminó el código."
date: 2026-11-17
nivel: alto
riesgo: "Cambiaba direcciones de wallets de cripto por las del atacante, robaba número, caducidad y CVV en formularios propios, e intentaba exploits en iPhone y iPad. Optimizely dice que el 17 de noviembre de 2026 eliminó el código."
sources:
  - https://www.bleepingcomputer.com/news/security/optimizely-supply-chain-attack-infects-major-brands-sites-with-malware/
  - https://itwire.com/business-it-news/security/optimizely-says-it-has-fixed-flaw-used-to-inject-malicious-scripts
  - https://www.stepsecurity.io/blog/optimjack-optimizely-hosted-scripts-crypto-clipper-card-skimmer
draft: false
---

## Qué pasó

Atacantes inyectaron JavaScript malicioso en proyectos de clientes de Optimizely, una plataforma de pruebas A/B. Ese código se servía desde su CDN y cargaba un script externo: `track.js`, desde el dominio `1688360[.]cc`.

El investigador Scott Helme encontró 188 scripts infectados de 178 organizaciones tras analizar 1.611 scripts. Entre los sitios citados están CNN, Zoom, Fox News, BBC, Salesforce y GitLab.

La campaña se conoce como OPTIMJACK (nombre de Amirul Cyber).

## Qué hacía

El script cambiaba direcciones de wallets de cripto (BTC, ETH, SOL, TRX, TON, LTC, BCH y DOGE) por las del atacante, también al copiar y pegar.

Robaba el número, la caducidad y el CVV de las tarjetas escritas en formularios propios de la web. No puede leer los iframes de pasarelas como Stripe.

En iPhone y iPad intentaba cargar los kits de exploits Coruna y DarkSword.

Las wallets del atacante recibieron unos 7.000 dólares el 16 de noviembre de 2026.

## Estado

Optimizely dice que eliminó el código inyectado, aseguró las cuentas afectadas y añadió protecciones. Es un aviso de estado del 17 de noviembre de 2026.

## A quién afecta

- Proyectos de clientes de Optimizely que cargaban esos scripts. Scott Helme encontró 188 scripts infectados, de 178 organizaciones, en un análisis de 1.611 scripts. Sitios citados: CNN, Zoom, Fox News, BBC, Salesforce y GitLab.
- Quien fuera a enviar cripto en BTC, ETH, SOL, TRX, TON, LTC, BCH o DOGE: el script cambiaba la dirección por la del atacante, también al copiar y pegar.
- Quien escribiera el número, la caducidad y el CVV en un formulario propio de la web. El script no puede leer los iframes de pasarelas como Stripe.
- Quien usara un iPhone o un iPad en esas páginas: el script intentaba cargar los kits de exploits Coruna y DarkSword.

## Qué hacer

- Antes de enviar cripto, comprueba la dirección en la pantalla de la wallet o de la hardware wallet, no solo lo que has pegado.
- Revisa los movimientos de la tarjeta si compraste online esos días.
- Actualiza el iPhone o el iPad.
