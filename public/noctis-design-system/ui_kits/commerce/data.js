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
      id: 'aguilar', name: 'Librería Aguilar', legal: 'Librería Aguilar S.A. · RUC 1790012345001',
      initials: 'LA', product: 'commerce',
      // violeta (hue OKLCH 293°, Δ36° de info/link): luminancia < 0,18 → foreground near-white
      accent: '262 60% 42%', fg: '0 0% 100%', accentName: 'Violeta corporativo',
      empresas: [
        { id: 'e1', name: 'Librería Aguilar S.A.', legal: 'Librería Aguilar S.A. · RUC 1790012345001' },
        { id: 'e2', name: 'Distribuidora Aguilar Cía. Ltda.', legal: 'Distribuidora Aguilar Cía. Ltda. · RUC 1791122334001' },
      ],
    },
    sanrafael: {
      id: 'sanrafael', name: 'Farmacia San Rafael', legal: 'Farmacia San Rafael · RUC 0990554433001',
      initials: 'FS', product: 'commerce',
      // teal (hue OKLCH 202°, Δ48° de éxito): luminancia < 0,18 → foreground near-white
      accent: '184 72% 26%', fg: '0 0% 100%', accentName: 'Teal salud',
      empresas: [{ id: 'e1', name: 'Farmacia San Rafael', legal: 'Farmacia San Rafael · RUC 0990554433001' }],
    },
    rincon: {
      id: 'rincon', name: 'El Rincón Ferretero', legal: 'El Rincón Ferretero Cía. Ltda. · RUC 1792233445001',
      initials: 'RF', product: 'commerce',
      // oro (hue OKLCH 102°, Δ29° de atención en ambos modos): luminancia >= 0,18 → foreground near-BLACK (el par lo demuestra)
      accent: '54 85% 46%', fg: '240 6% 12%', accentName: 'Oro (foreground near-black)',
      empresas: [
        { id: 'e1', name: 'El Rincón Ferretero — Matriz', legal: 'El Rincón Ferretero Cía. Ltda. · RUC 1792233445001' },
        { id: 'e2', name: 'El Rincón — Sucursal Sur', legal: 'El Rincón Ferretero Cía. Ltda. · RUC 1792233445001' },
      ],
    },
  };

  /* Perfiles y sus permisos EFECTIVOS. El sidebar muestra un módulo solo si el
     usuario tiene >= 1 permiso bajo él; las CTA se ocultan (no se deshabilitan). */
  const PROFILES = {
    admin:     { label: 'Administrador', email: 'agustina@aguilar.ec', perms: ['productos.read', 'productos.write', 'categorias', 'inventario', 'compras', 'precios', 'facturacion', 'clientes', 'ventas', 'pos', 'reportes', 'config.empresa', 'config.usuarios'] },
    bodeguero: { label: 'Bodeguero',     email: 'bodega@aguilar.ec',   perms: ['productos.read', 'productos.write', 'categorias', 'inventario', 'compras'] },
    vendedor:  { label: 'Vendedor',      email: 'ventas@aguilar.ec',   perms: ['productos.read', 'ventas', 'pos', 'clientes'] },
    cajero:    { label: 'Cajero',        email: 'caja@aguilar.ec',     perms: ['ventas', 'pos'] },
    contador:  { label: 'Contador',      email: 'contable@aguilar.ec', perms: ['precios', 'facturacion', 'reportes', 'clientes'] },
  };

  /* Estructura de navegación por afinidad. `built` marca lo realmente construido
     en este corte (solo Productos); el resto es visible-pero-Pronto si hay permiso. */
  const NAV = [
    { section: 'Vender', items: [
      { id: 'pos', label: 'POS', perm: 'pos', built: false },
      { id: 'ventas', label: 'Ventas', perm: 'ventas', built: false },
    ] },
    { section: 'Catálogo', items: [
      { id: 'productos', label: 'Productos', perm: 'productos.read', built: true, children: [
        { id: 'productos', label: 'Todos' },
      ] },
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

  /* Productos (madre). estado: activo | borrador | descontinuado (terminal).
     'in_transit' es un estado de TRANSFERENCIA DE INVENTARIO (otro módulo) — nunca de producto. */
  const PRODUCTS = [
    { id: 'p1', nombre: 'Cuaderno universitario 100 hojas', categoria: 'c-pap', categoriaLabel: 'Papelería', iva: '15', estado: 'activo', creado: '04/03/2026', descripcion: 'Cuaderno cosido, cuadros 1 cm, tapa dura.' },
    { id: 'p2', nombre: 'Esferográfico azul punta media', categoria: 'c-esc', categoriaLabel: 'Escritura', iva: '15', estado: 'activo', creado: '11/02/2026', descripcion: 'Tinta de secado rápido, cuerpo hexagonal.' },
    { id: 'p3', nombre: 'Marcador permanente negro', categoria: 'c-esc', categoriaLabel: 'Escritura', iva: '15', estado: 'borrador', creado: '19/06/2026', descripcion: '' },
    { id: 'p4', nombre: 'Resma papel bond A4 75 g', categoria: 'c-pap', categoriaLabel: 'Papelería', iva: '15', estado: 'activo', creado: '28/05/2026', descripcion: '500 hojas, blancura 96%.' },
    { id: 'p5', nombre: 'Carpeta archivador palanca oficio', categoria: 'c-ofi', categoriaLabel: 'Oficina', iva: '15', estado: 'activo', creado: '02/01/2026', descripcion: 'Lomo 7 cm, cartón forrado.' },
    { id: 'p6', nombre: 'Caja de grapas 26/6', categoria: 'c-ofi', categoriaLabel: 'Oficina', iva: '15', estado: 'descontinuado', creado: '15/11/2025', descripcion: 'Caja x 5.000 unidades.' },
    { id: 'p7', nombre: 'Set 12 lápices de colores', categoria: 'c-art', categoriaLabel: 'Arte y manualidades', iva: '15', estado: 'activo', creado: '21/04/2026', descripcion: 'Mina resistente, colores vivos.' },
    { id: 'p8', nombre: 'Corrector líquido 20 ml', categoria: 'c-esc', categoriaLabel: 'Escritura', iva: '15', estado: 'activo', creado: '09/03/2026', descripcion: 'Aplicador de punta metálica.' },
  ];

  /* Variantes por producto (madre). */
  const VARIANTS = {
    p1: [
      { id: 'v1', nombre: 'Cuadros', sku: 'CUA-100-CUAD', atributos: 'Rayado: cuadros · Color tapa: azul', creado: '04/03/2026' },
      { id: 'v2', nombre: 'Líneas', sku: 'CUA-100-LIN', atributos: 'Rayado: líneas · Color tapa: rojo', creado: '04/03/2026' },
      { id: 'v3', nombre: 'Cuadros grande', sku: 'CUA-100-CUAD-G', atributos: 'Rayado: cuadros 1 cm · Color tapa: verde', creado: '06/03/2026' },
    ],
    p2: [
      { id: 'v4', nombre: 'Azul', sku: 'ESF-PM-AZ', atributos: 'Color tinta: azul', creado: '11/02/2026' },
      { id: 'v5', nombre: 'Negro', sku: 'ESF-PM-NE', atributos: 'Color tinta: negro', creado: '11/02/2026' },
    ],
    p7: [
      { id: 'v6', nombre: 'Estuche cartón', sku: 'LAP-12-CART', atributos: 'Empaque: cartón', creado: '21/04/2026' },
    ],
  };

  /* Códigos de barras por variante. primary = código primario. */
  const BARCODES = {
    v1: [
      { id: 'b1', codigo: '7861234567890', etiqueta: 'EAN caja', primary: true },
      { id: 'b2', codigo: '7861234500017', etiqueta: 'EAN unidad', primary: false },
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
})();
