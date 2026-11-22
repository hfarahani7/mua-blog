// Photo data for the site. All photos live in the S3 bucket under images/ and are served
// from CloudFront; none are in this repo. Widths/heights are the real pixel sizes (read from
// the files), used for <img width height> so the layout doesn't shift while photos load.
// Order matches the old Next.js site. Generated during the Astro migration.

export const IMAGE_BASE = 'https://dwxk3eiesmmgs.cloudfront.net/images/';

export interface Photo {
  /** Filename in images/ (unencoded; spaces allowed). */
  file: string;
  width: number;
  height: number;
}

/** Full CloudFront URL for a photo. Spaces become %20 (not +), brackets %28 / %29. */
export function photoUrl(p: Pick<Photo, 'file'> | string): string {
  const file = typeof p === 'string' ? p : p.file;
  return IMAGE_BASE + encodeURIComponent(file).replace(/\(/g, '%28').replace(/\)/g, '%29');
}

/** Look up a photo by filename. Throws at build time if it isn't listed below. */
export function photo(file: string): Photo {
  const p = ALL.find((x) => x.file === file);
  if (!p) throw new Error(`Unknown photo: ${file}`);
  return p;
}

// TODO: the old site had placeholder captions ("Photo: John Smith") for these. Real
// photographer credits and descriptive alt text are needed from the owner.
export const BRIDAL: Photo[] = [
  { file: "0048.webp", width: 3360, height: 5040 },
  { file: "0060.webp", width: 5040, height: 3360 },
  { file: "0663.webp", width: 3360, height: 5040 },
  { file: "A7BA88FE-E4A7-46F8-9833-18DF2FD1F2EA.webp", width: 1440, height: 1800 },
  { file: "Dana-21.webp", width: 3598, height: 5408 },
  { file: "Dana-28.webp", width: 2985, height: 4486 },
  { file: "Dana-48.webp", width: 3228, height: 4852 },
  { file: "Dana-117.webp", width: 4740, height: 3600 },
  { file: "DSCF7649.webp", width: 5500, height: 4122 },
  { file: "DTC-14.webp", width: 3667, height: 5500 },
  { file: "EJ-32.webp", width: 5500, height: 4120 },
  { file: "hl-16102776383.webp", width: 512, height: 340 },
  { file: "IMG_3040.webp", width: 1284, height: 1603 },
  { file: "IMG_4037.webp", width: 1284, height: 1927 },
  { file: "IMG_5471.webp", width: 1284, height: 822 },
  { file: "IMG_6008.webp", width: 1284, height: 833 },
  { file: "IMG_6086.webp", width: 1284, height: 698 },
  { file: "IMG_6093.webp", width: 1284, height: 623 },
  { file: "IMG_8629.webp", width: 1284, height: 845 },
  { file: "IMG_8630.webp", width: 1284, height: 814 },
  { file: "IMG_9073.webp", width: 1600, height: 1065 },
  { file: "IMG_9085.webp", width: 1067, height: 1600 },
  { file: "IMG_9092.webp", width: 1067, height: 1600 },
  { file: "Kath_Matt_JeanLaurentGaudy_030.webp", width: 2334, height: 3500 },
  { file: "Kath_Matt_JeanLaurentGaudy_060.webp", width: 2334, height: 3500 },
  { file: "Kath_Matt_JeanLaurentGaudy_087.webp", width: 3500, height: 2334 },
  { file: "Kath_Matt_JeanLaurentGaudy_185.webp", width: 2334, height: 3500 },
  { file: "Kath_Matt_JeanLaurentGaudy_527.webp", width: 3500, height: 2334 },
  { file: "Kath_Matt_JeanLaurentGaudy_603.webp", width: 3500, height: 2334 },
  { file: "pc-32.webp", width: 3667, height: 5500 },
  { file: "pc-35.webp", width: 4133, height: 5500 },
  { file: "pc-51 (1).webp", width: 5500, height: 4122 },
  { file: "pc-67.webp", width: 4134, height: 5500 },
  { file: "pc-74.webp", width: 3667, height: 5500 },
  { file: "pc-81 (1).webp", width: 3667, height: 5500 },
];

export const STUDIO: Photo[] = [
  { file: "1DC67769-7753-4D92-86BB-1C5AAA630CEF.webp", width: 4716, height: 5895 },
  { file: "3CFE1B70-5830-430E-A829-992DB953FAC7.webp", width: 4716, height: 5895 },
  { file: "7D2FA728-C2AB-4F5F-8319-AD4344BCF27E.webp", width: 5163, height: 7741 },
  { file: "374AC1DE-0983-4B4F-A336-0AA0187C7E55.webp", width: 5163, height: 7741 },
  { file: "4949BFE8-2684-49B7-A4A0-D4D103B941E0.webp", width: 4624, height: 5780 },
  { file: "C9FBB259-D95B-4990-9992-CFF20769905C.webp", width: 5163, height: 7741 },
  { file: "D6420A2F-B705-4371-B6E9-DEBE128ECD87.webp", width: 4128, height: 6192 },
  { file: "E6710887-BA74-4089-8D4D-D1677C468DFE.webp", width: 5128, height: 7689 },
  { file: "EJ-24 (1).webp", width: 4118, height: 5500 },
  { file: "IMG_0581.webp", width: 5530, height: 6912 },
  { file: "IMG_0600.webp", width: 5083, height: 6354 },
  { file: "IMG_0655.webp", width: 4973, height: 6217 },
  { file: "IMG_6418.webp", width: 633, height: 950 },
  { file: "IMG_9677.webp", width: 4128, height: 6192 },
];

/** Photos used outside the portfolio galleries (home, inquiries). */
const OTHER: Photo[] = [
  { file: "IMG_6084.webp", width: 1284, height: 2281 },
  { file: "IMG_9555.webp", width: 1284, height: 2778 },
  { file: "IMG_8632.webp", width: 1284, height: 2778 },
  { file: "IMG_4382.webp", width: 1284, height: 1889 },
  { file: "IMG_6087.webp", width: 1284, height: 1858 },
  { file: "Kath_Matt_JeanLaurentGaudy_417.webp", width: 2334, height: 3500 },
  { file: "IMG_6091.webp", width: 1284, height: 712 },
];

const ALL: Photo[] = [...BRIDAL, ...STUDIO, ...OTHER];
