---
title: Agent-Reach
description: "CLI gratis y con licencia MIT para que un agente de IA lea GitHub, YouTube, la web y otras redes sin pagar APIs. El instalador puede modificar el sistema y guardar cookies del navegador."
url: https://github.com/Panniantong/Agent-Reach
category: codigo
pricing: gratis
destacado: false
patrocinado: false
lang: es
updated: 2026-11-17
tags:
  - agentes
  - cli
  - codigo-abierto
---

Agent-Reach es un programa de línea de comandos. Da a agentes de IA (Claude Code, Codex, Cursor, OpenClaw…) acceso de lectura a GitHub, YouTube (información, búsqueda y subtítulos), la web, Reddit, LinkedIn (empleos), Bilibili, XiaoHongShu, V2EX y Xueqiu. En modo experimental, también a X/Twitter, Facebook e Instagram. No hace falta pagar APIs.

Solo lee: no publica, no comenta y no da likes. Algunos canales reutilizan el inicio de sesión del navegador.

<div class="callout warn">
<p><strong>Advertencias.</strong> Hay una <a href="https://github.com/Panniantong/agent-reach/issues/378">auditoría</a> que señala que el instalador modifica el sistema: añade repositorios de paquetes, ejecuta scripts de NodeSource e instala paquetes globales. Eso no ocurre si se usa <code>install --safe</code>. También <a href="https://github.com/Panniantong/Agent-Reach/issues/446">puede guardar las cookies completas del navegador</a>.</p>
<p><strong>Recomendación:</strong> usa <code>install --safe</code>, en una máquina o un entorno aparte, con cuentas secundarias. El acceso automatizado con cookies va contra los términos de X, LinkedIn y otros servicios, y puede provocar bloqueos de cuenta.</p>
</div>

## Qué puedes hacer

- Dar a un agente acceso de lectura a GitHub, YouTube (información, búsqueda y subtítulos), la web, Reddit, LinkedIn (empleos), Bilibili, XiaoHongShu, V2EX y Xueqiu.
- En modo experimental, también a X/Twitter, Facebook e Instagram.
- Consultar sin pagar APIs. El programa solo lee: no publica, no comenta y no da likes.

## Precio

Es gratis y de código abierto, con licencia MIT. El código está en [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach).

## Ten en cuenta

El 17 de noviembre de 2026 el repositorio tenía unas 112.000 estrellas en GitHub.

Las advertencias del recuadro no son un detalle opcional:

- El instalador modifica el sistema (añade repositorios de paquetes, ejecuta scripts de NodeSource e instala paquetes globales) salvo con `install --safe`. Lo señala esta [auditoría](https://github.com/Panniantong/agent-reach/issues/378).
- Puede guardar las cookies completas del navegador. Lo señala [este aviso](https://github.com/Panniantong/Agent-Reach/issues/446).
- Usa `install --safe`, en una máquina o un entorno aparte, y con cuentas secundarias. El acceso automatizado con cookies va contra los términos de X, LinkedIn y otros servicios, y puede provocar bloqueos de cuenta.

Algunos canales reutilizan el inicio de sesión del navegador. Por eso importa qué cuenta está abierta en ese navegador.
