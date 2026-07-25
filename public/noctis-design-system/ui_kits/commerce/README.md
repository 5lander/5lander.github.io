# UI kit — commerce (Shell + Productos)

Piel de la app **commerce** sobre el núcleo Noctis. Consume los tokens y componentes
del sistema (`window.NoctisCommerceDesignSystem_4dfd35`) **sin redefinir nada**:
cero tokens nuevos, cero colores/tipografías inventados. Corte acotado a propósito:
**SHELL + módulo PRODUCTOS**. No dibuja POS, Clientes, Precios, Inventario ni Facturación.

## Qué distingue a commerce
- **Themeable por tenant.** El acento del tenant viaja como par `{--brand-primary,
  --brand-foreground}` curado por el clamp de curaduría de tres dimensiones —luminancia
  (L ∈ [0,45–0,82]; < 0,18 → foreground near-white, ≥ 0,18 → near-black), croma (≤ 0,12) y
  matiz en **hue OKLCH** (perceptualmente uniforme, no HSL): Δhue ≥ 25° del **foreground
  (`-fg`)** de cada semántico en ambos modos (peligro 28–30°, atención 54–73°, éxito
  152–154°, info/link/foco 252–257°; los `-bg`/`-border` son lavados casi blancos que no
  compiten). Ventanas de hue permitidas: 98–127° (oro) · 179–227° (teal) · 282–3° (violeta),
  para que marca y estado no se confundan— y aparece SOLO en
  cuatro puntos: botón primario, nav activo, foco y selección. El resto del chrome es
  neutro de casa. Tres tenants demuestran el par: Aguilar (violeta, fg blanco), San Rafael
  (teal, fg blanco), El Rincón (oro, **fg near-black** — el caso del clamp).
- **Modo claro/oscuro** como preferencia de usuario, en el chrome. Ambos completos.

## Flujo (`index.html`)
Click-through de shell + Productos. La **barra de Prototipo** superior (andamiaje tipo
Storybook — no es chrome de la app) recorre los ejes y estados:
- **Tenant** → cambia el acento en vivo (par primary+foreground).
- **Perfil** (admin · bodeguero · vendedor · cajero · contador) → gating en tres capas:
  sidebar (módulo visible con ≥1 permiso) → sección (fail-closed: bounce a /dashboard al
  perder el permiso) → CTA (se ocultan, no se deshabilitan). Bodeguero/admin editan;
  vendedor/cajero solo lectura.
- **Estado** de la lista o de la sección embebida: datos · cargando (Skeleton) · vacío
  (EmptyState) · error (errorId + reintento) · 403.

### Pantallas
- **Dashboard** — placeholder digno (bienvenida + accesos), sin KPIs falsos (Fase 2).
- **/productos** — Table (estado · nombre · categoría · creado), filtro de estado
  server-side + búsqueda por nombre client-side (deuda señalada) + "Cargar más" keyset.
- **/productos/nuevo · /[id]/editar** — form (nombre · categoría por **Combobox**, nunca
  UUID · IVA · descripción); error por campo + banner root (Alert) para el 404 de categoría.
- **/productos/[id]** — detalle madre + Descontinuar (confirm inline 2 pasos; 409 si
  terminal) + **VariantsSection** embebida (lista keyset, no el picker en cascada).
- **/productos/[id]/variantes** — CRUD de variante + **BarcodesSection**: pill "primario",
  editar / fijar-primario / eliminar con confirm inline 2 pasos por fila, y **tres 409
  diferenciados**: duplicado → banner root; carrera de primario y borrar-el-primario →
  Alert por fila.
- **barcodes/nuevo · editar** — alta/edición simple (código, etiqueta).

## Restricciones aplicadas
Sin Dialog (destructivas = confirm inline 2 pasos) · display_name en español, nunca UUID ·
keyset sin números de página · formatos es-EC (DD/MM/YYYY, $1.234,56) · sin emoji · AA en
ambos modos, focus-visible, aria-labels.

## Iconografía (decisión de sistema, repuesta)
El sidebar usa el componente `Icon` del núcleo (Lucide, line, un peso) por id de módulo, en vista
expandida y colapsada — el mismo set y mapa que heredará backoffice (Productos = package, Precios
= tag, Clientes = users, Facturación SRI = file-text…). Se descartó el monograma por inicial:
con ~12 módulos las iniciales colisionan (Productos/Precios = P; Clientes/Compras/Contabilidad =
C), lo que rompe la orientación justo al colapsar. El Shell primitivo del núcleo es display-only;
commerce replica su contrato visual y lo extiende con la interacción que el prototipo necesita
(nav clickable/colapsable, CompanySelector, slot de branch reservado).

## A mirar en v3 (no acción ahora)
- **Ancho del Sheet centrado (~520px).** El primitivo Sheet del núcleo topa el modo centrado
  en `min(520px, …)`. Alcanza para el cobro efectivo actual (POS-b). Si en v3 el cobro
  multi-método (Deuna/QR, tarjeta) crece en ancho, revisar ahí el techo del Sheet. No se
  amplía ahora: sería sobre-diseño por un caso que todavía no existe.

## Archivos
- `index.html` — monta `window.CommerceApp` sobre el bundle del sistema.
- `data.js` — tenants, perfiles/permisos, nav, categorías, productos, variantes, códigos.
- `kit.jsx` — gating, confirm inline 2 pasos, y los cuatro estados del kit.
- `shell.jsx` — CommerceShell, CompanySelector, sidebar por permisos, Dashboard.
- `productos.jsx` — lista · form · detalle madre · VariantsSection.
- `variantes.jsx` — variante (nuevo/detalle/editar) · BarcodesSection · form de código.
- `app.jsx` — orquestador, router de vistas y barra de Prototipo.
