const withPlugins = require('next-compose-plugins');
const nextTranslate = require('next-translate')


const nextConfig = nextTranslate({
    webpack: (config, { webpack }) => {
      config.plugins.push(
        new webpack.EnvironmentPlugin({
        NEXT_PUBLIC_HOST: process.env.NEXT_PUBLIC_HOST,
        })
      );
      return config;
    },
  });
  
module.exports = withPlugins([{ trailingSlash: true }], nextConfig);
