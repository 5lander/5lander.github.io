**ModeToggle** — alterna claro/oscuro; vive en el chrome.

```jsx
const [mode, setMode] = React.useState('light');
// refleja en el wrapper: <div data-mode={mode}> … </div>
<ModeToggle mode={mode} onToggle={() => setMode(m => m === 'light' ? 'dark' : 'light')} />
<ModeToggle mode={mode} onToggle={toggle} shape="icon" />
```

Es preferencia de usuario persistida y aplica a ambas apps. El consumidor debe reflejar el modo en `[data-mode="dark"]` del contenedor para que los tokens se remapeen.
