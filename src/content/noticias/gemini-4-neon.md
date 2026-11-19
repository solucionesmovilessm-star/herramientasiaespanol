---
title: "Google lanza Gemini 4 Neon: 3 $ / 15 $ por millón de tokens y contexto de un millón"
date: 2026-11-19
summary: "Google lanza Gemini 4 Neon, entre Hydrogen y Carbon, a 3 $ de entrada y 15 $ de salida por millón de tokens, con 1 millón de contexto. Llega a la API de pago, a Antigravity y a la app de Gemini para planes Pro y Ultra."
sources:
  - https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-neon/
  - https://aistudio.google.com/docs/whats-new-gemini-4-neon
  - https://antigravity.google/blog/gemini-4-neon-in-google-antigravity/
ficha: gemini
draft: false
---

## Qué ha pasado

El 18 de noviembre de 2026, Google presentó **Gemini 4 Neon**. Lo sitúa entre **Gemini 4 Hydrogen** (rápido, para el día a día) y **Gemini 4 Carbon** (para los proyectos más largos y exigentes): un modelo de nivel frontera pensado para programación compleja, trabajo de conocimiento y flujos científicos, con más velocidad y menor coste por tarea que el modelo más grande.

El precio oficial de la API es **3 dólares por millón de tokens de entrada**, **0,15 dólares** si la entrada está en caché (un 95 % de descuento, según Google) y **15 dólares** por millón de tokens de salida. El contexto unificado es de **1 millón de tokens**. Hay cuatro niveles de «pensamiento»: `low`, `medium`, `high` (el predeterminado) y `xhigh`. En la API el identificador es `gemini-4-neon`.

## Dónde puedes usarlo

Según el anuncio de Koray Kavukcuoglu y la documentación de Google AI Studio, Neon se está desplegando así:

- **Desarrolladores:** API de Gemini de **pago** en Google AI Studio y en Android Studio.
- **Suscriptores de Google AI Pro y Ultra:** en **Google Antigravity** y, en el desplegable de modelos, en la **app de Gemini**. Quien tiene Pro o Ultra también puede probarlo en AI Studio.
- **Empresas:** en Gemini for business (API o selector de modelo) y en Antigravity.
- **Defensores de ciberseguridad** del programa **Fairwind:** el acceso empieza a llegar en los próximos días.

Google no indica que Neon esté en el plan gratuito de Gemini.

## Lo que afirma Google (con cautela)

Google dice que, en el nivel `xhigh`, Neon queda **tercero** en el Artificial Analysis Intelligence Index con una puntuación de **61**, y **primero** en el Artificial Analysis Coding Agent Index (**58,6**). En el nivel `high` predeterminado, afirma un **32 % menos de coste por tarea** que Carbon. En Antigravity, Orchestrator puede usar Neon para planificar y Hydrogen para ejecutar. Todas esas cifras y puestos son de Google o de los índices que cita; no las hemos vuelto a medir.

## Qué cambia para ti

Si ya pagas la API o tienes **Pro o Ultra**, Neon es el modelo nuevo a probar para tareas frecuentes que piden razonamiento fuerte sin irte siempre a Carbon. Si usas solo el plan gratuito, este lanzamiento no te abre ese modelo. Y si programas agentes, los niveles de pensamiento y el binomio Neon + Hydrogen en Antigravity son la novedad práctica, no solo el nombre del modelo.
