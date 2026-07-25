import React from 'react';

const NOCTIS_TABLE_CSS = `
.noctis-table-wrap{border:1px solid hsl(var(--border-subtle));border-radius:12px;overflow:hidden;background:hsl(var(--surface-raised));}
.noctis-table-scroll{overflow-x:auto;}
.noctis-table{width:100%;border-collapse:collapse;font-size:var(--font-body);}
.noctis-table thead tr{background:hsl(var(--surface-sunken));text-align:left;}
.noctis-table th{padding:11px 14px;font:600 12px/1.2 var(--font-ui);color:hsl(var(--text-secondary));white-space:nowrap;}
.noctis-table th.num,.noctis-table td.num{text-align:right;font-variant-numeric:tabular-nums;font-feature-settings:'tnum';}
.noctis-table tbody tr{border-top:1px solid hsl(var(--border-subtle));}
.noctis-table td{padding:0 14px;height:var(--row-h);vertical-align:middle;}
.noctis-table__foot{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:12px 16px;border-top:1px solid hsl(var(--border-subtle));background:hsl(var(--surface-raised));}
.noctis-table__footnote{font:400 12px/1.4 var(--font-ui);color:hsl(var(--text-tertiary));}
`;
if (typeof document !== 'undefined' && !document.getElementById('noctis-table-css')) {
  const s = document.createElement('style'); s.id = 'noctis-table-css'; s.textContent = NOCTIS_TABLE_CSS;
  document.head.appendChild(s);
}

/**
 * Table — tabla de trabajo del núcleo. Números a la derecha en tabular; pills de
 * estado y acciones por fila se pasan como nodos en las celdas. Paginación por
 * keyset ("Cargar más"): sin números de página, total ni salto. El kardex hereda
 * esto sumando saldo corrido. `minWidth` habilita scroll horizontal en táctil.
 */
export function Table({ columns = [], rows = [], footNote, onLoadMore, loadMoreLabel = 'Cargar más', minWidth = 640 }) {
  return (
    <div className="noctis-table-wrap">
      <div className="noctis-table-scroll">
        <table className="noctis-table" style={{ minWidth }}>
          <thead>
            <tr>{columns.map((c, i) => (
              <th key={i} className={c.numeric ? 'num' : undefined} style={c.align === 'right' ? { textAlign: 'right' } : undefined}>{c.label}</th>
            ))}</tr>
          </thead>
          <tbody>
            {rows.map((r, ri) => (
              <tr key={ri}>{columns.map((c, ci) => (
                <td key={ci} className={c.numeric ? 'num' : undefined} style={c.align === 'right' ? { textAlign: 'right' } : undefined}>
                  {r[c.key]}
                </td>
              ))}</tr>
            ))}
          </tbody>
        </table>
      </div>
      {(footNote || onLoadMore) && (
        <div className="noctis-table__foot">
          {footNote && <span className="noctis-table__footnote">{footNote}</span>}
          {onLoadMore && (
            <button
              onClick={onLoadMore}
              style={{ height: 34, padding: '0 16px', borderRadius: 10, border: '1px solid hsl(var(--border-strong))', background: 'hsl(var(--surface-raised))', color: 'hsl(var(--text-primary))', font: '500 12px/1 var(--font-ui)', cursor: 'pointer', marginLeft: 'auto' }}
            >{loadMoreLabel}</button>
          )}
        </div>
      )}
    </div>
  );
}
