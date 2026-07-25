/* Noctis · commerce — VARIANTE (nuevo · detalle · editar) + BarcodesSection.
   La sección de códigos: pill "primario", acciones editar / fijar-primario /
   eliminar con confirm inline de 2 pasos POR FILA, y TRES conflictos 409
   diferenciados: duplicado → banner root; carrera de primario y borrar-el-primario
   → Alert POR FILA (no banner). */
const VNS = window.NoctisCommerceDesignSystem_4dfd35;
const { Button: VBtn, Input: VInput, Table: VTable, Badge: VBadge, Card: VCard, Alert: VAlert } = VNS;

/* ── BarcodesSection (embebida en detalle de variante) ─────────────────────── */
function BarcodesSection({ variant, profile, sectionState, onRetry, onNewBarcode, onEditBarcode }) {
  const { CanPerm, ConfirmInline, ErrorState, ForbiddenState, ListEmpty, Segmented } = window;
  const canWrite = CanPerm(profile, 'productos.write');
  const seed = window.CommerceData.BARCODES[variant.id] || [];
  const [rows, setRows] = React.useState(seed);
  const [rowConflict, setRowConflict] = React.useState({}); // { [id]: mensaje }  (409 por fila)
  const [demo, setDemo] = React.useState('none'); // simulador de 409 para el prototipo

  const setPrimary = (id) => {
    setRowConflict({});
    if (demo === 'race') { setRowConflict({ [id]: 'Otro usuario fijó un código primario distinto hace instantes. Actualice la sección para ver el estado real. (409 · carrera de "fijar primario")' }); return; }
    setRows((rs) => rs.map((b) => ({ ...b, primary: b.id === id })));
  };
  const remove = (id, close) => {
    setRowConflict({});
    const target = rows.find((b) => b.id === id);
    // 409 real: no se puede borrar el primario; hay que fijar otro primero
    if (target?.primary || demo === 'delprimary') { setRowConflict({ [id]: 'No puede eliminar el código primario. Fije otro código como primario y vuelva a intentar. (409 · borrar-el-primario)' }); close(); return; }
    setRows((rs) => rs.filter((b) => b.id !== id)); close();
  };

  const head = (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, marginBottom: 12, flexWrap: 'wrap' }}>
      <div>
        <h2 style={{ font: '600 18px/24px var(--font-ui)', letterSpacing: '-.01em', margin: 0 }}>Códigos de barras</h2>
        <p style={{ margin: '2px 0 0', fontSize: 12, color: 'hsl(var(--text-tertiary))' }}>Un solo código primario por variante.</p>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
        {canWrite && sectionState === 'data' && rows.length > 0 && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <span style={{ fontSize: 11, color: 'hsl(var(--text-tertiary))' }}>Simular 409:</span>
            <Segmented ariaLabel="Simular conflicto 409" value={demo} onChange={(v) => { setDemo(v); setRowConflict({}); }} options={[
              { value: 'none', label: 'Ninguno' }, { value: 'dup', label: 'Duplicado' }, { value: 'race', label: 'Carrera' }, { value: 'delprimary', label: 'Borrar primario' },
            ]} />
          </div>
        )}
        {canWrite && <VBtn variant="secondary" size="sm" onClick={onNewBarcode}>Nuevo código</VBtn>}
      </div>
    </div>
  );

  if (sectionState === 'forbidden') return <div>{head}<ForbiddenState resource="los códigos de barras" onHome={onRetry} /></div>;
  if (sectionState === 'loading') return <div>{head}<window.TableSkeleton columns={[{ key: 'a', label: 'Código', w: 140 }, { key: 'b', label: 'Etiqueta', w: '70%' }, { key: 'c', label: '', align: 'right', w: 200 }]} rows={2} /></div>;
  if (sectionState === 'error') return <div>{head}<ErrorState errorId="ERR-COD-3A77" context="los códigos de barras" onRetry={onRetry} /></div>;
  if (sectionState === 'empty' || rows.length === 0) {
    return <div>{head}<div style={{ padding: '8px 4px' }}><ListEmpty title="Sin códigos de barras" description="Esta variante no tiene códigos aún. Agregue uno y márquelo como primario para venta rápida." action={canWrite ? <VBtn variant="primary" size="sm" onClick={onNewBarcode}>Nuevo código</VBtn> : null} /></div></div>;
  }

  return (
    <div>
      {head}
      {/* banner ROOT — reservado para el 409 de código DUPLICADO (al guardar en el form) */}
      {demo === 'dup' && <div style={{ marginBottom: 12 }}><VAlert tone="danger"><b>Código duplicado.</b> El código <code style={{ fontFamily: 'var(--font-mono)' }}>7861234567890</code> ya existe en otra variante de este tenant. Use un código distinto. (409 · errorId: ERR-COD-DUP)</VAlert></div>}
      <div style={{ border: '1px solid hsl(var(--border-subtle))', borderRadius: 12, overflow: 'hidden', background: 'hsl(var(--surface-raised))' }}>
        {rows.map((b, i) => (
          <div key={b.id} style={{ borderTop: i ? '1px solid hsl(var(--border-subtle))' : 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 14px', flexWrap: 'wrap' }}>
              <code style={{ fontFamily: 'var(--font-mono)', fontSize: 14, color: 'hsl(var(--text-primary))', letterSpacing: '.02em' }}>{b.codigo}</code>
              {b.primary && <VBadge tone="brand">Primario</VBadge>}
              <span style={{ fontSize: 13, color: 'hsl(var(--text-secondary))' }}>{b.etiqueta}</span>
              {canWrite && (
                <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                  {!b.primary && <VBtn variant="ghost" size="sm" onClick={() => setPrimary(b.id)}>Fijar primario</VBtn>}
                  <VBtn variant="ghost" size="sm" onClick={() => onEditBarcode(b.id)}>Editar</VBtn>
                  <ConfirmInline label="Eliminar" question="¿Eliminar este código?" confirmLabel="Eliminar" compact onConfirm={(close) => remove(b.id, close)} />
                </div>
              )}
            </div>
            {/* 409 POR FILA — carrera de primario / borrar-el-primario */}
            {rowConflict[b.id] && <div style={{ padding: '0 14px 12px' }}><VAlert tone="warning">{rowConflict[b.id]}</VAlert></div>}
          </div>
        ))}
      </div>
      <div style={{ marginTop: 8, fontSize: 11, color: 'hsl(var(--text-tertiary))' }}>Keyset · sin números de página</div>
    </div>
  );
}

/* ── Detalle de variante ────────────────────────────────────────────────────── */
function VariantDetail({ product, variant, profile, sectionState, onRetry, onBackProduct, onEdit, onNewBarcode, onEditBarcode, onToast, onDeleted }) {
  const { CanPerm, ConfirmInline, PageHeader, Crumbs } = window;
  const canWrite = CanPerm(profile, 'productos.write');
  const [pending, setPending] = React.useState(false);
  const del = (close) => { setPending(true); setTimeout(() => { setPending(false); close(); onToast('Variante eliminada.'); onDeleted(); }, 700); };
  return (
    <>
      <Crumbs items={[{ label: 'Inicio' }, { label: 'Productos', onClick: onBackProduct }, { label: product.nombre, onClick: onBackProduct }, { label: variant.nombre }]} />
      <PageHeader
        title={variant.nombre}
        meta={<>
          <code style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'hsl(var(--text-secondary))' }}>{variant.sku}</code>
          <span style={{ color: 'hsl(var(--text-tertiary))' }}>·</span>
          <span>{variant.atributos}</span>
        </>}
        actions={canWrite ? <>
          <VBtn variant="secondary" onClick={onEdit}>Editar variante</VBtn>
          <ConfirmInline label="Eliminar" question="¿Eliminar esta variante?" confirmLabel="Sí, eliminar" size="md" pending={pending} onConfirm={del} />
        </> : null}
      />
      <div style={{ height: 8 }} />
      <BarcodesSection variant={variant} profile={profile} sectionState={sectionState} onRetry={onRetry} onNewBarcode={onNewBarcode} onEditBarcode={onEditBarcode} />
    </>
  );
}

/* ── Form de variante (nuevo/editar) ──────────────────────────────────────────── */
function VariantForm({ product, variant, onCancel, onSaved }) {
  const editing = !!variant;
  const [nombre, setNombre] = React.useState(variant?.nombre || '');
  const [sku, setSku] = React.useState(variant?.sku || '');
  const [attrs, setAttrs] = React.useState(variant?.atributos || '');
  const [errors, setErrors] = React.useState({});
  const [pending, setPending] = React.useState(false);
  const submit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!nombre.trim()) errs.nombre = 'Ingrese el nombre de la variante.';
    if (!sku.trim()) errs.sku = 'Ingrese el SKU.';
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setPending(true); setTimeout(() => { setPending(false); onSaved(editing ? 'Variante actualizada.' : 'Variante creada.'); }, 800);
  };
  return (
    <>
      <window.Crumbs items={[{ label: 'Inicio' }, { label: 'Productos', onClick: () => onCancel('product') }, { label: product.nombre, onClick: () => onCancel('detail') }, { label: editing ? 'Editar variante' : 'Nueva variante' }]} />
      <window.PageHeader title={editing ? 'Editar variante' : 'Nueva variante'} meta={<span style={{ color: 'hsl(var(--text-tertiary))' }}>de {product.nombre}</span>} />
      <form onSubmit={submit} style={{ maxWidth: 640 }}>
        <VCard>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <VInput label="Nombre de la variante" value={nombre} onChange={(e) => setNombre(e.target.value)} error={errors.nombre} placeholder="Ej.: Azul, Cuadros, Grande" disabled={pending} />
            <VInput label="SKU" value={sku} onChange={(e) => setSku(e.target.value)} error={errors.sku} placeholder="Código interno de la variante" helper="Identificador interno; puede diferir del código de barras." disabled={pending} />
            <VInput label="Atributos" value={attrs} onChange={(e) => setAttrs(e.target.value)} placeholder="Color: azul · Tamaño: A4" helper="Pares atributo: valor, separados por punto medio." disabled={pending} />
          </div>
        </VCard>
        <div style={{ display: 'flex', gap: 8, marginTop: 16 }}>
          <VBtn variant="primary" type="submit" loading={pending}>{editing ? 'Guardar cambios' : 'Crear variante'}</VBtn>
          <VBtn variant="ghost" type="button" onClick={() => onCancel('detail')} disabled={pending}>Cancelar</VBtn>
        </div>
      </form>
    </>
  );
}

/* ── Form de código de barras (nuevo/editar) — alta/edición simple ────────────
   Guardar con código existente → banner ROOT (409 duplicado). */
function BarcodeForm({ product, variant, barcode, onCancel, onSaved }) {
  const editing = !!barcode;
  const [codigo, setCodigo] = React.useState(barcode?.codigo || '');
  const [etiqueta, setEtiqueta] = React.useState(barcode?.etiqueta || '');
  const [errors, setErrors] = React.useState({});
  const [rootError, setRootError] = React.useState('');
  const [pending, setPending] = React.useState(false);
  const submit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!codigo.trim()) errs.codigo = 'Ingrese el código.';
    else if (!/^[0-9]{8,14}$/.test(codigo.trim())) errs.codigo = 'El código debe tener entre 8 y 14 dígitos.';
    setErrors(errs); setRootError('');
    if (Object.keys(errs).length) return;
    setPending(true);
    setTimeout(() => {
      setPending(false);
      // demo: si repite el código semilla, 409 duplicado → banner root
      if (codigo.trim() === '7861234567890' && !editing) { setRootError('El código 7861234567890 ya existe en otra variante de este tenant. (409 · errorId: ERR-COD-DUP)'); return; }
      onSaved(editing ? 'Código actualizado.' : 'Código agregado.');
    }, 700);
  };
  return (
    <>
      <window.Crumbs items={[{ label: 'Inicio' }, { label: 'Productos', onClick: () => onCancel('product') }, { label: variant.nombre, onClick: () => onCancel('variant') }, { label: editing ? 'Editar código' : 'Nuevo código' }]} />
      <window.PageHeader title={editing ? 'Editar código de barras' : 'Nuevo código de barras'} meta={<span style={{ color: 'hsl(var(--text-tertiary))' }}>{variant.nombre} · {product.nombre}</span>} />
      <form onSubmit={submit} style={{ maxWidth: 560 }}>
        <VCard>
          {rootError && <div style={{ marginBottom: 16 }}><VAlert tone="danger"><b>No se pudo guardar.</b> {rootError}</VAlert></div>}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <VInput label="Código" value={codigo} onChange={(e) => setCodigo(e.target.value)} error={errors.codigo} placeholder="8 a 14 dígitos" helper="Pruebe 7861234567890 para ver el conflicto de duplicado." disabled={pending} inputMode="numeric" />
            <VInput label="Etiqueta" value={etiqueta} onChange={(e) => setEtiqueta(e.target.value)} placeholder="Ej.: EAN unidad, EAN caja" disabled={pending} />
          </div>
        </VCard>
        <div style={{ display: 'flex', gap: 8, marginTop: 16 }}>
          <VBtn variant="primary" type="submit" loading={pending}>{editing ? 'Guardar cambios' : 'Agregar código'}</VBtn>
          <VBtn variant="ghost" type="button" onClick={() => onCancel('variant')} disabled={pending}>Cancelar</VBtn>
        </div>
      </form>
    </>
  );
}

Object.assign(window, { BarcodesSection, VariantDetail, VariantForm, BarcodeForm });
