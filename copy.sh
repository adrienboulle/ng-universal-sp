#!/usr/bin/env bash

env='DEV';

while getopts e: opt
do
  case "$opt" in
    e) env=$OPTARG
    ;;
  esac
done

rm -rf built
mkdir built
mkdir built/src

# We do not want to build in src so we copy in built.
cp -r src/* built/src
rm -r built/src/shared/config/base.conf.ts

case "$env" in
  "PRODUCTION")
    cp built/src/shared/config/prod.conf.ts built/src/shared/config/base.conf.ts
    ;;
  "DEV")
    cp built/src/shared/config/dev.conf.ts built/src/shared/config/base.conf.ts
    ;;
esac
