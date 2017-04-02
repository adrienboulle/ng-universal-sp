const webpackClientConfig = require('../../../webpack.client.config');

webpackClientConfig.entry = {
  lazy: './built/src/app/client.js',
};

webpackClientConfig.module = {
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
    {
      test: /\.js$/,
      loader: 'babel-loader?presets[]=es2015',
    },
  ],
};

module.exports = webpackClientConfig;
