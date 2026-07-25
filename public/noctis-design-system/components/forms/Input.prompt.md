**Input** — campo de texto con label, helper y error por campo. El error vive inline, nunca en toast.

```jsx
<Input label="Nombre del producto" defaultValue="Cuaderno universitario" helper="Se muestra tal cual en catálogo." />
<Input label="RUC / Cédula" defaultValue="17900123" error="Dígito verificador inválido." />
<Input label="Categoría" defaultValue="No editable" disabled />
```

`error` reemplaza al `helper`, pinta el borde con `--danger-fg` y añade `aria-invalid`. El label se asocia automáticamente por id.
