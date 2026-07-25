**Toast** — confirmación de éxito efímera, acotada por reglas de sistema.

```jsx
<Toast onDismiss={() => setShow(false)}>Invitación reenviada a agustina@aguilar.ec</Toast>
```

Reglas duras: solo éxito de acciones cuyo resultado **no está en pantalla**; autodismiss 4 s; apilable; `role="status"`. **Error → siempre inline con Alert, nunca toast.** Prohibido en el POS (ahí la confirmación va en superficie grande).
