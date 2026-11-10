import { pagePath } from './page-path';
import { SITE_URL } from './site';

type UrlNode = { url: string };
type Context = { setProperty: (node: UrlNode, key: 'url', value: string) => void };

function rewrite(url: string) {
  if (url.startsWith(SITE_URL)) {
    const rest = url.slice(SITE_URL.length);
    const path = rest.startsWith('/') ? rest : `/${rest}`;
    return new URL(pagePath(path || '/'), SITE_URL).href;
  }
  return pagePath(url);
}

function rewriteNode(node: UrlNode, context: Context) {
  const next = rewrite(node.url);
  if (next !== node.url) context.setProperty(node, 'url', next);
}

/** Barra final en enlaces internos del Markdown. Los archivos y las URLs externas no cambian. */
export const trailingSlashPlugin = {
  name: 'internal-trailing-slash',
  link: rewriteNode,
  definition: rewriteNode,
  image: rewriteNode,
};
