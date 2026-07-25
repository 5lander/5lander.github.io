**Spinner** — carga de acción puntual, `role="status"`.

```jsx
<Spinner />
<Spinner size="sm" label="Verificando permiso…" />
```

Regla de carga: **Spinner** solo para acción puntual sin layout (gate de permiso, submit, botón en loading). Para listas/tablas/detalle usa **Skeleton** — nunca un spinner que reemplace una tabla entera.
