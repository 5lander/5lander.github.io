# UI kit — commerce (Demo navegable)

Piel de la app **commerce** sobre el núcleo Noctis. Consume los tokens y componentes
del sistema (`window.NoctisCommerceDesignSystem_4dfd35`) **sin redefinir nada**: cero
tokens nuevos, cero colores/tipografías inventados.

La única app viva —y el único card `@dsCard` del kit— es **`demo.html`**: una sola SPA
navegable para clientes PYME (**Login → Elegir workspace → Shell**). Reconcilia los cortes
previos (Shell+Productos, POS-a/POS-b/POS-c) en un solo flujo. Las builds anteriores se
conservan como referencia en **`_historico/`** (ya no son cards ni se cargan).

## Qué distingue a commerce
- **Themeable por tenant.** El acento del tenant viaja como par `{--brand-primary,
  --brand-foreground}` curado por el clamp de tres dimensiones —luminancia (< 0,18 →
  foreground near-white; ≥ 0,18 → near-black), croma (≤ 0,12) y matiz en **hue OKLCH**
  con Δhue ≥ 25° de cada semántico— y aparece SOLO en cuatro puntos: botón primario, nav
  activo, foco y selección. El resto del chrome es neutro de casa. Tres tenants demuestran
  el par: Aguilar (violeta, fg blanco), San Rafael (teal, fg blanco), El Rincón (oro, **fg
  near-black** — el caso del clamp).
- **Modo claro/oscuro** completo y **doble densidad** (Desktop / Táctil) para la venta.
- **Un solo universo de producto:** el catálogo vendible del POS se DERIVA de los productos
  madre ACTIVOS. Lo que muestra Productos es exactamente lo que vende el POS.

## Flujo (`demo.html`)
La **barra de Prototipo** superior (andamiaje tipo Storybook — no es chrome de la app)
recorre los ejes: **Tenant** (acento en vivo), **Perfil** (gating en 3 capas: sidebar →
sección → CTA), **Densidad**, **Turno de caja**, **Estado** de Productos y **Escritura**
(éxito/falla del cobro y del cierre).

### Módulos
- **POS** (Vender) — **modo inmersivo** del shell: entrada automática; «Salir de venta»
  recupera las barras SIN cancelar la venta (el carrito sobrevive con LiveSalePill + badge
  «En curso»). Área de venta = búsqueda (izquierda) + carrito/pago (columna par, no
  sidebar); el ancho del área se capa en monitores anchos para no estirarse de más. El
  **IVA lo aplica el negocio** (config de empresa/tenant), no la línea. **Cliente:**
  Consumidor Final de un toque (camino rápido) + picker de registrados **con alta inline**
  —el POS crea el cliente en el mismo Sheet (identificación es-EC, nombre, celular, correo,
  dirección; validación por campo) y lo deja como cliente activo de la venta.
- **Productos** — módulo completo: lista (4 estados + 403) → detalle madre → variante →
  código de barras. El form de producto NO pide IVA (es config de negocio, no atributo por
  producto). Categoría por Combobox (nunca UUID); Descontinuar con confirm inline 2 pasos.
- **Contabilidad** — Cierre de caja (abrir/cerrar turno, arqueo, diferencia).
- **Resto de módulos** — visibles pero «Pronto» (informativos): el hueco se señala, no se
  inventa.

## Restricciones aplicadas
Solo tokens (`hsl(var(--…))`), cero tokens/colores nuevos · acento quirúrgico en 4 puntos ·
sin Dialog (destructivas y overlays = Sheet del núcleo / confirm inline 2 pasos) ·
display_name en español, nunca UUID · keyset sin números de página · formatos es-EC
(usted, DD/MM/YYYY, $1.234,56) · sin emoji · densidad táctil en el POS · AA en ambos modos,
focus-visible, aria-labels.

## Archivos (raíz de `commerce`)
- `demo.html` — monta la SPA sobre el bundle del sistema (**único card**).
- `data.js` — `window.CommerceData` (tenants·perfiles·nav·catálogo madre·variantes·códigos)
  Y `window.PosData` (catálogo vendible·carrito·clientes·IVA de negocio) sobre las mismas
  estructuras.
- `kit.jsx` — gating, confirm inline 2 pasos, los cuatro estados del kit.
- `pos-kit.jsx`, `pos-search.jsx`, `pos-customer.jsx`, `pos-cart.jsx`, `pos-checkout.jsx`,
  `pos-caja.jsx` — el ambiente de venta y el cierre de caja.
- `productos.jsx` — lista · form · detalle madre · VariantsSection.
- `variantes.jsx` — variante (nuevo/detalle/editar) · BarcodesSection · form de código.
- `demo-app.jsx` — orquestador, router de módulos y barra de Prototipo.

## Histórico (`_historico/`, referencia — no cards)
`index.html` + `app.jsx` + `shell.jsx` (corte Shell+Productos); `pos.html`/`pos-app.jsx`,
`pos-b.html`/`pos-b-app.jsx`, `pos-c.html`/`pos-c-app.jsx`, `pos-shell.jsx` (cortes POS
pre-unificación); `pos-data.js` (redundante: `data.js` ya expone `PosData`). Reconciliados
dentro de `demo.html`; se conservan sin marcador `@dsCard`.
