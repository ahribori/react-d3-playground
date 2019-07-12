const withSass = require('@zeit/next-sass');

module.exports = withSass({
  distDir: '../dist',

  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]___[hash:base64:5]'
  }
});
