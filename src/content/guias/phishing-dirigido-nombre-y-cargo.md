---
title: "Phishing dirigido: cómo usan tu nombre y tu cargo para engañarte"
description: "Qué es el phishing dirigido, por qué el hackeo de Chainalysis lo vuelve más probable, las señales de alerta y qué hacer paso a paso para protegerte gratis."
lang: es
updated: 2026-10-31
destacado: true
patrocinado: false
tags:
  - seguridad
  - phishing
  - privacidad
faq:
  - q: "¿Qué es el phishing dirigido?"
    a: "Un mensaje falso hecho a tu medida: usa tu nombre, tu empresa o tu cargo para parecer real y que hagas clic, des una contraseña o pagues algo."
  - q: "¿Si me filtraron el mail ya me hackearon?"
    a: "No. Que tengan tu mail y tu cargo no les da acceso a tus cuentas. El peligro es que te engañen después con un mensaje creíble."
  - q: "¿Qué protección gratis sirve más?"
    a: "Activar la verificación en dos pasos (2FA) y usar un gestor de contraseñas como Bitwarden, que es gratis."
---

**Phishing** es un mensaje falso (mail, SMS, WhatsApp) que intenta que entregues una contraseña, un código o dinero. El **phishing dirigido** (en inglés, *spear phishing*) es la versión a medida: el atacante usa datos reales tuyos, como tu nombre, tu empresa o tu puesto, para que el mensaje parezca legítimo.

## Por qué ahora: el caso Chainalysis

El 30 de octubre de 2026, la empresa Chainalysis confirmó en [su blog](https://www.chainalysis.com/blog/security-incident-october-30/) que un atacante externo entró en sus sistemas y herramientas internas. Según la empresa:

- Se accedió a **IDs de usuario, nombres completos, mails y cargos** de usuarios de clientes.
- **No** encontraron indicios de acceso a contraseñas en texto plano, secretos de 2FA ni sesiones.
- El atacante usó "técnicas agénticas ofensivas", es decir, herramientas automatizadas con IA como parte del ataque. La empresa no detalló cómo.
- La propia Chainalysis pidió a sus usuarios desconfiar de pedidos inesperados de cambio de contraseña y activar la verificación en dos pasos.

Con nombre + mail + cargo, un atacante puede escribir un mail muy creíble: "Hola Ana, como responsable de cumplimiento, necesitamos que confirmes tu acceso…". Esto pasa con cualquier filtración, no solo con esta.

## Señales de alerta

- **Urgencia:** "tu cuenta se bloquea en 24 horas", "pago pendiente hoy".
- **Un pedido que no hiciste:** cambio de contraseña, código de verificación, aviso de inicio de sesión.
- **Remitente raro:** el nombre parece correcto pero la dirección no (por ejemplo `soporte@chainaIysis-help.com`, con una "I" mayúscula en lugar de "l").
- **Links que no coinciden:** pasa el mouse por encima (sin hacer clic) y mira a dónde lleva de verdad.
- **Te piden algo secreto:** contraseñas, códigos 2FA, frases de recuperación. Una empresa seria nunca los pide.
- **Adjuntos inesperados**, sobre todo `.zip`, `.html` o documentos que piden "habilitar contenido".
- **Demasiado personal** de alguien que no conoces: que sepa tu cargo no lo hace legítimo.

## Qué hacer, paso a paso

1. **No hagas clic.** Si dudas, entra tú mismo escribiendo la dirección oficial en el navegador.
2. **Revisa el remitente completo.** En el móvil, toca el nombre para ver la dirección real.
3. **Confirma por otro canal.** Llama o escribe a la persona o empresa por un contacto que ya tenías.
4. **Activa la verificación en dos pasos (2FA)** en tu mail, bancos y redes. Mejor con una app de códigos o una llave física que por SMS.
5. **Usa un gestor de contraseñas.** [Bitwarden](https://bitwarden.com/pricing/) tiene plan gratis. Además de guardar claves distintas, solo autocompleta en la web real: si no te ofrece tu contraseña, puede que estés en una página falsa.
6. **Si ya hiciste clic o diste un dato:** cambia esa contraseña desde la web oficial, cierra las sesiones abiertas y avisa a tu banco o a tu empresa.
7. **Reporta el mail** como phishing en tu correo (Gmail y Outlook tienen la opción).

## Para quien quiere más (opcional)

- En Gmail, menú ⋮ → **Mostrar original** permite ver si el mensaje pasó los controles SPF, DKIM y DMARC (verificaciones de que el remitente es quien dice).
- Puedes ver si tu mail apareció en filtraciones conocidas en [Have I Been Pwned](https://haveibeenpwned.com).
- Las llaves de acceso (*passkeys*) resisten mejor el phishing que las contraseñas porque solo funcionan en el sitio real.

Fuentes: [Chainalysis, aviso oficial (30/10/2026)](https://www.chainalysis.com/blog/security-incident-october-30/), [Crypto Briefing](https://cryptobriefing.com/chainalysis-discloses-cyberattack-user-data/).
