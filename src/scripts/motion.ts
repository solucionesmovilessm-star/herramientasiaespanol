type IndexItem = {
  title: string;
  href: string;
  kind: string;
  hint: string;
  letters: string;
  g: number;
};

let indexCache: IndexItem[] | null = null;
let indexError = false;
let active = 0;
let lastTrigger: HTMLElement | null = null;
let typedTimer = 0;

function reduced() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function applyStoredTheme() {
  try {
    const stored = localStorage.getItem('theme');
    if (stored === 'light' || stored === 'dark') {
      document.documentElement.setAttribute('data-theme', stored);
    }
  } catch {
    /* localStorage can be blocked */
  }
}

function currentTheme() {
  const set = document.documentElement.getAttribute('data-theme');
  if (set === 'light' || set === 'dark') return set;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function paintTheme() {
  const button = document.getElementById('theme-toggle');
  if (!button) return;
  const mode = currentTheme();
  const toLight = button.getAttribute('data-label-light') || 'Usar tema claro';
  const toDark = button.getAttribute('data-label-dark') || 'Usar tema oscuro';
  button.setAttribute('aria-pressed', mode === 'dark' ? 'true' : 'false');
  button.setAttribute('aria-label', mode === 'dark' ? toLight : toDark);
}

function toggleTheme() {
  const next = currentTheme() === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  try {
    localStorage.setItem('theme', next);
  } catch {
    /* ignore */
  }
  paintTheme();
}

function norm(value: string) {
  return value.toLocaleLowerCase('es').normalize('NFD').replace(/\p{M}/gu, '');
}

async function loadIndex() {
  if (indexCache) return indexCache;
  const response = await fetch('/indice.json');
  if (!response.ok) throw new Error('index');
  indexCache = (await response.json()) as IndexItem[];
  return indexCache;
}

function palette() {
  return document.getElementById('cmdk');
}

function paletteInput() {
  return document.getElementById('cmdk-input');
}

function paletteList() {
  return document.getElementById('cmdk-list');
}

function palettePanel() {
  return document.querySelector<HTMLElement>('.cmdk-panel');
}

function setStatus(text: string) {
  const status = document.getElementById('cmdk-status');
  if (status) status.textContent = text;
}

function optionNodes() {
  return Array.from(document.querySelectorAll<HTMLAnchorElement>('#cmdk-list a'));
}

function paintActive() {
  const options = optionNodes();
  const input = paletteInput();
  options.forEach((option, index) => {
    const on = index === active;
    option.classList.toggle('is-active', on);
    option.setAttribute('aria-selected', on ? 'true' : 'false');
    if (on) {
      option.id = 'cmdk-active';
      option.scrollIntoView({ block: 'nearest' });
      if (input) input.setAttribute('aria-activedescendant', 'cmdk-active');
    } else if (option.id === 'cmdk-active') {
      option.removeAttribute('id');
    }
  });
}

function renderResults(items: IndexItem[], message?: string) {
  const list = paletteList();
  if (!list) return;
  list.replaceChildren();
  if (message) {
    const note = document.createElement('p');
    note.className = 'cmdk-note';
    note.textContent = message;
    list.append(note);
    setStatus(message);
    return;
  }
  items.forEach((item) => {
    const link = document.createElement('a');
    link.href = item.href;
    link.className = 'cmdk-item';
    link.setAttribute('role', 'option');
    const mark = document.createElement('span');
    mark.className = `logo-mark g${item.g}`;
    mark.textContent = item.letters;
    mark.setAttribute('aria-hidden', 'true');
    const copy = document.createElement('span');
    const title = document.createElement('strong');
    title.textContent = item.title;
    const hint = document.createElement('small');
    hint.textContent = `${item.kind} · ${item.hint}`;
    copy.append(title, hint);
    link.append(mark, copy);
    list.append(link);
  });
  active = 0;
  paintActive();
  const count = items.length;
  setStatus(count === 1 ? '1 resultado' : `${count} resultados`);
}

async function refreshPalette() {
  const panel = palettePanel();
  const input = paletteInput();
  if (!panel || !(input instanceof HTMLInputElement)) return;
  const idle = panel.dataset.idle || '';
  const empty = panel.dataset.empty || '';
  const loading = panel.dataset.loading || '';
  const error = panel.dataset.error || '';
  try {
    if (!indexCache && !indexError) renderResults([], loading);
    const items = await loadIndex();
    const query = norm(input.value.trim());
    const pool = query
      ? items.filter((item) => norm(`${item.title} ${item.kind} ${item.hint}`).includes(query))
      : items.filter((item) => item.kind === 'Herramienta').slice(0, 6);
    if (pool.length === 0) renderResults([], query ? empty : idle);
    else renderResults(pool.slice(0, 8));
  } catch {
    indexError = true;
    renderResults([], error);
  }
}

function openPalette(trigger?: HTMLElement | null) {
  const root = palette();
  const input = paletteInput();
  if (!root || !(input instanceof HTMLInputElement)) return;
  lastTrigger = trigger ?? (document.activeElement instanceof HTMLElement ? document.activeElement : null);
  const hero = document.getElementById('hero-q');
  if (hero instanceof HTMLInputElement && hero.value && document.activeElement === hero) {
    input.value = hero.value;
  }
  root.hidden = false;
  document.body.classList.add('cmdk-open');
  input.focus();
  void refreshPalette();
}

function closePalette() {
  const root = palette();
  if (!root || root.hidden) return;
  root.hidden = true;
  document.body.classList.remove('cmdk-open');
  const input = paletteInput();
  if (input instanceof HTMLInputElement) input.value = '';
  lastTrigger?.focus();
}

function moveActive(delta: number) {
  const options = optionNodes();
  if (options.length === 0) return;
  active = (active + delta + options.length) % options.length;
  paintActive();
}

function bootReveal() {
  if (reduced()) {
    document.documentElement.classList.remove('motion');
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-in');
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
  );
  document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((node) => {
    const rect = node.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.96 && rect.bottom > 0) node.classList.add('is-in');
    else observer.observe(node);
  });
  document.documentElement.classList.add('motion');
}

function animateCount(node: HTMLElement) {
  if (node.dataset.counted === '1') return;
  const target = Number(node.dataset.count);
  if (!Number.isFinite(target)) return;
  node.dataset.counted = '1';
  if (reduced()) {
    node.textContent = String(target);
    return;
  }
  const start = performance.now();
  const duration = 800;
  const tick = (now: number) => {
    const progress = Math.min(1, (now - start) / duration);
    const eased = 1 - (1 - progress) ** 3;
    node.textContent = String(Math.round(target * eased));
    if (progress < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

function bootCounts() {
  const nodes = document.querySelectorAll<HTMLElement>('[data-count]');
  if (reduced()) return;
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting || !(entry.target instanceof HTMLElement)) return;
        animateCount(entry.target);
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.4 },
  );
  nodes.forEach((node) => observer.observe(node));
}

function bootTyped() {
  window.clearTimeout(typedTimer);
  if (reduced()) return;
  const fields = document.querySelectorAll<HTMLInputElement>('[data-typed-placeholder]');
  fields.forEach((field) => {
    const phrases = (field.dataset.typedPlaceholder || '')
      .split('|')
      .map((phrase) => phrase.trim())
      .filter(Boolean);
    if (phrases.length < 2) return;
    let phraseIndex = 0;
    let chars = 0;
    let deleting = false;
    const step = () => {
      if (field.dataset.typedStop === '1') return;
      if (document.hidden || document.activeElement === field || field.value) {
        typedTimer = window.setTimeout(step, 500);
        return;
      }
      const phrase = phrases[phraseIndex] || '';
      if (!deleting) {
        chars += 1;
        field.placeholder = phrase.slice(0, chars);
        if (chars >= phrase.length) {
          deleting = true;
          typedTimer = window.setTimeout(step, 1300);
          return;
        }
        typedTimer = window.setTimeout(step, 48);
        return;
      }
      chars -= 1;
      field.placeholder = phrase.slice(0, Math.max(chars, 0));
      if (chars <= 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typedTimer = window.setTimeout(step, 280);
        return;
      }
      typedTimer = window.setTimeout(step, 28);
    };
    step();
  });
}

function boot() {
  applyStoredTheme();
  paintTheme();
  bootReveal();
  bootCounts();
  bootTyped();
  closePalette();
}

document.addEventListener('click', (event) => {
  const target = event.target;
  if (!(target instanceof Element)) return;
  const opener = target.closest<HTMLElement>('[data-cmdk-open]');
  if (opener) {
    event.preventDefault();
    openPalette(opener);
    return;
  }
  if (target.closest('[data-cmdk-close]')) {
    event.preventDefault();
    closePalette();
    return;
  }
  if (target.closest('#theme-toggle')) toggleTheme();
});

document.addEventListener('keydown', (event) => {
  const key = event.key.toLowerCase();
  if ((event.metaKey || event.ctrlKey) && key === 'k') {
    event.preventDefault();
    const root = palette();
    if (root?.hidden === false) closePalette();
    else openPalette(document.activeElement instanceof HTMLElement ? document.activeElement : null);
    return;
  }
  const root = palette();
  if (!root || root.hidden) return;
  if (event.key === 'Escape') {
    event.preventDefault();
    closePalette();
    return;
  }
  if (event.key === 'ArrowDown') {
    event.preventDefault();
    moveActive(1);
    return;
  }
  if (event.key === 'ArrowUp') {
    event.preventDefault();
    moveActive(-1);
    return;
  }
  if (event.key === 'Enter') {
    const options = optionNodes();
    const choice = options[active];
    if (choice) {
      event.preventDefault();
      choice.click();
    }
  }
});

document.addEventListener('input', (event) => {
  if (event.target instanceof HTMLInputElement && event.target.id === 'cmdk-input') void refreshPalette();
});

document.addEventListener('submit', (event) => {
  const form = event.target;
  if (!(form instanceof HTMLFormElement) || !form.hasAttribute('data-static-form')) return;
  event.preventDefault();
  const status = form.querySelector('.form-status');
  if (status instanceof HTMLElement) status.hidden = false;
  const input = form.querySelector('input');
  if (input instanceof HTMLInputElement) input.value = '';
});

document.addEventListener('astro:after-swap', applyStoredTheme);
document.addEventListener('astro:page-load', boot);
boot();

const idle = window.requestIdleCallback || ((callback: IdleRequestCallback) => window.setTimeout(() => callback({} as IdleDeadline), 600));
idle(() => {
  loadIndex().catch(() => {
    indexError = true;
  });
});
