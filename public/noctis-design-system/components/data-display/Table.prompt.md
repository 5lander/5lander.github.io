**Table** — tabla de trabajo del núcleo con paginación por keyset.

```jsx
<Table
  columns={[
    { key: 'estado', label: 'Estado' },
    { key: 'producto', label: 'Producto' },
    { key: 'stock', label: 'Stock', numeric: true },
    { key: 'precio', label: 'Precio', numeric: true },
    { key: 'acciones', label: 'Acciones', align: 'right' },
  ]}
  rows={[
    { estado: <Badge tone="success" dot>Activa</Badge>, producto: 'Cuaderno universitario 100h', stock: '128', precio: <MoneyDisplay value={2.45} size="sm" />, acciones: <Button variant="ghost" size="sm">Editar</Button> },
  ]}
  footNote="Orden cronológico · sin números de página, total ni salto"
  onLoadMore={cargarMas}
/>
```

Números a la derecha en mono tabular. Las celdas aceptan cualquier nodo (pills, botones, confirm inline de 2 pasos). Sin paginación numerada: solo "Cargar más". El kardex hereda esta tabla sumando saldo corrido.
