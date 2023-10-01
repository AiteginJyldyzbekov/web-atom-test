/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['fakestoreapi.com'], // Замените 'fakestoreapi.com' на домен вашего хоста.
  },
  skipMiddlewareUrlNormalize: true,
}

module.exports = nextConfig
