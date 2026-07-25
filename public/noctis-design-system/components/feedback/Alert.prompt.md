**Alert** — feedback inline dentro de la Card. Los errores siempre viven aquí.

```jsx
<Alert tone="info"><b>Info.</b> El buscador de esta lista es client-side por ahora.</Alert>
<Alert tone="success"><b>Listo.</b> Transferencia recibida y stock actualizado.</Alert>
<Alert tone="warning"><b>Atención.</b> El certificado vence en 30 días.</Alert>
<Alert tone="danger"><b>No autorizado.</b> No tiene permiso para anular ventas.</Alert>
```

Regla del sistema: **error → siempre inline** con Alert, nunca toast (no debe poder perderse). El rol ARIA se elige solo.
