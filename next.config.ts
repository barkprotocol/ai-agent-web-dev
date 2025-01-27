/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["ucarecdn.com"],
  },
  // Add any Vercel-specific configurations here
}

module.exports = nextConfig