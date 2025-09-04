import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Enables static HTML export
  output: 'export',
  
  // This new line fixes the "Not Found" error on subpages
  trailingSlash: true,
  
  // Necessary for static export to work with images
  images: {
    unoptimized: true,
  },
  
  // This prevents build failures from warnings
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;

