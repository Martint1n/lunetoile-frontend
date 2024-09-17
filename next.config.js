const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  images: {
    unoptimized: false,
  },
  webpack: (config) => {
    // Ajoutez l'alias pour les modules
    config.resolve.alias = {
      ...config.resolve.alias,
      '@react-stately/utils': path.resolve(__dirname, 'node_modules/@react-stately/utils/dist/main.js'),
    };

    return config;
  },
};

module.exports = nextConfig;
