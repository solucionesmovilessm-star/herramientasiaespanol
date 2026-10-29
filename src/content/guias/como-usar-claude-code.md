---
title: "Cómo usar Claude Code paso a paso: guía para principiantes (2026)"
description: "Qué es Claude Code, qué necesitas para usarlo, cómo instalarlo en Windows, Mac o Linux y cuáles son tus primeras órdenes, explicado desde cero y con las fuentes oficiales."
lang: es
updated: 2026-10-29
destacado: false
patrocinado: false
tags:
  - claude-code
  - programacion
  - empezar
faq:
  - q: "¿Claude Code es gratis?"
    a: "No con el plan gratuito de Claude. Está incluido a partir del plan Pro (17 $ al mes con pago anual o 20 $ con pago mensual, sin impuestos). También se puede usar pagando por uso con una cuenta de Claude Console."
  - q: "¿Necesito saber usar la terminal?"
    a: "Ayuda, pero no es obligatorio: Anthropic tiene una guía para abrir la terminal y también una app de escritorio de Claude Code para macOS, Windows y Linux."
  - q: "¿Puedo hablarle en español?"
    a: "Sí. Los ejemplos de la documentación oficial están en inglés, pero puedes escribirle en español."
---
Claude Code es el asistente de programación de Anthropic. Le hablas en lenguaje normal («explícame este proyecto», «arregla este error») y él lee los archivos de tu proyecto, propone cambios y los hace cuando le das permiso. Funciona sobre todo en la terminal, pero también en la web (claude.ai/code), como app de escritorio, dentro de VS Code y JetBrains, en Slack y en GitHub Actions o GitLab.

En esta guía verás qué necesitas, cómo instalarlo y qué pedirle las primeras veces. Todo sale de la documentación oficial de Anthropic, consultada el 29/10/2026.

## ¿Es gratis Claude Code?

No en el plan gratuito. Según la página oficial de precios, Claude Code está incluido a partir del plan **Pro**, que cuesta **17 $ al mes con pago anual (200 $ por adelantado) o 20 $ al mes con pago mensual** (precios en dólares, sin impuestos). El plan **Max** empieza en 100 $ al mes y da entre 5 y 20 veces más uso que Pro.

Otras formas de usarlo, según la guía oficial:

- Una cuenta de **Claude Console** (la plataforma para desarrolladores), pagando por uso con créditos de API prepagados.
- A través de un proveedor de nube compatible (Amazon Bedrock, Google Cloud Agent Platform o Microsoft Foundry), pensado para empresas.
- Los planes Team y Enterprise.

## Qué necesitas antes de empezar

- Un ordenador con **macOS 13 o posterior, Windows 10 (versión 1809) o posterior, o Linux** (Ubuntu 20.04+, Debian 10+ o Alpine 3.19+).
- Al menos **4 GB de RAM** y conexión a internet.
- Estar en un **país admitido** por Anthropic.
- Una carpeta con un proyecto de código (aunque sea pequeño) para practicar.
- Si nunca has usado la terminal, Anthropic tiene una guía para abrirla: https://code.claude.com/docs/en/terminal-guide

¿Prefieres no usar la terminal? Existe la **app de escritorio de Claude Code** para macOS, Windows y Linux (https://code.claude.com/docs/en/desktop-quickstart).

## Paso 1: instala Claude Code

Abre la terminal y pega el comando de tu sistema. Es el método recomendado por Anthropic y se actualiza solo.

**macOS, Linux o WSL:**

```bash
curl -fsSL https://claude.ai/install.sh | bash
```

**Windows PowerShell** (la línea empieza por `PS C:\`):

```powershell
irm https://claude.ai/install.ps1 | iex
```

**Windows CMD** (la línea empieza por `C:\` sin `PS`):

```batch
curl -fsSL https://claude.ai/install.cmd -o install.cmd && install.cmd && del install.cmd
```

El instalador no muestra progreso mientras descarga, así que ten paciencia. Cuando termine, **abre una terminal nueva** y comprueba que funciona:

```bash
claude --version
```

Si aparece un número de versión seguido de «(Claude Code)», ya está. Si la terminal dice que no encuentra `claude`, hay que añadirlo al PATH: la guía oficial lo explica en https://code.claude.com/docs/en/troubleshoot-install

En Windows, Anthropic recomienda instalar también **Git para Windows** para que Claude Code pueda usar la herramienta Bash; si no lo tienes, usará PowerShell.

Otras opciones: `brew install --cask claude-code` en Mac con Homebrew, o `winget install Anthropic.ClaudeCode` en Windows. Ojo: estas dos **no se actualizan solas**.

## Paso 2: abre tu primera sesión e inicia sesión

Entra en la carpeta de tu proyecto y arranca Claude Code:

```bash
cd ruta/a/tu/proyecto
claude
```

La primera vez te pedirá iniciar sesión. Sigue las instrucciones en el navegador con tu cuenta de Claude (Pro, Max, Team o Enterprise) o de Claude Console.

## Paso 3: hazle tu primera pregunta

No hace falta pegarle archivos: Claude Code los lee cuando los necesita. Prueba con:

- `what does this project do?` (¿qué hace este proyecto?)
- `explain the folder structure` (explícame la estructura de carpetas)
- `where is the main entry point?` (¿dónde empieza el programa?)

Puedes escribirle en español; los ejemplos de la documentación oficial están en inglés.

## Paso 4: tu primer cambio de código

Pídele algo pequeño, por ejemplo «añade una función hola mundo al archivo principal». Claude Code buscará el archivo, te enseñará el cambio y, si te pide permiso, eliges **Yes** para aprobarlo.

Con **Mayús + Tab** cambias el modo de permisos de la sesión, es decir, qué puede hacer sin preguntarte. Si empiezas, deja que te pregunte antes de cada cambio.

## Paso 5: usa Git sin saberte los comandos

Claude Code entiende peticiones como:

- «¿Qué archivos he cambiado?»
- «Haz commit de mis cambios con un mensaje descriptivo»
- «Crea una rama nueva llamada feature/prueba»
- «Enséñame los últimos 5 commits»

## Paso 6: arregla errores y pide mejoras

Describe lo que quieres como se lo contarías a un compañero: «hay un fallo y los usuarios pueden enviar el formulario vacío, arréglalo», «escribe tests para estas funciones» o «actualiza el README con instrucciones de instalación».

## Comandos básicos que te conviene saber

| Comando | Para qué sirve |
|---|---|
| `claude` | Abre el modo interactivo |
| `claude "tarea"` | Abre el modo interactivo con una primera orden |
| `claude -p "pregunta"` | Hace una consulta suelta y se cierra |
| `claude -c` | Continúa la última conversación de esa carpeta |
| `claude -r` | Retoma una conversación anterior |
| `/help` | Muestra los comandos disponibles (dentro de la sesión) |
| `/clear` | Borra el historial de la conversación |
| `/exit` o Ctrl+D dos veces | Sale de Claude Code |

## Consejos para principiantes

- **Empieza por proyectos pequeños** y revisa cada cambio antes de aprobarlo.
- **Usa Git** desde el principio: si algo sale mal, puedes volver atrás.
- **Sé concreto:** «añade validación al formulario de registro» funciona mejor que «mejora la web».
- Cuando domines lo básico, aprende a añadir **skills** (instrucciones reutilizables) en nuestro tutorial [cómo añadir skills a Claude](/tutoriales/como-anadir-skills-a-claude).

## Fuentes

- Guía rápida oficial de Claude Code: https://code.claude.com/docs/en/quickstart
- Requisitos e instalación avanzada: https://code.claude.com/docs/en/setup
- Planes y precios de Claude: https://claude.com/pricing

*Precios y requisitos consultados el 29/10/2026. Pueden cambiar; comprueba siempre la página oficial.*
