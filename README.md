# Herramientas IA en español

Sitio de Gonzalo (canales **TodoSobreTecno** y **Soluciones para todos**). Es un directorio en español de herramientas de IA, agentes, skills, servidores MCP, guías y tutoriales para novatos.

- Dirección principal, la que ve Google: `https://herramientasiaespanol.com`
- Dirección de marca: `hubtecnoia.com` (tiene que redirigir a la principal)
- Se publica gratis en Cloudflare Pages
- El español vive en la raíz (`/herramientas`, `/guias`…). El inglés, cuando exista, irá en `/en/` sin mover lo que ya está publicado

Casi todo el contenido es gratis. Una ficha de pago lleva la etiqueta **Patrocinado**. Un enlace de afiliado se marca como tal. El plan **Pro** (unos 5 USD al mes) está explicado pero **todavía no se puede pagar**.

## Qué tienes que tocar para actualizar el contenido

No hace falta programar. Cada ficha es un archivo de texto. Guardas el cambio en GitHub y Cloudflare vuelve a publicar el sitio solo.

| Quiero… | Archivo |
| --- | --- |
| Añadir o corregir una herramienta | `src/content/herramientas/` (copia `plantilla-no-publicar.md`) |
| Añadir un agente | `src/content/agentes/` |
| Añadir una skill, también de Claude | `src/content/skills/` |
| Añadir un servidor MCP | `src/content/mcp/` |
| Escribir una guía | `src/content/guias/` |
| Escribir un tutorial para novatos | `src/content/tutoriales/` |
| Activar el anuncio de la newsletter o de los shorts | `src/data/patrocinios.json` |
| Cambiar el texto o el precio orientativo de Pro | `src/data/pro.json` |
| Cambiar las opciones de la página Anúnciate | `src/data/anuncios.json` |
| El ranking de GitHub | No lo edites a mano. Lo reescribe la acción automática en `src/data/ranking.json` |

`plantilla-no-publicar.md` no sale en la web mientras tenga `draft: true`.

## Añadir una herramienta desde la web de GitHub

1. Entra en el repositorio en GitHub.
2. Abre la carpeta `src`, luego `content`, luego `herramientas`.
3. Abre `plantilla-no-publicar.md`.
4. Pulsa el lápiz (**Edit**).
5. Selecciona todo, cópialo y cancela. No guardes cambios en la plantilla.
6. Vuelve a la carpeta `herramientas`. Pulsa **Add file** → **Create new file**.
7. Arriba, donde pide el nombre, escribe por ejemplo `mi-herramienta.md` (minúsculas, sin espacios, sin acentos).
8. Pega el texto y cámbialo. Lo mínimo:

```yaml
title: Nombre visible
description: "Una frase de unas dos líneas. Sale en Google y en la ficha."
url: https://web-oficial.com
category: chat
pricing: freemium
destacado: false
patrocinado: false
draft: false
lang: es
updated: 2026-10-28
tags:
  - chat
```

9. Debajo de la línea `---` escribe la explicación en español. Sin cifras de usuarios ni de dinero que no hayas leído en la web oficial.
10. Abajo, en **Commit changes**, escribe “Añade la ficha de …” y pulsa el botón verde para guardar en `main`.

`category` solo puede ser una de estas: `chat`, `imagen`, `video`, `codigo`, `escritura`, `productividad`, `audio`, `investigacion`, `local`.

`pricing` solo puede ser `gratis`, `freemium` (se puede probar sin pagar) o `de-pago`.

Si el build falla, casi siempre es una de estas: falta una comilla en `description`, la URL no empieza por `https://`, o `draft` sigue en `true` y por eso no la ves (eso no es un fallo: simplemente no se publica).

## Patrocinado, afiliado, newsletter y shorts

- **Destacado** (`destacado: true`) es una elección editorial. No es un anuncio.
- **Patrocinado** (`patrocinado: true`) es un acuerdo de pago. La web muestra la etiqueta **Patrocinado** y no se puede ocultar. No lo pongas en `true` si nadie ha pagado.
- **Afiliado:** añade una línea `affiliateUrl: https://...` con el enlace del programa. El botón principal dirá “Enlace de afiliado” (`rel="sponsored nofollow"`) y al lado seguirá la web oficial. Si no hay afiliado, borra esa línea. No la dejes vacía. ElevenLabs ya lleva el enlace real: `https://try.elevenlabs.io/herramientasiaespanol`. No lo sustituyas. El pie de todas las páginas dice: “Transparencia: algunos enlaces son de afiliado”.

Huecos de la newsletter y de los shorts, en `src/data/patrocinios.json`:

```json
"newsletter": {
  "activo": true,
  "patrocinador": "Nombre",
  "texto": "La frase que verá la gente.",
  "url": "https://web-del-patrocinador.com",
  "hasta": "2026-12-31"
}
```

Con `activo` en `false` no se inventa un anuncio: se ve un hueco vacío que enlaza a Anúnciate. Lo mismo vale para `shorts`.

La página **Anúnciate** explica las cuatro fórmulas: ficha patrocinada, enlace de afiliado, hueco en la newsletter y mención en shorts. No hay precios inventados ni botón de pago.

La página **Pro** lee `src/data/pro.json`. El precio orientativo son 5 USD al mes, por packs de skills descargables, plantillas y avisos anticipados. El directorio, las guías, los tutoriales y el ranking siguen gratis. Hoy el formulario no cobra ni guarda el correo.

El formulario de la newsletter tampoco envía nada. Es el hueco para conectar más adelante un servicio gratuito.

## Canales y contacto

Las cifras de TodoSobreTecno, Soluciones para todos y El Buen Globo viven en `src/data/canales.json`. Salen de YouTube Studio (28 oct 2025 – 27 oct 2026) y, en la edad de Soluciones para todos, del PDF de agosto de 2026. No añadas vídeos de otros canales ni una lista de reproducciones: el hueco `video-propio` es para un vídeo de esta web, cuando exista. El correo de contacto sigue en `src/lib/site.ts` como `#TODO-email-contacto` hasta que sea el buzón real.

## Publicar

Cada guardado en la rama `main` dispara Cloudflare. Espera uno o dos minutos y recarga la web. Si quieres ver el progreso: en Cloudflare, tu proyecto de Pages, pestaña **Deployments**. En verde, ya está.

## Conectar el repositorio a Cloudflare Pages

Hazlo una sola vez. El plan es el gratuito.

1. Entra en [dash.cloudflare.com](https://dash.cloudflare.com) y crea una cuenta si no tienes. No elijas un plan de pago.
2. En el menú de la izquierda abre **Workers & Pages** (a veces está dentro de **Compute**).
3. Pulsa **Create** y elige **Pages**. Luego **Connect to Git**.
4. Autoriza GitHub y elige este repositorio.
5. En la configuración del build deja estos valores, tal cual:
   - **Framework preset:** Astro, si aparece. Si no, None.
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Root directory:** vacío (la raíz del repositorio).
6. Abre **Environment variables** y añade una:
   - Nombre: `NODE_VERSION`
   - Valor: `22`
7. Pulsa **Save and Deploy**.
8. Cuando el estado sea **Success**, abre la dirección que termina en `.pages.dev` y comprueba que se ve el inicio.

Si el build sale en rojo, el fallo más habitual es no haber puesto `NODE_VERSION` en 22. Node 18 se queda corto.

## Poner el dominio herramientasiaespanol.com

1. En Cloudflare pulsa **Add a site** (o **Add domain**) y escribe `herramientasiaespanol.com`. Elige el plan **Free**.
2. Cloudflare enseña dos servidores de nombres (nameservers), algo parecido a `ada.ns.cloudflare.com`.
3. Entra en la web donde compraste el dominio (el registrador). Busca los nameservers y sustitúyelos por los dos que te dio Cloudflare. Guarda.
4. Vuelve a Cloudflare y espera a que el dominio pase a **Active**. Puede tardar desde unos minutos hasta unas horas. No hace falta pagar por acelerarlo.
5. Entra en el proyecto de Pages → **Custom domains** → **Set up a custom domain**.
6. Escribe `herramientasiaespanol.com` y confirma. Cloudflare crea el registro DNS si el dominio ya está en tu cuenta.
7. Repite con `www.herramientasiaespanol.com`.
8. Si Pages ofrece redirigir `www` al dominio sin www, actívalo. Así solo hay una dirección canónica.

La etiqueta canonical de cada página ya apunta a `https://herramientasiaespanol.com`, sin `www` y sin barra final.

## Redirigir hubtecnoia.com

La idea: quien escriba `hubtecnoia.com` o `www.hubtecnoia.com` llega a `https://herramientasiaespanol.com` conservando el camino. `hubtecnoia.com/ranking` abre `https://herramientasiaespanol.com/ranking`.

1. En Cloudflare, **Add a site** → `hubtecnoia.com` → plan **Free**.
2. Cambia también los nameservers de este dominio en el registrador, igual que en el paso anterior. Espera a que esté **Active**.
3. Entra en el dominio `hubtecnoia.com` → **DNS** → **Add record**:
   - Type: **A**
   - Name: `@`
   - IPv4 address: `192.0.2.1`
   - Proxy status: **Proxied** (nube naranja)
   
   `192.0.2.1` es una dirección de ejemplo que documenta Cloudflare para dominios que solo redirigen. El tráfico no llega a ese número: lo para la nube naranja y aplica la regla de abajo.
4. Añade otro registro:
   - Type: **CNAME**
   - Name: `www`
   - Target: `hubtecnoia.com`
   - Proxy: **Proxied**
5. Ve a **Rules** → **Redirect Rules** → **Create rule**.
6. Nombre de la regla: `Redirigir a herramientasiaespanol`.
7. En “If incoming requests match”, elige **Custom filter expression** y pega:

```txt
(http.host eq "hubtecnoia.com") or (http.host eq "www.hubtecnoia.com")
```

8. En “Then”, elige **Dynamic**.
   - Expression: `concat("https://herramientasiaespanol.com", http.request.uri.path)`
   - Status code: **301**
   - **Preserve query string:** activado
9. Pulsa **Deploy**.
10. Prueba en una ventana privada: `https://hubtecnoia.com/herramientas` tiene que abrir `https://herramientasiaespanol.com/herramientas`.

Si también quieres que `www.herramientasiaespanol.com` haga lo mismo y Pages no te ofreció el redirect, crea en la zona de `herramientasiaespanol.com` otra Redirect Rule con el host `www.herramientasiaespanol.com` y la misma expresión de destino.

## Ranking semanal de GitHub

El archivo `src/data/ranking.json` ya trae una primera lista, sacada de la API de GitHub. No son cifras escritas a mano.

GitHub no tiene una API del listado “Trending” de su web. Por eso hay dos listas, y la página lo explica:

- **En movimiento:** repositorios públicos de IA actualizados en los últimos 14 días, ordenados por estrellas.
- **Más estrellados:** los mismos temas, ordenados por estrellas, sin mirar la fecha.

Cada lunes a las 06:15 UTC, la acción `.github/workflows/ranking-semanal.yml` vuelve a consultar la API con el `GITHUB_TOKEN` que GitHub ya crea solo. No tienes que crear un token ni pagar.

Para lanzarla a mano, una vez que este archivo esté en `main`:

1. En GitHub abre la pestaña **Actions**.
2. A la izquierda, **Ranking semanal**.
3. **Run workflow** → **Run workflow**.

Si el commit no entra, ve a **Settings** → **Actions** → **General** → **Workflow permissions** y elige **Read and write permissions**. Guarda y vuelve a lanzarla.

Ese commit en `main` hace que Cloudflare publique el ranking nuevo.

## Inglés más adelante

La configuración ya admite `es` y `en`. El español no lleva prefijo. Una página inglesa se crea en `src/pages/en/`, por ejemplo `src/pages/en/herramientas/index.astro`, y saldrá en `/en/herramientas`.

Los textos de menú y pie están en `src/i18n/ui.ts`, con una copia en inglés preparada. Las fichas llevan `lang: es`. Para traducir una ficha, duplica el Markdown, pon `lang: en` y enlázala desde la página inglesa. Hasta entonces, `/en` es un aviso de “todavía no” y no entra en el sitemap.

No hace falta cambiar las URLs en español.

## Comandos, por si alguien técnico te ayuda

```bash
npm install
npm run dev      # verla en el ordenador
npm run build    # genera la carpeta dist
npm run preview  # sirve dist
npm run ranking  # actualiza el JSON de GitHub desde tu ordenador
```

En Cloudflare, el comando de build es `npm run build` y la carpeta de salida es `dist`.
