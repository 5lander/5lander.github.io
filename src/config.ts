// Site-wide facts and feature flags. Edit these, not the markup.
export const site = {
  domain: 'https://5lander.github.io',
  email: 'slanderodriguez@gmail.com',
  github: 'https://github.com/5lander',
  githubHandle: 'github.com/5lander',
  linkedin: 'https://www.linkedin.com/in/lander-chicaiza-29a6ab324/',
  linkedinHandle: 'linkedin.com/in/lander-chicaiza-29a6ab324',

  // WeaponDetectionSystem repo is PRIVATE until history remediation is done
  // (secrets/PII were committed). Flip to true once the clean public repo exists.
  weaponRepoPublic: false,
  weaponRepoUrl: 'https://github.com/5lander/weaponDetectionSystem',

  // The Nx monorepo app/lib names shown in the hero panel and the architecture
  // diagram (src/data.ts archApps / boundedContexts, and the counts 7/5/3) are
  // ILLUSTRATIVE placeholders — NOT the real monorepo. While this is false,
  // prominent "◇ PLACEHOLDER" banners render on the site AND `npm run check:names`
  // fails, which blocks the Pages deploy — so invented names cannot ship by accident.
  // Flip to true only once Lander has replaced them with the real names.
  // 2026-07-21: names + counts + contexts verified against the C:\Projects\Commerce
  // tree (apps/, libs/, nx.json, docs/architecture-decisions/). Confirmed.
  monorepoNamesConfirmed: true,

  rutaDelCafeUrl: 'https://github.com/5lander/ProyectoRutaDelCafe',
} as const;

export type Lang = 'en' | 'es';
export const other = (l: Lang): Lang => (l === 'en' ? 'es' : 'en');
