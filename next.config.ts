import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  basePath: isProduction ? '/riderly-mbti' : '',
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
  assetPrefix: isProduction ? '/riderly-mbti' : '',
  typescript: {
    ignoreBuildErrors: true, // ✅ 타입 에러 무시하고 빌드
  },
  eslint: {
    ignoreDuringBuilds: true, // ✅ ESLint 에러 무시하고 빌드
  },
};

export default nextConfig;
