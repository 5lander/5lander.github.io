// Deploy guard: block publishing while the Nx monorepo app/lib names are still
// illustrative placeholders. The hero panel and the architecture diagram render
// invented names (src/data.ts) until Lander confirms the real ones and flips
// `monorepoNamesConfirmed` to true in src/config.ts.
//
// Runs in CI before the build (see .github/workflows/deploy.yml) and can be run
// locally with `npm run check:names`. Exit 1 = deploy is refused.
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const cfg = await readFile(join(root, 'src', 'config.ts'), 'utf8');

if (/monorepoNamesConfirmed:\s*false/.test(cfg)) {
  console.error(
    '\n✗ Deploy blocked: the Nx monorepo app/lib names are still PLACEHOLDERS.\n' +
    '  Replace the illustrative values in src/data.ts (archApps, boundedContexts)\n' +
    '  and the counts with the real ones, then set monorepoNamesConfirmed: true\n' +
    '  in src/config.ts to allow publishing.\n'
  );
  process.exit(1);
}

console.log('✓ monorepo names confirmed — publishing allowed');
