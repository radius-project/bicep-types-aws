// Copyright 2026 The Radius Authors.
// Licensed under the Apache License, Version 2.0.

import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import test from "node:test";

const script = new URL("./check-radius-pin.sh", import.meta.url).pathname;
const canonical = "https://github.com/radius-project/radius";
const forkUrl = "https://github.com/someone/radius";
const root = mkdtempSync(join(tmpdir(), "check-radius-pin-"));
const upstream = join(root, "upstream");
const fork = join(root, "fork");
const consumer = join(root, "consumer");

// Isolate from the user's git config, and send both GitHub URLs to local repositories.
const env = {
  ...process.env,
  GIT_CONFIG_GLOBAL: "/dev/null",
  GIT_CONFIG_NOSYSTEM: "1",
  GIT_AUTHOR_NAME: "Test",
  GIT_AUTHOR_EMAIL: "test@example.com",
  GIT_COMMITTER_NAME: "Test",
  GIT_COMMITTER_EMAIL: "test@example.com",
  GIT_CONFIG_COUNT: "2",
  GIT_CONFIG_KEY_0: `url.file://${upstream}.insteadOf`,
  GIT_CONFIG_VALUE_0: canonical,
  GIT_CONFIG_KEY_1: `url.file://${fork}.insteadOf`,
  GIT_CONFIG_VALUE_1: forkUrl
};

function git(cwd, args, input) {
  const result = spawnSync("git", args, { cwd, env, input, encoding: "utf8" });
  assert.equal(result.status, 0, result.stderr);
  return result.stdout.trim();
}

function initRepo(dir) {
  git(root, ["init", "--quiet", dir]);
  git(dir, ["config", "uploadpack.allowFilter", "true"]);
  git(dir, [
    "commit",
    "--quiet",
    "--allow-empty",
    "-m",
    `first commit in ${dir}`
  ]);
  return git(dir, ["rev-parse", "HEAD"]);
}

const radiusCommit = initRepo(upstream);
git(upstream, ["tag", "--annotate", "v1", "-m", "release"]);
const radiusTag = git(upstream, ["rev-parse", "v1"]);
const radiusTree = git(upstream, ["rev-parse", "HEAD^{tree}"]);
const forkCommit = initRepo(fork);
assert.notEqual(forkCommit, radiusCommit);
initRepo(consumer);
writeFileSync(
  join(consumer, ".gitmodules"),
  `[submodule "radius"]\n\tpath = radius\n\turl = ${canonical}\n`
);

function gitmodules(url, name = "radius") {
  return `[submodule "${name}"]\n\tpath = radius\n\turl = ${url}\n`;
}

// Builds a commit in the consumer repository with the given .gitmodules and radius entry.
function revision({
  modules = gitmodules(canonical),
  mode = "160000",
  object = radiusCommit
} = {}) {
  const index = join(root, "index");
  const indexEnv = { ...env, GIT_INDEX_FILE: index };
  rmSync(index, { force: true });
  const run = (args, input) => {
    const result = spawnSync("git", args, {
      cwd: consumer,
      env: indexEnv,
      input,
      encoding: "utf8"
    });
    assert.equal(result.status, 0, result.stderr);
    return result.stdout.trim();
  };
  if (modules !== null) {
    const blob = run(["hash-object", "-w", "--stdin"], modules);
    run(["update-index", "--add", "--cacheinfo", `100644,${blob},.gitmodules`]);
  }
  if (mode !== null) {
    run(["update-index", "--add", "--cacheinfo", `${mode},${object},radius`]);
  }
  return run(["commit-tree", run(["write-tree"]), "-m", "revision"]);
}

function check(ref) {
  const args = ref === undefined ? [script] : [script, ref];
  return spawnSync("bash", args, { cwd: consumer, env, encoding: "utf8" });
}

function assertFails(result, message) {
  assert.equal(result.status, 1, result.stdout + result.stderr);
  assert.match(result.stderr, message);
}

test.after(() => rmSync(root, { recursive: true, force: true }));

test("passes for a commit in radius-project/radius", () => {
  const result = check(revision());
  assert.equal(result.status, 0, result.stderr);
  assert.match(
    result.stdout,
    new RegExp(`pins ${radiusCommit}, a commit in radius-project/radius`)
  );
});

test("accepts the canonical URL with a .git suffix", () => {
  assert.equal(
    check(revision({ modules: gitmodules(`${canonical}.git`) })).status,
    0
  );
});

test("finds the radius path under any submodule name", () => {
  assert.equal(
    check(revision({ modules: gitmodules(canonical, "schemas") })).status,
    0
  );
});

test("fails for a commit missing from radius-project/radius", () => {
  assertFails(
    check(revision({ object: forkCommit })),
    /pins [0-9a-f]{8}, which is not a commit in radius-project\/radius/
  );
});

test("fails for an annotated tag ID", () => {
  assertFails(
    check(revision({ object: radiusTag })),
    /which is a tag in radius-project\/radius, not a commit/
  );
});

test("fails for a tree ID", () => {
  assertFails(
    check(revision({ object: radiusTree })),
    /which is a tree in radius-project\/radius, not a commit/
  );
});

test("reads the URL from the revision, not the working tree", () => {
  assertFails(
    check(revision({ modules: gitmodules(forkUrl) })),
    /must use https:\/\/github\.com\/radius-project\/radius as its URL/
  );
});

test("fails when a revision moves the URL and the pin to a fork", () => {
  assertFails(
    check(revision({ modules: gitmodules(forkUrl), object: forkCommit })),
    /must use https:\/\/github\.com\/radius-project\/radius as its URL/
  );
});

test("fails when .gitmodules does not map the radius path", () => {
  assertFails(
    check(revision({ modules: null })),
    /must map the radius path to exactly one submodule/
  );
});

test("fails when .gitmodules maps the radius path twice", () => {
  const modules = gitmodules(canonical) + gitmodules(forkUrl, "other");
  assertFails(
    check(revision({ modules })),
    /must map the radius path to exactly one submodule/
  );
});

test("fails for a regular file at radius", () => {
  const file = git(
    consumer,
    ["hash-object", "-w", "--stdin"],
    "not a submodule\n"
  );
  assertFails(
    check(revision({ mode: "100644", object: file })),
    /has no radius submodule/
  );
});

test("fails for a known revision without radius", () => {
  assertFails(check(revision({ mode: null })), /has no radius submodule/);
});

test("fails for an unknown ref with a different message", () => {
  const result = check("no-such-ref");
  assertFails(result, /Could not resolve no-such-ref to a commit/);
  assert.doesNotMatch(result.stderr, /has no radius submodule/);
});
