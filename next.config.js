/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['www.google.com'],
    // domains: ['upload.wikimedia.org'],
  },
};

module.exports = nextConfig;
