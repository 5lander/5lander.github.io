**MoneyDisplay** — monto tabular es-EC, alineado a la derecha.

```jsx
<MoneyDisplay value={1234.56} />            // $1.234,56
<MoneyDisplay value={1419.74} size="lg" />  // total
<MoneyDisplay value={-52} />                // −$52,00 (rojo)
<MoneyDisplay value={null} />               // chip "Sin precio"
```

Regla dura: precio ausente (`null`) NO es `$0` — renderiza el chip de atención "Sin precio". Números siempre tabulares para que las columnas alineen.
