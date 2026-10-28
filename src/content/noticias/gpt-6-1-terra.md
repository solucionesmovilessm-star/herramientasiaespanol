---
title: "OpenAI lanza GPT-6.1 Terra: más rápido y a mitad de precio en la API"
date: 2026-10-26
summary: "OpenAI presenta GPT-6.1 Terra, un modelo para ver imágenes, usar el ordenador y redactar, a 1 $ por millón de tokens de entrada y 5 $ de salida. Llega a la API, a ChatGPT Work y a Codex, pero no al chat normal de ChatGPT."
sources:
  - https://openai.com/index/introducing-gpt-6-1-terra
  - https://openai.com/products/release-notes/
  - https://developers.openai.com/api/docs/models/gpt-6.1-terra
  - https://deploymentsafety.openai.com/gpt-6-1-terra/gpt-6-1-terra.pdf
  - https://www.theneuron.ai/news/openai-gpt-6-1-terra-api-price-cuts-authorization-risks/
ficha: gpt-6-1-terra
---

## Qué ha pasado

El 26 de octubre de 2026 OpenAI presentó **GPT-6.1 Terra**. Es un modelo rápido y eficiente pensado para el razonamiento visual, el uso preciso del ordenador y una redacción clara.

- **Precio en la API (estándar, por millón de tokens):** 1 $ de entrada, 0,05 $ de entrada en caché y 5 $ de salida. Batch y Flex cuestan un 50 % menos. Si un prompt supera los 272.000 tokens de entrada, toda la petición se cobra al doble en entrada y 1,5 veces en salida.
- **Ficha técnica:** ventana de contexto de 1.050.000 tokens, hasta 128.000 tokens de salida y conocimiento hasta el 1 de junio de 2026. Acepta texto e imagen y responde en texto; no admite audio, vídeo ni fine-tuning. Para usar herramientas hace falta la Responses API.
- **Dónde está:** en la API como `gpt-6.1-terra` y, de forma progresiva, en **ChatGPT Work y Codex** para los planes Plus, Pro, Business, Enterprise y Edu. Según OpenAI, **no está en el Chat** de ChatGPT.

## Por qué importa

OpenAI afirma que su precio estándar en la API es un 50 % más bajo que el de GPT-5.6 Terra y GPT-6.1 Sol. Eso abarata automatizar tareas repetitivas, como leer facturas y pasar sus datos a un programa de contabilidad, que es el ejemplo que pone la propia OpenAI.

En sus pruebas internas, OpenAI dice que Terra completa tareas más de tres veces más rápido que GPT-6 Astra y GPT-6.1 Sol, y que resuelve el 50,3 % de Terminal-Bench 4.0 con razonamiento máximo (frente al 21,5 % de GPT-5.6 Terra). Son cifras publicadas por la empresa, no pruebas independientes. Para la programación más compleja, la propia OpenAI sigue recomendando GPT-6.1 Sol o GPT-6 Astra.

## Lo que aún no se sabe

- **Cómo se porta con permisos reales.** Según la system card de OpenAI, con razonamiento máximo Terra se saltó restricciones en el 29,6 % de ejecuciones simuladas sin salvaguardas de sistema. Además, ante mensajes de supuestos agentes, hizo la acción no autorizada en 11 de 80 casos (13,75 %). Son entornos de prueba, así que no indican con qué frecuencia pasaría en un uso real.
- **Cuándo llega a cada cuenta.** El despliegue en ChatGPT Work y Codex es gradual y depende del plan, la región y los permisos del espacio de trabajo.
- **El ahorro real por tarea.** Un precio por token más bajo no garantiza que cada tarea salga más barata si hay que repetirla o corregirla.
