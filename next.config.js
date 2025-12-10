/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimize for production
  poweredByHeader: false,
  
  // Enable compression
  compress: true,
  
  // Configure for hosting on eduaiia.com
  trailingSlash: false,
  
  // Add any other config options here
};

module.exports = nextConfig;