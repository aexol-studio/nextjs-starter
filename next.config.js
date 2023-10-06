// @ts-check
const { i18n } = require('./next-i18next.config.js')

/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  pageExtensions: ['page.tsx', 'page.ts'],
  swcMinify: true,
  reactStrictMode: true,
};

module.exports = nextConfig;
