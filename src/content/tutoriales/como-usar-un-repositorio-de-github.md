---
title: "Cómo usar un repositorio de GitHub"
description: "Tutorial para novatos: qué es un repositorio, cómo leer el README, marcarlo con una estrella, bajarlo en ZIP o clonarlo, y qué no ejecutar."
lang: es
updated: 2026-10-28
minutes: 15
level: novato
destacado: false
patrocinado: false
tags:
  - github
  - novato
  - repos
---

Un repositorio de GitHub es la carpeta pública de un proyecto, con su historial. Ahí está el código, un texto que explica cómo usarlo y, a menudo, la licencia. No hace falta ser programador para leerlo. Sí hace falta no ejecutar a ciegas lo que descargues.

El [ranking semanal](/ranking) de este sitio enlaza repositorios de IA. Las estrellas salen de la API de GitHub. Una estrella alta no significa que el programa sea seguro ni que te convenga instalarlo.

## Abre el repositorio y lee el README

1. Entra en una URL que acabe en `github.com/alguien/proyecto`.
2. El texto largo de la portada es el README. Léelo antes de pulsar nada verde.
3. Busca tres cosas: para qué sirve, cómo se instala y qué licencia tiene.
4. Si el README está en inglés, no pasa nada. No hace falta traducirlo entero. Localiza “Install”, “Usage” y “License”.

La licencia dice qué puedes hacer con el código. MIT o Apache-2.0 suelen permitir usarlo con pocas condiciones. Si pone “NOASSERTION”, “Proprietary” o no hay licencia, no des por hecho que puedes copiarlo a un producto. Algunas skills de Claude, por ejemplo, [no son de código abierto](/skills/claude-pdf) aunque estén en GitHub.

## Marca la estrella si te interesa volver

La estrella es un marcador de tu cuenta, y también suma en el contador público. Para ponerla necesitas un usuario gratuito en [github.com](https://github.com).

1. Inicia sesión.
2. En la portada del repositorio, pulsa Star.
3. La vuelves a encontrar en tu perfil, en la pestaña de estrellas.

No hace falta poner estrella para leer ni para descargar. El ranking de este sitio no te pide que votes: enseña el número que ya publica GitHub.

## Baja un ZIP si no quieres instalar Git

1. Pulsa el botón verde Code.
2. Elige Download ZIP.
3. Descomprime la carpeta en un sitio que controles, por ejemplo el Escritorio.

Eso es una copia del código en un momento dado. No se actualiza sola. Si el proyecto cambia mañana, hay que volver a bajarlo.

Sirve para leer archivos con calma. No sirve, por sí solo, para ejecutar un servidor. Muchos proyectos piden además Node, Python u otro programa. El README lo dice.

## Clona el proyecto si ya tienes Git

En una terminal, dentro de la carpeta donde quieras guardarlo:

```bash
git clone https://github.com/alguien/proyecto.git
```

Sustituye la URL por la del botón Code, la que acaba en `.git`. Entras en la carpeta nueva con `cd proyecto`.

`git pull` más adelante trae los cambios. No lo lances en medio de un archivo que tú hayas editado si no sabes resolver un conflicto. Para mirar, el ZIP basta.

## No ejecutes código que no entiendas

Un README puede decir `npx`, `pip install` o un script `curl | bash`. Eso descarga y ejecuta programas con tu usuario.

- Lee el comando antes de pegarlo.
- Desconfía de un repositorio recién creado, con pocas explicaciones y un script que pide una clave.
- No pongas tokens, contraseñas ni claves de API dentro del código y luego hagas push.
- Si el proyecto es un servidor MCP, vuelve al tutorial [cómo instalar un servidor MCP](/tutoriales/como-instalar-un-servidor-mcp) y limítalo a una carpeta de prueba.

El contador de estrellas se puede inflar. Trata el número como lo que es: un dato de GitHub en la fecha del ranking, no una reseña.

## Qué hacer si la página no carga o el ZIP falla

- Comprueba que la URL no lleva un espacio ni le falta el nombre del proyecto.
- Si GitHub pide cuenta para ver el código, el repositorio es privado. Sin invitación no hay nada que descargar.
- Si `git clone` dice que no encuentra `git`, instala Git desde [git-scm.com](https://git-scm.com) o quédate con el ZIP.
- Si el README enlaza a una release, a veces el archivo que necesitas está en Releases, no en el ZIP del código fuente. La release puede incluir el programa ya compilado. Lee cuál de las dos quieres.

Para actualizar el ranking de este sitio no hace falta clonar nada a mano. Un workflow de GitHub reescribe `src/data/ranking.json` cada lunes. Si quieres cambiar una ficha, el camino está en el README del proyecto: editar un Markdown y guardar el cambio.
