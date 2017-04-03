#!/usr/bin/env bash

env=$NODE_ENV;

if ! [ $env ]; then
  env=dev
fi

rm -rf built
mkdir built
mkdir built/src

# We do not want to build in src so we copy in built.
cp -r src/* built/src
rm -r built/src/shared/config/base.conf.ts

case "$env" in
  "production")
    cp built/src/shared/config/prod.conf.ts built/src/shared/config/base.conf.ts
    ;;
  "dev")
    cp built/src/shared/config/dev.conf.ts built/src/shared/config/base.conf.ts
    ;;
esac
