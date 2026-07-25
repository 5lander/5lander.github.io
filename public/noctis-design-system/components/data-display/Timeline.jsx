import React from 'react';

const NOCTIS_TL_CSS = `
.noctis-tl{display:flex;flex-direction:column;}
.noctis-tl__step{display:flex;gap:12px;}
.noctis-tl__rail{display:flex;flex-direction:column;align-items:center;}
.noctis-tl__node{width:22px;height:22px;border-radius:50%;display:grid;place-items:center;font-size:12px;flex:none;}
.noctis-tl__node--done{background:hsl(var(--success-fg));color:hsl(var(--success-foreground));}
.noctis-tl__node--current{background:hsl(var(--brand-primary));color:hsl(var(--brand-foreground));}
.noctis-tl__node--pending{background:hsl(var(--surface-base));border:2px solid hsl(var(--border-strong));}
.noctis-tl__line{width:2px;height:34px;}
.noctis-tl__body{padding-top:1px;padding-bottom:12px;}
.noctis-tl__label{font:600 13px/1.3 var(--font-ui);}
.noctis-tl__label--pending{color:hsl(var(--text-tertiary));}
.noctis-tl__meta{font:400 12px/1.3 var(--font-mono);color:hsl(var(--text-tertiary));}
`;
if (typeof document !== 'undefined' && !document.getElementById('noctis-tl-css')) {
  const s = document.createElement('style'); s.id = 'noctis-tl-css'; s.textContent = NOCTIS_TL_CSS;
  document.head.appendChild(s);
}

/**
 * Timeline / Stepper de estados — draft → in_transit → received. Los pasos
 * completados marcan ✓ con la línea de conexión en verde; el pendiente queda con
 * contorno neutro. `cancelled` es terminal lateral (se muestra como Badge terminal
 * fuera de este componente).
 */
export function Timeline({ steps = [] }) {
  return (
    <div className="noctis-tl">
      {steps.map((st, i) => {
        const last = i === steps.length - 1;
        const mark = st.status === 'done' ? '✓' : st.status === 'current' ? (i + 1) : '';
        const lineColor = st.status === 'done' ? 'hsl(var(--success-fg))' : 'hsl(var(--border-strong))';
        return (
          <div className="noctis-tl__step" key={i}>
            <div className="noctis-tl__rail">
              <div className={`noctis-tl__node noctis-tl__node--${st.status}`}>{mark}</div>
              {!last && <div className="noctis-tl__line" style={{ background: lineColor }} />}
            </div>
            <div className="noctis-tl__body">
              <div className={['noctis-tl__label', st.status === 'pending' && 'noctis-tl__label--pending'].filter(Boolean).join(' ')}>{st.label}</div>
              {st.meta && <div className="noctis-tl__meta">{st.meta}</div>}
            </div>
          </div>
        );
      })}
    </div>
  );
}
