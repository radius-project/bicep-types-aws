#!/usr/bin/env bash
# Copyright 2026 The Radius Authors.
# Licensed under the Apache License, Version 2.0.
#
# Checks that the radius submodule pins a commit in the Radius repository.
# Usage: check-radius-pin.sh [REF], where REF defaults to HEAD.
set -euo pipefail

ref="${1:-HEAD}"
root="$(git rev-parse --show-toplevel)"
url="$(git -C "$root" config -f .gitmodules submodule.radius.url)"
repo="${url#https://github.com/}"
repo="${repo%.git}"

pin="$(git -C "$root" rev-parse --verify --quiet "${ref}:radius" || true)"
if [[ -z "$pin" ]]; then
  echo "::error::No radius submodule found at ${ref}." >&2
  exit 1
fi

scratch="$(mktemp -d)"
trap 'rm -rf "$scratch"' EXIT
git init --quiet "$scratch"

# Fetch only the pinned commit object, without its trees or history.
# Retry other failures, which are usually network errors.
for attempt in 1 2 3; do
  if output="$(git -C "$scratch" fetch --quiet --depth=1 --filter=tree:0 -- "$url" "$pin" 2>&1)"; then
    echo "The radius submodule pins ${pin}, a commit in ${repo}."
    exit 0
  fi
  [[ "$output" == *"not our ref"* || "$attempt" == 3 ]] && break
  sleep $((attempt * 5))
done

if [[ "$output" == *"not our ref"* ]]; then
  echo "::error::The radius submodule pins ${pin:0:8}, which is not a commit in ${repo}. Pin a commit from ${repo}. On a release branch, pin the commit the release ships (source.productCommit in its release plan)." >&2
else
  echo "$output" >&2
  echo "::error::Could not check whether ${repo} has commit ${pin:0:8}, the radius submodule pin. See the git output above." >&2
fi
exit 1
