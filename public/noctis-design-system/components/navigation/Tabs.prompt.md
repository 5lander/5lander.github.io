**Tabs** — navegación de secciones; la activa usa el acento.

```jsx
const [tab, setTab] = React.useState('variantes');
<Tabs
  value={tab}
  onChange={setTab}
  tabs={[
    { id: 'variantes', label: 'Variantes' },
    { id: 'codigos', label: 'Códigos de barras' },
    { id: 'precios', label: 'Precios' },
  ]}
/>
```

La pestaña activa dibuja el subrayado con `--brand-primary` (uno de los cuatro únicos usos del acento del tenant).
