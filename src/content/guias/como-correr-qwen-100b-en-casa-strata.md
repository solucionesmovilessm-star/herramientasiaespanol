---
title: "Cómo correr un modelo de más de 100B en casa con Strata"
description: "Cómo instalar Strata y correr Qwen3.8-Flash-Next, un modelo de más de 100B, en un PC de casa: qué RAM hace falta, cómo instalar la app o la terminal, y cómo conectarlo a Claude Code o Hermes."
lang: es
updated: 2026-11-22
destacado: false
patrocinado: false
tags:
  - ia-local
  - strata
  - qwen
faq:
  - q: "¿Strata es gratis y de código abierto?"
    a: "Sí. El proyecto se publica con licencia MIT, no pide cuenta y corre en tu ordenador. El repositorio tenía más de 46.800 estrellas el 22 de noviembre de 2026."
  - q: "¿Cuánta RAM necesito para Qwen3.8-Flash-Next?"
    a: "Según la documentación, con 64 GB de RAM caben todos los tamaños ISTA-DASLab (IQ3_S, el más grande, con poco más abierto). Con 48 GB caben Q2_0 e IQ2_XS. Las cifras de modelo son 37,6 GB (Q2_0), 39,2 GB (IQ2_XS), 47,0 GB (IQ3_XXS) y 54,8 GB (IQ3_S) de RAM más VRAM. Deja margen para el sistema."
  - q: "¿Puedo usarlo con Claude Code o Hermes?"
    a: "Sí. Strata ofrece una API compatible con OpenAI y con Anthropic. El comando strata connect muestra las instrucciones de cada herramienta. Hermes, salvo que lo configures, rechaza ventanas de contexto por debajo de 64K; por eso en el ejemplo de esta guía usamos --context 64k."
  - q: "¿Qué pasa si no me cabe el modelo en la RAM?"
    a: "La instalación puede leer los expertos desde el SSD. La documentación lo admite: funciona, pero es mucho más lento. En las pantallas de strata launch, el aviso de si el tamaño encaja, queda justo o no cabe es una advertencia, no un bloqueo. Un --plan te dice qué faltaría, sin descargar ni cambiar nada."
---

## Qué es Strata

[Strata](https://github.com/Niko1221/Strata) es un motor de inferencia de código abierto (licencia **MIT**) para correr en tu propio ordenador modelos grandes que, en principio, piden centenares de gigabytes de memoria gráfica. El modelo que documenta en primer lugar es **Qwen3.8-Flash-Next**. No hace falta cuenta. Hay [app de escritorio](https://github.com/Niko1221/Strata/releases/latest) para Windows, Linux y Mac, y una app de terminal. Cuando el modelo está en marcha, expone una API compatible con **OpenAI** y con **Anthropic**, así que puedes conectarlo a herramientas como Claude Code, Codex CLI, OpenCode o Hermes Agent.

El 22 de noviembre de 2026, el repositorio superaba las **46.800 estrellas** y se había actualizado ese mismo día. Esta guía se basa solo en su [README](https://github.com/Niko1221/Strata/blob/main/README.md) y en la documentación oficial (`docs/MODELS.md`, `docs/INSTALL.md`, `docs/HOW_IT_WORKS.md`, `docs/TERMINAL_LAUNCH.md` y `docs/AI_SETUP.md`).

## Cómo cabe un modelo tan grande en un PC de casa

Qwen3.8-Flash-Next es una **mezcla de expertos** (MoE). Según [How it works](https://github.com/Niko1221/Strata/blob/main/docs/HOW_IT_WORKS.md), el modelo es un equipo de **24.576** especialistas («experts»), y cada palabra que escribe necesita solo **10** de ellos. Por eso no hace falta tenerlos todos en la tarjeta gráfica a la vez.

La documentación reparte el trabajo así:

- **La GPU** hace la parte que hace falta en cada palabra (atención, enrutadores, expertos compartidos, la cabeza de salida, la capa de borrador **MTP**, la caché de conversación y una **caché de expertos** con los que más se usan). Cuanta más VRAM, más expertos caben en la tarjeta: unos **700** más por cada gigabyte extra, y cada experto en la GPU es uno que la CPU no tiene que calcular.
- **La RAM** guarda los 24.576 expertos. Cuando una palabra pide uno que no está en la tarjeta, el **procesador** lo calcula al mismo tiempo que la GPU trabaja con los que sí están en caché.
- **El SSD** guarda una tabla de consulta. `MODELS.md` la describe como el segundo shard, una tabla de consulta de **29 GB** que se queda en el SSD; `HOW_IT_WORKS.md` habla de una tabla n-gram de **28,8 GB**. El modelo solo lee unas pocas filas por palabra, a través de la caché del sistema.

Si la RAM no alcanza para tener los expertos junto al sistema, la instalación puede **leerlos desde el SSD**. La documentación es clara: **funciona, pero es mucho más lento**. Eso no es lo mismo que el uso normal de la tabla de 29 GB, que sí está pensada para vivir en el disco.

Para ir más rápido, el modelo lleva una capa de **borrador MTP**: un ayudante pequeño adivina hasta 3 tokens y el modelo grande los comprueba de una vez. Según Strata, de media salen 2,4 a 3,2 tokens por pasada, y la calidad de la respuesta es la misma, entre 1,6 y 1,8 veces antes. Si desactivas MTP (`--mtp off`), ahorras unos 1 GB de VRAM y el arranque es más lento.

## Qué hardware admite

Según el README y la [guía de instalación](https://github.com/Niko1221/Strata/blob/main/docs/INSTALL.md):

- NVIDIA GeForce **RTX 20, 30, 40 y 50**, en Windows 10/11 o Linux x86-64.
- Varias AMD Radeon (RX 7700/7800/7900, 9060/9070, AI PRO R9700; las RX 6800/6900 son experimentales).
- Intel Arc en **Linux**.
- Apple Silicon (**M1 o posterior**), con macOS 15 o más nuevo. Los Mac Intel no entran en el paquete de Mac.
- AMD Ryzen AI Max / Strix Halo, y NVIDIA DGX Spark en Linux.

Hay que instalar un controlador gráfico que coincida con el paquete: los de **CUDA 13** piden el controlador NVIDIA **580** o posterior; las tarjetas NVIDIA más antiguas usan el motor de CUDA 12. Usa un **SSD** y deja sitio para los archivos auxiliares y la preparación del modelo. Memoria y disco dependen del modelo, la cuantización, el contexto y las funciones que actives: el tamaño de la descarga no es el de la RAM. El comando `--plan` te dice qué falta, sin descargar nada.

## Cómo elegir el tamaño según tu RAM

Strata recomienda empezar por los paquetes **ISTA-DASLab** de Qwen3.8-Flash-Next. Las cifras de [MODELS.md](https://github.com/Niko1221/Strata/blob/main/docs/MODELS.md) son el peso del modelo en **RAM más VRAM**. Son estimaciones: deja margen para el sistema y el resto de programas, y un contexto concreto puede no caber. En un Mac o un PC con memoria unificada, esa memoria se cuenta una sola vez.

| Tamaño | RAM + VRAM del modelo | Velocidad (según la tabla oficial) | Calidad (según la tabla oficial) |
| --- | ---: | --- | --- |
| **Q2_0** | 37,6 GB | la más rápida | buena |
| **IQ2_XS** | 39,2 GB | rápida | mejor |
| **IQ3_XXS** | 47,0 GB | más lenta | muy buena |
| **IQ3_S** | 54,8 GB | la más lenta | la mejor; según Strata, iguala al modelo completo en las pruebas publicadas |

Los expertos de la primera parte del modelo (shard 1) ocupan, respectivamente, 34 GB, 35,5 GB, 43 GB y 50 GB. La documentación dice que la RAM tiene que ser **al menos la de los expertos más unos 10 GB** para el sistema. Con **64 GB de RAM caben todos los tamaños** (IQ3_S, con poco más abierto). Con **48 GB** caben Q2_0 e IQ2_XS. Una tarjeta más grande hace el modelo más rápido, pero **no baja la RAM necesaria**, salvo en el modo de poca RAM.

Otras opciones, si tu caso es distinto: el paquete **Coder** (IQ1_M) ronda los 32 GB de RAM y está pensado para programar; **Unsloth** (4 a 8 bits) pide de 72 a 136 GB si quieres todos los expertos en RAM; **Gyro** ocupa menos memoria y es más lento; y **Qwen3.6-35B-A3B** es un modelo más pequeño (32 a 52 GB).

La descarga de los tres tamaños ISTA-DASLab más pequeños es, según `MODELS.md`, de **66 a 76 GB**. El primer arranque también trae la capa MTP (unos **6 GB**, **1 GB más** si hay imágenes).

## Ejemplo: RTX 3090 de 24 GB y 64 GB de RAM

Una GeForce RTX 3090 está en la lista de series admitidas (RTX 30). Con **64 GB de RAM**, la documentación indica que **IQ3_XXS cabe con holgura**: el modelo pide 47,0 GB entre RAM y VRAM, y los expertos del shard 1 son 43 GB. Es un tamaño que Strata describe como más lento que Q2_0 o IQ2_XS, y de calidad «great».

Antes de descargar nada, pide el plan:

```sh
strata launch --plan --family qwen --model iq3_xxs --context 64k
```

Si el plan encaja, arranca el modelo. `--family` y `--model` admiten cualquier combinación de mayúsculas; `--context 64k` es uno de los tamaños documentados (`32k`, `64k`, `128k`, `256k` o un número de tokens):

```sh
strata launch --family qwen --model iq3_xxs --context 64k
```

Esa pantalla te guía. Si quieres hacerlo sin menús (por ejemplo, en un script), la documentación usa `--yes --no-tui`. El servidor local por defecto es `http://127.0.0.1:8080`. En una tarjeta de 24 GB, las imágenes se leen en la GPU (ocupan unos 1 a 1,4 GB de VRAM). El número de peticiones en paralelo, si no lo cambias, se ajusta a la tarjeta: **3** en una de 24 GB.

## Cómo instalarlo

### App de escritorio

1. Abre la [última versión](https://github.com/Niko1221/Strata/releases/latest).
2. Baja el instalador de tu sistema (hay uno por sistema, no uno por tarjeta). En el README actual se llaman, por ejemplo, `Strata-0.2.19-windows-x64-setup.exe`, `Strata-0.2.19-linux-x86_64.AppImage` y `Strata-0.2.19-macos-arm64.dmg`. En Windows se instala para tu usuario y no hace falta ser administrador. En el Mac, abre el `.dmg` y arrastra Strata a Aplicaciones. En Linux, si FUSE no está disponible, ejecuta el AppImage con `--appimage-extract-and-run`.
3. En Windows y Linux el instalador no trae el motor: la primera vez la app te muestra el de tu tarjeta, su tamaño y un botón de descarga (puedes reanudar o indicar un archivo que ya tengas). En el Mac, el motor Metal va dentro del instalador.
4. Elige un modelo y la carpeta, espera a que baje y empieza a chatear.

### Terminal

En Linux o Mac:

```sh
curl -fsSL --connect-timeout 15 --max-time 120 https://github.com/Niko1221/Strata/releases/latest/download/install.sh -o install.sh && sh install.sh
```

En Windows PowerShell, y después abre una terminal nueva:

```powershell
irm -TimeoutSec 120 https://github.com/Niko1221/Strata/releases/latest/download/install.ps1 | iex
```

Luego:

```sh
strata launch
```

Sigue las pantallas para elegir modelo, contexto, carpeta y quién puede conectar. Comandos útiles, todos documentados:

```sh
strata launch --status
strata launch --stop
```

## Cómo conectarlo a Claude Code, Hermes u otra herramienta

Con el modelo sirviendo, ejecuta:

```sh
strata connect
```

Ese comando lista el ajuste de **OpenCode, Codex CLI, Claude Code, oh-my-pi, pi, Hermes Agent, OpenClaw** y el DeepSeek Harness. Para ver (o escribir) la configuración de una herramienta concreta, la documentación pone este ejemplo:

```sh
strata connect opencode
strata connect opencode --write
```

`--write` pide confirmación y guarda una copia de lo que sustituye. La dirección por defecto es la del `strata launch` en marcha o, si no hay ninguno, `http://127.0.0.1:8080`.

Hay límites que Strata imprime en claro: Claude Code necesita la variable `CLAUDE_CODE_MAX_CONTEXT_TOKENS`; Hermes **rechaza ventanas de menos de 64K** salvo que lo configures como indica esa plantilla. Por eso el ejemplo de esta guía arranca con `--context 64k`.

## Qué no dice esta guía

No hemos medido velocidades en una 3090 ni en una 5070. La documentación incluye tablas antiguas (por ejemplo, en una RTX 5070 de 12 GB con 64 GB de RAM, con un motor anterior) y avisa de que no se han vuelto a medir por completo en la versión actual. Las cifras que circulan en redes, o la idea de que otro proyecto «copió» a Strata, no están en estos documentos y no las damos por buenas aquí.

Si algo no arranca, mira primero el `--plan`, luego [la guía de problemas](https://github.com/Niko1221/Strata/blob/main/docs/TROUBLESHOOTING.md) del propio proyecto.
