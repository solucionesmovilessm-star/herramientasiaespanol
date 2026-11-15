---
title: "Google lanza la Gemini Decisions API, para decisiones rápidas de sí/no, elección y nota"
date: 2026-11-11
summary: "Un endpoint nuevo de la API de Gemini, con el modelo Gemini Decision 1, evalúa hasta 1.000 preguntas de conjunto cerrado sobre un mismo input multimodal y devuelve probabilidades y confianza, a 0,10 $ por millón de tokens de entrada y 0 $ de salida."
sources:
  - https://blog.google/innovation-and-ai/technology/developers-tools/gemini-decisions-api/
---

## Qué ha pasado

El 11 de noviembre de 2026, Google presentó la **Gemini Decisions API**, un endpoint de la API de Gemini impulsado por el nuevo modelo **Gemini Decision 1** (`gemini-decision-1`), disponible en Google AI Studio.

Está pensado para decisiones de **conjunto cerrado**: elegir una herramienta, comprobar una norma, enrutar un modelo o puntuar un contenido. Enviás un input multimodal (texto, imagen, audio, vídeo o PDF, hasta **256.000 tokens**) y hasta **1.000 preguntas** independientes. El modelo no escribe la respuesta token a token: puntúa las opciones en una sola pasada y devuelve probabilidades y una **confianza entre 0 y 1**, para que tu código envíe los casos dudosos a otro modelo o a una persona.

Hay tres tipos de pregunta: **sí/no** (`noul`), **elección** entre 2 y 255 opciones, y **nota** según una rúbrica ordenada.

Según Google, la latencia de extremo a extremo está en **150-250 ms** (50-100 ms de cómputo del modelo en la mediana, con contextos de hasta 16.000 tokens). El precio es **0,10 $ por millón de tokens de entrada y 0 $ de salida**. El input compartido se cobra una vez por petición, da igual cuántas preguntas lleves; no hay cargo por tokens de salida ni por transcribir audio o hacer OCR. En AI Studio hay un tramo sin coste para prototipar.

Google dice que ya usa esta API dentro de Gemini Notebook (para enrutar cada consulta al modelo adecuado), en un experimento de Stitch, en CC de Google Labs y como capa de seguridad de herramientas MCP en Search.

## Por qué importa

Es una API distinta de un chat: no genera texto largo, decide rápido y barato. Encaja en agentes que tienen que elegir herramienta, filtrar o puntuar a menudo, sin pagar una generación completa cada vez.

## Qué cambia para ti

- **Si desarrollas:** ya puedes pedir una clave en Google AI Studio y seguir las guías de Python, JavaScript y REST. Google cita integraciones en marcha en OpenRouter, LangChain, Vercel, LiteLLM, Pydantic AI, Pipecat, LiveKit y OpenCode; el soporte en Gemini de Google Cloud, dice, llegará después.
