/* =========================================================================
   Motion & interaction layer — GSAP, bundled by Astro (self-hosted, no CDN).
   Everything here is progressive enhancement: gated behind .js (set in
   Base.astro's <head>) and prefers-reduced-motion, and behind pointer/hover
   capability for the cursor-driven effects. JS off or reduced-motion on →
   full, static content.
   ========================================================================= */
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const root = document.documentElement;
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

/* -------------------------------------------------------------------------
   Theme toggle — circular View-Transition wipe from the button, with a
   graceful fallback where the API is unsupported or motion is reduced.
   ------------------------------------------------------------------------- */
function initThemeToggle() {
  const btn = document.querySelector<HTMLButtonElement>('.themetoggle');
  if (!btn) return;

  btn.addEventListener('click', (e) => {
    const apply = () => {
      const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (_) {}
    };

    // @ts-ignore — startViewTransition is not in older lib.dom typings yet.
    if (reduce || !document.startViewTransition) { apply(); return; }

    const x = e.clientX || btn.getBoundingClientRect().left;
    const y = e.clientY || btn.getBoundingClientRect().top;
    const end = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));

    // @ts-ignore
    const vt = document.startViewTransition(apply);
    vt.ready.then(() => {
      root.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${end}px at ${x}px ${y}px)`] },
        { duration: 480, easing: 'cubic-bezier(0.4, 0, 0.2, 1)', pseudoElement: '::view-transition-new(root)' },
      );
    });
  });
}

/* -------------------------------------------------------------------------
   Hero headline — split into words and reveal each from behind a mask.
   Words (not characters) keep the text readable for screen readers.
   ------------------------------------------------------------------------- */
function splitWords(el: HTMLElement): HTMLElement[] {
  const words = (el.textContent || '').trim().split(/\s+/);
  el.textContent = '';
  el.classList.add('split');
  return words.map((w, i) => {
    const outer = document.createElement('span');
    outer.className = 'word';
    const inner = document.createElement('span');
    inner.className = 'word-in';
    inner.textContent = w;
    outer.appendChild(inner);
    el.appendChild(outer);
    if (i < words.length - 1) el.appendChild(document.createTextNode(' '));
    return inner;
  });
}

/* -------------------------------------------------------------------------
   Cursor spotlight — feed pointer position into CSS custom props, rAF-throttled
   so we touch the DOM once per frame. A CSS radial-gradient does the painting.
   ------------------------------------------------------------------------- */
function spotlight(el: HTMLElement) {
  let raf = 0;
  let mx = 0;
  let my = 0;
  const write = () => {
    raf = 0;
    el.style.setProperty('--mx', `${mx}px`);
    el.style.setProperty('--my', `${my}px`);
  };
  el.addEventListener('pointermove', (e) => {
    const r = el.getBoundingClientRect();
    mx = e.clientX - r.left;
    my = e.clientY - r.top;
    if (!raf) raf = requestAnimationFrame(write);
  });
}

/* -------------------------------------------------------------------------
   Magnetic buttons — pull toward the cursor while hovered, spring back on
   leave. quickTo avoids creating a new tween on every pointermove.
   ------------------------------------------------------------------------- */
function magnetic(el: HTMLElement, strength = 0.35) {
  const xTo = gsap.quickTo(el, 'x', { duration: 0.4, ease: 'power3.out' });
  const yTo = gsap.quickTo(el, 'y', { duration: 0.4, ease: 'power3.out' });
  el.addEventListener('pointermove', (e) => {
    const r = el.getBoundingClientRect();
    xTo((e.clientX - (r.left + r.width / 2)) * strength);
    yTo((e.clientY - (r.top + r.height / 2)) * strength);
  });
  el.addEventListener('pointerleave', () => { xTo(0); yTo(0); });
}

/* -------------------------------------------------------------------------
   Count-up — animate metric numbers from 0 when they scroll into view,
   preserving any prefix/suffix ("1,600+" → counts to 1,600 then adds "+").
   ------------------------------------------------------------------------- */
function countUp(el: HTMLElement) {
  const m = (el.textContent || '').trim().match(/^(\D*)([\d.,]+)(.*)$/);
  if (!m) return;
  const [, pre, numStr, suf] = m;
  const target = parseFloat(numStr.replace(/,/g, ''));
  if (!isFinite(target)) return;
  const state = { v: 0 };
  gsap.to(state, {
    v: target,
    duration: 1.4,
    ease: 'power2.out',
    scrollTrigger: { trigger: el, start: 'top 90%', once: true },
    onUpdate: () => { el.textContent = pre + Math.round(state.v).toLocaleString('en-US') + suf; },
  });
}

/* ------------------------------------------------------------------------- */
function init() {
  initThemeToggle();

  const heroWords = gsap.utils.toArray<HTMLElement>('.reveal:not(.card)');
  const cards = gsap.utils.toArray<HTMLElement>('.projects .card');
  const metrics = gsap.utils.toArray<HTMLElement>('.metric-num');
  const h1 = document.querySelector<HTMLElement>('.hero h1');

  if (reduce) {
    // Static, fully-visible: clear the CSS pre-hide, no animation.
    gsap.set(['.hero-copy > *', '.hero-code', '.reveal'], { clearProps: 'opacity,transform' });
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  // Scroll progress bar
  gsap.to('.scroll-progress', {
    scaleX: 1, ease: 'none',
    scrollTrigger: { start: 0, end: () => document.documentElement.scrollHeight - innerHeight, scrub: 0.2 },
  });

  // Hero entrance timeline
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
  tl.fromTo('.hero-eyebrow', { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.5 });

  if (h1) {
    const words = splitWords(h1);
    gsap.set(h1, { opacity: 1 });
    gsap.set(words, { yPercent: 115 });
    tl.to(words, { yPercent: 0, duration: 0.85, stagger: 0.045, ease: 'power4.out' }, '-=0.2');
  }

  tl.fromTo('.hero .lede', { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.55 }, '-=0.5')
    .fromTo('.hero-cta', { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.5 }, '-=0.35')
    .fromTo('.hero-code', { opacity: 0, x: 24 }, { opacity: 1, x: 0, duration: 0.7 }, '-=0.5');

  // Section reveals (blocks, then cards with a stagger)
  heroWords.forEach((el) => {
    gsap.fromTo(el, { opacity: 0, y: 24 }, {
      opacity: 1, y: 0, duration: 0.6, ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 85%', once: true },
    });
  });
  if (cards.length) {
    gsap.fromTo(cards, { opacity: 0, y: 24 }, {
      opacity: 1, y: 0, duration: 0.55, ease: 'power2.out', stagger: 0.08,
      scrollTrigger: { trigger: '.projects', start: 'top 82%', once: true },
    });
  }

  // Subtle parallax on the code panel content (transform only, never body copy)
  gsap.to('.hero-code pre', {
    yPercent: -8, ease: 'none',
    scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 0.5 },
  });

  // Case-study metric count-up
  metrics.forEach(countUp);

  // Cursor-driven effects — only where a fine pointer can drive them
  if (fine) {
    cards.forEach(spotlight);
    gsap.utils.toArray<HTMLElement>('.hero-cta .btn').forEach((b) => magnetic(b));
  }
}

init();
