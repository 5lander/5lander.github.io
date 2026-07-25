/* Noctis · commerce — kit compartido del prototipo: helpers de gating, confirm
   inline de 2 pasos, y los CUATRO estados por pantalla (vacío · cargando · error
   · 403) construidos SOBRE los primitivos del núcleo. No reimplementa primitivos. */
const NS = window.NoctisCommerceDesignSystem_4dfd35;
const { Button, Badge, Card, Alert, EmptyState, Skeleton, Spinner, Table } = NS;

/* ── gating ───────────────────────────────────────────────────────────────
   Tres capas: sidebar (módulo con >=1 permiso) → sección (fail-closed: bounce a
   /dashboard) → pantalla/CTA (ocultar, no deshabilitar). */
const can = (profile, perm) => !perm || profile.perms.includes(perm);

/* ── micro-label de sección (VENDER, MODO) — mayúsculas + tracking ─────────── */
function MicroLabel({ children, style }) {
  return <div style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: '.09em', color: 'hsl(var(--text-tertiary))', fontWeight: 600, ...style }}>{children}</div>;
}

/* ── breadcrumb ───────────────────────────────────────────────────────────── */
function Crumbs({ items }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'hsl(var(--text-tertiary))', marginBottom: 10, flexWrap: 'wrap' }}>
      {items.map((c, i) => (
        <React.Fragment key={i}>
          {i > 0 && <span aria-hidden="true">›</span>}
          {c.onClick
            ? <button type="button" onClick={c.onClick} style={{ border: 0, background: 'none', padding: 0, cursor: 'pointer', color: 'hsl(var(--link))', font: 'inherit' }}>{c.label}</button>
            : <span style={i === items.length - 1 ? { color: 'hsl(var(--text-secondary))' } : undefined}>{c.label}</span>}
        </React.Fragment>
      ))}
    </div>
  );
}

/* ── encabezado de página ─────────────────────────────────────────────────── */
function PageHeader({ title, meta, actions }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16, marginBottom: 16, flexWrap: 'wrap' }}>
      <div style={{ minWidth: 0 }}>
        <h1 style={{ font: '600 24px/30px var(--font-ui)', letterSpacing: '-.015em', margin: 0 }}>{title}</h1>
        {meta && <div style={{ marginTop: 6, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap', color: 'hsl(var(--text-secondary))', fontSize: 13 }}>{meta}</div>}
      </div>
      {actions && <div style={{ display: 'flex', gap: 8, flexShrink: 0 }}>{actions}</div>}
    </div>
  );
}

/* ── confirm inline de 2 pasos (destructivas) — NUNCA Dialog ────────────────
   Paso 1: botón peligro-fantasma. Paso 2 (armado): pregunta + confirmar/cancelar
   en la misma fila/Card. `pending` muestra spinner en confirmar. */
function ConfirmInline({ label, question, confirmLabel = 'Confirmar', onConfirm, pending, size = 'sm', tone = 'danger', compact }) {
  const [armed, setArmed] = React.useState(false);
  if (!armed) {
    return <Button variant={tone === 'danger' ? 'danger-ghost' : 'ghost'} size={size} onClick={() => setArmed(true)}>{label}</Button>;
  }
  return (
    <div role="group" aria-label={question} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
      {!compact && <span style={{ fontSize: 12, color: 'hsl(var(--text-secondary))' }}>{question}</span>}
      <Button variant={tone === 'danger' ? 'danger' : 'primary'} size={size} loading={pending} onClick={() => onConfirm && onConfirm(() => setArmed(false))}>{confirmLabel}</Button>
      <Button variant="ghost" size={size} disabled={pending} onClick={() => setArmed(false)}>Cancelar</Button>
    </div>
  );
}

/* ── KIT DE ESTADOS ─────────────────────────────────────────────────────────
   Cargando: Skeleton para listas/tablas. */
function TableSkeleton({ columns, rows = 5 }) {
  const skRows = Array.from({ length: rows }, () =>
    Object.fromEntries(columns.map((c) => [c.key, <Skeleton variant={c.pill ? 'pill' : 'line'} width={c.w || '80%'} />]))
  );
  return <Table columns={columns} rows={skRows} footNote={<span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}><Spinner size="sm" /> Cargando…</span>} />;
}

/* Error con errorId visible + reintento. El error NUNCA va por toast. */
function ErrorState({ errorId = 'ERR-7F3A2', onRetry, context = 'la sección' }) {
  return (
    <Card>
      <Alert tone="danger">
        <div style={{ fontWeight: 600, marginBottom: 4 }}>No se pudo cargar {context}</div>
        <div style={{ fontSize: 13 }}>Intente nuevamente. Si persiste, comparta el código con soporte.</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 12, flexWrap: 'wrap' }}>
          <Button variant="secondary" size="sm" onClick={onRetry}>Reintentar</Button>
          <code style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'hsl(var(--text-tertiary))' }}>errorId: {errorId}</code>
        </div>
      </Alert>
    </Card>
  );
}

/* 403 sin permiso — se ESCONDE lo no permitido; a nivel sección hace fail-closed. */
function ForbiddenState({ onHome, resource = 'esta sección' }) {
  return (
    <Card>
      <div style={{ padding: '28px 8px', textAlign: 'center', maxWidth: 420, margin: '0 auto' }}>
        <div style={{ width: 40, height: 40, borderRadius: 10, margin: '0 auto 14px', display: 'grid', placeItems: 'center', background: 'hsl(var(--surface-sunken))', border: '1px solid hsl(var(--border-strong))', color: 'hsl(var(--text-tertiary))', fontSize: 18 }} aria-hidden="true">⚠</div>
        <div style={{ font: '600 16px/22px var(--font-ui)' }}>No tiene permiso para ver {resource}</div>
        <p style={{ margin: '6px 0 16px', color: 'hsl(var(--text-secondary))', fontSize: 13 }}>Su perfil no incluye este acceso. Si cree que es un error, solicítelo a un administrador de su empresa.</p>
        <Button variant="secondary" size="sm" onClick={onHome}>Volver al inicio</Button>
      </div>
    </Card>
  );
}

/* Vacío con la marca de casa. */
function ListEmpty({ title, description, action }) {
  return <Card><div style={{ padding: '20px 8px' }}><EmptyState title={title} description={description} action={action} /></div></Card>;
}

/* Overlay de gate/submit (spinner puntual sin layout). */
function GateOverlay({ text }) {
  return (
    <div style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center', background: 'hsl(var(--surface-base) / .72)', backdropFilter: 'blur(2px)', zIndex: 20 }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
        <Spinner size="lg" />
        <span style={{ fontSize: 13, color: 'hsl(var(--text-secondary))' }}>{text}</span>
      </div>
    </div>
  );
}

/* Segmented control genérico (toolbar de prototipo + selector de estado demo). */
function Segmented({ value, onChange, options, ariaLabel }) {
  return (
    <div role="radiogroup" aria-label={ariaLabel} style={{ display: 'inline-flex', gap: 2, padding: 2, borderRadius: 8, background: 'hsl(var(--surface-sunken))', border: '1px solid hsl(var(--border-subtle))' }}>
      {options.map((o) => {
        const active = o.value === value;
        return (
          <button key={o.value} type="button" role="radio" aria-checked={active} onClick={() => onChange(o.value)}
            style={{ border: 0, cursor: 'pointer', borderRadius: 6, padding: '5px 10px', fontSize: 12, fontWeight: active ? 600 : 500, fontFamily: 'var(--font-ui)',
              background: active ? 'hsl(var(--surface-raised))' : 'transparent',
              color: active ? 'hsl(var(--text-primary))' : 'hsl(var(--text-secondary))',
              boxShadow: active ? '0 1px 2px hsl(240 6% 10% / .08)' : 'none' }}>
            {o.label}
          </button>
        );
      })}
    </div>
  );
}

Object.assign(window, { CanPerm: can, MicroLabel, Crumbs, PageHeader, ConfirmInline, TableSkeleton, ErrorState, ForbiddenState, ListEmpty, GateOverlay, Segmented });
