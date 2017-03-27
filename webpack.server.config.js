module.exports = {
  target: 'node',
  entry: './built/src/server.js',
  output: {filename: './built/server-bundle.js'},
  resolve: {extensions: ['.js']},
};
