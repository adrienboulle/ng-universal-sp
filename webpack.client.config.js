const shared = require('./webpack/shared');

module.exports = {
  entry: {
    home: './built/src/app/client.js',
    login: './built/src/login/client.js',
  },
  output: shared.output,
  module: {
    rules: [
      shared.ngRouterLoader(),
      shared.babelLoader,
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
  plugins: [
    shared.UglifyJsPlugin,
  ],
};
