const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx'
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: '**', protocol: 'https' },
      { hostname: '**', protocol: 'http' }
    ]
  }
};

module.exports = withNextra(nextConfig);
