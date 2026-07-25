**NumericKeypad** — teclado numérico del POS táctil (componente del núcleo).

```jsx
const [monto, setMonto] = React.useState('');
<NumericKeypad value={monto} onChange={setMonto} />
```

Teclas 64×64 (≥60 exigido), layout 3×4, gap 8. Al presionar: `scale(.96)` + fondo de marca (feedback inmediato). Navegable por teclado físico (`focus-visible` con anillo). `C` limpia, `⌫` borra (con `aria-label`). Sirve para cantidad, precio y cobro.
