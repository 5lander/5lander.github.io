import React from 'react';

const NOCTIS_SHEET_CSS = `
.noctis-sheet__scrim{position:fixed;inset:0;z-index:60;background:hsl(0 0% 0% / .45);display:flex;}
.noctis-sheet{background:hsl(var(--surface-overlay));box-shadow:var(--shadow-overlay);display:flex;flex-direction:column;}
.noctis-sheet--center{margin:auto;width:min(520px,calc(100vw - 32px));max-height:calc(100vh - 64px);border-radius:16px;}
.noctis-sheet--bottom{margin-top:auto;width:100%;max-height:92vh;border-radius:16px 16px 0 0;}
.noctis-sheet__head{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:16px 18px;border-bottom:1px solid hsl(var(--border-subtle));}
.noctis-sheet__title{font:600 var(--type-h3-size,16px)/1.3 var(--font-ui);}
.noctis-sheet__x{width:30px;height:30px;border-radius:8px;border:1px solid hsl(var(--border-subtle));background:transparent;color:hsl(var(--text-secondary));cursor:pointer;}
.noctis-sheet__body{padding:18px;overflow:auto;}
.noctis-sheet__foot{padding:14px 18px;border-top:1px solid hsl(var(--border-subtle));display:flex;justify-content:flex-end;gap:10px;}
`;
if (typeof document !== 'undefined' && !document.getElementById('noctis-sheet-css')) {
  const s = document.createElement('style'); s.id = 'noctis-sheet-css'; s.textContent = NOCTIS_SHEET_CSS;
  document.head.appendChild(s);
}

/**
 * Sheet — único primitivo de overlay del sistema. Panel centrado en desktop,
 * bottom-sheet en táctil. Solo para flujos multi-paso o de foco (cobro POS, crear
 * admin). role="dialog" + aria-modal, cierre con Esc, scrim. Las acciones
 * DESTRUCTIVAS NO usan Sheet: siguen con confirm inline de 2 pasos en la fila/Card.
 */
export function Sheet({ open, onClose, title, placement = 'center', children, footer }) {
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape' && onClose) onClose(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);
  if (!open) return null;
  return (
    <div className="noctis-sheet__scrim" onMouseDown={(e) => { if (e.target === e.currentTarget && onClose) onClose(); }}>
      <div className={`noctis-sheet noctis-sheet--${placement}`} role="dialog" aria-modal="true" aria-label={typeof title === 'string' ? title : undefined}>
        {title && (
          <div className="noctis-sheet__head">
            <span className="noctis-sheet__title">{title}</span>
            <button type="button" className="noctis-sheet__x" onClick={onClose} aria-label="Cerrar">✕</button>
          </div>
        )}
        <div className="noctis-sheet__body">{children}</div>
        {footer && <div className="noctis-sheet__foot">{footer}</div>}
      </div>
    </div>
  );
}
