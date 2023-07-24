/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["havoc-os.com"],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
