/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["analytics-api.herokuapp.com"],
  },
};

module.exports = nextConfig;
