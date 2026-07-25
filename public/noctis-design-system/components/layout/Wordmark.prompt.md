**Wordmark** — marca de plataforma Noctis (negro y plata).

```jsx
<Wordmark />                    // mark + "Noctis Commerce"
<Wordmark size="sm" />
<Wordmark onDark />             // sobre el "momento negro" (login)
<Wordmark showName={false} />   // solo el mark
```

Es la identidad de casa, NO el logo del tenant (el shell tiene un slot aparte para ese). Aparece solo donde no hay tenant: login, set-password, select-workspace, empty states, footer.
