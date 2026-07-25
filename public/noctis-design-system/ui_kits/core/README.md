# UI kit — Núcleo compartido

Pantallas que el núcleo Noctis define y ambas apps (commerce y backoffice) heredan.
No dibuja piel de app (POS, kardex, entitlement tree, CompanySelector): solo el
primitivo compartido.

## Flujo (`index.html`)
Click-through interactivo de tres pantallas:

1. **Login** — momento negro (negro y plata), formulario a la derecha. El hueco
   «olvidé mi clave» se señala, no se inventa.
2. **Select-workspace** — cards por acceso (tenant × producto). Elegir una entra al shell.
3. **Shell · Productos** — topbar + sidebar del núcleo, con Tabs, Combobox de cliente,
   y la Table de trabajo (keyset, "Cargar más", pills de estado, MoneyDisplay, confirm
   de descontinuar). Toggle de modo claro/oscuro en el topbar.

## Ejes en vivo
- **Modo**: el toggle del topbar alterna claro/oscuro (preferencia de usuario).
- **Marca**: al elegir Aguilar (violeta) o San Rafael (teal), el shell inyecta el par
  `{--brand-primary, --brand-foreground}` — el acento aparece SOLO en botón primario,
  nav activo, foco y selección; el chrome sigue neutro de casa. Noctis (backoffice)
  usa el fallback de casa (grafito/plata).

## Archivos
- `index.html` — monta `window.CoreApp` sobre el bundle del sistema.
- `screens.jsx` — LoginScreen, WorkspaceScreen, ProductsScreen y el orquestador CoreApp.
  Consume los primitivos (`Button`, `Input`, `Wordmark`, `Shell`, `Table`, `Badge`,
  `MoneyDisplay`, `Tabs`, `Combobox`) — no reimplementa ninguno.
