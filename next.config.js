/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.BASE_URL,
  },
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: `https://api.notion.com/v1/databases/:path*`,
      },
    ];
  },
}

module.exports = nextConfig
