---
title: "Protegé tus cripto en 10 pasos: guía de seguridad para principiantes"
description: "Skill gratis en español para cuidar tus criptomonedas: hardware wallet, verificación en 2 pasos, revocar permisos, evitar estafas y más. Con prompt para hacer una auditoría con Grok Bot o cualquier IA."
url: /descargas/skills/proteger-cripto-10-pasos/SKILL.md
category: otra
destacado: false
patrocinado: false
lang: es
updated: 2026-10-31
tags:
  - cripto
  - seguridad
  - wallets
  - estafas
---

Skill gratis para proteger tus criptomonedas, tus equipos y tus cuentas. Está basada en el [hilo de seguridad de Pablo Sabbatella](https://x.com/PabloSabbatella/status/2116249229132021961), investigador argentino de seguridad cripto, adaptado para principiantes.

> **Aviso:** esto no es asesoramiento financiero. Es una guía de seguridad básica. Cada persona decide qué hacer con su dinero.

## Palabras que vas a ver

- **Wallet (billetera):** la app o el aparato que guarda las claves de tus cripto.
- **Hot wallet:** una wallet que vive en tu compu o tu celular, conectada a internet (por ejemplo MetaMask o Rabby).
- **Hardware wallet:** un aparatito físico (tipo pendrive) que guarda las claves sin conectarse a internet.
- **Frase semilla:** las 12 o 24 palabras que recuperan tu wallet. Quien las tiene, tiene tu plata.
- **2FA (verificación en 2 pasos):** además de la contraseña, un segundo código o una llave para entrar.
- **Phishing:** una web, mail o mensaje falso que imita a uno real para robarte datos.
- **DeFi:** apps financieras cripto donde conectás tu wallet y firmás permisos.

## Los 10 pasos

### 1. Tus ahorros, en una hardware wallet

No guardes tus ahorros en MetaMask, Rabby u otra hot wallet. Esas wallets viven en tu compu: si la compu se infecta con un virus, el atacante puede robar tus claves. En una hardware wallet las claves nunca salen del aparato, y cada envío lo tenés que confirmar apretando un botón físico.

### 2. Separá tus wallets

Usá una wallet distinta para cada cosa:
- **Largo plazo:** la hardware wallet, que casi nunca conectás a nada.
- **DeFi y pruebas:** una wallet aparte con poca plata.
- **Gastos:** lo justo para el día a día.

Así, si una se compromete, no perdés todo.

### 3. Verificación en 2 pasos con llave física o app, nunca SMS

Activá el 2FA en tu exchange, tu mail y tus redes. Lo mejor es una llave física como [YubiKey](https://www.yubico.com). Si no, una app de códigos como [Authy](https://authy.com). **Nunca por SMS**: te pueden robar el número duplicando tu chip.

### 4. Gestor de contraseñas y ojo dónde las ponés

Usá un gestor de contraseñas (por ejemplo [Bitwarden](https://bitwarden.com), que tiene versión gratis) y una contraseña distinta para cada sitio. Antes de escribir una contraseña, mirá bien la dirección de la web: el phishing también llega desde fuentes que parecen confiables, como anuncios de Google, mails "del exchange" o links de amigos.

### 5. Revisá la dirección que pegás

Hay virus (llamados *clipper*) que, cuando copiás una dirección de wallet, la cambian por la del ladrón. Antes de enviar, compará el principio y el final de la dirección pegada con la original. Si mandás mucho, hacé primero un envío de prueba chico.

### 6. Revocá permisos viejos

Cada vez que conectás tu wallet a una web DeFi, le das permisos. Entrá cada tanto en [revoke.cash](https://revoke.cash), conectá tu wallet y quitá los permisos que ya no uses.

Ejemplo real: el 31/10/2026 secuestraron el dominio de webs DeFi como Flap y Kintsu para vaciar wallets con permisos firmados ([Crypto Times](https://www.cryptotimes.io/2026/10/31/flap-kintsu-websites-hijacked-as-stepdrainer-wallet-drainer-hits-10-more-defi-sites/)).

### 7. Navegador actualizado y pocas extensiones

Mantené el navegador siempre actualizado. Instalá solo las extensiones que necesitás, de fuentes oficiales, y borrá las que no usás: una extensión maliciosa puede leer todo lo que hacés.

### 8. En Mac, herramientas gratis de Objective-See

[Objective-See](https://objective-see.org/tools.html) ofrece herramientas de seguridad gratis para Mac:
- [LuLu](https://objective-see.org/products/lulu.html): un firewall que te avisa cuando una app quiere conectarse a internet.
- [KnockKnock](https://objective-see.org/products/knockknock.html): te muestra qué programas arrancan solos en tu Mac (donde suele esconderse un virus).

### 9. Si programás o usás agentes de IA, usá una máquina virtual

Una máquina virtual es una "compu dentro de tu compu", separada de tus wallets. Si instalás una librería infectada o un agente de IA (Cursor, Claude Code) ejecuta algo malo, el daño queda ahí adentro. Opciones: [Parallels](https://www.parallels.com) en Mac (pago) o [VirtualBox](https://www.virtualbox.org) (gratis).

### 10. Cuidado con la ingeniería social

- En una llamada o videollamada, **nunca instales un plugin ni compartas pantalla** porque te lo piden.
- Desconfiá de mensajes de amigos que te piden plata, que bajes algo o que pruebes una app: su cuenta puede estar hackeada. Confirmá por otro medio.
- Nadie legítimo te va a pedir tu frase semilla. Nunca.

## Que lo haga una IA por vos (Grok Bot o cualquier otra)

Copiá esto en Grok Bot, ChatGPT, Claude o la IA que uses:

```text
Haceme una auditoría de seguridad cripto personal, paso a paso y en palabras simples. Seguí la guía de https://herramientasiaespanol.com/skills/proteger-cripto-10-pasos/ y no inventes datos.

Mi compu: [Windows / Mac / Linux]
Mi celular: [Android / iPhone]
Dónde tengo cripto: [exchanges, wallets, hardware wallet]
Uso DeFi: [sí / no]
Programo o uso agentes de IA: [sí / no]

1. Haceme preguntas para revisar cada uno de los 10 pasos.
2. Armá una tabla: paso, cómo estoy, riesgo (alto/medio/bajo) y qué hacer.
3. Ordená las tareas de la más urgente a la menos urgente.

Nunca me pidas mi frase semilla, claves privadas ni contraseñas. No es asesoramiento financiero.
```

También podés descargar las [instrucciones completas (SKILL.md)](/descargas/skills/proteger-cripto-10-pasos/SKILL.md) para usarlas como skill.

<details>
<summary><strong>Para expertos</strong></summary>

- Para montos grandes, considerá una multisig (varias firmas para mover fondos) y guardar la frase semilla en metal, en lugares separados.
- Antes de firmar, leé qué estás aprobando: desconfiá de `approve` o `permit` con monto ilimitado y de firmas que no entendés.
- Verificá la dirección de recepción en la pantalla de la hardware wallet, no solo en la compu.
- En la máquina virtual de desarrollo, no inicies sesión en tus wallets ni en tu mail principal.
- Fuente: [hilo de Pablo Sabbatella](https://x.com/PabloSabbatella/status/2116249229132021961).

</details>
