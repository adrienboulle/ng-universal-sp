const path = require('path');

module.exports = {
  target: 'node',
  entry: {
    server: './built/src/server.js',
  },
  output: {
    path: path.join(__dirname, 'built'),
    filename: '[name]-bundle.js',
    publicPath: "/built/",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'ng-router-loader',
            options: {
              aot: true,
              loader: 'sync',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [
      '.js',
    ],
  },
};
