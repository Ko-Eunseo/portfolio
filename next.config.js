/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {
  i18n: {
    locales: ["ko"],
    defaultLocale: "ko",
  },
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
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

module.exports = nextConfig;
