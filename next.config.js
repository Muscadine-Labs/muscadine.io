/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  agentRules: false,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  turbopack: {
    resolveAlias: {
      '../build/polyfills/polyfill-module': './src/lib/modern-polyfill.js',
      'next/dist/build/polyfills/polyfill-module': './src/lib/modern-polyfill.js',
    },
  },
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      '../build/polyfills/polyfill-module': false,
      'next/dist/build/polyfills/polyfill-module': false,
    };
    return config;
  },
  experimental: {
    optimizePackageImports: ['three', '@react-three/fiber', '@react-three/drei'],
  },
};

module.exports = nextConfig;
