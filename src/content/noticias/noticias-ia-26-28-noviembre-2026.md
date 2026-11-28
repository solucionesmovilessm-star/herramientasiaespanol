---
title: "Lo más caliente de IA: 26-28 de noviembre de 2026"
date: 2026-11-28
summary: "Resumen verificado de las noticias de inteligencia artificial, seguridad y repositorios más relevantes entre el 26 y el 28 de noviembre de 2026."
sources:
  - https://huggingface.co/nvidia/Nemotron-Labs-Image-30B-A3B
  - https://dataconomy.com/2026/11/26/nvidia-releases-open-image-model-with-3b-active-parameters/
  - https://arxiv.org/abs/2611.31358
  - https://huggingface.co/blog/nvidia/building-on-nemotron-35-parse-open-data-fine-tunin
  - https://news.qq.com/rain/a/20261127A075JG00
  - https://technode.com/2026/11/27/tencent-launches-hy3d-3-6-for-professional-3d-asset-generation/
  - https://www.tencentcloud.com/act/pro/Hy3D
  - https://huggingface.co/inclusionAI/Ming-Image-0.2-Design
  - https://github.com/inclusionAI/Ming-Image
  - https://gpujournal.ai/story/ming-image-0-2-design-nov-26
  - https://huggingface.co/AngelSlim/Hy4-flash-GGUF
  - https://technode.com/2026/11/26/tencent-brings-hy4-flash-to-desktop-computers-with-quantized-model-release/
  - https://voicearena.com/jarvis-bench
  - https://snapereport.com/s/openai-gpt-live-1-1-debuts-first-on-voice-arena-jarvis-bench
  - https://www.reuters.com/5f374b32b07b/technology/openai-countersues-apple-stealing-trade-secrets-ft-reports-2026-11-27/
  - https://www.bbc.com/news/articles/cm15ekqvlezeo
  - https://finance.yahoo.com/news/exclusive-us-chip-curbs-distillation-071923947.html
  - https://www.trendforce.com/news/2026/11/27/news-distillation-crackdown-u-s-curbs-hit-chinas-ai-roadmaps-z-ai-moonshot-face-potential-model-delays
  - https://www.ecb.europa.eu/press/blog/date/2026/html/ecb.blog20261127~81118f8ec0.en.html
  - https://www.cnbc.com/2026/11/27/ai-shopping-agents-retailer-blocks.html
  - https://nvd.nist.gov/vuln/detail/cve-2026-137567
  - https://github.com/ggml-org/llama.cpp/releases/tag/b12658
  - https://kyberkit.com/en/articles/llama-cpp-rpc-server-cve-2026-137567
  - https://githubtrending.today/archive/2026-11-28/
  - https://github.com/elementalsouls/Claude-BugHunter
  - https://github.com/zhouxiaoka/autoclip
  - https://github.com/alesha-pro/llm.asm
  - https://upcurrent.dev/github-trending/2026-11/
---

Recorte de las últimas 48 horas. La ventana cubre desde el **26 de noviembre de 2026 a las 15:00, hora de Madrid**, hasta el **28 de noviembre a las 15:00, hora de Madrid**. Cada pieza está contrastada con una fuente primaria o con la cobertura de un medio que cita esa fuente. Los números de rendimiento que dan las propias empresas se presentan como tales, no como un test independiente.

Las horas, cuando las hay, están convertidas a la zona Europe/Madrid (CET, UTC+1).

## Lanzamientos y modelos

### NVIDIA publica pesos abiertos de Nemotron-Labs-Image-30B-A3B

**Fecha:** 26 de noviembre de 2026  
**Fuente:** [Ficha del modelo en Hugging Face](https://huggingface.co/nvidia/Nemotron-Labs-Image-30B-A3B) · [Artículo de Dataconomy](https://dataconomy.com/2026/11/26/nvidia-releases-open-image-model-with-3b-active-parameters/) · [Paper en arXiv](https://arxiv.org/abs/2611.31358)

NVIDIA ha publicado los pesos de Nemotron-Labs-Image-30B-A3B, un generador de imágenes autorregresivo con 30.000 millones de parámetros en total y 3.000 millones activos por token (mezcla de expertos). Es la pieza de raster del marco Nemotron-Labs-VisualCreation, que NVIDIA describe como «Pixel as Code»: además de imágenes, apunta a artefactos editables como webs, presentaciones, documentos y gráficos. Según las propias cifras de NVIDIA, el modelo marca 97,98 en LongTextBench (frente a 96,00 de GPT Image 2) y 92,86 en GenEval, pero se queda atrás en GenEval2 (65,43 frente a 81,00) y en Qwen-Image-Bench. La licencia es de uso no comercial, solo para investigación o evaluación; no vale para producción comercial.

**Por qué importa:** Es de lo más abierto que ha salido esta ventana en generación de imagen, y se puede probar en local, pero la letra pequeña de la licencia lo deja fuera de un flujo de trabajo profesional de pago. Conviene no venderlo como un sustituto libre de Midjourney, GPT Image o similares.

### NVIDIA abre datos y una receta para adaptar Nemotron 3.5 Parse

**Fecha:** 26 de noviembre de 2026  
**Fuente:** [Blog de NVIDIA en Hugging Face](https://huggingface.co/blog/nvidia/building-on-nemotron-35-parse-open-data-fine-tunin)

No es un modelo nuevo: NVIDIA refuerza el ya existente Nemotron 3.5 Parse, que convierte páginas de documentos en texto, tablas, gráficos, orden de lectura y cajas delimitadoras. Publica tres conjuntos sintéticos (9,98 millones de gráficos, 1 millón de tablas y 7,9 millones de páginas OCR multilingües), una receta de ajuste con SFT y RLVR/GRPO, y cifras de decodificación especulativa con DFlash2. En su propio banco, NVIDIA informa de un aumento de 7,62 veces en el rendimiento a concurrencia 1 y de 1,52 veces a concurrencia 512, en un H200 con BF16.

**Por qué importa:** Para quien monta RAG o agentes sobre PDFs, facturas o informes en español, tener datos abiertos y una receta de adaptación es más útil que otro benchmark de chat. El OCR sintético multilingüe es el recorte más relevante para la audiencia hispanohablante.

### Tencent lanza Hy3D 3.6, su modelo de generación 3D para assets profesionales

**Fecha:** 27 de noviembre de 2026 (el anuncio oficial de Tencent Cloud se publicó a las 11:02, hora de China, unas 04:02 hora de Madrid)  
**Fuente:** [Anuncio de Tencent Cloud](https://news.qq.com/rain/a/20261127A075JG00) · [Cobertura de TechNode](https://technode.com/2026/11/27/tencent-launches-hy3d-3-6-for-professional-3d-asset-generation/) · [Ficha del producto](https://www.tencentcloud.com/act/pro/Hy3D)

Tencent Hunyuan ha presentado Hy3D 3.6, un modelo nativo de texto o imagen a 3D pensado para assets de producción: hasta 2 millones de caras, texturas de hasta 8K, mallas estancas y mapas PBR (metalicidad, rugosidad y normales). Ya está en la API de Tencent Cloud Token Hub y en productos internos como Miora, LAP y WorkRally. El servicio de creación Hunyuan 3D ofrece cinco generaciones gratis al día, según TechNode. Tencent dice que un test ciego interno con cientos de artistas 3D lo sitúa por encima de rivales comparables; esa comparación es de la propia empresa, no de un evaluador independiente.

**Por qué importa:** El 3D generado por IA está pasando de «se ve bien en una demo» a «se puede meter en un motor, imprimir o retocar». Para creadores, estudios pequeños y perfiles de motion/3D en habla hispana, es una de las subidas de listón más concretas de estas 48 horas.

### Ant Group publica Ming-Image-0.2-Design con licencia MIT

**Fecha:** pesos listados el 25 de noviembre; anuncio público el 26 de noviembre de 2026  
**Fuente:** [Modelo en Hugging Face](https://huggingface.co/inclusionAI/Ming-Image-0.2-Design) · [Código en GitHub](https://github.com/inclusionAI/Ming-Image) · [Cobertura de GPUJournal](https://gpujournal.ai/story/ming-image-0-2-design-nov-26)

El equipo inclusionAI de Ant Group ha abierto Ming-Image-0.2-Design, un modelo de texto a imagen y edición pensado para fotos de producto, maquetas de interfaz y renderizados espaciales. La licencia es MIT (uso comercial, modificación y redistribución permitidos). Ant afirma que, el 25 de noviembre, encabezaba el ránking de pesos abiertos AA-Image-T2I v2.1 de Artificial Analysis con 1.095 Elo; es una cifra de Ant, no reejecutada aquí. La empresa valida el arranque en una sola GPU CUDA de 80 GB (H100, H200 o A100). Un modelo hermano que separa la imagen en capas editables está anunciado para la semana siguiente, todavía no publicado.

**Por qué importa:** Frente al modelo de NVIDIA, este sí permite uso comercial. Para tiendas, diseñadores y agencias que quieren generar o editar imágenes en su propio hardware, es la opción abierta más usable de esta ventana, siempre que se tenga una GPU de 80 GB o un alquiler equivalente.

### Tencent lleva Hy4 flash a Mac y PCs con pesos GGUF cuantizados

**Fecha:** 26 de noviembre de 2026  
**Fuente:** [Pesos en Hugging Face (AngelSlim)](https://huggingface.co/AngelSlim/Hy4-flash-GGUF) · [TechNode](https://technode.com/2026/11/26/tencent-brings-hy4-flash-to-desktop-computers-with-quantized-model-release/)

Tencent, a través de su proyecto de compresión AngelSlim, ha publicado pesos GGUF cuantizados de Hy4 flash, con guías para llama.cpp y para su motor Strata, tanto en Apple Silicon como en NVIDIA. La versión más pequeña baja el tamaño de unos 410 GiB a unos 126 GiB. Tencent informa de unos 17 tokens por segundo en un Mac mini M4 Pro de 64 GB, con contexto de 8.000 tokens y los expertos transmitidos desde el SSD, y de unos 47 a 50 tokens por segundo en un Mac M5 Max de 128 GB con la variante Q3_K. También incluye un encoder de visión y un modelo borrador para decodificación especulativa. Estas velocidades son mediciones de Tencent.

**Por qué importa:** Pone un modelo grande de Tencent al alcance de quien ya corre LLMs en local, incluido un Mac de 64 GB. Es noticia práctica para la audiencia que apuesta por ejecutar modelos en casa, no solo por las APIs.

### GPT-Live-1.1 de OpenAI queda primero en el Jarvis Bench de Voice Arena

**Fecha:** 26 de noviembre de 2026, alrededor de las 20:57 hora de Madrid (19:57 UTC, según la cobertura)  
**Fuente:** [Jarvis Bench (Voice Arena)](https://voicearena.com/jarvis-bench) · [Cobertura de Snape Report](https://snapereport.com/s/openai-gpt-live-1-1-debuts-first-on-voice-arena-jarvis-bench)

Voice Arena sitúa a GPT-Live-1.1, de OpenAI, en el primer puesto de su Jarvis Bench para agentes de voz en llamadas reales: 999 Elo de naturalidad, 1.025 de eficacia percibida y un 100 % de acierto en la tarea de reserva de vuelos, por delante de GPT-Realtime-2.1. El propio recorte indica que Gemini 3.8 Live sigue por delante en eficacia percibida en el escenario de aerolínea (1.029 frente a 1.008). El modelo entró en la API de OpenAI la semana anterior; lo nuevo de estas 48 horas es este ránking independiente. OpenAI no ha hecho comentarios, según esa cobertura.

**Por qué importa:** Los agentes que llaman por teléfono están dejando el demo y entrando en reservas y atención al cliente. Un banco con llamadas reales, y no solo audio sintético, es la referencia que más se acerca a un uso cotidiano, aunque un agente humano sigue claramente por delante en naturalidad según el mismo listado.

## Empresas, regulación y uso

### OpenAI demanda a Apple por presunto robo de secretos y presión a proveedores

**Fecha:** 27 de noviembre de 2026, 19:28 hora de Madrid (18:28 UTC), según Reuters  
**Fuente:** [Reuters](https://www.reuters.com/5f374b32b07b/technology/openai-countersues-apple-stealing-trade-secrets-ft-reports-2026-11-27/) · [BBC](https://www.bbc.com/news/articles/cm15ekqvlezeo)

OpenAI ha presentado 12 reconvenciones contra Apple en un tribunal federal de California, en el caso que Apple abrió en julio (Apple Inc. v. Liu et al.). OpenAI acusa a Apple de recontratar a un exempleado que estuvo seis meses en la empresa, acceder a planes de un nuevo dispositivo y a la hoja de ruta de hardware, y presionar a proveedores compartidos para frenar los futuros dispositivos de OpenAI. También dice que unos 400 empleados han pasado de Apple a OpenAI y que Apple anima a mezclar trabajo y cuentas personales para luego vigilar a quienes se van. Apple lo niega y habla de «un intento transparente de distraer» de su propia demanda, que acusa a OpenAI y a dos exdirectivos de apropiarse de secretos de Apple. Son alegaciones en un litigio, no hechos juzgados.

**Por qué importa:** No es un modelo nuevo, pero es la pelea corporativa más dura de estas 48 horas y afecta a la futura «caja» de IA que ambas quieren poner frente al iPhone. Si te interesa el hardware de OpenAI, el riesgo ahora no está solo en el juzgado: está en la cadena de proveedores.

### Reuters: las salvaguardas contra la destilación y las restricciones de chips retrasan a Z.AI y Moonshot

**Fecha:** 26 de noviembre de 2026; Reuters actualizó la pieza a las 13:57 hora de Madrid (07:57 EST), algo antes del corte de las 15:00; la historia siguió circulando el 26 y el 27  
**Fuente:** [Reuters, vía Yahoo Finance](https://finance.yahoo.com/news/exclusive-us-chip-curbs-distillation-071923947.html) · [TrendForce, 27 de noviembre](https://www.trendforce.com/news/2026/11/27/news-distillation-crackdown-u-s-curbs-hit-chinas-ai-roadmaps-z-ai-moonshot-face-potential-model-delays)

Reuters, citando a personas familiarizadas con el asunto que pedieron el anonimato, informa de que Z.AI (Zhipu) no ha lanzado en noviembre su flagship previsto, GLM-5.5 (unos 3 billones de parámetros), en parte por las barreras contra la destilación, y que las nuevas restricciones estadounidenses de cómputo en el extranjero podrían empujar el lanzamiento al primer trimestre de 2027 o más tarde. Moonshot, según esas mismas fuentes, calcula que el intervalo entre flagships podría pasar de unos seis meses a un año o más si pierde el cómputo en el extranjero, y que Kimi K4 podría retrasarse hasta mediados de 2027. Ni Z.AI ni Moonshot respondieron de inmediato a Reuters. La norma del Departamento de Comercio de EE. UU. entró en vigor el 19 de noviembre y obliga a licencias para acceder a gran cantidad de chips avanzados en centros de datos fuera de Estados Unidos.

**Por qué importa:** Muchos modelos chinos abiertos o baratos han sido la alternativa práctica para desarrolladores y creadores en español. Si los ciclos de Z.AI y Moonshot se alargan, el ritmo de novedades que llega a APIs, Hugging Face y herramientas locales puede frenarse en 2027. La información parte de fuentes anónimas; hay que leerla como un exclusivo periodístico, no como un comunicado de las empresas.

### El BCE: el 44 % de los trabajadores de la zona euro ya usa IA cada semana

**Fecha:** 27 de noviembre de 2026  
**Fuente:** [Blog del Banco Central Europeo](https://www.ecb.europa.eu/press/blog/date/2026/html/ecb.blog20261127~81118f8ec0.en.html)

Un análisis del BCE, con datos de su Encuesta de Expectativas de los Consumidores, dice que en agosto de 2026 el 44 % de los consumidores empleados de la zona euro (18-64 años) usaba IA en el trabajo al menos una vez por semana, y alrededor del 18 % lo hacía a diario. La adopción es similar a la de Estados Unidos, e incluso hay más uso diario en Europa, aunque las comparaciones no están del todo armonizadas. Entre quienes usan IA, un 56 % dice que les permite completar más trabajo y un 47 %, que mejora la calidad. Entre quienes no ven un aumento de producción, la razón más citada es el tiempo que lleva revisar o corregir lo que genera la IA. El BCE también señala que la inversión empresarial ligada a la IA avanza más despacio en Europa que en EE. UU.

**Por qué importa:** Es la foto oficial más reciente del uso laboral de la IA en la zona euro, España incluida. Sirve para explicar a la audiencia que la IA ya no es un experimento, y también para recordar que sin revisión humana el «ahorro de tiempo» se evapora.

### Los agentes de compra se estrellan con Amazon y un mapa irregular de tiendas

**Fecha:** 27 de noviembre de 2026, 16:27 hora de Madrid (10:27 EST)  
**Fuente:** [CNBC](https://www.cnbc.com/2026/11/27/ai-shopping-agents-retailer-blocks.html)

En un reportaje de Black Friday, CNBC describe el estado real de los agentes que compran por ti. Walmart y Sephora dejan entrar a los agentes; Amazon, eBay, United Airlines y Kohl's los limitan o los bloquean. El bloqueo de Amazon a Muse de Meta data de septiembre, y el de Grok, de octubre; no son novedades de estas 48 horas, pero el artículo las sitúa en el fin de semana de rebajas. Un estudio de Visa citado por CNBC, publicado a principios de mes, encontró que los agentes fallaban en torno al 43 % de las pruebas y que, en más de la mitad de esos fallos, compraban un producto que no cumplía lo pedido. Según Bain, las compras agentic siguen siendo residuales: un 0,4 % de las transacciones mundiales de comercio electrónico.

**Por qué importa:** Si alguien en la audiencia está tentado de dejar las compras navideñas en manos de un agente, el recado es claro: hay que revisar el carrito. Y si tienes una tienda, este es el momento de decidir si los agentes pueden mirar, comprar, o ninguna de las dos cosas.

## Seguridad

### CVE-2026-137567: fallo crítico en el servidor RPC de llama.cpp

**Fecha:** el CVE se publicó el 26 de noviembre de 2026; el parche llegó el 24 de noviembre en la build b12658  
**Fuente:** [NVD, CVE-2026-137567](https://nvd.nist.gov/vuln/detail/cve-2026-137567) · [Release b12658](https://github.com/ggml-org/llama.cpp/releases/tag/b12658) · [Resumen de Kyberkit](https://kyberkit.com/en/articles/llama-cpp-rpc-server-cve-2026-137567)

Se ha publicado un fallo crítico (CVSS 9.8) en el servidor RPC de ggml/llama.cpp: una escritura fuera de límites sin autenticación que puede tumbar el proceso o ejecutar código si alguien alcanza el puerto por red. Afecta a las builds b11450 hasta, sin incluir, b12658. El uso habitual de llama.cpp en local, sin el servidor RPC, no está afectado: el RPC se activa en compilación (`GGML_RPC=ON`) y el propio proyecto avisa de no exponerlo a una red abierta. El investigador acreditado es Min P. Hong (SEWORKS). A 26 de noviembre no se había reportado explotación ni un exploit público. La mitigación es actualizar a b12658 o posterior y no exponer el puerto a redes no confiables.

**Por qué importa:** llama.cpp está debajo de muchas instalaciones locales (y de apps que lo empaquetan). Quien reparte un modelo entre varios equipos con RPC debería parchear ya. Quien solo usa `llama-cli` o `llama-server` en su máquina no tiene este agujero, pero conviene comprobar que no hay un `ggml-rpc-server` escuchando.

## Repositorios en tendencia

Cifras del listado diario de GitHub Trending del **28 de noviembre de 2026 a las 08:00, hora de Madrid** (07:00 UTC), según el archivo de [githubtrending.today](https://githubtrending.today/archive/2026-11-28/). Son una foto de ese momento, no un recuento en vivo.

### elementalsouls/Claude-BugHunter

**URL:** [https://github.com/elementalsouls/Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter)  
**Estrellas:** 26.400 en total, +1.608 ese día (n.º 1 del trending)

Paquete de skills para Claude Code orientado a cazar bugs y a trabajo de red team externo: 85 skills, 16 comandos y 681 patrones de informes públicos, agrupados en 24 clases de vulnerabilidad. Está pensado para auditoría y pruebas autorizadas, no como receta de ataque. Es el repo que más estrellas ganó en el día dentro del listado.

**Por qué importa:** Enlace claro entre agentes de código y seguridad ofensiva/defensiva. Interesa a quien audita software o quiere que su agente revise fallos con un método, no a quien busca atajos para atacar sistemas ajenos.

### zhouxiaoka/autoclip

**URL:** [https://github.com/zhouxiaoka/autoclip](https://github.com/zhouxiaoka/autoclip)  
**Estrellas:** 17.700 en total, +718 ese día (n.º 16 del trending)

Herramienta de escritorio de recorte de vídeo con IA, de código abierto y pensada para correr en local, presentada como alternativa a OpusClip sin suscripción. A partir de un enlace, recorta vídeos largos (podcasts, entrevistas, cursos) en piezas cortas, con subtítulos, portada y textos de publicación, adaptadas a Douyin, Xiaohongshu, TikTok, Reels y YouTube Shorts. Incluye servidor MCP.

**Por qué importa:** Es de lo más práctico del listado para creadores de YouTube y Shorts en español: recorte local, sin pagar una suscripción mensual, y con salida lista para publicar.

### alesha-pro/llm.asm

**URL:** [https://github.com/alesha-pro/llm.asm](https://github.com/alesha-pro/llm.asm)  
**Estrellas:** alrededor de 2.400-2.500 el 28 de noviembre (entró en tendencias el 26, con +966 estrellas ese día, según [Upcurrent](https://upcurrent.dev/github-trending/2026-11/))

Proyecto en ensamblador puro que reúne inferencia de Qwen3-0.6B (unos 12 KB), un sistema arrancable bare-metal (unos 22 KB) y un entrenador Mini-GPT hecho desde cero con una TUI en Braille (unos 32 KB). No es un modelo para producción: es una demostración extrema de lo compacto que puede ser un stack de IA.

**Por qué importa:** Es la «repo nueva» más llamativa de la ventana para una audiencia técnica: pedagogía de bajo nivel, no un producto que instales para el día a día.
