const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    login: './built/src/login/client.js',
    helloworld: './built/src/helloworld/client.js',
  },
  output: {path: path.join(__dirname, 'built'), filename: '[name]-bundle.js'},
  module: {loaders: [{test: /\.js$/, loader: 'babel-loader?presets[]=es2015'}]},
  resolve: {extensions: ['.js']},
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      output: {
        comments: false,
      },
    })
  ],
};
