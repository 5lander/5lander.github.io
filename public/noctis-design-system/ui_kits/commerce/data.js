/* Noctis · commerce — DATOS MOCK UNIFICADOS del prototipo (Fase 2). Un solo esquema:
   fusiona el mundo de SHELL+PRODUCTOS con el del AMBIENTE DE VENTA (POS/Caja). Expone
   window.CommerceData (tenants·perfiles·nav·catálogo madre) y window.PosData (catálogo
   vendible·carrito·clientes) SOBRE LAS MISMAS estructuras — el catálogo del POS se DERIVA
   de los productos madre: cero divergencia entre "lo que veo" y "lo que vendo".

   Ficción declarada: TODOS los RUC son 1111111111001 (dato obviamente ficticio; el cliente
   no debe creer que se muestran datos reales). Estados de producto: activo · borrador ·
   descontinuado SOLO — «en tránsito» es estado de INVENTARIO, jamás de producto.
   display_name en español siempre; el UUID/SKU nunca es el identificador visual principal. */
(function () {
  const RUC = '1111111111001';

  /* ── TENANTS (modelo único) ─────────────────────────────────────────────────
     Cada tenant lleva AMBAS formas: empresas[] (para CompanySelector del shell) Y
     cajero+sucursal+ivaDefault (para POS/Caja). El acento viaja como PAR
     {primary, foreground} curado por el clamp de 3 dim (luminancia·croma·hue OKLCH),
     acento quirúrgico en 4 puntos; el resto del chrome es neutro de casa. Aguilar
     mantiene sus 2 empresas. */
  const TENANTS = {
    aguilar: {
      id: 'aguilar', name: 'Librería Aguilar', initials: 'LA', product: 'commerce',
      accent: '262 60% 42%', fg: '0 0% 100%', accentName: 'Violeta corporativo', ivaDefault: 15,
      sucursal: 'Matriz — Av. Amazonas', wsRole: 'Administrador · multiempresa',
      cajero: { nombre: 'Agustina Cando', rol: 'Cajera' },
      empresas: [
        { id: 'e1', name: 'Librería Aguilar S.A.', legal: 'Librería Aguilar S.A. · RUC ' + RUC },
        { id: 'e2', name: 'Distribuidora Aguilar Cía. Ltda.', legal: 'Distribuidora Aguilar Cía. Ltda. · RUC ' + RUC },
      ],
    },
    sanrafael: {
      id: 'sanrafael', name: 'Farmacia San Rafael', initials: 'FS', product: 'commerce',
      accent: '184 72% 26%', fg: '0 0% 100%', accentName: 'Teal salud', ivaDefault: 15,
      sucursal: 'Local Centro — Guayaquil', wsRole: 'Cajero · una empresa',
      cajero: { nombre: 'Marcos Peñafiel', rol: 'Cajero' },
      empresas: [
        { id: 'e1', name: 'Farmacia San Rafael', legal: 'Farmacia San Rafael · RUC ' + RUC },
      ],
    },
    rincon: {
      id: 'rincon', name: 'El Rincón Ferretero', initials: 'RF', product: 'commerce',
      accent: '54 85% 46%', fg: '240 6% 12%', accentName: 'Oro (foreground near-black)', ivaDefault: 15,
      sucursal: 'Sucursal Sur — Quito', wsRole: 'Contador · 2 sucursales',
      cajero: { nombre: 'Luis Tenesaca', rol: 'Cajero' },
      empresas: [
        { id: 'e1', name: 'El Rincón Ferretero — Matriz', legal: 'El Rincón Ferretero Cía. Ltda. · RUC ' + RUC },
        { id: 'e2', name: 'El Rincón — Sucursal Sur', legal: 'El Rincón Ferretero Cía. Ltda. · RUC ' + RUC },
      ],
    },
  };
  Object.values(TENANTS).forEach((t) => { t.empresa = t.empresas[0].name; t.legal = t.empresas[0].legal; });

  /* ── PERFILES (uno solo, con caja/conta.* adentro) ──────────────────────────
     La cajera suma solo 'caja' (verá únicamente Cierre de caja); admin/contador ven
     TODO Contabilidad. El sidebar muestra un módulo con ≥1 permiso; las CTA se ocultan. */
  const PROFILES = {
    admin:     { label: 'Administrador', email: 'agustina@aguilar.ec', perms: ['productos.read', 'productos.write', 'categorias', 'inventario', 'compras', 'precios', 'facturacion', 'clientes', 'ventas', 'pos', 'reportes', 'config.empresa', 'config.usuarios', 'caja', 'conta.balance', 'conta.asientos', 'conta.mayor'] },
    bodeguero: { label: 'Bodeguero',     email: 'bodega@aguilar.ec',   perms: ['productos.read', 'productos.write', 'categorias', 'inventario', 'compras'] },
    vendedor:  { label: 'Vendedor',      email: 'ventas@aguilar.ec',   perms: ['productos.read', 'ventas', 'pos', 'clientes'] },
    cajero:    { label: 'Cajero',        email: 'caja@aguilar.ec',     perms: ['ventas', 'pos', 'caja'] },
    contador:  { label: 'Contador',      email: 'contable@aguilar.ec', perms: ['precios', 'facturacion', 'reportes', 'clientes', 'caja', 'conta.balance', 'conta.asientos', 'conta.mayor'] },
  };

  /* ── NAV del corte «Shell + Productos» (index.html) ─────────────────────────
     La SPA unificada (demo.html) define su PROPIO nav con lo repuesto (POS, Contabilidad).
     Este queda para el card acotado histórico. */
  const NAV = [
    { section: 'Vender', items: [
      { id: 'pos', label: 'POS', perm: 'pos', built: false },
      { id: 'ventas', label: 'Ventas', perm: 'ventas', built: false },
    ] },
    { section: 'Catálogo', items: [
      { id: 'productos', label: 'Productos', perm: 'productos.read', built: true },
      { id: 'categorias', label: 'Categorías', perm: 'categorias', built: false },
    ] },
    { section: 'Suministro', items: [
      { id: 'inventario', label: 'Inventario', perm: 'inventario', built: false },
      { id: 'compras', label: 'Compras', perm: 'compras', built: false },
    ] },
    { section: 'Dinero', items: [
      { id: 'precios', label: 'Precios', perm: 'precios', built: false },
      { id: 'facturacion', label: 'Facturación', perm: 'facturacion', built: false },
      { id: 'clientes', label: 'Clientes', perm: 'clientes', built: false },
    ] },
    { section: 'Gestión', items: [
      { id: 'reportes', label: 'Reportes', perm: 'reportes', built: false },
    ] },
    { section: 'Configuración', items: [
      { id: 'config.empresa', label: 'Empresa', perm: 'config.empresa', built: false },
      { id: 'config.usuarios', label: 'Usuarios', perm: 'config.usuarios', built: false },
    ] },
  ];

  const CATEGORIAS = [
    { value: 'c-pap', label: 'Papelería', meta: '18 productos' },
    { value: 'c-esc', label: 'Escritura', meta: '42 productos' },
    { value: 'c-ofi', label: 'Oficina', meta: '9 productos' },
    { value: 'c-esc2', label: 'Escolar', meta: '31 productos' },
    { value: 'c-art', label: 'Arte y manualidades', meta: '12 productos' },
    { value: 'c-tec', label: 'Tecnología', meta: '7 productos' },
  ];

  /* ── PRODUCTOS madre (UNIVERSO ÚNICO) ───────────────────────────────────────
     estado: activo | borrador | descontinuado (terminal). Solo los ACTIVOS son
     vendibles en el POS (el catálogo vendible se deriva de acá). */
  const PRODUCTS = [
    { id: 'p1', nombre: 'Cuaderno universitario 100 hojas', categoria: 'c-pap', categoriaLabel: 'Papelería', iva: '15', estado: 'activo', creado: '04/03/2026', descripcion: 'Cuaderno cosido, cuadros 1 cm, tapa dura.' },
    { id: 'p2', nombre: 'Esferográfico punta media', categoria: 'c-esc', categoriaLabel: 'Escritura', iva: '15', estado: 'activo', creado: '11/02/2026', descripcion: 'Tinta de secado rápido, cuerpo hexagonal.' },
    { id: 'p3', nombre: 'Marcador permanente negro', categoria: 'c-esc', categoriaLabel: 'Escritura', iva: '15', estado: 'activo', creado: '19/06/2026', descripcion: 'Punta biselada, tinta base alcohol.' },
    { id: 'p4', nombre: 'Resma papel bond A4 75 g', categoria: 'c-pap', categoriaLabel: 'Papelería', iva: '15', estado: 'activo', creado: '28/05/2026', descripcion: '500 hojas, blancura 96%.' },
    { id: 'p5', nombre: 'Carpeta archivador palanca oficio', categoria: 'c-ofi', categoriaLabel: 'Oficina', iva: '15', estado: 'activo', creado: '02/01/2026', descripcion: 'Lomo 7 cm, cartón forrado.' },
    { id: 'p6', nombre: 'Caja de grapas 26/6', categoria: 'c-ofi', categoriaLabel: 'Oficina', iva: '15', estado: 'descontinuado', creado: '15/11/2025', descripcion: 'Caja x 5.000 unidades.' },
    { id: 'p7', nombre: 'Set 12 lápices de colores', categoria: 'c-art', categoriaLabel: 'Arte y manualidades', iva: '15', estado: 'activo', creado: '21/04/2026', descripcion: 'Mina resistente, colores vivos.' },
    { id: 'p8', nombre: 'Corrector líquido 20 ml', categoria: 'c-esc', categoriaLabel: 'Escritura', iva: '15', estado: 'activo', creado: '09/03/2026', descripcion: 'Aplicador de punta metálica.' },
    { id: 'p9', nombre: 'Grapadora metálica media', categoria: 'c-ofi', categoriaLabel: 'Oficina', iva: '15', estado: 'borrador', creado: '01/07/2026', descripcion: '' },
  ];

  /* ── VARIANTES por producto ─────────────────────────────────────────────────
     Cada variante lleva su presentación de catálogo (nombre·sku·atributos·creado)
     Y sus datos de venta (precio number|null · barcode primario · posLabel corto).
     precio null = la variante NO tiene precio en la lista aplicable (SIN PRECIO, que
     bloquea la venta): null NUNCA es $0. */
  const VARIANTS = {
    p1: [
      { id: 'v1', nombre: 'Cuadros', sku: 'CUA-100-CUAD', atributos: 'Rayado: cuadros · Color tapa: azul', creado: '04/03/2026', precio: 2.15, barcode: '7861234567890', posLabel: 'Cuadros · tapa azul' },
      { id: 'v2', nombre: 'Líneas', sku: 'CUA-100-LIN', atributos: 'Rayado: líneas · Color tapa: rojo', creado: '04/03/2026', precio: 2.15, barcode: '7861234500017', posLabel: 'Líneas · tapa roja' },
      { id: 'v3', nombre: 'Cuadros grande', sku: 'CUA-100-CUAD-G', atributos: 'Rayado: cuadros 1 cm · Color tapa: verde', creado: '06/03/2026', precio: 2.60, barcode: '7861234500024', posLabel: 'Cuadros grande · tapa verde' },
    ],
    p2: [
      { id: 'v4', nombre: 'Azul', sku: 'ESF-PM-AZ', atributos: 'Color tinta: azul', creado: '11/02/2026', precio: 0.45, barcode: '7862220001114', posLabel: 'Azul' },
      { id: 'v5', nombre: 'Negro', sku: 'ESF-PM-NE', atributos: 'Color tinta: negro', creado: '11/02/2026', precio: 0.45, barcode: '7862220001121', posLabel: 'Negro' },
    ],
    p3: [
      { id: 'v6', nombre: 'Negro', sku: 'MPE-NE', atributos: 'Color tinta: negro', creado: '19/06/2026', precio: null, barcode: '7864440012306', posLabel: 'Negro' },
    ],
    p4: [
      { id: 'v7', nombre: '500 hojas', sku: 'RES-A4-75', atributos: 'Presentación: resma 500 · Blancura 96%', creado: '28/05/2026', precio: 4.80, barcode: '7863330045008', posLabel: '500 hojas · blancura 96%' },
    ],
    p5: [
      { id: 'v8', nombre: 'Oficio', sku: 'CAR-PAL-OF', atributos: 'Tamaño: oficio · Lomo: 7 cm', creado: '02/01/2026', precio: 2.60, barcode: '7867770021109', posLabel: 'Oficio · lomo 7 cm' },
    ],
    p7: [
      { id: 'v9', nombre: 'Estuche cartón', sku: 'LAP-12-CART', atributos: 'Empaque: cartón', creado: '21/04/2026', precio: 3.90, barcode: '7865550098702', posLabel: 'Estuche cartón' },
    ],
    p8: [
      { id: 'v10', nombre: 'Punta metálica', sku: 'COR-20', atributos: 'Aplicador: punta metálica', creado: '09/03/2026', precio: 1.25, barcode: '7866660033401', posLabel: 'Punta metálica' },
    ],
    p9: [
      { id: 'v12', nombre: '20 hojas', sku: 'GRA-MET-M', atributos: 'Capacidad: 20 hojas', creado: '01/07/2026', precio: 5.35, barcode: '7868880076503', posLabel: 'Media · 20 hojas' },
    ],
  };

  /* ── CÓDIGOS DE BARRAS por variante. primary = código primario (coincide con el
     barcode que vende el POS). */
  const BARCODES = {
    v1: [
      { id: 'b1', codigo: '7861234567890', etiqueta: 'EAN caja', primary: true },
      { id: 'b2', codigo: '7861234567906', etiqueta: 'EAN unidad', primary: false },
    ],
    v4: [
      { id: 'b3', codigo: '7862220001114', etiqueta: 'EAN unidad', primary: true },
    ],
    v5: [],
  };

  const IVA_OPTIONS = [
    { value: '0', label: 'IVA 0%' },
    { value: '5', label: 'IVA 5%' },
    { value: '15', label: 'IVA 15%' },
  ];

  const ESTADO_META = {
    activo:        { tone: 'success', dot: true, label: 'Activo' },
    borrador:      { tone: 'neutral', dot: false, label: 'Borrador' },
    descontinuado: { tone: 'terminal', dot: false, label: 'Descontinuado' },
  };

  window.CommerceData = { TENANTS, PROFILES, NAV, CATEGORIAS, PRODUCTS, VARIANTS, BARCODES, IVA_OPTIONS, ESTADO_META };

  /* ═══ POS — DERIVADO del universo único ══════════════════════════════════════
     El catálogo vendible se ARMA a partir de los productos madre ACTIVOS y sus
     variantes: el POS vende exactamente lo que el módulo Productos muestra. Los
     borrador/descontinuado no son vendibles (no aparecen en la búsqueda del POS). */
  /* IVA a nivel NEGOCIO (config de empresa/tenant), no por producto: el POS aplica esta
     tarifa única a las líneas de catálogo. El IVA dejó de ser atributo por producto. */
  const IVA_NEGOCIO = 15;
  const CATALOG = [];
  PRODUCTS.forEach((p) => {
    if (p.estado !== 'activo') return;
    (VARIANTS[p.id] || []).forEach((v) => {
      CATALOG.push({ id: v.id, producto: p.nombre, variante: v.posLabel || v.nombre, sku: v.sku, barcode: v.barcode, precio: v.precio, iva: IVA_NEGOCIO });
    });
  });

  const IVA_TARIFFS = [0, 5, 15];

  /* Carrito inicial de demo. Incluye a propósito una línea SIN PRECIO (v6) para mostrar
     el estado bloqueante; el orquestador la filtra al arrancar. */
  const INITIAL_CART = [
    { key: 'l1', ref: 'v1', qty: 2 },
    { key: 'l2', ref: 'v3', qty: 3 },
    { key: 'l3', ref: 'v6', qty: 1 },
  ];

  const CONSUMIDOR_FINAL = { id: 'cf', nombre: 'Consumidor Final', doc: '9999999999999', docTipo: 'Cédula', final: true };

  /* Clientes registrados — FUENTE ÚNICA de la cartera: la comparten el picker del POS y
     el módulo Clientes. Ficha completa (celular · correo · dirección) que captura el alta
     compartida; datos de mentira pero coherentes es-EC. RUC ficticio 1111111111001 por
     convención del archivo; `activo` alimenta el estado activo/inactivo del módulo. */
  const CLIENTES = [
    { id: 'c1', nombre: 'María Fernanda Loor', doc: '1312445566', docTipo: 'Cédula', celular: '0987654321', correo: 'mf.loor@correo.ec', direccion: 'Av. 4 de Noviembre y Malecón, Manta', activo: true },
    { id: 'c2', nombre: 'Comercial El Sol Cía. Ltda.', doc: '1111111111001', docTipo: 'RUC', celular: '0991234567', correo: 'ventas@elsol.com.ec', direccion: 'Av. 9 de Octubre 1234 y Boyacá, Guayaquil', activo: true },
    { id: 'c3', nombre: 'Juan Carlos Vera', doc: '0912233445', docTipo: 'Cédula', celular: '0962233445', correo: 'jc.vera@correo.ec', direccion: 'Cdla. La Alborada, Mz. 5 Villa 12, Guayaquil', activo: true },
    { id: 'c4', nombre: 'Distribuidora Andina S.A.', doc: '1111111111001', docTipo: 'RUC', celular: '0993456789', correo: 'compras@andina.com.ec', direccion: 'Av. Eloy Alfaro N34-120 y Portugal, Quito', activo: true },
    { id: 'c5', nombre: 'Rosa Elena Chávez', doc: '1719988776', docTipo: 'Cédula', celular: '0984567890', correo: 're.chavez@correo.ec', direccion: 'Av. América y Colón, Quito', activo: true },
    { id: 'c6', nombre: 'Papelería Central Cía. Ltda.', doc: '1111111111001', docTipo: 'RUC', celular: '0972345678', correo: 'gerencia@papeleriacentral.ec', direccion: 'Rocafuerte 456 y Sucre, Cuenca', activo: false },
    { id: 'c7', nombre: 'Diego Armando Sánchez', doc: '0104556677', docTipo: 'Cédula', celular: '0995678901', correo: 'da.sanchez@correo.ec', direccion: 'Av. Ordóñez Lasso y Los Cerezos, Cuenca', activo: true },
    { id: 'c8', nombre: 'Andrea Paola Zambrano', doc: '1315667788', docTipo: 'Cédula', celular: '0961122334', correo: 'ap.zambrano@correo.ec', direccion: 'Ciudadela Universitaria, Portoviejo', activo: true },
  ];

  const byId = (id) => CATALOG.find((v) => v.id === id);

  const lineView = (line) => {
    if (line.generic) return { generic: true, desc: line.desc, sub: null, sku: null, barcode: null, precio: line.precio, iva: line.iva, qty: line.qty };
    const v = byId(line.ref);
    return { generic: false, desc: v.variante, sub: v.producto, sku: v.sku, barcode: v.barcode, precio: v.precio, iva: v.iva, qty: line.qty };
  };

  const needsPrice = (view) => view.precio == null || view.precio === 0;

  window.PosData = { TENANTS, CATALOG, INITIAL_CART, CONSUMIDOR_FINAL, CLIENTES, IVA_TARIFFS, byId, lineView, needsPrice };
})();
