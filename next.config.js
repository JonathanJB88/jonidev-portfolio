/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

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
