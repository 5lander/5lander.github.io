**Badge / StatusPill** — pill de estado. Semánticos estables + un tono de marca.

```jsx
<Badge tone="neutral">Borrador</Badge>
<Badge tone="success" dot>Activa</Badge>
<Badge tone="info">En tránsito</Badge>
<Badge tone="warning">Por vencer</Badge>
<Badge tone="danger">Vencido</Badge>
<Badge tone="terminal">Anulado</Badge>
<Badge tone="brand">Predeterminada</Badge>
```

`dot` añade el punto de estado. `brand` es el único tono que usa el acento del tenant; el resto son semánticos y no cambian con la marca.
