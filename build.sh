node_modules/.bin/ngc

node_modules/.bin/webpack --config webpack.client.config.js
node_modules/.bin/webpack --config webpack.server.config.js
node_modules/.bin/webpack --config src/app/lazy/webpack.lazy.config.js
