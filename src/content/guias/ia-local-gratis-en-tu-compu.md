---
title: "IA local gratis en tu compu: guía paso a paso con Ollama y LM Studio"
description: "Cómo usar un chat de IA en tu propia computadora, gratis y sin que tus datos salgan de casa. Pasos para Mac y Windows y qué modelo elegir según tu RAM."
lang: es
updated: 2026-10-31
destacado: true
patrocinado: false
tags:
  - ia-local
  - privacidad
  - ollama
  - lm-studio
faq:
  - q: "¿Es gratis de verdad?"
    a: "Sí. Ollama y LM Studio se descargan gratis y los modelos abiertos como Gemma 3, Qwen 3 o Llama 3.2 también. Solo pagas la luz de tu computadora."
  - q: "¿Necesito internet?"
    a: "Solo para descargar el programa y el modelo. Después puedes chatear sin conexión."
  - q: "¿Es tan bueno como ChatGPT?"
    a: "Los modelos pequeños son menos capaces que los grandes de la nube. Sirven muy bien para resumir, redactar, traducir o preguntar cosas simples."
  - q: "¿Cuánta RAM necesito?"
    a: "Con 8 GB puedes usar modelos pequeños. LM Studio recomienda 16 GB o más para ir cómodo."
---

**IA local** significa que el modelo de inteligencia artificial funciona dentro de tu computadora, no en un servidor de otra empresa. Lo que escribes no viaja por internet.

## Por qué te puede interesar

- **Privacidad:** tus textos, documentos y preguntas no salen de tu casa.
- **Sin cuentas ni suscripciones:** no hace falta registrarse ni pagar.
- **Funciona sin internet** una vez descargado el modelo.

Contexto: a fines de octubre de 2026, Sam Altman (OpenAI) dijo en un pódcast que tener RAM en tu PC es "bastante terrible" y que esa potencia debería estar en la nube ([reporte de VideoCardz](https://x.com/VideoCardz/status/2116448947828867168)). Es una opinión. Esta guía muestra la otra opción: usar esa RAM para tener tu propia IA privada.

## Palabras que vas a ver

- **Modelo:** el "cerebro" de la IA. Es un archivo grande que descargas una vez.
- **RAM:** la memoria de trabajo de tu computadora. El modelo se carga ahí mientras lo usas.
- **"4b", "8b", "12b":** miles de millones de parámetros. Número más alto = modelo más listo, pero más pesado.

## Qué modelo elegir según tu RAM

Tamaños de descarga tomados de la [biblioteca oficial de Ollama](https://ollama.com/library). Regla simple: el modelo debe pesar bastante menos que tu RAM, porque el sistema y otras apps también la usan.

| Tu RAM | Modelo sugerido | Descarga aprox. |
|---|---|---|
| 8 GB | `llama3.2` (3b) o `qwen3:4b` | 2,0 GB / 2,5 GB |
| 16 GB | `gemma3` (4b) o `qwen3` (8b) | 3,4 GB / 5,2 GB |
| 24–32 GB | `gemma3:12b` o `qwen3:14b` | 8,2 GB / 9,3 GB |
| 32 GB o más | `gemma3:27b` o `qwen3:30b` | 17 GB / 19 GB |

Si va lento, baja un escalón.

## Opción 1: LM Studio (la más fácil, con ventanas)

Requisitos según [LM Studio](https://lmstudio.ai/docs/app/system-requirements): Mac con chip Apple (M1 a M4) y macOS 14 o más nuevo; o Windows x64 con soporte AVX2 (o ARM Snapdragon). Recomiendan 16 GB de RAM; en Windows, también una tarjeta gráfica con 4 GB propios.

1. Entra en [lmstudio.ai](https://lmstudio.ai) y descarga la versión para tu sistema.
2. Instálala como cualquier programa y ábrela.
3. Ve a la sección de búsqueda de modelos, busca por ejemplo **Gemma 3** o **Qwen 3** y elige un tamaño de la tabla.
4. Cuando termine la descarga, abre el chat, elige el modelo arriba y escribe.

## Opción 2: Ollama (ligera, con app y terminal)

Requisitos según la documentación de [Ollama](https://docs.ollama.com/macos): macOS 14 Sonoma o más nuevo, o [Windows 10 22H2 o más nuevo](https://docs.ollama.com/windows).

### Ejemplo en una Mac M4

1. Descarga Ollama desde [ollama.com/download](https://ollama.com/download).
2. Abre el archivo `.dmg` y arrastra Ollama a **Aplicaciones**.
3. Ábrelo. Si te pide permiso para crear el comando `ollama`, acepta.
4. Abre la app **Terminal** y escribe (con 16 GB de RAM):

```bash
ollama run gemma3
```

5. Espera la descarga (unos 3,4 GB). Cuando veas `>>>`, escribe tu pregunta. Para salir escribe `/bye`.

### Ejemplo en Windows

1. Descarga el instalador desde [ollama.com/download](https://ollama.com/download) y ejecútalo.
2. Abre **PowerShell** (búscalo en el menú Inicio).
3. Escribe, si tienes 8 GB de RAM:

```powershell
ollama run llama3.2
```

4. Chatea igual que en Mac. `/bye` para salir.

## Consejos

- Los modelos ocupan disco: revisa que tengas espacio libre.
- Cierra programas pesados (navegador con muchas pestañas, juegos) para que vaya más rápido.
- Descarga programas y modelos solo de las webs oficiales.

## Para quien quiere más (opcional)

- Ollama ofrece una API local en `http://localhost:11434` para conectarlo a otras apps ([docs](https://docs.ollama.com)).
- LM Studio puede funcionar totalmente sin conexión y usar servidores MCP ([docs](https://lmstudio.ai/docs/app)).
- Para borrar un modelo en Ollama: `ollama rm nombre-del-modelo`. Los modelos se guardan en `~/.ollama`.
