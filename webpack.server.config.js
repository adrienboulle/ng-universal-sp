const shared = require('./webpack/shared');

module.exports = {
  target: 'node',
  entry: {
    server: './built/src/server.js',
  },
  output: shared.output,
  module: {
    rules: [
      shared.ngRouterLoader('sync'),
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
};
