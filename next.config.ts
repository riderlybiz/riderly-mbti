import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isProduction ? '/riderly-mbti' : '',
  assetPrefix: isProduction ? '/riderly-mbti/' : '',
  compiler: {
    styledComponents: true,
  },
  images: {
    localPatterns: [
      {
        pathname: '/assets/images/**',
        search: ''
      }
    ],
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
