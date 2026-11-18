#!/usr/bin/env bash
# Copyright 2026 The Radius Authors.
# Licensed under the Apache License, Version 2.0.
set -euo pipefail

layer="${1:?Usage: smoke-test-aws-types.sh TYPES_LAYER radius|legacy}"
root="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
case "${2:?Specify radius or legacy}" in
  radius) template="$root/src/aws-type-generator/bicep-test/read-extra-property.bicep" ;;
  legacy) template="$root/.github/scripts/testdata/aws-publish/main.bicep" ;;
  *) echo "Unknown AWS extension schema contract: $2" >&2; exit 1 ;;
esac
work="$(mktemp -d)"
trap 'rm -rf "$work"' EXIT

# A local data-only Bicep extension wraps the unmodified OCI types layer as types.tgz.
cp "$layer" "$work/types.tgz"
tar -czf "$work/aws.tgz" -C "$work" types.tgz
cp "$template" "$work/main.bicep"
printf '%s\n' '{"extensions":{"aws":"./aws.tgz"}}' > "$work/bicepconfig.json"
if ! env -i PATH="$PATH" HOME="$work" bicep build "$work/main.bicep" --diagnostics-format sarif 2>"$work/diagnostics.json" ||
   ! jq -se 'length == 1 and (.[0].runs | length == 1 and (.[0].results == []))' "$work/diagnostics.json" >/dev/null; then
  cat "$work/diagnostics.json" >&2
  echo "Packaged AWS types failed the $2 Bicep compile; expected no errors or warnings." >&2
  exit 1
fi
