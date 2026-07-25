**Icon** — iconografía del núcleo (Lucide, line icons, un solo peso de trazo, grilla 16/20/24).

```jsx
<Icon name="package" size={20} />          {/* por nombre Lucide */}
<Icon module="productos" size={20} />       {/* por id de módulo (mapa del sistema) */}
<Icon module="facturacion" title="Facturación SRI" />  {/* con nombre accesible */}
```

Decisión de **sistema**, no de piel: el set y el mapa `módulo→ícono` viven acá; commerce y
backoffice heredan lo mismo. El ícono pinta con `currentColor` (toma el color del rol de texto
o del nav activo). **Nunca** se mezcla filled con line. En sidebars, usar `module` para que ambas
apps compartan el ícono de cada módulo (Productos = package, Precios = tag, Clientes = users…).
