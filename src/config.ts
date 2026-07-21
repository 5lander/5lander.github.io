// Site-wide facts and feature flags. Edit these, not the markup.
export const site = {
  domain: 'https://5lander.github.io',
  email: 'slanderodriguez@gmail.com',
  github: 'https://github.com/5lander',
  githubHandle: 'github.com/5lander',
  linkedin: 'https://www.linkedin.com/in/lander-chicaiza-29a6ab324/',
  linkedinHandle: 'linkedin.com/in/lander-chicaiza',

  // WeaponDetectionSystem repo is PRIVATE until history remediation is done
  // (secrets/PII were committed). Flip to true once the clean public repo exists.
  weaponRepoPublic: false,
  weaponRepoUrl: 'https://github.com/5lander/weaponDetectionSystem',

  rutaDelCafeUrl: 'https://github.com/5lander/ProyectoRutaDelCafe',
} as const;

export type Lang = 'en' | 'es';
export const other = (l: Lang): Lang => (l === 'en' ? 'es' : 'en');
