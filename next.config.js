/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable standalone output for Docker
  output: 'standalone',
  
  // Optimize for production
  poweredByHeader: false,
  
  // Add any other config options here
};

module.exports = nextConfig;