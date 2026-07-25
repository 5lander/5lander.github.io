import React from 'react';

const NOCTIS_TABS_CSS = `
.noctis-tabs__list{display:flex;gap:2px;border-bottom:1px solid hsl(var(--border-subtle));padding:0 8px;}
.noctis-tabs__tab{appearance:none;border:none;background:transparent;cursor:pointer;padding:12px 14px;font:500 13px/1 var(--font-ui);color:hsl(var(--text-tertiary));border-bottom:2px solid transparent;transition:color .12s;}
.noctis-tabs__tab:hover{color:hsl(var(--text-secondary));}
.noctis-tabs__tab[aria-selected="true"]{color:hsl(var(--brand-primary));border-bottom-color:hsl(var(--brand-primary));}
.noctis-tabs__tab:focus-visible{outline:2px solid hsl(var(--focus-ring));outline-offset:-2px;}
`;
if (typeof document !== 'undefined' && !document.getElementById('noctis-tabs-css')) {
  const s = document.createElement('style'); s.id = 'noctis-tabs-css'; s.textContent = NOCTIS_TABS_CSS;
  document.head.appendChild(s);
}

/**
 * Tabs — navegación de secciones. La pestaña activa usa el acento del tenant
 * (uno de los cuatro lugares permitidos: nav activo). Controlado por `value`.
 */
export function Tabs({ tabs = [], value, onChange }) {
  return (
    <div role="tablist" className="noctis-tabs__list">
      {tabs.map((t) => (
        <button
          key={t.id}
          role="tab"
          aria-selected={value === t.id}
          className="noctis-tabs__tab"
          onClick={() => onChange && onChange(t.id)}
        >{t.label}</button>
      ))}
    </div>
  );
}
