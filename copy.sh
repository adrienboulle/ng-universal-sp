#!/usr/bin/env bash

rm -rf built
mkdir built
mkdir built/src

# We do not want to build in src so we copy in built.
cp -r src/* built/src
