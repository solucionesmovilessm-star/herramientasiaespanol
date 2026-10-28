---
title: "Cómo añadir skills a Claude"
description: "Paso a paso para novatos: qué es una skill, cómo probar las de documentos y cómo crear o instalar una carpeta SKILL.md en Claude y en Claude Code."
lang: es
updated: 2026-10-28
minutes: 20
level: novato
destacado: true
patrocinado: false
tags:
  - claude
  - skills
  - novato
---

Una skill es una carpeta con un archivo `SKILL.md`. Dentro van un nombre, una descripción y las instrucciones que Claude debe seguir cuando la tarea encaja. No sustituye al chat: lo especializa.

Anthropic publicó el formato como estándar abierto. La ficha del estándar es [Agent Skills](/skills/estandar-agent-skills). Las carpetas concretas que ellos publican están en [Skills para Claude](/skills/claude).

Necesitas una cuenta en [claude.ai](https://claude.ai) o [Claude Code](/agentes/claude-code) instalado. Para subir una skill tuya a la web, la documentación de Anthropic pide un plan de pago (Pro, Max, Team o Enterprise) y la creación de archivos activada. Las skills de documentos integradas se usan al crear un archivo, sin subir nada.

## Prueba una skill que ya viene

1. Entra en claude.ai con tu cuenta.
2. Pide un archivo concreto, por ejemplo: “Crea un documento de una página con un orden del día de reunión”.
3. Si tu plan puede crear archivos, Claude usa las skills de documentos (Word, PDF, hojas o presentaciones) sin que instales la carpeta.

Si no aparece ningún archivo, el plan o la función de crear archivos no está activa. La ayuda oficial está en el artículo [crear y editar archivos con Claude](https://support.claude.com/en/articles/12111783-create-and-edit-files-with-claude). No hace falta pagar para leer esta página.

## Crea una skill mínima en un bloc de notas

Haz una carpeta llamada `resumen-correo`. Dentro, un único archivo `SKILL.md` con este contenido:

```markdown
---
name: resumen-correo
description: Resume un correo en español en cinco líneas y lista las preguntas pendientes. Úsala cuando el usuario pegue un email o pida resumir un correo.
---

# Resumen de correo

1. Escribe el resumen en español, en cinco líneas como máximo.
2. Después, lista las preguntas que el correo deja abiertas.
3. No inventes datos que no estén en el texto.
```

El `name` va en minúsculas y con guiones, como el nombre de la carpeta. No uses las palabras `anthropic` ni `claude` en el nombre: la documentación las reserva. La `description` tiene que decir qué hace y cuándo usarla. Si es vaga, Claude no sabrá activarla.

## Súbela a claude.ai

La documentación de Anthropic describe así el alta de una skill propia en la web:

1. Comprime la carpeta. En el Mac, clic derecho y Comprimir. En Windows, clic derecho, Enviar a, Carpeta comprimida. Si la subida dice que no encuentra `SKILL.md`, repite el zip con el archivo en la raíz, no dentro de otra carpeta.
2. En claude.ai abre Settings y luego Features. En la interfaz en español puede decir Ajustes y Funciones. Si no ves el menú, la ayuda oficial enseña la captura actual: [crear skills personalizadas](https://support.claude.com/en/articles/12512198-creating-custom-skills).
3. Sube el zip.
4. En un chat nuevo, pega un correo de prueba (inventado, no uno real de un cliente) y pide que lo resuma.

Las skills de la web son de tu usuario. No se copian solas a la API ni a Claude Code. Si las quieres en otro sitio, hay que añadirlas allí también.

## Instala ejemplos en Claude Code

Claude Code lee carpetas, no zips. Puedes copiar `resumen-correo` a una de estas rutas:

- `~/.claude/skills/resumen-correo/` para ti, en cualquier proyecto.
- `.claude/skills/resumen-correo/` dentro de un proyecto, si quieres compartirla con ese repositorio.

Para los ejemplos oficiales, el README de [anthropics/skills](https://github.com/anthropics/skills) publica estos comandos dentro de Claude Code:

```text
/plugin marketplace add anthropics/skills
/plugin install example-skills@anthropic-agent-skills
/plugin install document-skills@anthropic-agent-skills
```

Si un comando responde que no existe, abre el README de ese repositorio: los nombres de los paquetes pueden cambiar. La guía de skills de Claude Code está en [code.claude.com/docs/en/skills](https://code.claude.com/docs/en/skills).

Las skills de documentos integradas en la web no son las mismas que las de Claude Code. El README lo dice. Instala el paquete si las quieres en la terminal.

## Lee la skill antes de activarla

Una skill puede incluir scripts. Claude puede ejecutarlos. Anthropic pide tratar una skill de un desconocido como un programa: léela entera, `SKILL.md` y el resto de archivos, antes de usarla en un proyecto con datos reales.

Empieza por las carpetas oficiales fichadas aquí, por ejemplo [PDF](/skills/claude-pdf) o [Skill Creator](/skills/claude-skill-creator). Mira la licencia de cada carpeta. Varias de documentos no son de código abierto.

## Qué hacer si no se activa

- La descripción no dice cuándo usarla. Añade la frase “Úsala cuando…”.
- El nombre lleva mayúsculas, espacios o la palabra `claude`. Cámbialo y renombra la carpeta para que coincidan.
- En la web, el plan no permite skills propias o la función de archivos está apagada. Compruébalo en los ajustes, no en un foro.
- En Claude Code, la carpeta no está en una ruta que el programa lea, o no reiniciaste la sesión después de copiarla.
- El zip incluye la carpeta dos veces o el archivo se llama `SKILL.md.txt`. El nombre exacto es `SKILL.md`.

Cuando esto funcione, el mismo formato sirve en Cursor. La ficha [Skills en Cursor](/skills/cursor-skills) lista las carpetas equivalentes.
