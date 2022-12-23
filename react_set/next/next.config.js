// Docs: https://nextjs.org/docs/api-reference/next.config.js
// Obs: restart the server after changes

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/login',
        permanent: true,
      },
    ]
  }
}
module.exports = nextConfig
