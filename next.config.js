/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Enables static export
    images: {
      unoptimized: true, // Required for static export since Next.js 13+
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'jeanice-mua.s3.us-east-2.amazonaws.com', // Corrected for the S3 region
        },
      ],
    },
  };
  
  module.exports = nextConfig;
  