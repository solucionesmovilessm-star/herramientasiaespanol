---
title: "OpenAI refuerza la defensa de GPT-6.2 frente a la destilación adversaria"
date: 2026-11-22
summary: "El 20 de noviembre, OpenAI explicó cómo intenta impedir que alguien copie capacidades de sus modelos, sobre todo el razonamiento interno. En una prueba interna, el éxito de esos ataques en Astra bajó del 54,0 % al 0,2 %."
sources:
  - https://openai.com/index/combatting-adversarial-distillation/
  - https://join.dev/news/ai/2026-11-22/
ficha: chatgpt
draft: false
---

## Qué ha pasado

El 20 de noviembre de 2026, OpenAI publicó un artículo sobre la **destilación adversaria**: usar, sin autorización, las salidas de un modelo de frontera para entrenar otro con capacidades parecidas, **pero sin las salvaguardas** del original. El ejemplo que pone la propia empresa es claro: alguien podría destilar capacidades de ciberseguridad y emplear el modelo copia en ataques que el modelo original habría rechazado o que sus filtros habrían bloqueado.

OpenAI dice que ha reforzado esas defensas en **GPT-6.2 Astra** y **GPT-6.2 Sol**, en línea con las que ya aplica en biología y ciberseguridad. El punto más sensible, afirma, es el **razonamiento protegido** (la cadena de pensamiento interna): esos pasos intermedios pueden contener información que la respuesta final no muestra, y por eso son un material de entrenamiento muy valioso para copiar un modelo.

## La cifra que da OpenAI (y su límite)

En una **evaluación interna** con «red teaming» automático, OpenAI midió si un atacante podía recuperar el razonamiento protegido que el modelo había generado al responder a un prompt anterior. Según la compañía, la tasa media de éxito del ataque pasó del **54,0 %** contra GPT-6 Astra con las salvaguardas originales al **0,2 %** contra GPT-6.2 Astra con las actualizadas.

Esa cifra es de OpenAI, no de un laboratorio independiente. No dice que la destilación sea imposible, ni detalla en el texto público cómo reproducir esos ataques; el artículo habla de combinaciones de pruebas adversarias, entrenamiento, clasificadores, protecciones en la API e investigación de campañas coordinadas.

## Por qué importa si usas ChatGPT o la API

Para quien solo chatea, el cambio es invisible: no hay un botón nuevo. Para el sector, el recado es otro. A medida que los modelos hacen mejor el trabajo de programar o de ayudar en seguridad, **copiarlos sin copiar también los límites** se convierte en un riesgo de seguridad, no solo en una disputa de propiedad intelectual. OpenAI dice que comparte aprendizajes (con menos detalle del que podría aprovechar un atacante) a través del Frontier Model Forum y de canales gubernamentales.

Si entrenas o alojas modelos a partir de salidas de terceros, este aviso recuerda que esas prácticas están cada vez más vigiladas. Y si solo consumes GPT-6.2, la noticia útil es esta: las salvaguardas del razonamiento interno, según su fabricante, son ahora bastante más difíciles de extraer que en la generación anterior. Eso, de nuevo, lo afirma OpenAI.
