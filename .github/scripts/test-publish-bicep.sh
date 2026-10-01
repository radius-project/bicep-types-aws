#!/usr/bin/env bash
# Copyright 2026 The Radius Authors.
# Licensed under the Apache License, Version 2.0.
set -euo pipefail

command -v bicep >/dev/null
command -v oras >/dev/null
registry="$(docker run --detach --publish 127.0.0.1::5000 \
  registry:2.8.3@sha256:a3d8aaa63ed8681a604f1dea0aa03f100d5895b6a58ace528858a7b332415373)"
trap 'docker rm --force "$registry" >/dev/null' EXIT
port="$(docker port "$registry" 5000/tcp)"
port="${port##*:}"
ready=false
for _ in {1..30}; do
  if curl --fail --silent "http://localhost:${port}/v2/" >/dev/null; then ready=true; break; fi
  sleep 1
done
[[ "$ready" == true ]] || { echo "Local registry did not become ready" >&2; exit 1; }
AWS_BICEP_TEST_REGISTRY="localhost:${port}" node --test .github/scripts/publish-bicep.test.mjs
