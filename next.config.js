/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [''],
  },
  debug: {
    webpack: true,
    nextjs: true,
  },
};

module.exports = nextConfig;
