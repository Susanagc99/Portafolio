import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Prefer remotePatterns (more flexible) over the deprecated domains option
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'skillicons.dev',
        pathname: '/icons*',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
