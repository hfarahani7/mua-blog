// Website photos.
//
// - The image files live in src/assets/photos/ (max 2000px WebP) and are optimized by Astro at
//   build time: each <Photo> gets 400–1600px WebP versions, served from /_astro/ with
//   long-term caching. The originals stay in the S3 bucket under images/ as an archive and are
//   never deployed from this repo.
// - src/content/photos.json holds each photo's alt text, gallery and photographer credit, in
//   gallery order. It's the file the CMS edits.
import type { ImageMetadata } from 'astro';
import data from '../content/photos.json';

const files = import.meta.glob<{ default: ImageMetadata }>('../assets/photos/*.{webp,jpg,jpeg,png,avif}', {
  eager: true,
});

export type Photo = ImageMetadata;
export type Gallery = 'bridal' | 'studio' | 'none';

export interface PhotoEntry {
  /** Filename in src/assets/photos/. */
  name: string;
  image: Photo;
  alt: string;
  gallery: Gallery;
  photographer: string;
  photographerUrl: string;
}

interface RawEntry {
  image: string;
  alt: string;
  gallery: string;
  photographer?: string;
  photographerUrl?: string;
}

// The CMS may write the image as "src/assets/photos/x.webp", "/src/assets/photos/x.webp" or
// similar, so photos are matched by filename only.
const byName = new Map(Object.entries(files).map(([p, mod]) => [p.split('/').pop()!, mod.default]));

const ENTRIES: PhotoEntry[] = (data.photos as RawEntry[]).map((raw, i) => {
  const name = raw.image.split('/').pop() ?? '';
  const image = byName.get(name);
  if (!image) throw new Error(`photos.json entry ${i + 1}: image "${raw.image}" not found in src/assets/photos/`);
  if (!raw.alt?.trim()) throw new Error(`photos.json entry ${i + 1} (${name}): alt text is required`);
  if (!['bridal', 'studio', 'none'].includes(raw.gallery)) {
    throw new Error(`photos.json entry ${i + 1} (${name}): gallery must be bridal, studio or none`);
  }
  return {
    name,
    image,
    alt: raw.alt.trim(),
    gallery: raw.gallery as Gallery,
    photographer: raw.photographer?.trim() ?? '',
    photographerUrl: raw.photographerUrl?.trim() ?? '',
  };
});

/** A photo's data (image, alt text, credit) by filename. Throws at build time if it isn't listed. */
export function photoEntry(name: string): PhotoEntry {
  const entry = ENTRIES.find((e) => e.name === name);
  if (!entry) throw new Error(`Photo "${name}" is not listed in src/content/photos.json`);
  return entry;
}

/** Just the image, by filename. */
export function photo(name: string): Photo {
  return photoEntry(name).image;
}

export const BRIDAL: PhotoEntry[] = ENTRIES.filter((e) => e.gallery === 'bridal');
export const STUDIO: PhotoEntry[] = ENTRIES.filter((e) => e.gallery === 'studio');
