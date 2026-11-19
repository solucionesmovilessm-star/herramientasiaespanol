---
title: "OpenAI afirma que sus modelos mejoraron hasta un 14 % el diseño de una GPU de AMD"
date: 2026-11-19
summary: "OpenAI detalla cómo sus modelos ayudaron a rediseñar bloques de Jalapeño y, con AMD, a mejorar hasta un 14 % potencia, rendimiento y área de una GPU insignia. Según OpenAI, algunos cambios ya fueron a fabricación."
sources:
  - https://openai.com/index/advancing-chip-design-with-our-models/
  - https://thenextweb.com/news/openai-models-amd-gpu-chip-design-14-percent
ficha: chatgpt
draft: false
---

## Qué ha pasado

El 18 de noviembre de 2026, OpenAI publicó un artículo técnico en el que sostiene que sus modelos ya no solo **escriben código de software**: también están ayudando a **diseñar chips**. El texto amplía lo que la empresa contó en agosto sobre **Jalapeño**, su primer chip propio de inferencia, y añade una colaboración con **AMD**.

**Según OpenAI**, en la GPU insignia de AMD sus modelos lograron mejoras de hasta un **14 %** en la relación entre potencia, rendimiento y área (PPA) frente a diseños ya muy optimizados. El modelo reescribió el código que describe los circuitos (**SystemVerilog RTL**) y usó herramientas de **Synopsys** para comprobar que el comportamiento se mantenía. OpenAI afirma que eso equivale a «aproximadamente un año de progreso en menos de cinco meses» y que AMD **ya incluyó algunos de esos cambios** en un diseño enviado a fabricación, y otros en los archivos de producción para versiones futuras. También dice que AMD verificó ganancias de **un solo dígito porcentual** en bloques clave de su próxima CPU insignia.

The Next Web recoge el mismo anuncio el 18 de noviembre. Las cifras de mejora las da OpenAI; no es una auditoría independiente publicada junto al artículo.

## Jalapeño y las pruebas en RISC-V

En Jalapeño, el equipo de OpenAI estima que los cambios propuestos por los modelos redujeron el área de celdas estándar alrededor de un **13 %** en la unidad vectorial y un **10 %** en la unidad matricial. Un rediseño de multiplicador, siempre según OpenAI, usó unas **15 % menos** de área en síntesis y bajó la latencia de dos ciclos de reloj a uno. Esas optimizaciones, afirma, se comprobaron en el silicio ya fabricado.

Para medir el avance entre generaciones, OpenAI evaluó varios modelos sobre dos núcleos RISC-V de código abierto (**PicoRV32** e **Ibex** de OpenTitan): mejorar un diseño existente y diseñar un núcleo a partir de una especificación. Con un presupuesto comparable de unos **112.000 tokens** por prueba, **GPT-6.2 Astra** obtuvo la media más alta en ambos núcleos. OpenAI advierte que partir de una especificación escrita puede ser más fácil, porque el modelo puede omitir funciones del original que apenas afectan a las pruebas.

## Qué viene ahora

OpenAI dice que, con Synopsys, está entrenando **GPT-Synopsys**, un modelo pensado para usar las herramientas de automatización de diseño electrónico (EDA) como lo haría un ingeniero. Si se confirma en el día a día de AMD y de otros fabricantes, el efecto no es una app nueva para el usuario de ChatGPT, sino una posible aceleración —y un nuevo campo de competencia— en el hardware que sostiene a la IA.
