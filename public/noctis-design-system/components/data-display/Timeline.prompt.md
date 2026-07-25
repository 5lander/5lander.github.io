**Timeline / Stepper** — línea de estados de un proceso.

```jsx
<Timeline steps={[
  { label: 'Borrador creado', meta: '12/03/2026 09:14', status: 'done' },
  { label: 'Despachada · en tránsito', meta: '12/03/2026 11:02', status: 'done' },
  { label: 'Recibida', meta: 'pendiente', status: 'pending' },
]} />
```

`done` = nodo verde con ✓ y línea verde; `current` = nodo con acento; `pending` = contorno neutro. El terminal alterno (Cancelada) se pinta como `<Badge tone="terminal">` fuera del stepper.
