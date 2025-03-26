/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true, // required for static export
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'jeanice-mua.s3.amazonaws.com'
          },
        ],
      },
  };
  
  module.exports = nextConfig;
  