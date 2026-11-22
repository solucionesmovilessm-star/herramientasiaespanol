---
title: "OpenRouter da de baja a tres proveedores tras un informe de fugas de prompts"
date: 2026-11-22
summary: "OpenRouter retira a tres proveedores de inferencia, quita la retención cero a 125 endpoints y avisa a los clientes posiblemente afectados. Agradece un informe de Dragos y dice que su plataforma no fue vulnerada."
sources:
  - https://openrouter.ai/blog/announcements/data-processing-incidents-on-inference-providers/
  - https://thehackernews.com/2026/11/openrouter-drops-3-providers-after.html
draft: false
---

## Qué ha pasado

El 22 de noviembre de 2026, **OpenRouter** —una pasarela que enruta peticiones de modelos de IA a un conjunto de proveedores— publicó un aviso sobre **incidentes de tratamiento de datos** en algunos de esos proveedores. Según la compañía, investigadores de seguridad habían informado de que ciertos proveedores habían sufrido un compromiso de datos o no cumplían las políticas que anunciaban. OpenRouter afirma que **los hallazgos no muestran una brecha ni un acceso no autorizado a su propia plataforma**.

Las medidas que dice haber tomado son tres: **dar de baja a tres proveedores**; **retirar la elegibilidad de Zero Data Retention (ZDR)** —la etiqueta de «no se retiene el prompt»— de **125 endpoints**, incluidos los señalados por los investigadores y otros, por precaución; y **avisar a todos los clientes** que pudieran estar afectados.

El aviso agradece un informe de **Dragos**. The Hacker News, que recoge ese trabajo, cuenta que los investigadores plantaron unos **dos millones** de prompts con enlaces y credenciales únicos entre julio y noviembre, y vigilaron si alguien los usaba. Según esa crónica, en tres proveedores de inferencia hubo robo de datos durante meses, y ninguno lo sabía hasta que se lo dijeron; parte del tráfico iba marcado como ZDR. Esas cifras y detalles los aporta la cobertura del informe de Dragos, no el comunicado corto de OpenRouter.

## Qué han dicho algunos proveedores

OpenRouter enlaza avisos públicos de **Novita**, **Phala** y **Together AI**, y aclara que **no todos** los afectados han publicado uno. The Hacker News subraya un punto importante: Dragos no ha nombrado a los tres proveedores comprometidos, OpenRouter no ha nombrado a los tres que ha dado de baja, y **nadie ha confirmado en público que sean los mismos tres**.

Según esas crónicas, Phala describe el compromiso de un servidor de inferencia (contenido expuesto en una ventana que la propia Phala acota); Together AI habla de muestras de prompts bajadas tras un credencial publicado por error en un repositorio; y Novita reconoce un problema de enrutado que envió algunas peticiones de MiniMax a la API oficial de MiniMax. Conviene leer el aviso de cada uno, no mezclarlos.

## Qué cambia para ti

Si usas OpenRouter u otros enrutadores baratos, **mira si te ha llegado un aviso** y **rota** cualquier clave, token o contraseña que hayas pegado en un prompt. Un interruptor de «retención cero» **no basta** si el proveedor o un atacante ya está leyendo el tráfico en el primer salto. Si el dato es sensible, el camino más directo —o no enviar secretos al modelo— sigue siendo más seguro que fiarse solo de una etiqueta.
