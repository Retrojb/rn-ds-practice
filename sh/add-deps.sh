#!/bin/bash

  pkg=$1
  shift
  for i in "$@"; do
    yarn workspace "$pkg" add "$i" -D
  done

