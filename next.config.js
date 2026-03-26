// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Required for static export to GoDaddy
  output: 'export',

  // Required for using <Image> component with static export
  images: {
    unoptimized: true,
  },

  // This prevents build failures from warnings
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;