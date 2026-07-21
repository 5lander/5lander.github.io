// Rasterize assets/og.svg → public/og.png (1200×630) for Open Graph / Twitter cards.
// Run: npm run og   (needs the `sharp` devDependency)
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

const sharp = (await import('sharp')).default;
const svg = await readFile(join(root, 'assets', 'og.svg'));
await mkdir(join(root, 'public'), { recursive: true });
const png = await sharp(svg, { density: 200 })
  .resize(1200, 630, { fit: 'cover' })
  .png()
  .toBuffer();
await writeFile(join(root, 'public', 'og.png'), png);
console.log('✓ public/og.png written (%d bytes)', png.length);
