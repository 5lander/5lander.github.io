/* Noctis · backoffice — datos mock del prototipo (platform-admin).
   display_name en español SIEMPRE; el path de máquina (sales.invoices.create) es
   artefacto de log/debug y NUNCA se muestra en la UI — vive acá solo como dato.
   Formatos es-EC: DD/MM/YYYY, $1.234,56. Sin emoji. */
(function () {
  /* ── Identidad del usuario de plataforma ─────────────────────────────────
     Personal de Noctis, no de la PYME. Sus acciones afectan a TODOS los tenants. */
  const STAFF = { name: 'Operaciones de plataforma', email: 'operaciones@noctis.ec', rol: 'Administrador de plataforma' };

  /* ── Navegación FIJA (no por permisos, a diferencia de commerce) ──────────
     Sin CompanySelector, sin logo de tenant, sin slot de sucursal — son conceptos
     de commerce. Construido en este corte: Tenants + Catálogo. El resto usa el
     MISMO lenguaje de estado de módulo que commerce (chip "Pronto", informativo). */
  const NAV = [
    { section: 'Plataforma', items: [
      { id: 'tenants', label: 'Tenants', icon: 'building-2', built: true },
      { id: 'catalogo', label: 'Catálogo de módulos', icon: 'package', built: true },
    ] },
    { section: 'Operación', items: [
      { id: 'staff', label: 'Usuarios de plataforma', icon: 'shield-check', built: false },
      { id: 'auditoria', label: 'Auditoría', icon: 'file-text', built: false },
    ] },
  ];

  /* ── Estado de un tenant (vocabulario del negocio, StatusPill) ─────────────
     'cancelado' es terminal. 'suspendido' deja a la PYME sin poder trabajar. */
  const TENANT_ESTADO = {
    activo:     { tone: 'success',  dot: true,  label: 'Activo' },
    prueba:     { tone: 'info',     dot: true,  label: 'En prueba' },
    moroso:     { tone: 'warning',  dot: true,  label: 'Con mora' },
    suspendido: { tone: 'danger',   dot: true,  label: 'Suspendido' },
    cancelado:  { tone: 'terminal', dot: false, label: 'Cancelado' },
  };

  /* ── Lista de tenants (las PYMEs clientes) ────────────────────────────────
     razón social = display_name; el RUC es dato del negocio (no un UUID de máquina). */
  const TENANTS = [
    { id: 't1',  nombre: 'Librería Aguilar S.A.',            ruc: '1790012345001', plan: 'Comercio Plus',   estado: 'activo',     sucursales: 5, usuarios: 23, alta: '04/03/2024', producto: 'commerce' },
    { id: 't2',  nombre: 'Farmacia San Rafael',              ruc: '0990554433001', plan: 'Comercio',        estado: 'activo',     sucursales: 2, usuarios: 11, alta: '19/07/2024', producto: 'commerce' },
    { id: 't3',  nombre: 'El Rincón Ferretero Cía. Ltda.',   ruc: '1792233445001', plan: 'Comercio Plus',   estado: 'moroso',     sucursales: 3, usuarios: 14, alta: '28/05/2024', producto: 'commerce' },
    { id: 't4',  nombre: 'Panadería La Espiga',              ruc: '0925667788001', plan: 'Comercio',        estado: 'prueba',     sucursales: 1, usuarios: 3,  alta: '02/07/2026', producto: 'commerce' },
    { id: 't5',  nombre: 'Distribuidora Andina',             ruc: '1791122334001', plan: 'Comercio Plus',   estado: 'activo',     sucursales: 8, usuarios: 41, alta: '11/01/2024', producto: 'commerce' },
    { id: 't6',  nombre: 'Óptica Visión Clara',              ruc: '1710099887001', plan: 'Comercio',        estado: 'suspendido', sucursales: 1, usuarios: 5,  alta: '30/09/2025', producto: 'commerce' },
    { id: 't7',  nombre: 'Ferreterías del Austro S.A.',      ruc: '0190334455001', plan: 'Comercio Plus',   estado: 'activo',     sucursales: 6, usuarios: 29, alta: '15/11/2024', producto: 'commerce' },
    { id: 't8',  nombre: 'Comercial Pichincha',              ruc: '1793344556001', plan: 'Comercio',        estado: 'cancelado',  sucursales: 0, usuarios: 0,  alta: '08/02/2023', producto: 'commerce' },
    { id: 't9',  nombre: 'Boutique Almendra',                ruc: '0955778899001', plan: 'Comercio',        estado: 'activo',     sucursales: 2, usuarios: 8,  alta: '21/04/2025', producto: 'commerce' },
    { id: 't10', nombre: 'Agroinsumos del Valle',            ruc: '1712344556001', plan: 'Comercio Plus',   estado: 'activo',     sucursales: 4, usuarios: 19, alta: '03/06/2025', producto: 'commerce' },
    { id: 't11', nombre: 'Repuestos El Motor',               ruc: '1790556677001', plan: 'Comercio',        estado: 'moroso',     sucursales: 2, usuarios: 7,  alta: '17/08/2025', producto: 'commerce' },
    { id: 't12', nombre: 'Cafetería Origen',                 ruc: '1715667788001', plan: 'Comercio',        estado: 'prueba',     sucursales: 1, usuarios: 2,  alta: '12/07/2026', producto: 'commerce' },
  ];

  /* ── Catálogo de módulos/submódulos/acciones ──────────────────────────────
     APPEND-ONLY: el status es 'active' | 'deprecated'; NO existe borrado físico,
     por lo tanto la UI no ofrece ninguna afordancia de eliminar (ver catalogo.jsx).
     `path` es el identificador de máquina — NUNCA se muestra en la UI. Cada módulo
     y submódulo tiene su display_name en español.
     ADMINISTRATION es intrínseco: siempre disponible, nunca entitlement-gated. */
  const MODULES = [
    { id: 'administracion', display: 'Administración', path: 'administration', intrinsic: true, status: 'active',
      descripcion: 'Módulo intrínseco de toda cuenta: gestión de usuarios, empresa y sucursales. No se habilita ni deshabilita.',
      submodulos: [
        { id: 'adm_usuarios', display: 'Usuarios y roles', path: 'administration.users', status: 'active', acciones: [
          { display: 'Ver', path: 'administration.users.read', status: 'active' },
          { display: 'Invitar', path: 'administration.users.invite', status: 'active' },
          { display: 'Editar rol', path: 'administration.users.assign_role', status: 'active' },
        ] },
        { id: 'adm_empresa', display: 'Datos de empresa', path: 'administration.company', status: 'active', acciones: [
          { display: 'Ver', path: 'administration.company.read', status: 'active' },
          { display: 'Editar', path: 'administration.company.update', status: 'active' },
        ] },
        { id: 'adm_sucursales', display: 'Sucursales', path: 'administration.branches', status: 'active', acciones: [
          { display: 'Ver', path: 'administration.branches.read', status: 'active' },
          { display: 'Crear', path: 'administration.branches.create', status: 'active' },
        ] },
      ] },
    { id: 'productos', display: 'Productos', path: 'products', status: 'active',
      descripcion: 'Catálogo de productos madre, variantes y códigos de barras.',
      submodulos: [
        { id: 'prod_catalogo', display: 'Catálogo', path: 'products.catalog', status: 'active', acciones: [
          { display: 'Ver', path: 'products.catalog.read', status: 'active' },
          { display: 'Crear', path: 'products.catalog.create', status: 'active' },
          { display: 'Editar', path: 'products.catalog.update', status: 'active' },
          { display: 'Descontinuar', path: 'products.catalog.discontinue', status: 'active' },
        ] },
        { id: 'prod_variantes', display: 'Variantes', path: 'products.variants', status: 'active', acciones: [
          { display: 'Ver', path: 'products.variants.read', status: 'active' },
          { display: 'Crear', path: 'products.variants.create', status: 'active' },
        ] },
        { id: 'prod_categorias', display: 'Categorías', path: 'products.categories', status: 'active', acciones: [
          { display: 'Ver', path: 'products.categories.read', status: 'active' },
          { display: 'Crear', path: 'products.categories.create', status: 'active' },
        ] },
        { id: 'prod_codigos', display: 'Códigos de barras', path: 'products.barcodes', status: 'active', acciones: [
          { display: 'Ver', path: 'products.barcodes.read', status: 'active' },
          { display: 'Fijar primario', path: 'products.barcodes.set_primary', status: 'active' },
        ] },
      ] },
    { id: 'ventas', display: 'Ventas', path: 'sales', status: 'active',
      descripcion: 'Facturas, notas de crédito y cotizaciones.',
      submodulos: [
        { id: 'ven_facturas', display: 'Facturas', path: 'sales.invoices', status: 'active', acciones: [
          { display: 'Ver', path: 'sales.invoices.read', status: 'active' },
          { display: 'Crear', path: 'sales.invoices.create', status: 'active' },
          { display: 'Anular', path: 'sales.invoices.void', status: 'active' },
        ] },
        { id: 'ven_notas', display: 'Notas de crédito', path: 'sales.credit_notes', status: 'active', acciones: [
          { display: 'Ver', path: 'sales.credit_notes.read', status: 'active' },
          { display: 'Crear', path: 'sales.credit_notes.create', status: 'active' },
        ] },
        { id: 'ven_cotizaciones', display: 'Cotizaciones', path: 'sales.quotes', status: 'deprecated', acciones: [
          { display: 'Ver', path: 'sales.quotes.read', status: 'deprecated' },
          { display: 'Crear', path: 'sales.quotes.create', status: 'deprecated' },
        ] },
      ] },
    { id: 'inventario', display: 'Inventario', path: 'inventory', status: 'active',
      descripcion: 'Kardex, transferencias entre bodegas y ajustes.',
      submodulos: [
        { id: 'inv_kardex', display: 'Kardex', path: 'inventory.kardex', status: 'active', acciones: [
          { display: 'Ver', path: 'inventory.kardex.read', status: 'active' },
        ] },
        { id: 'inv_transferencias', display: 'Transferencias', path: 'inventory.transfers', status: 'active', acciones: [
          { display: 'Ver', path: 'inventory.transfers.read', status: 'active' },
          { display: 'Crear', path: 'inventory.transfers.create', status: 'active' },
        ] },
        { id: 'inv_ajustes', display: 'Ajustes', path: 'inventory.adjustments', status: 'active', acciones: [
          { display: 'Ver', path: 'inventory.adjustments.read', status: 'active' },
          { display: 'Aprobar', path: 'inventory.adjustments.approve', status: 'active' },
        ] },
      ] },
    { id: 'compras', display: 'Compras', path: 'purchasing', status: 'active',
      descripcion: 'Órdenes de compra y recepciones de mercadería.',
      submodulos: [
        { id: 'com_ordenes', display: 'Órdenes de compra', path: 'purchasing.orders', status: 'active', acciones: [
          { display: 'Ver', path: 'purchasing.orders.read', status: 'active' },
          { display: 'Crear', path: 'purchasing.orders.create', status: 'active' },
        ] },
        { id: 'com_recepciones', display: 'Recepciones', path: 'purchasing.receipts', status: 'active', acciones: [
          { display: 'Ver', path: 'purchasing.receipts.read', status: 'active' },
        ] },
      ] },
    { id: 'facturacion', display: 'Facturación SRI', path: 'einvoicing', status: 'active',
      descripcion: 'Comprobantes electrónicos, retenciones y anulaciones ante el SRI.',
      submodulos: [
        { id: 'fac_comprobantes', display: 'Comprobantes electrónicos', path: 'einvoicing.documents', status: 'active', acciones: [
          { display: 'Ver', path: 'einvoicing.documents.read', status: 'active' },
          { display: 'Emitir', path: 'einvoicing.documents.issue', status: 'active' },
        ] },
        { id: 'fac_retenciones', display: 'Retenciones', path: 'einvoicing.withholdings', status: 'active', acciones: [
          { display: 'Ver', path: 'einvoicing.withholdings.read', status: 'active' },
        ] },
        { id: 'fac_anulaciones', display: 'Anulaciones', path: 'einvoicing.voids', status: 'active', acciones: [
          { display: 'Ver', path: 'einvoicing.voids.read', status: 'active' },
          { display: 'Solicitar', path: 'einvoicing.voids.request', status: 'active' },
        ] },
      ] },
    { id: 'clientes', display: 'Clientes', path: 'customers', status: 'active',
      descripcion: 'Directorio de clientes y segmentos comerciales.',
      submodulos: [
        { id: 'cli_directorio', display: 'Directorio', path: 'customers.directory', status: 'active', acciones: [
          { display: 'Ver', path: 'customers.directory.read', status: 'active' },
          { display: 'Crear', path: 'customers.directory.create', status: 'active' },
        ] },
        { id: 'cli_segmentos', display: 'Segmentos', path: 'customers.segments', status: 'active', acciones: [
          { display: 'Ver', path: 'customers.segments.read', status: 'active' },
        ] },
      ] },
    { id: 'precios', display: 'Precios', path: 'pricing', status: 'active',
      descripcion: 'Listas de precios y promociones.',
      submodulos: [
        { id: 'pre_listas', display: 'Listas de precios', path: 'pricing.lists', status: 'active', acciones: [
          { display: 'Ver', path: 'pricing.lists.read', status: 'active' },
          { display: 'Editar', path: 'pricing.lists.update', status: 'active' },
        ] },
        { id: 'pre_promos', display: 'Promociones', path: 'pricing.promotions', status: 'active', acciones: [
          { display: 'Ver', path: 'pricing.promotions.read', status: 'active' },
        ] },
      ] },
    { id: 'tesoreria', display: 'Tesorería', path: 'treasury', status: 'active',
      descripcion: 'Movimientos de caja y conciliación bancaria.',
      submodulos: [
        { id: 'tes_caja', display: 'Caja', path: 'treasury.cash', status: 'active', acciones: [
          { display: 'Ver', path: 'treasury.cash.read', status: 'active' },
        ] },
        { id: 'tes_bancos', display: 'Bancos', path: 'treasury.banks', status: 'active', acciones: [
          { display: 'Ver', path: 'treasury.banks.read', status: 'active' },
        ] },
      ] },
    { id: 'contabilidad', display: 'Contabilidad', path: 'accounting', status: 'active',
      descripcion: 'Asientos contables y plan de cuentas.',
      submodulos: [
        { id: 'con_asientos', display: 'Asientos', path: 'accounting.entries', status: 'active', acciones: [
          { display: 'Ver', path: 'accounting.entries.read', status: 'active' },
        ] },
        { id: 'con_plan', display: 'Plan de cuentas', path: 'accounting.chart', status: 'active', acciones: [
          { display: 'Ver', path: 'accounting.chart.read', status: 'active' },
        ] },
      ] },
    { id: 'reportes', display: 'Reportes', path: 'reports', status: 'active',
      descripcion: 'Reportes de ventas e inventario.',
      submodulos: [
        { id: 'rep_ventas', display: 'Ventas', path: 'reports.sales', status: 'active', acciones: [
          { display: 'Ver', path: 'reports.sales.read', status: 'active' },
        ] },
        { id: 'rep_inventario', display: 'Inventario', path: 'reports.inventory', status: 'active', acciones: [
          { display: 'Ver', path: 'reports.inventory.read', status: 'active' },
        ] },
      ] },
    { id: 'nomina', display: 'Nómina', path: 'payroll', status: 'deprecated',
      descripcion: 'Empleados y roles de pago. Módulo deprecado: reemplazado por integración externa; se conserva para los tenants que ya lo tenían.',
      submodulos: [
        { id: 'nom_empleados', display: 'Empleados', path: 'payroll.employees', status: 'deprecated', acciones: [
          { display: 'Ver', path: 'payroll.employees.read', status: 'deprecated' },
        ] },
        { id: 'nom_roles', display: 'Roles de pago', path: 'payroll.payslips', status: 'deprecated', acciones: [
          { display: 'Ver', path: 'payroll.payslips.read', status: 'deprecated' },
        ] },
      ] },
  ];

  /* ── Entitlements por tenant (estado APLICADO en servidor) ─────────────────
     Mapa submoduloId → true. Administración es intrínseco: no aparece acá (siempre on).
     Un submódulo deprecado que un tenant YA tenía se conserva (grandfathering): se
     muestra habilitado y marcado como deprecado; no se puede volver a habilitar en
     tenants que no lo tienen. */
  const ENTITLEMENTS = {
    // Aguilar — Comercio Plus, casi todo salvo nómina
    t1: { prod_catalogo: true, prod_variantes: true, prod_categorias: true, prod_codigos: true,
          ven_facturas: true, ven_notas: true,
          inv_kardex: true, inv_transferencias: true, inv_ajustes: true,
          com_ordenes: true, com_recepciones: true,
          fac_comprobantes: true, fac_retenciones: true, fac_anulaciones: true,
          cli_directorio: true, cli_segmentos: true,
          pre_listas: true, pre_promos: true,
          rep_ventas: true, rep_inventario: true },
    // San Rafael — Comercio base: productos parcial + facturación
    t2: { prod_catalogo: true, prod_variantes: true,
          ven_facturas: true,
          fac_comprobantes: true, fac_retenciones: true,
          cli_directorio: true,
          rep_ventas: true },
    // El Rincón — con un submódulo DEPRECADO ya concedido (grandfathered)
    t3: { prod_catalogo: true, prod_variantes: true, prod_categorias: true,
          ven_facturas: true, ven_cotizaciones: true /* deprecado, conservado */,
          inv_kardex: true, inv_transferencias: true,
          com_ordenes: true,
          fac_comprobantes: true,
          nom_empleados: true /* módulo deprecado, conservado */ },
  };

  window.BackofficeData = { STAFF, NAV, TENANT_ESTADO, TENANTS, MODULES, ENTITLEMENTS };
})();
