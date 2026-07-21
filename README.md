# 5lander.github.io

Personal portfolio — static site, built with **Astro**, deployed to **GitHub Pages**.
Bilingual (EN default / ES) with the language in the URL: `/en/` and `/es/`.

## Develop

```bash
npm install
npm run dev        # http://localhost:4321  → redirects to /en/
npm run build      # static output to ./dist
npm run preview    # serve ./dist locally
npm run og         # regenerate public/og.png from assets/og.svg (needs sharp)
```

## Structure

```
src/
  config.ts            facts + feature flags (email, links, weaponRepoPublic)
  data.ts              tech names, diagram labels (language-neutral)
  i18n/strings.ts      ALL copy, EN + ES (single source)
  styles/tokens.css    design system (oklch tokens, components, breakpoints)
  layouts/Base.astro   <head>, OG/hreflang, nav, footer
  components/          Nav · Footer · Home · Noctis
  pages/
    index.astro        root → detects language → /en/ or /es/
    en/index.astro     es/index.astro          home
    en/noctis/…        es/noctis/…             Noctis case study
    404.astro          bilingual, GitHub Pages serves it for unknown paths
public/                fonts are bundled by Fontsource · favicon.svg · og.png
```

Fonts (IBM Plex Sans/Mono/Serif, latin subset) are self-hosted via `@fontsource`
and bundled at build — no CDN, no third-party request.

## Routing & i18n

- `/` reads `localStorage.lang`, then `navigator.language`, else English, and redirects.
- The `EN`/`ES` toggle links to the mirrored URL and persists the choice.
- `canonical` + `hreflang` (en, es, x-default=en) are emitted per page.

## Deploy

`.github/workflows/deploy.yml` builds and publishes on push to `main`.
Enable **Settings → Pages → Source: GitHub Actions** once, then push.
(Actions are pinned by tag here; SHA-pin them if you want the stricter policy
used in the other repos.)

## ◇ Pending real content

The design is final; these placeholders need your input:

1. **Noctis — business context** (section 01): intended user and the problem it targets.
2. **Noctis — 3 screenshots**: POS (tablet), invoicing, inventory. Drop images into
   `public/` and wire them into `src/components/Noctis.astro` (frames are ready).
3. ~~**Noctis — real monorepo names**~~ **✓ Done (2026-07-21).** `src/data.ts`, the
   counts, the 4 bounded contexts, ADR-002 and the RLS SQL were verified against the
   real `C:\Projects\Commerce` tree (apps/, libs/, nx.json, docs/architecture-decisions/)
   and `monorepoNamesConfirmed` is now `true`. The `npm run check:names` guard (run first
   in the deploy workflow) stays as a regression backstop. Evidence metrics verified:
   1,600+ tests / 54 migrations / 19 REST controllers / 7 RBAC roles / 19 ADRs.
4. **`weaponRepoPublic`** in `src/config.ts` is `false` (repo private until history
   remediation). Flip to `true` once the clean public repo exists to show the link.

> **FISA Group** — confirmed: *Customer Care Engineer*, Mar 2024 – Feb 2026, preceded by
> an internship Jun 2023 – Jan 2024. Already reflected in `src/i18n/strings.ts`.
