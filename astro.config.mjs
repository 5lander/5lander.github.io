// @ts-check
import { defineConfig } from 'astro/config';

// Deployed to https://5lander.github.io (user pages repo → served at domain root).
export default defineConfig({
  site: 'https://5lander.github.io',
  trailingSlash: 'always',
  build: { format: 'directory' },
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: true },
  },
});
