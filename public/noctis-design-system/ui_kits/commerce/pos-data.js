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
      id: 'aguilar', name: 'Librería Aguilar', initials: 'LA',
      empresa: 'Librería Aguilar S.A.', sucursal: 'Matriz — Av. Amazonas',
      cajero: { nombre: 'Agustina Cando', rol: 'Cajera' },
      accent: '262 60% 42%', fg: '0 0% 100%', accentName: 'Violeta corporativo', ivaDefault: 15,
    },
    sanrafael: {
      id: 'sanrafael', name: 'Farmacia San Rafael', initials: 'FS',
      empresa: 'Farmacia San Rafael', sucursal: 'Local Centro — Guayaquil',
      cajero: { nombre: 'Marcos Peñafiel', rol: 'Cajero' },
      accent: '184 72% 26%', fg: '0 0% 100%', accentName: 'Teal salud', ivaDefault: 15,
    },
    rincon: {
      id: 'rincon', name: 'El Rincón Ferretero', initials: 'RF',
      empresa: 'El Rincón Ferretero Cía. Ltda.', sucursal: 'Sucursal Sur — Quito',
      cajero: { nombre: 'Luis Tenesaca', rol: 'Cajero' },
      accent: '54 85% 46%', fg: '240 6% 12%', accentName: 'Oro (foreground near-black)', ivaDefault: 15,
    },
  };

  /* Tarifas de IVA vigentes en Ecuador para el selector de la línea genérica. La
     línea NACE con el default del perfil fiscal del tenant; es corregible por línea
     (farmacia: medicamento 0% / perfume 15%). */
  const IVA_TARIFFS = [0, 5, 15];

  /* Catálogo buscable (variantes vendibles). `precio` es number|null:
     null = la variante NO tiene precio en la lista de precios aplicable → estado
     SIN PRECIO, que BLOQUEA la línea (null NUNCA es $0). `iva` en % para el render
     de totales (que en producción también vendría resuelto del backend). */
  const CATALOG = [
    { id: 'v1', producto: 'Cuaderno universitario 100 hojas', variante: 'Cuadros · tapa azul', sku: 'CUA-100-CUAD', barcode: '7861234567890', precio: 2.15, iva: 15 },
    { id: 'v2', producto: 'Cuaderno universitario 100 hojas', variante: 'Líneas · tapa roja', sku: 'CUA-100-LIN', barcode: '7861234500017', precio: 2.15, iva: 15 },
    { id: 'v3', producto: 'Esferográfico punta media', variante: 'Azul', sku: 'ESF-PM-AZ', barcode: '7862220001114', precio: 0.45, iva: 15 },
    { id: 'v4', producto: 'Esferográfico punta media', variante: 'Negro', sku: 'ESF-PM-NE', barcode: '7862220001121', precio: 0.45, iva: 15 },
    { id: 'v5', producto: 'Resma papel bond A4 75 g', variante: '500 hojas · blancura 96%', sku: 'RES-A4-75', barcode: '7863330045008', precio: 4.80, iva: 15 },
    { id: 'v6', producto: 'Marcador permanente', variante: 'Negro', sku: 'MPE-NE', barcode: '7864440012306', precio: null, iva: 15 },
    { id: 'v7', producto: 'Set 12 lápices de colores', variante: 'Estuche cartón', sku: 'LAP-12-CART', barcode: '7865550098702', precio: 3.90, iva: 15 },
    { id: 'v8', producto: 'Corrector líquido 20 ml', variante: 'Punta metálica', sku: 'COR-20', barcode: '7866660033401', precio: 1.25, iva: 15 },
    { id: 'v9', producto: 'Carpeta archivador palanca', variante: 'Oficio · lomo 7 cm', sku: 'CAR-PAL-OF', barcode: '7867770021109', precio: 2.60, iva: 15 },
    { id: 'v10', producto: 'Grapadora metálica', variante: 'Media · 20 hojas', sku: 'GRA-MET-M', barcode: '7868880076503', precio: 5.35, iva: 15 },
  ];

  /* Carrito inicial de demo. Incluye a propósito una línea SIN PRECIO (v6) para
     mostrar el estado bloqueante. `qty` es lo único editable en POS-a (por keypad). */
  const INITIAL_CART = [
    { key: 'l1', ref: 'v1', qty: 2 },
    { key: 'l2', ref: 'v3', qty: 3 },
    { key: 'l3', ref: 'v6', qty: 1 }, // SIN PRECIO — bloquea el avance a cobro
  ];

  /* Consumidor Final: convención fiscal EC (cédula 9999999999999). Es el caso
     mayoritario en una PYME — su botón es el camino de UN TOQUE. */
  const CONSUMIDOR_FINAL = { id: 'cf', nombre: 'Consumidor Final', doc: '9999999999999', docTipo: 'Cédula', final: true };

  /* Clientes registrados (camino secundario, por picker). */
  const CLIENTES = [
    { id: 'c1', nombre: 'María Fernanda Loor', doc: '1312445566', docTipo: 'Cédula' },
    { id: 'c2', nombre: 'Comercial El Sol Cía. Ltda.', doc: '1391234567001', docTipo: 'RUC' },
    { id: 'c3', nombre: 'Juan Carlos Vera', doc: '0912233445', docTipo: 'Cédula' },
    { id: 'c4', nombre: 'Distribuidora Andina S.A.', doc: '1790055443001', docTipo: 'RUC' },
    { id: 'c5', nombre: 'Rosa Elena Chávez', doc: '1719988776', docTipo: 'Cédula' },
  ];

  const byId = (id) => CATALOG.find((v) => v.id === id);

  /* Vista unificada de una línea del carrito (catálogo o genérica). El carrito y los
     totales consumen SIEMPRE esto, para que ambos tipos convivan sin ramas duplicadas.
     · catálogo: identidad de variante (desc + sub + sku/barcode), precio/iva de lista.
     · genérica: descripción libre, sin SKU ni stock, precio/iva definidos al crearla. */
  const lineView = (line) => {
    if (line.generic) return { generic: true, desc: line.desc, sub: null, sku: null, barcode: null, precio: line.precio, iva: line.iva, qty: line.qty };
    const v = byId(line.ref);
    return { generic: false, desc: v.variante, sub: v.producto, sku: v.sku, barcode: v.barcode, precio: v.precio, iva: v.iva, qty: line.qty };
  };

  /* Regla unificada de precio a resolver antes de cobrar:
     · catálogo: precio null (SIN PRECIO en la lista) — null NUNCA es $0.
     · genérica: precio en cero — el cajero debe asignarle un precio.
     Ambos bloquean el cobro; se distinguen sólo en el copy. */
  const needsPrice = (view) => view.precio == null || view.precio === 0;

  window.PosData = { TENANTS, CATALOG, INITIAL_CART, CONSUMIDOR_FINAL, CLIENTES, IVA_TARIFFS, byId, lineView, needsPrice };
})();
