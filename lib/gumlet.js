/**
 * Gumlet image optimization utility
 * Transforms image URLs for responsive resizing and optimization
 * Falls back to original CloudFront URLs if Gumlet is not properly configured
 */

const GUMLET_URL = process.env.NEXT_PUBLIC_GUMLET_URL;

/**
 * Converts a CloudFront URL to a Gumlet-optimized URL with responsive sizing
 * @param {string} cloudFrontUrl - Original CloudFront URL
 * @param {Object} options - Sizing options
 * @param {number} options.width - Target width in pixels
 * @param {number} options.quality - Image quality (1-100)
 * @returns {string} Gumlet-optimized URL or original CloudFront URL as fallback
 */
export function getGumletImageUrl(cloudFrontUrl, options = {}) {
  // If no Gumlet URL configured or no source URL, return original
  if (!GUMLET_URL || !cloudFrontUrl) {
    return cloudFrontUrl;
  }

  const {
    width = 800,
    quality = 80,
    autoFormat = true,
  } = options;

  try {
    // Parse the CloudFront URL and extract the path
    const urlObj = new URL(cloudFrontUrl);
    const imagePath = urlObj.pathname; // e.g., /images/0048.webp

    // Validate that we got a proper image path
    if (!imagePath || imagePath === '/' || imagePath.includes('null')) {
      console.warn('Invalid image path from URL:', cloudFrontUrl);
      return cloudFrontUrl; // Fallback to original
    }

    // Build Gumlet URL with optimization parameters
    const params = new URLSearchParams();
    if (width) params.append('w', width);
    if (quality) params.append('q', quality);
    if (autoFormat) params.append('auto', 'format');

    // Construct URL properly - ensure trailing slash after domain
    const gumletBaseUrl = GUMLET_URL.endsWith('/') ? GUMLET_URL.slice(0, -1) : GUMLET_URL;
    const gumletUrl = `${gumletBaseUrl}${imagePath}?${params.toString()}`;
    
    return gumletUrl;
  } catch (error) {
    console.warn('Error constructing Gumlet URL, falling back to original:', error);
    return cloudFrontUrl; // Fallback to original on any error
  }
}

/**
 * Get Gumlet URLs for different responsive breakpoints
 * Useful for srcSet in images
 * @param {string} cloudFrontUrl - Original CloudFront URL
 * @returns {Object} Object with different sized URLs
 */
export function getGumletSrcSet(cloudFrontUrl) {
  if (!GUMLET_URL) return cloudFrontUrl;

  return {
    small: getGumletImageUrl(cloudFrontUrl, { width: 400, quality: 75 }),
    medium: getGumletImageUrl(cloudFrontUrl, { width: 800, quality: 80 }),
    large: getGumletImageUrl(cloudFrontUrl, { width: 1200, quality: 85 }),
    xlarge: getGumletImageUrl(cloudFrontUrl, { width: 1600, quality: 90 }),
  };
}

/**
 * Transform image array for Gallery component with Gumlet optimization
 * Also normalizes aspect ratios if needed
 * @param {Array} photos - Array of photo objects with src, width, height
 * @param {boolean} preserveAspectRatio - If true, doesn't modify width/height ratios
 * @returns {Array} Transformed photo array with Gumlet URLs
 */
export function transformPhotosForGumlet(photos, preserveAspectRatio = true) {
  return photos.map((photo) => ({
    ...photo,
    src: getGumletImageUrl(photo.src, { width: 800, quality: 85 }),
    // Keep original aspect ratio for gallery layout
    width: photo.width || 1,
    height: photo.height || 1,
  }));
}
