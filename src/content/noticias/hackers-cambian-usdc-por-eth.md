---
title: "Por qué los hackers cambian USDC por ETH: lo que enseña el ciberataque a Crédit Mutuel Arkéa"
date: 2026-11-04
summary: "El banco francés Crédit Mutuel Arkéa confirmó un ciberataque con transacciones fraudulentas. Un investigador estima el robo en más de 133 millones de dólares, cifra que el banco no ha confirmado. Te explicamos por qué los atacantes pasaron el dinero de USDC a ETH y qué puedes aprender para proteger tus criptomonedas."
sources:
  - https://www.coindesk.com/business/2026/11/04/zachxbt-names-french-bank-credit-mutuel-arkea-as-suspected-victim-of-usd133-million-crypto-theft
  - https://www.afp.com/en/french-regional-bank-says-cyberattack-caused-fraudulent-transactions
  - https://x.com/CoinDesk/status/2117934470712242628
---

> **Aviso:** esto es información de seguridad, no un consejo de inversión.

## Qué ha pasado

**Crédit Mutuel Arkéa**, un grupo bancario francés, confirmó a CoinDesk y a la agencia AFP que sufrió un **ciberataque que permitió transacciones fraudulentas** y que la situación ya está bajo control. El banco dice que el incidente **no tiene consecuencias económicas para sus clientes**, que suspendió temporalmente algunas operaciones y que avisó a las autoridades.

Lo que el banco **no ha confirmado** es la cantidad robada:

- El investigador de blockchain **ZachXBT** señaló al banco como posible víctima y **estima** el robo en **más de 133 millones de dólares** (podría ser más).
- La empresa de análisis **Bitquery** rastreó unos **108,8 millones de dólares en USDC** retirados de cuentas en los exchanges **Kraken, Crypto.com y OKX** durante unas 21 horas, el 1 y 2 de noviembre. Gran parte se convirtió después en **ETH**.
- **Crypto.com** confirmó que bloqueó fondos vinculados al incidente.

Todavía no se sabe cómo entraron los atacantes en esas cuentas.

## Qué significa "congelar" una criptomoneda

- **USDC** es una *stablecoin*: una criptomoneda pensada para valer siempre 1 dólar. La emite una empresa, **Circle**, y su código le permite **bloquear direcciones** (las "cuentas" de la blockchain). Si Circle bloquea una dirección, ese USDC ya no se puede mover.
- **ETH** (ether) es la moneda propia de la red Ethereum. **No tiene una empresa emisora** que pueda bloquearla. Nadie puede congelar el ETH de una dirección.

## Por qué los atacantes prefieren ETH

Es sencillo: si se quedan con USDC, corren el riesgo de que Circle o los exchanges lo bloqueen en cuanto se detecte el robo. Por eso lo cambian rápido a ETH, que nadie puede congelar, y lo reparten entre cientos de direcciones para dificultar el rastreo. Según CoinDesk, en este caso los fondos pasaron por cientos de carteras.

Ojo: eso no los hace invisibles. Todo queda registrado en la blockchain y los investigadores pueden seguir el rastro; lo que se complica es **recuperar** el dinero.

## Qué puedes aprender tú

1. **Exchange o cartera propia.** Si tienes tus criptos en un exchange (Binance, Kraken…), dependen de la seguridad de tu cuenta y de la empresa. En una cartera propia, la responsabilidad es tuya. Si usas un exchange, protege bien la cuenta.
2. **Activa la verificación en dos pasos** con una app de códigos o una llave física, mejor que por SMS.
3. **Considera una cartera física** (*hardware wallet*) para cantidades que no muevas a menudo.
4. **No compartas capturas de tus saldos** ni de tus direcciones en redes: te convierten en objetivo.
5. **Nunca compartas tu frase semilla** (las 12 o 24 palabras de tu cartera). Ningún soporte real te la pedirá.

## Para expertos

Las *stablecoins* centralizadas como USDC y USDT incluyen funciones de lista negra en su contrato, y los emisores las usan cuando las autoridades o los exchanges lo piden. Por eso, en muchos robos se observa el mismo patrón: cambio rápido a un activo no congelable mediante exchanges descentralizados y dispersión en muchas direcciones. Según CoinDesk, ZachXBT cree con "alto grado de confianza" que este ataque **no** es obra del grupo norcoreano Lazarus, por la forma en que se movieron los fondos.
