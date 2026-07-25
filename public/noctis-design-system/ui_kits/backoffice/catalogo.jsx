/* Noctis · backoffice — CATÁLOGO de módulos/submódulos/acciones. APPEND-ONLY:
   el status es active/deprecated y NO existe borrado físico → la UI no ofrece
   ninguna afordancia de eliminar, solo DEPRECAR. Deprecar es acción de ALCANCE
   PLATAFORMA (cascadea a todos los tenants) → Sheet del núcleo con escritura del
   nombre + línea de impacto. El path de máquina NUNCA se muestra. */
const CAT = window.NoctisCommerceDesignSystem_4dfd35;
const { Button: CBtn, Card: CCard, Icon: CIcon, Badge: CBadge } = CAT;
const CD = window.BackofficeData;

/* Impacto: cuántos tenants tienen habilitado ≥1 submódulo de un módulo (o el sub). */
function tenantsWithSub(subId) {
  return Object.values(CD.ENTITLEMENTS).filter((e) => !!e[subId]).length;
}
function tenantsWithModule(m) {
  const ids = new Set(m.submodulos.map((s) => s.id));
  return Object.values(CD.ENTITLEMENTS).filter((e) => Object.keys(e).some((k) => ids.has(k) && e[k])).length;
}

function ModuleCatalog({ sectionState, onRetry, onToast }) {
  // status deprecado LOCAL de la sesión (encima del dato base), por id de módulo/sub
  const [depd, setDepd] = React.useState({});
  const [open, setOpen] = React.useState(() => new Set(['productos']));
  const [showDeprecated, setShowDeprecated] = React.useState(true);
  const [sheet, setSheet] = React.useState(null); // { kind:'module'|'sub', id, display, impact }
  const [pending, setPending] = React.useState(false);

  const statusOf = (base, id) => depd[id] || base;

  const header = (
    <window.BoPageHeader
      title="Catálogo de módulos"
      meta={<><CIcon name="package" size={16} style={{ color: 'hsl(var(--text-tertiary))' }} /><span>Append-only · los ítems se deprecan, nunca se borran</span></>}
    />
  );

  if (sectionState === 'loading') return <>{header}<div style={{ marginTop: 8 }}><window.BoTableSkeleton columns={[{ key: 'a', w: '50%' }, { key: 'b', pill: true, w: '25%' }]} rows={6} /></div></>;
  if (sectionState === 'error') return <>{header}<div style={{ marginTop: 8 }}><window.BoErrorState context="el catálogo de módulos" errorId="ERR-CAT-5108" onRetry={onRetry} /></div></>;
  if (sectionState === 'forbidden') return <>{header}<div style={{ marginTop: 8 }}><window.BoForbiddenState resource="el catálogo de módulos" onHome={onRetry} /></div></>;

  const openDeprecate = (kind, node) => {
    const impact = kind === 'module' ? tenantsWithModule(node) : tenantsWithSub(node.id);
    setSheet({ kind, id: node.id, display: node.display, impact });
  };
  const confirmDeprecate = () => {
    setPending(true);
    setTimeout(() => {
      const next = { ...depd, [sheet.id]: 'deprecated' };
      // deprecar un módulo cascadea a sus submódulos y acciones
      if (sheet.kind === 'module') {
        const m = CD.MODULES.find((x) => x.id === sheet.id);
        m.submodulos.forEach((s) => { next[s.id] = 'deprecated'; });
      }
      setDepd(next); setPending(false); setSheet(null);
      onToast(`«${sheet.display}» deprecado · los ${sheet.impact} tenant${sheet.impact === 1 ? '' : 's'} que ya lo tenían lo conservan.`);
    }, 950);
  };

  const modules = CD.MODULES;
  /* Alcance declarado UNA VEZ a nivel de pantalla. En el catálogo TODA acción
     (deprecar) es de alcance plataforma, así que un chip por fila no discriminaría
     nada — estaría en el 100% de los ítems y el ojo lo filtraría. La fricción que
     protege la acción es el Sheet con escritura del nombre e impacto, intacto. */
  const notice = (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 16 }}>
      <window.BoPlatformScopeBanner>
        Toda acción de este catálogo afecta a la plataforma completa: deprecar un ítem cascadea a cada tenant. Cada deprecación pide escribir el nombre del ítem y muestra cuántos tenants lo tienen habilitado antes de confirmar.
      </window.BoPlatformScopeBanner>
      <CAT.Alert tone="info">
        <div style={{ fontWeight: 600, marginBottom: 3 }}>Este catálogo es append-only</div>
        <div style={{ fontSize: 13 }}>Un ítem no se elimina: se depreca. Los tenants que ya lo tenían habilitado lo conservan (grandfathering); no se puede habilitar en tenants nuevos. Por eso no hay acción de borrar — solo deprecar.</div>
      </CAT.Alert>
    </div>
  );

  return (
    <>
      {header}
      {notice}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14, flexWrap: 'wrap' }}>
        <window.BoSegmented ariaLabel="Ver deprecados" value={showDeprecated ? 'all' : 'active'} onChange={(v) => setShowDeprecated(v === 'all')}
          options={[{ value: 'all', label: 'Todos' }, { value: 'active', label: 'Solo activos' }]} />
        <span style={{ fontSize: 12, color: 'hsl(var(--text-tertiary))' }}>El estado deprecado usa la pill terminal del núcleo — el mismo lenguaje que «Descontinuado» en commerce.</span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {modules.map((m) => {
          const mStatus = m.intrinsic ? 'active' : statusOf(m.status, m.id);
          const isDep = mStatus === 'deprecated';
          if (isDep && !showDeprecated) return null;
          const expanded = open.has(m.id);
          const impact = tenantsWithModule(m);
          return (
            <div key={m.id} style={{ border: '1px solid hsl(var(--border-subtle))', borderRadius: 12, background: 'hsl(var(--surface-raised))', overflow: 'hidden' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '14px 16px' }}>
                <CIcon module={m.id} size={20} style={{ color: 'hsl(var(--text-secondary))', flex: 'none' }} />
                <button type="button" onClick={() => setOpen((s) => { const n = new Set(s); n.has(m.id) ? n.delete(m.id) : n.add(m.id); return n; })} aria-expanded={expanded}
                  style={{ display: 'flex', alignItems: 'center', gap: 8, border: 0, background: 'none', padding: 0, cursor: 'pointer', font: 'inherit', minWidth: 0 }}>
                  <span style={{ fontWeight: 600, fontSize: 15, color: 'hsl(var(--text-primary))' }}>{m.display}</span>
                  <span aria-hidden="true" style={{ color: 'hsl(var(--text-tertiary))', transform: expanded ? 'rotate(180deg)' : 'none', transition: 'transform .12s', fontSize: 11 }}>▾</span>
                </button>
                <StatusMark status={mStatus} intrinsic={m.intrinsic} />
                <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span style={{ fontSize: 12, color: 'hsl(var(--text-tertiary))', fontVariantNumeric: 'tabular-nums' }}>{m.submodulos.length} submódulos</span>
                  {/* solo DEPRECAR — nunca eliminar. Sin chip de alcance por fila: el
                      alcance ya está declarado a nivel de pantalla. */}
                  {!m.intrinsic && !isDep && (
                    <CBtn variant="danger-ghost" size="sm" onClick={() => openDeprecate('module', m)}>Deprecar</CBtn>
                  )}
                </div>
              </div>
              {expanded && (
                <div style={{ borderTop: '1px solid hsl(var(--border-subtle))', padding: '10px 16px 14px' }}>
                  <p style={{ margin: '2px 0 12px', fontSize: 12.5, color: 'hsl(var(--text-secondary))', maxWidth: '82ch' }}>{m.descripcion}</p>
                  {isDep && <div style={{ marginBottom: 12 }}><ImpactNote impact={impact} /></div>}
                  {m.intrinsic && <div style={{ marginBottom: 10, fontSize: 12.5, color: 'hsl(var(--text-secondary))' }}>Intrínseco: presente en toda cuenta. No se deprecas ni se deshabilita.</div>}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {m.submodulos.map((s) => {
                      const sStatus = m.intrinsic ? 'active' : statusOf(s.status, s.id);
                      const sDep = sStatus === 'deprecated';
                      if (sDep && !showDeprecated) return null;
                      const sImpact = tenantsWithSub(s.id);
                      return (
                        <div key={s.id} style={{ border: '1px solid hsl(var(--border-subtle))', borderRadius: 10, background: 'hsl(var(--surface-base))', padding: '11px 13px' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
                            <span style={{ fontWeight: 500, fontSize: 13.5, color: sDep ? 'hsl(var(--text-secondary))' : 'hsl(var(--text-primary))' }}>{s.display}</span>
                            <StatusMark status={sStatus} small />
                            <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 10 }}>
                              {!m.intrinsic && !sDep && (
                                <CBtn variant="danger-ghost" size="sm" onClick={() => openDeprecate('sub', s)}>Deprecar</CBtn>
                              )}
                            </div>
                          </div>
                          {/* acciones (nivel 3) — display_name, jamás el path */}
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 9 }}>
                            {s.acciones.map((a) => {
                              const aDep = m.intrinsic ? false : statusOf(a.status, a.path) === 'deprecated' || sDep;
                              return (
                                <span key={a.path} style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 11.5, padding: '3px 9px', borderRadius: 999, border: '1px solid hsl(var(--border-subtle))', background: 'hsl(var(--surface-raised))', color: aDep ? 'hsl(var(--text-tertiary))' : 'hsl(var(--text-secondary))', textDecoration: aDep ? 'line-through' : 'none' }}>
                                  {a.display}
                                </span>
                              );
                            })}
                          </div>
                          {sDep && <div style={{ marginTop: 9 }}><ImpactNote impact={sImpact} /></div>}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Sheet de alcance plataforma con escritura del nombre */}
      {sheet && (
        <window.BoDangerConfirmSheet
          open={!!sheet}
          onClose={() => setSheet(null)}
          title={`Deprecar «${sheet.display}»`}
          confirmLabel="Deprecar"
          matchText={sheet.display}
          pending={pending}
          onConfirm={confirmDeprecate}
          warning={sheet.kind === 'module'
            ? 'Deprecar el módulo cascadea a todos sus submódulos y acciones. No se puede eliminar; queda como deprecado en todo el catálogo.'
            : 'Deprecar el submódulo cascadea a sus acciones. No se puede eliminar; queda como deprecado en todo el catálogo.'}
          impact={sheet.impact > 0
            ? `${sheet.impact} tenant${sheet.impact === 1 ? '' : 's'} lo tiene${sheet.impact === 1 ? '' : 'n'} habilitado — lo conservará${sheet.impact === 1 ? '' : 'n'} (grandfathering). No se podrá habilitar en tenants nuevos.`
            : 'Ningún tenant lo tiene habilitado actualmente. No se podrá habilitar en tenants nuevos.'}
        >
          <div style={{ fontSize: 13, color: 'hsl(var(--text-secondary))' }}>Escriba el nombre para confirmar. Recuerde: esto es append-only — deprecar es reversible reactivando el ítem, pero el borrado físico no existe.</div>
        </window.BoDangerConfirmSheet>
      )}
    </>
  );
}

function StatusMark({ status, intrinsic, small }) {
  if (intrinsic) {
    return <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: small ? 10 : 10.5, fontWeight: 600, padding: '2px 9px', borderRadius: 999, background: 'hsl(var(--surface-sunken))', border: '1px solid hsl(var(--border-subtle))', color: 'hsl(var(--text-secondary))' }}><span aria-hidden="true">●</span> Intrínseco</span>;
  }
  /* Deprecado = pill terminal del núcleo (igual que «Descontinuado» en commerce).
     Sin atenuación ni borde punteado: esos signos son "futuro pendiente" (Pronto /
     slot reservado) y deprecado es pasado terminal. */
  if (status === 'deprecated') return <CBadge tone="terminal">Deprecado</CBadge>;
  return <CBadge tone="success" dot>Activo</CBadge>;
}

function ImpactNote({ impact }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 9, fontSize: 12.5, color: 'hsl(var(--text-secondary))' }}>
      <CIcon name="building-2" size={16} style={{ color: 'hsl(var(--text-tertiary))', flex: 'none' }} />
      <span>{impact > 0 ? `${impact} tenant${impact === 1 ? '' : 's'} lo conserva${impact === 1 ? '' : 'n'} (grandfathered). No se habilita en tenants nuevos.` : 'Ningún tenant lo tiene. No se habilita en tenants nuevos.'}</span>
    </div>
  );
}

Object.assign(window, { BoModuleCatalog: ModuleCatalog });
