---
title: "Cómo instalar un servidor MCP"
description: "Tutorial para novatos: instala el servidor MCP de archivos en Claude Desktop, con una sola carpeta de prueba, y comprueba que el asistente la ve."
lang: es
updated: 2026-10-28
minutes: 25
level: novato
destacado: true
patrocinado: false
tags:
  - mcp
  - claude
  - novato
---

Un servidor MCP es el programa que conecta el asistente con una herramienta. Si la frase todavía es abstracta, lee antes [qué es un servidor MCP](/guias/que-es-un-servidor-mcp). Este tutorial instala el de archivos, el ejemplo que documenta el propio protocolo, limitado a una carpeta que vas a crear para la prueba.

Vas a usar Claude Desktop porque su documentación enseña los clics. En Cursor el bloque JSON se parece; el lugar donde se pega está en [la documentación de MCP de Cursor](https://cursor.com/docs/mcp).

Necesitas Claude Desktop instalado y Node.js LTS desde [nodejs.org](https://nodejs.org). En una terminal, `node --version` tiene que imprimir un número. Si no, el comando `npx` del servidor no existe.

## Crea una carpeta que no te importe

No des acceso a Documentos, al Escritorio entero ni a Descargas. Crea una carpeta nueva y vacía, por ejemplo `prueba-mcp` dentro de tu carpeta de usuario.

En macOS la ruta se parece a `/Users/tu-usuario/prueba-mcp`. En Windows, a `C:\Users\tu-usuario\prueba-mcp`. Sustituye `tu-usuario` por el nombre real. Tiene que ser una ruta absoluta: no vale `./prueba-mcp`.

Mete dentro un archivo de texto `nota.txt` con una frase que reconozcas, para comprobar luego que el asistente lee esa carpeta y no otra.

## Abre la configuración de Claude Desktop

1. Abre Claude Desktop.
2. En la barra de menú del sistema (en el Mac, el menú Claude de arriba, no el engranaje de dentro de la ventana) entra en Settings.
3. Abre la pestaña Developer.
4. Pulsa Edit Config.

Eso abre `claude_desktop_config.json`. La documentación oficial sitúa el archivo en:

- macOS: `~/Library/Application Support/Claude/claude_desktop_config.json`
- Windows: `%APPDATA%\Claude\claude_desktop_config.json`

En Linux, usa el botón Edit Config para que la app abra el archivo. No inventes la ruta. La guía de la que salen estos pasos es [Connect to local MCP servers](https://modelcontextprotocol.io/docs/develop/connect-local-servers).

## Pega el servidor, sin borrar otros

Si el archivo está vacío o solo tiene `{}`, puedes dejarlo así, cambiando la ruta:

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "/Users/tu-usuario/prueba-mcp"
      ]
    }
  }
}
```

En Windows la ruta lleva barras dobles invertidas, por ejemplo `"C:\\Users\\tu-usuario\\prueba-mcp"`.

Si el archivo ya tiene otros servidores dentro de `mcpServers`, no sustituyas el archivo entero. Añade solo la clave `"filesystem"` al lado de las que ya existan. Una coma mal puesta rompe el JSON. Si no estás seguro, pide a alguien que lo lea o usa un validador de JSON antes de guardar.

`-y` le dice a `npx` que descargue el paquete sin preguntar. `@modelcontextprotocol/server-filesystem` es el nombre del ejemplo oficial. La última línea es la única carpeta autorizada. Puedes añadir otra ruta en el array el día que lo necesites. Hoy, una.

## Reinicia y pregunta por la nota

Cierra Claude Desktop del todo y vuelve a abrirlo. Un servidor nuevo no aparece si solo cierras la ventana.

En el cuadro de texto, la documentación actual habla de un indicador de conectores. Entra en los conectores y comprueba si `filesystem` aparece. Los nombres del botón cambian con la versión: si no ves el mismo rótulo, busca “connectors” o “developer” en la ayuda de tu versión.

Luego escribe: “Lee el archivo nota.txt de la carpeta que tienes autorizada y dime la frase”. Acepta la acción solo si la ruta que te enseña es `prueba-mcp`. Si propone otra carpeta, recházala.

## Qué hacer si no aparece

- Reinicia Claude otra vez. Cerrarlo a medias no recarga el JSON.
- La ruta no existe o es relativa. Tiene que ser absoluta y la carpeta tiene que estar creada.
- El JSON tiene una coma de más o le falta una llave. Un editor que coloree el archivo lo delata.
- `node` no está instalado o la terminal no lo encuentra. Prueba a mano: `npx -y @modelcontextprotocol/server-filesystem` seguido de tu ruta. Si eso falla, el fallo es Node, no Claude.
- En el Mac, los registros están en `~/Library/Logs/Claude`. El archivo `mcp.log` y los `mcp-server-*.log` cuentan por qué no arrancó. En Windows, la documentación los sitúa en `%APPDATA%\Claude\logs`.

El servidor corre con tu usuario. Puede modificar lo que haya en la carpeta autorizada. Por eso la carpeta de prueba está vacía salvo por `nota.txt`.

Cuando esto funcione, el siguiente servidor no se elige al azar. Mira el [registro oficial](/mcp/registro) y la ficha del que te interese, por ejemplo [GitHub](/mcp/github) o [Playwright](/mcp/playwright). Cada uno pide permisos distintos. El de archivos ya te enseñó el mecanismo.
