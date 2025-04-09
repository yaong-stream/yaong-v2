import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn-yaong.narumir.io',
        port: '',
        pathname: '/**',
        search: '',
      }
    ],
  },
};

export default nextConfig;
