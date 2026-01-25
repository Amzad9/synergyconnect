import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    unoptimized: true
  },
  basePath: '/redesign/out',
  assetPrefix: '/redesign/out',
  output: 'export',
};

export default nextConfig;
