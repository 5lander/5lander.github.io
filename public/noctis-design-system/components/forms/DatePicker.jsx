import React from 'react';

const NOCTIS_DATE_CSS = `
.noctis-date{position:relative;width:280px;max-width:100%;}
.noctis-date__btn{width:100%;height:var(--control-h);padding:0 12px;border-radius:8px;border:1px solid hsl(var(--border-strong));background:hsl(var(--surface-base));color:hsl(var(--text-primary));font-family:var(--font-mono);font-size:var(--font-body);display:flex;align-items:center;justify-content:space-between;cursor:pointer;}
.noctis-date__btn:focus-visible{outline:2px solid hsl(var(--focus-ring));outline-offset:2px;}
.noctis-date__pop{position:absolute;z-index:20;margin-top:6px;background:hsl(var(--surface-overlay));border:1px solid hsl(var(--border-subtle));border-radius:12px;box-shadow:var(--shadow-overlay);padding:12px;width:260px;}
.noctis-date__nav{display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;font:600 13px/1 var(--font-ui);}
.noctis-date__navbtn{height:var(--control-h-sm);width:28px;border-radius:8px;border:1px solid hsl(var(--border-subtle));background:transparent;color:hsl(var(--text-secondary));cursor:pointer;}
.noctis-date__dow{display:grid;grid-template-columns:repeat(7,1fr);gap:2px;text-align:center;font-size:11px;color:hsl(var(--text-tertiary));margin-bottom:4px;}
.noctis-date__grid{display:grid;grid-template-columns:repeat(7,1fr);gap:2px;text-align:center;}
.noctis-date__day{height:32px;border:none;border-radius:7px;background:transparent;color:hsl(var(--text-primary));font:400 12px/1 var(--font-ui);cursor:pointer;}
.noctis-date__day:hover{background:hsl(var(--surface-sunken));}
.noctis-date__day--sel{background:hsl(var(--brand-primary));color:hsl(var(--brand-foreground));font-weight:600;}
.noctis-date__day--muted{color:hsl(var(--text-tertiary));opacity:.5;}
`;
if (typeof document !== 'undefined' && !document.getElementById('noctis-date-css')) {
  const s = document.createElement('style'); s.id = 'noctis-date-css'; s.textContent = NOCTIS_DATE_CSS;
  document.head.appendChild(s);
}

const DOW = ['Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá', 'Do'];
const MESES = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
const pad = (n) => String(n).padStart(2, '0');

/**
 * DatePicker es-EC — formato DD/MM/YYYY, semana con lunes primero, meses en
 * español. Día seleccionado usa el acento del tenant. Hora 24h · TZ Guayaquil
 * en campos con hora.
 */
export function DatePicker({ value, onChange, label }) {
  const [open, setOpen] = React.useState(false);
  const init = value instanceof Date ? value : new Date(2026, 2, 14);
  const [view, setView] = React.useState(() => new Date(init.getFullYear(), init.getMonth(), 1));
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!open) return;
    const onDoc = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, [open]);

  const y = view.getFullYear(), m = view.getMonth();
  const firstDow = (new Date(y, m, 1).getDay() + 6) % 7; // lunes = 0
  const days = new Date(y, m + 1, 0).getDate();
  const cells = [];
  for (let i = 0; i < firstDow; i++) cells.push(null);
  for (let d = 1; d <= days; d++) cells.push(d);
  const sel = value instanceof Date ? value : null;
  const label2 = sel ? `${pad(sel.getDate())}/${pad(sel.getMonth() + 1)}/${sel.getFullYear()}` : 'DD/MM/AAAA';

  return (
    <div className="noctis-date" ref={ref}>
      <button type="button" className="noctis-date__btn" onClick={() => setOpen((o) => !o)}>
        <span>{label2}</span><span style={{ color: 'hsl(var(--text-tertiary))' }} aria-hidden="true">▦</span>
      </button>
      {open && (
        <div className="noctis-date__pop">
          <div className="noctis-date__nav">
            <button type="button" className="noctis-date__navbtn" onClick={() => setView(new Date(y, m - 1, 1))}>‹</button>
            <span>{MESES[m]} {y}</span>
            <button type="button" className="noctis-date__navbtn" onClick={() => setView(new Date(y, m + 1, 1))}>›</button>
          </div>
          <div className="noctis-date__dow">{DOW.map((d) => <span key={d}>{d}</span>)}</div>
          <div className="noctis-date__grid">
            {cells.map((d, i) => d === null ? <span key={'e' + i} /> : (
              <button
                key={d}
                type="button"
                className={['noctis-date__day', sel && sel.getDate() === d && sel.getMonth() === m && sel.getFullYear() === y && 'noctis-date__day--sel'].filter(Boolean).join(' ')}
                onClick={() => { onChange && onChange(new Date(y, m, d)); setOpen(false); }}
              >{d}</button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
