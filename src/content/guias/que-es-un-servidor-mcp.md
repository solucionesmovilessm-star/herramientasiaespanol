---
title: "Qué es un servidor MCP y para qué sirve"
description: "Qué es un servidor MCP, en qué se diferencia de una página web o de un chat, y para qué sirve conectarlo a Claude, Cursor u otro cliente."
lang: es
updated: 2026-10-28
destacado: true
patrocinado: false
tags:
  - mcp
  - protocolo
faq:
  - q: "¿Un servidor MCP es una página web?"
    a: "No. Es un programa que habla el protocolo MCP con un cliente, por ejemplo Claude o Cursor. Puede ejecutarse en tu ordenador o estar alojado por otra empresa. No hace falta que tenga una web pública."
  - q: "¿Para qué sirve un servidor MCP?"
    a: "Para que el asistente use una herramienta concreta: leer una carpeta que tú autorizas, consultar GitHub con tu cuenta o buscar en la web. Sin ese conector, el chat solo ve lo que pegas en la conversación."
  - q: "¿MCP y una skill son lo mismo?"
    a: "No. Una skill es una carpeta de instrucciones. Un servidor MCP es un programa que ofrece herramientas. Se pueden usar los dos a la vez. Hay incluso una skill de ejemplo, MCP Builder, para escribir un servidor."
  - q: "¿Es seguro conectar uno?"
    a: "Depende de qué herramientas exponga y de qué permisos le des. Empieza por una carpeta de prueba. Los servidores de referencia del protocolo son ejemplos para aprender, no productos cerrados."
---

Un servidor MCP es un programa que conecta un asistente de IA con algo que está fuera del chat: una carpeta, un repositorio, un buscador o una herramienta que tú programas. MCP son las siglas en inglés de Model Context Protocol, un estándar abierto para hacer esa conexión siempre de la misma manera.

La documentación oficial lo compara con un puerto USB-C: el cliente (Claude, Cursor, VS Code y otros) habla un idioma común y el servidor traduce ese idioma a un sistema concreto. La explicación está en [modelcontextprotocol.io](https://modelcontextprotocol.io).

## Qué problema resuelve

Un chat solo conoce el texto de la conversación y los archivos que adjuntas. Si quieres que mire una carpeta de tu escritorio, que abra una issue en GitHub o que busque en la web con una API, alguien tiene que darle esa herramienta. Antes cada aplicación inventaba su enchufe. MCP propone uno compartido: escribes el servidor una vez y lo conectas a varios clientes.

## Qué no es

No es el chat. No es el modelo. No es, por sí solo, una página que visitas. Y no es una [skill](/skills/estandar-agent-skills). La skill es un archivo de instrucciones. El servidor es un programa que ofrece herramientas. Claude puede usar los dos: las instrucciones dicen cuándo actuar y el servidor hace la acción.

Tampoco es, automáticamente, un servicio en internet. Muchos servidores de ejemplo se lanzan en tu ordenador con `npx` o con `uvx` y se hablan con el cliente por la entrada estándar, sin abrir un puerto público.

## Qué puede hacer uno

Estos son ejemplos reales que tienes fichados en el directorio:

- [Archivos](/mcp/filesystem): leer y modificar solo las carpetas que autorizas.
- [GitHub](/mcp/github): el servidor oficial de GitHub, con la cuenta que tú conectes.
- [Playwright](/mcp/playwright): un navegador automatizado.
- [Brave Search](/mcp/brave-search): búsquedas con la API de Brave.
- [Registro oficial](/mcp/registro): el sitio donde se publican más servidores. El registro no es un servidor.

El grupo del protocolo mantiene además un puñado de [servidores de referencia](https://github.com/modelcontextprotocol/servers). Ellos mismos dicen que son ejemplos para aprender el SDK, no productos listos para producción.

## Cómo se conecta

El cliente guarda un JSON con el nombre del servidor, el comando que lo arranca y los argumentos. En Claude Desktop ese archivo se abre desde Ajustes, pestaña Developer, botón Edit Config. El tutorial [cómo instalar un servidor MCP](/tutoriales/como-instalar-un-servidor-mcp) recorre el caso del servidor de archivos con una sola carpeta de prueba.

En [Cursor](https://cursor.com/docs/mcp) la configuración está en los ajustes de MCP. El bloque JSON se parece; el sitio donde se pega, no. Sigue la documentación del cliente que uses.

## Qué permiso estás dando

El servidor de archivos corre con tu usuario. Si le das la carpeta Documentos, puede leer y cambiar lo que tú puedes leer y cambiar ahí. El de GitHub hereda el token que le pongas. Empieza por un repositorio de prueba y por el permiso más pequeño.

Una página web que el servidor descarga también puede contener instrucciones. No conectes un servidor de navegación a una sesión tuya ya iniciada en el banco o en el correo.

Cuando el nombre deje de sonar raro, el siguiente paso es el tutorial. Si lo que quieres es escribir un servidor, la skill [MCP Builder](/skills/claude-mcp-builder) es el ejemplo de Anthropic para hacerlo en Python o en TypeScript.
