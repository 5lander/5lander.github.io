/* @ds-bundle: {"format":4,"namespace":"NoctisCommerceDesignSystem_4dfd35","components":[{"name":"Badge","sourcePath":"components/data-display/Badge.jsx"},{"name":"MoneyDisplay","sourcePath":"components/data-display/MoneyDisplay.jsx"},{"name":"Table","sourcePath":"components/data-display/Table.jsx"},{"name":"Timeline","sourcePath":"components/data-display/Timeline.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"EmptyState","sourcePath":"components/feedback/EmptyState.jsx"},{"name":"Skeleton","sourcePath":"components/feedback/Skeleton.jsx"},{"name":"Spinner","sourcePath":"components/feedback/Spinner.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Combobox","sourcePath":"components/forms/Combobox.jsx"},{"name":"DatePicker","sourcePath":"components/forms/DatePicker.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Icon","sourcePath":"components/iconography/Icon.jsx"},{"name":"Card","sourcePath":"components/layout/Card.jsx"},{"name":"Shell","sourcePath":"components/layout/Shell.jsx"},{"name":"Wordmark","sourcePath":"components/layout/Wordmark.jsx"},{"name":"ModeToggle","sourcePath":"components/navigation/ModeToggle.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"Sheet","sourcePath":"components/overlay/Sheet.jsx"},{"name":"NumericKeypad","sourcePath":"components/pos/NumericKeypad.jsx"}],"sourceHashes":{"components/data-display/Badge.jsx":"25a7fb1b64e3","components/data-display/MoneyDisplay.jsx":"2f4dae46688b","components/data-display/Table.jsx":"8c720d16d915","components/data-display/Timeline.jsx":"c3ac3b773de9","components/feedback/Alert.jsx":"8a6e89ba316f","components/feedback/EmptyState.jsx":"3c7a9301b2bd","components/feedback/Skeleton.jsx":"04d65fae5c90","components/feedback/Spinner.jsx":"b64ec7ae6b47","components/feedback/Toast.jsx":"45441bedd9bb","components/forms/Button.jsx":"78701d750c48","components/forms/Checkbox.jsx":"1ed8440def87","components/forms/Combobox.jsx":"19a57ec336a1","components/forms/DatePicker.jsx":"f90957b0b3cb","components/forms/Input.jsx":"e6a42c15214e","components/forms/Select.jsx":"39c61256924f","components/forms/Switch.jsx":"905a663a35d0","components/iconography/Icon.jsx":"7b918685602e","components/layout/Card.jsx":"36be9be38d56","components/layout/Shell.jsx":"e9b77765c65b","components/layout/Wordmark.jsx":"f2888ae0a58c","components/navigation/ModeToggle.jsx":"cecea0559d66","components/navigation/Tabs.jsx":"7944b66d11ea","components/overlay/Sheet.jsx":"3ae3491d73e9","components/pos/NumericKeypad.jsx":"a61f123f6cd0","ui_kits/backoffice/app.jsx":"6a475aa30d38","ui_kits/backoffice/catalogo.jsx":"9e5cc0771c64","ui_kits/backoffice/data.js":"878a1d654355","ui_kits/backoffice/kit.jsx":"0612013ffc6b","ui_kits/backoffice/shell.jsx":"26ce4bd7de01","ui_kits/backoffice/tenants.jsx":"2e244e678674","ui_kits/commerce/app.jsx":"46aa37ca69a1","ui_kits/commerce/data.js":"6bd2aa21e1c0","ui_kits/commerce/kit.jsx":"9cb7ca50ca8c","ui_kits/commerce/pos-app.jsx":"fbb53bf2a46f","ui_kits/commerce/pos-b-app.jsx":"08f6dedcf1ab","ui_kits/commerce/pos-cart.jsx":"5c0928d81589","ui_kits/commerce/pos-checkout.jsx":"4b0961a2a1f6","ui_kits/commerce/pos-customer.jsx":"37b279c70f76","ui_kits/commerce/pos-data.js":"4c2ce1da3f1f","ui_kits/commerce/pos-kit.jsx":"7427558ed197","ui_kits/commerce/pos-search.jsx":"c75329f32845","ui_kits/commerce/pos-shell.jsx":"b5a9b9237f30","ui_kits/commerce/productos.jsx":"756db1e07e54","ui_kits/commerce/shell.jsx":"94a8a4828fb0","ui_kits/commerce/variantes.jsx":"68b0cdd925be","ui_kits/core/screens.jsx":"4d57c180e6e1"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.NoctisCommerceDesignSystem_4dfd35 = window.NoctisCommerceDesignSystem_4dfd35 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/data-display/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const NOCTIS_BADGE_CSS = `
.noctis-badge{display:inline-flex;align-items:center;gap:5px;padding:3px 10px;border-radius:999px;font:600 12px/1.4 var(--font-ui);border:1px solid;white-space:nowrap;}
.noctis-badge--neutral{background:hsl(var(--surface-sunken));border-color:hsl(var(--border-strong));color:hsl(var(--text-secondary));}
.noctis-badge--success{background:hsl(var(--success-bg));border-color:hsl(var(--success-border));color:hsl(var(--success-fg));}
.noctis-badge--info{background:hsl(var(--info-bg));border-color:hsl(var(--info-border));color:hsl(var(--info-fg));}
.noctis-badge--warning{background:hsl(var(--warning-bg));border-color:hsl(var(--warning-border));color:hsl(var(--warning-fg));}
.noctis-badge--danger{background:hsl(var(--danger-bg));border-color:hsl(var(--danger-border));color:hsl(var(--danger-fg));}
.noctis-badge--terminal{background:transparent;border-color:hsl(var(--border-strong));color:hsl(var(--text-tertiary));}
.noctis-badge--brand{background:hsl(var(--brand-primary));border-color:transparent;color:hsl(var(--brand-foreground));}
.noctis-badge__dot{width:6px;height:6px;border-radius:50%;background:currentColor;}
`;
if (typeof document !== 'undefined' && !document.getElementById('noctis-badge-css')) {
  const s = document.createElement('style');
  s.id = 'noctis-badge-css';
  s.textContent = NOCTIS_BADGE_CSS;
  document.head.appendChild(s);
}

/**
 * Badge / StatusPill — pill de estado. Los tonos semánticos son ESTABLES (no los
 * toca el tenant); solo `brand` usa el acento (p.ej. "Predeterminada"). `terminal`
 * es el estado cancelado/anulado (contorno neutro).
 */
function Badge({
  tone = 'neutral',
  dot = false,
  children,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ['noctis-badge', `noctis-badge--${tone}`, className].filter(Boolean).join(' ')
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    className: "noctis-badge__dot",
    "aria-hidden": "true"
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/data-display/MoneyDisplay.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const NOCTIS_MONEY_CSS = `
.noctis-money{font-variant-numeric:tabular-nums;font-feature-settings:'tnum';text-align:right;color:hsl(var(--text-primary));}
.noctis-money--neg{color:hsl(var(--danger-fg));}
.noctis-money--sm{font-size:14px;font-weight:500;}
.noctis-money--md{font-size:20px;font-weight:500;}
.noctis-money--lg{font-size:26px;font-weight:600;}
.noctis-money--display{font-size:40px;font-weight:700;line-height:1;}
.noctis-money__missing{display:inline-block;font:600 14px/1 var(--font-ui);color:hsl(var(--warning-fg));padding:4px 8px;border:1px dashed hsl(var(--warning-border));border-radius:6px;}
`;
if (typeof document !== 'undefined' && !document.getElementById('noctis-money-css')) {
  const s = document.createElement('style');
  s.id = 'noctis-money-css';
  s.textContent = NOCTIS_MONEY_CSS;
  document.head.appendChild(s);
}

/** Formato es-EC: miles con punto, decimales con coma, símbolo $. */
function formatEC(n) {
  const neg = n < 0;
  const [ent, dec] = Math.abs(n).toFixed(2).split('.');
  const miles = ent.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  return `${neg ? '−' : ''}$${miles},${dec}`;
}

/**
 * MoneyDisplay — monto con números tabulares, alineado a la derecha. Los negativos
 * toman `--danger-fg`. `null` (precio ausente) NO es $0: renderiza el chip "Sin
 * precio" con contorno de atención. Formato es-EC ($1.234,56). `display` (40px) es el
 * tamaño hero para el monto que el cajero lee a distancia de brazo (total/vuelto del POS).
 */
function MoneyDisplay({
  value,
  size = 'md',
  className = '',
  ...rest
}) {
  if (value === null || value === undefined) {
    return /*#__PURE__*/React.createElement("span", _extends({
      className: "noctis-money__missing"
    }, rest), "Sin precio");
  }
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ['noctis-money', `noctis-money--${size}`, value < 0 && 'noctis-money--neg', className].filter(Boolean).join(' ')
  }, rest), formatEC(value));
}
Object.assign(__ds_scope, { MoneyDisplay });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/MoneyDisplay.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Table.jsx
try { (() => {
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
  const s = document.createElement('style');
  s.id = 'noctis-table-css';
  s.textContent = NOCTIS_TABLE_CSS;
  document.head.appendChild(s);
}

/**
 * Table — tabla de trabajo del núcleo. Números a la derecha en tabular; pills de
 * estado y acciones por fila se pasan como nodos en las celdas. Paginación por
 * keyset ("Cargar más"): sin números de página, total ni salto. El kardex hereda
 * esto sumando saldo corrido. `minWidth` habilita scroll horizontal en táctil.
 */
function Table({
  columns = [],
  rows = [],
  footNote,
  onLoadMore,
  loadMoreLabel = 'Cargar más',
  minWidth = 640
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "noctis-table-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "noctis-table-scroll"
  }, /*#__PURE__*/React.createElement("table", {
    className: "noctis-table",
    style: {
      minWidth
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map((c, i) => /*#__PURE__*/React.createElement("th", {
    key: i,
    className: c.numeric ? 'num' : undefined,
    style: c.align === 'right' ? {
      textAlign: 'right'
    } : undefined
  }, c.label)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, ri) => /*#__PURE__*/React.createElement("tr", {
    key: ri
  }, columns.map((c, ci) => /*#__PURE__*/React.createElement("td", {
    key: ci,
    className: c.numeric ? 'num' : undefined,
    style: c.align === 'right' ? {
      textAlign: 'right'
    } : undefined
  }, r[c.key]))))))), (footNote || onLoadMore) && /*#__PURE__*/React.createElement("div", {
    className: "noctis-table__foot"
  }, footNote && /*#__PURE__*/React.createElement("span", {
    className: "noctis-table__footnote"
  }, footNote), onLoadMore && /*#__PURE__*/React.createElement("button", {
    onClick: onLoadMore,
    style: {
      height: 34,
      padding: '0 16px',
      borderRadius: 10,
      border: '1px solid hsl(var(--border-strong))',
      background: 'hsl(var(--surface-raised))',
      color: 'hsl(var(--text-primary))',
      font: '500 12px/1 var(--font-ui)',
      cursor: 'pointer',
      marginLeft: 'auto'
    }
  }, loadMoreLabel)));
}
Object.assign(__ds_scope, { Table });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Table.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Timeline.jsx
try { (() => {
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
  const s = document.createElement('style');
  s.id = 'noctis-tl-css';
  s.textContent = NOCTIS_TL_CSS;
  document.head.appendChild(s);
}

/**
 * Timeline / Stepper de estados — draft → in_transit → received. Los pasos
 * completados marcan ✓ con la línea de conexión en verde; el pendiente queda con
 * contorno neutro. `cancelled` es terminal lateral (se muestra como Badge terminal
 * fuera de este componente).
 */
function Timeline({
  steps = []
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "noctis-tl"
  }, steps.map((st, i) => {
    const last = i === steps.length - 1;
    const mark = st.status === 'done' ? '✓' : st.status === 'current' ? i + 1 : '';
    const lineColor = st.status === 'done' ? 'hsl(var(--success-fg))' : 'hsl(var(--border-strong))';
    return /*#__PURE__*/React.createElement("div", {
      className: "noctis-tl__step",
      key: i
    }, /*#__PURE__*/React.createElement("div", {
      className: "noctis-tl__rail"
    }, /*#__PURE__*/React.createElement("div", {
      className: `noctis-tl__node noctis-tl__node--${st.status}`
    }, mark), !last && /*#__PURE__*/React.createElement("div", {
      className: "noctis-tl__line",
      style: {
        background: lineColor
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "noctis-tl__body"
    }, /*#__PURE__*/React.createElement("div", {
      className: ['noctis-tl__label', st.status === 'pending' && 'noctis-tl__label--pending'].filter(Boolean).join(' ')
    }, st.label), st.meta && /*#__PURE__*/React.createElement("div", {
      className: "noctis-tl__meta"
    }, st.meta)));
  }));
}
Object.assign(__ds_scope, { Timeline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Timeline.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const NOCTIS_ALERT_CSS = `
.noctis-alert{padding:12px 14px;border-radius:10px;font-size:13px;border:1px solid;line-height:1.45;}
.noctis-alert--info{background:hsl(var(--info-bg));border-color:hsl(var(--info-border));color:hsl(var(--info-fg));}
.noctis-alert--success{background:hsl(var(--success-bg));border-color:hsl(var(--success-border));color:hsl(var(--success-fg));}
.noctis-alert--warning{background:hsl(var(--warning-bg));border-color:hsl(var(--warning-border));color:hsl(var(--warning-fg));}
.noctis-alert--danger{background:hsl(var(--danger-bg));border-color:hsl(var(--danger-border));color:hsl(var(--danger-fg));}
`;
if (typeof document !== 'undefined' && !document.getElementById('noctis-alert-css')) {
  const s = document.createElement('style');
  s.id = 'noctis-alert-css';
  s.textContent = NOCTIS_ALERT_CSS;
  document.head.appendChild(s);
}

/**
 * Alert — feedback inline dentro de la Card. Es el mecanismo por defecto: el error
 * SIEMPRE va inline (nunca por toast). `danger`/`warning` usan role="alert";
 * `info`/`success` usan role="status".
 */
function Alert({
  tone = 'info',
  role,
  children,
  className = '',
  ...rest
}) {
  const autoRole = role || (tone === 'danger' || tone === 'warning' ? 'alert' : 'status');
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['noctis-alert', `noctis-alert--${tone}`, className].filter(Boolean).join(' '),
    role: autoRole
  }, rest), children);
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/EmptyState.jsx
try { (() => {
/**
 * EmptyState — estado vacío con marca de casa. Aparece SOLO donde no hay tenant
 * (default sin color): el mark grafito/plata de Noctis, título, descripción y una
 * acción primaria opcional. Cero ilustración, cero editorial dentro del shell.
 */
function EmptyState({
  title,
  description,
  action,
  mark = true
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '16px 10px',
      border: '1px dashed hsl(var(--border-strong))',
      borderRadius: 10
    }
  }, mark && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      margin: '0 auto 8px',
      borderRadius: 11,
      background: 'hsl(var(--text-primary))',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 12,
      height: 12,
      borderRadius: '50%',
      background: 'hsl(var(--surface-raised))'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 17px/1.2 var(--font-ui)',
      letterSpacing: '-.015em'
    }
  }, title), description && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'hsl(var(--text-tertiary))',
      margin: '4px 0 10px'
    }
  }, description), action);
}
Object.assign(__ds_scope, { EmptyState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/EmptyState.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Skeleton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const NOCTIS_SK_CSS = `
.noctis-sk{background:linear-gradient(90deg,hsl(var(--surface-sunken)) 25%,hsl(var(--border-subtle)) 37%,hsl(var(--surface-sunken)) 63%);background-size:280% 100%;animation:noctis-shimmer 1.4s infinite;}
.noctis-sk--line{display:inline-block;height:12px;border-radius:4px;}
.noctis-sk--block{display:block;border-radius:8px;}
.noctis-sk--pill{display:inline-block;width:64px;height:20px;border-radius:999px;}
`;
if (typeof document !== 'undefined' && !document.getElementById('noctis-sk-css')) {
  const s = document.createElement('style');
  s.id = 'noctis-sk-css';
  s.textContent = NOCTIS_SK_CSS;
  document.head.appendChild(s);
}

/**
 * Skeleton — placeholder con shimmer cuando se conoce la FORMA y hay layout que
 * preservar (listas, tablas, detalle). Evita el salto de contenido. Tres formas:
 * line (texto), block (bloque), pill (estado).
 */
function Skeleton({
  variant = 'line',
  width,
  height,
  className = '',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ['noctis-sk', `noctis-sk--${variant}`, className].filter(Boolean).join(' '),
    "aria-hidden": "true",
    style: {
      width,
      height,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Skeleton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Skeleton.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Spinner.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const NOCTIS_SPIN_CSS = `
.noctis-spinner{border-radius:50%;display:inline-block;border-style:solid;border-color:hsl(var(--border-strong));border-top-color:hsl(var(--brand-primary));animation:noctis-spin .7s linear infinite;}
`;
if (typeof document !== 'undefined' && !document.getElementById('noctis-spin-css')) {
  const s = document.createElement('style');
  s.id = 'noctis-spin-css';
  s.textContent = NOCTIS_SPIN_CSS;
  document.head.appendChild(s);
}
const SIZES = {
  sm: [16, 2],
  md: [26, 3],
  lg: [34, 4]
};

/**
 * Spinner — para acción puntual sin layout: gate de permiso, submit, botón en
 * loading. NUNCA para reemplazar una tabla entera (ahí va Skeleton). role="status".
 */
function Spinner({
  size = 'md',
  label = 'Cargando…',
  className = '',
  ...rest
}) {
  const [d, bw] = SIZES[size] || SIZES.md;
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ['noctis-spinner', className].filter(Boolean).join(' '),
    role: "status",
    "aria-label": label,
    style: {
      width: d,
      height: d,
      borderWidth: bw
    }
  }, rest));
}
Object.assign(__ds_scope, { Spinner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Spinner.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const NOCTIS_TOAST_CSS = `
.noctis-toast{display:inline-flex;align-items:center;gap:10px;background:hsl(var(--surface-overlay));border:1px solid hsl(var(--border-subtle));border-left:3px solid hsl(var(--success-fg));border-radius:10px;padding:10px 14px;box-shadow:var(--shadow-overlay);font-size:13px;color:hsl(var(--text-primary));}
.noctis-toast__icon{color:hsl(var(--success-fg));}
`;
if (typeof document !== 'undefined' && !document.getElementById('noctis-toast-css')) {
  const s = document.createElement('style');
  s.id = 'noctis-toast-css';
  s.textContent = NOCTIS_TOAST_CSS;
  document.head.appendChild(s);
}

/**
 * Toast — acotado por decisión de sistema. SOLO confirmaciones de éxito efímeras
 * de acciones cuyo resultado NO está en pantalla (p.ej. "Invitación reenviada").
 * Autodismiss 4 s, apilable, role="status". Reglas duras: error → nunca toast
 * (va inline con Alert); prohibido en el POS.
 */
function Toast({
  children,
  autoDismiss = 4000,
  onDismiss,
  className = '',
  ...rest
}) {
  React.useEffect(() => {
    if (!autoDismiss || !onDismiss) return;
    const t = setTimeout(onDismiss, autoDismiss);
    return () => clearTimeout(t);
  }, [autoDismiss, onDismiss]);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['noctis-toast', className].filter(Boolean).join(' '),
    role: "status"
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "noctis-toast__icon",
    "aria-hidden": "true"
  }, "\u2713"), /*#__PURE__*/React.createElement("span", null, children));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Inyecta una vez las reglas de hover/focus/active que el estilo inline no cubre. */
const NOCTIS_BTN_CSS = `
.noctis-btn{height:var(--control-h);padding:0 16px;border-radius:10px;font:var(--type-h3-weight,600) 13px/1 var(--font-ui);cursor:pointer;display:inline-flex;align-items:center;justify-content:center;gap:8px;white-space:nowrap;transition:filter .12s,background .12s,transform .06s;}
.noctis-btn--sm{height:var(--control-h-sm);padding:0 10px;border-radius:8px;font-weight:500;font-size:12px;gap:6px;}
.noctis-btn--primary{background:hsl(var(--brand-primary));color:hsl(var(--brand-foreground));border:none;}
.noctis-btn--primary:hover:not(:disabled){filter:brightness(.93);}
.noctis-btn--secondary{background:hsl(var(--surface-raised));color:hsl(var(--text-primary));border:1px solid hsl(var(--border-strong));}
.noctis-btn--secondary:hover:not(:disabled){background:hsl(var(--surface-sunken));}
.noctis-btn--ghost{background:transparent;color:hsl(var(--text-secondary));border:1px solid transparent;}
.noctis-btn--ghost:hover:not(:disabled){background:hsl(var(--surface-sunken));}
.noctis-btn--danger{background:hsl(var(--danger-fg));color:hsl(var(--danger-foreground));border:none;}
.noctis-btn--danger:hover:not(:disabled){filter:brightness(.93);}
.noctis-btn--danger-ghost{background:transparent;color:hsl(var(--danger-fg));border:1px solid hsl(var(--danger-border));}
.noctis-btn--danger-ghost:hover:not(:disabled){background:hsl(var(--danger-bg));}
.noctis-btn:focus-visible{outline:2px solid hsl(var(--focus-ring));outline-offset:2px;}
.noctis-btn:active:not(:disabled){transform:scale(.985);}
.noctis-btn:disabled{opacity:.45;cursor:not-allowed;}
.noctis-btn__spin{width:14px;height:14px;border:2px solid hsl(var(--brand-foreground)/.4);border-top-color:hsl(var(--brand-foreground));border-radius:50%;display:inline-block;animation:noctis-spin .7s linear infinite;}
`;
if (typeof document !== 'undefined' && !document.getElementById('noctis-btn-css')) {
  const s = document.createElement('style');
  s.id = 'noctis-btn-css';
  s.textContent = NOCTIS_BTN_CSS;
  document.head.appendChild(s);
}

/**
 * Button — primitivo reexpresado. `primary` es el ÚNICO lugar (junto a nav-activo,
 * foco y selección) donde vive el acento del tenant. Estados: default · hover ·
 * active · focus-visible (anillo) · disabled · loading.
 */
function Button({
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  children,
  className = '',
  ...rest
}) {
  const cls = ['noctis-btn', size === 'sm' && 'noctis-btn--sm', `noctis-btn--${variant}`, className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    disabled: disabled || loading,
    "aria-busy": loading || undefined
  }, rest), loading && /*#__PURE__*/React.createElement("span", {
    className: "noctis-btn__spin",
    "aria-hidden": "true"
  }), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const NOCTIS_CHECKBOX_CSS = `
.noctis-checkbox{width:20px;height:20px;flex:none;border-radius:6px;border:1px solid hsl(var(--border-strong));background:hsl(var(--surface-base));color:hsl(var(--brand-foreground));display:grid;place-items:center;cursor:pointer;padding:0;font:600 12px/1 var(--font-ui);transition:background .12s,border-color .12s;}
.noctis-checkbox--sm{width:17px;height:17px;border-radius:5px;font-size:10px;}
.noctis-checkbox[aria-checked="true"],.noctis-checkbox[aria-checked="mixed"]{background:hsl(var(--brand-primary));border-color:hsl(var(--brand-primary));}
.noctis-checkbox:focus-visible{outline:2px solid hsl(var(--focus-ring)/.5);outline-offset:2px;}
.noctis-checkbox:disabled{opacity:.45;cursor:not-allowed;}
.noctis-checkbox-field{display:inline-flex;align-items:flex-start;gap:10px;}
.noctis-checkbox-field__label{font:400 var(--font-body)/1.35 var(--font-ui);color:hsl(var(--text-primary));min-width:0;}
.noctis-checkbox-field--disabled .noctis-checkbox-field__label{color:hsl(var(--text-tertiary));}
`;
if (typeof document !== 'undefined' && !document.getElementById('noctis-checkbox-css')) {
  const s = document.createElement('style');
  s.id = 'noctis-checkbox-css';
  s.textContent = NOCTIS_CHECKBOX_CSS;
  document.head.appendChild(s);
}

/**
 * Checkbox — primitivo de selección del núcleo, con estado TRI-ESTADO. El tercer
 * estado (`indeterminate`) es el padre de una jerarquía cuyos hijos están
 * parcialmente marcados: backoffice lo usa en el árbol de entitlements
 * (módulo→submódulos), y sirve igual para cualquier selección de lista con
 * "seleccionar todo" parcial.
 *
 * Contrato de estado: `indeterminate` gana sobre `checked` y expone
 * `aria-checked="mixed"`. Al pulsar en indeterminate, el consumidor decide la
 * resolución (encender todo o apagar todo) — el componente solo informa.
 */
function Checkbox({
  checked = false,
  indeterminate = false,
  onChange,
  disabled = false,
  size = 'md',
  label,
  id,
  className = '',
  ...rest
}) {
  const state = indeterminate ? 'mixed' : !!checked;
  const control = /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    role: "checkbox",
    id: id,
    "aria-checked": state,
    disabled: disabled,
    onClick: () => !disabled && onChange && onChange(indeterminate ? true : !checked),
    className: ['noctis-checkbox', size === 'sm' ? 'noctis-checkbox--sm' : '', className].filter(Boolean).join(' ')
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, indeterminate ? '–' : checked ? '✓' : ''));
  if (!label) return control;
  return /*#__PURE__*/React.createElement("span", {
    className: ['noctis-checkbox-field', disabled ? 'noctis-checkbox-field--disabled' : ''].filter(Boolean).join(' ')
  }, React.cloneElement(control, {
    'aria-label': undefined,
    'aria-labelledby': id ? `${id}-label` : undefined
  }), /*#__PURE__*/React.createElement("span", {
    className: "noctis-checkbox-field__label",
    id: id ? `${id}-label` : undefined
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Combobox.jsx
try { (() => {
const NOCTIS_COMBO_CSS = `
.noctis-combo{position:relative;}
.noctis-combo__btn{width:100%;height:var(--control-h);padding:0 12px;border-radius:8px;border:1px solid hsl(var(--border-strong));background:hsl(var(--surface-base));font:400 var(--font-body)/1 var(--font-ui);display:flex;align-items:center;justify-content:space-between;gap:8px;cursor:pointer;}
.noctis-combo__btn:focus-visible{outline:2px solid hsl(var(--focus-ring));outline-offset:2px;}
.noctis-combo__pop{position:absolute;z-index:20;left:0;right:0;margin-top:6px;background:hsl(var(--surface-overlay));border:1px solid hsl(var(--border-subtle));border-radius:10px;box-shadow:var(--shadow-overlay);overflow:hidden;}
.noctis-combo__search{padding:8px;border-bottom:1px solid hsl(var(--border-subtle));}
.noctis-combo__search input{width:100%;height:34px;padding:0 12px;border-radius:8px;border:1px solid hsl(var(--border-strong));background:hsl(var(--surface-base));color:hsl(var(--text-primary));font:400 var(--font-body)/1 var(--font-ui);}
.noctis-combo__opt{display:block;width:100%;text-align:left;padding:10px 12px;border:none;background:transparent;color:hsl(var(--text-primary));font:400 13px/1.3 var(--font-ui);cursor:pointer;}
.noctis-combo__opt:hover,.noctis-combo__opt:focus-visible{background:hsl(var(--surface-sunken));outline:none;}
.noctis-combo__meta{font-family:var(--font-mono);font-size:11px;color:hsl(var(--text-tertiary));}
.noctis-combo__empty{padding:14px 12px;font:400 12.5px/1.4 var(--font-ui);color:hsl(var(--text-tertiary));text-align:center;}
`;
if (typeof document !== 'undefined' && !document.getElementById('noctis-combo-css')) {
  const s = document.createElement('style');
  s.id = 'noctis-combo-css';
  s.textContent = NOCTIS_COMBO_CSS;
  document.head.appendChild(s);
}

/**
 * Combobox — picker con búsqueda que reemplaza los UUID crudos: siempre muestra
 * display_name en español, nunca el UUID. Popover flotante con sombra; opción
 * "un toque" destacada con el acento (color de marca). Base de la familia de
 * pickers (cliente, producto→variante, bodega).
 */
function Combobox({
  options = [],
  value,
  onChange,
  placeholder = 'Seleccione…',
  searchPlaceholder = 'Buscar…',
  label
}) {
  const [open, setOpen] = React.useState(false);
  const [q, setQ] = React.useState('');
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!open) return;
    const onDoc = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, [open]);
  const sel = options.find(o => o.value === value);
  const filtered = q ? options.filter(o => (o.label + ' ' + (o.meta || '')).toLowerCase().includes(q.toLowerCase())) : options;
  return /*#__PURE__*/React.createElement("div", {
    className: "noctis-combo",
    ref: ref
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "noctis-combo__btn",
    "aria-haspopup": "listbox",
    "aria-expanded": open,
    onClick: () => setOpen(o => !o),
    style: {
      color: sel ? 'hsl(var(--text-primary))' : 'hsl(var(--text-tertiary))'
    }
  }, /*#__PURE__*/React.createElement("span", null, sel ? sel.label : placeholder), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'hsl(var(--text-tertiary))'
    },
    "aria-hidden": "true"
  }, "\u25BE")), open && /*#__PURE__*/React.createElement("div", {
    className: "noctis-combo__pop",
    role: "listbox"
  }, /*#__PURE__*/React.createElement("div", {
    className: "noctis-combo__search"
  }, /*#__PURE__*/React.createElement("input", {
    autoFocus: true,
    placeholder: searchPlaceholder,
    value: q,
    onChange: e => setQ(e.target.value)
  })), filtered.length === 0 && /*#__PURE__*/React.createElement("div", {
    className: "noctis-combo__empty"
  }, "Sin resultados para \xAB", q, "\xBB."), filtered.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "option",
    "aria-selected": o.value === value,
    className: "noctis-combo__opt",
    style: o.accent ? {
      color: 'hsl(var(--brand-primary))',
      fontWeight: 600
    } : undefined,
    onClick: () => {
      onChange && onChange(o.value);
      setOpen(false);
      setQ('');
    }
  }, o.label, o.meta && /*#__PURE__*/React.createElement(React.Fragment, null, " ", /*#__PURE__*/React.createElement("span", {
    className: "noctis-combo__meta"
  }, o.meta))))));
}
Object.assign(__ds_scope, { Combobox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Combobox.jsx", error: String((e && e.message) || e) }); }

// components/forms/DatePicker.jsx
try { (() => {
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
  const s = document.createElement('style');
  s.id = 'noctis-date-css';
  s.textContent = NOCTIS_DATE_CSS;
  document.head.appendChild(s);
}
const DOW = ['Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá', 'Do'];
const MESES = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
const pad = n => String(n).padStart(2, '0');

/**
 * DatePicker es-EC — formato DD/MM/YYYY, semana con lunes primero, meses en
 * español. Día seleccionado usa el acento del tenant. Hora 24h · TZ Guayaquil
 * en campos con hora.
 */
function DatePicker({
  value,
  onChange,
  label
}) {
  const [open, setOpen] = React.useState(false);
  const init = value instanceof Date ? value : new Date(2026, 2, 14);
  const [view, setView] = React.useState(() => new Date(init.getFullYear(), init.getMonth(), 1));
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!open) return;
    const onDoc = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, [open]);
  const y = view.getFullYear(),
    m = view.getMonth();
  const firstDow = (new Date(y, m, 1).getDay() + 6) % 7; // lunes = 0
  const days = new Date(y, m + 1, 0).getDate();
  const cells = [];
  for (let i = 0; i < firstDow; i++) cells.push(null);
  for (let d = 1; d <= days; d++) cells.push(d);
  const sel = value instanceof Date ? value : null;
  const label2 = sel ? `${pad(sel.getDate())}/${pad(sel.getMonth() + 1)}/${sel.getFullYear()}` : 'DD/MM/AAAA';
  return /*#__PURE__*/React.createElement("div", {
    className: "noctis-date",
    ref: ref
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "noctis-date__btn",
    onClick: () => setOpen(o => !o)
  }, /*#__PURE__*/React.createElement("span", null, label2), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'hsl(var(--text-tertiary))'
    },
    "aria-hidden": "true"
  }, "\u25A6")), open && /*#__PURE__*/React.createElement("div", {
    className: "noctis-date__pop"
  }, /*#__PURE__*/React.createElement("div", {
    className: "noctis-date__nav"
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "noctis-date__navbtn",
    onClick: () => setView(new Date(y, m - 1, 1))
  }, "\u2039"), /*#__PURE__*/React.createElement("span", null, MESES[m], " ", y), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "noctis-date__navbtn",
    onClick: () => setView(new Date(y, m + 1, 1))
  }, "\u203A")), /*#__PURE__*/React.createElement("div", {
    className: "noctis-date__dow"
  }, DOW.map(d => /*#__PURE__*/React.createElement("span", {
    key: d
  }, d))), /*#__PURE__*/React.createElement("div", {
    className: "noctis-date__grid"
  }, cells.map((d, i) => d === null ? /*#__PURE__*/React.createElement("span", {
    key: 'e' + i
  }) : /*#__PURE__*/React.createElement("button", {
    key: d,
    type: "button",
    className: ['noctis-date__day', sel && sel.getDate() === d && sel.getMonth() === m && sel.getFullYear() === y && 'noctis-date__day--sel'].filter(Boolean).join(' '),
    onClick: () => {
      onChange && onChange(new Date(y, m, d));
      setOpen(false);
    }
  }, d)))));
}
Object.assign(__ds_scope, { DatePicker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/DatePicker.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const NOCTIS_INPUT_CSS = `
.noctis-field{display:flex;flex-direction:column;}
.noctis-label{display:block;font:500 var(--type-label-size,13px)/1.2 var(--font-ui);margin-bottom:6px;color:hsl(var(--text-primary));}
.noctis-input{width:100%;height:var(--control-h);padding:0 12px;border-radius:10px;border:1px solid hsl(var(--border-strong));background:hsl(var(--surface-base));color:hsl(var(--text-primary));font:400 var(--font-body)/1 var(--font-ui);transition:border-color .12s,box-shadow .12s;}
.noctis-input::placeholder{color:hsl(var(--text-tertiary));}
.noctis-input:focus{outline:2px solid hsl(var(--focus-ring)/.4);outline-offset:0;border-color:hsl(var(--focus-ring));}
.noctis-input--error{border-color:hsl(var(--danger-fg));}
.noctis-input:disabled{opacity:.5;cursor:not-allowed;background:hsl(var(--surface-sunken));}
.noctis-help{font:400 var(--type-caption-size,12px)/1.4 var(--font-ui);color:hsl(var(--text-tertiary));margin-top:5px;}
.noctis-err{font:400 var(--type-caption-size,12px)/1.4 var(--font-ui);color:hsl(var(--danger-fg));margin-top:5px;}
`;
if (typeof document !== 'undefined' && !document.getElementById('noctis-input-css')) {
  const s = document.createElement('style');
  s.id = 'noctis-input-css';
  s.textContent = NOCTIS_INPUT_CSS;
  document.head.appendChild(s);
}
let _uid = 0;

/**
 * Input — campo de texto del núcleo con label, helper y error por campo (patrón RHF+Zod).
 * El error inline es la regla: nunca se muestra por toast.
 */
function Input({
  label,
  helper,
  error,
  id,
  className = '',
  ...rest
}) {
  const [autoId] = React.useState(() => id || `noctis-in-${++_uid}`);
  return /*#__PURE__*/React.createElement("div", {
    className: "noctis-field"
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "noctis-label",
    htmlFor: autoId
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: autoId,
    className: ['noctis-input', error && 'noctis-input--error', className].filter(Boolean).join(' '),
    "aria-invalid": error ? true : undefined
  }, rest)), error ? /*#__PURE__*/React.createElement("div", {
    className: "noctis-err"
  }, error) : helper ? /*#__PURE__*/React.createElement("div", {
    className: "noctis-help"
  }, helper) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const NOCTIS_SELECT_CSS = `
.noctis-select-wrap{position:relative;}
.noctis-select{width:100%;height:var(--control-h);padding:0 32px 0 12px;border-radius:10px;border:1px solid hsl(var(--border-strong));background:hsl(var(--surface-base));color:hsl(var(--text-primary));font:400 var(--font-body)/1 var(--font-ui);appearance:none;cursor:pointer;}
.noctis-select:focus{outline:2px solid hsl(var(--focus-ring)/.4);outline-offset:0;border-color:hsl(var(--focus-ring));}
.noctis-select:disabled{opacity:.5;cursor:not-allowed;background:hsl(var(--surface-sunken));}
.noctis-select__chev{position:absolute;right:12px;top:50%;transform:translateY(-50%);color:hsl(var(--text-tertiary));pointer-events:none;font-size:11px;}
`;
if (typeof document !== 'undefined' && !document.getElementById('noctis-select-css')) {
  const s = document.createElement('style');
  s.id = 'noctis-select-css';
  s.textContent = NOCTIS_SELECT_CSS;
  document.head.appendChild(s);
}

/**
 * Select — select nativo simple estilizado con chevron propio. En táctil escala a
 * bottom-sheet (ver Sheet). Para búsqueda por nombre/ID usar Combobox.
 */
function Select({
  options = [],
  children,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "noctis-select-wrap"
  }, /*#__PURE__*/React.createElement("select", _extends({
    className: ['noctis-select', className].filter(Boolean).join(' ')
  }, rest), children || options.map(o => {
    const value = typeof o === 'string' ? o : o.value;
    const label = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: value,
      value: value
    }, label);
  })), /*#__PURE__*/React.createElement("span", {
    className: "noctis-select__chev",
    "aria-hidden": "true"
  }, "\u25BE"));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const NOCTIS_SWITCH_CSS = `
.noctis-switch{position:relative;flex:none;border-radius:999px;border:1px solid hsl(var(--border-strong));background:hsl(var(--surface-sunken));cursor:pointer;padding:0;transition:background .12s,border-color .12s;}
.noctis-switch--md{width:38px;height:22px;}
.noctis-switch--sm{width:32px;height:19px;}
.noctis-switch__knob{position:absolute;top:2px;border-radius:999px;background:hsl(var(--surface-raised));box-shadow:0 1px 2px hsl(240 6% 10% / .25);transition:left .12s,background .12s;}
.noctis-switch--md .noctis-switch__knob{width:16px;height:16px;left:2px;}
.noctis-switch--sm .noctis-switch__knob{width:13px;height:13px;left:2px;}
.noctis-switch[aria-checked="true"]{background:hsl(var(--brand-primary));border-color:hsl(var(--brand-primary));}
.noctis-switch[aria-checked="true"] .noctis-switch__knob{background:hsl(var(--brand-foreground));}
.noctis-switch--md[aria-checked="true"] .noctis-switch__knob{left:18px;}
.noctis-switch--sm[aria-checked="true"] .noctis-switch__knob{left:16px;}
.noctis-switch:focus-visible{outline:2px solid hsl(var(--focus-ring)/.5);outline-offset:2px;}
.noctis-switch:disabled{opacity:.45;cursor:not-allowed;}
.noctis-switch-field{display:inline-flex;align-items:flex-start;gap:10px;}
.noctis-switch-field__text{min-width:0;}
.noctis-switch-field__label{font:400 var(--font-body)/1.35 var(--font-ui);color:hsl(var(--text-primary));}
.noctis-switch-field--disabled .noctis-switch-field__label{color:hsl(var(--text-tertiary));}
.noctis-switch-field__helper{font-size:11.5px;line-height:1.4;color:hsl(var(--text-tertiary));margin-top:2px;}
`;
if (typeof document !== 'undefined' && !document.getElementById('noctis-switch-css')) {
  const s = document.createElement('style');
  s.id = 'noctis-switch-css';
  s.textContent = NOCTIS_SWITCH_CSS;
  document.head.appendChild(s);
}

/**
 * Switch — primitivo base de encendido/apagado del núcleo. Único control de
 * activo/inactivo del sistema: lo consumen backoffice (árbol de entitlements) y
 * commerce (configuración de empresa, activo/inactivo por registro). El track usa
 * el par de marca `{--brand-primary, --brand-foreground}`, así que respeta el
 * acento del tenant donde lo haya y la marca de casa donde no.
 *
 * Accesibilidad: `role="switch"` + `aria-checked`; SIEMPRE requiere nombre
 * accesible (`label` visible, o `aria-label` cuando el nombre está en la fila).
 * `ModeToggle` NO es un Switch: es el control de chrome del modo claro/oscuro y
 * tiene su propio contrato (icono y label fijos, sin estado deshabilitado).
 */
function Switch({
  checked = false,
  onChange,
  disabled = false,
  size = 'md',
  label,
  helper,
  id,
  className = '',
  ...rest
}) {
  const control = /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    role: "switch",
    id: id,
    "aria-checked": !!checked,
    disabled: disabled,
    onClick: () => !disabled && onChange && onChange(!checked),
    className: ['noctis-switch', `noctis-switch--${size}`, className].filter(Boolean).join(' ')
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "noctis-switch__knob",
    "aria-hidden": "true"
  }));
  if (!label) return control;
  return /*#__PURE__*/React.createElement("span", {
    className: ['noctis-switch-field', disabled ? 'noctis-switch-field--disabled' : ''].filter(Boolean).join(' ')
  }, React.cloneElement(control, {
    'aria-label': undefined,
    'aria-labelledby': id ? `${id}-label` : undefined
  }), /*#__PURE__*/React.createElement("span", {
    className: "noctis-switch-field__text"
  }, /*#__PURE__*/React.createElement("span", {
    className: "noctis-switch-field__label",
    id: id ? `${id}-label` : undefined
  }, label), helper && /*#__PURE__*/React.createElement("span", {
    className: "noctis-switch-field__helper",
    style: {
      display: 'block'
    }
  }, helper)));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/iconography/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Icon — set de iconografía del NÚCLEO. Lucide (line icons, ISC License), un solo
 * peso de trazo, grilla 16/20/24. Decisión de SISTEMA (no de piel): la reponemos
 * acá porque se perdió en la extracción. Ambas apps (commerce y backoffice) heredan
 * el mismo set y el mismo mapa módulo→ícono. Nunca se mezcla filled con line.
 *
 * Uso: <Icon name="package" /> por nombre Lucide, o <Icon module="productos" />
 * por id de módulo del universo objetivo (el mapa vive acá, no en cada app).
 */

/* Registro Lucide (contenido interno de cada SVG 24×24). Solo los del universo
   objetivo commerce+backoffice; se amplía agregando entradas, sin tocar la API. */
const ICONS = {
  'package': '<path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"/><path d="M12 22V12"/><path d="m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7"/><path d="m7.5 4.27 9 5.15"/>',
  'shopping-cart': '<circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>',
  'receipt': '<path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 17.5v-11"/>',
  'users': '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  'tag': '<path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"/><circle cx="7.5" cy="7.5" r=".5" fill="currentColor"/>',
  'tags': '<path d="m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19"/><path d="M9.586 5.586A2 2 0 0 0 8.172 5H3a1 1 0 0 0-1 1v5.172a2 2 0 0 0 .586 1.414L8.29 18.29a2.426 2.426 0 0 0 3.42 0l3.58-3.58a2.426 2.426 0 0 0 0-3.42z"/><circle cx="6.5" cy="9.5" r=".5" fill="currentColor"/>',
  'warehouse': '<path d="M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z"/><path d="M6 18h12"/><path d="M6 14h12"/><rect width="12" height="12" x="6" y="10"/>',
  'truck': '<path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/>',
  'file-text': '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/>',
  'wallet': '<path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/>',
  'landmark': '<path d="M10 18v-7"/><path d="M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.29.949-.24.949H3.5c-.53 0-.716-.716-.24-.949z"/><path d="M14 18v-7"/><path d="M18 18v-7"/><path d="M3 22h18"/><path d="M6 18v-7"/>',
  'chart-column': '<path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>',
  'banknote': '<rect width="20" height="12" x="2" y="6" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01M18 12h.01"/>',
  'settings': '<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/>',
  'building-2': '<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/>',
  'shield-check': '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
  'store': '<path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"/><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"/><path d="M2 7h20"/><path d="M22 7v3a2 2 0 0 1-2 2 2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7"/>',
  'globe': '<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>',
  'chevrons-left': '<path d="m11 17-5-5 5-5"/><path d="m18 17-5-5 5-5"/>',
  'chevrons-right': '<path d="m6 17 5-5-5-5"/><path d="m13 17 5-5-5-5"/>',
  /* Ampliación del set para el POS táctil (commerce POS-a). Lucide, mismo peso/grilla.
     Decisión de sistema: ambas apps heredan estas entradas — se agregan sin tocar la API. */
  'search': '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  'scan-barcode': '<path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><path d="M8 7v10"/><path d="M12 7v10"/><path d="M16 7v10"/>',
  'trash-2': '<path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/>',
  'x': '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  'plus': '<path d="M5 12h14"/><path d="M12 5v14"/>',
  'minus': '<path d="M5 12h14"/>',
  'user-round': '<circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/>',
  'log-out': '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/>'
};

/* Mapa módulo→ícono del universo objetivo. Decisión de SISTEMA: ambas apps lo
   heredan tal cual. commerce usa el subconjunto que construye; backoffice el resto. */
const MODULE_ICONS = {
  // Vender
  pos: 'shopping-cart',
  ventas: 'receipt',
  clientes: 'users',
  // Catálogo
  productos: 'package',
  categorias: 'tags',
  precios: 'tag',
  // Suministro
  inventario: 'warehouse',
  compras: 'truck',
  // Dinero
  facturacion: 'file-text',
  // Facturación SRI
  tesoreria: 'wallet',
  contabilidad: 'landmark',
  // Gestión
  reportes: 'chart-column',
  nomina: 'banknote',
  // Configuración / Administración
  'config.empresa': 'building-2',
  'config.usuarios': 'shield-check',
  administracion: 'settings'
};
function Icon({
  name,
  module,
  size = 20,
  strokeWidth = 2,
  title,
  style,
  ...rest
}) {
  const key = name || module && MODULE_ICONS[module];
  const inner = key && ICONS[key];
  if (!inner) return null;
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    role: title ? 'img' : undefined,
    "aria-hidden": title ? undefined : 'true',
    "aria-label": title,
    style: {
      display: 'block',
      flex: 'none',
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: (title ? `<title>${title}</title>` : '') + inner
    }
  }, rest));
}

/* Se exponen para que las apps consuman el mismo set/mapa (backoffice hereda). */
Icon.names = Object.keys(ICONS);
Icon.moduleIcons = MODULE_ICONS;
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/iconography/Icon.jsx", error: String((e && e.message) || e) }); }

// components/layout/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — superficie plana del núcleo. Elevación por BORDE, no por sombra (la casa
 * prefiere bordes finos; solo lo flotante recibe --shadow-overlay). Radio 12.
 * Opcionalmente lleva header y footer separados por borde.
 */
function Card({
  header,
  footer,
  pad = true,
  children,
  className = '',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: className,
    style: {
      background: 'hsl(var(--surface-raised))',
      border: '1px solid hsl(var(--border-subtle))',
      borderRadius: 'var(--radius-card)',
      overflow: 'hidden',
      ...style
    }
  }, rest), header && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 14px',
      borderBottom: '1px solid hsl(var(--border-subtle))',
      font: '600 12px/1.3 var(--font-ui)',
      letterSpacing: '.05em',
      textTransform: 'uppercase',
      color: 'hsl(var(--text-tertiary))'
    }
  }, header), /*#__PURE__*/React.createElement("div", {
    style: pad ? {
      padding: 16
    } : undefined
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 16px',
      borderTop: '1px solid hsl(var(--border-subtle))',
      font: '400 11px/1.4 var(--font-ui)',
      color: 'hsl(var(--text-tertiary))'
    }
  }, footer));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Card.jsx", error: String((e && e.message) || e) }); }

// components/layout/Shell.jsx
try { (() => {
/**
 * Shell — esqueleto primitivo compartido: topbar + sidebar + slots que cada app
 * llena distinto. El chrome es SIEMPRE neutro de casa; el único acento del tenant
 * aquí es el ítem de nav ACTIVO. El núcleo define el esqueleto y los slots; el
 * chrome específico (CompanySelector, sidebar-por-permisos) es piel de cada app.
 *
 * `nav`: [{ section, items: [{ label, active, badge, disabled, children:[...] }] }]
 */
function Shell({
  tenantLogo,
  companySelector,
  user,
  mode = 'light',
  onToggleMode,
  onLogout,
  nav = [],
  footerLegal,
  children
}) {
  const modeIcon = mode === 'dark' ? '☾' : '☀';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid hsl(var(--border-subtle))',
      borderRadius: 14,
      overflow: 'hidden',
      background: 'hsl(var(--surface-base))'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '0 16px',
      height: 56,
      background: 'hsl(var(--surface-raised))',
      borderBottom: '1px solid hsl(var(--border-subtle))'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '4px 10px 4px 4px',
      borderRadius: 8,
      background: 'hsl(var(--surface-sunken))'
    }
  }, tenantLogo || /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      height: 24,
      borderRadius: 6,
      background: 'hsl(var(--text-primary))'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'hsl(var(--text-secondary))',
      fontSize: 12,
      fontWeight: 600
    }
  }, "slot: logo tenant"))), companySelector, /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, user && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'hsl(var(--text-secondary))',
      fontSize: 12
    }
  }, user), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onToggleMode,
    "aria-label": "Cambiar modo",
    style: {
      width: 32,
      height: 32,
      borderRadius: 8,
      border: '1px solid hsl(var(--border-strong))',
      background: 'hsl(var(--surface-base))',
      color: 'hsl(var(--text-secondary))',
      cursor: 'pointer'
    }
  }, modeIcon), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onLogout,
    style: {
      height: 30,
      padding: '0 12px',
      borderRadius: 8,
      border: '1px solid hsl(var(--border-strong))',
      background: 'hsl(var(--surface-base))',
      color: 'hsl(var(--text-secondary))',
      fontSize: 12,
      cursor: 'pointer'
    }
  }, "Salir"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      minHeight: 230
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 210,
      flex: 'none',
      background: 'hsl(var(--surface-sunken))',
      borderRight: '1px solid hsl(var(--border-subtle))',
      padding: '12px 10px',
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, nav.map((grp, gi) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: gi
  }, grp.section && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      textTransform: 'uppercase',
      letterSpacing: '.08em',
      color: 'hsl(var(--text-tertiary))',
      padding: '6px 8px'
    }
  }, grp.section), grp.items.map((it, ii) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: ii
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 8,
      padding: '8px 10px',
      borderRadius: 8,
      fontSize: 13,
      ...(it.active ? {
        background: 'hsl(var(--brand-primary))',
        color: 'hsl(var(--brand-foreground))',
        fontWeight: 600
      } : {
        color: it.disabled ? 'hsl(var(--text-tertiary))' : 'hsl(var(--text-secondary))'
      })
    }
  }, /*#__PURE__*/React.createElement("span", null, it.label), it.badge && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      padding: '1px 7px',
      borderRadius: 999,
      background: 'hsl(var(--surface-base))',
      border: '1px solid hsl(var(--border-subtle))',
      color: 'hsl(var(--text-tertiary))',
      fontWeight: 400
    }
  }, it.badge)), it.children && it.children.map((c, ci) => /*#__PURE__*/React.createElement("div", {
    key: ci,
    style: {
      padding: '6px 10px 6px 22px',
      fontSize: 12,
      color: 'hsl(var(--text-secondary))'
    }
  }, c))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: '16px 18px',
      background: 'hsl(var(--surface-base))'
    }
  }, children)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 16px',
      borderTop: '1px solid hsl(var(--border-subtle))',
      background: 'hsl(var(--surface-raised))',
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 11,
      color: 'hsl(var(--text-tertiary))'
    }
  }, /*#__PURE__*/React.createElement("span", null, footerLegal || 'slot footer · línea legal del tenant'), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500,
      color: 'hsl(var(--text-secondary))'
    }
  }, "Powered by Noctis Commerce")));
}
Object.assign(__ds_scope, { Shell });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Shell.jsx", error: String((e && e.message) || e) }); }

// components/layout/Wordmark.jsx
try { (() => {
const SIZES = {
  sm: [24, 8, 14],
  md: [26, 9, 15],
  lg: [34, 12, 19]
};

/**
 * Wordmark — marca de plataforma Noctis: mark grafito con punto de plata + wordmark.
 * Identidad de casa (negro y plata, disciplina de hardware). NO es el logo del
 * tenant: el shell tiene además un slot de logo de tenant variable. `onDark` invierte
 * para el "momento negro" (login, sin tenant).
 */
function Wordmark({
  size = 'md',
  showName = true,
  onDark = false
}) {
  const [box, dot, fs] = SIZES[size] || SIZES.md;
  const markBg = onDark ? '#E5E5EA' : 'hsl(var(--text-primary))';
  const dotBg = onDark ? '#1C1C1E' : 'hsl(var(--surface-raised))';
  const nameColor = onDark ? '#F5F5F7' : 'hsl(var(--text-primary))';
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: box,
      height: box,
      borderRadius: box * 0.27,
      background: markBg,
      display: 'grid',
      placeItems: 'center',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: dot,
      height: dot,
      borderRadius: '50%',
      background: dotBg
    }
  })), showName && /*#__PURE__*/React.createElement("span", {
    style: {
      font: `600 ${fs}px/1 var(--font-ui)`,
      letterSpacing: '-.02em',
      color: nameColor
    }
  }, "Noctis Commerce"));
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/navigation/ModeToggle.jsx
try { (() => {
/**
 * ModeToggle — vive en el chrome. Alterna claro/oscuro; es preferencia de USUARIO,
 * persistida, y aplica a ambas apps. El círculo del switch usa el acento del tenant.
 * Forma `pill` (con label) o `icon` (cuadrado 32×32 para topbar).
 */
function ModeToggle({
  mode = 'light',
  onToggle,
  shape = 'pill'
}) {
  const isDark = mode === 'dark';
  const icon = isDark ? '☾' : '☀';
  if (shape === 'icon') {
    return /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: onToggle,
      "aria-label": "Cambiar modo claro/oscuro",
      style: {
        width: 32,
        height: 32,
        borderRadius: 8,
        border: '1px solid hsl(var(--border-strong))',
        background: 'hsl(var(--surface-base))',
        color: 'hsl(var(--text-secondary))',
        cursor: 'pointer'
      }
    }, icon);
  }
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    role: "switch",
    "aria-checked": isDark,
    "aria-label": "Cambiar modo claro/oscuro",
    onClick: onToggle,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      height: 36,
      padding: '0 6px 0 14px',
      borderRadius: 999,
      border: '1px solid hsl(var(--border-strong))',
      background: 'hsl(var(--surface-base))',
      color: 'hsl(var(--text-secondary))',
      font: '500 12px/1 var(--font-ui)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("span", null, isDark ? 'Oscuro' : 'Claro'), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 26,
      height: 26,
      borderRadius: '50%',
      background: 'hsl(var(--brand-primary))',
      color: 'hsl(var(--brand-foreground))',
      display: 'grid',
      placeItems: 'center',
      fontSize: 13
    }
  }, icon));
}
Object.assign(__ds_scope, { ModeToggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/ModeToggle.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
const NOCTIS_TABS_CSS = `
.noctis-tabs__list{display:flex;gap:2px;border-bottom:1px solid hsl(var(--border-subtle));padding:0 8px;}
.noctis-tabs__tab{appearance:none;border:none;background:transparent;cursor:pointer;padding:12px 14px;font:500 13px/1 var(--font-ui);color:hsl(var(--text-tertiary));border-bottom:2px solid transparent;transition:color .12s;}
.noctis-tabs__tab:hover{color:hsl(var(--text-secondary));}
.noctis-tabs__tab[aria-selected="true"]{color:hsl(var(--brand-primary));border-bottom-color:hsl(var(--brand-primary));}
.noctis-tabs__tab:focus-visible{outline:2px solid hsl(var(--focus-ring));outline-offset:-2px;}
`;
if (typeof document !== 'undefined' && !document.getElementById('noctis-tabs-css')) {
  const s = document.createElement('style');
  s.id = 'noctis-tabs-css';
  s.textContent = NOCTIS_TABS_CSS;
  document.head.appendChild(s);
}

/**
 * Tabs — navegación de secciones. La pestaña activa usa el acento del tenant
 * (uno de los cuatro lugares permitidos: nav activo). Controlado por `value`.
 */
function Tabs({
  tabs = [],
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    className: "noctis-tabs__list"
  }, tabs.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.id,
    role: "tab",
    "aria-selected": value === t.id,
    className: "noctis-tabs__tab",
    onClick: () => onChange && onChange(t.id)
  }, t.label)));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/overlay/Sheet.jsx
try { (() => {
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
  const s = document.createElement('style');
  s.id = 'noctis-sheet-css';
  s.textContent = NOCTIS_SHEET_CSS;
  document.head.appendChild(s);
}

/**
 * Sheet — único primitivo de overlay del sistema. Panel centrado en desktop,
 * bottom-sheet en táctil. Solo para flujos multi-paso o de foco (cobro POS, crear
 * admin). role="dialog" + aria-modal, cierre con Esc, scrim. Las acciones
 * DESTRUCTIVAS NO usan Sheet: siguen con confirm inline de 2 pasos en la fila/Card.
 */
function Sheet({
  open,
  onClose,
  title,
  placement = 'center',
  children,
  footer
}) {
  React.useEffect(() => {
    if (!open) return;
    const onKey = e => {
      if (e.key === 'Escape' && onClose) onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "noctis-sheet__scrim",
    onMouseDown: e => {
      if (e.target === e.currentTarget && onClose) onClose();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: `noctis-sheet noctis-sheet--${placement}`,
    role: "dialog",
    "aria-modal": "true",
    "aria-label": typeof title === 'string' ? title : undefined
  }, title && /*#__PURE__*/React.createElement("div", {
    className: "noctis-sheet__head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "noctis-sheet__title"
  }, title), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "noctis-sheet__x",
    onClick: onClose,
    "aria-label": "Cerrar"
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "noctis-sheet__body"
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    className: "noctis-sheet__foot"
  }, footer)));
}
Object.assign(__ds_scope, { Sheet });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/Sheet.jsx", error: String((e && e.message) || e) }); }

// components/pos/NumericKeypad.jsx
try { (() => {
const NOCTIS_KP_CSS = `
.noctis-kp{border:1px solid hsl(var(--border-subtle));border-radius:16px;padding:18px;background:hsl(var(--surface-raised));width:264px;max-width:100%;}
.noctis-kp__display{background:hsl(var(--surface-sunken));border:1px solid hsl(var(--border-subtle));border-radius:10px;padding:12px 14px;text-align:right;font-variant-numeric:tabular-nums;font-feature-settings:'tnum';font:600 26px/1.2 var(--font-ui);margin-bottom:14px;overflow:hidden;}
.noctis-kp__grid{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;}
.noctis-kp__key{height:var(--kp-key);min-width:var(--kp-key);border-radius:12px;border:1px solid hsl(var(--border-subtle));background:hsl(var(--surface-base));color:hsl(var(--text-primary));font:500 22px/1 var(--font-ui);font-variant-numeric:tabular-nums;cursor:pointer;transition:transform .06s,background .06s;}
.noctis-kp__key--alt{background:hsl(var(--surface-sunken));color:hsl(var(--text-secondary));font-size:20px;}
.noctis-kp__key:active{transform:scale(.96);background:hsl(var(--brand-primary));color:hsl(var(--brand-foreground));}
.noctis-kp__key:focus-visible{outline:2px solid hsl(var(--focus-ring));outline-offset:2px;}
`;
if (typeof document !== 'undefined' && !document.getElementById('noctis-kp-css')) {
  const s = document.createElement('style');
  s.id = 'noctis-kp-css';
  s.textContent = NOCTIS_KP_CSS;
  document.head.appendChild(s);
}

/**
 * NumericKeypad — componente del núcleo (se funda aquí aunque el POS se dibuje en
 * commerce). Teclas ≥60×60 (64×64), layout 3×4, no depende del teclado del sistema,
 * soporta teclado físico. Feedback táctil inmediato: scale(.96) + fondo de marca.
 * Sirve para cantidad, precio y cobro. C limpia, ⌫ borra.
 */
function NumericKeypad({
  value,
  onChange,
  maxLength = 9
}) {
  const [internal, setInternal] = React.useState('');
  const controlled = value !== undefined;
  const v = controlled ? value : internal;
  const set = next => {
    if (controlled) {
      onChange && onChange(next);
    } else {
      setInternal(next);
      onChange && onChange(next);
    }
  };
  const push = k => {
    if (k === 'C') return set('');
    if (k === 'del') return set(String(v).slice(0, -1));
    set((String(v).replace(/^0$/, '') + k).slice(0, maxLength));
  };
  React.useEffect(() => {
    const onKey = e => {
      if (/^[0-9]$/.test(e.key)) push(e.key);else if (e.key === 'Backspace') push('del');else if (e.key === 'Escape' || e.key.toLowerCase() === 'c') push('C');
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });
  const K = ({
    k,
    alt,
    label,
    children
  }) => /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: ['noctis-kp__key', alt && 'noctis-kp__key--alt'].filter(Boolean).join(' '),
    onClick: () => push(k),
    "aria-label": label
  }, children);
  return /*#__PURE__*/React.createElement("div", {
    className: "noctis-kp"
  }, /*#__PURE__*/React.createElement("div", {
    className: "noctis-kp__display"
  }, v || '0'), /*#__PURE__*/React.createElement("div", {
    className: "noctis-kp__grid"
  }, ['1', '2', '3', '4', '5', '6', '7', '8', '9'].map(n => /*#__PURE__*/React.createElement(K, {
    key: n,
    k: n
  }, n)), /*#__PURE__*/React.createElement(K, {
    k: "C",
    alt: true,
    label: "Limpiar"
  }, "C"), /*#__PURE__*/React.createElement(K, {
    k: "0"
  }, "0"), /*#__PURE__*/React.createElement(K, {
    k: "del",
    alt: true,
    label: "Borrar"
  }, "\u232B")));
}
Object.assign(__ds_scope, { NumericKeypad });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/pos/NumericKeypad.jsx", error: String((e && e.message) || e) }); }

// ui_kits/backoffice/app.jsx
try { (() => {
/* Noctis · backoffice — ORQUESTADOR. Router de vistas, MODO por usuario (marca
   Noctis FIJA: cero acento de tenant, el par {primary,foreground} queda en el
   fallback de casa), guarda de salida con cambios sin guardar, y barra de PROTOTIPO
   (andamiaje tipo Storybook, no chrome de la app) para recorrer los 4 estados. */
const ANS = window.NoctisCommerceDesignSystem_4dfd35;
const {
  Toast: AToast,
  Button: ABtn,
  Card: ACard,
  Wordmark: AWordmark,
  Sheet: ASheet,
  Icon: AIcon
} = ANS;
const AD = window.BackofficeData;
function ProntoView({
  label
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(window.BoCrumbs, {
    items: [{
      label: 'Inicio'
    }, {
      label
    }]
  }), /*#__PURE__*/React.createElement(window.BoPageHeader, {
    title: label,
    meta: /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        fontSize: 12.5,
        color: 'hsl(var(--text-tertiary))'
      }
    }, /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true"
    }, "\u25F7"), " Pronto")
  }), /*#__PURE__*/React.createElement(ACard, null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '24px 8px',
      textAlign: 'center',
      maxWidth: 480,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 16px/22px var(--font-ui)'
    }
  }, "M\xF3dulo en construcci\xF3n"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '6px 0 0',
      color: 'hsl(var(--text-secondary))',
      fontSize: 13
    }
  }, "Este m\xF3dulo de plataforma a\xFAn no se construye en este corte. Se muestra en el men\xFA con la marca \xABPronto\xBB \u2014 mismo lenguaje de estado que commerce; el hueco se se\xF1ala, no se oculta."))));
}
function SignedOut({
  onBack
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: 600,
      display: 'grid',
      placeItems: 'center',
      borderRadius: 14,
      overflow: 'hidden',
      position: 'relative',
      background: 'linear-gradient(150deg,#000 0%,#1C1C1E 65%,#2C2C2E 100%)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(120% 90% at 90% -20%, rgba(255,255,255,.07), transparent 60%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(AWordmark, {
    onDark: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 20px/1.2 var(--font-ui)',
      color: '#F5F5F7',
      margin: '18px 0 6px'
    }
  }, "Sesi\xF3n cerrada"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: '#AEAEB2',
      fontSize: 13,
      margin: '0 0 18px'
    }
  }, "Cerr\xF3 la consola de plataforma de forma segura."), /*#__PURE__*/React.createElement(ABtn, {
    variant: "secondary",
    onClick: onBack
  }, "Volver a ingresar")));
}
function BackofficeApp() {
  const [mode, setMode] = React.useState('light');
  const [collapsed, setCollapsed] = React.useState(false);
  const [route, setRoute] = React.useState({
    view: 'dashboard'
  });
  const [activeModule, setActiveModule] = React.useState(null);
  const [listState, setListState] = React.useState('data');
  const [sectionState, setSectionState] = React.useState('data');
  const [toast, setToast] = React.useState(null);
  const [signedOut, setSignedOut] = React.useState(false);
  const [overrides, setOverrides] = React.useState({}); // id → estado (suspender/reactivar)
  const [dirty, setDirty] = React.useState(false);
  const [leave, setLeave] = React.useState(null); // navegación pendiente por cambios sin guardar

  const staff = AD.STAFF;
  const showToast = msg => setToast(msg);
  const go = (view, extra = {}) => setRoute({
    view,
    ...extra
  });
  const tenant = route.tenantId ? (() => {
    const t = AD.TENANTS.find(x => x.id === route.tenantId);
    return t && overrides[t.id] ? {
      ...t,
      estado: overrides[t.id]
    } : t;
  })() : null;

  // GUARD DE NAVEGACIÓN — camino 1 (in-app). TODO handler de navegación del shell
  // (sidebar, breadcrumb, tarjetas del dashboard, logout) pasa por acá: si hay draft
  // sin guardar, se ABORTA la navegación y se abre el Sheet de aviso; la función
  // pendiente se ejecuta solo al confirmar. El camino 2 (cerrar pestaña / refresh) es
  // el beforeunload del detalle.
  // NOTA Next (App Router): beforeunload NO intercepta el cambio de ruta de cliente y
  // no hay API estable para abortar navegación (no existe router.events del Pages
  // Router). Al portar, envolver cada <Link> y cada router.push() en este mismo
  // chequeo de `dirty` — no confiar solo en beforeunload. Ver README del kit.
  const guardedNav = fn => {
    if (dirty) setLeave(() => fn);else fn();
  };
  // Si el draft se descarta o guarda mientras el aviso est\u00e1 abierto, el guard ya no
  // aplica: se cierra solo en vez de quedar pendiente sobre una navegaci\u00f3n resuelta.
  React.useEffect(() => {
    if (!dirty && leave) setLeave(null);
  }, [dirty]); // eslint-disable-line
  const confirmLeave = () => {
    const fn = leave;
    setDirty(false);
    setLeave(null);
    fn && fn();
  };
  const onNavigate = item => guardedNav(() => {
    if (!item.built) {
      setActiveModule(item.id);
      go('pronto', {
        prontoLabel: item.label
      });
      return;
    }
    setActiveModule(item.id);
    if (item.id === 'tenants') {
      setListState('data');
      go('tenants');
    } else if (item.id === 'catalogo') {
      setSectionState('data');
      go('catalogo');
    }
  });
  const onSuspendToggle = (id, suspend) => {
    setOverrides(o => ({
      ...o,
      [id]: suspend ? 'suspendido' : 'activo'
    }));
    showToast(suspend ? 'Tenant suspendido · alcance tenant (una sola cuenta).' : 'Tenant reactivado.');
  };
  let content;
  switch (route.view) {
    case 'dashboard':
      content = /*#__PURE__*/React.createElement(window.BackofficeDashboard, {
        staff: staff,
        tenants: AD.TENANTS,
        onGoTenants: () => onNavigate({
          id: 'tenants',
          built: true,
          label: 'Tenants'
        }),
        onGoCatalogo: () => onNavigate({
          id: 'catalogo',
          built: true,
          label: 'Catálogo de módulos'
        })
      });
      break;
    case 'pronto':
      content = /*#__PURE__*/React.createElement(ProntoView, {
        label: route.prontoLabel
      });
      break;
    case 'tenants':
      content = /*#__PURE__*/React.createElement(window.BoTenantsList, {
        listState: listState,
        onRetry: () => setListState('data'),
        onOpen: id => {
          setSectionState('data');
          go('tenant-detalle', {
            tenantId: id
          });
        }
      });
      break;
    case 'tenant-detalle':
      content = /*#__PURE__*/React.createElement(window.BoTenantDetail, {
        tenant: tenant,
        sectionState: sectionState,
        onRetry: () => setSectionState('data'),
        onBack: () => guardedNav(() => {
          setActiveModule('tenants');
          go('tenants');
        }),
        onToast: showToast,
        onDirtyChange: setDirty,
        onSuspendToggle: onSuspendToggle
      });
      break;
    case 'catalogo':
      content = /*#__PURE__*/React.createElement(window.BoModuleCatalog, {
        sectionState: sectionState,
        onRetry: () => setSectionState('data'),
        onToast: showToast
      });
      break;
    default:
      content = null;
  }

  // marca Noctis FIJA — fallback de casa; NUNCA se inyecta acento de tenant.
  // Se dejan explícitos para dejar claro que backoffice no toca el par de marca.
  const houseVars = mode === 'dark' ? {
    '--brand-primary': '240 6% 90%',
    '--brand-foreground': '240 6% 12%'
  } // plata (oscuro)
  : {
    '--brand-primary': '240 6% 12%',
    '--brand-foreground': '0 0% 100%'
  }; // grafito (claro)

  const listScreens = ['tenants'];
  const sectionScreens = ['tenant-detalle', 'catalogo'];
  const showState = listScreens.includes(route.view) || sectionScreens.includes(route.view);
  const isList = listScreens.includes(route.view);
  return /*#__PURE__*/React.createElement("div", {
    "data-mode": mode,
    style: {
      minHeight: '100vh',
      background: 'hsl(var(--surface-sunken))',
      color: 'hsl(var(--text-primary))',
      fontFamily: 'var(--font-ui)',
      ...houseVars
    }
  }, /*#__PURE__*/React.createElement(PrototypeBar, {
    showState: showState,
    isList: isList,
    listState: listState,
    setListState: setListState,
    sectionState: sectionState,
    setSectionState: setSectionState,
    stateLabel: isList ? 'Estado lista' : route.view === 'catalogo' ? 'Estado catálogo' : 'Estado sección',
    mode: mode,
    onToggleMode: () => setMode(m => m === 'light' ? 'dark' : 'light')
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1360,
      margin: '0 auto',
      padding: '16px 20px 28px'
    }
  }, signedOut ? /*#__PURE__*/React.createElement(SignedOut, {
    onBack: () => {
      setSignedOut(false);
      go('dashboard');
      setActiveModule(null);
    }
  }) : /*#__PURE__*/React.createElement(window.BackofficeShell, {
    staff: staff,
    mode: mode,
    onToggleMode: () => setMode(m => m === 'light' ? 'dark' : 'light'),
    onLogout: () => guardedNav(() => setSignedOut(true)),
    activeModule: activeModule,
    onNavigate: onNavigate,
    collapsed: collapsed,
    onToggleCollapse: () => setCollapsed(c => !c)
  }, content)), /*#__PURE__*/React.createElement(ASheet, {
    open: !!leave,
    onClose: () => setLeave(null),
    title: "Tiene cambios sin guardar",
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ABtn, {
      variant: "ghost",
      onClick: () => setLeave(null)
    }, "Seguir editando"), /*#__PURE__*/React.createElement(ABtn, {
      variant: "danger",
      onClick: confirmLeave
    }, "Descartar y salir"))
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 13.5,
      color: 'hsl(var(--text-secondary))'
    }
  }, "Los cambios en el \xE1rbol de entitlements no se han aplicado al tenant. Si sale ahora, se descartar\xE1n. Nada se aplica hasta guardar.")), toast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      left: 0,
      right: 0,
      bottom: 22,
      display: 'flex',
      justifyContent: 'center',
      zIndex: 50,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      pointerEvents: 'auto'
    }
  }, /*#__PURE__*/React.createElement(AToast, {
    onDismiss: () => setToast(null)
  }, toast))));
}

/* Barra de PROTOTIPO — andamiaje, NO chrome. En backoffice no hay ejes tenant/perfil
   (marca Noctis fija, sidebar fija): se muestra el modo, el recordatorio de marca
   fija, y los 4 estados del kit de la pantalla con datos. */
function PrototypeBar({
  showState,
  isList,
  listState,
  setListState,
  sectionState,
  setSectionState,
  stateLabel,
  mode,
  onToggleMode
}) {
  const {
    BoSegmented
  } = window;
  const stateOpts = [{
    value: 'data',
    label: 'Datos'
  }, {
    value: 'loading',
    label: 'Cargando'
  }, {
    value: 'empty',
    label: 'Vacío'
  }, {
    value: 'error',
    label: 'Error'
  }, {
    value: 'forbidden',
    label: '403'
  }];
  const hasEmpty = isList; // "vacío" solo aplica a la lista
  const opts = hasEmpty ? stateOpts : stateOpts.filter(o => o.value !== 'empty');
  return /*#__PURE__*/React.createElement("div", {
    "data-mode": "dark",
    style: {
      background: '#0A0A0B',
      borderBottom: '1px solid #26262A',
      color: '#F5F5F7'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1360,
      margin: '0 auto',
      padding: '10px 20px',
      display: 'flex',
      alignItems: 'center',
      gap: 20,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 999,
      background: '#8E8E93'
    },
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '.09em',
      textTransform: 'uppercase',
      color: '#AEAEB2'
    }
  }, "Prototipo \xB7 backoffice")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: '#8E8E93'
    }
  }, "Modo"), /*#__PURE__*/React.createElement(BoSegmented, {
    ariaLabel: "Modo",
    value: mode,
    onChange: () => onToggleMode(),
    options: [{
      value: 'light',
      label: 'Claro'
    }, {
      value: 'dark',
      label: 'Oscuro'
    }]
  })), /*#__PURE__*/React.createElement("div", {
    title: "Backoffice no es temeable por tenant: la marca queda en el fallback de casa (grafito claro / plata oscuro).",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 7,
      fontSize: 11,
      color: '#8E8E93'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 13,
      height: 13,
      borderRadius: 4,
      background: mode === 'dark' ? '#E4E4E7' : '#1f1f22',
      border: '1px solid rgba(255,255,255,.2)'
    },
    "aria-hidden": "true"
  }), "Marca Noctis fija \xB7 sin acento de tenant"), showState && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginLeft: 'auto'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: '#8E8E93'
    }
  }, stateLabel), /*#__PURE__*/React.createElement(BoSegmented, {
    ariaLabel: "Estado",
    value: isList ? listState : sectionState,
    onChange: isList ? setListState : setSectionState,
    options: opts
  }))));
}
window.BackofficeApp = BackofficeApp;
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(BackofficeApp, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/backoffice/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/backoffice/catalogo.jsx
try { (() => {
/* Noctis · backoffice — CATÁLOGO de módulos/submódulos/acciones. APPEND-ONLY:
   el status es active/deprecated y NO existe borrado físico → la UI no ofrece
   ninguna afordancia de eliminar, solo DEPRECAR. Deprecar es acción de ALCANCE
   PLATAFORMA (cascadea a todos los tenants) → Sheet del núcleo con escritura del
   nombre + línea de impacto. El path de máquina NUNCA se muestra. */
const CAT = window.NoctisCommerceDesignSystem_4dfd35;
const {
  Button: CBtn,
  Card: CCard,
  Icon: CIcon,
  Badge: CBadge
} = CAT;
const CD = window.BackofficeData;

/* Impacto: cuántos tenants tienen habilitado ≥1 submódulo de un módulo (o el sub). */
function tenantsWithSub(subId) {
  return Object.values(CD.ENTITLEMENTS).filter(e => !!e[subId]).length;
}
function tenantsWithModule(m) {
  const ids = new Set(m.submodulos.map(s => s.id));
  return Object.values(CD.ENTITLEMENTS).filter(e => Object.keys(e).some(k => ids.has(k) && e[k])).length;
}
function ModuleCatalog({
  sectionState,
  onRetry,
  onToast
}) {
  // status deprecado LOCAL de la sesión (encima del dato base), por id de módulo/sub
  const [depd, setDepd] = React.useState({});
  const [open, setOpen] = React.useState(() => new Set(['productos']));
  const [showDeprecated, setShowDeprecated] = React.useState(true);
  const [sheet, setSheet] = React.useState(null); // { kind:'module'|'sub', id, display, impact }
  const [pending, setPending] = React.useState(false);
  const statusOf = (base, id) => depd[id] || base;
  const header = /*#__PURE__*/React.createElement(window.BoPageHeader, {
    title: "Cat\xE1logo de m\xF3dulos",
    meta: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(CIcon, {
      name: "package",
      size: 16,
      style: {
        color: 'hsl(var(--text-tertiary))'
      }
    }), /*#__PURE__*/React.createElement("span", null, "Append-only \xB7 los \xEDtems se deprecan, nunca se borran"))
  });
  if (sectionState === 'loading') return /*#__PURE__*/React.createElement(React.Fragment, null, header, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(window.BoTableSkeleton, {
    columns: [{
      key: 'a',
      w: '50%'
    }, {
      key: 'b',
      pill: true,
      w: '25%'
    }],
    rows: 6
  })));
  if (sectionState === 'error') return /*#__PURE__*/React.createElement(React.Fragment, null, header, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(window.BoErrorState, {
    context: "el cat\xE1logo de m\xF3dulos",
    errorId: "ERR-CAT-5108",
    onRetry: onRetry
  })));
  if (sectionState === 'forbidden') return /*#__PURE__*/React.createElement(React.Fragment, null, header, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(window.BoForbiddenState, {
    resource: "el cat\xE1logo de m\xF3dulos",
    onHome: onRetry
  })));
  const openDeprecate = (kind, node) => {
    const impact = kind === 'module' ? tenantsWithModule(node) : tenantsWithSub(node.id);
    setSheet({
      kind,
      id: node.id,
      display: node.display,
      impact
    });
  };
  const confirmDeprecate = () => {
    setPending(true);
    setTimeout(() => {
      const next = {
        ...depd,
        [sheet.id]: 'deprecated'
      };
      // deprecar un módulo cascadea a sus submódulos y acciones
      if (sheet.kind === 'module') {
        const m = CD.MODULES.find(x => x.id === sheet.id);
        m.submodulos.forEach(s => {
          next[s.id] = 'deprecated';
        });
      }
      setDepd(next);
      setPending(false);
      setSheet(null);
      onToast(`«${sheet.display}» deprecado · los ${sheet.impact} tenant${sheet.impact === 1 ? '' : 's'} que ya lo tenían lo conservan.`);
    }, 950);
  };
  const modules = CD.MODULES;
  /* Alcance declarado UNA VEZ a nivel de pantalla. En el catálogo TODA acción
     (deprecar) es de alcance plataforma, así que un chip por fila no discriminaría
     nada — estaría en el 100% de los ítems y el ojo lo filtraría. La fricción que
     protege la acción es el Sheet con escritura del nombre e impacto, intacto. */
  const notice = /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(window.BoPlatformScopeBanner, null, "Toda acci\xF3n de este cat\xE1logo afecta a la plataforma completa: deprecar un \xEDtem cascadea a cada tenant. Cada deprecaci\xF3n pide escribir el nombre del \xEDtem y muestra cu\xE1ntos tenants lo tienen habilitado antes de confirmar."), /*#__PURE__*/React.createElement(CAT.Alert, {
    tone: "info"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      marginBottom: 3
    }
  }, "Este cat\xE1logo es append-only"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13
    }
  }, "Un \xEDtem no se elimina: se depreca. Los tenants que ya lo ten\xEDan habilitado lo conservan (grandfathering); no se puede habilitar en tenants nuevos. Por eso no hay acci\xF3n de borrar \u2014 solo deprecar.")));
  return /*#__PURE__*/React.createElement(React.Fragment, null, header, notice, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginBottom: 14,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(window.BoSegmented, {
    ariaLabel: "Ver deprecados",
    value: showDeprecated ? 'all' : 'active',
    onChange: v => setShowDeprecated(v === 'all'),
    options: [{
      value: 'all',
      label: 'Todos'
    }, {
      value: 'active',
      label: 'Solo activos'
    }]
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'hsl(var(--text-tertiary))'
    }
  }, "El estado deprecado usa la pill terminal del n\xFAcleo \u2014 el mismo lenguaje que \xABDescontinuado\xBB en commerce.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, modules.map(m => {
    const mStatus = m.intrinsic ? 'active' : statusOf(m.status, m.id);
    const isDep = mStatus === 'deprecated';
    if (isDep && !showDeprecated) return null;
    const expanded = open.has(m.id);
    const impact = tenantsWithModule(m);
    return /*#__PURE__*/React.createElement("div", {
      key: m.id,
      style: {
        border: '1px solid hsl(var(--border-subtle))',
        borderRadius: 12,
        background: 'hsl(var(--surface-raised))',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '14px 16px'
      }
    }, /*#__PURE__*/React.createElement(CIcon, {
      module: m.id,
      size: 20,
      style: {
        color: 'hsl(var(--text-secondary))',
        flex: 'none'
      }
    }), /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: () => setOpen(s => {
        const n = new Set(s);
        n.has(m.id) ? n.delete(m.id) : n.add(m.id);
        return n;
      }),
      "aria-expanded": expanded,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        border: 0,
        background: 'none',
        padding: 0,
        cursor: 'pointer',
        font: 'inherit',
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 600,
        fontSize: 15,
        color: 'hsl(var(--text-primary))'
      }
    }, m.display), /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        color: 'hsl(var(--text-tertiary))',
        transform: expanded ? 'rotate(180deg)' : 'none',
        transition: 'transform .12s',
        fontSize: 11
      }
    }, "\u25BE")), /*#__PURE__*/React.createElement(StatusMark, {
      status: mStatus,
      intrinsic: m.intrinsic
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        marginLeft: 'auto',
        display: 'flex',
        alignItems: 'center',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: 'hsl(var(--text-tertiary))',
        fontVariantNumeric: 'tabular-nums'
      }
    }, m.submodulos.length, " subm\xF3dulos"), !m.intrinsic && !isDep && /*#__PURE__*/React.createElement(CBtn, {
      variant: "danger-ghost",
      size: "sm",
      onClick: () => openDeprecate('module', m)
    }, "Deprecar"))), expanded && /*#__PURE__*/React.createElement("div", {
      style: {
        borderTop: '1px solid hsl(var(--border-subtle))',
        padding: '10px 16px 14px'
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '2px 0 12px',
        fontSize: 12.5,
        color: 'hsl(var(--text-secondary))',
        maxWidth: '82ch'
      }
    }, m.descripcion), isDep && /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: 12
      }
    }, /*#__PURE__*/React.createElement(ImpactNote, {
      impact: impact
    })), m.intrinsic && /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: 10,
        fontSize: 12.5,
        color: 'hsl(var(--text-secondary))'
      }
    }, "Intr\xEDnseco: presente en toda cuenta. No se deprecas ni se deshabilita."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 8
      }
    }, m.submodulos.map(s => {
      const sStatus = m.intrinsic ? 'active' : statusOf(s.status, s.id);
      const sDep = sStatus === 'deprecated';
      if (sDep && !showDeprecated) return null;
      const sImpact = tenantsWithSub(s.id);
      return /*#__PURE__*/React.createElement("div", {
        key: s.id,
        style: {
          border: '1px solid hsl(var(--border-subtle))',
          borderRadius: 10,
          background: 'hsl(var(--surface-base))',
          padding: '11px 13px'
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          flexWrap: 'wrap'
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          fontWeight: 500,
          fontSize: 13.5,
          color: sDep ? 'hsl(var(--text-secondary))' : 'hsl(var(--text-primary))'
        }
      }, s.display), /*#__PURE__*/React.createElement(StatusMark, {
        status: sStatus,
        small: true
      }), /*#__PURE__*/React.createElement("div", {
        style: {
          marginLeft: 'auto',
          display: 'flex',
          alignItems: 'center',
          gap: 10
        }
      }, !m.intrinsic && !sDep && /*#__PURE__*/React.createElement(CBtn, {
        variant: "danger-ghost",
        size: "sm",
        onClick: () => openDeprecate('sub', s)
      }, "Deprecar"))), /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          flexWrap: 'wrap',
          gap: 6,
          marginTop: 9
        }
      }, s.acciones.map(a => {
        const aDep = m.intrinsic ? false : statusOf(a.status, a.path) === 'deprecated' || sDep;
        return /*#__PURE__*/React.createElement("span", {
          key: a.path,
          style: {
            display: 'inline-flex',
            alignItems: 'center',
            gap: 5,
            fontSize: 11.5,
            padding: '3px 9px',
            borderRadius: 999,
            border: '1px solid hsl(var(--border-subtle))',
            background: 'hsl(var(--surface-raised))',
            color: aDep ? 'hsl(var(--text-tertiary))' : 'hsl(var(--text-secondary))',
            textDecoration: aDep ? 'line-through' : 'none'
          }
        }, a.display);
      })), sDep && /*#__PURE__*/React.createElement("div", {
        style: {
          marginTop: 9
        }
      }, /*#__PURE__*/React.createElement(ImpactNote, {
        impact: sImpact
      })));
    }))));
  })), sheet && /*#__PURE__*/React.createElement(window.BoDangerConfirmSheet, {
    open: !!sheet,
    onClose: () => setSheet(null),
    title: `Deprecar «${sheet.display}»`,
    confirmLabel: "Deprecar",
    matchText: sheet.display,
    pending: pending,
    onConfirm: confirmDeprecate,
    warning: sheet.kind === 'module' ? 'Deprecar el módulo cascadea a todos sus submódulos y acciones. No se puede eliminar; queda como deprecado en todo el catálogo.' : 'Deprecar el submódulo cascadea a sus acciones. No se puede eliminar; queda como deprecado en todo el catálogo.',
    impact: sheet.impact > 0 ? `${sheet.impact} tenant${sheet.impact === 1 ? '' : 's'} lo tiene${sheet.impact === 1 ? '' : 'n'} habilitado — lo conservará${sheet.impact === 1 ? '' : 'n'} (grandfathering). No se podrá habilitar en tenants nuevos.` : 'Ningún tenant lo tiene habilitado actualmente. No se podrá habilitar en tenants nuevos.'
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'hsl(var(--text-secondary))'
    }
  }, "Escriba el nombre para confirmar. Recuerde: esto es append-only \u2014 deprecar es reversible reactivando el \xEDtem, pero el borrado f\xEDsico no existe.")));
}
function StatusMark({
  status,
  intrinsic,
  small
}) {
  if (intrinsic) {
    return /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 5,
        fontSize: small ? 10 : 10.5,
        fontWeight: 600,
        padding: '2px 9px',
        borderRadius: 999,
        background: 'hsl(var(--surface-sunken))',
        border: '1px solid hsl(var(--border-subtle))',
        color: 'hsl(var(--text-secondary))'
      }
    }, /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true"
    }, "\u25CF"), " Intr\xEDnseco");
  }
  /* Deprecado = pill terminal del núcleo (igual que «Descontinuado» en commerce).
     Sin atenuación ni borde punteado: esos signos son "futuro pendiente" (Pronto /
     slot reservado) y deprecado es pasado terminal. */
  if (status === 'deprecated') return /*#__PURE__*/React.createElement(CBadge, {
    tone: "terminal"
  }, "Deprecado");
  return /*#__PURE__*/React.createElement(CBadge, {
    tone: "success",
    dot: true
  }, "Activo");
}
function ImpactNote({
  impact
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      fontSize: 12.5,
      color: 'hsl(var(--text-secondary))'
    }
  }, /*#__PURE__*/React.createElement(CIcon, {
    name: "building-2",
    size: 16,
    style: {
      color: 'hsl(var(--text-tertiary))',
      flex: 'none'
    }
  }), /*#__PURE__*/React.createElement("span", null, impact > 0 ? `${impact} tenant${impact === 1 ? '' : 's'} lo conserva${impact === 1 ? '' : 'n'} (grandfathered). No se habilita en tenants nuevos.` : 'Ningún tenant lo tiene. No se habilita en tenants nuevos.'));
}
Object.assign(window, {
  BoModuleCatalog: ModuleCatalog
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/backoffice/catalogo.jsx", error: String((e && e.message) || e) }); }

// ui_kits/backoffice/data.js
try { (() => {
/* Noctis · backoffice — datos mock del prototipo (platform-admin).
   display_name en español SIEMPRE; el path de máquina (sales.invoices.create) es
   artefacto de log/debug y NUNCA se muestra en la UI — vive acá solo como dato.
   Formatos es-EC: DD/MM/YYYY, $1.234,56. Sin emoji. */
(function () {
  /* ── Identidad del usuario de plataforma ─────────────────────────────────
     Personal de Noctis, no de la PYME. Sus acciones afectan a TODOS los tenants. */
  const STAFF = {
    name: 'Operaciones de plataforma',
    email: 'operaciones@noctis.ec',
    rol: 'Administrador de plataforma'
  };

  /* ── Navegación FIJA (no por permisos, a diferencia de commerce) ──────────
     Sin CompanySelector, sin logo de tenant, sin slot de sucursal — son conceptos
     de commerce. Construido en este corte: Tenants + Catálogo. El resto usa el
     MISMO lenguaje de estado de módulo que commerce (chip "Pronto", informativo). */
  const NAV = [{
    section: 'Plataforma',
    items: [{
      id: 'tenants',
      label: 'Tenants',
      icon: 'building-2',
      built: true
    }, {
      id: 'catalogo',
      label: 'Catálogo de módulos',
      icon: 'package',
      built: true
    }]
  }, {
    section: 'Operación',
    items: [{
      id: 'staff',
      label: 'Usuarios de plataforma',
      icon: 'shield-check',
      built: false
    }, {
      id: 'auditoria',
      label: 'Auditoría',
      icon: 'file-text',
      built: false
    }]
  }];

  /* ── Estado de un tenant (vocabulario del negocio, StatusPill) ─────────────
     'cancelado' es terminal. 'suspendido' deja a la PYME sin poder trabajar. */
  const TENANT_ESTADO = {
    activo: {
      tone: 'success',
      dot: true,
      label: 'Activo'
    },
    prueba: {
      tone: 'info',
      dot: true,
      label: 'En prueba'
    },
    moroso: {
      tone: 'warning',
      dot: true,
      label: 'Con mora'
    },
    suspendido: {
      tone: 'danger',
      dot: true,
      label: 'Suspendido'
    },
    cancelado: {
      tone: 'terminal',
      dot: false,
      label: 'Cancelado'
    }
  };

  /* ── Lista de tenants (las PYMEs clientes) ────────────────────────────────
     razón social = display_name; el RUC es dato del negocio (no un UUID de máquina). */
  const TENANTS = [{
    id: 't1',
    nombre: 'Librería Aguilar S.A.',
    ruc: '1790012345001',
    plan: 'Comercio Plus',
    estado: 'activo',
    sucursales: 5,
    usuarios: 23,
    alta: '04/03/2024',
    producto: 'commerce'
  }, {
    id: 't2',
    nombre: 'Farmacia San Rafael',
    ruc: '0990554433001',
    plan: 'Comercio',
    estado: 'activo',
    sucursales: 2,
    usuarios: 11,
    alta: '19/07/2024',
    producto: 'commerce'
  }, {
    id: 't3',
    nombre: 'El Rincón Ferretero Cía. Ltda.',
    ruc: '1792233445001',
    plan: 'Comercio Plus',
    estado: 'moroso',
    sucursales: 3,
    usuarios: 14,
    alta: '28/05/2024',
    producto: 'commerce'
  }, {
    id: 't4',
    nombre: 'Panadería La Espiga',
    ruc: '0925667788001',
    plan: 'Comercio',
    estado: 'prueba',
    sucursales: 1,
    usuarios: 3,
    alta: '02/07/2026',
    producto: 'commerce'
  }, {
    id: 't5',
    nombre: 'Distribuidora Andina',
    ruc: '1791122334001',
    plan: 'Comercio Plus',
    estado: 'activo',
    sucursales: 8,
    usuarios: 41,
    alta: '11/01/2024',
    producto: 'commerce'
  }, {
    id: 't6',
    nombre: 'Óptica Visión Clara',
    ruc: '1710099887001',
    plan: 'Comercio',
    estado: 'suspendido',
    sucursales: 1,
    usuarios: 5,
    alta: '30/09/2025',
    producto: 'commerce'
  }, {
    id: 't7',
    nombre: 'Ferreterías del Austro S.A.',
    ruc: '0190334455001',
    plan: 'Comercio Plus',
    estado: 'activo',
    sucursales: 6,
    usuarios: 29,
    alta: '15/11/2024',
    producto: 'commerce'
  }, {
    id: 't8',
    nombre: 'Comercial Pichincha',
    ruc: '1793344556001',
    plan: 'Comercio',
    estado: 'cancelado',
    sucursales: 0,
    usuarios: 0,
    alta: '08/02/2023',
    producto: 'commerce'
  }, {
    id: 't9',
    nombre: 'Boutique Almendra',
    ruc: '0955778899001',
    plan: 'Comercio',
    estado: 'activo',
    sucursales: 2,
    usuarios: 8,
    alta: '21/04/2025',
    producto: 'commerce'
  }, {
    id: 't10',
    nombre: 'Agroinsumos del Valle',
    ruc: '1712344556001',
    plan: 'Comercio Plus',
    estado: 'activo',
    sucursales: 4,
    usuarios: 19,
    alta: '03/06/2025',
    producto: 'commerce'
  }, {
    id: 't11',
    nombre: 'Repuestos El Motor',
    ruc: '1790556677001',
    plan: 'Comercio',
    estado: 'moroso',
    sucursales: 2,
    usuarios: 7,
    alta: '17/08/2025',
    producto: 'commerce'
  }, {
    id: 't12',
    nombre: 'Cafetería Origen',
    ruc: '1715667788001',
    plan: 'Comercio',
    estado: 'prueba',
    sucursales: 1,
    usuarios: 2,
    alta: '12/07/2026',
    producto: 'commerce'
  }];

  /* ── Catálogo de módulos/submódulos/acciones ──────────────────────────────
     APPEND-ONLY: el status es 'active' | 'deprecated'; NO existe borrado físico,
     por lo tanto la UI no ofrece ninguna afordancia de eliminar (ver catalogo.jsx).
     `path` es el identificador de máquina — NUNCA se muestra en la UI. Cada módulo
     y submódulo tiene su display_name en español.
     ADMINISTRATION es intrínseco: siempre disponible, nunca entitlement-gated. */
  const MODULES = [{
    id: 'administracion',
    display: 'Administración',
    path: 'administration',
    intrinsic: true,
    status: 'active',
    descripcion: 'Módulo intrínseco de toda cuenta: gestión de usuarios, empresa y sucursales. No se habilita ni deshabilita.',
    submodulos: [{
      id: 'adm_usuarios',
      display: 'Usuarios y roles',
      path: 'administration.users',
      status: 'active',
      acciones: [{
        display: 'Ver',
        path: 'administration.users.read',
        status: 'active'
      }, {
        display: 'Invitar',
        path: 'administration.users.invite',
        status: 'active'
      }, {
        display: 'Editar rol',
        path: 'administration.users.assign_role',
        status: 'active'
      }]
    }, {
      id: 'adm_empresa',
      display: 'Datos de empresa',
      path: 'administration.company',
      status: 'active',
      acciones: [{
        display: 'Ver',
        path: 'administration.company.read',
        status: 'active'
      }, {
        display: 'Editar',
        path: 'administration.company.update',
        status: 'active'
      }]
    }, {
      id: 'adm_sucursales',
      display: 'Sucursales',
      path: 'administration.branches',
      status: 'active',
      acciones: [{
        display: 'Ver',
        path: 'administration.branches.read',
        status: 'active'
      }, {
        display: 'Crear',
        path: 'administration.branches.create',
        status: 'active'
      }]
    }]
  }, {
    id: 'productos',
    display: 'Productos',
    path: 'products',
    status: 'active',
    descripcion: 'Catálogo de productos madre, variantes y códigos de barras.',
    submodulos: [{
      id: 'prod_catalogo',
      display: 'Catálogo',
      path: 'products.catalog',
      status: 'active',
      acciones: [{
        display: 'Ver',
        path: 'products.catalog.read',
        status: 'active'
      }, {
        display: 'Crear',
        path: 'products.catalog.create',
        status: 'active'
      }, {
        display: 'Editar',
        path: 'products.catalog.update',
        status: 'active'
      }, {
        display: 'Descontinuar',
        path: 'products.catalog.discontinue',
        status: 'active'
      }]
    }, {
      id: 'prod_variantes',
      display: 'Variantes',
      path: 'products.variants',
      status: 'active',
      acciones: [{
        display: 'Ver',
        path: 'products.variants.read',
        status: 'active'
      }, {
        display: 'Crear',
        path: 'products.variants.create',
        status: 'active'
      }]
    }, {
      id: 'prod_categorias',
      display: 'Categorías',
      path: 'products.categories',
      status: 'active',
      acciones: [{
        display: 'Ver',
        path: 'products.categories.read',
        status: 'active'
      }, {
        display: 'Crear',
        path: 'products.categories.create',
        status: 'active'
      }]
    }, {
      id: 'prod_codigos',
      display: 'Códigos de barras',
      path: 'products.barcodes',
      status: 'active',
      acciones: [{
        display: 'Ver',
        path: 'products.barcodes.read',
        status: 'active'
      }, {
        display: 'Fijar primario',
        path: 'products.barcodes.set_primary',
        status: 'active'
      }]
    }]
  }, {
    id: 'ventas',
    display: 'Ventas',
    path: 'sales',
    status: 'active',
    descripcion: 'Facturas, notas de crédito y cotizaciones.',
    submodulos: [{
      id: 'ven_facturas',
      display: 'Facturas',
      path: 'sales.invoices',
      status: 'active',
      acciones: [{
        display: 'Ver',
        path: 'sales.invoices.read',
        status: 'active'
      }, {
        display: 'Crear',
        path: 'sales.invoices.create',
        status: 'active'
      }, {
        display: 'Anular',
        path: 'sales.invoices.void',
        status: 'active'
      }]
    }, {
      id: 'ven_notas',
      display: 'Notas de crédito',
      path: 'sales.credit_notes',
      status: 'active',
      acciones: [{
        display: 'Ver',
        path: 'sales.credit_notes.read',
        status: 'active'
      }, {
        display: 'Crear',
        path: 'sales.credit_notes.create',
        status: 'active'
      }]
    }, {
      id: 'ven_cotizaciones',
      display: 'Cotizaciones',
      path: 'sales.quotes',
      status: 'deprecated',
      acciones: [{
        display: 'Ver',
        path: 'sales.quotes.read',
        status: 'deprecated'
      }, {
        display: 'Crear',
        path: 'sales.quotes.create',
        status: 'deprecated'
      }]
    }]
  }, {
    id: 'inventario',
    display: 'Inventario',
    path: 'inventory',
    status: 'active',
    descripcion: 'Kardex, transferencias entre bodegas y ajustes.',
    submodulos: [{
      id: 'inv_kardex',
      display: 'Kardex',
      path: 'inventory.kardex',
      status: 'active',
      acciones: [{
        display: 'Ver',
        path: 'inventory.kardex.read',
        status: 'active'
      }]
    }, {
      id: 'inv_transferencias',
      display: 'Transferencias',
      path: 'inventory.transfers',
      status: 'active',
      acciones: [{
        display: 'Ver',
        path: 'inventory.transfers.read',
        status: 'active'
      }, {
        display: 'Crear',
        path: 'inventory.transfers.create',
        status: 'active'
      }]
    }, {
      id: 'inv_ajustes',
      display: 'Ajustes',
      path: 'inventory.adjustments',
      status: 'active',
      acciones: [{
        display: 'Ver',
        path: 'inventory.adjustments.read',
        status: 'active'
      }, {
        display: 'Aprobar',
        path: 'inventory.adjustments.approve',
        status: 'active'
      }]
    }]
  }, {
    id: 'compras',
    display: 'Compras',
    path: 'purchasing',
    status: 'active',
    descripcion: 'Órdenes de compra y recepciones de mercadería.',
    submodulos: [{
      id: 'com_ordenes',
      display: 'Órdenes de compra',
      path: 'purchasing.orders',
      status: 'active',
      acciones: [{
        display: 'Ver',
        path: 'purchasing.orders.read',
        status: 'active'
      }, {
        display: 'Crear',
        path: 'purchasing.orders.create',
        status: 'active'
      }]
    }, {
      id: 'com_recepciones',
      display: 'Recepciones',
      path: 'purchasing.receipts',
      status: 'active',
      acciones: [{
        display: 'Ver',
        path: 'purchasing.receipts.read',
        status: 'active'
      }]
    }]
  }, {
    id: 'facturacion',
    display: 'Facturación SRI',
    path: 'einvoicing',
    status: 'active',
    descripcion: 'Comprobantes electrónicos, retenciones y anulaciones ante el SRI.',
    submodulos: [{
      id: 'fac_comprobantes',
      display: 'Comprobantes electrónicos',
      path: 'einvoicing.documents',
      status: 'active',
      acciones: [{
        display: 'Ver',
        path: 'einvoicing.documents.read',
        status: 'active'
      }, {
        display: 'Emitir',
        path: 'einvoicing.documents.issue',
        status: 'active'
      }]
    }, {
      id: 'fac_retenciones',
      display: 'Retenciones',
      path: 'einvoicing.withholdings',
      status: 'active',
      acciones: [{
        display: 'Ver',
        path: 'einvoicing.withholdings.read',
        status: 'active'
      }]
    }, {
      id: 'fac_anulaciones',
      display: 'Anulaciones',
      path: 'einvoicing.voids',
      status: 'active',
      acciones: [{
        display: 'Ver',
        path: 'einvoicing.voids.read',
        status: 'active'
      }, {
        display: 'Solicitar',
        path: 'einvoicing.voids.request',
        status: 'active'
      }]
    }]
  }, {
    id: 'clientes',
    display: 'Clientes',
    path: 'customers',
    status: 'active',
    descripcion: 'Directorio de clientes y segmentos comerciales.',
    submodulos: [{
      id: 'cli_directorio',
      display: 'Directorio',
      path: 'customers.directory',
      status: 'active',
      acciones: [{
        display: 'Ver',
        path: 'customers.directory.read',
        status: 'active'
      }, {
        display: 'Crear',
        path: 'customers.directory.create',
        status: 'active'
      }]
    }, {
      id: 'cli_segmentos',
      display: 'Segmentos',
      path: 'customers.segments',
      status: 'active',
      acciones: [{
        display: 'Ver',
        path: 'customers.segments.read',
        status: 'active'
      }]
    }]
  }, {
    id: 'precios',
    display: 'Precios',
    path: 'pricing',
    status: 'active',
    descripcion: 'Listas de precios y promociones.',
    submodulos: [{
      id: 'pre_listas',
      display: 'Listas de precios',
      path: 'pricing.lists',
      status: 'active',
      acciones: [{
        display: 'Ver',
        path: 'pricing.lists.read',
        status: 'active'
      }, {
        display: 'Editar',
        path: 'pricing.lists.update',
        status: 'active'
      }]
    }, {
      id: 'pre_promos',
      display: 'Promociones',
      path: 'pricing.promotions',
      status: 'active',
      acciones: [{
        display: 'Ver',
        path: 'pricing.promotions.read',
        status: 'active'
      }]
    }]
  }, {
    id: 'tesoreria',
    display: 'Tesorería',
    path: 'treasury',
    status: 'active',
    descripcion: 'Movimientos de caja y conciliación bancaria.',
    submodulos: [{
      id: 'tes_caja',
      display: 'Caja',
      path: 'treasury.cash',
      status: 'active',
      acciones: [{
        display: 'Ver',
        path: 'treasury.cash.read',
        status: 'active'
      }]
    }, {
      id: 'tes_bancos',
      display: 'Bancos',
      path: 'treasury.banks',
      status: 'active',
      acciones: [{
        display: 'Ver',
        path: 'treasury.banks.read',
        status: 'active'
      }]
    }]
  }, {
    id: 'contabilidad',
    display: 'Contabilidad',
    path: 'accounting',
    status: 'active',
    descripcion: 'Asientos contables y plan de cuentas.',
    submodulos: [{
      id: 'con_asientos',
      display: 'Asientos',
      path: 'accounting.entries',
      status: 'active',
      acciones: [{
        display: 'Ver',
        path: 'accounting.entries.read',
        status: 'active'
      }]
    }, {
      id: 'con_plan',
      display: 'Plan de cuentas',
      path: 'accounting.chart',
      status: 'active',
      acciones: [{
        display: 'Ver',
        path: 'accounting.chart.read',
        status: 'active'
      }]
    }]
  }, {
    id: 'reportes',
    display: 'Reportes',
    path: 'reports',
    status: 'active',
    descripcion: 'Reportes de ventas e inventario.',
    submodulos: [{
      id: 'rep_ventas',
      display: 'Ventas',
      path: 'reports.sales',
      status: 'active',
      acciones: [{
        display: 'Ver',
        path: 'reports.sales.read',
        status: 'active'
      }]
    }, {
      id: 'rep_inventario',
      display: 'Inventario',
      path: 'reports.inventory',
      status: 'active',
      acciones: [{
        display: 'Ver',
        path: 'reports.inventory.read',
        status: 'active'
      }]
    }]
  }, {
    id: 'nomina',
    display: 'Nómina',
    path: 'payroll',
    status: 'deprecated',
    descripcion: 'Empleados y roles de pago. Módulo deprecado: reemplazado por integración externa; se conserva para los tenants que ya lo tenían.',
    submodulos: [{
      id: 'nom_empleados',
      display: 'Empleados',
      path: 'payroll.employees',
      status: 'deprecated',
      acciones: [{
        display: 'Ver',
        path: 'payroll.employees.read',
        status: 'deprecated'
      }]
    }, {
      id: 'nom_roles',
      display: 'Roles de pago',
      path: 'payroll.payslips',
      status: 'deprecated',
      acciones: [{
        display: 'Ver',
        path: 'payroll.payslips.read',
        status: 'deprecated'
      }]
    }]
  }];

  /* ── Entitlements por tenant (estado APLICADO en servidor) ─────────────────
     Mapa submoduloId → true. Administración es intrínseco: no aparece acá (siempre on).
     Un submódulo deprecado que un tenant YA tenía se conserva (grandfathering): se
     muestra habilitado y marcado como deprecado; no se puede volver a habilitar en
     tenants que no lo tienen. */
  const ENTITLEMENTS = {
    // Aguilar — Comercio Plus, casi todo salvo nómina
    t1: {
      prod_catalogo: true,
      prod_variantes: true,
      prod_categorias: true,
      prod_codigos: true,
      ven_facturas: true,
      ven_notas: true,
      inv_kardex: true,
      inv_transferencias: true,
      inv_ajustes: true,
      com_ordenes: true,
      com_recepciones: true,
      fac_comprobantes: true,
      fac_retenciones: true,
      fac_anulaciones: true,
      cli_directorio: true,
      cli_segmentos: true,
      pre_listas: true,
      pre_promos: true,
      rep_ventas: true,
      rep_inventario: true
    },
    // San Rafael — Comercio base: productos parcial + facturación
    t2: {
      prod_catalogo: true,
      prod_variantes: true,
      ven_facturas: true,
      fac_comprobantes: true,
      fac_retenciones: true,
      cli_directorio: true,
      rep_ventas: true
    },
    // El Rincón — con un submódulo DEPRECADO ya concedido (grandfathered)
    t3: {
      prod_catalogo: true,
      prod_variantes: true,
      prod_categorias: true,
      ven_facturas: true,
      ven_cotizaciones: true /* deprecado, conservado */,
      inv_kardex: true,
      inv_transferencias: true,
      com_ordenes: true,
      fac_comprobantes: true,
      nom_empleados: true /* módulo deprecado, conservado */
    }
  };
  window.BackofficeData = {
    STAFF,
    NAV,
    TENANT_ESTADO,
    TENANTS,
    MODULES,
    ENTITLEMENTS
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/backoffice/data.js", error: String((e && e.message) || e) }); }

// ui_kits/backoffice/kit.jsx
try { (() => {
/* Noctis · backoffice — kit del prototipo: helpers de layout, los CUATRO estados
   del kit (vacío · cargando · error con errorId · 403) y — el aporte de sistema de
   este corte — el LENGUAJE VISUAL DE ACCIÓN SENSIBLE por alcance. Todo construido
   SOBRE los primitivos del núcleo; no reimplementa ninguno. */
const NS = window.NoctisCommerceDesignSystem_4dfd35;
const {
  Button,
  Badge,
  Card,
  Alert,
  EmptyState,
  Skeleton,
  Spinner,
  Table,
  Sheet,
  Input,
  Icon
} = NS;

/* ── micro-label de sección (mayúsculas + tracking) ───────────────────────── */
function MicroLabel({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      textTransform: 'uppercase',
      letterSpacing: '.09em',
      color: 'hsl(var(--text-tertiary))',
      fontWeight: 600,
      ...style
    }
  }, children);
}

/* ── breadcrumb ───────────────────────────────────────────────────────────── */
function Crumbs({
  items
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 12,
      color: 'hsl(var(--text-tertiary))',
      marginBottom: 10,
      flexWrap: 'wrap'
    }
  }, items.map((c, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\u203A"), c.onClick ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: c.onClick,
    style: {
      border: 0,
      background: 'none',
      padding: 0,
      cursor: 'pointer',
      color: 'hsl(var(--link))',
      font: 'inherit'
    }
  }, c.label) : /*#__PURE__*/React.createElement("span", {
    style: i === items.length - 1 ? {
      color: 'hsl(var(--text-secondary))'
    } : undefined
  }, c.label))));
}

/* ── encabezado de página ─────────────────────────────────────────────────── */
function PageHeader({
  title,
  meta,
  actions
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 16,
      marginBottom: 18,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      font: '600 26px/32px var(--font-ui)',
      letterSpacing: '-.02em',
      margin: 0
    }
  }, title), meta && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 7,
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      flexWrap: 'wrap',
      color: 'hsl(var(--text-secondary))',
      fontSize: 13
    }
  }, meta)), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexShrink: 0,
      flexWrap: 'wrap',
      justifyContent: 'flex-end'
    }
  }, actions));
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

function PlatformScopeChip({
  compact
}) {
  return /*#__PURE__*/React.createElement("span", {
    title: "Esta acci\xF3n afecta a todos los tenants de la plataforma",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      height: 20,
      padding: compact ? '0 8px 0 6px' : '0 10px 0 7px',
      borderRadius: 999,
      background: 'hsl(var(--surface-sunken))',
      border: '1px solid hsl(var(--border-strong))',
      color: 'hsl(var(--text-secondary))',
      fontSize: 10.5,
      fontWeight: 600,
      letterSpacing: '.02em',
      whiteSpace: 'nowrap',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "globe",
    size: 12,
    style: {
      flex: 'none'
    }
  }), compact ? 'Plataforma' : 'Alcance: plataforma');
}

/* Declaración de alcance a NIVEL DE PANTALLA — para pantallas donde toda acción es
   de alcance plataforma (el Catálogo). Reemplaza al chip por fila: dice lo mismo una
   vez, en el lugar donde todavía informa. */
function PlatformScopeBanner({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 11,
      padding: '12px 14px',
      borderRadius: 10,
      background: 'hsl(var(--surface-sunken))',
      border: '1px solid hsl(var(--border-strong))'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "globe",
    size: 18,
    style: {
      color: 'hsl(var(--text-secondary))',
      flex: 'none',
      marginTop: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 13.5,
      color: 'hsl(var(--text-primary))',
      marginBottom: 2
    }
  }, "Alcance: plataforma"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'hsl(var(--text-secondary))',
      maxWidth: '80ch'
    }
  }, children)));
}

/* Confirm inline de 2 pasos — alcance TENANT. NUNCA Dialog. */
function ConfirmInline({
  label,
  question,
  confirmLabel = 'Confirmar',
  onConfirm,
  pending,
  size = 'sm',
  tone = 'danger',
  compact
}) {
  const [armed, setArmed] = React.useState(false);
  if (!armed) {
    return /*#__PURE__*/React.createElement(Button, {
      variant: tone === 'danger' ? 'danger-ghost' : 'ghost',
      size: size,
      onClick: () => setArmed(true)
    }, label);
  }
  return /*#__PURE__*/React.createElement("div", {
    role: "group",
    "aria-label": question,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, !compact && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'hsl(var(--text-secondary))'
    }
  }, question), /*#__PURE__*/React.createElement(Button, {
    variant: tone === 'danger' ? 'danger' : 'primary',
    size: size,
    loading: pending,
    onClick: () => onConfirm && onConfirm(() => setArmed(false))
  }, confirmLabel), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: size,
    disabled: pending,
    onClick: () => setArmed(false)
  }, "Cancelar"));
}

/* DangerConfirmSheet — alcance PLATAFORMA. Sheet del núcleo + escritura del nombre.
   `matchText` es el texto exacto a escribir para armar el botón. `impact` es la línea
   de radio ("N tenants lo tienen habilitado"). Se cierra con Esc / Cancelar. */
function DangerConfirmSheet({
  open,
  onClose,
  title,
  confirmLabel = 'Deprecar',
  matchText,
  impact,
  warning,
  warningTitle,
  scope = 'platform',
  pending,
  onConfirm,
  children
}) {
  const [typed, setTyped] = React.useState('');
  React.useEffect(() => {
    if (open) setTyped('');
  }, [open]);
  const armed = typed.trim() === matchText;
  const isPlatform = scope === 'platform';
  return /*#__PURE__*/React.createElement(Sheet, {
    open: open,
    onClose: pending ? undefined : onClose,
    title: /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 10
      }
    }, title, isPlatform && /*#__PURE__*/React.createElement(PlatformScopeChip, null)),
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      disabled: pending,
      onClick: onClose
    }, "Cancelar"), /*#__PURE__*/React.createElement(Button, {
      variant: "danger",
      disabled: !armed,
      loading: pending,
      onClick: onConfirm
    }, confirmLabel))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Alert, {
    tone: "warning"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      marginBottom: 3
    }
  }, warningTitle || (isPlatform ? 'Esta acción afecta a todos los tenants' : 'Esta acción interrumpe la operación del tenant')), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13
    }
  }, warning)), children, impact && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '10px 12px',
      borderRadius: 10,
      background: 'hsl(var(--surface-sunken))',
      border: '1px solid hsl(var(--border-subtle))',
      fontSize: 13,
      color: 'hsl(var(--text-secondary))'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: isPlatform ? 'building-2' : 'users',
    size: 18,
    style: {
      color: 'hsl(var(--text-tertiary))',
      flex: 'none'
    }
  }), /*#__PURE__*/React.createElement("span", null, impact)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Input, {
    label: /*#__PURE__*/React.createElement(React.Fragment, null, "Para confirmar, escriba ", /*#__PURE__*/React.createElement("b", {
      style: {
        fontFamily: 'var(--font-mono)',
        color: 'hsl(var(--text-primary))'
      }
    }, matchText)),
    value: typed,
    onChange: e => setTyped(e.target.value),
    placeholder: matchText,
    autoFocus: true,
    helper: isPlatform ? 'La escritura del nombre evita deprecaciones accidentales de alcance plataforma.' : 'La escritura del nombre evita suspensiones accidentales.'
  }))));
}

/* ── KIT DE ESTADOS ───────────────────────────────────────────────────────── */
/* Cargando: Skeleton para tablas. */
function TableSkeleton({
  columns,
  rows = 6
}) {
  const skRows = Array.from({
    length: rows
  }, () => Object.fromEntries(columns.map(c => [c.key, /*#__PURE__*/React.createElement(Skeleton, {
    variant: c.pill ? 'pill' : 'line',
    width: c.w || '80%'
  })])));
  return /*#__PURE__*/React.createElement(Table, {
    columns: columns,
    rows: skRows,
    footNote: /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(Spinner, {
      size: "sm"
    }), " Cargando\u2026")
  });
}

/* Error con errorId visible + reintento. El error NUNCA va por toast. */
function ErrorState({
  errorId = 'ERR-9C4E1',
  onRetry,
  context = 'la sección'
}) {
  return /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(Alert, {
    tone: "danger"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      marginBottom: 4
    }
  }, "No se pudo cargar ", context), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13
    }
  }, "Intente nuevamente. Si persiste, comparta el c\xF3digo con soporte."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginTop: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    onClick: onRetry
  }, "Reintentar"), /*#__PURE__*/React.createElement("code", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'hsl(var(--text-tertiary))'
    }
  }, "errorId: ", errorId))));
}

/* 403 — personal de plataforma sin la capacidad requerida. */
function ForbiddenState({
  onHome,
  resource = 'esta sección'
}) {
  return /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '28px 8px',
      textAlign: 'center',
      maxWidth: 440,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 10,
      margin: '0 auto 14px',
      display: 'grid',
      placeItems: 'center',
      background: 'hsl(var(--surface-sunken))',
      border: '1px solid hsl(var(--border-strong))',
      color: 'hsl(var(--text-tertiary))',
      fontSize: 18
    },
    "aria-hidden": "true"
  }, "\u26A0"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 16px/22px var(--font-ui)'
    }
  }, "No tiene permiso para ver ", resource), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '6px 0 16px',
      color: 'hsl(var(--text-secondary))',
      fontSize: 13
    }
  }, "Su cuenta de plataforma no incluye esta capacidad. Solic\xEDtela a un administrador de plataforma con el rol correspondiente."), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    onClick: onHome
  }, "Volver al inicio")));
}

/* Vacío con la marca de casa. */
function ListEmpty({
  title,
  description,
  action
}) {
  return /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 8px'
    }
  }, /*#__PURE__*/React.createElement(EmptyState, {
    title: title,
    description: description,
    action: action
  })));
}

/* Overlay puntual de transición (spinner sin layout). */
function GateOverlay({
  text
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'grid',
      placeItems: 'center',
      background: 'hsl(var(--surface-base) / .72)',
      backdropFilter: 'blur(2px)',
      zIndex: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Spinner, {
    size: "lg"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'hsl(var(--text-secondary))'
    }
  }, text)));
}

/* Segmented control genérico. */
function Segmented({
  value,
  onChange,
  options,
  ariaLabel
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "radiogroup",
    "aria-label": ariaLabel,
    style: {
      display: 'inline-flex',
      gap: 2,
      padding: 2,
      borderRadius: 8,
      background: 'hsl(var(--surface-sunken))',
      border: '1px solid hsl(var(--border-subtle))'
    }
  }, options.map(o => {
    const active = o.value === value;
    return /*#__PURE__*/React.createElement("button", {
      key: o.value,
      type: "button",
      role: "radio",
      "aria-checked": active,
      onClick: () => onChange(o.value),
      style: {
        border: 0,
        cursor: 'pointer',
        borderRadius: 6,
        padding: '5px 10px',
        fontSize: 12,
        fontWeight: active ? 600 : 500,
        fontFamily: 'var(--font-ui)',
        background: active ? 'hsl(var(--surface-raised))' : 'transparent',
        color: active ? 'hsl(var(--text-primary))' : 'hsl(var(--text-secondary))',
        boxShadow: active ? '0 1px 2px hsl(240 6% 10% / .08)' : 'none'
      }
    }, o.label);
  }));
}

/* StatusPill — Badge del núcleo alimentado por el mapa de estado del negocio. */
function StatusPill({
  meta
}) {
  return /*#__PURE__*/React.createElement(Badge, {
    tone: meta.tone,
    dot: meta.dot
  }, meta.label);
}
Object.assign(window, {
  BoMicroLabel: MicroLabel,
  BoCrumbs: Crumbs,
  BoPageHeader: PageHeader,
  BoConfirmInline: ConfirmInline,
  BoPlatformScopeChip: PlatformScopeChip,
  BoPlatformScopeBanner: PlatformScopeBanner,
  BoDangerConfirmSheet: DangerConfirmSheet,
  BoTableSkeleton: TableSkeleton,
  BoErrorState: ErrorState,
  BoForbiddenState: ForbiddenState,
  BoListEmpty: ListEmpty,
  BoGateOverlay: GateOverlay,
  BoSegmented: Segmented,
  BoStatusPill: StatusPill
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/backoffice/kit.jsx", error: String((e && e.message) || e) }); }

// ui_kits/backoffice/shell.jsx
try { (() => {
/* Noctis · backoffice — SHELL. A diferencia de commerce: NO temeable por tenant
   (marca Noctis fija, cero acento de tenant), sidebar FIJA (no por permisos), sin
   CompanySelector, sin logo de tenant, sin slot de sucursal — son conceptos de
   commerce. El toggle de modo SÍ aplica: es preferencia de USUARIO. Densidad
   back-office (comfortable), nada táctil. */
const {
  Wordmark: SWordmark,
  Icon: SIcon,
  Card: SCard,
  Badge: SBadge,
  Button: SButton
} = window.NoctisCommerceDesignSystem_4dfd35;
const ML = window.BoMicroLabel;

/* Ítem de sidebar. Mismo LENGUAJE DE ESTADO DE MÓDULO que commerce: los módulos
   "Pronto" (no construidos) son INFORMATIVOS PUROS —no un control deshabilitado ni
   un link con handler nulo—: <div> sin href/onClick, no tabbable, sin aria-disabled.
   Expandido → chip "Pronto"; colapsado → reloj discreto. El estado viaja en texto
   sr-only siempre presente + title. Solo los construidos son <button> navegable. */
function NavItem({
  item,
  active,
  collapsed,
  onClick
}) {
  const disabled = !item.built;
  const srName = item.label + ' · Pronto (módulo por construir)';
  const inner = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 11,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      flex: 'none',
      opacity: collapsed && disabled ? .5 : 1
    }
  }, /*#__PURE__*/React.createElement(SIcon, {
    name: item.icon,
    size: 20,
    style: {
      flex: 'none'
    }
  }), collapsed && disabled && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      top: -3,
      right: -3,
      fontSize: 9,
      lineHeight: 1,
      color: 'hsl(var(--text-tertiary))'
    }
  }, "\u25F7")), !collapsed && /*#__PURE__*/React.createElement("span", {
    style: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, item.label), collapsed && disabled && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      width: 1,
      height: 1,
      padding: 0,
      margin: -1,
      overflow: 'hidden',
      clip: 'rect(0 0 0 0)',
      whiteSpace: 'nowrap',
      border: 0
    }
  }, srName)), !collapsed && disabled && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      fontSize: 10,
      fontWeight: 500,
      padding: '1px 7px',
      borderRadius: 999,
      background: 'hsl(var(--surface-base))',
      border: '1px solid hsl(var(--border-subtle))',
      color: 'hsl(var(--text-tertiary))'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\u25F7"), "Pronto"));
  const baseStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: 11,
    width: '100%',
    textAlign: 'left',
    border: 0,
    padding: collapsed ? 10 : '10px 12px',
    borderRadius: 8,
    font: '500 13.5px var(--font-ui)',
    justifyContent: collapsed ? 'center' : 'space-between',
    background: active ? 'hsl(var(--brand-primary))' : 'transparent',
    color: active ? 'hsl(var(--brand-foreground))' : 'hsl(var(--text-secondary))'
  };
  if (disabled) {
    return /*#__PURE__*/React.createElement("div", {
      title: collapsed ? item.label + ' · Pronto' : undefined,
      style: {
        ...baseStyle,
        cursor: 'default',
        position: 'relative'
      }
    }, inner);
  }
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClick,
    title: collapsed ? item.label : undefined,
    "aria-current": active ? 'page' : undefined,
    "aria-label": collapsed ? item.label : undefined,
    style: {
      ...baseStyle,
      cursor: 'pointer',
      position: 'relative'
    },
    "style-hover": active ? undefined : 'background:hsl(var(--surface-sunken))'
  }, inner);
}
function Sidebar({
  nav,
  active,
  collapsed,
  onToggle,
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: collapsed ? 64 : 232,
      flex: 'none',
      background: 'hsl(var(--surface-sunken))',
      borderRight: '1px solid hsl(var(--border-subtle))',
      display: 'flex',
      flexDirection: 'column',
      transition: 'width .16s ease'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: collapsed ? '12px 8px' : '14px 12px',
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, nav.map((g, gi) => /*#__PURE__*/React.createElement("div", {
    key: gi,
    style: {
      marginBottom: 8
    }
  }, !collapsed && /*#__PURE__*/React.createElement(ML, {
    style: {
      padding: '8px 8px 6px'
    }
  }, g.section), collapsed && gi > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'hsl(var(--border-subtle))',
      margin: '8px 8px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 3
    }
  }, g.items.map(it => /*#__PURE__*/React.createElement(NavItem, {
    key: it.id,
    item: it,
    collapsed: collapsed,
    active: active === it.id,
    onClick: () => onNavigate(it)
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: collapsed ? 8 : '10px 12px',
      borderTop: '1px solid hsl(var(--border-subtle))'
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onToggle,
    "aria-label": collapsed ? 'Expandir menú' : 'Colapsar menú',
    "aria-pressed": collapsed,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      width: '100%',
      justifyContent: collapsed ? 'center' : 'flex-start',
      border: '1px solid hsl(var(--border-strong))',
      background: 'hsl(var(--surface-base))',
      color: 'hsl(var(--text-secondary))',
      borderRadius: 8,
      padding: collapsed ? 8 : '8px 10px',
      cursor: 'pointer',
      fontSize: 12,
      fontFamily: 'var(--font-ui)'
    }
  }, /*#__PURE__*/React.createElement(SIcon, {
    name: collapsed ? 'chevrons-right' : 'chevrons-left',
    size: 16
  }), !collapsed && 'Colapsar')));
}

/* Marca de casa Noctis FIJA en el topbar (nunca logo de tenant). */
function NoctisMark() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(SWordmark, {
    size: "sm"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      fontWeight: 600,
      letterSpacing: '.06em',
      textTransform: 'uppercase',
      color: 'hsl(var(--text-tertiary))',
      padding: '3px 8px',
      borderRadius: 999,
      border: '1px solid hsl(var(--border-subtle))',
      background: 'hsl(var(--surface-sunken))'
    }
  }, "Backoffice"));
}
function BackofficeShell({
  staff,
  mode,
  onToggleMode,
  onLogout,
  activeModule,
  onNavigate,
  collapsed,
  onToggleCollapse,
  children
}) {
  const modeIcon = mode === 'dark' ? '☾' : '☀';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid hsl(var(--border-subtle))',
      borderRadius: 14,
      overflow: 'hidden',
      background: 'hsl(var(--surface-base))',
      display: 'flex',
      flexDirection: 'column',
      minHeight: 680
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '0 16px',
      height: 58,
      flex: 'none',
      background: 'hsl(var(--surface-raised))',
      borderBottom: '1px solid hsl(var(--border-subtle))'
    }
  }, /*#__PURE__*/React.createElement(NoctisMark, null), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right',
      lineHeight: 1.3
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'hsl(var(--text-primary))',
      fontWeight: 500
    }
  }, staff.email), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'hsl(var(--text-tertiary))'
    }
  }, staff.rol)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onToggleMode,
    "aria-label": mode === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro',
    style: {
      width: 34,
      height: 34,
      borderRadius: 8,
      border: '1px solid hsl(var(--border-strong))',
      background: 'hsl(var(--surface-base))',
      color: 'hsl(var(--text-secondary))',
      cursor: 'pointer',
      fontSize: 15
    }
  }, modeIcon), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onLogout,
    style: {
      height: 34,
      padding: '0 13px',
      borderRadius: 8,
      border: '1px solid hsl(var(--border-strong))',
      background: 'hsl(var(--surface-base))',
      color: 'hsl(var(--text-secondary))',
      fontSize: 12.5,
      cursor: 'pointer',
      fontFamily: 'var(--font-ui)'
    }
  }, "Salir"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flex: 1,
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement(Sidebar, {
    nav: window.BackofficeData.NAV,
    active: activeModule,
    collapsed: collapsed,
    onToggle: onToggleCollapse,
    onNavigate: onNavigate
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      position: 'relative',
      background: 'hsl(var(--surface-base))',
      overflow: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1160,
      margin: '0 auto',
      padding: '26px 30px 44px'
    }
  }, children))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '11px 16px',
      flex: 'none',
      borderTop: '1px solid hsl(var(--border-subtle))',
      background: 'hsl(var(--surface-raised))',
      display: 'flex',
      justifyContent: 'space-between',
      gap: 12,
      fontSize: 11,
      color: 'hsl(var(--text-tertiary))',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Consola de administraci\xF3n de plataforma \xB7 uso interno Noctis"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500,
      color: 'hsl(var(--text-secondary))'
    }
  }, "Powered by Noctis Commerce")));
}

/* Dashboard — placeholder DIGNO. Sin KPIs falsos; se señala el hueco (Fase 2). */
function Dashboard({
  staff,
  tenants,
  onGoTenants,
  onGoCatalogo
}) {
  const activos = tenants.filter(t => t.estado === 'activo').length;
  const enMora = tenants.filter(t => t.estado === 'moroso').length;
  const suspendidos = tenants.filter(t => t.estado === 'suspendido').length;
  const Stat = ({
    n,
    label,
    tone
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 120
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 26px/1 var(--font-ui)',
      fontVariantNumeric: 'tabular-nums',
      letterSpacing: '-.02em',
      color: tone || 'hsl(var(--text-primary))'
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'hsl(var(--text-tertiary))',
      marginTop: 5
    }
  }, label));
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      font: '600 30px/36px var(--font-ui)',
      letterSpacing: '-.02em',
      margin: '0 0 8px'
    }
  }, "Panel de plataforma"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'hsl(var(--text-secondary))',
      fontSize: 14,
      maxWidth: '60ch'
    }
  }, "Est\xE1 operando como ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'hsl(var(--text-primary))'
    }
  }, staff.rol.toLowerCase()), ". Las acciones desde esta consola pueden afectar a todos los tenants \u2014 el alcance se declara donde distingue, y toda acci\xF3n de plataforma pide confirmaci\xF3n expl\xEDcita.")), /*#__PURE__*/React.createElement(SCard, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    n: tenants.length,
    label: "Tenants totales"
  }), /*#__PURE__*/React.createElement(Stat, {
    n: activos,
    label: "Activos",
    tone: "hsl(var(--success-fg))"
  }), /*#__PURE__*/React.createElement(Stat, {
    n: enMora,
    label: "Con mora",
    tone: "hsl(var(--warning-fg))"
  }), /*#__PURE__*/React.createElement(Stat, {
    n: suspendidos,
    label: "Suspendidos",
    tone: "hsl(var(--danger-fg))"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))',
      gap: 14,
      margin: '18px 0'
    }
  }, /*#__PURE__*/React.createElement(SCard, {
    header: "Cuentas"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 15,
      marginBottom: 4
    }
  }, "Tenants"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 14px',
      color: 'hsl(var(--text-secondary))',
      fontSize: 13
    }
  }, "Administre las cuentas de las PYMEs: estado, plan y \xE1rbol de entitlements."), /*#__PURE__*/React.createElement(SButton, {
    variant: "primary",
    size: "sm",
    onClick: onGoTenants
  }, "Ver tenants")), /*#__PURE__*/React.createElement(SCard, {
    header: "Producto"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 15,
      marginBottom: 4
    }
  }, "Cat\xE1logo de m\xF3dulos"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 14px',
      color: 'hsl(var(--text-secondary))',
      fontSize: 13
    }
  }, "El cat\xE1logo es append-only: los m\xF3dulos se deprecan, nunca se borran."), /*#__PURE__*/React.createElement(SButton, {
    variant: "secondary",
    size: "sm",
    onClick: onGoCatalogo
  }, "Ver cat\xE1logo"))), /*#__PURE__*/React.createElement(SCard, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontSize: 16,
      color: 'hsl(var(--text-tertiary))',
      marginTop: 1
    }
  }, "\u25F7"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 14,
      marginBottom: 2
    }
  }, "Los indicadores de salud de plataforma llegan en la Fase 2"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'hsl(var(--text-secondary))',
      fontSize: 13,
      maxWidth: '66ch'
    }
  }, "Consumo por tenant, adopci\xF3n de m\xF3dulos y facturaci\xF3n agregada aparecer\xE1n aqu\xED. No se muestran cifras hasta tener el dato real \u2014 el hueco se se\xF1ala, no se inventa.")))));
}
Object.assign(window, {
  BackofficeShell,
  BackofficeDashboard: Dashboard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/backoffice/shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/backoffice/tenants.jsx
try { (() => {
/* Noctis · backoffice — TENANTS. Lista densa (keyset · filtros · StatusPill · 4
   estados) y el DETALLE = árbol de entitlements módulo→submódulo con:
   indeterminate en el padre · DRAFT LOCAL (nada se aplica hasta guardar, con guarda
   de salida) · ADMINISTRATION intrínseco (no-toggleable) · display_name en español
   (el path de máquina NUNCA se muestra). */
const TNS = window.NoctisCommerceDesignSystem_4dfd35;
const {
  Button: TBtn,
  Card: TCard,
  Select: TSelect,
  Input: TInput,
  Badge: TBadge,
  Icon: TIcon,
  Alert: TAlert,
  Switch: TSwitch,
  Checkbox: TCheckbox
} = TNS;
const TD = window.BackofficeData;

/* ── LISTA DE TENANTS ─────────────────────────────────────────────────────── */
function TenantsList({
  listState,
  onRetry,
  onOpen
}) {
  const [estado, setEstado] = React.useState('todos'); // filtro server-side (estado)
  const [q, setQ] = React.useState(''); // búsqueda client-side (deuda señalada)
  const [shown, setShown] = React.useState(8); // keyset "Cargar más"

  const columns = [{
    key: 'estado',
    label: 'Estado',
    pill: true,
    w: '70%'
  }, {
    key: 'nombre',
    label: 'Razón social',
    w: '90%'
  }, {
    key: 'ruc',
    label: 'RUC'
  }, {
    key: 'plan',
    label: 'Plan'
  }, {
    key: 'sucursales',
    label: 'Suc.',
    numeric: true,
    align: 'right'
  }, {
    key: 'usuarios',
    label: 'Usuarios',
    numeric: true,
    align: 'right'
  }, {
    key: 'alta',
    label: 'Alta'
  }, {
    key: 'acciones',
    label: '',
    w: '40%'
  }];
  const header = /*#__PURE__*/React.createElement(window.BoPageHeader, {
    title: "Tenants",
    meta: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TIcon, {
      name: "building-2",
      size: 16,
      style: {
        color: 'hsl(var(--text-tertiary))'
      }
    }), /*#__PURE__*/React.createElement("span", null, "Cuentas de las PYMEs sobre la plataforma"))
  });
  const filters = /*#__PURE__*/React.createElement(TCard, {
    pad: false
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-end',
      flexWrap: 'wrap',
      padding: '14px 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 180
    }
  }, /*#__PURE__*/React.createElement(window.BoMicroLabel, {
    style: {
      marginBottom: 6
    }
  }, "Estado (servidor)"), /*#__PURE__*/React.createElement(TSelect, {
    value: estado,
    onChange: e => {
      setEstado(e.target.value);
      setShown(8);
    },
    options: [{
      value: 'todos',
      label: 'Todos los estados'
    }, {
      value: 'activo',
      label: 'Activo'
    }, {
      value: 'prueba',
      label: 'En prueba'
    }, {
      value: 'moroso',
      label: 'Con mora'
    }, {
      value: 'suspendido',
      label: 'Suspendido'
    }, {
      value: 'cancelado',
      label: 'Cancelado'
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 220,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(window.BoMicroLabel, {
    style: {
      marginBottom: 6
    }
  }, "Buscar por raz\xF3n social"), /*#__PURE__*/React.createElement(TInput, {
    value: q,
    onChange: e => setQ(e.target.value),
    placeholder: "Escriba un nombre\u2026",
    helper: "B\xFAsqueda por nombre en cliente (deuda conocida: el filtro de estado s\xED es server-side)."
  }))));
  if (listState === 'loading') {
    return /*#__PURE__*/React.createElement(React.Fragment, null, header, filters, /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 14
      }
    }, /*#__PURE__*/React.createElement(window.BoTableSkeleton, {
      columns: columns,
      rows: 7
    })));
  }
  if (listState === 'error') {
    return /*#__PURE__*/React.createElement(React.Fragment, null, header, filters, /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 14
      }
    }, /*#__PURE__*/React.createElement(window.BoErrorState, {
      context: "la lista de tenants",
      errorId: "ERR-TEN-3391",
      onRetry: onRetry
    })));
  }
  if (listState === 'forbidden') {
    return /*#__PURE__*/React.createElement(React.Fragment, null, header, /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 4
      }
    }, /*#__PURE__*/React.createElement(window.BoForbiddenState, {
      resource: "la lista de tenants",
      onHome: onRetry
    })));
  }

  // datos
  let rows = TD.TENANTS;
  if (estado !== 'todos') rows = rows.filter(t => t.estado === estado);
  const qn = q.trim().toLowerCase();
  if (qn) rows = rows.filter(t => t.nombre.toLowerCase().includes(qn));
  if (listState === 'empty' || rows.length === 0) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, header, filters, /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 14
      }
    }, /*#__PURE__*/React.createElement(window.BoListEmpty, {
      title: qn || estado !== 'todos' ? 'Ningún tenant coincide' : 'Aún no hay tenants',
      description: qn || estado !== 'todos' ? 'Ajuste el filtro de estado o el término de búsqueda.' : 'Cuando se aprovisione la primera cuenta aparecerá en esta lista.'
    })));
  }
  const visible = rows.slice(0, shown);
  const tableRows = visible.map(t => {
    const meta = TD.TENANT_ESTADO[t.estado];
    return {
      estado: /*#__PURE__*/React.createElement(window.BoStatusPill, {
        meta: meta
      }),
      nombre: /*#__PURE__*/React.createElement("span", {
        style: {
          fontWeight: 500,
          color: 'hsl(var(--text-primary))'
        }
      }, t.nombre),
      ruc: /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: 'var(--font-mono)',
          fontSize: 12.5,
          color: 'hsl(var(--text-secondary))'
        }
      }, t.ruc),
      plan: /*#__PURE__*/React.createElement("span", {
        style: {
          color: 'hsl(var(--text-secondary))'
        }
      }, t.plan),
      sucursales: /*#__PURE__*/React.createElement("span", {
        style: {
          fontVariantNumeric: 'tabular-nums'
        }
      }, t.sucursales),
      usuarios: /*#__PURE__*/React.createElement("span", {
        style: {
          fontVariantNumeric: 'tabular-nums'
        }
      }, t.usuarios),
      alta: /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: 'var(--font-mono)',
          fontSize: 12.5,
          color: 'hsl(var(--text-secondary))'
        }
      }, t.alta),
      acciones: /*#__PURE__*/React.createElement(TBtn, {
        variant: "ghost",
        size: "sm",
        onClick: () => onOpen(t.id),
        "aria-label": 'Abrir ' + t.nombre
      }, "Abrir")
    };
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, header, filters, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement(TNS.Table, {
    columns: columns,
    rows: tableRows,
    minWidth: 860,
    footNote: /*#__PURE__*/React.createElement("span", null, "Mostrando ", visible.length, " de ", rows.length),
    onLoadMore: shown < rows.length ? () => setShown(s => s + 6) : undefined,
    loadMoreLabel: "Cargar m\xE1s"
  })));
}

/* ── Controles del árbol ──────────────────────────────────────────────────────
   Switch y Checkbox tri-estado son PRIMITIVOS DEL NÚCLEO (components/forms). Esta
   piel los consume; no define los suyos. `state` del padre ('all'|'some'|'none')
   se traduce al contrato checked/indeterminate del Checkbox. */

/* ── DETALLE DE TENANT — árbol de entitlements ────────────────────────────── */
function TenantDetail({
  tenant,
  sectionState,
  onRetry,
  onBack,
  onToast,
  onDirtyChange,
  onSuspendToggle
}) {
  // draft local + estado aplicado (servidor). Nada se aplica hasta Guardar.
  const initial = React.useMemo(() => ({
    ...(TD.ENTITLEMENTS[tenant.id] || {})
  }), [tenant.id]);
  const [applied, setApplied] = React.useState(initial);
  const [draft, setDraft] = React.useState(initial);
  const [open, setOpen] = React.useState(() => new Set(['productos']));
  const [saving, setSaving] = React.useState(false);
  /* Suspender = acción GRAVE de alcance tenant → fricción alta (Sheet + escritura del
     nombre). Reactivar y el resto del detalle son reversibles → confirm inline. Sin chip
     de alcance en esta pantalla: acá no hay ninguna acción de plataforma, y la fricción
     diferenciada ES el marcador. */
  const [suspendSheet, setSuspendSheet] = React.useState(false);
  const [suspending, setSuspending] = React.useState(false);

  // submódulos NO intrínsecos (administración se excluye del draft: siempre on)
  const gatedModules = TD.MODULES.filter(m => !m.intrinsic);
  const allSubs = gatedModules.flatMap(m => m.submodulos.map(s => ({
    ...s,
    moduleId: m.id,
    moduleStatus: m.status
  })));
  const subById = Object.fromEntries(allSubs.map(s => [s.id, s]));
  const changedIds = allSubs.map(s => s.id).filter(id => !!draft[id] !== !!applied[id]);
  const dirty = changedIds.length > 0;
  React.useEffect(() => {
    onDirtyChange(dirty);
  }, [dirty]); // eslint-disable-line
  /* Camino 2 del guard: salida del DOCUMENTO (cerrar pestaña, refresh). El camino 1
     —navegación in-app— NO pasa por acá: lo intercepta guardedNav en app.jsx antes
     de cambiar de vista. beforeunload solo no alcanza (ver README). */
  React.useEffect(() => {
    if (!dirty) return;
    const h = e => {
      e.preventDefault();
      e.returnValue = '';
    };
    window.addEventListener('beforeunload', h);
    return () => window.removeEventListener('beforeunload', h);
  }, [dirty]);

  // reset cuando cambia de tenant
  React.useEffect(() => {
    setApplied(initial);
    setDraft(initial);
  }, [tenant.id]); // eslint-disable-line

  // una sub deprecada solo puede quedar ON si YA estaba concedida (grandfathering);
  // apagada, no se puede volver a habilitar.
  const canEnable = s => s.status !== 'deprecated' || !!applied[s.id];
  const setSub = (id, val) => {
    const s = subById[id];
    if (val && !canEnable(s)) return; // bloqueado: deprecado no concedido
    setDraft(d => ({
      ...d,
      [id]: val
    }));
  };
  const moduleState = m => {
    const subs = m.submodulos;
    const onCount = subs.filter(s => !!draft[s.id]).length;
    if (onCount === 0) return 'none';
    if (onCount === subs.length) return 'all';
    return 'some';
  };
  const toggleModule = m => {
    const st = moduleState(m);
    setDraft(d => {
      const next = {
        ...d
      };
      if (st === 'all') {
        m.submodulos.forEach(s => {
          next[s.id] = false;
        });
      } // apagar todo
      else {
        m.submodulos.forEach(s => {
          if (canEnable(s)) next[s.id] = true;
        });
      } // encender lo habilitable
      return next;
    });
  };
  const doSave = () => {
    setSaving(true);
    setTimeout(() => {
      setApplied({
        ...draft
      });
      setSaving(false);
      onToast(`Entitlements guardados · ${changedIds.length} cambio${changedIds.length === 1 ? '' : 's'} aplicado${changedIds.length === 1 ? '' : 's'}.`);
    }, 900);
  };
  const doDiscard = () => setDraft({
    ...applied
  });
  const meta = TD.TENANT_ESTADO[tenant.id ? tenant.estado : 'activo'];
  const isTerminal = tenant.estado === 'cancelado';
  const crumbs = /*#__PURE__*/React.createElement(window.BoCrumbs, {
    items: [{
      label: 'Tenants',
      onClick: onBack
    }, {
      label: tenant.nombre
    }]
  });
  if (sectionState === 'loading') return /*#__PURE__*/React.createElement(React.Fragment, null, crumbs, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(window.BoTableSkeleton, {
    columns: [{
      key: 'a',
      w: '40%'
    }, {
      key: 'b',
      pill: true,
      w: '30%'
    }],
    rows: 6
  })));
  if (sectionState === 'error') return /*#__PURE__*/React.createElement(React.Fragment, null, crumbs, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(window.BoErrorState, {
    context: "el detalle del tenant",
    errorId: "ERR-TEN-7742",
    onRetry: onRetry
  })));
  if (sectionState === 'forbidden') return /*#__PURE__*/React.createElement(React.Fragment, null, crumbs, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(window.BoForbiddenState, {
    resource: "el detalle del tenant",
    onHome: onBack
  })));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: dirty ? 76 : 0
    }
  }, crumbs, /*#__PURE__*/React.createElement(window.BoPageHeader, {
    title: tenant.nombre,
    meta: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(window.BoStatusPill, {
      meta: TD.TENANT_ESTADO[tenant.estado]
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 12.5
      }
    }, "RUC ", tenant.ruc), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, tenant.plan), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, tenant.sucursales, " sucursal", tenant.sucursales === 1 ? '' : 'es', " \xB7 ", tenant.usuarios, " usuarios")),
    actions: isTerminal ? /*#__PURE__*/React.createElement(TBadge, {
      tone: "terminal"
    }, "Cuenta cancelada") : tenant.estado === 'suspendido'
    /* reversible → inline de 2 pasos */ ? /*#__PURE__*/React.createElement(window.BoConfirmInline, {
      tone: "primary",
      label: "Reactivar tenant",
      confirmLabel: "Reactivar",
      question: "\xBFReactivar esta cuenta?",
      onConfirm: done => {
        onSuspendToggle(tenant.id, false);
        done();
      }
    })
    /* grave → fricción alta, aunque el alcance sea un solo tenant */ : /*#__PURE__*/React.createElement(TBtn, {
      variant: "danger-ghost",
      size: "md",
      onClick: () => setSuspendSheet(true)
    }, "Suspender tenant")
  }), tenant.estado === 'suspendido' && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(TAlert, {
    tone: "danger"
  }, /*#__PURE__*/React.createElement("b", null, "Cuenta suspendida."), " Los usuarios de este tenant no pueden operar hasta reactivarla. Suspender afecta solo a esta cuenta (alcance tenant).")), /*#__PURE__*/React.createElement(window.BoDangerConfirmSheet, {
    open: suspendSheet,
    scope: "tenant",
    onClose: () => setSuspendSheet(false),
    title: `Suspender «${tenant.nombre}»`,
    confirmLabel: "Suspender cuenta",
    matchText: tenant.nombre,
    pending: suspending,
    warning: "La cuenta queda sin acceso de inmediato: nadie podr\xE1 facturar, cobrar ni registrar movimientos hasta reactivarla. Es reversible desde esta misma pantalla, pero interrumpe la operaci\xF3n mientras dure.",
    impact: `Esto deja sin operar a ${tenant.nombre} y a sus ${tenant.usuarios} usuario${tenant.usuarios === 1 ? '' : 's'} en ${tenant.sucursales} sucursal${tenant.sucursales === 1 ? '' : 'es'}.`,
    onConfirm: () => {
      setSuspending(true);
      setTimeout(() => {
        setSuspending(false);
        setSuspendSheet(false);
        onSuspendToggle(tenant.id, true);
      }, 900);
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'hsl(var(--text-secondary))'
    }
  }, "Escriba la raz\xF3n social para confirmar. Dejar sin trabajar a un cliente amerita esta fricci\xF3n aunque el alcance sea una sola cuenta.")), /*#__PURE__*/React.createElement(IntrinsicModule, null), /*#__PURE__*/React.createElement(window.BoMicroLabel, {
    style: {
      margin: '20px 0 10px'
    }
  }, "M\xF3dulos habilitados"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, gatedModules.map(m => /*#__PURE__*/React.createElement(ModuleRow, {
    key: m.id,
    m: m,
    draft: draft,
    state: moduleState(m),
    expanded: open.has(m.id),
    onToggleExpand: () => setOpen(s => {
      const n = new Set(s);
      n.has(m.id) ? n.delete(m.id) : n.add(m.id);
      return n;
    }),
    onToggleModule: () => toggleModule(m),
    onSetSub: setSub,
    canEnable: canEnable,
    appliedHas: id => !!applied[id]
  }))), dirty && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 15,
      background: 'hsl(var(--surface-overlay))',
      borderTop: '1px solid hsl(var(--border-strong))',
      boxShadow: 'var(--shadow-overlay)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1160,
      margin: '0 auto',
      padding: '12px 30px',
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 9,
      fontSize: 13.5,
      color: 'hsl(var(--text-primary))',
      fontWeight: 500
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 999,
      background: 'hsl(var(--warning-fg))',
      flex: 'none'
    },
    "aria-hidden": "true"
  }), changedIds.length, " cambio", changedIds.length === 1 ? '' : 's', " sin guardar"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: 'hsl(var(--text-tertiary))'
    }
  }, "Los cambios no se aplican al tenant hasta que guarde."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(TBtn, {
    variant: "ghost",
    size: "sm",
    disabled: saving,
    onClick: doDiscard
  }, "Descartar"), /*#__PURE__*/React.createElement(TBtn, {
    variant: "primary",
    size: "sm",
    loading: saving,
    onClick: doSave
  }, "Guardar cambios")))));
}

/* Módulo ADMINISTRACIÓN — intrínseco. Se renderiza como NO-toggleable con su
   explicación, jamás como toggle apagado o ausente. */
function IntrinsicModule() {
  const m = TD.MODULES.find(x => x.intrinsic);
  const [expanded, setExpanded] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid hsl(var(--border-subtle))',
      borderRadius: 12,
      background: 'hsl(var(--surface-sunken))',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '13px 16px'
    }
  }, /*#__PURE__*/React.createElement(TIcon, {
    name: "settings",
    size: 20,
    style: {
      color: 'hsl(var(--text-secondary))',
      flex: 'none'
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setExpanded(v => !v),
    "aria-expanded": expanded,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      border: 0,
      background: 'none',
      padding: 0,
      cursor: 'pointer',
      font: 'inherit',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      fontSize: 14.5,
      color: 'hsl(var(--text-primary))'
    }
  }, m.display), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      color: 'hsl(var(--text-tertiary))',
      transform: expanded ? 'rotate(180deg)' : 'none',
      transition: 'transform .12s',
      fontSize: 11
    }
  }, "\u25BE")), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      fontSize: 10.5,
      fontWeight: 600,
      padding: '2px 9px',
      borderRadius: 999,
      background: 'hsl(var(--surface-raised))',
      border: '1px solid hsl(var(--border-subtle))',
      color: 'hsl(var(--text-secondary))'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\u25CF"), " Intr\xEDnseco"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 12,
      color: 'hsl(var(--text-tertiary))'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'none'
    },
    className: "wide-only"
  }), /*#__PURE__*/React.createElement("span", null, "Siempre disponible"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 16px 13px',
      marginLeft: 32
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 12.5,
      color: 'hsl(var(--text-secondary))',
      maxWidth: '76ch'
    }
  }, m.descripcion), expanded && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, m.submodulos.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.id,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '9px 12px',
      borderRadius: 8,
      background: 'hsl(var(--surface-raised))',
      border: '1px solid hsl(var(--border-subtle))'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13.5,
      color: 'hsl(var(--text-primary))'
    }
  }, s.display), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 11.5,
      color: 'hsl(var(--text-tertiary))'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\u2713"), " Incluido"))))));
}

/* Fila de módulo gated: cabecera (tri-checkbox + resumen) + submódulos (switches). */
function ModuleRow({
  m,
  draft,
  state,
  expanded,
  onToggleExpand,
  onToggleModule,
  onSetSub,
  canEnable,
  appliedHas
}) {
  const subs = m.submodulos;
  const onCount = subs.filter(s => !!draft[s.id]).length;
  const depModule = m.status === 'deprecated';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid hsl(var(--border-subtle))',
      borderRadius: 12,
      background: 'hsl(var(--surface-raised))',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '13px 16px'
    }
  }, /*#__PURE__*/React.createElement(TCheckbox, {
    checked: state === 'all',
    indeterminate: state === 'some',
    "aria-label": 'Habilitar todo ' + m.display,
    onChange: onToggleModule,
    disabled: depModule && onCount === 0
  }), /*#__PURE__*/React.createElement(TIcon, {
    module: m.id,
    size: 20,
    style: {
      color: 'hsl(var(--text-secondary))',
      flex: 'none'
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onToggleExpand,
    "aria-expanded": expanded,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      border: 0,
      background: 'none',
      padding: 0,
      cursor: 'pointer',
      font: 'inherit',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      fontSize: 14.5,
      color: 'hsl(var(--text-primary))'
    }
  }, m.display), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      color: 'hsl(var(--text-tertiary))',
      transform: expanded ? 'rotate(180deg)' : 'none',
      transition: 'transform .12s',
      fontSize: 11
    }
  }, "\u25BE")), depModule && /*#__PURE__*/React.createElement(DeprecatedChip, null), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      fontSize: 12,
      color: 'hsl(var(--text-tertiary))',
      fontVariantNumeric: 'tabular-nums'
    }
  }, onCount, " de ", subs.length, " habilitado", subs.length === 1 ? '' : 's')), expanded && /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid hsl(var(--border-subtle))',
      padding: '8px 16px 12px 48px',
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, depModule && /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '6px 0 8px',
      fontSize: 12,
      color: 'hsl(var(--text-secondary))'
    }
  }, "M\xF3dulo deprecado: no se habilita en nuevos tenants. Los que ya lo ten\xEDan lo conservan."), subs.map(s => {
    const on = !!draft[s.id];
    const dep = s.status === 'deprecated';
    const grandfathered = dep && appliedHas(s.id);
    const locked = dep && !on && !appliedHas(s.id); // deprecado y no concedido → no se puede habilitar
    return /*#__PURE__*/React.createElement("div", {
      key: s.id,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '9px 4px'
      }
    }, /*#__PURE__*/React.createElement(TSwitch, {
      checked: on,
      disabled: locked,
      "aria-label": s.display,
      onChange: v => onSetSub(s.id, v)
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13.5,
        color: locked ? 'hsl(var(--text-tertiary))' : 'hsl(var(--text-primary))'
      }
    }, s.display), dep && /*#__PURE__*/React.createElement(DeprecatedChip, {
      small: true
    })), grandfathered && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11.5,
        color: 'hsl(var(--text-tertiary))',
        marginTop: 2
      }
    }, "Conservado (grandfathered). Si lo apaga, no podr\xE1 volver a habilitarlo."), locked && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11.5,
        color: 'hsl(var(--text-tertiary))',
        marginTop: 2
      }
    }, "No disponible: subm\xF3dulo deprecado.")));
  })));
}
function DeprecatedChip({
  small
}) {
  /* MISMO lenguaje terminal que "Descontinuado" en commerce: pill terminal del
     Badge del núcleo (contorno neutro, sin relleno). NO se usa atenuación ni borde
     punteado — en commerce esos signos significan "Pronto" (no construido) y "slot
     reservado" (viene después): futuro pendiente. Deprecado es pasado terminal, la
     dirección opuesta del mismo eje; no puede compartir signo. */
  return /*#__PURE__*/React.createElement(TBadge, {
    tone: "terminal"
  }, "Deprecado");
}
Object.assign(window, {
  BoTenantsList: TenantsList,
  BoTenantDetail: TenantDetail
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/backoffice/tenants.jsx", error: String((e && e.message) || e) }); }

// ui_kits/commerce/app.jsx
try { (() => {
/* Noctis · commerce — ORQUESTADOR del prototipo. Router de vistas, ejes en vivo
   (MODO por usuario, MARCA por tenant como par {primary,foreground}), gating en
   tres capas y una barra de PROTOTIPO (andamiaje, no chrome de la app) para
   recorrer tenant · perfil · estados. Solo shell + Productos. */
const ANS = window.NoctisCommerceDesignSystem_4dfd35;
const {
  Toast: AToast,
  Badge: ABadge,
  Button: AButton,
  Card: ACard,
  Wordmark: AWordmark
} = ANS;
const D = window.CommerceData;
function ProntoView({
  label
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(window.Crumbs, {
    items: [{
      label: 'Inicio'
    }, {
      label
    }]
  }), /*#__PURE__*/React.createElement(window.PageHeader, {
    title: label,
    meta: /*#__PURE__*/React.createElement(ABadge, {
      tone: "neutral"
    }, "Pronto")
  }), /*#__PURE__*/React.createElement(ACard, null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '24px 8px',
      textAlign: 'center',
      maxWidth: 460,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 16px/22px var(--font-ui)'
    }
  }, "M\xF3dulo en construcci\xF3n"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '6px 0 0',
      color: 'hsl(var(--text-secondary))',
      fontSize: 13
    }
  }, "Tiene permiso para ", /*#__PURE__*/React.createElement("b", null, label), ", pero este m\xF3dulo a\xFAn no se construye en este corte. Se muestra en el men\xFA con la marca \xABPronto\xBB \u2014 el hueco se se\xF1ala, no se oculta."))));
}
function SignedOut({
  onBack
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: 560,
      display: 'grid',
      placeItems: 'center',
      borderRadius: 14,
      overflow: 'hidden',
      position: 'relative',
      background: 'linear-gradient(150deg,#000 0%,#1C1C1E 65%,#2C2C2E 100%)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(120% 90% at 90% -20%, rgba(255,255,255,.07), transparent 60%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(AWordmark, {
    onDark: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 20px/1.2 var(--font-ui)',
      color: '#F5F5F7',
      margin: '18px 0 6px'
    }
  }, "Sesi\xF3n cerrada"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: '#AEAEB2',
      fontSize: 13,
      margin: '0 0 18px'
    }
  }, "Cerr\xF3 sesi\xF3n de forma segura."), /*#__PURE__*/React.createElement(AButton, {
    variant: "secondary",
    onClick: onBack
  }, "Volver a ingresar")));
}
function CommerceApp() {
  const [mode, setMode] = React.useState('light');
  const [tenantId, setTenantId] = React.useState('aguilar');
  const [empresaId, setEmpresaId] = React.useState('e1');
  const [profileKey, setProfileKey] = React.useState('admin');
  const [collapsed, setCollapsed] = React.useState(false);
  const [route, setRoute] = React.useState({
    view: 'dashboard'
  });
  const [activeModule, setActiveModule] = React.useState(null);
  const [listState, setListState] = React.useState('data');
  const [sectionState, setSectionState] = React.useState('data');
  const [toast, setToast] = React.useState(null);
  const [transition, setTransition] = React.useState(false);
  const [signedOut, setSignedOut] = React.useState(false);
  const tenant = D.TENANTS[tenantId];
  const profile = {
    ...D.PROFILES[profileKey]
  };
  const {
    CanPerm
  } = window;
  const showToast = msg => setToast(msg);
  const go = (view, extra = {}) => setRoute({
    view,
    ...extra
  });
  const product = route.productId ? D.PRODUCTS.find(p => p.id === route.productId) : null;
  const variant = route.productId && route.variantId ? (D.VARIANTS[route.productId] || []).find(v => v.id === route.variantId) : null;
  const barcode = variant && route.barcodeId ? (D.BARCODES[variant.id] || []).find(b => b.id === route.barcodeId) : null;

  // gating capa 2 (fail-closed): si el perfil pierde el permiso de la vista actual, bounce a /dashboard
  React.useEffect(() => {
    const needsProductos = route.view !== 'dashboard' && route.view !== 'pronto';
    if (needsProductos && !CanPerm(profile, 'productos.read')) {
      go('dashboard');
      setActiveModule(null);
    }
  }, [profileKey]); // eslint-disable-line

  const onNavigate = item => {
    if (!item.built) {
      setActiveModule(item.id);
      go('pronto', {
        prontoLabel: item.label
      });
      return;
    }
    setActiveModule(item.id);
    go('productos');
  };
  const onChangeCompany = id => {
    // cambiar empresa: limpia TODO el estado y vuelve a /dashboard
    setTransition(true);
    setTimeout(() => {
      setEmpresaId(id);
      setRoute({
        view: 'dashboard'
      });
      setActiveModule(null);
      setListState('data');
      setSectionState('data');
      setTransition(false);
      showToast('Empresa cambiada · estado reiniciado.');
    }, 950);
  };
  const onChangeTenant = id => {
    setTenantId(id);
    setEmpresaId('e1');
    setRoute({
      view: 'dashboard'
    });
    setActiveModule(null);
    setListState('data');
    setSectionState('data');
  };
  const onChangeProfile = k => {
    setProfileKey(k);
  };
  const backToProductos = () => {
    setActiveModule('productos');
    go('productos');
  };
  const backToProduct = pid => {
    setActiveModule('productos');
    go('producto-detalle', {
      productId: pid
    });
  };
  let content;
  switch (route.view) {
    case 'dashboard':
      content = /*#__PURE__*/React.createElement(window.Dashboard, {
        tenant: tenant,
        profile: profile,
        canProductos: CanPerm(profile, 'productos.read'),
        onGoProductos: () => onNavigate({
          id: 'productos',
          built: true
        })
      });
      break;
    case 'pronto':
      content = /*#__PURE__*/React.createElement(ProntoView, {
        label: route.prontoLabel
      });
      break;
    case 'productos':
      content = /*#__PURE__*/React.createElement(window.ProductsList, {
        profile: profile,
        listState: listState,
        onRetry: () => setListState('data'),
        onNew: () => go('producto-nuevo'),
        onOpen: id => go('producto-detalle', {
          productId: id
        })
      });
      break;
    case 'producto-nuevo':
      content = /*#__PURE__*/React.createElement(window.ProductForm, {
        scenario: "ok",
        onCancel: backToProductos,
        onSaved: m => {
          showToast(m);
          backToProductos();
        }
      });
      break;
    case 'producto-editar':
      content = /*#__PURE__*/React.createElement(window.ProductForm, {
        product: product,
        scenario: route.scenario,
        onCancel: () => backToProduct(product.id),
        onSaved: m => {
          showToast(m);
          backToProduct(product.id);
        }
      });
      break;
    case 'producto-detalle':
      content = /*#__PURE__*/React.createElement(window.ProductDetail, {
        product: product,
        profile: profile,
        sectionState: sectionState,
        onRetry: () => setSectionState('data'),
        onEdit: () => go('producto-editar', {
          productId: product.id,
          scenario: 'ok'
        }),
        onBack: backToProductos,
        onNewVariant: () => go('variante-nueva', {
          productId: product.id
        }),
        onOpenVariant: vid => go('variante-detalle', {
          productId: product.id,
          variantId: vid
        }),
        onToast: showToast
      });
      break;
    case 'variante-nueva':
      content = /*#__PURE__*/React.createElement(window.VariantForm, {
        product: product,
        onCancel: w => backToProduct(product.id),
        onSaved: m => {
          showToast(m);
          backToProduct(product.id);
        }
      });
      break;
    case 'variante-editar':
      content = /*#__PURE__*/React.createElement(window.VariantForm, {
        product: product,
        variant: variant,
        onCancel: () => go('variante-detalle', {
          productId: product.id,
          variantId: variant.id
        }),
        onSaved: m => {
          showToast(m);
          go('variante-detalle', {
            productId: product.id,
            variantId: variant.id
          });
        }
      });
      break;
    case 'variante-detalle':
      content = /*#__PURE__*/React.createElement(window.VariantDetail, {
        product: product,
        variant: variant,
        profile: profile,
        sectionState: sectionState,
        onRetry: () => setSectionState('data'),
        onBackProduct: () => backToProduct(product.id),
        onEdit: () => go('variante-editar', {
          productId: product.id,
          variantId: variant.id
        }),
        onNewBarcode: () => go('barcode-nuevo', {
          productId: product.id,
          variantId: variant.id
        }),
        onEditBarcode: bid => go('barcode-editar', {
          productId: product.id,
          variantId: variant.id,
          barcodeId: bid
        }),
        onToast: showToast,
        onDeleted: () => backToProduct(product.id)
      });
      break;
    case 'barcode-nuevo':
      content = /*#__PURE__*/React.createElement(window.BarcodeForm, {
        product: product,
        variant: variant,
        onCancel: () => go('variante-detalle', {
          productId: product.id,
          variantId: variant.id
        }),
        onSaved: m => {
          showToast(m);
          go('variante-detalle', {
            productId: product.id,
            variantId: variant.id
          });
        }
      });
      break;
    case 'barcode-editar':
      content = /*#__PURE__*/React.createElement(window.BarcodeForm, {
        product: product,
        variant: variant,
        barcode: barcode,
        onCancel: () => go('variante-detalle', {
          productId: product.id,
          variantId: variant.id
        }),
        onSaved: m => {
          showToast(m);
          go('variante-detalle', {
            productId: product.id,
            variantId: variant.id
          });
        }
      });
      break;
    default:
      content = null;
  }

  // el par MARCA {primary, foreground} viaja SIEMPRE junto; nunca primary solo
  const accentVars = {
    '--brand-primary': tenant.accent,
    '--brand-foreground': tenant.fg
  };
  // ¿la sección embebida está en la vista actual? (para habilitar su control de estado)
  const sectionScreens = ['producto-detalle', 'variante-detalle'];
  const listScreens = ['productos'];
  return /*#__PURE__*/React.createElement("div", {
    "data-mode": mode,
    style: {
      minHeight: '100vh',
      background: 'hsl(var(--surface-sunken))',
      color: 'hsl(var(--text-primary))',
      fontFamily: 'var(--font-ui)',
      ...accentVars
    }
  }, /*#__PURE__*/React.createElement(PrototypeBar, {
    mode: mode,
    tenantId: tenantId,
    onChangeTenant: onChangeTenant,
    profileKey: profileKey,
    onChangeProfile: onChangeProfile,
    listState: listState,
    setListState: setListState,
    listEnabled: listScreens.includes(route.view),
    sectionState: sectionState,
    setSectionState: setSectionState,
    sectionEnabled: sectionScreens.includes(route.view),
    tenant: tenant
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1320,
      margin: '0 auto',
      padding: '16px 20px 28px'
    }
  }, signedOut ? /*#__PURE__*/React.createElement(SignedOut, {
    onBack: () => {
      setSignedOut(false);
      go('dashboard');
      setActiveModule(null);
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(window.CommerceShell, {
    tenant: tenant,
    empresa: empresaId,
    profile: profile,
    mode: mode,
    onToggleMode: () => setMode(m => m === 'light' ? 'dark' : 'light'),
    onLogout: () => setSignedOut(true),
    activeModule: activeModule,
    onNavigate: onNavigate,
    onChangeCompany: onChangeCompany,
    collapsed: collapsed,
    onToggleCollapse: () => setCollapsed(c => !c)
  }, content), transition && /*#__PURE__*/React.createElement(window.GateOverlay, {
    text: "Cambiando de empresa \xB7 limpiando estado\u2026"
  }))), toast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      left: 0,
      right: 0,
      bottom: 22,
      display: 'flex',
      justifyContent: 'center',
      zIndex: 90,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      pointerEvents: 'auto'
    }
  }, /*#__PURE__*/React.createElement(AToast, {
    onDismiss: () => setToast(null)
  }, toast))));
}

/* Barra de PROTOTIPO — andamiaje tipo Storybook, NO es chrome de la app. Recorre
   los ejes (tenant→acento, perfil→permisos) y los cuatro estados del kit. */
function PrototypeBar({
  mode,
  tenantId,
  onChangeTenant,
  profileKey,
  onChangeProfile,
  listState,
  setListState,
  listEnabled,
  sectionState,
  setSectionState,
  sectionEnabled,
  tenant
}) {
  const {
    Segmented,
    MicroLabel
  } = window;
  const stateOpts = [{
    value: 'data',
    label: 'Datos'
  }, {
    value: 'loading',
    label: 'Cargando'
  }, {
    value: 'empty',
    label: 'Vacío'
  }, {
    value: 'error',
    label: 'Error'
  }, {
    value: 'forbidden',
    label: '403'
  }];
  return /*#__PURE__*/React.createElement("div", {
    "data-mode": "dark",
    style: {
      background: '#0A0A0B',
      borderBottom: '1px solid #26262A',
      color: '#F5F5F7'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1320,
      margin: '0 auto',
      padding: '10px 20px',
      display: 'flex',
      alignItems: 'center',
      gap: 20,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 999,
      background: '#8E8E93'
    },
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '.09em',
      textTransform: 'uppercase',
      color: '#AEAEB2'
    }
  }, "Prototipo")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: '#8E8E93'
    }
  }, "Tenant"), /*#__PURE__*/React.createElement(Segmented, {
    ariaLabel: "Tenant",
    value: tenantId,
    onChange: onChangeTenant,
    options: [{
      value: 'aguilar',
      label: 'Aguilar'
    }, {
      value: 'sanrafael',
      label: 'San Rafael'
    }, {
      value: 'rincon',
      label: 'El Rincón'
    }]
  }), /*#__PURE__*/React.createElement("span", {
    title: `Acento: ${tenant.accentName}`,
    style: {
      width: 16,
      height: 16,
      borderRadius: 5,
      background: `hsl(${tenant.accent})`,
      border: '1px solid rgba(255,255,255,.2)'
    },
    "aria-hidden": "true"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: '#8E8E93'
    }
  }, "Perfil"), /*#__PURE__*/React.createElement(Segmented, {
    ariaLabel: "Perfil",
    value: profileKey,
    onChange: onChangeProfile,
    options: [{
      value: 'admin',
      label: 'Admin'
    }, {
      value: 'bodeguero',
      label: 'Bodeguero'
    }, {
      value: 'vendedor',
      label: 'Vendedor'
    }, {
      value: 'cajero',
      label: 'Cajero'
    }, {
      value: 'contador',
      label: 'Contador'
    }]
  })), (listEnabled || sectionEnabled) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginLeft: 'auto'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: '#8E8E93'
    }
  }, listEnabled ? 'Estado lista' : 'Estado sección'), /*#__PURE__*/React.createElement(Segmented, {
    ariaLabel: "Estado",
    value: listEnabled ? listState : sectionState,
    onChange: listEnabled ? setListState : setSectionState,
    options: stateOpts
  }))));
}
window.CommerceApp = CommerceApp;
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(CommerceApp, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/commerce/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/commerce/data.js
try { (() => {
/* Noctis · commerce — datos mock del prototipo. Solo shell + Productos.
   display_name en español siempre; el UUID/code nunca se muestra en la UI. */
(function () {
  /* Tenants: cada acento viaja como PAR {primary, foreground} curado por el clamp de
     curaduría de 3 dim (luminancia · croma · hue OKLCH ≥ 25° del -fg de cada semántico
     en ambos modos: peligro 28–30, atención 54–73, éxito 152–154, info/link 252–257;
     -bg/-border son lavados casi blancos que no compiten → ventanas 98–127/179–227/282–3).
     Nunca se inyecta primary sin foreground. */
  const TENANTS = {
    aguilar: {
      id: 'aguilar',
      name: 'Librería Aguilar',
      legal: 'Librería Aguilar S.A. · RUC 1790012345001',
      initials: 'LA',
      product: 'commerce',
      // violeta (hue OKLCH 293°, Δ36° de info/link): luminancia < 0,18 → foreground near-white
      accent: '262 60% 42%',
      fg: '0 0% 100%',
      accentName: 'Violeta corporativo',
      empresas: [{
        id: 'e1',
        name: 'Librería Aguilar S.A.',
        legal: 'Librería Aguilar S.A. · RUC 1790012345001'
      }, {
        id: 'e2',
        name: 'Distribuidora Aguilar Cía. Ltda.',
        legal: 'Distribuidora Aguilar Cía. Ltda. · RUC 1791122334001'
      }]
    },
    sanrafael: {
      id: 'sanrafael',
      name: 'Farmacia San Rafael',
      legal: 'Farmacia San Rafael · RUC 0990554433001',
      initials: 'FS',
      product: 'commerce',
      // teal (hue OKLCH 202°, Δ48° de éxito): luminancia < 0,18 → foreground near-white
      accent: '184 72% 26%',
      fg: '0 0% 100%',
      accentName: 'Teal salud',
      empresas: [{
        id: 'e1',
        name: 'Farmacia San Rafael',
        legal: 'Farmacia San Rafael · RUC 0990554433001'
      }]
    },
    rincon: {
      id: 'rincon',
      name: 'El Rincón Ferretero',
      legal: 'El Rincón Ferretero Cía. Ltda. · RUC 1792233445001',
      initials: 'RF',
      product: 'commerce',
      // oro (hue OKLCH 102°, Δ29° de atención en ambos modos): luminancia >= 0,18 → foreground near-BLACK (el par lo demuestra)
      accent: '54 85% 46%',
      fg: '240 6% 12%',
      accentName: 'Oro (foreground near-black)',
      empresas: [{
        id: 'e1',
        name: 'El Rincón Ferretero — Matriz',
        legal: 'El Rincón Ferretero Cía. Ltda. · RUC 1792233445001'
      }, {
        id: 'e2',
        name: 'El Rincón — Sucursal Sur',
        legal: 'El Rincón Ferretero Cía. Ltda. · RUC 1792233445001'
      }]
    }
  };

  /* Perfiles y sus permisos EFECTIVOS. El sidebar muestra un módulo solo si el
     usuario tiene >= 1 permiso bajo él; las CTA se ocultan (no se deshabilitan). */
  const PROFILES = {
    admin: {
      label: 'Administrador',
      email: 'agustina@aguilar.ec',
      perms: ['productos.read', 'productos.write', 'categorias', 'inventario', 'compras', 'precios', 'facturacion', 'clientes', 'ventas', 'pos', 'reportes', 'config.empresa', 'config.usuarios']
    },
    bodeguero: {
      label: 'Bodeguero',
      email: 'bodega@aguilar.ec',
      perms: ['productos.read', 'productos.write', 'categorias', 'inventario', 'compras']
    },
    vendedor: {
      label: 'Vendedor',
      email: 'ventas@aguilar.ec',
      perms: ['productos.read', 'ventas', 'pos', 'clientes']
    },
    cajero: {
      label: 'Cajero',
      email: 'caja@aguilar.ec',
      perms: ['ventas', 'pos']
    },
    contador: {
      label: 'Contador',
      email: 'contable@aguilar.ec',
      perms: ['precios', 'facturacion', 'reportes', 'clientes']
    }
  };

  /* Estructura de navegación por afinidad. `built` marca lo realmente construido
     en este corte (solo Productos); el resto es visible-pero-Pronto si hay permiso. */
  const NAV = [{
    section: 'Vender',
    items: [{
      id: 'pos',
      label: 'POS',
      perm: 'pos',
      built: false
    }, {
      id: 'ventas',
      label: 'Ventas',
      perm: 'ventas',
      built: false
    }]
  }, {
    section: 'Catálogo',
    items: [{
      id: 'productos',
      label: 'Productos',
      perm: 'productos.read',
      built: true,
      children: [{
        id: 'productos',
        label: 'Todos'
      }]
    }, {
      id: 'categorias',
      label: 'Categorías',
      perm: 'categorias',
      built: false
    }]
  }, {
    section: 'Suministro',
    items: [{
      id: 'inventario',
      label: 'Inventario',
      perm: 'inventario',
      built: false
    }, {
      id: 'compras',
      label: 'Compras',
      perm: 'compras',
      built: false
    }]
  }, {
    section: 'Dinero',
    items: [{
      id: 'precios',
      label: 'Precios',
      perm: 'precios',
      built: false
    }, {
      id: 'facturacion',
      label: 'Facturación',
      perm: 'facturacion',
      built: false
    }, {
      id: 'clientes',
      label: 'Clientes',
      perm: 'clientes',
      built: false
    }]
  }, {
    section: 'Gestión',
    items: [{
      id: 'reportes',
      label: 'Reportes',
      perm: 'reportes',
      built: false
    }]
  }, {
    section: 'Configuración',
    items: [{
      id: 'config.empresa',
      label: 'Empresa',
      perm: 'config.empresa',
      built: false
    }, {
      id: 'config.usuarios',
      label: 'Usuarios',
      perm: 'config.usuarios',
      built: false
    }]
  }];
  const CATEGORIAS = [{
    value: 'c-pap',
    label: 'Papelería',
    meta: '18 productos'
  }, {
    value: 'c-esc',
    label: 'Escritura',
    meta: '42 productos'
  }, {
    value: 'c-ofi',
    label: 'Oficina',
    meta: '9 productos'
  }, {
    value: 'c-esc2',
    label: 'Escolar',
    meta: '31 productos'
  }, {
    value: 'c-art',
    label: 'Arte y manualidades',
    meta: '12 productos'
  }, {
    value: 'c-tec',
    label: 'Tecnología',
    meta: '7 productos'
  }];

  /* Productos (madre). estado: activo | borrador | descontinuado (terminal).
     'in_transit' es un estado de TRANSFERENCIA DE INVENTARIO (otro módulo) — nunca de producto. */
  const PRODUCTS = [{
    id: 'p1',
    nombre: 'Cuaderno universitario 100 hojas',
    categoria: 'c-pap',
    categoriaLabel: 'Papelería',
    iva: '15',
    estado: 'activo',
    creado: '04/03/2026',
    descripcion: 'Cuaderno cosido, cuadros 1 cm, tapa dura.'
  }, {
    id: 'p2',
    nombre: 'Esferográfico azul punta media',
    categoria: 'c-esc',
    categoriaLabel: 'Escritura',
    iva: '15',
    estado: 'activo',
    creado: '11/02/2026',
    descripcion: 'Tinta de secado rápido, cuerpo hexagonal.'
  }, {
    id: 'p3',
    nombre: 'Marcador permanente negro',
    categoria: 'c-esc',
    categoriaLabel: 'Escritura',
    iva: '15',
    estado: 'borrador',
    creado: '19/06/2026',
    descripcion: ''
  }, {
    id: 'p4',
    nombre: 'Resma papel bond A4 75 g',
    categoria: 'c-pap',
    categoriaLabel: 'Papelería',
    iva: '15',
    estado: 'activo',
    creado: '28/05/2026',
    descripcion: '500 hojas, blancura 96%.'
  }, {
    id: 'p5',
    nombre: 'Carpeta archivador palanca oficio',
    categoria: 'c-ofi',
    categoriaLabel: 'Oficina',
    iva: '15',
    estado: 'activo',
    creado: '02/01/2026',
    descripcion: 'Lomo 7 cm, cartón forrado.'
  }, {
    id: 'p6',
    nombre: 'Caja de grapas 26/6',
    categoria: 'c-ofi',
    categoriaLabel: 'Oficina',
    iva: '15',
    estado: 'descontinuado',
    creado: '15/11/2025',
    descripcion: 'Caja x 5.000 unidades.'
  }, {
    id: 'p7',
    nombre: 'Set 12 lápices de colores',
    categoria: 'c-art',
    categoriaLabel: 'Arte y manualidades',
    iva: '15',
    estado: 'activo',
    creado: '21/04/2026',
    descripcion: 'Mina resistente, colores vivos.'
  }, {
    id: 'p8',
    nombre: 'Corrector líquido 20 ml',
    categoria: 'c-esc',
    categoriaLabel: 'Escritura',
    iva: '15',
    estado: 'activo',
    creado: '09/03/2026',
    descripcion: 'Aplicador de punta metálica.'
  }];

  /* Variantes por producto (madre). */
  const VARIANTS = {
    p1: [{
      id: 'v1',
      nombre: 'Cuadros',
      sku: 'CUA-100-CUAD',
      atributos: 'Rayado: cuadros · Color tapa: azul',
      creado: '04/03/2026'
    }, {
      id: 'v2',
      nombre: 'Líneas',
      sku: 'CUA-100-LIN',
      atributos: 'Rayado: líneas · Color tapa: rojo',
      creado: '04/03/2026'
    }, {
      id: 'v3',
      nombre: 'Cuadros grande',
      sku: 'CUA-100-CUAD-G',
      atributos: 'Rayado: cuadros 1 cm · Color tapa: verde',
      creado: '06/03/2026'
    }],
    p2: [{
      id: 'v4',
      nombre: 'Azul',
      sku: 'ESF-PM-AZ',
      atributos: 'Color tinta: azul',
      creado: '11/02/2026'
    }, {
      id: 'v5',
      nombre: 'Negro',
      sku: 'ESF-PM-NE',
      atributos: 'Color tinta: negro',
      creado: '11/02/2026'
    }],
    p7: [{
      id: 'v6',
      nombre: 'Estuche cartón',
      sku: 'LAP-12-CART',
      atributos: 'Empaque: cartón',
      creado: '21/04/2026'
    }]
  };

  /* Códigos de barras por variante. primary = código primario. */
  const BARCODES = {
    v1: [{
      id: 'b1',
      codigo: '7861234567890',
      etiqueta: 'EAN caja',
      primary: true
    }, {
      id: 'b2',
      codigo: '7861234500017',
      etiqueta: 'EAN unidad',
      primary: false
    }],
    v4: [{
      id: 'b3',
      codigo: '7862220001114',
      etiqueta: 'EAN unidad',
      primary: true
    }],
    v5: []
  };
  const IVA_OPTIONS = [{
    value: '0',
    label: 'IVA 0%'
  }, {
    value: '5',
    label: 'IVA 5%'
  }, {
    value: '15',
    label: 'IVA 15%'
  }];
  const ESTADO_META = {
    activo: {
      tone: 'success',
      dot: true,
      label: 'Activo'
    },
    borrador: {
      tone: 'neutral',
      dot: false,
      label: 'Borrador'
    },
    descontinuado: {
      tone: 'terminal',
      dot: false,
      label: 'Descontinuado'
    }
  };
  window.CommerceData = {
    TENANTS,
    PROFILES,
    NAV,
    CATEGORIAS,
    PRODUCTS,
    VARIANTS,
    BARCODES,
    IVA_OPTIONS,
    ESTADO_META
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/commerce/data.js", error: String((e && e.message) || e) }); }

// ui_kits/commerce/kit.jsx
try { (() => {
/* Noctis · commerce — kit compartido del prototipo: helpers de gating, confirm
   inline de 2 pasos, y los CUATRO estados por pantalla (vacío · cargando · error
   · 403) construidos SOBRE los primitivos del núcleo. No reimplementa primitivos. */
const NS = window.NoctisCommerceDesignSystem_4dfd35;
const {
  Button,
  Badge,
  Card,
  Alert,
  EmptyState,
  Skeleton,
  Spinner,
  Table
} = NS;

/* ── gating ───────────────────────────────────────────────────────────────
   Tres capas: sidebar (módulo con >=1 permiso) → sección (fail-closed: bounce a
   /dashboard) → pantalla/CTA (ocultar, no deshabilitar). */
const can = (profile, perm) => !perm || profile.perms.includes(perm);

/* ── micro-label de sección (VENDER, MODO) — mayúsculas + tracking ─────────── */
function MicroLabel({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      textTransform: 'uppercase',
      letterSpacing: '.09em',
      color: 'hsl(var(--text-tertiary))',
      fontWeight: 600,
      ...style
    }
  }, children);
}

/* ── breadcrumb ───────────────────────────────────────────────────────────── */
function Crumbs({
  items
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 12,
      color: 'hsl(var(--text-tertiary))',
      marginBottom: 10,
      flexWrap: 'wrap'
    }
  }, items.map((c, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\u203A"), c.onClick ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: c.onClick,
    style: {
      border: 0,
      background: 'none',
      padding: 0,
      cursor: 'pointer',
      color: 'hsl(var(--link))',
      font: 'inherit'
    }
  }, c.label) : /*#__PURE__*/React.createElement("span", {
    style: i === items.length - 1 ? {
      color: 'hsl(var(--text-secondary))'
    } : undefined
  }, c.label))));
}

/* ── encabezado de página ─────────────────────────────────────────────────── */
function PageHeader({
  title,
  meta,
  actions
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 16,
      marginBottom: 16,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      font: '600 24px/30px var(--font-ui)',
      letterSpacing: '-.015em',
      margin: 0
    }
  }, title), meta && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      flexWrap: 'wrap',
      color: 'hsl(var(--text-secondary))',
      fontSize: 13
    }
  }, meta)), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexShrink: 0
    }
  }, actions));
}

/* ── confirm inline de 2 pasos (destructivas) — NUNCA Dialog ────────────────
   Paso 1: botón peligro-fantasma. Paso 2 (armado): pregunta + confirmar/cancelar
   en la misma fila/Card. `pending` muestra spinner en confirmar. */
function ConfirmInline({
  label,
  question,
  confirmLabel = 'Confirmar',
  onConfirm,
  pending,
  size = 'sm',
  tone = 'danger',
  compact
}) {
  const [armed, setArmed] = React.useState(false);
  if (!armed) {
    return /*#__PURE__*/React.createElement(Button, {
      variant: tone === 'danger' ? 'danger-ghost' : 'ghost',
      size: size,
      onClick: () => setArmed(true)
    }, label);
  }
  return /*#__PURE__*/React.createElement("div", {
    role: "group",
    "aria-label": question,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, !compact && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'hsl(var(--text-secondary))'
    }
  }, question), /*#__PURE__*/React.createElement(Button, {
    variant: tone === 'danger' ? 'danger' : 'primary',
    size: size,
    loading: pending,
    onClick: () => onConfirm && onConfirm(() => setArmed(false))
  }, confirmLabel), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: size,
    disabled: pending,
    onClick: () => setArmed(false)
  }, "Cancelar"));
}

/* ── KIT DE ESTADOS ─────────────────────────────────────────────────────────
   Cargando: Skeleton para listas/tablas. */
function TableSkeleton({
  columns,
  rows = 5
}) {
  const skRows = Array.from({
    length: rows
  }, () => Object.fromEntries(columns.map(c => [c.key, /*#__PURE__*/React.createElement(Skeleton, {
    variant: c.pill ? 'pill' : 'line',
    width: c.w || '80%'
  })])));
  return /*#__PURE__*/React.createElement(Table, {
    columns: columns,
    rows: skRows,
    footNote: /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(Spinner, {
      size: "sm"
    }), " Cargando\u2026")
  });
}

/* Error con errorId visible + reintento. El error NUNCA va por toast. */
function ErrorState({
  errorId = 'ERR-7F3A2',
  onRetry,
  context = 'la sección'
}) {
  return /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(Alert, {
    tone: "danger"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      marginBottom: 4
    }
  }, "No se pudo cargar ", context), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13
    }
  }, "Intente nuevamente. Si persiste, comparta el c\xF3digo con soporte."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginTop: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    onClick: onRetry
  }, "Reintentar"), /*#__PURE__*/React.createElement("code", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'hsl(var(--text-tertiary))'
    }
  }, "errorId: ", errorId))));
}

/* 403 sin permiso — se ESCONDE lo no permitido; a nivel sección hace fail-closed. */
function ForbiddenState({
  onHome,
  resource = 'esta sección'
}) {
  return /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '28px 8px',
      textAlign: 'center',
      maxWidth: 420,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 10,
      margin: '0 auto 14px',
      display: 'grid',
      placeItems: 'center',
      background: 'hsl(var(--surface-sunken))',
      border: '1px solid hsl(var(--border-strong))',
      color: 'hsl(var(--text-tertiary))',
      fontSize: 18
    },
    "aria-hidden": "true"
  }, "\u26A0"), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 16px/22px var(--font-ui)'
    }
  }, "No tiene permiso para ver ", resource), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '6px 0 16px',
      color: 'hsl(var(--text-secondary))',
      fontSize: 13
    }
  }, "Su perfil no incluye este acceso. Si cree que es un error, solic\xEDtelo a un administrador de su empresa."), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    onClick: onHome
  }, "Volver al inicio")));
}

/* Vacío con la marca de casa. */
function ListEmpty({
  title,
  description,
  action
}) {
  return /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 8px'
    }
  }, /*#__PURE__*/React.createElement(EmptyState, {
    title: title,
    description: description,
    action: action
  })));
}

/* Overlay de gate/submit (spinner puntual sin layout). */
function GateOverlay({
  text
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'grid',
      placeItems: 'center',
      background: 'hsl(var(--surface-base) / .72)',
      backdropFilter: 'blur(2px)',
      zIndex: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Spinner, {
    size: "lg"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'hsl(var(--text-secondary))'
    }
  }, text)));
}

/* Segmented control genérico (toolbar de prototipo + selector de estado demo). */
function Segmented({
  value,
  onChange,
  options,
  ariaLabel
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "radiogroup",
    "aria-label": ariaLabel,
    style: {
      display: 'inline-flex',
      gap: 2,
      padding: 2,
      borderRadius: 8,
      background: 'hsl(var(--surface-sunken))',
      border: '1px solid hsl(var(--border-subtle))'
    }
  }, options.map(o => {
    const active = o.value === value;
    return /*#__PURE__*/React.createElement("button", {
      key: o.value,
      type: "button",
      role: "radio",
      "aria-checked": active,
      onClick: () => onChange(o.value),
      style: {
        border: 0,
        cursor: 'pointer',
        borderRadius: 6,
        padding: '5px 10px',
        fontSize: 12,
        fontWeight: active ? 600 : 500,
        fontFamily: 'var(--font-ui)',
        background: active ? 'hsl(var(--surface-raised))' : 'transparent',
        color: active ? 'hsl(var(--text-primary))' : 'hsl(var(--text-secondary))',
        boxShadow: active ? '0 1px 2px hsl(240 6% 10% / .08)' : 'none'
      }
    }, o.label);
  }));
}
Object.assign(window, {
  CanPerm: can,
  MicroLabel,
  Crumbs,
  PageHeader,
  ConfirmInline,
  TableSkeleton,
  ErrorState,
  ForbiddenState,
  ListEmpty,
  GateOverlay,
  Segmented
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/commerce/kit.jsx", error: String((e && e.message) || e) }); }

// ui_kits/commerce/pos-app.jsx
try { (() => {
/* Noctis · commerce POS-a — ORQUESTADOR del ambiente de venta. Monta el shell POS
   pantalla completa con el split búsqueda | carrito, mantiene el carrito y el cliente,
   el sheet de cantidad (keypad) y el picker de cliente. Densidad FIJA táctil (es un
   POS). Barra de PROTOTIPO arriba (andamiaje tipo Storybook, NO chrome de la app):
   recorre tenant (acento), densidad (fija), estado de resultados y demo de carrito.
   Alcance: POS-a llega hasta "carrito listo con cliente elegido, Cobrar visible" — el
   destino de Cobrar es POS-b y acá NO se dibuja. */
const APNS = window.NoctisCommerceDesignSystem_4dfd35;
const {
  Toast: APToast,
  Icon: APIcon,
  Button: APBtn,
  Wordmark: APWord
} = APNS;
const PD = window.PosData;

/* Segmented táctil para la barra de prototipo (modo oscuro fijo de la barra). */
function Seg({
  value,
  onChange,
  options,
  ariaLabel
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "radiogroup",
    "aria-label": ariaLabel,
    style: {
      display: 'inline-flex',
      gap: 2,
      padding: 2,
      borderRadius: 9,
      background: '#161619',
      border: '1px solid #2A2A2E'
    }
  }, options.map(o => {
    const active = o.value === value;
    return /*#__PURE__*/React.createElement("button", {
      key: o.value,
      type: "button",
      role: "radio",
      "aria-checked": active,
      onClick: () => onChange(o.value),
      style: {
        border: 0,
        cursor: 'pointer',
        borderRadius: 7,
        padding: '7px 12px',
        fontSize: 12,
        fontWeight: active ? 600 : 500,
        fontFamily: 'var(--font-ui)',
        minHeight: 34,
        background: active ? '#F5F5F7' : 'transparent',
        color: active ? '#0A0A0B' : '#AEAEB2'
      }
    }, o.label);
  }));
}
function PrototypeBar({
  tenantId,
  onChangeTenant,
  searchState,
  onChangeSearch,
  cartDemo,
  onChangeCart,
  tenant,
  density,
  onChangeDensity,
  autoDensity
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 'none',
      background: '#0A0A0B',
      borderBottom: '1px solid #26262A',
      color: '#F5F5F7'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 16px',
      display: 'flex',
      alignItems: 'center',
      gap: 18,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 999,
      background: '#8E8E93'
    },
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '.09em',
      textTransform: 'uppercase',
      color: '#AEAEB2'
    }
  }, "Prototipo \xB7 POS-a")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: '#8E8E93'
    }
  }, "Tenant"), /*#__PURE__*/React.createElement(Seg, {
    ariaLabel: "Tenant",
    value: tenantId,
    onChange: onChangeTenant,
    options: [{
      value: 'aguilar',
      label: 'Aguilar'
    }, {
      value: 'sanrafael',
      label: 'San Rafael'
    }, {
      value: 'rincon',
      label: 'El Rincón'
    }]
  }), /*#__PURE__*/React.createElement("span", {
    title: 'Acento: ' + tenant.accentName,
    style: {
      width: 16,
      height: 16,
      borderRadius: 5,
      background: 'hsl(' + tenant.accent + ')',
      border: '1px solid rgba(255,255,255,.2)'
    },
    "aria-hidden": "true"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: '#8E8E93'
    }
  }, "Densidad"), /*#__PURE__*/React.createElement(Seg, {
    ariaLabel: "Densidad (override manual)",
    value: density,
    onChange: onChangeDensity,
    options: [{
      value: 'comfortable',
      label: 'Desktop'
    }, {
      value: 'touch',
      label: 'Táctil'
    }]
  }), /*#__PURE__*/React.createElement("span", {
    title: 'Autodetectado por puntero: ' + (autoDensity === 'touch' ? 'coarse → táctil' : 'fine → desktop'),
    style: {
      fontSize: 10,
      color: '#8E8E93',
      fontWeight: 500
    }
  }, "auto: ", autoDensity === 'touch' ? 'táctil' : 'desktop')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: '#8E8E93'
    }
  }, "Carrito"), /*#__PURE__*/React.createElement(Seg, {
    ariaLabel: "Demo de carrito",
    value: cartDemo,
    onChange: onChangeCart,
    options: [{
      value: 'full',
      label: 'Con productos'
    }, {
      value: 'empty',
      label: 'Vacío'
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginLeft: 'auto'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: '#8E8E93'
    }
  }, "Resultados"), /*#__PURE__*/React.createElement(Seg, {
    ariaLabel: "Estado de resultados",
    value: searchState,
    onChange: onChangeSearch,
    options: [{
      value: 'data',
      label: 'Datos'
    }, {
      value: 'empty',
      label: 'Vacío'
    }, {
      value: 'loading',
      label: 'Cargando'
    }, {
      value: 'error',
      label: 'Error'
    }, {
      value: 'forbidden',
      label: '403'
    }]
  }))));
}
function ExitedScreen({
  onBack
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'grid',
      placeItems: 'center',
      position: 'relative',
      background: 'linear-gradient(150deg,#000 0%,#1C1C1E 65%,#2C2C2E 100%)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(120% 90% at 90% -20%, rgba(255,255,255,.07), transparent 60%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(APWord, {
    onDark: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 22px/1.2 var(--font-ui)',
      color: '#F5F5F7',
      margin: '20px 0 6px'
    }
  }, "Saliste del POS"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: '#AEAEB2',
      fontSize: 14,
      margin: '0 0 20px'
    }
  }, "Volv\xE9s al panel administrativo (fuera de este corte)."), /*#__PURE__*/React.createElement(APBtn, {
    variant: "secondary",
    onClick: onBack
  }, "Volver al POS")));
}
function PosApp() {
  const [mode, setMode] = React.useState('light');
  const autoDensity = React.useRef(window.detectDensity()).current;
  const [density, setDensity] = React.useState(autoDensity); // primario = desktop; táctil si pointer coarse
  const [tenantId, setTenantId] = React.useState('aguilar');
  const [searchState, setSearchState] = React.useState('data');
  const [cartDemo, setCartDemo] = React.useState('full');
  const [lines, setLines] = React.useState(PD.INITIAL_CART);
  const [customer, setCustomer] = React.useState(PD.CONSUMIDOR_FINAL);
  const [qtyLine, setQtyLine] = React.useState(null);
  const [genericDraft, setGenericDraft] = React.useState(null);
  const [pickerOpen, setPickerOpen] = React.useState(false);
  const [toast, setToast] = React.useState(null);
  const [flash, setFlash] = React.useState(null);
  const [exited, setExited] = React.useState(false);
  const flashTimer = React.useRef(null);
  const seq = React.useRef(100);
  const tenant = PD.TENANTS[tenantId];
  const doFlash = msg => {
    setFlash(msg);
    if (flashTimer.current) clearTimeout(flashTimer.current);
    flashTimer.current = setTimeout(() => setFlash(null), 2600);
  };
  const onChangeCart = v => {
    setCartDemo(v);
    setLines(v === 'empty' ? [] : PD.INITIAL_CART);
  };
  const onChangeTenant = id => setTenantId(id);
  const onAdd = item => {
    setLines(prev => {
      const existing = prev.find(l => l.ref === item.id);
      if (existing) return prev.map(l => l.ref === item.id ? {
        ...l,
        qty: l.qty + 1
      } : l);
      return [...prev, {
        key: 'l' + ++seq.current,
        ref: item.id,
        qty: 1
      }];
    });
    setCartDemo('full');
    doFlash((item.precio == null ? 'Agregado (sin precio, bloquea el cobro): ' : 'Agregado: ') + item.variante);
  };
  const onStep = (line, d) => setLines(prev => prev.map(l => l.key === line.key ? {
    ...l,
    qty: Math.max(1, l.qty + d)
  } : l));
  const onRemove = line => setLines(prev => prev.filter(l => l.key !== line.key));
  const commitQty = n => {
    setLines(prev => prev.map(l => l.key === qtyLine.key ? {
      ...l,
      qty: n
    } : l));
    setQtyLine(null);
  };

  // Ítem rápido: el "sin resultados" abre el alta; al confirmar entra como línea genérica.
  const openGeneric = desc => setGenericDraft({
    desc
  });
  const commitGeneric = data => {
    setLines(prev => [...prev, {
      key: 'l' + ++seq.current,
      generic: true,
      desc: data.desc,
      precio: data.precio,
      iva: data.iva,
      qty: data.qty
    }]);
    setGenericDraft(null);
    setCartDemo('full');
    doFlash((data.precio === 0 ? 'Ítem rápido agregado (precio en cero, bloquea el cobro): ' : 'Ítem rápido agregado: ') + data.desc);
  };
  // Guardar como producto: transición señalada, NO implementada (otro corte). La venta
  // se registra igual; esto sólo abriría el alta con los datos precargados.
  const onSaveProduct = line => setToast('Abriría el alta de producto con «' + line.desc + '» (descripción, precio e IVA) precargados. Es otro corte: la venta se registra igual sin crear el producto.');
  const pickCustomer = c => {
    setCustomer(c);
    setPickerOpen(false);
  };
  const consumidorFinal = () => {
    setCustomer(PD.CONSUMIDOR_FINAL);
    setPickerOpen(false);
  };
  const onCobrar = () => setToast('Cobrar es el siguiente corte (POS-b): vuelto, medios de pago y cierre con secuencial. Fuera de POS-a.');

  // Atajo de teclado del modo desktop: F2 = Cobrar (si no está bloqueado). El táctil no lo usa.
  React.useEffect(() => {
    if (density !== 'comfortable') return;
    const onKey = e => {
      if (e.key !== 'F2') return;
      e.preventDefault();
      const blocked = exited || lines.length === 0 || lines.some(l => PD.byId(l.ref).precio == null);
      if (!blocked) onCobrar();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [density, lines, exited]);
  const accentVars = {
    '--brand-primary': tenant.accent,
    '--brand-foreground': tenant.fg
  };
  return /*#__PURE__*/React.createElement(window.PosDensityCtx.Provider, {
    value: density
  }, /*#__PURE__*/React.createElement("div", {
    "data-mode": mode,
    "data-density": density,
    style: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      background: 'hsl(var(--surface-sunken))',
      color: 'hsl(var(--text-primary))',
      fontFamily: 'var(--font-ui)',
      ...accentVars
    }
  }, /*#__PURE__*/React.createElement(PrototypeBar, {
    tenantId: tenantId,
    onChangeTenant: onChangeTenant,
    searchState: searchState,
    onChangeSearch: setSearchState,
    cartDemo: cartDemo,
    onChangeCart: onChangeCart,
    tenant: tenant,
    density: density,
    onChangeDensity: setDensity,
    autoDensity: autoDensity
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement(window.PosShell, {
    tenant: tenant,
    mode: mode,
    onToggleMode: () => setMode(m => m === 'light' ? 'dark' : 'light'),
    onExit: () => setExited(true)
  }, exited ? /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(ExitedScreen, {
    onBack: () => setExited(false)
  })) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(window.ProductSearch, {
    searchState: searchState,
    onAdd: onAdd,
    onAddGeneric: openGeneric,
    onRetry: () => setSearchState('data'),
    onExit: () => setExited(true),
    flash: flash
  }), /*#__PURE__*/React.createElement(window.Cart, {
    lines: lines,
    customer: customer,
    onOpenQty: setQtyLine,
    onStep: onStep,
    onRemove: onRemove,
    onSaveProduct: onSaveProduct,
    onConsumidorFinal: consumidorFinal,
    onOpenPicker: () => setPickerOpen(true),
    onCobrar: onCobrar
  })))), /*#__PURE__*/React.createElement(window.QtySheet, {
    line: qtyLine,
    onClose: () => setQtyLine(null),
    onCommit: commitQty
  }), /*#__PURE__*/React.createElement(window.GenericItemSheet, {
    draft: genericDraft,
    ivaDefault: tenant.ivaDefault,
    onClose: () => setGenericDraft(null),
    onCommit: commitGeneric
  }), /*#__PURE__*/React.createElement(window.ClientPicker, {
    open: pickerOpen,
    onClose: () => setPickerOpen(false),
    onPick: pickCustomer,
    onConsumidorFinal: consumidorFinal,
    activeId: customer.id
  }), toast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      left: 0,
      right: 0,
      bottom: 22,
      display: 'flex',
      justifyContent: 'center',
      zIndex: 90,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      pointerEvents: 'auto',
      maxWidth: 520,
      margin: '0 16px'
    }
  }, /*#__PURE__*/React.createElement(APToast, {
    onDismiss: () => setToast(null)
  }, toast)))));
}
window.PosApp = PosApp;
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(PosApp, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/commerce/pos-app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/commerce/pos-b-app.jsx
try { (() => {
/* Noctis · commerce POS-b — ORQUESTADOR del cobro. Reusa TAL CUAL el ambiente de venta
   de POS-a (shell + búsqueda + carrito + cliente + kit + datos): NO lo rediseña. Lo único
   que agrega es cablear el "Cobrar" —antes inerte— a la máquina de estados del cobro y a
   la pantalla de venta cerrada de pos-checkout.jsx. Densidad AUTODETECTADA por puntero
   (desktop primario / táctil), igual que POS-a; el cobro respeta esa densidad con su
   entrada (teclado físico desktop · NumericKeypad táctil). */
const BPNS = window.NoctisCommerceDesignSystem_4dfd35;
const {
  Toast: BToast,
  Button: BBtn,
  Wordmark: BWord
} = BPNS;
const BPD = window.PosData;
// POS-b arranca de un carrito VÁLIDO (Cobrar habilitado): POS-a ya demuestra el
// bloqueo por SIN PRECIO; acá el foco es el cobro, así que se siembran sólo las
// líneas con precio. No toca los datos compartidos ni la regla de bloqueo.
const B_CART = BPD.INITIAL_CART.filter(l => !BPD.needsPrice(BPD.lineView(l)));
function Seg({
  value,
  onChange,
  options,
  ariaLabel
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "radiogroup",
    "aria-label": ariaLabel,
    style: {
      display: 'inline-flex',
      gap: 2,
      padding: 2,
      borderRadius: 9,
      background: '#161619',
      border: '1px solid #2A2A2E'
    }
  }, options.map(o => {
    const active = o.value === value;
    return /*#__PURE__*/React.createElement("button", {
      key: o.value,
      type: "button",
      role: "radio",
      "aria-checked": active,
      onClick: () => onChange(o.value),
      style: {
        border: 0,
        cursor: 'pointer',
        borderRadius: 7,
        padding: '7px 12px',
        fontSize: 12,
        fontWeight: active ? 600 : 500,
        fontFamily: 'var(--font-ui)',
        minHeight: 34,
        background: active ? '#F5F5F7' : 'transparent',
        color: active ? '#0A0A0B' : '#AEAEB2'
      }
    }, o.label);
  }));
}
function PrototypeBar({
  tenantId,
  onChangeTenant,
  cartDemo,
  onChangeCart,
  tenant,
  density,
  onChangeDensity,
  autoDensity,
  outcome,
  onChangeOutcome
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 'none',
      background: '#0A0A0B',
      borderBottom: '1px solid #26262A',
      color: '#F5F5F7'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 16px',
      display: 'flex',
      alignItems: 'center',
      gap: 18,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 999,
      background: '#8E8E93'
    },
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '.09em',
      textTransform: 'uppercase',
      color: '#AEAEB2'
    }
  }, "Prototipo \xB7 POS-b \xB7 cobro")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: '#8E8E93'
    }
  }, "Tenant"), /*#__PURE__*/React.createElement(Seg, {
    ariaLabel: "Tenant",
    value: tenantId,
    onChange: onChangeTenant,
    options: [{
      value: 'aguilar',
      label: 'Aguilar'
    }, {
      value: 'sanrafael',
      label: 'San Rafael'
    }, {
      value: 'rincon',
      label: 'El Rincón'
    }]
  }), /*#__PURE__*/React.createElement("span", {
    title: 'Acento: ' + tenant.accentName,
    style: {
      width: 16,
      height: 16,
      borderRadius: 5,
      background: 'hsl(' + tenant.accent + ')',
      border: '1px solid rgba(255,255,255,.2)'
    },
    "aria-hidden": "true"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: '#8E8E93'
    }
  }, "Densidad"), /*#__PURE__*/React.createElement(Seg, {
    ariaLabel: "Densidad (override manual)",
    value: density,
    onChange: onChangeDensity,
    options: [{
      value: 'comfortable',
      label: 'Desktop'
    }, {
      value: 'touch',
      label: 'Táctil'
    }]
  }), /*#__PURE__*/React.createElement("span", {
    title: 'Autodetectado por puntero: ' + (autoDensity === 'touch' ? 'coarse → táctil' : 'fine → desktop'),
    style: {
      fontSize: 10,
      color: '#8E8E93',
      fontWeight: 500
    }
  }, "auto: ", autoDensity === 'touch' ? 'táctil' : 'desktop')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: '#8E8E93'
    }
  }, "Carrito"), /*#__PURE__*/React.createElement(Seg, {
    ariaLabel: "Demo de carrito",
    value: cartDemo,
    onChange: onChangeCart,
    options: [{
      value: 'full',
      label: 'Con productos'
    }, {
      value: 'empty',
      label: 'Vacío'
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginLeft: 'auto'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: '#8E8E93'
    }
  }, "Escritura del cobro"), /*#__PURE__*/React.createElement(Seg, {
    ariaLabel: "Resultado de la escritura del cobro",
    value: outcome,
    onChange: onChangeOutcome,
    options: [{
      value: 'success',
      label: 'Éxito'
    }, {
      value: 'fail',
      label: 'Falla'
    }]
  }))));
}
function ExitedScreen({
  onBack
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'grid',
      placeItems: 'center',
      position: 'relative',
      background: 'linear-gradient(150deg,#000 0%,#1C1C1E 65%,#2C2C2E 100%)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(120% 90% at 90% -20%, rgba(255,255,255,.07), transparent 60%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(BWord, {
    onDark: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 22px/1.2 var(--font-ui)',
      color: '#F5F5F7',
      margin: '20px 0 6px'
    }
  }, "Saliste del POS"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: '#AEAEB2',
      fontSize: 14,
      margin: '0 0 20px'
    }
  }, "Volv\xE9s al panel administrativo (fuera de este corte)."), /*#__PURE__*/React.createElement(BBtn, {
    variant: "secondary",
    onClick: onBack
  }, "Volver al POS")));
}
function PosBApp() {
  const [mode, setMode] = React.useState('light');
  const autoDensity = React.useRef(window.detectDensity()).current;
  const [density, setDensity] = React.useState(autoDensity);
  const [tenantId, setTenantId] = React.useState('aguilar');
  const [cartDemo, setCartDemo] = React.useState('full');
  const [lines, setLines] = React.useState(B_CART);
  const [customer, setCustomer] = React.useState(BPD.CONSUMIDOR_FINAL);
  const [qtyLine, setQtyLine] = React.useState(null);
  const [genericDraft, setGenericDraft] = React.useState(null);
  const [pickerOpen, setPickerOpen] = React.useState(false);
  const [toast, setToast] = React.useState(null);
  const [flash, setFlash] = React.useState(null);
  const [exited, setExited] = React.useState(false);
  // ── Máquina de estados del COBRO ──────────────────────────────────────────────
  const [checkoutOpen, setCheckoutOpen] = React.useState(false);
  const [phase, setPhase] = React.useState('idle'); // idle · processing · error
  const [received, setReceived] = React.useState(''); // centavos tecleados (string)
  const [outcome, setOutcome] = React.useState('success'); // control de prototipo
  const [closedSale, setClosedSale] = React.useState(null); // venta cerrada (éxito)
  const [errorId, setErrorId] = React.useState('ERR-POS-7F09');
  const flashTimer = React.useRef(null);
  const seq = React.useRef(100);
  const compSeq = React.useRef(101); // secuencial del comprobante
  const writeTimer = React.useRef(null);
  const tenant = BPD.TENANTS[tenantId];
  const doFlash = msg => {
    setFlash(msg);
    if (flashTimer.current) clearTimeout(flashTimer.current);
    flashTimer.current = setTimeout(() => setFlash(null), 2600);
  };
  const onChangeCart = v => {
    setCartDemo(v);
    setLines(v === 'empty' ? [] : B_CART);
  };
  const onAdd = item => {
    setLines(prev => {
      const existing = prev.find(l => l.ref === item.id);
      if (existing) return prev.map(l => l.ref === item.id ? {
        ...l,
        qty: l.qty + 1
      } : l);
      return [...prev, {
        key: 'l' + ++seq.current,
        ref: item.id,
        qty: 1
      }];
    });
    setCartDemo('full');
    doFlash((item.precio == null ? 'Agregado (sin precio, bloquea el cobro): ' : 'Agregado: ') + item.variante);
  };
  const onStep = (line, d) => setLines(prev => prev.map(l => l.key === line.key ? {
    ...l,
    qty: Math.max(1, l.qty + d)
  } : l));
  const onRemove = line => setLines(prev => prev.filter(l => l.key !== line.key));
  const commitQty = n => {
    setLines(prev => prev.map(l => l.key === qtyLine.key ? {
      ...l,
      qty: n
    } : l));
    setQtyLine(null);
  };
  const openGeneric = desc => setGenericDraft({
    desc
  });
  const commitGeneric = data => {
    setLines(prev => [...prev, {
      key: 'l' + ++seq.current,
      generic: true,
      desc: data.desc,
      precio: data.precio,
      iva: data.iva,
      qty: data.qty
    }]);
    setGenericDraft(null);
    setCartDemo('full');
    doFlash((data.precio === 0 ? 'Ítem rápido agregado (precio en cero, bloquea el cobro): ' : 'Ítem rápido agregado: ') + data.desc);
  };
  const onSaveProduct = line => setToast('Abriría el alta de producto con «' + line.desc + '» precargado. Es otro corte: la venta se registra igual.');
  const pickCustomer = c => {
    setCustomer(c);
    setPickerOpen(false);
  };
  const consumidorFinal = () => {
    setCustomer(BPD.CONSUMIDOR_FINAL);
    setPickerOpen(false);
  };
  const isBlocked = () => exited || lines.length === 0 || lines.some(l => BPD.needsPrice(BPD.lineView(l)));

  // COBRAR — abre el cobro (antes inerte). Parte de un carrito válido (Cobrar sólo se
  // habilita si ninguna línea bloquea, regla de POS-a). Reset del monto por venta.
  const onCobrar = () => {
    if (isBlocked()) return;
    setReceived('');
    setPhase('idle');
    setCheckoutOpen(true);
  };

  // CONFIRMAR — escritura de la venta. Bloquea DOBLE SUBMIT (si ya está procesando, no
  // dispara otra). El vuelto se calcula acá sólo como referencia de caja, no se persiste.
  const runWrite = () => {
    if (phase === 'processing') return; // guarda anti doble-venta
    setPhase('processing');
    if (writeTimer.current) clearTimeout(writeTimer.current);
    writeTimer.current = setTimeout(() => {
      if (outcome === 'fail') {
        setErrorId('ERR-POS-' + (7000 + Math.floor(Math.random() * 900)).toString(16).toUpperCase());
        setPhase('error');
        return;
      }
      const totals = window.posTotals(lines);
      const recv = parseInt(received || '0', 10) / 100;
      const n = compSeq.current++;
      setClosedSale({
        secuencial: '001-001-' + String(n).padStart(9, '0'),
        total: totals.total,
        received: recv,
        change: recv - totals.total,
        customer: customer.nombre
      });
      setCheckoutOpen(false);
      setPhase('idle');
    }, 1500);
  };
  const cancelCheckout = () => {
    if (phase === 'processing') return;
    setCheckoutOpen(false);
    setPhase('idle');
  };

  // NUEVA VENTA — camino mayoritario: vuelve al POS vacío.
  const newSale = () => {
    setClosedSale(null);
    setLines([]);
    setCartDemo('empty');
    setCustomer(BPD.CONSUMIDOR_FINAL);
    setReceived('');
    setPhase('idle');
  };
  const onPrint = () => setToast('Ver / imprimir comprobante es fast-follow: depende del driver/servidor de impresora, fuera de este corte. La venta ya quedó registrada con su secuencial.');

  // Atajo desktop: F2 = abrir cobro (coherente con POS-a). El táctil no lo usa. El Enter
  // que confirma dentro del cobro lo maneja el CheckoutSheet.
  React.useEffect(() => {
    if (density !== 'comfortable') return;
    const onKey = e => {
      if (e.key !== 'F2') return;
      e.preventDefault();
      if (!checkoutOpen && !closedSale && !isBlocked()) onCobrar();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [density, lines, exited, checkoutOpen, closedSale]);
  React.useEffect(() => () => {
    if (writeTimer.current) clearTimeout(writeTimer.current);
  }, []);
  const accentVars = {
    '--brand-primary': tenant.accent,
    '--brand-foreground': tenant.fg
  };
  const totals = window.posTotals(lines);
  return /*#__PURE__*/React.createElement(window.PosDensityCtx.Provider, {
    value: density
  }, /*#__PURE__*/React.createElement("div", {
    "data-mode": mode,
    "data-density": density,
    style: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      background: 'hsl(var(--surface-sunken))',
      color: 'hsl(var(--text-primary))',
      fontFamily: 'var(--font-ui)',
      ...accentVars
    }
  }, /*#__PURE__*/React.createElement(PrototypeBar, {
    tenantId: tenantId,
    onChangeTenant: setTenantId,
    cartDemo: cartDemo,
    onChangeCart: onChangeCart,
    tenant: tenant,
    density: density,
    onChangeDensity: setDensity,
    autoDensity: autoDensity,
    outcome: outcome,
    onChangeOutcome: setOutcome
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement(window.PosShell, {
    tenant: tenant,
    mode: mode,
    onToggleMode: () => setMode(m => m === 'light' ? 'dark' : 'light'),
    onExit: () => setExited(true)
  }, exited ? /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(ExitedScreen, {
    onBack: () => setExited(false)
  })) : closedSale ? /*#__PURE__*/React.createElement(window.SaleClosedScreen, {
    sale: closedSale,
    onNewSale: newSale,
    onPrint: onPrint,
    density: density
  }) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(window.ProductSearch, {
    searchState: "data",
    onAdd: onAdd,
    onAddGeneric: openGeneric,
    onRetry: () => {},
    onExit: () => setExited(true),
    flash: flash
  }), /*#__PURE__*/React.createElement(window.Cart, {
    lines: lines,
    customer: customer,
    onOpenQty: setQtyLine,
    onStep: onStep,
    onRemove: onRemove,
    onSaveProduct: onSaveProduct,
    onConsumidorFinal: consumidorFinal,
    onOpenPicker: () => setPickerOpen(true),
    onCobrar: onCobrar
  })))), /*#__PURE__*/React.createElement(window.QtySheet, {
    line: qtyLine,
    onClose: () => setQtyLine(null),
    onCommit: commitQty
  }), /*#__PURE__*/React.createElement(window.GenericItemSheet, {
    draft: genericDraft,
    ivaDefault: tenant.ivaDefault,
    onClose: () => setGenericDraft(null),
    onCommit: commitGeneric
  }), /*#__PURE__*/React.createElement(window.ClientPicker, {
    open: pickerOpen,
    onClose: () => setPickerOpen(false),
    onPick: pickCustomer,
    onConsumidorFinal: consumidorFinal,
    activeId: customer.id
  }), /*#__PURE__*/React.createElement(window.CheckoutSheet, {
    open: checkoutOpen,
    phase: phase,
    totals: totals,
    received: received,
    onReceived: setReceived,
    onConfirm: runWrite,
    onRetry: runWrite,
    onCancel: cancelCheckout,
    errorId: errorId,
    density: density
  }), toast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      left: 0,
      right: 0,
      bottom: 22,
      display: 'flex',
      justifyContent: 'center',
      zIndex: 90,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      pointerEvents: 'auto',
      maxWidth: 520,
      margin: '0 16px'
    }
  }, /*#__PURE__*/React.createElement(BToast, {
    onDismiss: () => setToast(null)
  }, toast)))));
}
window.PosBApp = PosBApp;
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(PosBApp, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/commerce/pos-b-app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/commerce/pos-cart.jsx
try { (() => {
/* Noctis · commerce POS-a — CARRITO (línea por línea) + CLIENTE + totales + Cobrar.
   Cada línea: display_name de la variante (nunca UUID/SKU como identificador visual
   principal), cantidad editable por NumericKeypad del núcleo, precio unitario,
   subtotal de línea, y quitar-línea con superficie grande.

   QUITAR-LÍNEA: botón táctil explícito (no swipe). Justificación: bajo presión y en
   tablet, el swipe fino es de baja descubribilidad y fácil de disparar por error; un
   objetivo grande con feedback inmediato es más seguro. No lleva confirm de 2 pasos
   porque no es una mutación destructiva de datos —es editar la venta en curso—.

   MONTOS: string es-EC $1.234,56 vía MoneyDisplay. El subtotal de línea y los totales
   se MUESTRAN como render de lo que vendría del backend; el cliente no es la fuente de
   verdad del precio (acá se arma un stand-in aritmético solo para que el prototipo viva).

   SIN PRECIO (estado crítico): una variante puede no tener precio en la lista aplicable.
   precio null NO es $0 — es "Sin precio", BLOQUEA la línea y bloquea el avance a Cobrar. */
const KRT = window.NoctisCommerceDesignSystem_4dfd35;
const {
  Button: RBtn,
  MoneyDisplay: RMoney,
  NumericKeypad: RKeypad,
  Sheet: RSheet,
  Badge: RBadge
} = KRT;
const RIco = window.PosIcon;

/* Formato es-EC de un monto tecleado en centavos (keypad de monto: coma decimal). */
function fmtCents(cents) {
  const n = parseInt(cents || '0', 10) / 100;
  const [e, d] = n.toFixed(2).split('.');
  return '$' + e.replace(/\B(?=(\d{3})+(?!\d))/g, '.') + ',' + d;
}

/* Sheet de cantidad — NumericKeypad del núcleo (teclas del token --kp-key, teclado
   físico). Sirve para líneas de catálogo y genéricas por igual. */
function QtySheet({
  line,
  onClose,
  onCommit
}) {
  const view = line ? window.PosData.lineView(line) : null;
  const [val, setVal] = React.useState('1');
  React.useEffect(() => {
    if (line) setVal(String(line.qty));
  }, [line]);
  const n = parseInt(val || '0', 10);
  const commit = () => onCommit(Math.max(1, n || 1));
  return /*#__PURE__*/React.createElement(RSheet, {
    open: !!line,
    onClose: onClose,
    placement: "bottom",
    title: view ? /*#__PURE__*/React.createElement("span", null, "Cantidad \u2014 ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'hsl(var(--text-secondary))',
        fontWeight: 500
      }
    }, view.desc)) : 'Cantidad',
    footer: /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10,
        justifyContent: 'flex-end'
      }
    }, /*#__PURE__*/React.createElement(RBtn, {
      variant: "ghost",
      onClick: onClose
    }, "Cancelar"), /*#__PURE__*/React.createElement(RBtn, {
      variant: "primary",
      onClick: commit
    }, "Confirmar cantidad"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      placeItems: 'center',
      padding: '4px 0 8px'
    }
  }, /*#__PURE__*/React.createElement(RKeypad, {
    value: val,
    onChange: setVal,
    maxLength: 4
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '14px 0 0',
      fontSize: 13,
      color: 'hsl(var(--text-tertiary))'
    }
  }, "Para quitar la l\xEDnea, us\xE1 el bot\xF3n de quitar en el carrito.")));
}

/* Sheet de ALTA de ítem rápido (línea genérica). Reusa el keypad del núcleo para el
   PRECIO (mismo input que la cantidad de catálogo) y hereda el IVA del perfil fiscal
   del tenant, corregible por línea. Descripción libre editable. Sin SKU ni stock. */
function GenericItemSheet({
  draft,
  ivaDefault,
  onClose,
  onCommit
}) {
  const [desc, setDesc] = React.useState('');
  const [cents, setCents] = React.useState('');
  const [qty, setQty] = React.useState(1);
  const [iva, setIva] = React.useState(ivaDefault);
  React.useEffect(() => {
    if (draft) {
      setDesc(draft.desc || '');
      setCents('');
      setQty(1);
      setIva(ivaDefault);
    }
  }, [draft, ivaDefault]);
  const precio = parseInt(cents || '0', 10) / 100;
  const canSave = desc.trim().length > 0;
  const commit = () => {
    if (canSave) onCommit({
      desc: desc.trim(),
      precio,
      iva,
      qty
    });
  };
  const tariffs = window.PosData.IVA_TARIFFS;
  const Label = ({
    children
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      textTransform: 'uppercase',
      letterSpacing: '.08em',
      color: 'hsl(var(--text-tertiary))',
      fontWeight: 600,
      marginBottom: 8
    }
  }, children);
  return /*#__PURE__*/React.createElement(RSheet, {
    open: !!draft,
    onClose: onClose,
    placement: "bottom",
    title: "\xCDtem r\xE1pido \u2014 venta sin cat\xE1logo",
    footer: /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10,
        justifyContent: 'flex-end'
      }
    }, /*#__PURE__*/React.createElement(RBtn, {
      variant: "ghost",
      onClick: onClose
    }, "Cancelar"), /*#__PURE__*/React.createElement(RBtn, {
      variant: "primary",
      onClick: commit,
      disabled: !canSave
    }, "Agregar al carrito"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24,
      flexWrap: 'wrap',
      minWidth: 300
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 260,
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Label, null, "Descripci\xF3n"), /*#__PURE__*/React.createElement("input", {
    value: desc,
    onChange: e => setDesc(e.target.value),
    "aria-label": "Descripci\xF3n del \xEDtem r\xE1pido",
    placeholder: "Ej. Pantal\xF3n, servicio, art\xEDculo suelto\u2026",
    style: {
      width: '100%',
      height: 'var(--pos-field)',
      padding: '0 14px',
      borderRadius: 12,
      border: '1px solid hsl(var(--border-strong))',
      background: 'hsl(var(--surface-base))',
      color: 'hsl(var(--text-primary))',
      font: '400 16px var(--font-ui)',
      outline: 'none'
    },
    onFocus: e => {
      e.target.style.borderColor = 'hsl(var(--focus-ring))';
      e.target.style.boxShadow = '0 0 0 3px hsl(var(--focus-ring) / .28)';
    },
    onBlur: e => {
      e.target.style.borderColor = 'hsl(var(--border-strong))';
      e.target.style.boxShadow = 'none';
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Label, null, "Precio"), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 'var(--pos-field)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 16px',
      borderRadius: 12,
      border: '1px solid ' + (precio === 0 ? 'hsl(var(--warning-border))' : 'hsl(var(--border-strong))'),
      background: 'hsl(var(--surface-sunken))',
      font: '700 26px/1 var(--font-ui)',
      fontVariantNumeric: 'tabular-nums',
      color: precio === 0 ? 'hsl(var(--warning-fg))' : 'hsl(var(--text-primary))'
    }
  }, fmtCents(cents)), precio === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      fontSize: 12,
      color: 'hsl(var(--warning-fg))'
    }
  }, "Asign\xE1 un precio con el teclado para poder cobrarlo.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Label, null, "IVA \u2014 heredado del perfil fiscal (", ivaDefault, "%), corregible"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, tariffs.map(t => {
    const active = t === iva;
    return /*#__PURE__*/React.createElement("button", {
      key: t,
      type: "button",
      onClick: () => setIva(t),
      "aria-pressed": active,
      className: "pos-btn",
      style: {
        flex: 1,
        height: 'var(--pos-action)',
        borderRadius: 10,
        cursor: 'pointer',
        fontFamily: 'var(--font-ui)',
        fontSize: 14,
        fontWeight: 600,
        border: '1px solid ' + (active ? 'hsl(var(--brand-primary))' : 'hsl(var(--border-strong))'),
        background: active ? 'hsl(var(--brand-primary))' : 'hsl(var(--surface-base))',
        color: active ? 'hsl(var(--brand-foreground))' : 'hsl(var(--text-secondary))'
      }
    }, t, "%", t === ivaDefault ? ' ·' : '');
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Label, null, "Cantidad"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setQty(q => Math.max(1, q - 1)),
    className: "pos-btn",
    "aria-label": "Restar una unidad",
    disabled: qty <= 1,
    style: {
      width: 'var(--pos-tap-sm)',
      height: 'var(--pos-tap-sm)',
      borderRadius: 10,
      border: '1px solid hsl(var(--border-strong))',
      background: 'hsl(var(--surface-raised))',
      color: 'hsl(var(--text-primary))',
      cursor: qty <= 1 ? 'default' : 'pointer',
      opacity: qty <= 1 ? .4 : 1,
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(RIco, {
    name: "minus",
    size: 18
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 60,
      height: 'var(--pos-tap-sm)',
      display: 'grid',
      placeItems: 'center',
      padding: '0 12px',
      borderRadius: 10,
      border: '1px solid hsl(var(--border-strong))',
      background: 'hsl(var(--surface-raised))',
      font: '600 18px var(--font-ui)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, qty), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setQty(q => q + 1),
    className: "pos-btn",
    "aria-label": "Sumar una unidad",
    style: {
      width: 'var(--pos-tap-sm)',
      height: 'var(--pos-tap-sm)',
      borderRadius: 10,
      border: '1px solid hsl(var(--border-strong))',
      background: 'hsl(var(--surface-raised))',
      color: 'hsl(var(--text-primary))',
      cursor: 'pointer',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(RIco, {
    name: "plus",
    size: 18
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 'none',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(RKeypad, {
    value: cents,
    onChange: setCents,
    maxLength: 7
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 12,
      color: 'hsl(var(--text-tertiary))',
      maxWidth: 240,
      textAlign: 'center'
    }
  }, "El teclado num\xE9rico fija el precio en centavos; el teclado f\xEDsico tambi\xE9n funciona."))));
}
function CartLine({
  line,
  onOpenQty,
  onStep,
  onRemove,
  onSaveProduct
}) {
  const v = window.PosData.lineView(line);
  const needs = window.PosData.needsPrice(v);
  // stand-in aritmético de render (no fuente de verdad): subtotal = unitario × cantidad
  const subtotal = needs ? null : v.precio * v.qty;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 14,
      borderRadius: 12,
      border: '1px solid ' + (needs ? 'hsl(var(--warning-border))' : 'hsl(var(--border-subtle))'),
      background: needs ? 'hsl(var(--warning-bg))' : 'hsl(var(--surface-base))'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 600,
      color: 'hsl(var(--text-primary))',
      letterSpacing: '-.01em',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, v.desc), v.generic && /*#__PURE__*/React.createElement(RBadge, {
    tone: "info"
  }, "\xCDtem r\xE1pido")), v.generic ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'hsl(var(--text-tertiary))',
      fontFamily: 'var(--font-mono)'
    }
  }, "Sin SKU \xB7 IVA ", v.iva, "%") : /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'hsl(var(--text-secondary))',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, v.sub)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onRemove,
    className: "pos-btn",
    "aria-label": 'Quitar ' + v.desc + ' del carrito',
    style: {
      flex: 'none',
      width: 'var(--hit-min)',
      height: 'var(--hit-min)',
      borderRadius: 10,
      border: '1px solid hsl(var(--border-strong))',
      background: 'hsl(var(--surface-raised))',
      color: 'hsl(var(--text-tertiary))',
      cursor: 'pointer',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(RIco, {
    name: "trash-2",
    style: {
      width: 'var(--pos-ico)',
      height: 'var(--pos-ico)'
    }
  }))), needs && /*#__PURE__*/React.createElement("div", {
    role: "alert",
    style: {
      margin: '10px 0',
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 13,
      fontWeight: 500,
      color: 'hsl(var(--warning-fg))'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\u26A0"), " ", v.generic ? 'Precio en cero — asigná un precio para poder vender.' : 'Sin precio en la lista aplicable — no se puede vender.', " Bloquea el cobro."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => onStep(-1),
    className: "pos-btn",
    "aria-label": "Restar una unidad",
    disabled: line.qty <= 1,
    style: {
      width: 'var(--pos-tap-sm)',
      height: 'var(--pos-tap-sm)',
      borderRadius: 10,
      border: '1px solid hsl(var(--border-strong))',
      background: 'hsl(var(--surface-raised))',
      color: 'hsl(var(--text-primary))',
      cursor: line.qty <= 1 ? 'default' : 'pointer',
      opacity: line.qty <= 1 ? .4 : 1,
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(RIco, {
    name: "minus",
    size: 18
  })), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onOpenQty,
    className: "pos-btn",
    "aria-label": 'Cambiar cantidad, actual ' + line.qty,
    style: {
      minWidth: 60,
      height: 'var(--pos-tap-sm)',
      padding: '0 12px',
      borderRadius: 10,
      border: '1px solid hsl(var(--border-strong))',
      background: 'hsl(var(--surface-raised))',
      color: 'hsl(var(--text-primary))',
      cursor: 'pointer',
      font: '600 18px var(--font-ui)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, line.qty), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => onStep(1),
    className: "pos-btn",
    "aria-label": "Sumar una unidad",
    style: {
      width: 'var(--pos-tap-sm)',
      height: 'var(--pos-tap-sm)',
      borderRadius: 10,
      border: '1px solid hsl(var(--border-strong))',
      background: 'hsl(var(--surface-raised))',
      color: 'hsl(var(--text-primary))',
      cursor: 'pointer',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(RIco, {
    name: "plus",
    size: 18
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right'
    }
  }, needs ? /*#__PURE__*/React.createElement(RMoney, {
    value: null
  }) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'hsl(var(--text-tertiary))',
      fontFamily: 'var(--font-mono)'
    }
  }, /*#__PURE__*/React.createElement(RMoney, {
    value: v.precio,
    size: "sm"
  }), " \xD7 ", line.qty), /*#__PURE__*/React.createElement(RMoney, {
    value: subtotal,
    size: "md"
  })))), v.generic && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      paddingTop: 10,
      borderTop: '1px dashed hsl(var(--border-subtle))'
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => onSaveProduct(line),
    className: "pos-btn",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      minHeight: 'var(--pos-tap-sm)',
      padding: '0 12px',
      borderRadius: 10,
      border: '1px solid hsl(var(--border-strong))',
      background: 'hsl(var(--surface-raised))',
      color: 'hsl(var(--text-secondary))',
      cursor: 'pointer',
      font: '500 13px var(--font-ui)'
    }
  }, /*#__PURE__*/React.createElement(RIco, {
    name: "package",
    size: 17
  }), "Guardar como producto")));
}
function TotalRow({
  label,
  value,
  strong
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: strong ? 15 : 13,
      fontWeight: strong ? 600 : 500,
      color: strong ? 'hsl(var(--text-primary))' : 'hsl(var(--text-secondary))',
      textTransform: strong ? 'uppercase' : 'none',
      letterSpacing: strong ? '.06em' : 0
    }
  }, label), /*#__PURE__*/React.createElement(RMoney, {
    value: value,
    size: strong ? 'lg' : 'sm'
  }));
}
function Cart({
  lines,
  customer,
  onOpenQty,
  onStep,
  onRemove,
  onSaveProduct,
  onConsumidorFinal,
  onOpenPicker,
  onCobrar
}) {
  const {
    PosLabel,
    CustomerBar
  } = window;
  const empty = lines.length === 0;
  // Render stand-in de totales (autoridad real = backend). Catálogo y genérica suman
  // igual; se excluyen las líneas a resolver (SIN PRECIO de catálogo o precio en cero).
  const views = lines.map(l => window.PosData.lineView(l));
  const priced = views.filter(v => !window.PosData.needsPrice(v));
  const subtotal = priced.reduce((s, v) => s + v.precio * v.qty, 0);
  const iva = priced.reduce((s, v) => s + v.precio * v.qty * (v.iva / 100), 0);
  const total = subtotal + iva;
  const sinPrecioCount = views.filter(v => window.PosData.needsPrice(v)).length;
  const catalogNoPrice = views.filter(v => !v.generic && window.PosData.needsPrice(v)).length;
  const genericNoPrice = views.filter(v => v.generic && window.PosData.needsPrice(v)).length;
  const blocked = empty || sinPrecioCount > 0;
  const totalItems = views.reduce((s, v) => s + v.qty, 0);
  return /*#__PURE__*/React.createElement("aside", {
    "aria-label": "Carrito",
    style: {
      flex: 'none',
      width: 'var(--pos-cart-w)',
      display: 'flex',
      flexDirection: 'column',
      minHeight: 0,
      borderLeft: '1px solid hsl(var(--border-subtle))',
      background: 'hsl(var(--surface-sunken))'
    }
  }, /*#__PURE__*/React.createElement(CustomerBar, {
    customer: customer,
    onConsumidorFinal: onConsumidorFinal,
    onOpenPicker: onOpenPicker
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 'none',
      padding: '14px 16px 8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement(PosLabel, null, "Carrito"), !empty && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'hsl(var(--text-tertiary))',
      fontFamily: 'var(--font-mono)'
    }
  }, totalItems, " ", totalItems === 1 ? 'ítem' : 'ítems', " \xB7 ", lines.length, " ", lines.length === 1 ? 'línea' : 'líneas')), empty ? /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      display: 'grid',
      placeItems: 'center',
      padding: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      maxWidth: 300
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 64,
      borderRadius: 16,
      margin: '0 auto 16px',
      display: 'grid',
      placeItems: 'center',
      background: 'hsl(var(--surface-base))',
      border: '1px solid hsl(var(--border-subtle))',
      color: 'hsl(var(--text-tertiary))'
    },
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement(RIco, {
    name: "shopping-cart",
    size: 28,
    strokeWidth: 1.8
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 17px/22px var(--font-ui)',
      color: 'hsl(var(--text-primary))'
    }
  }, "Carrito vac\xEDo"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '6px 0 0',
      fontSize: 14,
      color: 'hsl(var(--text-secondary))',
      lineHeight: 1.5
    }
  }, "Busc\xE1 o escane\xE1 un producto a la izquierda para empezar la venta."))) : /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      overflowY: 'auto',
      padding: '4px 16px 16px',
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, lines.map(l => /*#__PURE__*/React.createElement(CartLine, {
    key: l.key,
    line: l,
    onOpenQty: () => onOpenQty(l),
    onStep: d => onStep(l, d),
    onRemove: () => onRemove(l),
    onSaveProduct: onSaveProduct
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 'none',
      padding: 16,
      borderTop: '1px solid hsl(var(--border-subtle))',
      background: 'hsl(var(--surface-raised))'
    }
  }, sinPrecioCount > 0 && /*#__PURE__*/React.createElement("div", {
    role: "alert",
    style: {
      marginBottom: 12,
      padding: '12px 14px',
      borderRadius: 10,
      background: 'hsl(var(--warning-bg))',
      border: '1px solid hsl(var(--warning-border))',
      color: 'hsl(var(--warning-fg))',
      fontSize: 13,
      lineHeight: 1.45,
      fontWeight: 500
    }
  }, sinPrecioCount === 1 ? catalogNoPrice === 1 ? '1 línea de catálogo sin precio bloquea el cobro. Quitala o cargá su precio en la lista aplicable para continuar.' : '1 ítem rápido con precio en cero bloquea el cobro. Asignale un precio o quitalo para continuar.' : genericNoPrice === 0 ? sinPrecioCount + ' líneas de catálogo sin precio bloquean el cobro. Quitalas o cargá su precio en la lista aplicable para continuar.' : catalogNoPrice === 0 ? sinPrecioCount + ' ítems rápidos con precio en cero bloquean el cobro. Asignales un precio o quitalos para continuar.' : sinPrecioCount + ' líneas bloquean el cobro. La de catálogo se resuelve con precio en la lista aplicable o quitándola; el ítem rápido, poniéndole precio.'), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(TotalRow, {
    label: "Subtotal",
    value: subtotal
  }), /*#__PURE__*/React.createElement(TotalRow, {
    label: "IVA",
    value: iva
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'hsl(var(--border-subtle))',
      margin: '2px 0'
    }
  }), /*#__PURE__*/React.createElement(TotalRow, {
    label: "Total",
    value: total,
    strong: true
  })), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: blocked ? undefined : onCobrar,
    disabled: blocked,
    "aria-disabled": blocked,
    style: {
      width: '100%',
      height: 'var(--pos-tap-lg)',
      borderRadius: 14,
      cursor: blocked ? 'default' : 'pointer',
      font: '600 18px var(--font-ui)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10,
      background: blocked ? 'hsl(var(--surface-sunken))' : 'hsl(var(--brand-primary))',
      color: blocked ? 'hsl(var(--text-disabled))' : 'hsl(var(--brand-foreground))',
      border: blocked ? '1px solid hsl(var(--border-subtle))' : 0
    }
  }, /*#__PURE__*/React.createElement(RIco, {
    name: "receipt",
    size: 22
  }), "Cobrar", !blocked && /*#__PURE__*/React.createElement("span", {
    style: {
      fontVariantNumeric: 'tabular-nums',
      opacity: .9
    }
  }, "\xB7 ", /*#__PURE__*/React.createElement(RMoneyInline, {
    value: total
  }))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '8px 0 0',
      textAlign: 'center',
      fontSize: 12,
      color: 'hsl(var(--text-tertiary))'
    }
  }, empty ? 'Agregá al menos un producto para cobrar.' : sinPrecioCount > 0 ? 'Resolvé las líneas sin precio para habilitar el cobro.' : 'El cobro (vuelto, medios de pago, cierre) es el siguiente corte.')));
}

/* Total en línea dentro del botón Cobrar (mismo formato es-EC). */
function RMoneyInline({
  value
}) {
  const [ent, dec] = Math.abs(value).toFixed(2).split('.');
  const miles = ent.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  return /*#__PURE__*/React.createElement("span", null, "$", miles, ",", dec);
}
Object.assign(window, {
  Cart,
  QtySheet,
  GenericItemSheet
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/commerce/pos-cart.jsx", error: String((e && e.message) || e) }); }

// ui_kits/commerce/pos-checkout.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Noctis · commerce POS-b — COBRO y CIERRE de venta. Continúa el "Cobrar" que en
   POS-a quedaba inerte: abre el cobro sobre el primitivo Sheet del núcleo y cierra la
   venta con secuencial. NO recalcula impuestos: consume subtotal/IVA/total que ya trae
   el carrito de POS-a (tarifas de IVA mixtas conviven, la fila IVA no asume una sola).

   SUPERFICIE = Sheet: un cajero cobrando necesita foco total y superficie grande, no un
   modal chico ni un confirm inline — bottom-sheet a pantalla casi completa en táctil,
   centrado grande en desktop. (Nota de sistema: el Sheet centrado del núcleo topa en
   520px; alcanza para una columna de cobro con foco, se señala como techo del primitivo.)

   DOS ENTRADAS (heredadas de la doble densidad, decisión cerrada):
   · DESKTOP (comfortable): el monto recibido se TECLEA con el teclado FÍSICO; Enter
     confirma (coherente con el F2 de cobrar de POS-a). El keypad en pantalla está ausente.
   · TÁCTIL (touch): NumericKeypad del núcleo protagónico (--kp-key), targets ≥48
     (--pos-tap-lg), sin hover. Mismo cobro, dos entradas, cero px hardcodeado de tamaño.

   DINERO (reglas de dominio, entrada autoritativa): los montos son autoridad del backend;
   el front NO es fuente de verdad de la venta. ÚNICA excepción: el VUELTO (recibido−total)
   es auxiliar de UI para el cajero — se calcula en cliente y se muestra, NO se persiste ni
   se manda como verdad. Formato Ecuador $1.234,56 (coma decimal) en todo monto. */
const CKNS = window.NoctisCommerceDesignSystem_4dfd35;
const {
  MoneyDisplay: CkMoney,
  NumericKeypad: CkKeypad,
  Sheet: CkSheet,
  Spinner: CkSpinner
} = CKNS;

/* Shim de VENTANA DE REBUILD: el size hero `display` (40px) de MoneyDisplay es la entrada
   nueva del núcleo; mientras el bundle recompila, esta regla lo cubre. Es IDÉNTICA a la del
   núcleo (mismo font-size/weight) — cuando el bundle la trae, queda redundante, no divergente.
   Mismo criterio que el fallback de íconos del POS. NO reimplementa el formato de moneda:
   el es-EC y los tabular-nums siguen viviendo en MoneyDisplay. */
if (typeof document !== 'undefined' && !document.getElementById('pos-money-hero-css')) {
  const s = document.createElement('style');
  s.id = 'pos-money-hero-css';
  s.textContent = '.noctis-money--display{font-size:40px;font-weight:700;line-height:1;}';
  document.head.appendChild(s);
}

/* Íconos del cobro. Reusa el del núcleo vía PosIcon; agrega los glifos de cobro que
   el bundle aún no expone (mismo peso/grilla Lucide, misma API). Ventana de rebuild,
   igual criterio que el fallback de POS-a. */
const CK_ICON_PATHS = {
  'banknote': '<rect width="20" height="12" x="2" y="6" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01M18 12h.01"/>',
  'credit-card': '<rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/>',
  'qr-code': '<rect width="5" height="5" x="3" y="3" rx="1"/><rect width="5" height="5" x="16" y="3" rx="1"/><rect width="5" height="5" x="3" y="16" rx="1"/><path d="M21 16h-3a2 2 0 0 0-2 2v3"/><path d="M21 21v.01"/><path d="M12 7v3a2 2 0 0 1-2 2H7"/><path d="M3 12h.01"/><path d="M12 3h.01"/><path d="M12 16v.01"/><path d="M16 12h1"/><path d="M21 12v.01"/><path d="M12 21v-1"/>',
  'clock': '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
  'check': '<path d="M20 6 9 17l-5-5"/>',
  'circle-check': '<path d="M21.801 10A10 10 0 1 1 17 3.335"/><path d="m9 11 3 3L22 4"/>',
  'printer': '<path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"/><rect width="12" height="8" x="6" y="14"/>',
  'rotate-cw': '<path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/>',
  'receipt': '<path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 17.5v-11"/>',
  'plus-circle': '<circle cx="12" cy="12" r="10"/><path d="M8 12h8"/><path d="M12 8v8"/>'
};
function CkIcon({
  name,
  size = 20,
  strokeWidth = 2,
  title,
  style,
  ...rest
}) {
  const core = window.PosIcon ? window.PosIcon({
    name,
    size,
    strokeWidth,
    title,
    style,
    ...rest
  }) : null;
  if (core) return core;
  const inner = CK_ICON_PATHS[name];
  if (!inner) return null;
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    role: title ? 'img' : undefined,
    "aria-hidden": title ? undefined : 'true',
    style: {
      display: 'block',
      flex: 'none',
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: (title ? '<title>' + title + '</title>' : '') + inner
    }
  }, rest));
}

/* Formato es-EC ($1.234,56). Fuente única de verdad de formato del cobro. */
function fmtEC(n) {
  const neg = n < 0;
  const [ent, dec] = Math.abs(n).toFixed(2).split('.');
  return (neg ? '−' : '') + '$' + ent.replace(/\B(?=(\d{3})+(?!\d))/g, '.') + ',' + dec;
}
const centsToNum = cents => parseInt(cents || '0', 10) / 100;

/* Totales del cobro — CONSUME lo que arma POS-a; catálogo y genérica suman igual, se
   excluyen las líneas a resolver. NO recalcula tarifas: agrega los IVA por línea (0/5/15
   conviven). Es el mismo stand-in de render que el carrito; la autoridad es el backend. */
function posTotals(lines) {
  const views = (lines || []).map(l => window.PosData.lineView(l));
  const priced = views.filter(v => !window.PosData.needsPrice(v));
  const subtotal = priced.reduce((s, v) => s + v.precio * v.qty, 0);
  const iva = priced.reduce((s, v) => s + v.precio * v.qty * (v.iva / 100), 0);
  const rates = Array.from(new Set(priced.map(v => v.iva))).sort((a, b) => a - b);
  return {
    subtotal,
    iva,
    total: subtotal + iva,
    rates,
    items: priced.reduce((s, v) => s + v.qty, 0),
    lines: priced.length
  };
}
window.posTotals = posTotals;

/* Aceleradores de monto: el EXACTO + denominaciones redondas HACIA ARRIBA (billetes EC
   por encima del total). Táctil: botones grandes; desktop: también clickeables. */
function accelerators(total) {
  const out = [{
    label: 'Exacto',
    cents: Math.round(total * 100),
    exact: true
  }];
  const bills = [5, 10, 20, 50, 100].filter(b => b > total + 0.001);
  bills.slice(0, 3).forEach(b => out.push({
    label: fmtEC(b),
    cents: b * 100
  }));
  if (bills.length === 0) {
    const up = Math.ceil(total / 10) * 10;
    if (up > total) out.push({
      label: fmtEC(up),
      cents: up * 100
    });
  }
  return out;
}

/* ── Selección de medio de pago (nace multi-método) ──────────────────────────────
   EFECTIVO activo (único funcional en este corte). Deuna/QR y Tarjeta = SLOTS "Pronto"
   con el mismo lenguaje que el resto de commerce: reloj, no clickeable, informativo puro
   (<div> sin onClick/foco/aria-disabled, estado en texto sr-only + title). Reservan el
   lugar para que v3 no rediseñe la pantalla; no se implementan. */
function MethodTiles({
  density
}) {
  const t = density === 'touch';
  const base = {
    flex: 1,
    minWidth: 0,
    borderRadius: 14,
    padding: t ? '14px 12px' : '12px 10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 8,
    textAlign: 'center'
  };
  return /*#__PURE__*/React.createElement("div", {
    role: "group",
    "aria-label": "Medio de pago",
    style: {
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-current": "true",
    style: {
      ...base,
      minHeight: 'var(--pos-tap-lg)',
      border: '2px solid hsl(var(--brand-primary))',
      background: 'hsl(var(--brand-primary) / .08)',
      color: 'hsl(var(--text-primary))'
    }
  }, /*#__PURE__*/React.createElement(CkIcon, {
    name: "banknote",
    size: t ? 26 : 22
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: t ? 15 : 14,
      fontWeight: 600
    }
  }, "Efectivo"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      width: 1,
      height: 1,
      padding: 0,
      margin: -1,
      overflow: 'hidden',
      clip: 'rect(0 0 0 0)',
      whiteSpace: 'nowrap',
      border: 0
    }
  }, "Medio de pago seleccionado")), [{
    icon: 'qr-code',
    label: 'Deuna / QR'
  }, {
    icon: 'credit-card',
    label: 'Tarjeta'
  }].map(m => /*#__PURE__*/React.createElement("div", {
    key: m.label,
    title: m.label + ' · Pronto (medio por construir)',
    style: {
      ...base,
      minHeight: 'var(--pos-tap-lg)',
      border: '1px solid hsl(var(--border-subtle))',
      background: 'hsl(var(--surface-sunken))',
      color: 'hsl(var(--text-tertiary))',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(CkIcon, {
    name: m.icon,
    size: t ? 26 : 22,
    style: {
      opacity: .7
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: t ? 15 : 14,
      fontWeight: 500
    }
  }, m.label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      fontSize: 10,
      fontWeight: 600,
      letterSpacing: '.06em',
      textTransform: 'uppercase',
      color: 'hsl(var(--text-tertiary))',
      border: '1px solid hsl(var(--border-strong))',
      borderRadius: 999,
      padding: '2px 8px'
    }
  }, /*#__PURE__*/React.createElement(CkIcon, {
    name: "clock",
    size: 12
  }), "Pronto"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      width: 1,
      height: 1,
      padding: 0,
      margin: -1,
      overflow: 'hidden',
      clip: 'rect(0 0 0 0)',
      whiteSpace: 'nowrap',
      border: 0
    }
  }, m.label, " \xB7 Pronto, medio de pago por construir"))));
}

/* Fila del resumen del cobro (Total / Recibido / Vuelto). `hero` = monto grande legible
   a distancia de brazo, vía MoneyDisplay size="display" (40px) del núcleo — el formato
   es-EC y tabular-nums viven en el componente, no se replican acá; el tono (falta/vuelto)
   se pasa como color, la cifra la formatea el núcleo. */
function AmountRow({
  label,
  amount,
  hero,
  tone,
  note
}) {
  const color = tone === 'danger' ? 'hsl(var(--danger-fg))' : tone === 'success' ? 'hsl(var(--success-fg))' : 'hsl(var(--text-primary))';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: hero ? 14 : 13,
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '.06em',
      color: 'hsl(var(--text-secondary))'
    }
  }, label, note && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      textTransform: 'none',
      letterSpacing: 0,
      fontWeight: 500,
      fontSize: 12,
      color: tone === 'danger' ? 'hsl(var(--danger-fg))' : 'hsl(var(--text-tertiary))'
    }
  }, note)), hero ? /*#__PURE__*/React.createElement(CkMoney, {
    value: amount,
    size: "display",
    style: {
      color
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 22px/1 var(--font-ui)',
      fontVariantNumeric: 'tabular-nums',
      color
    }
  }, fmtEC(amount)));
}

/* Botón de cobro grande (superficie táctil, --pos-tap-lg). Mismo lenguaje que el Cobrar
   de POS-a: acento del tenant, radios y peso coherentes. */
function BigConfirm({
  children,
  onClick,
  disabled,
  busy,
  tone = 'brand',
  icon
}) {
  const brand = tone === 'brand';
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: disabled || busy ? undefined : onClick,
    disabled: disabled || busy,
    "aria-busy": busy || undefined,
    style: {
      flex: 1,
      minHeight: 'var(--pos-tap-lg)',
      borderRadius: 14,
      cursor: disabled || busy ? 'default' : 'pointer',
      font: '600 18px var(--font-ui)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10,
      border: disabled ? '1px solid hsl(var(--border-subtle))' : 0,
      background: disabled ? 'hsl(var(--surface-sunken))' : 'hsl(var(--brand-primary))',
      color: disabled ? 'hsl(var(--text-disabled))' : 'hsl(var(--brand-foreground))',
      opacity: busy ? .9 : 1
    }
  }, busy ? /*#__PURE__*/React.createElement("span", {
    className: "noctis-btn__spin",
    "aria-hidden": "true"
  }) : icon && /*#__PURE__*/React.createElement(CkIcon, {
    name: icon,
    size: 22
  }), children);
}

/**
 * CheckoutSheet — superficie de cobro sobre el Sheet del núcleo. Presentacional: la
 * máquina de estados (idle · processing · error) vive en el orquestador; acá se dibuja.
 */
function CheckoutSheet({
  open,
  phase,
  totals,
  received,
  onReceived,
  onConfirm,
  onCancel,
  onRetry,
  errorId,
  density
}) {
  const t = density === 'touch';
  const total = totals ? totals.total : 0;
  const recv = centsToNum(received);
  const vuelto = recv - total;
  const canPay = received !== '' && recv + 1e-9 >= total;
  const processing = phase === 'processing';
  const errored = phase === 'error';

  /* Entrada por teclado FÍSICO en desktop (keypad ausente): dígitos editan el monto,
     Enter confirma (coherente con F2 de POS-a). En táctil no aplica: el NumericKeypad
     del núcleo lo cubre. */
  React.useEffect(() => {
    if (!open || t || processing) return;
    const onKey = e => {
      if (/^[0-9]$/.test(e.key)) {
        e.preventDefault();
        onReceived((String(received).replace(/^0$/, '') + e.key).slice(0, 9));
      } else if (e.key === 'Backspace') {
        e.preventDefault();
        onReceived(String(received).slice(0, -1));
      } else if (e.key.toLowerCase() === 'c') {
        e.preventDefault();
        onReceived('');
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (errored) onRetry();else if (canPay) onConfirm();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, t, processing, errored, received, canPay]);
  const accels = totals ? accelerators(total) : [];
  const entry = /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      flex: 1,
      minWidth: t ? 300 : 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: t ? '16px 18px' : '14px 16px',
      borderRadius: 14,
      background: 'hsl(var(--surface-sunken))',
      border: '1px solid hsl(var(--border-subtle))'
    }
  }, /*#__PURE__*/React.createElement(AmountRow, {
    label: "Total a cobrar",
    amount: total,
    hero: true,
    note: totals && totals.rates.length > 1 ? 'IVA de tarifas mixtas (' + totals.rates.map(r => r + '%').join(' · ') + ') — ya resuelto en el carrito' : totals ? 'IVA ' + (totals.rates[0] ?? 0) + '% — ya resuelto en el carrito' : null
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '.06em',
      color: 'hsl(var(--text-secondary))'
    }
  }, "Monto recibido"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'hsl(var(--text-tertiary))'
    }
  }, t ? 'Tocá el teclado numérico' : 'Escribí el monto con el teclado')), /*#__PURE__*/React.createElement("div", {
    "aria-live": "polite",
    style: {
      height: t ? 64 : 56,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 16px',
      borderRadius: 12,
      border: '1px solid ' + (received === '' ? 'hsl(var(--border-strong))' : 'hsl(var(--focus-ring))'),
      background: 'hsl(var(--surface-base))',
      font: '700 ' + (t ? 34 : 30) + 'px/1 var(--font-ui)',
      fontVariantNumeric: 'tabular-nums',
      color: received === '' ? 'hsl(var(--text-tertiary))' : 'hsl(var(--text-primary))'
    }
  }, fmtEC(recv)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, accels.map(a => /*#__PURE__*/React.createElement("button", {
    key: a.label,
    type: "button",
    onClick: () => onReceived(String(a.cents)),
    className: "pos-btn",
    style: {
      flex: '1 1 auto',
      minHeight: 'var(--pos-tap-sm)',
      padding: '6px 12px',
      borderRadius: 10,
      cursor: 'pointer',
      border: '1px solid ' + (a.exact ? 'hsl(var(--brand-primary))' : 'hsl(var(--border-strong))'),
      background: a.exact ? 'hsl(var(--brand-primary) / .08)' : 'hsl(var(--surface-base))',
      color: 'hsl(var(--text-primary))',
      font: '600 14px var(--font-ui)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 1
    }
  }, /*#__PURE__*/React.createElement("span", null, a.label), a.exact && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 500,
      color: 'hsl(var(--text-tertiary))',
      fontVariantNumeric: 'tabular-nums'
    }
  }, fmtEC(total)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'hsl(var(--border-subtle))'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: t ? '16px 18px' : '14px 16px',
      borderRadius: 14,
      background: vuelto < -1e-9 ? 'hsl(var(--warning-bg))' : recv > 0 ? 'hsl(var(--success-bg))' : 'hsl(var(--surface-sunken))',
      border: '1px solid ' + (vuelto < -1e-9 ? 'hsl(var(--warning-border))' : recv > 0 ? 'hsl(var(--success-border))' : 'hsl(var(--border-subtle))')
    }
  }, vuelto < -1e-9 ? /*#__PURE__*/React.createElement(AmountRow, {
    label: "Falta",
    amount: -vuelto,
    hero: true,
    tone: "danger",
    note: "Recibido menor al total \u2014 no se puede cerrar"
  }) : /*#__PURE__*/React.createElement(AmountRow, {
    label: "Vuelto",
    amount: received === '' ? 0 : vuelto,
    hero: true,
    tone: recv > 0 ? 'success' : undefined,
    note: "Auxiliar de caja \xB7 no se persiste"
  })));
  return /*#__PURE__*/React.createElement(CkSheet, {
    open: open,
    onClose: processing ? undefined : onCancel,
    placement: t ? 'bottom' : 'center',
    title: /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(CkIcon, {
      name: "banknote",
      size: 20
    }), "Cobro en efectivo"),
    footer: processing ? /*#__PURE__*/React.createElement(BigConfirm, {
      busy: true,
      icon: "receipt"
    }, "Registrando la venta\u2026") : errored ? /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10,
        width: '100%'
      }
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: onCancel,
      className: "pos-btn",
      style: {
        minHeight: 'var(--pos-tap-lg)',
        padding: '0 18px',
        borderRadius: 14,
        border: '1px solid hsl(var(--border-strong))',
        background: 'hsl(var(--surface-base))',
        color: 'hsl(var(--text-secondary))',
        cursor: 'pointer',
        font: '500 15px var(--font-ui)'
      }
    }, "Volver al carrito"), /*#__PURE__*/React.createElement(BigConfirm, {
      onClick: onRetry,
      icon: "rotate-cw"
    }, "Reintentar cobro")) : /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10,
        width: '100%'
      }
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: onCancel,
      className: "pos-btn",
      style: {
        minHeight: 'var(--pos-tap-lg)',
        padding: '0 18px',
        borderRadius: 14,
        border: '1px solid hsl(var(--border-strong))',
        background: 'hsl(var(--surface-base))',
        color: 'hsl(var(--text-secondary))',
        cursor: 'pointer',
        font: '500 15px var(--font-ui)'
      }
    }, "Cancelar"), /*#__PURE__*/React.createElement(BigConfirm, {
      onClick: onConfirm,
      disabled: !canPay,
      icon: "check"
    }, "Confirmar cobro \xB7 ", fmtEC(total)))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18,
      minWidth: t ? 0 : 300
    }
  }, /*#__PURE__*/React.createElement(MethodTiles, {
    density: density
  }), errored && /*#__PURE__*/React.createElement("div", {
    role: "alert",
    style: {
      padding: '14px 16px',
      borderRadius: 12,
      background: 'hsl(var(--danger-bg))',
      border: '1px solid hsl(var(--danger-border))',
      color: 'hsl(var(--danger-fg))'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 15,
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(CkIcon, {
    name: "x",
    size: 18
  }), "No se pudo registrar la venta"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '6px 0 8px',
      fontSize: 13,
      lineHeight: 1.5
    }
  }, "El carrito y el monto recibido siguen intactos. Reintent\xE1 el cobro; si persiste, compart\xED el c\xF3digo con soporte."), /*#__PURE__*/React.createElement("code", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13
    }
  }, "errorId: ", errorId)), processing ? /*#__PURE__*/React.createElement("div", {
    role: "status",
    "aria-live": "assertive",
    style: {
      minHeight: t ? 320 : 240,
      display: 'grid',
      placeItems: 'center',
      padding: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 18,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(CkSpinner, {
    size: "lg"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 18px/1.3 var(--font-ui)',
      color: 'hsl(var(--text-primary))'
    }
  }, "Registrando la venta\u2026"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '6px 0 0',
      fontSize: 14,
      color: 'hsl(var(--text-secondary))',
      maxWidth: 340
    }
  }, "Es una escritura: no cierres ni vuelvas a tocar. Bloqueamos un segundo cobro hasta que responda el servidor.")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontVariantNumeric: 'tabular-nums',
      font: '600 15px var(--font-ui)',
      color: 'hsl(var(--text-tertiary))'
    }
  }, fmtEC(total), " \xB7 recibido ", fmtEC(recv)))) : t ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24,
      alignItems: 'flex-start',
      flexWrap: 'wrap'
    }
  }, entry, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 'none',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(CkKeypad, {
    value: received,
    onChange: onReceived,
    maxLength: 7
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 12,
      color: 'hsl(var(--text-tertiary))',
      maxWidth: 240,
      textAlign: 'center'
    }
  }, "El teclado fija el monto en centavos; formato $1.234,56."))) : entry));
}
window.CheckoutSheet = CheckoutSheet;

/* Fila del resumen mínimo de la venta cerrada. */
function CloseRow({
  label,
  children,
  strong
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      gap: 14,
      padding: '10px 0',
      borderTop: '1px solid hsl(var(--border-subtle))'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'hsl(var(--text-secondary))',
      fontWeight: strong ? 600 : 500
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      font: (strong ? '700 20px' : '600 16px') + '/1 var(--font-ui)',
      fontVariantNumeric: 'tabular-nums',
      color: 'hsl(var(--text-primary))'
    }
  }, children));
}

/**
 * SaleClosedScreen — el ÉXITO es esta pantalla (no un toast). Toma la superficie de
 * venta: secuencial visible, resumen mínimo (total, medio, vuelto entregado) y DOS
 * salidas: "Nueva venta" (mayoritaria, vuelve al POS vacío) y "Ver / imprimir
 * comprobante" como SLOT — la impresión es fast-follow (depende de driver/servidor de
 * impresora), señalada, no fingida. Adapta a ambas densidades por tokens.
 */
function SaleClosedScreen({
  sale,
  onNewSale,
  onPrint,
  density
}) {
  const t = density === 'touch';
  if (!sale) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      minHeight: 0,
      display: 'grid',
      placeItems: 'center',
      padding: 24,
      overflowY: 'auto',
      background: 'hsl(var(--surface-sunken))'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      maxWidth: 460,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 76,
      height: 76,
      borderRadius: 22,
      margin: '0 auto 18px',
      display: 'grid',
      placeItems: 'center',
      background: 'hsl(var(--success-bg))',
      border: '1px solid hsl(var(--success-border))',
      color: 'hsl(var(--success-fg))'
    },
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement(CkIcon, {
    name: "circle-check",
    size: 38,
    strokeWidth: 1.9
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 24px/1.2 var(--font-ui)',
      letterSpacing: '-.01em',
      color: 'hsl(var(--text-primary))'
    }
  }, "Venta cerrada"), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '8px 0 0',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      padding: '6px 14px',
      borderRadius: 999,
      background: 'hsl(var(--surface-base))',
      border: '1px solid hsl(var(--border-strong))'
    }
  }, /*#__PURE__*/React.createElement(CkIcon, {
    name: "receipt",
    size: 16,
    style: {
      color: 'hsl(var(--text-tertiary))'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: '.04em',
      textTransform: 'uppercase',
      color: 'hsl(var(--text-tertiary))'
    }
  }, "Comprobante"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 15,
      fontWeight: 600,
      color: 'hsl(var(--text-primary))',
      letterSpacing: '.02em'
    }
  }, sale.secuencial)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      padding: '4px 20px 12px',
      borderRadius: 16,
      background: 'hsl(var(--surface-base))',
      border: '1px solid hsl(var(--border-subtle))',
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement(CloseRow, {
    label: "Total cobrado",
    strong: true
  }, fmtEC(sale.total)), /*#__PURE__*/React.createElement(CloseRow, {
    label: "Medio de pago"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(CkIcon, {
    name: "banknote",
    size: 16,
    style: {
      color: 'hsl(var(--text-tertiary))'
    }
  }), "Efectivo")), /*#__PURE__*/React.createElement(CloseRow, {
    label: "Recibido"
  }, fmtEC(sale.received)), /*#__PURE__*/React.createElement(CloseRow, {
    label: "Vuelto entregado"
  }, fmtEC(sale.change)), /*#__PURE__*/React.createElement(CloseRow, {
    label: "Cliente"
  }, sale.customer)), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '10px 2px 0',
      fontSize: 12,
      color: 'hsl(var(--text-tertiary))',
      lineHeight: 1.5
    }
  }, "El vuelto es referencia de caja; el comprobante fiscal lo emite el backend."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onNewSale,
    style: {
      minHeight: 'var(--pos-tap-lg)',
      borderRadius: 14,
      border: 0,
      cursor: 'pointer',
      background: 'hsl(var(--brand-primary))',
      color: 'hsl(var(--brand-foreground))',
      font: '600 18px var(--font-ui)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(CkIcon, {
    name: "plus-circle",
    size: 22
  }), "Nueva venta"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onPrint,
    className: "pos-btn",
    style: {
      minHeight: 'var(--pos-tap-sm)',
      borderRadius: 12,
      border: '1px solid hsl(var(--border-strong))',
      cursor: 'pointer',
      background: 'hsl(var(--surface-base))',
      color: 'hsl(var(--text-secondary))',
      font: '500 14px var(--font-ui)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(CkIcon, {
    name: "printer",
    size: 18
  }), "Ver / imprimir comprobante", /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      fontSize: 10,
      fontWeight: 600,
      letterSpacing: '.06em',
      textTransform: 'uppercase',
      color: 'hsl(var(--text-tertiary))',
      border: '1px solid hsl(var(--border-strong))',
      borderRadius: 999,
      padding: '2px 7px'
    }
  }, /*#__PURE__*/React.createElement(CkIcon, {
    name: "clock",
    size: 11
  }), "Pronto")))));
}
window.SaleClosedScreen = SaleClosedScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/commerce/pos-checkout.jsx", error: String((e && e.message) || e) }); }

// ui_kits/commerce/pos-customer.jsx
try { (() => {
/* Noctis · commerce POS-a — CLIENTE. Consumidor Final de UN TOQUE (caso mayoritario
   en una PYME ecuatoriana: cédula 9999999999999, convención fiscal) como camino
   obvio y rápido; el picker de cliente registrado es el secundario. */
const CUNS = window.NoctisCommerceDesignSystem_4dfd35;
const {
  Sheet: CSheet
} = CUNS;
const CIco = window.PosIcon;

/* Barra de cliente arriba del carrito. Muestra el cliente activo; el par
   {Consumidor Final de un toque · Elegir cliente} deja claro cuál es el camino
   rápido. La selección activa usa el acento del tenant (uno de los 4 puntos). */
function CustomerBar({
  customer,
  onConsumidorFinal,
  onOpenPicker
}) {
  const {
    PosLabel
  } = window;
  const esFinal = customer.final;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 'none',
      padding: '14px 16px',
      borderBottom: '1px solid hsl(var(--border-subtle))',
      background: 'hsl(var(--surface-raised))'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement(PosLabel, null, "Cliente"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'hsl(var(--text-tertiary))'
    }
  }, customer.docTipo, " ", customer.doc)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onConsumidorFinal,
    "aria-pressed": esFinal,
    style: {
      flex: 1,
      minHeight: 'var(--pos-field-sm)',
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '0 14px',
      borderRadius: 12,
      cursor: 'pointer',
      textAlign: 'left',
      fontFamily: 'var(--font-ui)',
      border: esFinal ? '1px solid hsl(var(--brand-primary))' : '1px solid hsl(var(--border-strong))',
      background: esFinal ? 'hsl(var(--brand-primary))' : 'hsl(var(--surface-base))',
      color: esFinal ? 'hsl(var(--brand-foreground))' : 'hsl(var(--text-primary))',
      outline: esFinal ? '3px solid hsl(var(--brand-primary) / .25)' : 'none'
    }
  }, /*#__PURE__*/React.createElement(CIco, {
    name: "user-round",
    size: 22,
    style: {
      flex: 'none'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 15,
      fontWeight: 600,
      lineHeight: 1.2
    }
  }, "Consumidor Final"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 12,
      opacity: esFinal ? .85 : .7
    }
  }, "Venta r\xE1pida sin datos"))), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onOpenPicker,
    className: "pos-btn",
    style: {
      flex: 'none',
      minWidth: 132,
      minHeight: 'var(--pos-field-sm)',
      padding: '0 14px',
      borderRadius: 12,
      cursor: 'pointer',
      border: '1px solid hsl(var(--border-strong))',
      background: 'hsl(var(--surface-base))',
      color: 'hsl(var(--text-secondary))',
      fontFamily: 'var(--font-ui)',
      fontSize: 14,
      fontWeight: 500,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(CIco, {
    name: "users",
    size: 20
  }), "Elegir cliente")), !esFinal && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '10px 12px',
      borderRadius: 10,
      background: 'hsl(var(--surface-sunken))',
      border: '1px solid hsl(var(--border-subtle))'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      flex: 'none',
      borderRadius: 9,
      display: 'grid',
      placeItems: 'center',
      background: 'hsl(var(--brand-primary))',
      color: 'hsl(var(--brand-foreground))'
    },
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement(CIco, {
    name: "user-round",
    size: 18
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0,
      lineHeight: 1.25
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: 'hsl(var(--text-primary))',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, customer.nombre), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'hsl(var(--text-tertiary))',
      fontFamily: 'var(--font-mono)'
    }
  }, customer.docTipo, " ", customer.doc))));
}

/* Picker de cliente registrado — Sheet bottom (táctil). Búsqueda + filas grandes.
   Incluye acceso a Consumidor Final para volver al camino rápido desde el picker. */
function ClientPicker({
  open,
  onClose,
  onPick,
  onConsumidorFinal,
  activeId
}) {
  const [q, setQ] = React.useState('');
  React.useEffect(() => {
    if (!open) setQ('');
  }, [open]);
  const ql = q.trim().toLowerCase();
  const list = window.PosData.CLIENTES.filter(c => !ql || c.nombre.toLowerCase().includes(ql) || c.doc.includes(ql));
  return /*#__PURE__*/React.createElement(CSheet, {
    open: open,
    onClose: onClose,
    placement: "bottom",
    title: "Elegir cliente"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      minWidth: 320
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onConsumidorFinal,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      minHeight: 'var(--pos-tap-lg)',
      padding: '0 16px',
      borderRadius: 12,
      cursor: 'pointer',
      textAlign: 'left',
      border: '1px solid hsl(var(--brand-primary))',
      background: 'hsl(var(--brand-primary))',
      color: 'hsl(var(--brand-foreground))',
      fontFamily: 'var(--font-ui)'
    }
  }, /*#__PURE__*/React.createElement(CIco, {
    name: "user-round",
    size: 24,
    style: {
      flex: 'none'
    }
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 16,
      fontWeight: 600
    }
  }, "Consumidor Final"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 13,
      opacity: .85
    }
  }, "C\xE9dula 9999999999999 \xB7 venta r\xE1pida"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 14,
      color: 'hsl(var(--text-tertiary))'
    },
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement(CIco, {
    name: "search",
    size: 20
  })), /*#__PURE__*/React.createElement("input", {
    value: q,
    onChange: e => setQ(e.target.value),
    "aria-label": "Buscar cliente registrado",
    placeholder: "Buscar por nombre o documento\u2026",
    style: {
      width: '100%',
      height: 'var(--pos-field-sm)',
      padding: '0 14px 0 46px',
      borderRadius: 12,
      border: '1px solid hsl(var(--border-strong))',
      background: 'hsl(var(--surface-base))',
      color: 'hsl(var(--text-primary))',
      font: '400 16px var(--font-ui)',
      outline: 'none'
    },
    onFocus: e => {
      e.target.style.borderColor = 'hsl(var(--focus-ring))';
      e.target.style.boxShadow = '0 0 0 3px hsl(var(--focus-ring) / .28)';
    },
    onBlur: e => {
      e.target.style.borderColor = 'hsl(var(--border-strong))';
      e.target.style.boxShadow = 'none';
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      maxHeight: 300,
      overflowY: 'auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, list.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 8px',
      textAlign: 'center',
      color: 'hsl(var(--text-tertiary))',
      fontSize: 14
    }
  }, "Sin coincidencias. La alta de cliente vive en el m\xF3dulo Clientes (fuera del POS)."), list.map(c => {
    const active = c.id === activeId;
    return /*#__PURE__*/React.createElement("button", {
      key: c.id,
      type: "button",
      onClick: () => onPick(c),
      className: "pos-btn",
      "aria-pressed": active,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        minHeight: 'var(--pos-tap-lg)',
        padding: '0 14px',
        borderRadius: 12,
        cursor: 'pointer',
        textAlign: 'left',
        fontFamily: 'var(--font-ui)',
        border: '1px solid ' + (active ? 'hsl(var(--brand-primary))' : 'hsl(var(--border-subtle))'),
        background: active ? 'hsl(var(--brand-primary) / .1)' : 'hsl(var(--surface-base))',
        color: 'hsl(var(--text-primary))'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 20,
        flex: 'none',
        color: active ? 'hsl(var(--brand-primary))' : 'transparent'
      },
      "aria-hidden": "true"
    }, "\u2713"), /*#__PURE__*/React.createElement("span", {
      style: {
        minWidth: 0,
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        fontSize: 15,
        fontWeight: 600,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }, c.nombre), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        fontSize: 12,
        color: 'hsl(var(--text-tertiary))',
        fontFamily: 'var(--font-mono)'
      }
    }, c.docTipo, " ", c.doc)));
  }))));
}
Object.assign(window, {
  CustomerBar,
  ClientPicker
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/commerce/pos-customer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/commerce/pos-data.js
try { (() => {
/* Noctis · commerce POS-a — datos mock del AMBIENTE DE VENTA. Solo lo que POS-a
   necesita: contexto (tenant/empresa/sucursal/cajero), catálogo buscable, carrito
   inicial y clientes. display_name en español SIEMPRE; el UUID/SKU nunca es el
   identificador visual principal. Los montos son numbers que "vienen del backend";
   el cliente los RENDEREA (MoneyDisplay), no es la fuente de verdad del precio. */
(function () {
  /* Tenants — el acento viaja como PAR {primary, foreground}, igual que en el resto
     de commerce. En el POS el catálogo es el mismo (papelería): el tenant solo mueve
     el acento quirúrgico; no hay catálogos por rubro en este corte. */
  const TENANTS = {
    aguilar: {
      id: 'aguilar',
      name: 'Librería Aguilar',
      initials: 'LA',
      empresa: 'Librería Aguilar S.A.',
      sucursal: 'Matriz — Av. Amazonas',
      cajero: {
        nombre: 'Agustina Cando',
        rol: 'Cajera'
      },
      accent: '262 60% 42%',
      fg: '0 0% 100%',
      accentName: 'Violeta corporativo',
      ivaDefault: 15
    },
    sanrafael: {
      id: 'sanrafael',
      name: 'Farmacia San Rafael',
      initials: 'FS',
      empresa: 'Farmacia San Rafael',
      sucursal: 'Local Centro — Guayaquil',
      cajero: {
        nombre: 'Marcos Peñafiel',
        rol: 'Cajero'
      },
      accent: '184 72% 26%',
      fg: '0 0% 100%',
      accentName: 'Teal salud',
      ivaDefault: 15
    },
    rincon: {
      id: 'rincon',
      name: 'El Rincón Ferretero',
      initials: 'RF',
      empresa: 'El Rincón Ferretero Cía. Ltda.',
      sucursal: 'Sucursal Sur — Quito',
      cajero: {
        nombre: 'Luis Tenesaca',
        rol: 'Cajero'
      },
      accent: '54 85% 46%',
      fg: '240 6% 12%',
      accentName: 'Oro (foreground near-black)',
      ivaDefault: 15
    }
  };

  /* Tarifas de IVA vigentes en Ecuador para el selector de la línea genérica. La
     línea NACE con el default del perfil fiscal del tenant; es corregible por línea
     (farmacia: medicamento 0% / perfume 15%). */
  const IVA_TARIFFS = [0, 5, 15];

  /* Catálogo buscable (variantes vendibles). `precio` es number|null:
     null = la variante NO tiene precio en la lista de precios aplicable → estado
     SIN PRECIO, que BLOQUEA la línea (null NUNCA es $0). `iva` en % para el render
     de totales (que en producción también vendría resuelto del backend). */
  const CATALOG = [{
    id: 'v1',
    producto: 'Cuaderno universitario 100 hojas',
    variante: 'Cuadros · tapa azul',
    sku: 'CUA-100-CUAD',
    barcode: '7861234567890',
    precio: 2.15,
    iva: 15
  }, {
    id: 'v2',
    producto: 'Cuaderno universitario 100 hojas',
    variante: 'Líneas · tapa roja',
    sku: 'CUA-100-LIN',
    barcode: '7861234500017',
    precio: 2.15,
    iva: 15
  }, {
    id: 'v3',
    producto: 'Esferográfico punta media',
    variante: 'Azul',
    sku: 'ESF-PM-AZ',
    barcode: '7862220001114',
    precio: 0.45,
    iva: 15
  }, {
    id: 'v4',
    producto: 'Esferográfico punta media',
    variante: 'Negro',
    sku: 'ESF-PM-NE',
    barcode: '7862220001121',
    precio: 0.45,
    iva: 15
  }, {
    id: 'v5',
    producto: 'Resma papel bond A4 75 g',
    variante: '500 hojas · blancura 96%',
    sku: 'RES-A4-75',
    barcode: '7863330045008',
    precio: 4.80,
    iva: 15
  }, {
    id: 'v6',
    producto: 'Marcador permanente',
    variante: 'Negro',
    sku: 'MPE-NE',
    barcode: '7864440012306',
    precio: null,
    iva: 15
  }, {
    id: 'v7',
    producto: 'Set 12 lápices de colores',
    variante: 'Estuche cartón',
    sku: 'LAP-12-CART',
    barcode: '7865550098702',
    precio: 3.90,
    iva: 15
  }, {
    id: 'v8',
    producto: 'Corrector líquido 20 ml',
    variante: 'Punta metálica',
    sku: 'COR-20',
    barcode: '7866660033401',
    precio: 1.25,
    iva: 15
  }, {
    id: 'v9',
    producto: 'Carpeta archivador palanca',
    variante: 'Oficio · lomo 7 cm',
    sku: 'CAR-PAL-OF',
    barcode: '7867770021109',
    precio: 2.60,
    iva: 15
  }, {
    id: 'v10',
    producto: 'Grapadora metálica',
    variante: 'Media · 20 hojas',
    sku: 'GRA-MET-M',
    barcode: '7868880076503',
    precio: 5.35,
    iva: 15
  }];

  /* Carrito inicial de demo. Incluye a propósito una línea SIN PRECIO (v6) para
     mostrar el estado bloqueante. `qty` es lo único editable en POS-a (por keypad). */
  const INITIAL_CART = [{
    key: 'l1',
    ref: 'v1',
    qty: 2
  }, {
    key: 'l2',
    ref: 'v3',
    qty: 3
  }, {
    key: 'l3',
    ref: 'v6',
    qty: 1
  } // SIN PRECIO — bloquea el avance a cobro
  ];

  /* Consumidor Final: convención fiscal EC (cédula 9999999999999). Es el caso
     mayoritario en una PYME — su botón es el camino de UN TOQUE. */
  const CONSUMIDOR_FINAL = {
    id: 'cf',
    nombre: 'Consumidor Final',
    doc: '9999999999999',
    docTipo: 'Cédula',
    final: true
  };

  /* Clientes registrados (camino secundario, por picker). */
  const CLIENTES = [{
    id: 'c1',
    nombre: 'María Fernanda Loor',
    doc: '1312445566',
    docTipo: 'Cédula'
  }, {
    id: 'c2',
    nombre: 'Comercial El Sol Cía. Ltda.',
    doc: '1391234567001',
    docTipo: 'RUC'
  }, {
    id: 'c3',
    nombre: 'Juan Carlos Vera',
    doc: '0912233445',
    docTipo: 'Cédula'
  }, {
    id: 'c4',
    nombre: 'Distribuidora Andina S.A.',
    doc: '1790055443001',
    docTipo: 'RUC'
  }, {
    id: 'c5',
    nombre: 'Rosa Elena Chávez',
    doc: '1719988776',
    docTipo: 'Cédula'
  }];
  const byId = id => CATALOG.find(v => v.id === id);

  /* Vista unificada de una línea del carrito (catálogo o genérica). El carrito y los
     totales consumen SIEMPRE esto, para que ambos tipos convivan sin ramas duplicadas.
     · catálogo: identidad de variante (desc + sub + sku/barcode), precio/iva de lista.
     · genérica: descripción libre, sin SKU ni stock, precio/iva definidos al crearla. */
  const lineView = line => {
    if (line.generic) return {
      generic: true,
      desc: line.desc,
      sub: null,
      sku: null,
      barcode: null,
      precio: line.precio,
      iva: line.iva,
      qty: line.qty
    };
    const v = byId(line.ref);
    return {
      generic: false,
      desc: v.variante,
      sub: v.producto,
      sku: v.sku,
      barcode: v.barcode,
      precio: v.precio,
      iva: v.iva,
      qty: line.qty
    };
  };

  /* Regla unificada de precio a resolver antes de cobrar:
     · catálogo: precio null (SIN PRECIO en la lista) — null NUNCA es $0.
     · genérica: precio en cero — el cajero debe asignarle un precio.
     Ambos bloquean el cobro; se distinguen sólo en el copy. */
  const needsPrice = view => view.precio == null || view.precio === 0;
  window.PosData = {
    TENANTS,
    CATALOG,
    INITIAL_CART,
    CONSUMIDOR_FINAL,
    CLIENTES,
    IVA_TARIFFS,
    byId,
    lineView,
    needsPrice
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/commerce/pos-data.js", error: String((e && e.message) || e) }); }

// ui_kits/commerce/pos-kit.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Noctis · commerce POS-a — kit compartido del ambiente de venta. Helpers de
   densidad táctil + los estados del kit adaptados al POS pantalla completa:
   vacío ("buscá o escaneá") · cargando · sin resultados · error (errorId +
   reintento) · 403. NO reimplementa primitivos: usa Button/Spinner/Icon/Alert
   del núcleo. Todo hit-target ≥48 y feedback al presionar, cero hover-only. */
const PNS = window.NoctisCommerceDesignSystem_4dfd35;
const {
  Button: KBtn,
  Spinner: KSpinner,
  Icon: CoreIcon,
  Alert: KAlert
} = PNS;

/* Fallback local de íconos POS mientras el bundle recompila con las entradas nuevas
   de Icon.jsx (la ampliación del set es la decisión de sistema; esto solo cubre la
   ventana de rebuild). Mismos paths Lucide, mismo peso/grilla que el núcleo. */
const POS_ICON_PATHS = {
  'search': '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  'scan-barcode': '<path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><path d="M8 7v10"/><path d="M12 7v10"/><path d="M16 7v10"/>',
  'trash-2': '<path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/>',
  'x': '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  'plus': '<path d="M5 12h14"/><path d="M12 5v14"/>',
  'minus': '<path d="M5 12h14"/>',
  'user-round': '<circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/>',
  'log-out': '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/>'
};

/* Icon del POS: usa el del núcleo; si devuelve null (glifo aún no en el bundle),
   cae al path local con la misma API (name, size, strokeWidth, title, style). */
function KIcon({
  name,
  size = 20,
  strokeWidth = 2,
  title,
  style,
  ...rest
}) {
  const core = CoreIcon ? CoreIcon({
    name,
    size,
    strokeWidth,
    title,
    style,
    ...rest
  }) : null;
  if (core) return core;
  const inner = POS_ICON_PATHS[name];
  if (!inner) return null;
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    role: title ? 'img' : undefined,
    "aria-hidden": title ? undefined : 'true',
    "aria-label": title,
    style: {
      display: 'block',
      flex: 'none',
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: (title ? '<title>' + title + '</title>' : '') + inner
    }
  }, rest));
}
window.PosIcon = KIcon;

/* ── EJE DENSIDAD (consumo del núcleo, no redefinición) ──────────────────────
   Dos modos de INTERACCIÓN, autodetectados por PUNTERO (no por ancho):
   · comfortable = desktop/mouse (PRIMARIO): pointer fine, targets normales, teclado
     físico protagónico, hover permitido.
   · touch = táctil (SECUNDARIO): pointer coarse, targets ≥48, keypad protagónico,
     sin hover. Es el POS-a original, intacto.
   El contexto viaja la densidad; los componentes eligen tamaños con `t` (=touch). */
const PosDensityCtx = React.createContext('touch');
function usePosDense() {
  return React.useContext(PosDensityCtx);
} // 'comfortable' | 'touch'
function usePosTouch() {
  return React.useContext(PosDensityCtx) === 'touch';
}
/* Autodetección: pointer fine → desktop; coarse → táctil. Sin breakpoints de ancho
   (un monitor táctil de 24" es grande y aun así es coarse). */
function detectDensity() {
  try {
    if (window.matchMedia && window.matchMedia('(pointer: coarse)').matches && !window.matchMedia('(pointer: fine)').matches) return 'touch';
  } catch (e) {}
  return 'comfortable';
}

/* Hover legítimo SOLO en desktop (pointer fine). En táctil está prohibido. Se
   scope-a por [data-density="comfortable"] para que jamás aplique en el modo coarse. */
if (typeof document !== 'undefined' && !document.getElementById('pos-hover-css')) {
  const s = document.createElement('style');
  s.id = 'pos-hover-css';
  s.textContent = '[data-density="comfortable"] .pos-btn:hover{background:hsl(var(--surface-sunken));border-color:hsl(var(--border-strong))}[data-density="comfortable"] .pos-result:hover{border-color:hsl(var(--border-strong));background:hsl(var(--surface-sunken))}';
  document.head.appendChild(s);
}

/* Micro-etiqueta de zona (VENTA · CARRITO) — mayúsculas + tracking, neutra. */
function PosLabel({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      textTransform: 'uppercase',
      letterSpacing: '.1em',
      color: 'hsl(var(--text-tertiary))',
      fontWeight: 600,
      ...style
    }
  }, children);
}

/* Estado del panel de resultados: contenedor centrado, superficie grande, sin
   depender de hover. `icon` es un ícono Lucide del núcleo. */
function PosStatePanel({
  icon,
  title,
  description,
  action,
  tone = 'neutral'
}) {
  const ring = tone === 'danger' ? 'hsl(var(--danger-border))' : 'hsl(var(--border-strong))';
  const iconColor = tone === 'danger' ? 'hsl(var(--danger-fg))' : 'hsl(var(--text-tertiary))';
  const iconBg = tone === 'danger' ? 'hsl(var(--danger-bg))' : 'hsl(var(--surface-sunken))';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      display: 'grid',
      placeItems: 'center',
      padding: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      maxWidth: 440
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 72,
      height: 72,
      borderRadius: 18,
      margin: '0 auto 20px',
      display: 'grid',
      placeItems: 'center',
      background: iconBg,
      border: '1px solid ' + ring,
      color: iconColor
    },
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement(KIcon, {
    name: icon,
    size: 30,
    strokeWidth: 1.8
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 20px/26px var(--font-ui)',
      letterSpacing: '-.01em',
      color: 'hsl(var(--text-primary))'
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '8px 0 0',
      color: 'hsl(var(--text-secondary))',
      fontSize: 15,
      lineHeight: 1.5
    }
  }, description), action && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22,
      display: 'flex',
      justifyContent: 'center'
    }
  }, action)));
}

/* Cargando — spinner grande centrado (no skeleton: el resultado es una lista corta
   que cambia por completo al terminar la búsqueda). */
function PosLoading({
  label = 'Buscando…'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      display: 'grid',
      placeItems: 'center',
      padding: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(KSpinner, {
    size: "lg"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      color: 'hsl(var(--text-secondary))'
    }
  }, label)));
}

/* Error con errorId visible + reintento en superficie grande (nunca por toast). */
function PosError({
  errorId = 'ERR-POS-6D21',
  onRetry,
  context = 'la búsqueda'
}) {
  return /*#__PURE__*/React.createElement(PosStatePanel, {
    icon: "x",
    tone: "danger",
    title: 'No se pudo cargar ' + context,
    description: "Intente nuevamente. Si el problema persiste, comparta el c\xF3digo con soporte.",
    action: /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(KBtn, {
      variant: "secondary",
      onClick: onRetry
    }, "Reintentar"), /*#__PURE__*/React.createElement("code", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 13,
        color: 'hsl(var(--text-tertiary))'
      }
    }, "errorId: ", errorId))
  });
}

/* 403 — el perfil no puede vender en el POS (p.ej. contador). Fail-closed. */
function PosForbidden({
  onExit
}) {
  return /*#__PURE__*/React.createElement(PosStatePanel, {
    icon: "shield-check",
    title: "Su perfil no tiene acceso al POS",
    description: "Vender en el punto de venta requiere el permiso de POS. Si cree que es un error, solic\xEDtelo a un administrador de su empresa.",
    action: /*#__PURE__*/React.createElement(KBtn, {
      variant: "secondary",
      onClick: onExit
    }, "Salir del POS")
  });
}
Object.assign(window, {
  PosLabel,
  PosStatePanel,
  PosLoading,
  PosError,
  PosForbidden,
  PosDensityCtx,
  usePosDense,
  usePosTouch,
  detectDensity
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/commerce/pos-kit.jsx", error: String((e && e.message) || e) }); }

// ui_kits/commerce/pos-search.jsx
try { (() => {
/* Noctis · commerce POS-a — BÚSQUEDA DE PRODUCTO + ESCANEO. Campo con debounce que
   también acepta lectura de código de barras: el escáner ESCRIBE y dispara Enter, y
   si el texto coincide exacto con un código de barras del catálogo, la línea se
   agrega directo. Resultados en lista táctil grande, cada fila tocable. Estados:
   vacío ("buscá o escaneá") · cargando · sin resultados · error · 403.

   DEUDA DE SISTEMA SEÑALADA (no simulada resuelta): el buscador SERVER-SIDE de
   variantes es prerequisito y hoy puede no existir. Igual que en Productos, acá se
   filtra en cliente y la dependencia se declara en un banner — no se finge resuelta. */
const SNS = window.NoctisCommerceDesignSystem_4dfd35;
const {
  Button: SBtn,
  MoneyDisplay: SMoney,
  Alert: SAlert
} = SNS;
const SIco = window.PosIcon;
function ResultRow({
  item,
  onAdd
}) {
  const sinPrecio = item.precio === null || item.precio === undefined;
  return /*#__PURE__*/React.createElement("div", {
    className: "pos-result",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: 'var(--pos-row-py) var(--pos-row-px)',
      borderRadius: 12,
      border: '1px solid ' + (sinPrecio ? 'hsl(var(--warning-border))' : 'hsl(var(--border-subtle))'),
      background: 'hsl(var(--surface-raised))'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 600,
      color: 'hsl(var(--text-primary))',
      letterSpacing: '-.01em',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, item.variante), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'hsl(var(--text-secondary))',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, item.producto), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 3,
      display: 'flex',
      gap: 12,
      alignItems: 'center',
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'hsl(var(--text-tertiary))'
    }
  }, /*#__PURE__*/React.createElement("span", null, item.sku), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, "\xB7"), /*#__PURE__*/React.createElement("span", null, item.barcode))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 'none',
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement(SMoney, {
    value: item.precio,
    size: "md"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 'none'
    }
  }, sinPrecio ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      height: 'var(--pos-action)',
      padding: '0 14px',
      borderRadius: 10,
      fontSize: 13,
      fontWeight: 500,
      color: 'hsl(var(--warning-fg))',
      background: 'hsl(var(--warning-bg))',
      border: '1px dashed hsl(var(--warning-border))'
    }
  }, "No vendible") : /*#__PURE__*/React.createElement(SBtn, {
    variant: "primary",
    onClick: () => onAdd(item)
  }, /*#__PURE__*/React.createElement(SIco, {
    name: "plus",
    size: 18,
    style: {
      marginRight: 6,
      display: 'inline-block',
      verticalAlign: '-3px'
    }
  }), "Agregar")));
}
function ProductSearch({
  searchState,
  onAdd,
  onAddGeneric,
  onRetry,
  onExit,
  flash
}) {
  const {
    PosLabel,
    PosStatePanel,
    PosLoading,
    PosError,
    PosForbidden
  } = window;
  const t = window.usePosTouch();
  const [query, setQuery] = React.useState('');
  const inputRef = React.useRef(null);

  // 'empty' desde la barra de prototipo = estado de reposo (sin consulta).
  React.useEffect(() => {
    if (searchState === 'empty') setQuery('');
  }, [searchState]);
  // Desktop: foco automático en búsqueda al cargar (el cajero teclea de una). En táctil no.
  React.useEffect(() => {
    if (!t && inputRef.current) inputRef.current.focus();
  }, [t]);
  const catalog = window.PosData.CATALOG;
  const ql = query.trim().toLowerCase();
  const matches = ql ? catalog.filter(v => v.producto.toLowerCase().includes(ql) || v.variante.toLowerCase().includes(ql) || v.sku.toLowerCase().includes(ql) || v.barcode.includes(ql)) : [];

  // Escaneo: escribe y dispara Enter → coincidencia exacta de código agrega directo.
  // Además (atajo de teclado, sobre todo en desktop): Enter sin match de código agrega
  // el PRIMER resultado visible — flujo rápido con teclado físico.
  const onKeyDown = e => {
    if (e.key !== 'Enter') return;
    const code = query.trim();
    const hit = catalog.find(v => v.barcode === code);
    if (hit) {
      onAdd(hit);
      setQuery('');
      return;
    }
    if (matches.length) {
      onAdd(matches[0]);
      setQuery('');
    }
  };
  let body;
  if (searchState === 'forbidden') body = /*#__PURE__*/React.createElement(PosForbidden, {
    onExit: onExit
  });else if (searchState === 'loading') body = /*#__PURE__*/React.createElement(PosLoading, null);else if (searchState === 'error') body = /*#__PURE__*/React.createElement(PosError, {
    onRetry: onRetry
  });else if (!ql) body = /*#__PURE__*/React.createElement(PosStatePanel, {
    icon: "scan-barcode",
    title: "Busc\xE1 o escane\xE1",
    description: "Escrib\xED el nombre, el SKU o el c\xF3digo, o pas\xE1 el producto por el lector para agregarlo al carrito."
  });else if (matches.length === 0) body = /*#__PURE__*/React.createElement(PosStatePanel, {
    icon: "search",
    title: "Sin resultados en el cat\xE1logo",
    description: 'Ningún producto coincide con «' + query.trim() + '». Podés venderlo igual como ítem rápido, sin cargarlo al catálogo.',
    action: /*#__PURE__*/React.createElement(SBtn, {
      variant: "primary",
      onClick: () => onAddGeneric(query.trim())
    }, /*#__PURE__*/React.createElement(SIco, {
      name: "plus",
      size: 18,
      style: {
        marginRight: 6,
        display: 'inline-block',
        verticalAlign: '-3px'
      }
    }), "Agregar \xAB", query.trim(), "\xBB como \xEDtem r\xE1pido")
  });else body = /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      overflowY: 'auto',
      padding: '4px 20px 20px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, matches.map(v => /*#__PURE__*/React.createElement(ResultRow, {
    key: v.id,
    item: v,
    onAdd: onAdd
  }))));
  const showResults = !['forbidden', 'loading', 'error'].includes(searchState);
  return /*#__PURE__*/React.createElement("section", {
    "aria-label": "B\xFAsqueda de producto",
    style: {
      flex: 1,
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      minHeight: 0,
      background: 'hsl(var(--surface-base))'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 'none',
      padding: '18px 20px 12px'
    }
  }, /*#__PURE__*/React.createElement(PosLabel, {
    style: {
      marginBottom: 10
    }
  }, "Venta \xB7 agregar productos"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 16,
      color: 'hsl(var(--text-tertiary))',
      pointerEvents: 'none'
    },
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement(SIco, {
    name: "search",
    size: 22
  })), /*#__PURE__*/React.createElement("input", {
    ref: inputRef,
    value: query,
    onChange: e => setQuery(e.target.value),
    onKeyDown: onKeyDown,
    "aria-label": "Buscar o escanear producto",
    placeholder: "Busc\xE1 por nombre o SKU, o escane\xE1 el c\xF3digo de barras\u2026",
    style: {
      width: '100%',
      height: 'var(--pos-field)',
      padding: '0 var(--pos-field-px) 0 var(--pos-field-pl)',
      borderRadius: 12,
      border: '1px solid hsl(var(--border-strong))',
      background: 'hsl(var(--surface-base))',
      color: 'hsl(var(--text-primary))',
      font: '400 16px var(--font-ui)',
      outline: 'none'
    },
    onFocus: e => {
      e.target.style.borderColor = 'hsl(var(--focus-ring))';
      e.target.style.boxShadow = '0 0 0 3px hsl(var(--focus-ring) / .28)';
    },
    onBlur: e => {
      e.target.style.borderColor = 'hsl(var(--border-strong))';
      e.target.style.boxShadow = 'none';
    }
  }), query && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => {
      setQuery('');
      inputRef.current && inputRef.current.focus();
    },
    "aria-label": "Limpiar b\xFAsqueda",
    style: {
      position: 'absolute',
      right: 8,
      width: 'var(--pos-tap-sm)',
      height: 'var(--pos-tap-sm)',
      borderRadius: 10,
      border: 0,
      background: 'transparent',
      color: 'hsl(var(--text-tertiary))',
      cursor: 'pointer',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(SIco, {
    name: "x",
    size: 20
  }))), !t && showResults && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      display: 'flex',
      gap: 14,
      fontSize: 12,
      color: 'hsl(var(--text-tertiary))',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("kbd", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      padding: '1px 6px',
      borderRadius: 5,
      border: '1px solid hsl(var(--border-strong))',
      background: 'hsl(var(--surface-sunken))'
    }
  }, "Enter"), " agrega el primer resultado"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("kbd", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      padding: '1px 6px',
      borderRadius: 5,
      border: '1px solid hsl(var(--border-strong))',
      background: 'hsl(var(--surface-sunken))'
    }
  }, "F2"), " cobrar")), showResults && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement(SAlert, {
    tone: "info"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("b", null, "Filtro en cliente (deuda conocida)."), " El buscador server-side de variantes es prerequisito y a\xFAn no est\xE1 resuelto; hoy se filtra sobre el cat\xE1logo cargado. La lectura de c\xF3digo de barras s\xED funciona por coincidencia exacta.")))), flash && /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 'none',
      margin: '0 20px 10px'
    }
  }, /*#__PURE__*/React.createElement(SAlert, {
    tone: "success"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14
    }
  }, flash))), body);
}
window.ProductSearch = ProductSearch;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/commerce/pos-search.jsx", error: String((e && e.message) || e) }); }

// ui_kits/commerce/pos-shell.jsx
try { (() => {
/* Noctis · commerce POS-a — SHELL POS. Contexto de PANTALLA COMPLETA que REEMPLAZA
   el shell administrativo (topbar + sidebar de módulos + breadcrumbs + footer): un
   cajero clavado en una sola tarea no usa la navegación de módulos. Barra superior
   mínima, orientada a la tarea, con identidad discreta: logo pequeño, empresa ·
   sucursal activa, cajero, y salida clara del POS. SIN sidebar de módulos, SIN
   breadcrumbs. La marca del tenant sigue siendo acento quirúrgico; el chrome es
   neutro de casa. */
const SHIcon = window.PosIcon;

/* Logo pequeño del tenant (chip neutro de casa, NO usa el acento — la marca es
   quirúrgica y vive en primary/activo/foco/selección del contenido). */
function PosBrand({
  tenant
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 32,
      height: 32,
      borderRadius: 8,
      flex: 'none',
      background: 'hsl(var(--text-primary))',
      color: 'hsl(var(--surface-raised))',
      display: 'grid',
      placeItems: 'center',
      fontWeight: 700,
      fontSize: 12,
      letterSpacing: '.02em'
    }
  }, tenant.initials), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'hsl(var(--text-primary))',
      fontSize: 15,
      fontWeight: 600,
      letterSpacing: '-.01em',
      whiteSpace: 'nowrap'
    }
  }, tenant.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      fontWeight: 600,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: 'hsl(var(--text-tertiary))',
      border: '1px solid hsl(var(--border-strong))',
      borderRadius: 999,
      padding: '2px 8px'
    }
  }, "POS")));
}
function ContextChip({
  icon,
  primary,
  secondary
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 'var(--pos-chip)',
      height: 'var(--pos-chip)',
      flex: 'none',
      borderRadius: 9,
      display: 'grid',
      placeItems: 'center',
      background: 'hsl(var(--surface-sunken))',
      border: '1px solid hsl(var(--border-subtle))',
      color: 'hsl(var(--text-secondary))'
    },
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement(SHIcon, {
    name: icon,
    size: 20
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0,
      lineHeight: 1.25
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: 'hsl(var(--text-primary))',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, primary), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'hsl(var(--text-tertiary))',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, secondary)));
}
function PosShell({
  tenant,
  mode,
  onToggleMode,
  onExit,
  children
}) {
  const modeIcon = mode === 'dark' ? '☾' : '☀';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      background: 'hsl(var(--surface-sunken))',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      flex: 'none',
      height: 'var(--pos-header)',
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '0 16px',
      background: 'hsl(var(--surface-raised))',
      borderBottom: '1px solid hsl(var(--border-subtle))'
    }
  }, /*#__PURE__*/React.createElement(PosBrand, {
    tenant: tenant
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 32,
      background: 'hsl(var(--border-subtle))',
      flex: 'none'
    }
  }), /*#__PURE__*/React.createElement(ContextChip, {
    icon: "store",
    primary: tenant.empresa,
    secondary: tenant.sucursal
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(ContextChip, {
    icon: "user-round",
    primary: tenant.cajero.nombre,
    secondary: tenant.cajero.rol
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onToggleMode,
    className: "pos-btn",
    "aria-label": mode === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro',
    style: {
      width: 'var(--pos-action)',
      height: 'var(--pos-action)',
      flex: 'none',
      borderRadius: 10,
      border: '1px solid hsl(var(--border-strong))',
      background: 'hsl(var(--surface-base))',
      color: 'hsl(var(--text-secondary))',
      cursor: 'pointer',
      fontSize: 18,
      display: 'grid',
      placeItems: 'center'
    }
  }, modeIcon), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onExit,
    className: "pos-btn",
    "aria-label": "Salir del POS",
    style: {
      height: 'var(--pos-action)',
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '0 14px',
      borderRadius: 10,
      border: '1px solid hsl(var(--border-strong))',
      background: 'hsl(var(--surface-base))',
      color: 'hsl(var(--text-secondary))',
      fontSize: 14,
      fontWeight: 500,
      cursor: 'pointer',
      fontFamily: 'var(--font-ui)'
    }
  }, /*#__PURE__*/React.createElement(SHIcon, {
    name: "log-out",
    size: 20
  }), "Salir del POS"))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      display: 'flex'
    }
  }, children));
}
window.PosShell = PosShell;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/commerce/pos-shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/commerce/productos.jsx
try { (() => {
/* Noctis · commerce — módulo PRODUCTOS: lista · form (nuevo/editar) · detalle madre
   + VariantsSection embebida. Aplica los primitivos del sistema. Gating de CTA por
   permiso (ocultar, no deshabilitar). Los cuatro estados por pantalla salen del kit. */
const CNS = window.NoctisCommerceDesignSystem_4dfd35;
const {
  Button: PBtn,
  Input: PInput,
  Select: PSelect,
  Combobox: PCombo,
  Table: PTable,
  Badge: PBadge,
  Card: PCard,
  Alert: PAlert,
  Spinner: PSpinner,
  Toast: PToast
} = CNS;
function EstadoBadge({
  estado
}) {
  const m = window.CommerceData.ESTADO_META[estado];
  return /*#__PURE__*/React.createElement(PBadge, {
    tone: m.tone,
    dot: m.dot
  }, m.label);
}

/* ── /productos (lista) ─────────────────────────────────────────────────────
   Filtro de estado (server-side) + búsqueda por nombre (client-side, deuda
   conocida) + "Cargar más" keyset. CTA "Nuevo producto" gated. */
function ProductsList({
  profile,
  listState,
  onRetry,
  onNew,
  onOpen
}) {
  const {
    CanPerm,
    PageHeader,
    Crumbs,
    TableSkeleton,
    ErrorState,
    ForbiddenState,
    ListEmpty,
    Segmented
  } = window;
  const canWrite = CanPerm(profile, 'productos.write');
  const [estado, setEstado] = React.useState('todos');
  const [q, setQ] = React.useState('');
  const [visible, setVisible] = React.useState(5);
  const cols = [{
    key: 'estado',
    label: 'Estado',
    pill: true,
    w: 90
  }, {
    key: 'nombre',
    label: 'Nombre',
    w: '90%'
  }, {
    key: 'categoria',
    label: 'Categoría',
    w: '70%'
  }, {
    key: 'creado',
    label: 'Creado',
    numeric: true,
    w: 80
  }];
  const header = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Crumbs, {
    items: [{
      label: 'Inicio'
    }, {
      label: 'Productos'
    }]
  }), /*#__PURE__*/React.createElement(PageHeader, {
    title: "Productos",
    meta: /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'hsl(var(--text-tertiary))'
      }
    }, "Cat\xE1logo del tenant \xB7 productos madre"),
    actions: canWrite ? /*#__PURE__*/React.createElement(PBtn, {
      variant: "primary",
      onClick: onNew
    }, "Nuevo producto") : null
  }));
  const Toolbar = /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-end',
      marginBottom: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 190
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      font: '500 13px var(--font-ui)',
      marginBottom: 6
    }
  }, "Estado"), /*#__PURE__*/React.createElement(PSelect, {
    value: estado,
    onChange: e => {
      setEstado(e.target.value);
      setVisible(5);
    },
    options: [{
      value: 'todos',
      label: 'Todos los estados'
    }, {
      value: 'activo',
      label: 'Activo'
    }, {
      value: 'borrador',
      label: 'Borrador'
    }, {
      value: 'descontinuado',
      label: 'Descontinuado'
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 240px',
      minWidth: 200
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      font: '500 13px var(--font-ui)',
      marginBottom: 6
    }
  }, "Buscar por nombre"), /*#__PURE__*/React.createElement(PInput, {
    value: q,
    onChange: e => setQ(e.target.value),
    placeholder: "Nombre del producto\u2026",
    helper: "B\xFAsqueda por nombre en cliente (deuda conocida: el buscador server-side llega con Clientes/POS)."
  })));
  if (listState === 'forbidden') return /*#__PURE__*/React.createElement(React.Fragment, null, header, /*#__PURE__*/React.createElement(ForbiddenState, {
    resource: "los productos",
    onHome: onRetry
  }));
  if (listState === 'loading') return /*#__PURE__*/React.createElement(React.Fragment, null, header, Toolbar, /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid hsl(var(--border-subtle))',
      borderRadius: 12,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(TableSkeleton, {
    columns: cols,
    rows: 5
  })));
  if (listState === 'error') return /*#__PURE__*/React.createElement(React.Fragment, null, header, Toolbar, /*#__PURE__*/React.createElement(ErrorState, {
    errorId: "ERR-PRD-4C19",
    context: "la lista de productos",
    onRetry: onRetry
  }));

  // datos + filtro server-side (estado) + búsqueda client-side (nombre)
  let data = window.CommerceData.PRODUCTS;
  if (estado !== 'todos') data = data.filter(p => p.estado === estado);
  const ql = q.trim().toLowerCase();
  if (ql) data = data.filter(p => p.nombre.toLowerCase().includes(ql));
  if (listState === 'empty' || data.length === 0) {
    const emptyByFilter = ql || estado !== 'todos';
    return /*#__PURE__*/React.createElement(React.Fragment, null, header, Toolbar, /*#__PURE__*/React.createElement(ListEmpty, {
      title: emptyByFilter ? 'Sin resultados' : 'Aún no hay productos',
      description: emptyByFilter ? 'Ningún producto coincide con el filtro o la búsqueda. Ajuste los criterios.' : 'Cree el primer producto para comenzar a construir el catálogo.',
      action: !emptyByFilter && canWrite ? /*#__PURE__*/React.createElement(PBtn, {
        variant: "primary",
        size: "sm",
        onClick: onNew
      }, "Nuevo producto") : null
    }));
  }
  const shown = data.slice(0, visible);
  const rows = shown.map(p => ({
    estado: /*#__PURE__*/React.createElement(EstadoBadge, {
      estado: p.estado
    }),
    nombre: /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: () => onOpen(p.id),
      style: {
        border: 0,
        background: 'none',
        padding: 0,
        cursor: 'pointer',
        color: 'hsl(var(--link))',
        font: '500 14px var(--font-ui)',
        textAlign: 'left'
      }
    }, p.nombre),
    categoria: /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'hsl(var(--text-secondary))'
      }
    }, p.categoriaLabel),
    creado: /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 13,
        color: 'hsl(var(--text-secondary))'
      }
    }, p.creado)
  }));
  return /*#__PURE__*/React.createElement(React.Fragment, null, header, Toolbar, /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid hsl(var(--border-subtle))',
      borderRadius: 12,
      overflow: 'hidden',
      background: 'hsl(var(--surface-raised))'
    }
  }, /*#__PURE__*/React.createElement(PTable, {
    columns: cols,
    rows: rows,
    footNote: /*#__PURE__*/React.createElement("span", null, "Orden cronol\xF3gico \xB7 keyset, sin n\xFAmeros de p\xE1gina ni total", !canWrite && ' · solo lectura para su perfil'),
    onLoadMore: visible < data.length ? () => setVisible(v => v + 5) : undefined,
    loadMoreLabel: "Cargar m\xE1s"
  })));
}

/* ── /productos/nuevo · /[id]/editar (form) ─────────────────────────────────
   Espejo del schema: nombre, categoría (Combobox, NUNCA UUID), IVA, descripción.
   Error por campo + error root en banner (Alert) para el 404 de categoría. */
function ProductForm({
  product,
  scenario,
  onCancel,
  onSaved
}) {
  const editing = !!product;
  const [nombre, setNombre] = React.useState(product?.nombre || '');
  const [categoria, setCategoria] = React.useState(product?.categoria || '');
  const [iva, setIva] = React.useState(product?.iva || '15');
  const [desc, setDesc] = React.useState(product?.descripcion || '');
  const [errors, setErrors] = React.useState({});
  const [rootError, setRootError] = React.useState('');
  const [pending, setPending] = React.useState(false);
  const submit = e => {
    e.preventDefault();
    const errs = {};
    if (!nombre.trim()) errs.nombre = 'Ingrese el nombre del producto.';else if (nombre.trim().length < 3) errs.nombre = 'El nombre debe tener al menos 3 caracteres.';
    if (!categoria) errs.categoria = 'Elija una categoría.';
    setErrors(errs);
    setRootError('');
    if (Object.keys(errs).length) return;
    setPending(true);
    setTimeout(() => {
      setPending(false);
      // 404 root: la categoría elegida ya no existe (borrada server-side) → banner root
      if (scenario === 'root404') {
        setRootError('La categoría seleccionada ya no existe. Actualice la lista y vuelva a elegir. (errorId: ERR-CAT-404)');
        return;
      }
      onSaved(editing ? 'Producto actualizado.' : 'Producto creado.');
    }, 900);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(window.Crumbs, {
    items: [{
      label: 'Inicio'
    }, {
      label: 'Productos',
      onClick: onCancel
    }, {
      label: editing ? 'Editar' : 'Nuevo'
    }]
  }), /*#__PURE__*/React.createElement(window.PageHeader, {
    title: editing ? 'Editar producto' : 'Nuevo producto',
    meta: editing ? /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 12,
        color: 'hsl(var(--text-tertiary))'
      }
    }, "Creado ", product.creado) : null
  }), /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    style: {
      maxWidth: 640
    }
  }, /*#__PURE__*/React.createElement(PCard, null, rootError && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(PAlert, {
    tone: "danger"
  }, /*#__PURE__*/React.createElement("b", null, "No se pudo guardar."), " ", rootError)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(PInput, {
    label: "Nombre",
    value: nombre,
    onChange: e => setNombre(e.target.value),
    error: errors.nombre,
    placeholder: "Nombre visible del producto",
    disabled: pending
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      font: '500 13px var(--font-ui)',
      marginBottom: 6
    }
  }, "Categor\xEDa"), /*#__PURE__*/React.createElement(PCombo, {
    value: categoria,
    onChange: setCategoria,
    placeholder: "Elija una categor\xEDa\u2026",
    searchPlaceholder: "Buscar categor\xEDa por nombre\u2026",
    options: window.CommerceData.CATEGORIAS
  }), errors.categoria ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      fontSize: 12,
      color: 'hsl(var(--danger-fg))'
    }
  }, errors.categoria) : /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      fontSize: 12,
      color: 'hsl(var(--text-tertiary))'
    }
  }, "Elegible por nombre \u2014 nunca se ingresa el identificador a mano.")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 200
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      font: '500 13px var(--font-ui)',
      marginBottom: 6
    }
  }, "IVA"), /*#__PURE__*/React.createElement(PSelect, {
    value: iva,
    onChange: e => setIva(e.target.value),
    options: window.CommerceData.IVA_OPTIONS,
    disabled: pending
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      font: '500 13px var(--font-ui)',
      marginBottom: 6
    }
  }, "Descripci\xF3n ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'hsl(var(--text-tertiary))',
      fontWeight: 400
    }
  }, "\xB7 opcional")), /*#__PURE__*/React.createElement("textarea", {
    value: desc,
    onChange: e => setDesc(e.target.value),
    rows: 3,
    disabled: pending,
    style: {
      width: '100%',
      resize: 'vertical',
      padding: '10px 12px',
      borderRadius: 8,
      border: '1px solid hsl(var(--border-strong))',
      background: 'hsl(var(--surface-base))',
      color: 'hsl(var(--text-primary))',
      font: '400 14px/1.5 var(--font-ui)'
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(PBtn, {
    variant: "primary",
    type: "submit",
    loading: pending
  }, editing ? 'Guardar cambios' : 'Crear producto'), /*#__PURE__*/React.createElement(PBtn, {
    variant: "ghost",
    type: "button",
    onClick: onCancel,
    disabled: pending
  }, "Cancelar"))));
}

/* ── VariantsSection (LISTA embebida — no el picker en cascada) ──────────────
   Keyset de variantes con CTAs gated. Cuatro estados propios. */
function VariantsSection({
  productId,
  profile,
  sectionState,
  onRetry,
  onNewVariant,
  onOpenVariant
}) {
  const {
    CanPerm,
    ErrorState,
    ForbiddenState,
    Segmented
  } = window;
  const canWrite = CanPerm(profile, 'productos.write');
  const cols = [{
    key: 'nombre',
    label: 'Variante',
    w: '80%'
  }, {
    key: 'sku',
    label: 'SKU',
    w: 120
  }, {
    key: 'attrs',
    label: 'Atributos',
    w: '90%'
  }, {
    key: 'acc',
    label: '',
    align: 'right',
    w: 70
  }];
  const head = /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 12,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: '600 18px/24px var(--font-ui)',
      letterSpacing: '-.01em',
      margin: 0
    }
  }, "Variantes"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '2px 0 0',
      fontSize: 12,
      color: 'hsl(var(--text-tertiary))'
    }
  }, "Presentaciones vendibles de este producto.")), canWrite && /*#__PURE__*/React.createElement(PBtn, {
    variant: "secondary",
    size: "sm",
    onClick: onNewVariant
  }, "Nueva variante"));
  let body;
  if (sectionState === 'forbidden') body = /*#__PURE__*/React.createElement(ForbiddenState, {
    resource: "las variantes",
    onHome: onRetry
  });else if (sectionState === 'loading') body = /*#__PURE__*/React.createElement(window.TableSkeleton, {
    columns: cols,
    rows: 3
  });else if (sectionState === 'error') body = /*#__PURE__*/React.createElement(ErrorState, {
    errorId: "ERR-VAR-8B04",
    context: "las variantes",
    onRetry: onRetry
  });else {
    const data = sectionState === 'empty' ? [] : window.CommerceData.VARIANTS[productId] || [];
    if (data.length === 0) {
      body = /*#__PURE__*/React.createElement("div", {
        style: {
          padding: '8px 4px'
        }
      }, /*#__PURE__*/React.createElement(window.ListEmpty, {
        title: "Sin variantes",
        description: "Este producto todav\xEDa no tiene variantes. Cree la primera para asignarle SKU y c\xF3digos de barras.",
        action: canWrite ? /*#__PURE__*/React.createElement(PBtn, {
          variant: "primary",
          size: "sm",
          onClick: onNewVariant
        }, "Nueva variante") : null
      }));
    } else {
      const rows = data.map(v => ({
        nombre: /*#__PURE__*/React.createElement("button", {
          type: "button",
          onClick: () => onOpenVariant(v.id),
          style: {
            border: 0,
            background: 'none',
            padding: 0,
            cursor: 'pointer',
            color: 'hsl(var(--link))',
            font: '500 14px var(--font-ui)',
            textAlign: 'left'
          }
        }, v.nombre),
        sku: /*#__PURE__*/React.createElement("code", {
          style: {
            fontFamily: 'var(--font-mono)',
            fontSize: 12,
            color: 'hsl(var(--text-secondary))'
          }
        }, v.sku),
        attrs: /*#__PURE__*/React.createElement("span", {
          style: {
            color: 'hsl(var(--text-secondary))',
            fontSize: 13
          }
        }, v.atributos),
        acc: /*#__PURE__*/React.createElement(PBtn, {
          variant: "ghost",
          size: "sm",
          onClick: () => onOpenVariant(v.id)
        }, "Abrir")
      }));
      body = /*#__PURE__*/React.createElement("div", {
        style: {
          border: '1px solid hsl(var(--border-subtle))',
          borderRadius: 12,
          overflow: 'hidden',
          background: 'hsl(var(--surface-raised))'
        }
      }, /*#__PURE__*/React.createElement(PTable, {
        columns: cols,
        rows: rows,
        minWidth: 560,
        footNote: "Keyset \xB7 sin n\xFAmeros de p\xE1gina"
      }));
    }
  }
  return /*#__PURE__*/React.createElement("div", null, head, body);
}

/* ── /productos/[id] (detalle madre) ────────────────────────────────────────
   Cabecera + Descontinuar (confirm inline 2 pasos; 409 si ya terminal). */
function ProductDetail({
  product,
  profile,
  sectionState,
  onRetry,
  onEdit,
  onBack,
  onNewVariant,
  onOpenVariant,
  onToast
}) {
  const {
    CanPerm,
    ConfirmInline,
    PageHeader,
    Crumbs
  } = window;
  const canWrite = CanPerm(profile, 'productos.write');
  const [estado, setEstado] = React.useState(product.estado);
  const [pending, setPending] = React.useState(false);
  const [conflict, setConflict] = React.useState('');
  const terminal = estado === 'descontinuado';
  const descontinuar = close => {
    setPending(true);
    setConflict('');
    setTimeout(() => {
      setPending(false);
      close();
      if (terminal || product.estado === 'descontinuado') {
        setConflict('Este producto ya está descontinuado. No es posible repetir la acción (409). ');
        return;
      }
      setEstado('descontinuado');
      onToast('Producto descontinuado.');
    }, 800);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Crumbs, {
    items: [{
      label: 'Inicio'
    }, {
      label: 'Productos',
      onClick: onBack
    }, {
      label: product.nombre
    }]
  }), /*#__PURE__*/React.createElement(PageHeader, {
    title: product.nombre,
    meta: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(EstadoBadge, {
      estado: estado
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'hsl(var(--text-tertiary))'
      }
    }, "\xB7"), /*#__PURE__*/React.createElement("span", null, product.categoriaLabel), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'hsl(var(--text-tertiary))'
      }
    }, "\xB7"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 12
      }
    }, "IVA ", product.iva, "%"), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'hsl(var(--text-tertiary))'
      }
    }, "\xB7"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 12
      }
    }, "Creado ", product.creado)),
    actions: canWrite ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PBtn, {
      variant: "secondary",
      onClick: onEdit
    }, "Editar"), !terminal && /*#__PURE__*/React.createElement(ConfirmInline, {
      label: "Descontinuar",
      question: "\xBFDescontinuar este producto?",
      confirmLabel: "S\xED, descontinuar",
      pending: pending,
      size: "md",
      onConfirm: descontinuar
    })) : null
  }), conflict && /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 720,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(PAlert, {
    tone: "warning"
  }, conflict, "El estado terminal no admite reversa desde aqu\xED.")), product.descripcion && /*#__PURE__*/React.createElement(PCard, {
    header: "Descripci\xF3n"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'hsl(var(--text-secondary))',
      fontSize: 14
    }
  }, product.descripcion)), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 24
    }
  }), /*#__PURE__*/React.createElement(VariantsSection, {
    productId: product.id,
    profile: profile,
    sectionState: sectionState,
    onRetry: onRetry,
    onNewVariant: onNewVariant,
    onOpenVariant: onOpenVariant
  }));
}
Object.assign(window, {
  ProductsList,
  ProductForm,
  ProductDetail,
  VariantsSection,
  EstadoBadge
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/commerce/productos.jsx", error: String((e && e.message) || e) }); }

// ui_kits/commerce/shell.jsx
try { (() => {
/* Noctis · commerce — SHELL. Viste los slots que el núcleo dejó abiertos: logo
   del tenant (fallback a Noctis), CompanySelector, sidebar POR PERMISOS colapsable,
   slot de branch reservado, footer legal. Chrome SIEMPRE neutro de casa; el acento
   del tenant aparece solo en el ítem de nav activo (los otros 3 puntos —primary,
   foco, selección— viven en el contenido). Réplica del contrato visual del Shell
   primitivo, extendida con la interacción que el prototipo necesita. */
const {
  Wordmark: SWordmark,
  Badge: SBadge,
  Icon: SIcon
} = window.NoctisCommerceDesignSystem_4dfd35;
const {
  MicroLabel: ML
} = window;

/* Logo del tenant (variable) con fallback al logo de casa Noctis. */
function TenantLogo({
  tenant
}) {
  if (!tenant) return /*#__PURE__*/React.createElement(SWordmark, {
    size: "sm"
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 26,
      height: 26,
      borderRadius: 7,
      background: 'hsl(var(--text-primary))',
      color: 'hsl(var(--surface-raised))',
      display: 'grid',
      placeItems: 'center',
      fontWeight: 700,
      fontSize: 11,
      letterSpacing: '.02em'
    }
  }, tenant.initials), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'hsl(var(--text-primary))',
      fontSize: 13,
      fontWeight: 600,
      letterSpacing: '-.01em'
    }
  }, tenant.name));
}

/* CompanySelector — VISIBLE solo con >1 empresa. Cambiar empresa limpia el estado
   y vuelve a /dashboard (transición manejada por el orquestador). */
function CompanySelector({
  empresas,
  value,
  onChange
}) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!open) return;
    const h = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', h);
    return () => document.removeEventListener('mousedown', h);
  }, [open]);
  if (!empresas || empresas.length < 2) return null; // con una sola empresa es invisible
  const current = empresas.find(e => e.id === value) || empresas[0];
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setOpen(o => !o),
    "aria-haspopup": "listbox",
    "aria-expanded": open,
    "aria-label": "Cambiar de empresa",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      height: 32,
      padding: '0 10px',
      borderRadius: 8,
      border: '1px solid hsl(var(--border-strong))',
      background: 'hsl(var(--surface-base))',
      color: 'hsl(var(--text-primary))',
      cursor: 'pointer',
      font: '500 12px var(--font-ui)',
      maxWidth: 220
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, current.name), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      color: 'hsl(var(--text-tertiary))'
    }
  }, "\u25BE")), open && /*#__PURE__*/React.createElement("div", {
    role: "listbox",
    style: {
      position: 'absolute',
      top: 38,
      left: 0,
      minWidth: 260,
      padding: 6,
      borderRadius: 12,
      background: 'hsl(var(--surface-overlay))',
      border: '1px solid hsl(var(--border-subtle))',
      boxShadow: 'var(--shadow-overlay)',
      zIndex: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '4px 8px 8px'
    }
  }, /*#__PURE__*/React.createElement(ML, null, "Empresa")), empresas.map(e => {
    const active = e.id === value;
    return /*#__PURE__*/React.createElement("button", {
      key: e.id,
      role: "option",
      "aria-selected": active,
      onClick: () => {
        setOpen(false);
        if (!active) onChange(e.id);
      },
      style: {
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        gap: 8,
        textAlign: 'left',
        border: 0,
        cursor: 'pointer',
        padding: '8px 10px',
        borderRadius: 8,
        background: active ? 'hsl(var(--surface-sunken))' : 'transparent',
        color: 'hsl(var(--text-primary))',
        font: 'inherit'
      }
    }, /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        width: 14,
        color: active ? 'hsl(var(--brand-primary))' : 'transparent'
      }
    }, "\u2713"), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        flexDirection: 'column'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        fontWeight: active ? 600 : 500
      }
    }, e.name), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        color: 'hsl(var(--text-tertiary))',
        fontFamily: 'var(--font-mono)'
      }
    }, e.legal.split('·')[1]?.trim())));
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 10px 4px',
      fontSize: 11,
      color: 'hsl(var(--text-tertiary))',
      borderTop: '1px solid hsl(var(--border-subtle))',
      marginTop: 4
    }
  }, "Al cambiar de empresa se limpia el estado y vuelve al inicio.")));
}

/* Ítem de sidebar. Ícono Lucide del sistema por id de módulo (mismo set que backoffice).
   Decisión declarada: los módulos "Pronto" (no construidos) son INFORMATIVOS PUROS —no un control
   deshabilitado ni un link con handler nulo—: se renderizan como <div> sin href/ruta, sin onClick,
   sin foco (no tabbable) y sin aria-disabled. El estado viaja en texto sr-only siempre presente +
   title, así se percibe sin vista y en ambos modos. Solo los construidos son <button> navegable. */
function NavItem({
  item,
  active,
  collapsed,
  onClick,
  profile
}) {
  const disabled = !item.built; // visible-pero-Pronto (informativo)
  const srName = item.label + ' · Pronto (módulo por construir)';
  const inner = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      flex: 'none',
      opacity: collapsed && disabled ? .5 : 1
    }
  }, /*#__PURE__*/React.createElement(SIcon, {
    module: item.id,
    size: 20,
    style: {
      flex: 'none'
    }
  }), collapsed && disabled && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      top: -2,
      right: -2,
      width: 6,
      height: 6,
      borderRadius: 999,
      background: active ? 'hsl(var(--brand-foreground))' : 'hsl(var(--text-tertiary))',
      boxShadow: '0 0 0 2px ' + (active ? 'hsl(var(--brand-primary))' : 'hsl(var(--surface-sunken))')
    }
  })), !collapsed && /*#__PURE__*/React.createElement("span", {
    style: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, item.label), collapsed && disabled && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      width: 1,
      height: 1,
      padding: 0,
      margin: -1,
      overflow: 'hidden',
      clip: 'rect(0 0 0 0)',
      whiteSpace: 'nowrap',
      border: 0
    }
  }, srName)), !collapsed && disabled && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      fontWeight: 500,
      padding: '1px 7px',
      borderRadius: 999,
      background: active ? 'hsl(var(--brand-foreground) / .2)' : 'hsl(var(--surface-base))',
      border: active ? 0 : '1px solid hsl(var(--border-subtle))',
      color: active ? 'hsl(var(--brand-foreground))' : 'hsl(var(--text-tertiary))'
    }
  }, "Pronto"));
  const baseStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    width: '100%',
    textAlign: 'left',
    border: 0,
    padding: collapsed ? 8 : '8px 10px',
    borderRadius: 8,
    font: '500 13px var(--font-ui)',
    justifyContent: collapsed ? 'center' : 'space-between',
    background: active ? 'hsl(var(--brand-primary))' : 'transparent',
    color: active ? 'hsl(var(--brand-foreground))' : 'hsl(var(--text-secondary))'
  };
  if (disabled) {
    return /*#__PURE__*/React.createElement("div", {
      title: collapsed ? item.label + ' · Pronto' : undefined,
      style: {
        ...baseStyle,
        cursor: 'default',
        position: 'relative'
      }
    }, inner);
  }
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClick,
    title: collapsed ? item.label : undefined,
    "aria-current": active ? 'page' : undefined,
    "aria-label": collapsed ? item.label : undefined,
    style: {
      ...baseStyle,
      cursor: 'pointer',
      position: 'relative'
    }
  }, inner);
}
function Sidebar({
  nav,
  profile,
  active,
  collapsed,
  onToggle,
  onNavigate
}) {
  const {
    CanPerm
  } = window;
  // gating capa 1: módulo visible solo con >=1 permiso efectivo
  const groups = nav.map(g => ({
    ...g,
    items: g.items.filter(it => CanPerm(profile, it.perm))
  })).filter(g => g.items.length);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: collapsed ? 60 : 214,
      flex: 'none',
      background: 'hsl(var(--surface-sunken))',
      borderRight: '1px solid hsl(var(--border-subtle))',
      display: 'flex',
      flexDirection: 'column',
      transition: 'width .16s ease'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: collapsed ? '10px 8px' : '12px 10px',
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, groups.map((g, gi) => /*#__PURE__*/React.createElement("div", {
    key: gi,
    style: {
      marginBottom: 6
    }
  }, !collapsed && /*#__PURE__*/React.createElement(ML, {
    style: {
      padding: '8px 8px 4px'
    }
  }, g.section), collapsed && gi > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'hsl(var(--border-subtle))',
      margin: '6px 6px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, g.items.map(it => /*#__PURE__*/React.createElement(NavItem, {
    key: it.id,
    item: it,
    profile: profile,
    collapsed: collapsed,
    active: active === it.id,
    onClick: () => onNavigate(it)
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: collapsed ? 8 : 10,
      borderTop: '1px solid hsl(var(--border-subtle))'
    }
  }, /*#__PURE__*/React.createElement("div", {
    title: "Slot de sucursal \u2014 reservado para POS/Caja",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      justifyContent: collapsed ? 'center' : 'flex-start',
      padding: collapsed ? 8 : '8px 10px',
      borderRadius: 8,
      border: '1px dashed hsl(var(--border-strong))',
      color: 'hsl(var(--text-disabled))',
      fontSize: 12
    }
  }, /*#__PURE__*/React.createElement(SIcon, {
    name: "store",
    size: 20,
    style: {
      flex: 'none',
      opacity: .7
    }
  }), !collapsed && /*#__PURE__*/React.createElement("span", null, "Sucursal \xB7 reservado"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: collapsed ? 8 : '8px 10px',
      borderTop: '1px solid hsl(var(--border-subtle))'
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onToggle,
    "aria-label": collapsed ? 'Expandir menú' : 'Colapsar menú',
    "aria-pressed": collapsed,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      width: '100%',
      justifyContent: collapsed ? 'center' : 'flex-start',
      border: '1px solid hsl(var(--border-strong))',
      background: 'hsl(var(--surface-base))',
      color: 'hsl(var(--text-secondary))',
      borderRadius: 8,
      padding: collapsed ? 7 : '7px 10px',
      cursor: 'pointer',
      fontSize: 12,
      fontFamily: 'var(--font-ui)'
    }
  }, /*#__PURE__*/React.createElement(SIcon, {
    name: collapsed ? 'chevrons-right' : 'chevrons-left',
    size: 16
  }), !collapsed && 'Colapsar')));
}
function CommerceShell({
  tenant,
  empresa,
  profile,
  mode,
  onToggleMode,
  onLogout,
  activeModule,
  onNavigate,
  onChangeCompany,
  collapsed,
  onToggleCollapse,
  children
}) {
  const modeIcon = mode === 'dark' ? '☾' : '☀';
  const empresaObj = tenant.empresas.find(e => e.id === empresa) || tenant.empresas[0];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid hsl(var(--border-subtle))',
      borderRadius: 14,
      overflow: 'hidden',
      background: 'hsl(var(--surface-base))',
      display: 'flex',
      flexDirection: 'column',
      minHeight: 640
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '0 14px',
      height: 56,
      flex: 'none',
      background: 'hsl(var(--surface-raised))',
      borderBottom: '1px solid hsl(var(--border-subtle))'
    }
  }, /*#__PURE__*/React.createElement(TenantLogo, {
    tenant: tenant
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 24,
      background: 'hsl(var(--border-subtle))'
    }
  }), /*#__PURE__*/React.createElement(CompanySelector, {
    empresas: tenant.empresas,
    value: empresa,
    onChange: onChangeCompany
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'hsl(var(--text-secondary))',
      fontSize: 12,
      display: 'none'
    },
    className: "hide-sm"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right',
      lineHeight: 1.3
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'hsl(var(--text-primary))',
      fontWeight: 500
    }
  }, profile.email), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'hsl(var(--text-tertiary))'
    }
  }, tenant.name, " \xB7 ", tenant.product)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onToggleMode,
    "aria-label": mode === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro',
    style: {
      width: 32,
      height: 32,
      borderRadius: 8,
      border: '1px solid hsl(var(--border-strong))',
      background: 'hsl(var(--surface-base))',
      color: 'hsl(var(--text-secondary))',
      cursor: 'pointer',
      fontSize: 14
    }
  }, modeIcon), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onLogout,
    style: {
      height: 32,
      padding: '0 12px',
      borderRadius: 8,
      border: '1px solid hsl(var(--border-strong))',
      background: 'hsl(var(--surface-base))',
      color: 'hsl(var(--text-secondary))',
      fontSize: 12,
      cursor: 'pointer',
      fontFamily: 'var(--font-ui)'
    }
  }, "Salir"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flex: 1,
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement(Sidebar, {
    nav: window.CommerceData.NAV,
    profile: profile,
    active: activeModule,
    collapsed: collapsed,
    onToggle: onToggleCollapse,
    onNavigate: onNavigate
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      position: 'relative',
      background: 'hsl(var(--surface-base))',
      overflow: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1120,
      margin: '0 auto',
      padding: '22px 26px 40px'
    }
  }, children))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 16px',
      flex: 'none',
      borderTop: '1px solid hsl(var(--border-subtle))',
      background: 'hsl(var(--surface-raised))',
      display: 'flex',
      justifyContent: 'space-between',
      gap: 12,
      fontSize: 11,
      color: 'hsl(var(--text-tertiary))',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", null, empresaObj.legal), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500,
      color: 'hsl(var(--text-secondary))'
    }
  }, "Powered by Noctis Commerce")));
}

/* Dashboard — placeholder DIGNO (el dashboard KPI real es Fase 2). Sin KPIs falsos. */
function Dashboard({
  tenant,
  profile,
  onGoProductos,
  canProductos
}) {
  const {
    Card,
    Badge,
    Button
  } = window.NoctisCommerceDesignSystem_4dfd35;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      font: '600 28px/34px var(--font-ui)',
      letterSpacing: '-.02em',
      margin: '0 0 8px'
    }
  }, "Panel de inicio"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'hsl(var(--text-secondary))',
      fontSize: 14,
      maxWidth: '56ch'
    }
  }, "Est\xE1 trabajando en ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'hsl(var(--text-primary))'
    }
  }, tenant.name), " como ", profile.label.toLowerCase(), ". Desde aqu\xED accede a los m\xF3dulos habilitados para su perfil.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))',
      gap: 14,
      marginBottom: 20
    }
  }, canProductos && /*#__PURE__*/React.createElement(Card, {
    header: "Cat\xE1logo"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 15,
      marginBottom: 4
    }
  }, "Productos"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 14px',
      color: 'hsl(var(--text-secondary))',
      fontSize: 13
    }
  }, "Gestione productos madre, variantes y c\xF3digos de barras."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    onClick: onGoProductos
  }, "Abrir productos")), /*#__PURE__*/React.createElement(Card, {
    header: "Su perfil"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 15,
      marginBottom: 4
    }
  }, profile.label), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 12px',
      color: 'hsl(var(--text-secondary))',
      fontSize: 13
    }
  }, "Los m\xF3dulos del men\xFA se muestran seg\xFAn sus permisos efectivos."), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, profile.perms.length, " permisos"))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontSize: 16,
      color: 'hsl(var(--text-tertiary))',
      marginTop: 1
    }
  }, "\u25F7"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 14,
      marginBottom: 2
    }
  }, "El tablero con indicadores llega en la Fase 2"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'hsl(var(--text-secondary))',
      fontSize: 13,
      maxWidth: '64ch'
    }
  }, "Ventas del d\xEDa, productos por vencer y bajo stock aparecer\xE1n aqu\xED. No se muestran cifras hasta tener el dato real \u2014 el hueco se se\xF1ala, no se inventa.")))));
}
Object.assign(window, {
  CommerceShell,
  Dashboard,
  CompanySelector
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/commerce/shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/commerce/variantes.jsx
try { (() => {
/* Noctis · commerce — VARIANTE (nuevo · detalle · editar) + BarcodesSection.
   La sección de códigos: pill "primario", acciones editar / fijar-primario /
   eliminar con confirm inline de 2 pasos POR FILA, y TRES conflictos 409
   diferenciados: duplicado → banner root; carrera de primario y borrar-el-primario
   → Alert POR FILA (no banner). */
const VNS = window.NoctisCommerceDesignSystem_4dfd35;
const {
  Button: VBtn,
  Input: VInput,
  Table: VTable,
  Badge: VBadge,
  Card: VCard,
  Alert: VAlert
} = VNS;

/* ── BarcodesSection (embebida en detalle de variante) ─────────────────────── */
function BarcodesSection({
  variant,
  profile,
  sectionState,
  onRetry,
  onNewBarcode,
  onEditBarcode
}) {
  const {
    CanPerm,
    ConfirmInline,
    ErrorState,
    ForbiddenState,
    ListEmpty,
    Segmented
  } = window;
  const canWrite = CanPerm(profile, 'productos.write');
  const seed = window.CommerceData.BARCODES[variant.id] || [];
  const [rows, setRows] = React.useState(seed);
  const [rowConflict, setRowConflict] = React.useState({}); // { [id]: mensaje }  (409 por fila)
  const [demo, setDemo] = React.useState('none'); // simulador de 409 para el prototipo

  const setPrimary = id => {
    setRowConflict({});
    if (demo === 'race') {
      setRowConflict({
        [id]: 'Otro usuario fijó un código primario distinto hace instantes. Actualice la sección para ver el estado real. (409 · carrera de "fijar primario")'
      });
      return;
    }
    setRows(rs => rs.map(b => ({
      ...b,
      primary: b.id === id
    })));
  };
  const remove = (id, close) => {
    setRowConflict({});
    const target = rows.find(b => b.id === id);
    // 409 real: no se puede borrar el primario; hay que fijar otro primero
    if (target?.primary || demo === 'delprimary') {
      setRowConflict({
        [id]: 'No puede eliminar el código primario. Fije otro código como primario y vuelva a intentar. (409 · borrar-el-primario)'
      });
      close();
      return;
    }
    setRows(rs => rs.filter(b => b.id !== id));
    close();
  };
  const head = /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 12,
      marginBottom: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: '600 18px/24px var(--font-ui)',
      letterSpacing: '-.01em',
      margin: 0
    }
  }, "C\xF3digos de barras"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '2px 0 0',
      fontSize: 12,
      color: 'hsl(var(--text-tertiary))'
    }
  }, "Un solo c\xF3digo primario por variante.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      flexWrap: 'wrap'
    }
  }, canWrite && sectionState === 'data' && rows.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'hsl(var(--text-tertiary))'
    }
  }, "Simular 409:"), /*#__PURE__*/React.createElement(Segmented, {
    ariaLabel: "Simular conflicto 409",
    value: demo,
    onChange: v => {
      setDemo(v);
      setRowConflict({});
    },
    options: [{
      value: 'none',
      label: 'Ninguno'
    }, {
      value: 'dup',
      label: 'Duplicado'
    }, {
      value: 'race',
      label: 'Carrera'
    }, {
      value: 'delprimary',
      label: 'Borrar primario'
    }]
  })), canWrite && /*#__PURE__*/React.createElement(VBtn, {
    variant: "secondary",
    size: "sm",
    onClick: onNewBarcode
  }, "Nuevo c\xF3digo")));
  if (sectionState === 'forbidden') return /*#__PURE__*/React.createElement("div", null, head, /*#__PURE__*/React.createElement(ForbiddenState, {
    resource: "los c\xF3digos de barras",
    onHome: onRetry
  }));
  if (sectionState === 'loading') return /*#__PURE__*/React.createElement("div", null, head, /*#__PURE__*/React.createElement(window.TableSkeleton, {
    columns: [{
      key: 'a',
      label: 'Código',
      w: 140
    }, {
      key: 'b',
      label: 'Etiqueta',
      w: '70%'
    }, {
      key: 'c',
      label: '',
      align: 'right',
      w: 200
    }],
    rows: 2
  }));
  if (sectionState === 'error') return /*#__PURE__*/React.createElement("div", null, head, /*#__PURE__*/React.createElement(ErrorState, {
    errorId: "ERR-COD-3A77",
    context: "los c\xF3digos de barras",
    onRetry: onRetry
  }));
  if (sectionState === 'empty' || rows.length === 0) {
    return /*#__PURE__*/React.createElement("div", null, head, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '8px 4px'
      }
    }, /*#__PURE__*/React.createElement(ListEmpty, {
      title: "Sin c\xF3digos de barras",
      description: "Esta variante no tiene c\xF3digos a\xFAn. Agregue uno y m\xE1rquelo como primario para venta r\xE1pida.",
      action: canWrite ? /*#__PURE__*/React.createElement(VBtn, {
        variant: "primary",
        size: "sm",
        onClick: onNewBarcode
      }, "Nuevo c\xF3digo") : null
    })));
  }
  return /*#__PURE__*/React.createElement("div", null, head, demo === 'dup' && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(VAlert, {
    tone: "danger"
  }, /*#__PURE__*/React.createElement("b", null, "C\xF3digo duplicado."), " El c\xF3digo ", /*#__PURE__*/React.createElement("code", {
    style: {
      fontFamily: 'var(--font-mono)'
    }
  }, "7861234567890"), " ya existe en otra variante de este tenant. Use un c\xF3digo distinto. (409 \xB7 errorId: ERR-COD-DUP)")), /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid hsl(var(--border-subtle))',
      borderRadius: 12,
      overflow: 'hidden',
      background: 'hsl(var(--surface-raised))'
    }
  }, rows.map((b, i) => /*#__PURE__*/React.createElement("div", {
    key: b.id,
    style: {
      borderTop: i ? '1px solid hsl(var(--border-subtle))' : 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '12px 14px',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("code", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 14,
      color: 'hsl(var(--text-primary))',
      letterSpacing: '.02em'
    }
  }, b.codigo), b.primary && /*#__PURE__*/React.createElement(VBadge, {
    tone: "brand"
  }, "Primario"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'hsl(var(--text-secondary))'
    }
  }, b.etiqueta), canWrite && /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, !b.primary && /*#__PURE__*/React.createElement(VBtn, {
    variant: "ghost",
    size: "sm",
    onClick: () => setPrimary(b.id)
  }, "Fijar primario"), /*#__PURE__*/React.createElement(VBtn, {
    variant: "ghost",
    size: "sm",
    onClick: () => onEditBarcode(b.id)
  }, "Editar"), /*#__PURE__*/React.createElement(ConfirmInline, {
    label: "Eliminar",
    question: "\xBFEliminar este c\xF3digo?",
    confirmLabel: "Eliminar",
    compact: true,
    onConfirm: close => remove(b.id, close)
  }))), rowConflict[b.id] && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 14px 12px'
    }
  }, /*#__PURE__*/React.createElement(VAlert, {
    tone: "warning"
  }, rowConflict[b.id]))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      fontSize: 11,
      color: 'hsl(var(--text-tertiary))'
    }
  }, "Keyset \xB7 sin n\xFAmeros de p\xE1gina"));
}

/* ── Detalle de variante ────────────────────────────────────────────────────── */
function VariantDetail({
  product,
  variant,
  profile,
  sectionState,
  onRetry,
  onBackProduct,
  onEdit,
  onNewBarcode,
  onEditBarcode,
  onToast,
  onDeleted
}) {
  const {
    CanPerm,
    ConfirmInline,
    PageHeader,
    Crumbs
  } = window;
  const canWrite = CanPerm(profile, 'productos.write');
  const [pending, setPending] = React.useState(false);
  const del = close => {
    setPending(true);
    setTimeout(() => {
      setPending(false);
      close();
      onToast('Variante eliminada.');
      onDeleted();
    }, 700);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Crumbs, {
    items: [{
      label: 'Inicio'
    }, {
      label: 'Productos',
      onClick: onBackProduct
    }, {
      label: product.nombre,
      onClick: onBackProduct
    }, {
      label: variant.nombre
    }]
  }), /*#__PURE__*/React.createElement(PageHeader, {
    title: variant.nombre,
    meta: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("code", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 13,
        color: 'hsl(var(--text-secondary))'
      }
    }, variant.sku), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'hsl(var(--text-tertiary))'
      }
    }, "\xB7"), /*#__PURE__*/React.createElement("span", null, variant.atributos)),
    actions: canWrite ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(VBtn, {
      variant: "secondary",
      onClick: onEdit
    }, "Editar variante"), /*#__PURE__*/React.createElement(ConfirmInline, {
      label: "Eliminar",
      question: "\xBFEliminar esta variante?",
      confirmLabel: "S\xED, eliminar",
      size: "md",
      pending: pending,
      onConfirm: del
    })) : null
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 8
    }
  }), /*#__PURE__*/React.createElement(BarcodesSection, {
    variant: variant,
    profile: profile,
    sectionState: sectionState,
    onRetry: onRetry,
    onNewBarcode: onNewBarcode,
    onEditBarcode: onEditBarcode
  }));
}

/* ── Form de variante (nuevo/editar) ──────────────────────────────────────────── */
function VariantForm({
  product,
  variant,
  onCancel,
  onSaved
}) {
  const editing = !!variant;
  const [nombre, setNombre] = React.useState(variant?.nombre || '');
  const [sku, setSku] = React.useState(variant?.sku || '');
  const [attrs, setAttrs] = React.useState(variant?.atributos || '');
  const [errors, setErrors] = React.useState({});
  const [pending, setPending] = React.useState(false);
  const submit = e => {
    e.preventDefault();
    const errs = {};
    if (!nombre.trim()) errs.nombre = 'Ingrese el nombre de la variante.';
    if (!sku.trim()) errs.sku = 'Ingrese el SKU.';
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setPending(true);
    setTimeout(() => {
      setPending(false);
      onSaved(editing ? 'Variante actualizada.' : 'Variante creada.');
    }, 800);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(window.Crumbs, {
    items: [{
      label: 'Inicio'
    }, {
      label: 'Productos',
      onClick: () => onCancel('product')
    }, {
      label: product.nombre,
      onClick: () => onCancel('detail')
    }, {
      label: editing ? 'Editar variante' : 'Nueva variante'
    }]
  }), /*#__PURE__*/React.createElement(window.PageHeader, {
    title: editing ? 'Editar variante' : 'Nueva variante',
    meta: /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'hsl(var(--text-tertiary))'
      }
    }, "de ", product.nombre)
  }), /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    style: {
      maxWidth: 640
    }
  }, /*#__PURE__*/React.createElement(VCard, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(VInput, {
    label: "Nombre de la variante",
    value: nombre,
    onChange: e => setNombre(e.target.value),
    error: errors.nombre,
    placeholder: "Ej.: Azul, Cuadros, Grande",
    disabled: pending
  }), /*#__PURE__*/React.createElement(VInput, {
    label: "SKU",
    value: sku,
    onChange: e => setSku(e.target.value),
    error: errors.sku,
    placeholder: "C\xF3digo interno de la variante",
    helper: "Identificador interno; puede diferir del c\xF3digo de barras.",
    disabled: pending
  }), /*#__PURE__*/React.createElement(VInput, {
    label: "Atributos",
    value: attrs,
    onChange: e => setAttrs(e.target.value),
    placeholder: "Color: azul \xB7 Tama\xF1o: A4",
    helper: "Pares atributo: valor, separados por punto medio.",
    disabled: pending
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(VBtn, {
    variant: "primary",
    type: "submit",
    loading: pending
  }, editing ? 'Guardar cambios' : 'Crear variante'), /*#__PURE__*/React.createElement(VBtn, {
    variant: "ghost",
    type: "button",
    onClick: () => onCancel('detail'),
    disabled: pending
  }, "Cancelar"))));
}

/* ── Form de código de barras (nuevo/editar) — alta/edición simple ────────────
   Guardar con código existente → banner ROOT (409 duplicado). */
function BarcodeForm({
  product,
  variant,
  barcode,
  onCancel,
  onSaved
}) {
  const editing = !!barcode;
  const [codigo, setCodigo] = React.useState(barcode?.codigo || '');
  const [etiqueta, setEtiqueta] = React.useState(barcode?.etiqueta || '');
  const [errors, setErrors] = React.useState({});
  const [rootError, setRootError] = React.useState('');
  const [pending, setPending] = React.useState(false);
  const submit = e => {
    e.preventDefault();
    const errs = {};
    if (!codigo.trim()) errs.codigo = 'Ingrese el código.';else if (!/^[0-9]{8,14}$/.test(codigo.trim())) errs.codigo = 'El código debe tener entre 8 y 14 dígitos.';
    setErrors(errs);
    setRootError('');
    if (Object.keys(errs).length) return;
    setPending(true);
    setTimeout(() => {
      setPending(false);
      // demo: si repite el código semilla, 409 duplicado → banner root
      if (codigo.trim() === '7861234567890' && !editing) {
        setRootError('El código 7861234567890 ya existe en otra variante de este tenant. (409 · errorId: ERR-COD-DUP)');
        return;
      }
      onSaved(editing ? 'Código actualizado.' : 'Código agregado.');
    }, 700);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(window.Crumbs, {
    items: [{
      label: 'Inicio'
    }, {
      label: 'Productos',
      onClick: () => onCancel('product')
    }, {
      label: variant.nombre,
      onClick: () => onCancel('variant')
    }, {
      label: editing ? 'Editar código' : 'Nuevo código'
    }]
  }), /*#__PURE__*/React.createElement(window.PageHeader, {
    title: editing ? 'Editar código de barras' : 'Nuevo código de barras',
    meta: /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'hsl(var(--text-tertiary))'
      }
    }, variant.nombre, " \xB7 ", product.nombre)
  }), /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    style: {
      maxWidth: 560
    }
  }, /*#__PURE__*/React.createElement(VCard, null, rootError && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(VAlert, {
    tone: "danger"
  }, /*#__PURE__*/React.createElement("b", null, "No se pudo guardar."), " ", rootError)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(VInput, {
    label: "C\xF3digo",
    value: codigo,
    onChange: e => setCodigo(e.target.value),
    error: errors.codigo,
    placeholder: "8 a 14 d\xEDgitos",
    helper: "Pruebe 7861234567890 para ver el conflicto de duplicado.",
    disabled: pending,
    inputMode: "numeric"
  }), /*#__PURE__*/React.createElement(VInput, {
    label: "Etiqueta",
    value: etiqueta,
    onChange: e => setEtiqueta(e.target.value),
    placeholder: "Ej.: EAN unidad, EAN caja",
    disabled: pending
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(VBtn, {
    variant: "primary",
    type: "submit",
    loading: pending
  }, editing ? 'Guardar cambios' : 'Agregar código'), /*#__PURE__*/React.createElement(VBtn, {
    variant: "ghost",
    type: "button",
    onClick: () => onCancel('variant'),
    disabled: pending
  }, "Cancelar"))));
}
Object.assign(window, {
  BarcodesSection,
  VariantDetail,
  VariantForm,
  BarcodeForm
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/commerce/variantes.jsx", error: String((e && e.message) || e) }); }

// ui_kits/core/screens.jsx
try { (() => {
/* Noctis — UI kit del NÚCLEO compartido. Pantallas que heredan ambas apps
   (commerce y backoffice): Login → Select-workspace → Shell (vista Productos).
   Consume los primitivos del sistema; no reimplementa ninguno. */
const NS = window.NoctisCommerceDesignSystem_4dfd35;
const {
  Button,
  Input,
  Wordmark,
  Shell,
  Table,
  Badge,
  MoneyDisplay,
  Tabs,
  Combobox,
  EmptyState
} = NS;

/* Acentos de tenant (par primary+foreground curado por el clamp: luminancia + croma + hue OKLCH ≥ 25° del -fg de cada semántico, ambos modos → ventanas 98–127/179–227/282–3).
   Chrome siempre neutro; el acento solo aparece en botón primario, nav activo, foco y selección. */
const TENANTS = {
  aguilar: {
    name: 'Librería Aguilar S.A.',
    initials: 'LA',
    role: 'Administrador · 5 sucursales',
    product: 'commerce',
    accent: '262 60% 42%',
    fg: '0 0% 100%'
  },
  sanrafael: {
    name: 'Farmacia San Rafael',
    initials: 'FS',
    role: 'Contador · multi-empresa',
    product: 'commerce',
    accent: '184 72% 26%',
    fg: '0 0% 100%'
  },
  noctis: {
    name: 'Noctis · Plataforma',
    initials: '◆',
    role: 'Platform Admin',
    product: 'backoffice',
    accent: null,
    fg: null
  }
};
function LoginScreen({
  onLogin
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100%',
      display: 'grid',
      placeItems: 'center',
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 'min(760px,100%)',
      border: '1px solid hsl(var(--border-subtle))',
      borderRadius: 16,
      overflow: 'hidden',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      padding: 28,
      background: 'linear-gradient(150deg,#000 0%,#1C1C1E 65%,#2C2C2E 100%)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(120% 90% at 90% -20%, rgba(255,255,255,.07), transparent 60%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    onDark: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 22px/1.2 var(--font-ui)',
      color: '#F5F5F7',
      marginTop: 18,
      letterSpacing: '-.01em'
    }
  }, "Inicie sesi\xF3n"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '8px 0 0',
      color: '#AEAEB2',
      fontSize: 13,
      maxWidth: '34ch'
    }
  }, "N\xFAcleo compartido entre commerce y backoffice. Negro y plata, sin editorial dentro de la herramienta."))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      background: 'hsl(var(--surface-raised))',
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Correo",
    defaultValue: "agustina@aguilar.ec"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Contrase\xF1a",
    type: "password",
    defaultValue: "claveSegura1"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    style: {
      width: '100%'
    },
    onClick: onLogin
  }, "Ingresar"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'hsl(var(--text-tertiary))'
    }
  }, "Hueco conocido: \xABolvid\xE9 mi clave\xBB no existe en el roadmap \u2014 se se\xF1ala, no se inventa."))));
}
function WorkspaceScreen({
  onPick
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100%',
      display: 'grid',
      placeItems: 'center',
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 'min(720px,100%)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    size: "sm"
  })), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: '600 24px/1.2 var(--font-ui)',
      letterSpacing: '-.015em',
      margin: '10px 0 2px'
    }
  }, "Elija un espacio de trabajo"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 18px',
      color: 'hsl(var(--text-secondary))',
      fontSize: 13
    }
  }, "Cards por acceso (tenant \xD7 producto)."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(210px,1fr))',
      gap: 12
    }
  }, Object.entries(TENANTS).map(([id, t]) => /*#__PURE__*/React.createElement("button", {
    key: id,
    onClick: () => onPick(id),
    style: {
      textAlign: 'left',
      border: '1px solid hsl(var(--border-strong))',
      borderRadius: 12,
      padding: 16,
      background: 'hsl(var(--surface-raised))',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 8,
      background: 'hsl(var(--text-primary))',
      color: 'hsl(var(--surface-raised))',
      display: 'grid',
      placeItems: 'center',
      fontWeight: 700,
      fontSize: 13
    }
  }, t.initials), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, t.product)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 14
    }
  }, t.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'hsl(var(--text-tertiary))'
    }
  }, t.role))))));
}
function ProductsScreen({
  tenant,
  mode,
  onToggleMode,
  onLogout
}) {
  const [tab, setTab] = React.useState('variantes');
  const [cliente, setCliente] = React.useState('');
  const rows = [{
    e: /*#__PURE__*/React.createElement(Badge, {
      tone: "success",
      dot: true
    }, "Activa"),
    p: 'Cuaderno universitario 100h',
    c: 'Papelería',
    s: '128',
    pr: /*#__PURE__*/React.createElement(MoneyDisplay, {
      value: 2.45,
      size: "sm"
    }),
    a: /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm"
    }, "Editar")
  }, {
    e: /*#__PURE__*/React.createElement(Badge, {
      tone: "success",
      dot: true
    }, "Activa"),
    p: 'Esferográfico azul BIC',
    c: 'Escritura',
    s: '1.204',
    pr: /*#__PURE__*/React.createElement(MoneyDisplay, {
      value: 0.35,
      size: "sm"
    }),
    a: /*#__PURE__*/React.createElement(Button, {
      variant: "danger-ghost",
      size: "sm"
    }, "Descontinuar")
  }, {
    e: /*#__PURE__*/React.createElement(Badge, {
      tone: "neutral"
    }, "Borrador"),
    p: 'Marcador permanente negro',
    c: 'Escritura',
    s: '0',
    pr: /*#__PURE__*/React.createElement(MoneyDisplay, {
      value: null,
      size: "sm"
    }),
    a: /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm"
    }, "Editar")
  }, {
    e: /*#__PURE__*/React.createElement(Badge, {
      tone: "info"
    }, "En tr\xE1nsito"),
    p: 'Resma A4 75g',
    c: 'Papelería',
    s: '340',
    pr: /*#__PURE__*/React.createElement(MoneyDisplay, {
      value: 4.9,
      size: "sm"
    }),
    a: /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm"
    }, "Editar")
  }];
  return /*#__PURE__*/React.createElement(Shell, {
    user: `agustina@aguilar.ec · ${tenant.name.split(' ')[0]} · ${tenant.product}`,
    mode: mode,
    onToggleMode: onToggleMode,
    onLogout: onLogout,
    tenantLogo: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 24,
        height: 24,
        borderRadius: 6,
        background: 'hsl(var(--text-primary))',
        color: 'hsl(var(--surface-raised))',
        display: 'grid',
        placeItems: 'center',
        fontWeight: 700,
        fontSize: 11
      }
    }, tenant.initials), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'hsl(var(--text-secondary))',
        fontSize: 12,
        fontWeight: 600
      }
    }, tenant.name)),
    nav: [{
      section: 'Vender',
      items: [{
        label: 'Productos',
        active: true,
        children: ['Madre', 'Variantes']
      }, {
        label: 'Precios'
      }, {
        label: 'Clientes'
      }, {
        label: 'POS',
        badge: 'Pronto',
        disabled: true
      }]
    }],
    footerLegal: "Librer\xEDa Aguilar S.A. \xB7 RUC 1790012345001"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'hsl(var(--text-tertiary))',
      marginBottom: 10
    }
  }, "Productos \u203A Variantes"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-end',
      marginBottom: 14,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '0 0 280px'
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      font: '500 13px/1.2 var(--font-ui)',
      marginBottom: 6
    }
  }, "Cliente"), /*#__PURE__*/React.createElement(Combobox, {
    value: cliente,
    onChange: setCliente,
    placeholder: "Seleccione un cliente\u2026",
    searchPlaceholder: "Buscar por nombre o identificaci\xF3n\u2026",
    options: [{
      value: 'cf',
      label: 'Consumidor Final',
      meta: '· un toque',
      accent: true
    }, {
      value: 'ag',
      label: 'Librería Aguilar S.A.',
      meta: 'RUC 1790012345001'
    }, {
      value: 'mm',
      label: 'María Méndez Rueda',
      meta: 'CI 1712345678'
    }]
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "primary"
  }, "Nuevo producto")), /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid hsl(var(--border-subtle))',
      borderRadius: 12,
      overflow: 'hidden',
      background: 'hsl(var(--surface-raised))',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    value: tab,
    onChange: setTab,
    tabs: [{
      id: 'variantes',
      label: 'Variantes'
    }, {
      id: 'codigos',
      label: 'Códigos de barras'
    }, {
      id: 'precios',
      label: 'Precios'
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 14,
      fontSize: 13,
      color: 'hsl(var(--text-secondary))'
    }
  }, "Secci\xF3n ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'hsl(var(--text-primary))'
    }
  }, tab), " \u2014 lista keyset con CTAs gated por permiso.")), /*#__PURE__*/React.createElement(Table, {
    columns: [{
      key: 'e',
      label: 'Estado'
    }, {
      key: 'p',
      label: 'Producto'
    }, {
      key: 'c',
      label: 'Categoría'
    }, {
      key: 's',
      label: 'Stock',
      numeric: true
    }, {
      key: 'pr',
      label: 'Precio',
      numeric: true
    }, {
      key: 'a',
      label: 'Acciones',
      align: 'right'
    }],
    rows: rows,
    footNote: "Orden cronol\xF3gico \xB7 sin n\xFAmeros de p\xE1gina, total ni salto",
    onLoadMore: () => {}
  }));
}
function CoreApp() {
  const [screen, setScreen] = React.useState('login');
  const [tenantId, setTenantId] = React.useState('aguilar');
  const [mode, setMode] = React.useState('light');
  const tenant = TENANTS[tenantId];
  const wrapperStyle = screen === 'products' && tenant.accent ? {
    '--brand-primary': tenant.accent,
    '--brand-foreground': tenant.fg
  } : {};
  return /*#__PURE__*/React.createElement("div", {
    "data-mode": mode,
    style: {
      minHeight: '100vh',
      background: 'hsl(var(--surface-base))',
      color: 'hsl(var(--text-primary))',
      fontFamily: 'var(--font-ui)',
      ...wrapperStyle
    }
  }, screen === 'login' && /*#__PURE__*/React.createElement(LoginScreen, {
    onLogin: () => setScreen('workspace')
  }), screen === 'workspace' && /*#__PURE__*/React.createElement(WorkspaceScreen, {
    onPick: id => {
      setTenantId(id);
      setScreen('products');
    }
  }), screen === 'products' && /*#__PURE__*/React.createElement(ProductsScreen, {
    tenant: tenant,
    mode: mode,
    onToggleMode: () => setMode(m => m === 'light' ? 'dark' : 'light'),
    onLogout: () => setScreen('login')
  }));
}
window.CoreApp = CoreApp;
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(CoreApp, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/core/screens.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.MoneyDisplay = __ds_scope.MoneyDisplay;

__ds_ns.Table = __ds_scope.Table;

__ds_ns.Timeline = __ds_scope.Timeline;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.EmptyState = __ds_scope.EmptyState;

__ds_ns.Skeleton = __ds_scope.Skeleton;

__ds_ns.Spinner = __ds_scope.Spinner;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Combobox = __ds_scope.Combobox;

__ds_ns.DatePicker = __ds_scope.DatePicker;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Shell = __ds_scope.Shell;

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.ModeToggle = __ds_scope.ModeToggle;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Sheet = __ds_scope.Sheet;

__ds_ns.NumericKeypad = __ds_scope.NumericKeypad;

})();
