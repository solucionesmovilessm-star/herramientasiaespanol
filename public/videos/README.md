# Vídeos para Buffer

Los archivos `.mp4` de esta carpeta se publican solos en:

`https://herramientasiaespanol.com/videos/nombre-del-archivo.mp4`

Buffer puede usar esa dirección. No hace falta enlazarla desde ninguna página.

## Cómo añadir un vídeo

1. Exporta el short en MP4 (H.264). El plan gratuito de Cloudflare Pages no admite un archivo de más de **25 MB**.
2. Ponle un nombre en minúsculas, con guiones y sin espacios. Ejemplo: `short-ollama-2026-10.mp4`.
3. Guarda el archivo en esta carpeta (`public/videos/`).
4. Súbelo a `main`. Al terminar el deploy, la URL ya responde.

No crees una página, una ficha ni un enlace en el menú para ese archivo. `/videos/` está en `robots.txt` con `Disallow` y no entra en el sitemap.

El tipo de contenido lo fija `public/_headers`: `Content-Type: video/mp4`. No añadas una regla `/* /index.html 200` en `_redirects`: se comería estas URL.
