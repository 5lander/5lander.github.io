// Language-neutral data (technology names, diagram labels). Copy lives in i18n/strings.ts.
// Names verified against the real Nx monorepo tree (apps/, libs/, nx.json) on 2026-07-21.

export const stackRows = [
  { key: 'backend', chips: ['Java', 'Spring Boot', 'NestJS', 'Node.js', 'Python', 'Django'] },
  { key: 'frontend', chips: ['Next.js 14', 'React', 'TypeScript', 'Tailwind', 'shadcn/ui', 'TanStack Query', 'Zustand'] },
  { key: 'data', chips: ['PostgreSQL · RLS', 'Oracle DB', 'MySQL', 'Redis', 'Prisma'] },
  { key: 'cloud', chips: ['AWS', 'Azure', 'Vercel', 'Docker', 'Jenkins', 'Nginx', 'Linux'] },
  { key: 'testing', chips: ['Jest', 'Playwright', 'E2E', 'JWT', 'argon2id', 'RBAC'] },
] as const;

export const experienceChips = ['Java', 'Spring Boot', 'Linux', 'AWS', 'Azure'] as const;

// The 4 deployable apps (apps/api, apps/commerce, apps/backoffice, apps/web).
// Plus 3 e2e suites (api-e2e, web-e2e, platform-e2e) — rendered as the "+3 e2e" chip.
export const archApps = ['api', 'commerce', 'backoffice', 'web'] as const;

// The 4 bounded contexts with code: identity, auth, commerce, hr (care is planned/empty).
// Sub-labels are the real responsibilities read from libs/<context> and the ADRs.
export const boundedContexts = [
  {
    name: 'identity', tone: 'blue' as const,
    layers: [
      { kind: 'domain', main: 'Domain', sub: '· users, tenants' },
      { kind: 'plain', main: 'Application', sub: '· permissions, org' },
      { kind: 'plain', main: 'Infrastructure', sub: '· Prisma, RLS' },
    ],
  },
  {
    name: 'auth', tone: 'blue' as const,
    layers: [
      { kind: 'domain', main: 'Domain', sub: '· sessions, policy' },
      { kind: 'plain', main: 'Application', sub: '· JWT, argon2id' },
      { kind: 'plain', main: 'Infrastructure', sub: '· guards' },
    ],
  },
  {
    name: 'commerce', tone: 'green' as const,
    layers: [
      { kind: 'domain', main: 'Domain', sub: '· products, sales' },
      { kind: 'plain', main: 'Application', sub: '· POS, SRI, stock' },
      { kind: 'plain', main: 'Infrastructure', sub: '· repos, outbox' },
    ],
  },
  {
    name: 'hr', tone: 'green' as const,
    layers: [
      { kind: 'domain', main: 'Domain', sub: '· employees' },
      { kind: 'plain', main: 'Application', sub: '· labor params' },
      { kind: 'plain', main: 'Infrastructure', sub: '· repos' },
    ],
  },
] as const;
