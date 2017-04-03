const shared = require('../../../webpack/shared');

module.exports = {
  entry: {
    lazy: './built/src/app/client.js',
  },
  output: shared.output,
  module: {
    rules: [
      shared.ngRouterLoader('sync'),
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
