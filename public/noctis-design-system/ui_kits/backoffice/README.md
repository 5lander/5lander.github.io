# UI kit — backoffice (Shell + Tenants + Catálogo)

Piel de la app **backoffice** (platform-admin) sobre el núcleo Noctis. Consume los
tokens y componentes del sistema (`window.NoctisCommerceDesignSystem_4dfd35`) **sin
redefinir nada**: cero tokens nuevos, cero colores/tipografías inventados. Es el
encargo 3 de 3 (core → commerce → backoffice) y la **prueba de generalización** del
núcleo: backoffice invierte varios ejes de commerce y el sistema aguanta sin improvisar.

## Ejes invertidos respecto a commerce
- **NO temeable por tenant.** `--brand-primary`/`--brand-foreground` se quedan en el
  **fallback de casa** (grafito claro / plata oscuro); nunca se inyecta acento de tenant.
  El clamp de curaduría no aplica.
- **Modo claro/oscuro SÍ aplica** (preferencia de usuario). Ambos completos.
- **Sidebar FIJA** (no por permisos). Sin CompanySelector, sin logo de tenant, sin slot
  de sucursal — son conceptos de commerce. La marca es la de Noctis, fija.
- **Densidad back-office** (comfortable). Nada táctil.
- El usuario es **personal de plataforma**; sus acciones afectan a TODOS los tenants.

## Decisión de sistema: lenguaje visual de acción sensible
La fricción escala por **gravedad**, y la gravedad tiene **dos disparadores independientes**:
el alcance (cuántos tenants toca) y el daño dentro de un solo tenant.

1. **Fricción baja — `ConfirmInline` de 2 pasos.** Acciones reversibles/rutinarias: reactivar
   un tenant, togglear entitlements en draft, editar. Patrón vigente, sin cambios.
2. **Fricción alta — `DangerConfirmSheet`** (Sheet del núcleo + escritura del nombre + línea
   de impacto). Se gana por cualquiera de los dos disparadores:
   - **Alcance plataforma:** deprecar en el catálogo cascadea a cada tenant.
   - **Gravedad en un solo tenant:** suspender la cuenta deja sin operar a la PYME — dejar
     sin trabajar a un cliente amerita la fricción aunque el alcance sea una sola cuenta.
3. **Marcador de alcance** — regla de uso: **solo donde discrimina**. El chip
   «Alcance: plataforma» tiene sentido donde una acción de plataforma convive con
   acciones de alcance menor; un marcador presente en el 100% de los ítems de una
   pantalla no marca nada (el ojo lo filtra justo cuando debería pesar). Por eso el
   **Catálogo**, donde *toda* acción es de plataforma, declara el alcance **una vez a
   nivel de pantalla** (`PlatformScopeBanner`) y **no** lleva chip por fila; y el
   **detalle de tenant** no lleva marcador de plataforma en absoluto, porque ahí ninguna
   acción cruza tenants — poner el globo mentiría sobre el alcance. Lo que discrimina en
   esa pantalla es reversible-vs-grave, y **la fricción diferenciada es el marcador**. El
   chip sigue vivo en el título del Sheet de deprecación (`scope="platform"`), donde el
   alcance es lo que se está confirmando. Ícono de **alcance** (globo = afecta a todos), no
   de advertencia, y sin tinte ámbar: el alcance no es riesgo — un ítem activo y sano con ⚠
   al lado se lee como «tiene un problema».
2. **Alcance tenant** (afecta una cuenta) → ver la escalera de arriba: reversible = inline,
   grave (suspender) = Sheet con escritura del nombre.
3. **Alcance plataforma** (cascadea a todos los tenants, p.ej. deprecar un módulo) →
   **Sheet del núcleo con escritura del nombre** + línea de impacto («N tenants lo
   tienen habilitado»). La irreversibilidad y el radio entre tenants exigen una fricción
   que la fila inline no puede cargar. Reusa el primitivo Sheet (el núcleo ya declara que
   «el modal artesanal de backoffice se absorbe en este primitivo»).

## Pantallas (`index.html`)
- **Dashboard** — placeholder digno (conteos reales de la lista; sin KPIs falsos, Fase 2).
- **Tenants** — tabla densa (StatusPill · filtro de estado server-side + búsqueda por
  nombre client-side, deuda señalada · keyset «Cargar más») con los 4 estados del kit
  (vacío · cargando · error con errorId · 403).
- **Detalle de tenant** — el corazón: **árbol de entitlements** módulo→submódulo con
  toggles (`Switch` y `Checkbox` tri-estado **del núcleo**). Padre en estado
  **indeterminate**; **DRAFT LOCAL** (barra Guardar/Descartar con conteo, nada se aplica
  hasta guardar, guard de navegación de dos caminos — ver abajo);
  **Administración intrínseco** (no-toggleable, con explicación); submódulos deprecados
  conservados por *grandfathering* (no se pueden volver a habilitar). **Suspender** =
  Sheet con escritura de la razón social + impacto («deja sin operar a … y a sus N
  usuarios»); **reactivar** = confirm inline. Se muestra `display_name`; el path nunca.
- **Catálogo de módulos** — append-only: status active/deprecated, **sin afordancia de
  borrar**, solo **deprecar** (alcance plataforma → Sheet + escritura del nombre). El
  alcance se declara **una vez a nivel de pantalla**, no por fila. El
  deprecado usa la **pill terminal del núcleo** (ver abajo); la nota de impacto dice
  qué pasa con los tenants que ya lo tenían. Módulo→submódulo→acciones, todo por
  `display_name`.

## Lenguaje de estado: pasado terminal ≠ futuro pendiente
**Deprecado** se marca con la **pill terminal** del `Badge` del núcleo — exactamente el
mismo tratamiento que «Descontinuado» en commerce, que es literalmente el mismo concepto
(retirado, terminal, los que ya lo tenían lo conservan = el grandfathering del catálogo).

No se usa **atenuación** ni **borde punteado** para deprecado: en commerce la atenuación
ya significa «Pronto» (no construido todavía) y el punteado significa «slot reservado»
(viene después). Ambos son *futuro pendiente*; deprecado es *pasado terminal* — la
dirección opuesta del mismo eje temporal. Regla de sistema: **pasado terminal y futuro
pendiente no comparten signo visual en ninguna de las dos apps.**

## Guard de navegación con cambios sin guardar (dos caminos, un aviso)
El estado `dirty` del árbol se intercepta **antes** de navegar:

1. **Navegación in-app** (sidebar, breadcrumb, tarjetas del dashboard, logout) — el camino
   probable. Todo handler de navegación pasa por `guardedNav(fn)` en `app.jsx`: si hay
   cambios, abre el Sheet «Tiene cambios sin guardar» (Seguir editando / Descartar y salir)
   en lugar de navegar. La navegación se ejecuta solo al confirmar.
2. **Salida del documento** (cerrar pestaña, refresh) — `beforeunload` en el detalle. Lo
   resuelve el navegador con su propio diálogo.

El aviso del camino 1 es el canónico y dice lo mismo que el intento del camino 2: los
cambios no se aplicaron al tenant y salir los descarta.

**Nota de implementación para Next (App Router):** `beforeunload` **no** intercepta el
cambio de ruta de cliente, y el App Router **no** expone una API estable para abortar una
navegación (no existe `router.events` del Pages Router). Quien lleve esto a Next debe
portar el camino 1 explícitamente: envolver cada `<Link>` del shell y cada `router.push()`
en un handler que consulte `dirty` (`preventDefault()` + abrir el Sheet, navegar solo al
confirmar), o mantener el estado dirty en un contexto que el shell consulte antes de
navegar. **No confiar solo en `beforeunload`** — el caso más probable (clic en otro ítem
de la sidebar con cambios pendientes) no lo dispara.

## Restricciones aplicadas
display_name en español, cero paths de máquina en la UI · keyset sin números de página ·
formatos es-EC (DD/MM/YYYY, $1.234,56) · sin emoji · AA en ambos modos, focus-visible,
aria-labels en botones de ícono, `role=switch`/`checkbox` con `aria-checked` (mixed en
indeterminate), nombres accesibles por fila.

## Consistencia de shell con commerce
Los módulos no construidos (Usuarios de plataforma, Auditoría) usan el **mismo lenguaje
de estado de módulo** que commerce: chip «Pronto» expandido, reloj discreto colapsado,
informativo puro (no un control deshabilitado). El Icon del núcleo pinta el sidebar.

## Archivos
- `index.html` — monta `window.BackofficeApp` sobre el bundle del sistema.
- `data.js` — staff, nav fija, tenants, catálogo (módulos/submódulos/acciones con paths
  de máquina como dato, nunca UI), entitlements por tenant.
- `kit.jsx` — helpers, 4 estados, y los primitivos de acción sensible (PlatformScopeChip,
  PlatformScopeBanner, ConfirmInline, DangerConfirmSheet con escritura del nombre).
- `shell.jsx` — BackofficeShell (marca fija, sidebar fija, footer), Dashboard.
- `tenants.jsx` — lista + detalle (árbol de entitlements con `Switch`/`Checkbox` del núcleo, draft).
- `catalogo.jsx` — catálogo append-only (deprecar, impacto, deprecado vs activo).
- `app.jsx` — orquestador, router, guard de navegación in-app y barra de Prototipo.

## Componentes promovidos al núcleo en este corte
El árbol de entitlements necesitaba un toggle y un checkbox tri-estado. En vez de dejarlos
en la piel, se **promovieron al núcleo** (`components/forms/`), porque un switch es
primitivo base y commerce lo va a necesitar apenas aparezca configuración de empresa o
cualquier activo/inactivo — si lo construye entonces, quedan dos switches divergentes en
apps que comparten librerías, el modo de falla que este sistema existe para evitar.

- **`Switch`** — encendido/apagado, tamaños `sm`/`md`, `disabled`, `label` + `helper`
  opcionales, `role="switch"`/`aria-checked`, `focus-visible`. El track usa el par
  `{--brand-primary, --brand-foreground}`: respeta el acento del tenant donde lo haya y la
  marca de casa donde no. Ambos modos por token, sin colores propios.
- **`Checkbox`** — tri-estado: `indeterminate` gana sobre `checked` y expone
  `aria-checked="mixed"`. Al pulsar en indeterminate el consumidor decide la resolución.

Verificado antes de promover: el único `role="switch"` que ya existía en el núcleo es
**`ModeToggle`**, que **no** es un Switch reutilizable — es el control de chrome del modo
claro/oscuro, con icono y label fijos y sin `checked`/`onChange`/`disabled`. No había
duplicado: era una promoción faltante. Backoffice ahora los consume desde el núcleo.

## Componentes del núcleo que NO bajaron bien a esta piel
Ninguno bloqueó. Notas de sistema:
- El hueco real (toggle y checkbox tri-estado) se resolvió **promoviéndolos al núcleo**,
  no construyéndolos en la piel — ver la sección anterior.
- `EmptyState` está pensado «solo para el default sin tenant» (marca de casa): en
  backoffice encaja natural porque backoffice **es** la casa. Correcto tal cual.
- El `Shell` primitivo es display-only; backoffice replica su contrato visual y lo
  extiende con la interacción del prototipo, igual que commerce.
