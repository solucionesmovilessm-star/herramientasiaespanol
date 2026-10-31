---
title: "¿Tus links te delatan? Qué esconden los enlaces que compartes desde X, Instagram, YouTube, TikTok y Spotify"
date: 2026-10-31
summary: "Un post viral dice que cada link que compartes \"te delata\". Lo comprobamos: es cierto que las apps añaden códigos al final de los enlaces (como ?s=46 o ?si=) para saber quién compartió y desde dónde, pero se exagera lo que puede ver quien lo recibe. Te explicamos qué es real y cómo limpiar un link en 10 segundos."
sources:
  - https://x.com/cranefomo/status/2116206038663786764
  - https://github.com/Cranefomo/xclean
  - https://www.ndtvprofit.com/india/iphone-android-or-desktop-can-a-twitter-link-reveal-the-source-heres-the-truth-12263184
  - https://voxtly.com/x-link-codes-explained
  - https://linkclean.app/learn/x-twitter-share-url-explained/
  - https://linksanitizer.com/learn/what-is-the-si-parameter/
  - https://linkclean.app/trackers/igshid/
  - https://www.prunethe.link/clean/tiktok
  - https://crownmediacreative.com/can-you-see-who-shared-your-tiktok/
---

## Qué dice el post viral

El 30 de octubre, la cuenta **@Cranefomo** publicó en X un mensaje que superó las 15.000 visualizaciones: "cada link que compartes desde X, Instagram, YouTube, TikTok y Spotify te delata". Según el post, al final de cada enlace las apps pegan unos **códigos** que dicen desde qué móvil lo compartiste o que lo conectan con tu cuenta.

Lo hemos comprobado punto por punto. Resumen: **en lo esencial es verdad, pero el tono está exagerado.**

## Primero: ¿qué es eso que va después del "?"?

Un link tiene dos partes:

- **Antes del `?`**: la dirección de verdad (el post, el vídeo, la canción).
- **Después del `?`**: "parámetros", datos extra que la app añade. A veces son útiles (por ejemplo, el minuto de un vídeo), pero muchas veces solo sirven para **medir quién comparte qué**.

Ejemplo real: `x.com/usuario/status/123?s=46&t=AbC123`. Lo que importa es `x.com/usuario/status/123`. El resto es rastreo.

## Lo que es verdad

| Código | App | Qué es | ¿Confirmado? |
|---|---|---|---|
| `s=46` | X | El link se copió con "Copiar enlace" en la app de X para **iPhone** | ✅ Sí |
| `s=19` | X | Copiado desde la app de **Android** | ✅ Sí |
| `s=20` | X | Copiado desde la **web** (ordenador) | ✅ Sí (algunas fuentes antiguas dicen Windows) |
| `t=` | X | Identificador ligado a quien compartió el link | ✅ Sí |
| `igsh=` / `igshid=` | Instagram | Identificador del "compartir", ligado a tu cuenta | ✅ Sí |
| `si=` | YouTube y Spotify | Identificador del "compartir", ligado a tu cuenta (YouTube lo añade desde 2023) | ✅ Sí |
| `sender_device=` | TikTok | Dice si quien lo compartió usaba móvil u ordenador | ✅ Sí |

Importante: **X no ha publicado nunca la lista oficial** de códigos `s=`. Todo lo que se sabe viene de investigadores que analizaron el código de la web de X (en 2022) y de pruebas de usuarios.

## Lo que no pudimos confirmar

- **WhatsApp = `s=48` y Telegram = `s=52`**: el `48` aparece en una lista comunitaria como "iPhone: compartir por WhatsApp", pero no hay fuente oficial. El `52` para Telegram **no lo hemos podido confirmar**.
- **El parámetro `?a=` en X**: aparece en links reales, pero no encontramos documentación fiable sobre qué contiene exactamente.
- **La herramienta del post**: existe, es gratuita y de código abierto (licencia MIT) en [github.com/Cranefomo/xclean](https://github.com/Cranefomo/xclean). Se creó el 30 de octubre de 2026 y **no la hemos auditado**, así que no podemos garantizar lo que hace. Que la programara "Claude Code Opus 5.5" es una afirmación del autor que no podemos verificar.

## Lo exagerado

- **Quien recibe tu link no ve tu cuenta mirando el enlace.** Ve, como mucho, un número como `s=46` y puede deducir "usa iPhone". Nada más: ni tu modelo, ni tu nombre, ni dónde estás.
- **Quien sí puede atar cabos es la plataforma.** Con `t=`, `igsh=` o `si=`, X, Instagram, YouTube o Spotify pueden saber que **tú** compartiste el link y **quién** hizo clic. Así aprenden que os conocéis.
- **Excepción: TikTok.** TikTok sí puede **mostrar tu perfil** a quien abre el link que mandaste, o sugerirle tu cuenta. Lo controlan dos ajustes que vienen activados: en **Ajustes y privacidad → Privacidad**, busca "Mostrar perfil al compartir enlaces" y "Sugerir tu cuenta a otros" (los nombres pueden variar un poco según la versión).

## Cómo limpiar un link (10 segundos)

1. Copia el link como siempre.
2. Pégalo en el chat **sin enviarlo todavía**.
3. Busca el signo **`?`**.
4. **Borra el `?` y todo lo que va detrás**, en links de **X, Instagram, TikTok y Spotify**.
5. Envía. El link funciona igual.

### Cuidado con YouTube

En YouTube no lo borres todo a ciegas:

- **Borra** el `si=...`.
- **Mantén** el `t=` si quieres que el vídeo empiece en un minuto concreto (por ejemplo, `t=90` = segundo 90).
- En links largos tipo `youtube.com/watch?v=...`, **mantén** el `v=`: es el propio vídeo.

Ejemplo: `youtu.be/abc123?si=XyZ&t=90` → `youtu.be/abc123?t=90`

## Para los que quieren ir más allá (opcional)

- El `t=` de X es un **token de sesión**: permite relacionar varios links compartidos desde el mismo dispositivo.
- Instagram ha cambiado el nombre de su parámetro varias veces (`igshid`, `igsh`, `igsi` y, en posts recientes, `stkn`), pero hace lo mismo.
- TikTok puede añadir hasta diez parámetros (`_t`, `_r`, `refer`, `share_item_id`...). El vídeo solo necesita la parte `/video/número`.
- Si prefieres no hacerlo a mano, hay limpiadores de links para el navegador. Antes de instalar cualquier extensión, revisa quién la hace y qué permisos pide.

## En resumen

Sí, los links que compartes llevan "etiquetas" que ayudan a las redes sociales a saber quién comparte con quién. No, la persona que lo recibe no ve tu cuenta en el link (salvo el caso de TikTok). La solución es fácil: **borra lo que va detrás del `?`**, salvo el minuto en YouTube.
