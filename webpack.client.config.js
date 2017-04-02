const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    home: './built/src/app/client.js',
    login: './built/src/login/app.browser.js',
  },
  output: {
    path: path.join(__dirname, 'built'),
    filename: '[name]-bundle.js',
    publicPath: "/built/"
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
            },
          }
        ],
      },
      {
        test: /\.js$/,
        loader: 'babel-loader?presets[]=es2015',
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      output: {
        comments: false,
      },
    }),
  ],
};
