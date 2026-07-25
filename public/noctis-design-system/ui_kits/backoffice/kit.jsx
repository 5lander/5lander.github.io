/* Noctis · backoffice — kit del prototipo: helpers de layout, los CUATRO estados
   del kit (vacío · cargando · error con errorId · 403) y — el aporte de sistema de
   este corte — el LENGUAJE VISUAL DE ACCIÓN SENSIBLE por alcance. Todo construido
   SOBRE los primitivos del núcleo; no reimplementa ninguno. */
const NS = window.NoctisCommerceDesignSystem_4dfd35;
const { Button, Badge, Card, Alert, EmptyState, Skeleton, Spinner, Table, Sheet, Input, Icon } = NS;

/* ── micro-label de sección (mayúsculas + tracking) ───────────────────────── */
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
    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16, marginBottom: 18, flexWrap: 'wrap' }}>
      <div style={{ minWidth: 0 }}>
        <h1 style={{ font: '600 26px/32px var(--font-ui)', letterSpacing: '-.02em', margin: 0 }}>{title}</h1>
        {meta && <div style={{ marginTop: 7, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap', color: 'hsl(var(--text-secondary))', fontSize: 13 }}>{meta}</div>}
      </div>
      {actions && <div style={{ display: 'flex', gap: 8, flexShrink: 0, flexWrap: 'wrap', justifyContent: 'flex-end' }}>{actions}</div>}
    </div>
  );
}

/* ── LENGUAJE DE ACCIÓN SENSIBLE ────────────────────────────────────────────
   Tres piezas, escaladas por ALCANCE (blast radius):

   1. PlatformScopeChip — marcador de alcance. Regla de uso: SOLO donde DISCRIMINA,
      es decir donde una acción de plataforma convive con acciones de alcance menor.
      Un marcador presente en el 100% de los ítems de una pantalla no marca nada: el
      ojo lo filtra justo cuando debería pesar. Por eso el Catálogo (donde toda acción
      es de plataforma) declara el alcance UNA vez a nivel de pantalla, sin chip por
      fila. Informativo, no interactivo. Ícono de ALCANCE (globo = afecta a todos), no
      de advertencia: el alcance no es riesgo, y un ítem activo y sano con ⚠ al lado
      se lee como "tiene un problema".
   2. ConfirmInline — fricción BAJA: acciones reversibles/rutinarias. Patrón VIGENTE
      del sistema, sin cambios: 2 pasos en la propia fila/Card.
   3. DangerConfirmSheet — fricción ALTA: Sheet del núcleo con ESCRITURA DEL NOMBRE +
      línea de impacto. Se escala por GRAVEDAD, que tiene dos disparadores independientes:
        · alcance plataforma (cascadea a TODOS los tenants) — deprecar en el catálogo;
        · gravedad dentro de UN tenant — suspender la cuenta deja sin operar a la PYME.
      En ambos casos la fricción de escribir el nombre es la que carga el peso. `scope`
      decide si el alcance es plataforma (con su marcador) o tenant (sin él: poner el
      globo donde el efecto no cruza tenants mentiría sobre el alcance). */

function PlatformScopeChip({ compact }) {
  return (
    <span title="Esta acción afecta a todos los tenants de la plataforma"
      style={{ display: 'inline-flex', alignItems: 'center', gap: 5, height: 20, padding: compact ? '0 8px 0 6px' : '0 10px 0 7px', borderRadius: 999,
        background: 'hsl(var(--surface-sunken))', border: '1px solid hsl(var(--border-strong))', color: 'hsl(var(--text-secondary))',
        fontSize: 10.5, fontWeight: 600, letterSpacing: '.02em', whiteSpace: 'nowrap', flex: 'none' }}>
      <Icon name="globe" size={12} style={{ flex: 'none' }} />
      {compact ? 'Plataforma' : 'Alcance: plataforma'}
    </span>
  );
}

/* Declaración de alcance a NIVEL DE PANTALLA — para pantallas donde toda acción es
   de alcance plataforma (el Catálogo). Reemplaza al chip por fila: dice lo mismo una
   vez, en el lugar donde todavía informa. */
function PlatformScopeBanner({ children }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 11, padding: '12px 14px', borderRadius: 10, background: 'hsl(var(--surface-sunken))', border: '1px solid hsl(var(--border-strong))' }}>
      <Icon name="globe" size={18} style={{ color: 'hsl(var(--text-secondary))', flex: 'none', marginTop: 1 }} />
      <div style={{ minWidth: 0 }}>
        <div style={{ fontWeight: 600, fontSize: 13.5, color: 'hsl(var(--text-primary))', marginBottom: 2 }}>Alcance: plataforma</div>
        <div style={{ fontSize: 13, color: 'hsl(var(--text-secondary))', maxWidth: '80ch' }}>{children}</div>
      </div>
    </div>
  );
}

/* Confirm inline de 2 pasos — alcance TENANT. NUNCA Dialog. */
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

/* DangerConfirmSheet — alcance PLATAFORMA. Sheet del núcleo + escritura del nombre.
   `matchText` es el texto exacto a escribir para armar el botón. `impact` es la línea
   de radio ("N tenants lo tienen habilitado"). Se cierra con Esc / Cancelar. */
function DangerConfirmSheet({ open, onClose, title, confirmLabel = 'Deprecar', matchText, impact, warning, warningTitle, scope = 'platform', pending, onConfirm, children }) {
  const [typed, setTyped] = React.useState('');
  React.useEffect(() => { if (open) setTyped(''); }, [open]);
  const armed = typed.trim() === matchText;
  const isPlatform = scope === 'platform';
  return (
    <Sheet open={open} onClose={pending ? undefined : onClose} title={
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>{title}{isPlatform && <PlatformScopeChip />}</span>
    } footer={
      <>
        <Button variant="ghost" disabled={pending} onClick={onClose}>Cancelar</Button>
        <Button variant="danger" disabled={!armed} loading={pending} onClick={onConfirm}>{confirmLabel}</Button>
      </>
    }>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        <Alert tone="warning">
          <div style={{ fontWeight: 600, marginBottom: 3 }}>{warningTitle || (isPlatform ? 'Esta acción afecta a todos los tenants' : 'Esta acción interrumpe la operación del tenant')}</div>
          <div style={{ fontSize: 13 }}>{warning}</div>
        </Alert>
        {children}
        {impact && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px', borderRadius: 10, background: 'hsl(var(--surface-sunken))', border: '1px solid hsl(var(--border-subtle))', fontSize: 13, color: 'hsl(var(--text-secondary))' }}>
            <Icon name={isPlatform ? 'building-2' : 'users'} size={18} style={{ color: 'hsl(var(--text-tertiary))', flex: 'none' }} />
            <span>{impact}</span>
          </div>
        )}
        <div>
          <Input label={<>Para confirmar, escriba <b style={{ fontFamily: 'var(--font-mono)', color: 'hsl(var(--text-primary))' }}>{matchText}</b></>}
            value={typed} onChange={(e) => setTyped(e.target.value)} placeholder={matchText} autoFocus
            helper={isPlatform ? 'La escritura del nombre evita deprecaciones accidentales de alcance plataforma.' : 'La escritura del nombre evita suspensiones accidentales.'} />
        </div>
      </div>
    </Sheet>
  );
}

/* ── KIT DE ESTADOS ───────────────────────────────────────────────────────── */
/* Cargando: Skeleton para tablas. */
function TableSkeleton({ columns, rows = 6 }) {
  const skRows = Array.from({ length: rows }, () =>
    Object.fromEntries(columns.map((c) => [c.key, <Skeleton variant={c.pill ? 'pill' : 'line'} width={c.w || '80%'} />]))
  );
  return <Table columns={columns} rows={skRows} footNote={<span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}><Spinner size="sm" /> Cargando…</span>} />;
}

/* Error con errorId visible + reintento. El error NUNCA va por toast. */
function ErrorState({ errorId = 'ERR-9C4E1', onRetry, context = 'la sección' }) {
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

/* 403 — personal de plataforma sin la capacidad requerida. */
function ForbiddenState({ onHome, resource = 'esta sección' }) {
  return (
    <Card>
      <div style={{ padding: '28px 8px', textAlign: 'center', maxWidth: 440, margin: '0 auto' }}>
        <div style={{ width: 40, height: 40, borderRadius: 10, margin: '0 auto 14px', display: 'grid', placeItems: 'center', background: 'hsl(var(--surface-sunken))', border: '1px solid hsl(var(--border-strong))', color: 'hsl(var(--text-tertiary))', fontSize: 18 }} aria-hidden="true">⚠</div>
        <div style={{ font: '600 16px/22px var(--font-ui)' }}>No tiene permiso para ver {resource}</div>
        <p style={{ margin: '6px 0 16px', color: 'hsl(var(--text-secondary))', fontSize: 13 }}>Su cuenta de plataforma no incluye esta capacidad. Solicítela a un administrador de plataforma con el rol correspondiente.</p>
        <Button variant="secondary" size="sm" onClick={onHome}>Volver al inicio</Button>
      </div>
    </Card>
  );
}

/* Vacío con la marca de casa. */
function ListEmpty({ title, description, action }) {
  return <Card><div style={{ padding: '20px 8px' }}><EmptyState title={title} description={description} action={action} /></div></Card>;
}

/* Overlay puntual de transición (spinner sin layout). */
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

/* Segmented control genérico. */
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

/* StatusPill — Badge del núcleo alimentado por el mapa de estado del negocio. */
function StatusPill({ meta }) {
  return <Badge tone={meta.tone} dot={meta.dot}>{meta.label}</Badge>;
}

Object.assign(window, {
  BoMicroLabel: MicroLabel, BoCrumbs: Crumbs, BoPageHeader: PageHeader,
  BoConfirmInline: ConfirmInline, BoPlatformScopeChip: PlatformScopeChip, BoPlatformScopeBanner: PlatformScopeBanner, BoDangerConfirmSheet: DangerConfirmSheet,
  BoTableSkeleton: TableSkeleton, BoErrorState: ErrorState, BoForbiddenState: ForbiddenState,
  BoListEmpty: ListEmpty, BoGateOverlay: GateOverlay, BoSegmented: Segmented, BoStatusPill: StatusPill,
});
