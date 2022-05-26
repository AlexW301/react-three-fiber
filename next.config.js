/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig

// const withTM = require('next-transpile-modules')(['three'])
// module.exports = withTM()

module.exports = {
  reactStrictMode: true,
  webpack: (config, options) => {
      config.module.rules.push({
          test: /\.(glsl|vs|fs|vert|frag)$/,
          use: ['raw-loader', 'glslify-loader'],
      });

      return config;
  }
};