---
title: "OpenAI lanza GPT-6.2 Astra y Sol: más baratos y ya disponibles en ChatGPT Work y la API"
date: 2026-11-18
summary: "OpenAI presenta GPT-6.2 Astra y Sol en ChatGPT Work, Codex y la API. Astra baja un 20 % su precio, hasta 8 $ / 40 $ por millón de tokens, y Sol se mantiene en 2 $ / 10 $."
sources:
  - https://openai.com/index/introducing-gpt-6-2-astra-sol/
  - https://deploymentsafety.openai.com/gpt-6-2-astra-sol
ficha: chatgpt
draft: false
---

## Qué ha pasado

OpenAI presentó **GPT-6.2 Astra** y **GPT-6.2 Sol**. Astra es el modelo de frontera para los proyectos más exigentes; Sol, el modelo eficiente para el trabajo diario. Según la compañía, ambos rinden mejor en tareas difíciles y usan menos tokens de salida, lo que permite hacer más dentro de los límites de uso.

**Según OpenAI**, en la API Astra cuesta **8 $ por millón de tokens de entrada**, **0,40 $** si la entrada está en caché y **40 $** de salida: un **20 % menos** que GPT-6 Astra, con un descuento del **60 %** en la entrada cacheada. Sol mantiene los precios de GPT-6.1 Sol: **2 $ / 0,10 $ / 10 $** por millón de tokens.

## Disponibilidad

Desde el anuncio, Astra y Sol están disponibles para usuarios de los planes **Plus, Pro, Enterprise y Edu** en **ChatGPT Work** y en **Codex**. Los desarrolladores pueden llamarlos en la API como `gpt-6.2-astra` y `gpt-6.2-sol`. El modo **Ultrafast** llega a quienes tienen el plan **Pro 500** con cualquiera de los dos modelos; por primera vez también llega al plan **Pro 200**, de momento solo con Sol. En cuentas Enterprise y Edu, el acceso depende de que lo active el administrador del espacio de trabajo. OpenAI no indica en esa página que estén en el plan gratuito de ChatGPT.

## Lo que afirma OpenAI (y lo que conviene tomar con cautela)

OpenAI afirma que, en **Agents’ Last Exam**, Astra supera en 5,2 puntos a GPT-6 Astra por menos de un tercio del coste, y en 5,5 puntos a Claude Fable 5.2 por un 5 % del coste. También dice que, en **FrontierCode 2.0** de Cognition, Sol se queda a **0,5 puntos** de Astra a aproximadamente una quinta parte del coste. Son cifras de la propia OpenAI, no una auditoría independiente.

La compañía presenta Astra como especialmente fuerte en documentos, hojas de cálculo, presentaciones y código, y dice que es su primer modelo publicado en el exterior que alcanza el umbral **High** de «auto-mejora» de su marco de preparación. Tanto Astra como Sol, según OpenAI, alcanzan el umbral **Critical** en ciberseguridad y **High** en capacidades biológicas y químicas, y salen con **salvaguardas más estrictas** en ayuda de ciberseguridad de alto riesgo. Eso, admite OpenAI, también limita algunos flujos legítimos de investigación. Los defensores autorizados siguen teniendo el programa **Daybreak**.

## Qué cambia para ti

- Si ya pagas **ChatGPT Plus o Pro**, puedes probar Astra y Sol en Work y en Codex; no hace falta esperar a un plan nuevo.
- Si usas la **API**, el ahorro de Astra es claro en el precio por token, y Sol sigue siendo la opción cotidiana más barata.
- Si trabajas en **seguridad**, ten en cuenta los rechazos extra: para investigación autorizada, OpenAI apunta a Daybreak, no al modelo general.
