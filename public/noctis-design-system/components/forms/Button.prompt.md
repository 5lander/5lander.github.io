**Button** — el botón del núcleo; `primary` es uno de los cuatro únicos lugares donde aparece el acento del tenant.

```jsx
<Button variant="primary">Guardar cambios</Button>
<Button variant="secondary">Cancelar</Button>
<Button variant="ghost">Ver detalle</Button>
<Button variant="danger">Anular venta</Button>
<Button variant="primary" loading>Emitiendo…</Button>
<Button variant="danger-ghost" size="sm">Descontinuar</Button>
```

Variantes: `primary` (acento tenant), `secondary` (borde neutro), `ghost`, `danger` (relleno), `danger-ghost` (borde). Tamaños `md`/`sm`. `loading` añade spinner y `aria-busy`. Focus-visible dibuja anillo con `--focus-ring`. Nunca inventes colores: usa solo estas variantes.
