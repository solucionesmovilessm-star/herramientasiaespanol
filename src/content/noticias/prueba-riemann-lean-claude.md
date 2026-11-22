---
title: "Lean y Mathlib certifican la prueba de Riemann que Alpöge dice haber desarrollado con Claude"
date: 2026-11-22
summary: "El 21 de noviembre, Lean y Mathlib certificaron la formalización de la hipótesis de Riemann de Levent Alpöge. Él atribuye a Claude una ayuda de unas seis semanas. Aún falta explicar las ideas nuevas."
sources:
  - https://leanprover-community.github.io/blog/posts/riemann-hypothesis/
  - https://www.theguardian.com/technology/2026/nov/21/anthropic-riemann-hypothesis-solved-claude-ai
  - https://github.com/leanprover-community/riemann-hypothesis
ficha: claude
draft: false
---

## Qué ha pasado

El 20 de noviembre de 2026, el matemático **Levent Alpöge** publicó una formalización de la **hipótesis de Riemann** como una biblioteca de **Lean** de **17 millones de líneas** de código. Al día siguiente, las comunidades de **Lean** y **Mathlib**, con el respaldo de la **Lean FRO** y la **Mathlib Initiative**, emitieron una declaración conjunta: «Tenemos plena confianza en que la prueba de Alpöge de la hipótesis de Riemann es correcta, y le felicitamos por este logro.» Certifican, dicen, tanto el enunciado como la prueba.

La declaración no menciona a Claude. Esa parte la cuenta el propio Alpöge, recogido por The Guardian: afirma que **Claude**, el modelo de Anthropic (empresa en la que trabaja, según ese diario), le ayudó a desarrollar la solución en **unas seis semanas**. «Claude y yo lo pasamos muy bien… pero esta vez Claude me dejó atrás cerca de la meta», escribió en una nota en su web. Conviene separar las dos cosas: la **certificación formal** la firman Lean y Mathlib; el **papel de la IA** lo describe el autor.

## Qué han comprobado (y qué no)

Según el comunicado, el código depende directamente solo de Mathlib y cumple cuatro criterios que la comunidad usa para dar una prueba por «comprobada en Lean»:

1. El enunciado es el de Mathlib (`RiemannHypothesis`), revisado por expertos en Lean y teoría de números.
2. La biblioteca **compila** sin errores; decenas de personas han reproducido el mismo archivo de exportación de la prueba.
3. Dos herramientas independientes (`comparator` y `con-leche --compare`) confirman que el teorema demostrado es **exactamente** el enunciado de Mathlib, no una variante disfrazada.
4. La exportación inerte de la prueba ha sido aceptada por el núcleo oficial de Lean y por comprobadores independientes (`con-leche`, `con-ron` y otros, en distintos lenguajes).

La propia declaración termina pidiendo lo que aún falta: que la comunidad matemática **explique las ideas nuevas** de la prueba. Un certificado de Lean no es un fallo del **Instituto Clay**, ni el cobro del premio del milenio (un millón de dólares) asociado a este problema. Tampoco sustituye un artículo tradicional revisado por pares.

## Por qué importa si sigues la IA

Si se sostiene la lectura informal, sería uno de los usos más ambiciosos de un modelo de lenguaje en matemáticas serias. Eso no convierte a Claude en un oráculo, ni implica que puedas «pedirle» el siguiente problema del milenio y darlo por resuelto. Lo que sí queda, por ahora, es esto: un matemático atribuye a Claude una ayuda sustancial, y dos comunidades de formalización dicen que el objeto Lean demuestra, de verdad, la hipótesis de Riemann.
