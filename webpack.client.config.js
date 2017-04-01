const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    polyfills: './built/src/polyfills.ts',
    app: './built/src/app/client.ts',
    login: './built/src/login/app.browser.ts',
  },
  output: {
    path: path.join(__dirname, 'built'),
    filename: '[name]-bundle.js',
    publicPath: "/built/"
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'ng-router-loader',
            options: {
              aot: true,
            }
          },
          {
            loader: 'awesome-typescript-loader',
          },
        ],
      },
      {
        test: /\.js$/,
        loader: 'babel-loader?presets[]=es2015',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  plugins: [
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: { warnings: false },
    //   output: {
    //     comments: false,
    //   },
    // }),
  ],
};
