---
title: "Cómo comprobar que un link que te da la IA es el oficial (el caso del falso T3 Code)"
date: 2026-11-04
summary: "ChatGPT recomendó a varios usuarios t33.codes, un clon falso de T3 Code, en lugar de la web real t3.codes. Te explicamos por qué una IA puede darte un enlace peligroso y cómo comprobar en cuatro pasos que un link es el oficial."
sources:
  - https://x.com/doriandeacu/status/2117698026089185753
  - https://x.com/theo/status/2117859423641272589
  - https://github.com/pingdotgg/t3code
  - https://www.techradar.com/pro/security/criminals-and-scammers-are-using-hacked-websites-and-expired-domain-names-to-poison-chatgpt-with-spammy-recommendations
---

## Qué ha pasado

**T3 Code** es un programa gratuito para controlar agentes de programación con IA. Su web oficial es **t3.codes**.

El usuario Dorian D. [contó](https://x.com/doriandeacu/status/2117698026089185753) que su mujer le pidió a ChatGPT el enlace de descarga de T3 Code y recibió **t33.codes**: una copia casi idéntica de la web real, con un dominio (la dirección de la web) registrado unas dos semanas antes. Fíjate: solo cambia **una letra**.

Theo, el creador de T3 Code, [confirmó](https://x.com/theo/status/2117859423641272589) que ChatGPT recomendaba ese clon una y otra vez. La cuenta de X que enlazaba la web falsa fue suspendida y, más tarde, la web falsa dejó de funcionar. Aun así, según Theo, ChatGPT seguía recomendándola durante horas.

**Todavía no se sabe por qué** la IA elegía la web falsa. Lo más probable es que el buscador de la IA encontrara páginas que mencionaban el clon y lo citara sin comprobar quién es el dueño real del programa. Pero es una hipótesis, no algo confirmado.

## Por qué una IA puede darte un link equivocado

Cuando ChatGPT, Gemini u otro asistente "busca en internet", lee páginas web y resume lo que encuentra. **No comprueba quién es el dueño de cada web.** Si una página falsa está bien posicionada o aparece en muchos sitios, la IA puede presentarla como si fuera la oficial, con total seguridad.

Por eso un enlace que te da una IA merece la misma desconfianza que un enlace que te llega por un mensaje de un desconocido.

## Cómo comprobar un link en 4 pasos

1. **Lee el dominio letra por letra.** El dominio es la parte que va justo antes de la primera barra `/` (por ejemplo, en `https://t3.codes/descargas`, el dominio es `t3.codes`). Busca letras repetidas (`t33`), cambiadas (`rn` en lugar de `m`) o terminaciones raras (`.co` en vez de `.com`).
2. **No uses el enlace: ve tú al sitio.** Para apps de móvil, búscala directamente en la App Store o en Google Play. Para programas, escribe a mano la dirección oficial que ya conozcas o búscala en un buscador y compara con varias fuentes.
3. **Comprueba al dueño.** Si el programa es de código abierto, mira en GitHub qué organización lo publica (en T3 Code es [pingdotgg/t3code](https://github.com/pingdotgg/t3code)) y qué web indica allí. Comprueba también la cuenta oficial del creador en redes.
4. **Desconfía de las webs recién creadas.** Puedes consultar la fecha de registro de un dominio en servicios gratuitos de "whois" (por ejemplo, who.is). Si la web de un programa conocido se creó hace dos semanas, es una señal de alarma.

## Si ya descargaste algo de una web falsa

1. **No lo abras.** Si no lo has ejecutado, bórralo y vacía la papelera.
2. **Si ya lo instalaste**, desconecta el equipo de internet y pasa un análisis con el antivirus (en Windows sirve el Microsoft Defender que ya trae).
3. **Cambia tus contraseñas importantes** desde otro dispositivo limpio, empezando por el correo, y activa la verificación en dos pasos (un segundo código además de la contraseña).
4. **Si tienes criptomonedas** en ese equipo, muévelas a una cartera nueva creada en un dispositivo limpio.
5. Si el equipo es del trabajo, avisa a tu departamento de informática.

## Para expertos: cómo se "envenenan" las recomendaciones de la IA

No es un caso aislado. [TechRadar](https://www.techradar.com/pro/security/criminals-and-scammers-are-using-hacked-websites-and-expired-domain-names-to-poison-chatgpt-with-spammy-recommendations) ha documentado cómo estafadores usan **webs hackeadas y dominios caducados** (que conservan su "reputación" antigua) para colar sus recomendaciones en las respuestas de ChatGPT. Es una versión para IA del clásico *SEO poisoning* (envenenar los resultados del buscador).

En programación existe otra variante: los asistentes a veces se inventan nombres de paquetes que no existen, y un atacante puede registrar ese nombre con código malicioso. Regla práctica: verifica el editor y el repositorio de cualquier comando `curl ... | sh` o paquete que te sugiera una IA antes de ejecutarlo.
