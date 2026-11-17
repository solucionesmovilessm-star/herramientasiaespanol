---
title: optimizerDuck
description: "Utilidad gratuita y de código abierto para optimizar Windows, centrada en rendimiento, privacidad y simplicidad. No es una herramienta de IA."
url: https://optimizerduck.vercel.app/
category: local
pricing: gratis
destacado: false
patrocinado: false
lang: es
updated: 2026-11-17
operatingSystem: Windows 10 o superior (x64 y ARM64)
tags:
  - windows
  - privacidad
  - codigo-abierto
---

optimizerDuck es una utilidad gratuita y de código abierto para optimizar Windows. La mantiene [itsfatduck](https://github.com/itsfatduck). El README del proyecto la describe centrada en rendimiento, privacidad y simplicidad.

No es una herramienta de IA. No conversa, no genera texto y no lleva un modelo dentro. Es un programa de escritorio para cambiar ajustes de Windows.

<div class="callout warn">
<p><strong>Crea un punto de restauración de Windows antes de aplicar cambios.</strong> optimizerDuck modifica la configuración del sistema y el Registro. El README lo pide al empezar y lo repite en el aviso legal. La aplicación también sugiere crear ese punto antes del primer ajuste.</p>
</div>

## Qué puedes hacer

El README explica que Windows, de fábrica, deja servicios en segundo plano, telemetría, aplicaciones preinstaladas y tareas programadas que siguen usando CPU, memoria, disco y red aunque no las uses. optimizerDuck reúne en un solo sitio ajustes que, si no, habría que buscar en el Registro, en la directiva de grupo o en PowerShell.

- Desactivar servicios que no necesitas y recortar telemetría. En privacidad, el README nombra la telemetría de Windows, los informes de error, el identificador de publicidad, el seguimiento de ubicación, Cortana, Copilot y las sugerencias de contenido.
- Quitar componentes que no uses, personalizar el sistema y gestionar funciones habituales de Windows.
- Ver qué está en marcha, quitar lo que sobre y deshacer un cambio. Trae un panel del sistema, un gestor de inicio, tareas programadas, limpieza de disco y una lista de aplicaciones que se pueden quitar, cada una con una etiqueta de riesgo.

El README cuenta 42 ajustes en siete grupos: rendimiento, privacidad, GPU, energía, programas preinstalados y servicios, experiencia de uso, y desactivar Recall y Click To Do en Windows 11. También cuenta 44 opciones de personalización. Cada ajuste lleva una descripción y una valoración de riesgo. No se aplica nada hasta que tú lo eliges.

La descarga oficial está en los [Releases de GitHub](https://github.com/itsfatduck/optimizerDuck/releases/latest). A 17 de noviembre de 2026 la última versión publicada es la [v2.29.0](https://github.com/itsfatduck/optimizerDuck/releases/tag/v2.29.0), con dos archivos: `optimizerDuck-Windows-x64-2.29.0.exe` y `optimizerDuck-Windows-arm64-2.29.0.exe`. Elige el que coincida con tu PC. El README dice que se ejecuta el `.exe` directamente y que no hace falta instalarlo. Sirve en Windows 10 o superior, en x64 y ARM64. El FAQ concreta Windows 10 y Windows 11. Hay que abrirlo como administrador, porque toca la configuración del sistema y el Registro.

## Precio

Es gratis y de código abierto, con licencia GPL v3. El código está en [itsfatduck/optimizerDuck](https://github.com/itsfatduck/optimizerDuck). La web que enlaza el README es [optimizerduck.vercel.app](https://optimizerduck.vercel.app/).

## Ten en cuenta

El aviso de arriba no es un formalismo. El programa escribe en la configuración de Windows y en el Registro. Si un cambio deja el sistema inestable, el punto de restauración es lo que el propio proyecto recomienda tener antes. El README también dice que cada cambio guarda un archivo local para poder revertirlo. Eso no sustituye al punto de restauración.

Está hecho con WPF sobre .NET 10. El README dice que la aplicación no recoge telemetría. También advierte que optimizar Windows no sustituye a mejorar el hardware y que no duplica el rendimiento en los juegos.

Windows puede mostrar un aviso de SmartScreen al abrir el `.exe`, porque no está firmado. El README explica que eso pasa con ejecutables sin firmar descargados de internet y que no significa, por sí solo, que el archivo sea inseguro. Si prefieres no fiarte del aviso, puedes compilar el programa desde el código.

A 17 de noviembre de 2026, hacia las 14:30 (hora de Madrid), el repositorio tenía 12.252 estrellas según la API de GitHub.
