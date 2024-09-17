const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {

  reactStrictMode: true,
  trailingSlash: false,
  images: {
    unoptimized: false,
  },
  webpack: (config) => {
    // Ajoutez l'alias pour les modules afin de pointer directement vers 'main.js'
    config.resolve.alias = {
      ...config.resolve.alias,
      '@react-stately/utils': path.resolve(__dirname, 'node_modules/@react-stately/utils/dist/main.js'),
    };
    console.log(config.resolve.alias); // Confirmez les changements

    config.optimization = {
      minimize: false,
    };
    
    return config;
  },
};

module.exports = nextConfig;
