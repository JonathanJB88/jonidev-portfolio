/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [{ hostname: 'cdn.sanity.io' }],
  },

  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.pdf$/,
      type: 'asset/resource',
      generator: {
        filename: 'static/pdf/[name][ext]',
      },
    });

    return config;
  },
};

module.exports = nextConfig;
