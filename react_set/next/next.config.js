// Docs: https://nextjs.org/docs/api-reference/next.config.js
// Obs: restart the server after changes

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/login',
        permanent: true,
      },
    ]
  },
  env: {
    //
  }
}
module.exports = nextConfig
