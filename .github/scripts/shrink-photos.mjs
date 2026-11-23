// Shrinks photos in src/assets/photos/ that are too big or still carry camera metadata.
// Run by .github/workflows/shrink-photos.yml after a photo is uploaded (e.g. through Pages CMS).
//
// - Longest edge > 2000px, or file > 1.5 MB  -> resized to fit 2000×2000.
// - Has EXIF metadata (camera info, possibly GPS location) -> re-saved without it.
// - The format and filename never change, so src/content/photos.json stays valid.
// - Already-small, metadata-free files are left alone (so nothing changes on repeat runs).
//
// Needs sharp: set SHARP_DIR to a folder where `npm install sharp` was run.
import { createRequire } from 'node:module';
import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const require = createRequire(path.join(process.env.SHARP_DIR || process.cwd(), 'index.js'));
const sharp = require('sharp');

const DIR = process.env.PHOTO_DIR || 'src/assets/photos';
const MAX_EDGE = 2000;
const MAX_BYTES = 1.5 * 1024 * 1024;
const kb = (n) => `${Math.round(n / 1024)} KB`;

let changed = 0;
for (const name of (await readdir(DIR)).sort()) {
  if (!/\.(jpe?g|png|webp)$/i.test(name)) continue;
  const file = path.join(DIR, name);
  const input = await readFile(file);
  const meta = await sharp(input).metadata();
  const tooBig = Math.max(meta.width ?? 0, meta.height ?? 0) > MAX_EDGE || input.length > MAX_BYTES;
  const hasExif = Boolean(meta.exif);
  if (!tooBig && !hasExif) continue;

  const format = meta.format === 'jpg' ? 'jpeg' : meta.format;
  if (!['jpeg', 'png', 'webp'].includes(format)) {
    console.log(`skip ${name}: unsupported format ${format}`);
    continue;
  }
  const output = await sharp(input)
    .rotate() // apply EXIF orientation before the metadata is dropped
    .resize({ width: MAX_EDGE, height: MAX_EDGE, fit: 'inside', withoutEnlargement: true })
    .toFormat(format, format === 'png' ? { compressionLevel: 9 } : { quality: 82 })
    .toBuffer({ resolveWithObject: true });

  // Keep the result if it's smaller, or if we had to remove metadata.
  if (output.data.length < input.length || hasExif) {
    await writeFile(file, output.data);
    changed++;
    console.log(
      `${name}: ${meta.width}x${meta.height} ${kb(input.length)} -> ${output.info.width}x${output.info.height} ${kb(output.data.length)}` +
        (hasExif ? ' (metadata removed)' : ''),
    );
  }
}
console.log(changed ? `Shrank ${changed} photo(s).` : 'All photos are already small; nothing to do.');
