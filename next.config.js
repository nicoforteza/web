module.exports = {
  /*assetPrefix: "/web/",*/
  reactStrictMode: true,
  env: {
    noflash: '/noflash.js'
  },
  swcMinify: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.pdf$/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      },
    });
    return config;
  }
}