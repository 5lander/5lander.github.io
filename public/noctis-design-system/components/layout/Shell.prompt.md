**Shell** — esqueleto de app compartido: topbar + sidebar + slots.

```jsx
<Shell
  user="agustina@aguilar.ec · Aguilar · commerce"
  mode={mode}
  onToggleMode={toggle}
  nav={[{
    section: 'Vender',
    items: [
      { label: 'Productos', active: true, children: ['Madre', 'Variantes'] },
      { label: 'Precios' },
      { label: 'POS', badge: 'Pronto', disabled: true },
    ],
  }]}
>
  … contenido de la vista …
</Shell>
```

El chrome (topbar, sidebar, footer) es **siempre neutro de casa**; el único acento del tenant aquí es el ítem de nav **activo**. Los slots `tenantLogo` y `companySelector` los llena cada app. El footer siempre muestra "Powered by Noctis Commerce".
