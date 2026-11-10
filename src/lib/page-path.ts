const ASSET_EXT =
  /\.(?:avif|css|gif|ico|jpe?g|js|json|map|mjs|mp4|png|sh|svg|txt|webm|webp|woff2?|xml|zip|md)$/i;

/**
 * Ruta pública de una página HTML. Cloudflare Pages responde 200 en la URL con
 * barra final (y 308 si falta) porque el build emite `ruta/index.html`.
 * Los archivos con extensión se dejan como están.
 */
export function pagePath(input: string): string {
  if (!input || input.startsWith('#') || input.startsWith('?')) return input;
  if (!input.startsWith('/')) return input;

  const hashAt = input.indexOf('#');
  const hash = hashAt >= 0 ? input.slice(hashAt) : '';
  const beforeHash = hashAt >= 0 ? input.slice(0, hashAt) : input;
  const queryAt = beforeHash.indexOf('?');
  const query = queryAt >= 0 ? beforeHash.slice(queryAt) : '';
  const path = queryAt >= 0 ? beforeHash.slice(0, queryAt) : beforeHash;

  if (path === '' || path === '/') return `/${query}${hash}`;
  if (ASSET_EXT.test(path)) return `${path}${query}${hash}`;
  return `${path.replace(/\/+$/, '')}/${query}${hash}`;
}
