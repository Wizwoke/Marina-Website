/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['imgur.com', 'i.imgur.com'],
  },
  debug: {
    webpack: true,
    nextjs: true,
  },
};

module.exports = nextConfig;
