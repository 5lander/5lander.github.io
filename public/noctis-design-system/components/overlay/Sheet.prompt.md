**Sheet** — el único primitivo de overlay del sistema.

```jsx
<Sheet
  open={open}
  onClose={() => setOpen(false)}
  title="Cobro"
  placement="center"
  footer={<><Button variant="secondary" onClick={close}>Cancelar</Button><Button variant="primary">Cobrar</Button></>}
>
  … contenido del flujo …
</Sheet>
```

`placement="bottom"` para táctil/POS; `center` para desktop. Foco atrapado, cierre con Esc, scrim, `role="dialog"` + `aria-modal`. **Las acciones destructivas no usan Sheet** — van con confirm inline de 2 pasos en la propia fila/Card.
