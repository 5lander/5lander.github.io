// Language-neutral data (technology names, diagram labels). Copy lives in i18n/strings.ts.

export const stackRows = [
  { key: 'backend', chips: ['Java', 'Spring Boot', 'NestJS', 'Node.js', 'Python', 'Django'] },
  { key: 'frontend', chips: ['Next.js 14', 'React', 'TypeScript', 'Tailwind', 'shadcn/ui', 'TanStack Query', 'Zustand'] },
  { key: 'data', chips: ['PostgreSQL · RLS', 'Oracle DB', 'MySQL', 'Redis', 'Prisma'] },
  { key: 'cloud', chips: ['AWS', 'Azure', 'Vercel', 'Docker', 'Jenkins', 'Nginx', 'Linux'] },
  { key: 'testing', chips: ['Jest', 'Playwright', 'E2E', 'JWT', 'argon2id', 'RBAC'] },
] as const;

export const experienceChips = ['Java', 'Spring Boot', 'Linux', 'AWS', 'Azure'] as const;

export const archApps = ['api-gateway', 'storefront', 'admin-panel', 'sri-worker'] as const;

export const boundedContexts = [
  {
    name: 'identity', tone: 'blue' as const,
    layers: [
      { kind: 'domain', main: 'Domain', sub: '· entities, rules' },
      { kind: 'plain', main: 'Application', sub: '· use cases' },
      { kind: 'plain', main: 'Infrastructure', sub: '· adapters' },
    ],
  },
  {
    name: 'auth', tone: 'blue' as const,
    layers: [
      { kind: 'domain', main: 'Domain', sub: '· RBAC, 7 roles' },
      { kind: 'plain', main: 'Application', sub: '· JWT, argon2id' },
      { kind: 'plain', main: 'Infrastructure', sub: '· guards' },
    ],
  },
  {
    name: 'commerce', tone: 'green' as const,
    layers: [
      { kind: 'domain', main: 'Domain', sub: '· POS, invoicing' },
      { kind: 'plain', main: 'Application', sub: '· SRI, stock' },
      { kind: 'plain', main: 'Infrastructure', sub: '· repositories' },
    ],
  },
] as const;
