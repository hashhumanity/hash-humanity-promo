/* Hash Humanity promo homepage: translation of current copy. */
(() => {
  'use strict';
  const valid = new Set(['en','es','pt','fr','de','zh','ms','ko']);
  const savedText = new WeakMap();
  const nodes = [];
  const skip = new Set(['SCRIPT','STYLE','NOSCRIPT','SVG','TEXTAREA','OPTION']);
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let node;
  const normalize = s => s.replace(/\s+/g, ' ').trim();
  while ((node = walker.nextNode())) {
    let p = node.parentElement;
    if (!p || !normalize(node.nodeValue)) continue;
    let excluded = false;
    for (; p; p = p.parentElement) if (skip.has(p.tagName)) { excluded = true; break; }
    if (excluded) continue;
    savedText.set(node, node.nodeValue);
    nodes.push(node);
  }
  const cache = {};
  let serial = 0;
  const langFromStorage = () => {
    try { return localStorage.getItem('hhPromoLanguage') || localStorage.getItem('hh_language') || 'en'; }
    catch (_) { return 'en'; }
  };
  async function apply(lang) {
    if (!valid.has(lang)) lang = 'en';
    const seq = ++serial;
    let dict = {};
    if (lang !== 'en') {
      try {
        if (!cache[lang]) {
          const res = await fetch('./promo-locales/' + lang + '.json', {cache:'no-cache'});
          if (!res.ok) throw new Error('Missing locale: ' + lang);
          cache[lang] = await res.json();
        }
        dict = cache[lang].translations || {};
        if (cache[lang].status !== 'complete') throw new Error('Incomplete locale: ' + lang);
      } catch(e) { console.error('[Promo translations]', e); return; }
    }
    if (seq !== serial) return;
    for (const n of nodes) {
      const original = savedText.get(n);
      if (!original) continue;
      const key = normalize(original);
      const value = lang === 'en' ? key : dict[key];
      if (typeof value !== 'string') continue;
      const lead = (original.match(/^\s*/) || [''])[0];
      const tail = (original.match(/\s*$/) || [''])[0];
      n.nodeValue = lead + value + tail;
    }
    document.documentElement.lang = lang;
    const label = document.getElementById('langBtnLabel');
    if (label) label.textContent = lang.toUpperCase();
  }
  // The existing menu retains its layout/click handlers. Apply after its handler runs.
  document.addEventListener('click', ev => {
    const button = ev.target.closest ? ev.target.closest('#langMenu [data-lang]') : null;
    if (!button) return;
    const lang = button.getAttribute('data-lang');
    if (!valid.has(lang)) return;
    try { localStorage.setItem('hh_language',lang); } catch (_) {}
    queueMicrotask(() => apply(lang));
  }, true);
  apply(langFromStorage());
})();
