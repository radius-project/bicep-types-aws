#!/usr/bin/env bash
# Copyright 2026 The Radius Authors.
# Licensed under the Apache License, Version 2.0.
#
# Checks that the radius submodule pins a commit in the Radius repository.
# Usage: check-radius-pin.sh [REF], where REF defaults to HEAD.
set -euo pipefail

repo=radius-project/radius
url="https://github.com/${repo}"
hint="Pin a commit from ${repo}. On a release branch, pin the commit the release ships (source.productCommit in its release plan)."
ref="${1:-HEAD}"

fail() {
  echo "::error::$*" >&2
  exit 1
}

commit="$(git rev-parse --verify --quiet --end-of-options "${ref}^{commit}")" ||
  fail "Could not resolve ${ref} to a commit. Check the name, or fetch it first."

entry="$(git ls-tree --full-tree "$commit" -- radius)"
[[ "$entry" == "160000 commit "* ]] ||
  fail "${ref} has no radius submodule. Expected a submodule entry at the radius path."
pin="${entry#160000 commit }"
pin="${pin%%$'\t'*}"

# Read the mapping from the revision being checked, not the working tree.
names=()
while IFS= read -r -d '' item; do
  [[ "${item#*$'\n'}" == radius ]] || continue
  name="${item%%$'\n'*}"
  name="${name#submodule.}"
  names+=("${name%.path}")
done < <(git config -z --blob "${commit}:.gitmodules" --get-regexp '^submodule\..*\.path$' 2>/dev/null || true)
[[ ${#names[@]} -eq 1 ]] ||
  fail "The .gitmodules file in ${ref} must map the radius path to exactly one submodule."
mapped="$(git config --blob "${commit}:.gitmodules" "submodule.${names[0]}.url" 2>/dev/null || true)"
[[ "$mapped" == "$url" || "$mapped" == "${url}.git" ]] ||
  fail "The radius submodule in ${ref} must use ${url} as its URL in .gitmodules."

scratch="$(mktemp -d)"
trap 'rm -rf "$scratch"' EXIT
git init --quiet "$scratch"

# Fetch only the pinned object, without its trees or history.
# Retry failures other than a missing object, which are usually network errors.
fetched=false
for attempt in 1 2 3; do
  if output="$(git -C "$scratch" fetch --quiet --depth=1 --filter=tree:0 -- "$url" "$pin" 2>&1)"; then
    fetched=true
    break
  fi
  [[ "$output" == *"not our ref"* ]] && break
  [[ "$attempt" == 3 ]] || sleep $((attempt * 5))
done

if [[ "$fetched" != true ]]; then
  [[ "$output" == *"not our ref"* ]] &&
    fail "The radius submodule pins ${pin:0:8}, which is not a commit in ${repo}. ${hint}"
  echo "$output" >&2
  fail "Could not check whether ${repo} has commit ${pin:0:8}, the radius submodule pin. See the git output above."
fi

# GitHub also serves tag and tree objects by ID, so check what was fetched.
type="$(git -C "$scratch" cat-file -t "$pin")"
[[ "$type" == commit ]] ||
  fail "The radius submodule pins ${pin:0:8}, which is a ${type} in ${repo}, not a commit. ${hint}"

echo "The radius submodule pins ${pin}, a commit in ${repo}."
