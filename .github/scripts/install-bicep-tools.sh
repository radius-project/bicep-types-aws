#!/usr/bin/env bash
# Copyright 2026 The Radius Authors.
# Licensed under the Apache License, Version 2.0.
set -euo pipefail

destination="${1:?Usage: install-bicep-tools.sh ABSOLUTE_DIRECTORY [oras]}"
[[ "$destination" == /* ]] || { echo "An absolute installation directory is required" >&2; exit 1; }
selection="${2:-all}"
[[ "$selection" == all || "$selection" == oras ]] || { echo "Unknown tool selection" >&2; exit 1; }

case "$(uname -s)/$(uname -m)" in
  Linux/x86_64)
    platform=linux; arch=amd64; bicep_asset=bicep-linux-x64
    bicep_hash=3e011d629ea4311b7a7dd8f0040ab2b1a072ea4ff5d02cb75e0e55a9a6703fb9
    oras_hash=f27adb935022d94df8dc77719c322dda592c78a0d57a6f7dcdd8d900b248c454 ;;
  Linux/aarch64)
    platform=linux; arch=arm64; bicep_asset=bicep-linux-arm64
    bicep_hash=9e1b4302ff15d6cb0f756c876d58e1dd19b63ba37929f9d004949d714b369348
    oras_hash=15702c6e3a4a56a8bd8ac5c17efdbcab56d9bada661ccbcf017f5b10c1d89399 ;;
  Darwin/x86_64)
    platform=darwin; arch=amd64; bicep_asset=bicep-osx-x64
    bicep_hash=b7543d186a29bb0b3971a0b3fc2f6f805de316232fd56c3a880aa86dea9a9035
    oras_hash=5e964f3d5a36eb9499a9d3e252a86b09e7adf3e6f6447eec56fd249c6702af7e ;;
  Darwin/arm64)
    platform=darwin; arch=arm64; bicep_asset=bicep-osx-arm64
    bicep_hash=7e1064cc780e1767822d7f112f25fdbe72c956e40f75c24254ce8530b41d649a
    oras_hash=217761a9500242ff473de8656b5aca21136ff39e17e9e61fd8936bbfd902704c ;;
  *) echo "Unsupported platform" >&2; exit 1 ;;
esac

mkdir -p "$destination"
scratch="$(mktemp -d)"
trap 'rm -f "$scratch/bicep" "$scratch/oras.tar.gz" "$scratch/oras"; rmdir "$scratch"' EXIT
verify() {
  local actual
  actual="$(shasum -a 256 "$1")"
  [[ "${actual%% *}" == "$2" ]] || { echo "Checksum mismatch: $1" >&2; exit 1; }
}
if [[ "$selection" == all ]]; then
  curl --fail --silent --show-error --location \
    "https://github.com/Azure/bicep/releases/download/v0.46.1/$bicep_asset" -o "$scratch/bicep"
  verify "$scratch/bicep" "$bicep_hash"
  install -m 755 "$scratch/bicep" "$destination/bicep"
fi
curl --fail --silent --show-error --location \
  "https://github.com/oras-project/oras/releases/download/v1.3.4/oras_1.3.4_${platform}_${arch}.tar.gz" \
  -o "$scratch/oras.tar.gz"
verify "$scratch/oras.tar.gz" "$oras_hash"
tar -xzf "$scratch/oras.tar.gz" -C "$scratch" oras
install -m 755 "$scratch/oras" "$destination/oras"
