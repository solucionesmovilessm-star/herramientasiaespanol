export function markOf(name: string) {
  const clean = name
    .normalize('NFD')
    .replace(/\p{M}/gu, '')
    .replace(/[^A-Za-z0-9]/g, '');
  const letters = (clean.slice(0, 2) || name.slice(0, 2) || '·').toUpperCase();
  let g = 0;
  for (let i = 0; i < name.length; i++) g = (g + name.charCodeAt(i) * (i + 3)) % 4;
  return { letters, g };
}
