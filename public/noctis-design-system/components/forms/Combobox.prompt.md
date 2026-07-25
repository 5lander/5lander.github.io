**Select / Combobox** — dos pickers del núcleo.

`Select` es el select nativo simple, con chevron propio:
```jsx
<Select options={['Todos', 'Activo', 'Descontinuado']} defaultValue="Todos" />
```

`Combobox` es el picker con búsqueda que reemplaza los UUID crudos (siempre muestra `display_name`, nunca el UUID). Base de la familia de pickers: cliente, producto→variante, bodega.
```jsx
<Combobox
  value={clienteId}
  onChange={setClienteId}
  placeholder="Seleccione un cliente…"
  searchPlaceholder="Buscar por nombre o identificación…"
  options={[
    { value: 'cf', label: 'Consumidor Final', meta: '· un toque', accent: true },
    { value: 'ag', label: 'Librería Aguilar S.A.', meta: 'RUC 1790012345001' },
    { value: 'mm', label: 'María Méndez Rueda', meta: 'CI 1712345678' },
  ]}
/>
```

`accent` resalta una opción con el color de marca. El popover usa `--shadow-overlay` (única elevación con sombra). En táctil el Select simple escala a bottom-sheet.
