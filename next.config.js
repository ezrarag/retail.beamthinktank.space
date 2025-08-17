/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  experimental: {
    // appDir is no longer needed in Next.js 13+ as it's the default
  },
}

module.exports = nextConfig
