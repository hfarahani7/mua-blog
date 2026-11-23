// Website photos. The files live in src/assets/photos/ (resized to max 2000px) and are
// optimized by Astro at build time: each <Photo> gets 400–1600px WebP versions with correct
// width/height, served from /_astro/ with long-term caching. The originals stay in the S3
// bucket under images/ as an archive and are never deployed from this repo.
import type { ImageMetadata } from 'astro';

const files = import.meta.glob<{ default: ImageMetadata }>('../assets/photos/*.{webp,jpg,jpeg,png,avif}', {
  eager: true,
});

export type Photo = ImageMetadata;

/** Look up a photo in src/assets/photos/ by filename. Throws at build time if it's missing. */
export function photo(name: string): Photo {
  const mod = files[`../assets/photos/${name}`];
  if (!mod) throw new Error(`Photo not found in src/assets/photos/: ${name}`);
  return mod.default;
}

// TODO: real photographer credits and descriptive alt text are needed from the owner.
export const BRIDAL: Photo[] = [
  '0048.webp',
  '0060.webp',
  '0663.webp',
  'a7ba88fe-e4a7-46f8-9833-18df2fd1f2ea.webp',
  'dana-21.webp',
  'dana-28.webp',
  'dana-48.webp',
  'dana-117.webp',
  'dscf7649.webp',
  'dtc-14.webp',
  'ej-32.webp',
  'hl-16102776383.webp',
  'img-3040.webp',
  'img-4037.webp',
  'img-5471.webp',
  'img-6008.webp',
  'img-6086.webp',
  'img-6093.webp',
  'img-8629.webp',
  'img-8630.webp',
  'img-9073.webp',
  'img-9085.webp',
  'img-9092.webp',
  'kath-matt-jeanlaurentgaudy-030.webp',
  'kath-matt-jeanlaurentgaudy-060.webp',
  'kath-matt-jeanlaurentgaudy-087.webp',
  'kath-matt-jeanlaurentgaudy-185.webp',
  'kath-matt-jeanlaurentgaudy-527.webp',
  'kath-matt-jeanlaurentgaudy-603.webp',
  'pc-32.webp',
  'pc-35.webp',
  'pc-51-1.webp',
  'pc-67.webp',
  'pc-74.webp',
  'pc-81-1.webp',
].map(photo);

export const STUDIO: Photo[] = [
  '1dc67769-7753-4d92-86bb-1c5aaa630cef.webp',
  '3cfe1b70-5830-430e-a829-992db953fac7.webp',
  '7d2fa728-c2ab-4f5f-8319-ad4344bcf27e.webp',
  '374ac1de-0983-4b4f-a336-0aa0187c7e55.webp',
  '4949bfe8-2684-49b7-a4a0-d4d103b941e0.webp',
  'c9fbb259-d95b-4990-9992-cff20769905c.webp',
  'd6420a2f-b705-4371-b6e9-debe128ecd87.webp',
  'e6710887-ba74-4089-8d4d-d1677c468dfe.webp',
  'ej-24-1.webp',
  'img-0581.webp',
  'img-0600.webp',
  'img-0655.webp',
  'img-6418.webp',
  'img-9677.webp',
].map(photo);
