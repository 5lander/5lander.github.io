import React from 'react';

/**
 * Shell — esqueleto primitivo compartido: topbar + sidebar + slots que cada app
 * llena distinto. El chrome es SIEMPRE neutro de casa; el único acento del tenant
 * aquí es el ítem de nav ACTIVO. El núcleo define el esqueleto y los slots; el
 * chrome específico (CompanySelector, sidebar-por-permisos) es piel de cada app.
 *
 * `nav`: [{ section, items: [{ label, active, badge, disabled, children:[...] }] }]
 */
export function Shell({ tenantLogo, companySelector, user, mode = 'light', onToggleMode, onLogout, nav = [], footerLegal, children }) {
  const modeIcon = mode === 'dark' ? '☾' : '☀';
  return (
    <div style={{ border: '1px solid hsl(var(--border-subtle))', borderRadius: 14, overflow: 'hidden', background: 'hsl(var(--surface-base))' }}>
      {/* topbar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '0 16px', height: 56, background: 'hsl(var(--surface-raised))', borderBottom: '1px solid hsl(var(--border-subtle))' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '4px 10px 4px 4px', borderRadius: 8, background: 'hsl(var(--surface-sunken))' }}>
          {tenantLogo || <><span style={{ width: 24, height: 24, borderRadius: 6, background: 'hsl(var(--text-primary))' }} /><span style={{ color: 'hsl(var(--text-secondary))', fontSize: 12, fontWeight: 600 }}>slot: logo tenant</span></>}
        </div>
        {companySelector}
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 12 }}>
          {user && <span style={{ color: 'hsl(var(--text-secondary))', fontSize: 12 }}>{user}</span>}
          <button type="button" onClick={onToggleMode} aria-label="Cambiar modo" style={{ width: 32, height: 32, borderRadius: 8, border: '1px solid hsl(var(--border-strong))', background: 'hsl(var(--surface-base))', color: 'hsl(var(--text-secondary))', cursor: 'pointer' }}>{modeIcon}</button>
          <button type="button" onClick={onLogout} style={{ height: 30, padding: '0 12px', borderRadius: 8, border: '1px solid hsl(var(--border-strong))', background: 'hsl(var(--surface-base))', color: 'hsl(var(--text-secondary))', fontSize: 12, cursor: 'pointer' }}>Salir</button>
        </div>
      </div>
      <div style={{ display: 'flex', minHeight: 230 }}>
        {/* sidebar */}
        <div style={{ width: 210, flex: 'none', background: 'hsl(var(--surface-sunken))', borderRight: '1px solid hsl(var(--border-subtle))', padding: '12px 10px', display: 'flex', flexDirection: 'column', gap: 2 }}>
          {nav.map((grp, gi) => (
            <React.Fragment key={gi}>
              {grp.section && <div style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: '.08em', color: 'hsl(var(--text-tertiary))', padding: '6px 8px' }}>{grp.section}</div>}
              {grp.items.map((it, ii) => (
                <React.Fragment key={ii}>
                  <div style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8, padding: '8px 10px', borderRadius: 8, fontSize: 13,
                    ...(it.active
                      ? { background: 'hsl(var(--brand-primary))', color: 'hsl(var(--brand-foreground))', fontWeight: 600 }
                      : { color: it.disabled ? 'hsl(var(--text-tertiary))' : 'hsl(var(--text-secondary))' }),
                  }}>
                    <span>{it.label}</span>
                    {it.badge && <span style={{ fontSize: 10, padding: '1px 7px', borderRadius: 999, background: 'hsl(var(--surface-base))', border: '1px solid hsl(var(--border-subtle))', color: 'hsl(var(--text-tertiary))', fontWeight: 400 }}>{it.badge}</span>}
                  </div>
                  {it.children && it.children.map((c, ci) => (
                    <div key={ci} style={{ padding: '6px 10px 6px 22px', fontSize: 12, color: 'hsl(var(--text-secondary))' }}>{c}</div>
                  ))}
                </React.Fragment>
              ))}
            </React.Fragment>
          ))}
        </div>
        {/* content */}
        <div style={{ flex: 1, padding: '16px 18px', background: 'hsl(var(--surface-base))' }}>{children}</div>
      </div>
      {/* footer */}
      <div style={{ padding: '10px 16px', borderTop: '1px solid hsl(var(--border-subtle))', background: 'hsl(var(--surface-raised))', display: 'flex', justifyContent: 'space-between', fontSize: 11, color: 'hsl(var(--text-tertiary))' }}>
        <span>{footerLegal || 'slot footer · línea legal del tenant'}</span>
        <span style={{ fontWeight: 500, color: 'hsl(var(--text-secondary))' }}>Powered by Noctis Commerce</span>
      </div>
    </div>
  );
}
