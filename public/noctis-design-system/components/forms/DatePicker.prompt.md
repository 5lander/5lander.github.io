**DatePicker** — calendario localizado es-EC. `DD/MM/YYYY`, lunes primero, meses en español.

```jsx
const [fecha, setFecha] = React.useState(new Date(2026, 2, 14));
<DatePicker value={fecha} onChange={setFecha} label="Fecha del movimiento" />
```

El botón muestra la fecha en mono. El día elegido usa `--brand-primary`. Hora 24h y TZ Guayaquil aplican en campos con hora (fuera de este componente).
