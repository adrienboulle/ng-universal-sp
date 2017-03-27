#!/usr/bin/env bash

rm -rf built
mkdir built
mkdir built/src

# We do not want to build in src so we copy in build.
cp -r src/* built/src

ngc

# Bundle the server which hosts all the server side apps.
webpack  --config webpack.server.config.js

# Bundle the clients into individual bundles.
webpack  --config webpack.client.config.js
