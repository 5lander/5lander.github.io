/* Noctis · commerce — FORM DE CLIENTE compartido (ÚNICA fuente del formulario y su
   validación es-EC). Lo consumen DOS lugares sin divergir: el picker del POS (dentro del
   Sheet táctil) y el módulo Clientes (dentro de una Card del shell). Identificación
   (Cédula 10 díg · RUC 13 díg fin 001 · Pasaporte laxo), nombre y celular obligatorios;
   correo y dirección opcionales. Emite los datos validados SIN id — el id lo asigna quien
   lo consume (el POS lo activa en la venta; Clientes lo agrega a la cartera). */
const FIco = window.PosIcon;

function validateClient({ docTipo, numero, nombre, celular, correo }) {
  const e = {};
  const num = (numero || '').trim();
  if (!num) e.numero = 'Ingrese el número de identificación.';
  else if (docTipo === 'Cédula' && !/^\d{10}$/.test(num)) e.numero = 'La cédula debe tener 10 dígitos.';
  else if (docTipo === 'RUC' && !(/^\d{13}$/.test(num) && num.endsWith('001'))) e.numero = 'El RUC debe tener 13 dígitos y terminar en 001.';
  else if (docTipo === 'Pasaporte' && !/^[A-Za-z0-9]{5,}$/.test(num)) e.numero = 'Ingrese un número de pasaporte válido (mínimo 5 caracteres).';
  if (!(nombre || '').trim()) e.nombre = 'Ingrese el nombre o la razón social.';
  const cel = (celular || '').trim();
  if (!cel) e.celular = 'Ingrese el número de celular.';
  else if (!/^09\d{8}$/.test(cel)) e.celular = 'El celular debe tener 10 dígitos y empezar con 09.';
  if ((correo || '').trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo.trim())) e.correo = 'Ingrese un correo electrónico válido.';
  return e;
}

/* `client` → modo edición (precarga). `seed` → alta desde una búsqueda (número o nombre
   tecleado). `back` → link superior opcional (el POS lo usa para volver a elegir cliente;
   el shell no). onSubmit recibe los datos validados. */
function ClientForm({ client, seed, onCancel, onSubmit, submitLabel = 'Guardar', submitIcon = 'user-round', back }) {
  const seedDigits = /^\d+$/.test(seed || '');
  const [docTipo, setDocTipo] = React.useState(client ? client.docTipo : (seedDigits ? (seed.length === 13 ? 'RUC' : 'Cédula') : 'Cédula'));
  const [numero, setNumero] = React.useState(client ? client.doc : (seedDigits ? seed : ''));
  const [nombre, setNombre] = React.useState(client ? client.nombre : (seedDigits ? '' : (seed || '')));
  const [celular, setCelular] = React.useState(client ? (client.celular || '') : '');
  const [correo, setCorreo] = React.useState(client ? (client.correo || '') : '');
  const [direccion, setDireccion] = React.useState(client ? (client.direccion || '') : '');
  const [errors, setErrors] = React.useState({});

  const submit = (ev) => {
    ev.preventDefault();
    const e = validateClient({ docTipo, numero, nombre, celular, correo });
    setErrors(e);
    if (Object.keys(e).length) return;
    onSubmit({ nombre: nombre.trim(), doc: numero.trim(), docTipo, celular: celular.trim(), correo: correo.trim(), direccion: direccion.trim() });
  };

  const fieldStyle = (err) => ({ width: '100%', height: 'var(--pos-field-sm)', padding: '0 14px', borderRadius: 12, border: '1px solid ' + (err ? 'hsl(var(--danger-border))' : 'hsl(var(--border-strong))'), background: 'hsl(var(--surface-base))', color: 'hsl(var(--text-primary))', font: '400 16px var(--font-ui)', outline: 'none' });
  const onF = (e) => { if (!e.target.dataset.err) { e.target.style.borderColor = 'hsl(var(--focus-ring))'; e.target.style.boxShadow = '0 0 0 3px hsl(var(--focus-ring) / .28)'; } };
  const onB = (e) => { e.target.style.boxShadow = 'none'; e.target.style.borderColor = e.target.dataset.err ? 'hsl(var(--danger-border))' : 'hsl(var(--border-strong))'; };
  const wrap = (label, control, error, opcional) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <label style={{ font: '500 13px var(--font-ui)', color: 'hsl(var(--text-secondary))' }}>{label}{opcional && <span style={{ color: 'hsl(var(--text-tertiary))', fontWeight: 400 }}> · opcional</span>}</label>
      {control}
      {error && <span style={{ fontSize: 12, color: 'hsl(var(--danger-fg))' }}>{error}</span>}
    </div>
  );

  return (
    <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 16, minWidth: 300 }}>
      {back && (
        <button type="button" onClick={back.onClick}
          style={{ alignSelf: 'flex-start', display: 'inline-flex', alignItems: 'center', gap: 6, border: 0, background: 'none', padding: 0, cursor: 'pointer', color: 'hsl(var(--text-secondary))', font: '500 13px var(--font-ui)' }}>
          <FIco name="chevrons-left" size={18} />{back.label}
        </button>
      )}

      {wrap('Identificación', (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div role="radiogroup" aria-label="Tipo de identificación" style={{ display: 'flex', gap: 6 }}>
            {['Cédula', 'RUC', 'Pasaporte'].map((t) => {
              const on = docTipo === t;
              return (
                <button key={t} type="button" role="radio" aria-checked={on} onClick={() => { setDocTipo(t); setErrors((p) => ({ ...p, numero: undefined })); }} className="pos-btn"
                  style={{ flex: 1, height: 'var(--pos-action)', borderRadius: 10, cursor: 'pointer', fontFamily: 'var(--font-ui)', fontSize: 14, fontWeight: 600,
                    border: '1px solid ' + (on ? 'hsl(var(--brand-primary))' : 'hsl(var(--border-strong))'),
                    background: on ? 'hsl(var(--brand-primary))' : 'hsl(var(--surface-base))',
                    color: on ? 'hsl(var(--brand-foreground))' : 'hsl(var(--text-secondary))' }}>{t}</button>
              );
            })}
          </div>
          <input value={numero} inputMode={docTipo === 'Pasaporte' ? 'text' : 'numeric'}
            onChange={(e) => setNumero(docTipo === 'Pasaporte' ? e.target.value.slice(0, 20) : e.target.value.replace(/\D/g, '').slice(0, 13))}
            aria-label="Número de identificación" placeholder={docTipo === 'Cédula' ? '10 dígitos' : docTipo === 'RUC' ? '13 dígitos, termina en 001' : 'Número de pasaporte'}
            data-err={errors.numero ? '1' : ''} style={fieldStyle(errors.numero)} onFocus={onF} onBlur={onB} />
        </div>
      ), errors.numero)}

      {wrap('Nombre / razón social', (
        <input value={nombre} onChange={(e) => setNombre(e.target.value)} aria-label="Nombre o razón social" placeholder="Nombre completo o razón social"
          data-err={errors.nombre ? '1' : ''} style={fieldStyle(errors.nombre)} onFocus={onF} onBlur={onB} />
      ), errors.nombre)}

      {wrap('Celular', (
        <input value={celular} inputMode="numeric" onChange={(e) => setCelular(e.target.value.replace(/\D/g, '').slice(0, 10))} aria-label="Celular" placeholder="09XXXXXXXX"
          data-err={errors.celular ? '1' : ''} style={fieldStyle(errors.celular)} onFocus={onF} onBlur={onB} />
      ), errors.celular)}

      {wrap('Correo', (
        <input value={correo} inputMode="email" onChange={(e) => setCorreo(e.target.value)} aria-label="Correo electrónico" placeholder="nombre@correo.ec"
          data-err={errors.correo ? '1' : ''} style={fieldStyle(errors.correo)} onFocus={onF} onBlur={onB} />
      ), errors.correo, true)}

      {wrap('Dirección de domicilio', (
        <input value={direccion} onChange={(e) => setDireccion(e.target.value)} aria-label="Dirección de domicilio" placeholder="Calle, número, ciudad"
          data-err="" style={fieldStyle(false)} onFocus={onF} onBlur={onB} />
      ), null, true)}

      <div style={{ display: 'flex', gap: 10, marginTop: 4 }}>
        <button type="button" onClick={onCancel} className="pos-btn"
          style={{ flex: 'none', minHeight: 'var(--pos-tap-lg)', padding: '0 18px', borderRadius: 12, cursor: 'pointer', border: '1px solid hsl(var(--border-strong))', background: 'hsl(var(--surface-base))', color: 'hsl(var(--text-secondary))', fontFamily: 'var(--font-ui)', fontSize: 15, fontWeight: 500 }}>Cancelar</button>
        <button type="submit"
          style={{ flex: 1, minHeight: 'var(--pos-tap-lg)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8, borderRadius: 12, cursor: 'pointer', border: 0, background: 'hsl(var(--brand-primary))', color: 'hsl(var(--brand-foreground))', fontFamily: 'var(--font-ui)', fontSize: 16, fontWeight: 600 }}>
          <FIco name={submitIcon} size={20} />{submitLabel}
        </button>
      </div>
    </form>
  );
}

Object.assign(window, { ClientForm, validateClient });
