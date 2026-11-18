// Copyright 2026 The Radius Authors.
// Licensed under the Apache License, Version 2.0.

import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import { isDeepStrictEqual } from "node:util";

const aws = { owner: "radius-project", repo: "bicep-types-aws" };
const radius = { owner: "radius-project", repo: "radius" };
const sha = /^(?!0{40}$)[a-f0-9]{40}$/;
const request = () => ({ signal: AbortSignal.timeout(20_000) });

async function rootTree(github, commit) {
  assert.match(commit, sha);
  const { data } = await github.rest.git.getTree({ ...aws, tree_sha: commit, request: request() });
  assert.equal(data.truncated, false, "Cannot authenticate an incomplete Git tree");
  return data.tree;
}

function pinIn(tree) {
  const pin = tree.find(({ path }) => path === "radius");
  if (!pin) return null;
  assert.ok(pin.mode === "160000" && pin.type === "commit", "radius must be a gitlink");
  assert.match(pin.sha, sha);
  return pin.sha;
}

export async function frozenRadiusPin(github, commit) {
  const pin = pinIn(await rootTree(github, commit));
  if (!pin) {
    // Historical sources predate the overlay. A removal must not downgrade its test.
    const { data } = await github.rest.repos.listCommits({
      ...aws, sha: commit, path: "radius", per_page: 1, request: request()
    });
    assert.equal(data.length, 0, "Frozen AWS source removed the Radius pin");
  }
  return pin;
}

async function requireAncestor(github, repo, commit, branch) {
  const { data: head } = await github.rest.repos.getBranch({ ...repo, branch, request: request() });
  assert.equal(head.protected, true, `Expected protected ${repo.repo}:${branch}`);
  const { data } = await github.rest.repos.compareCommitsWithBasehead({
    ...repo, basehead: `${commit}...${head.commit.sha}`, request: request()
  });
  assert.ok(["ahead", "identical"].includes(data.status), `${commit} is not on ${repo.repo}:${branch}`);
}

// R3 requests this evidence *before* creating the Radius tag. Read the plan at
// its merged Prepare Release PR, never from a dispatch payload or an open PR.
async function approvedPlan(github, version, path, required) {
  const head = `automation/prepare-release-${version.slice(1)}`;
  const pulls = await github.paginate(github.rest.pulls.list, {
    ...radius, state: "closed", base: "main", head: `radius-project:${head}`, per_page: 100,
    request: request()
  });
  const merged = pulls.filter((pr) => pr.merged_at && pr.base.ref === "main" && pr.head.ref === head &&
    pr.base.repo.full_name === "radius-project/radius" && pr.head.repo?.full_name === "radius-project/radius");
  if (!required && !merged.length) return null;
  assert.equal(merged.length, 1, `Expected one merged Radius Prepare Release PR for ${version}`);
  const commit = merged[0].merge_commit_sha;
  assert.match(commit, sha);
  await requireAncestor(github, radius, commit, "main");
  const { data: merge } = await github.rest.repos.getCommit({ ...radius, ref: commit, request: request() });
  assert.ok(merge.files.some((f) => f.filename === path && f.status === "added"),
    "The merged Radius PR must introduce this version's plan");
  const { data } = await github.rest.repos.getContent({ ...radius, ref: commit, path, request: request() });
  assert.ok(data.type === "file" && data.encoding === "base64" && data.content, "Missing approved Radius plan");
  const raw = Buffer.from(data.content, "base64");
  const planBlob = createHash("sha1").update(`blob ${raw.length}\0`).update(raw).digest("hex");
  assert.equal(data.sha, planBlob, "Approved plan blob does not match the raw committed bytes");
  const plan = JSON.parse(execFileSync("yq", ["-p=yaml", "-o=json", ".", "-"], {
    input: raw, timeout: 10_000, encoding: "utf8"
  }));
  return { plan, merge, planBlob };
}

const otherEntries = (tree) => Object.fromEntries(tree.filter(({ path }) => path !== "radius")
  .map(({ path, mode, type, sha }) => [path, [mode, type, sha]]));

async function requireTrustedTree(github, source, mergeBase, frozen) {
  const trusted = await rootTree(github, mergeBase);
  assert.ok(pinIn(trusted), "Trusted main source did not have a Radius pin");
  // Compare complete Git tree entries, not the REST comparison's capped file list.
  const frozenEntries = otherEntries(frozen);
  if (!isDeepStrictEqual(frozenEntries, otherEntries(trusted))) {
    // A rebase-merged CI backport can reproduce the controller's tree without
    // making the reviewed main commit an ancestor of the release branch.
    const controller = await rootTree(github, source.controller.commit);
    assert.ok(pinIn(controller) && isDeepStrictEqual(frozenEntries, otherEntries(controller)),
      "Release-only AWS source may change only the radius gitlink from a verified protected-main tree");
  }
}

async function verifyLandedLock(github, { version, planBlob, sibling, productCommit, landedCommit, frozen }) {
  const baseCommit = sibling.sourceCommit;
  assert.match(baseCommit, sha);
  const expectedTree = sibling.radiusPin?.expectedTree;
  assert.match(expectedTree, sha, "Missing approved AWS pin tree");
  assert.deepEqual(sibling.radiusPin, { productCommit, expectedTree }, "Invalid approved AWS pin intent");

  const ref = `heads/automation/release-state-aws-${version.slice(1)}`;
  const { data: state } = await github.rest.git.getRef({ ...radius, ref, request: request() });
  assert.equal(state.ref, `refs/${ref}`);
  assert.equal(state.object.type, "commit");
  assert.match(state.object.sha, sha);
  const lockCommit = state.object.sha;
  const { data: attestation } = await github.rest.repos.getCommit({ ...radius, ref: lockCommit, request: request() });
  assert.equal(attestation.sha, lockCommit);
  const bot = "radius-release[bot]";
  assert.ok(attestation.author?.login === bot && attestation.author.type === "Bot" &&
    [bot, "web-flow"].includes(attestation.committer?.login) &&
    attestation.commit.verification?.verified === true && attestation.commit.verification.reason === "valid",
  "AWS pin lock must be signed by the Radius release App");
  assert.deepEqual(attestation.parents.map((p) => p.sha), [productCommit], "Wrong AWS pin lock parent");
  const lockPath = ".github/release-state/aws-pin.json";
  assert.ok(attestation.files.length === 1 && attestation.files[0].filename === lockPath &&
    ["added", "modified"].includes(attestation.files[0].status), "Signed Radius commit must write only the AWS pin lock");
  const { data } = await github.rest.repos.getContent({
    ...radius, ref: lockCommit, path: lockPath, request: request()
  });
  assert.ok(data.type === "file" && data.encoding === "base64", "Missing signed AWS pin lock");
  const lock = JSON.parse(Buffer.from(data.content, "base64").toString("utf8"));
  assert.deepEqual(lock, { schemaVersion: 1, version, planBlob, baseCommit, productCommit, expectedTree, landedCommit },
    "AWS pin lock does not match the approved plan and tag");

  const { data: landed } = await github.rest.repos.getCommit({ ...aws, ref: landedCommit, request: request() });
  assert.equal(landed.sha, landedCommit);
  assert.equal(landed.commit.tree.sha, expectedTree, "Tagged AWS tree differs from the approved pin tree");
  if (landedCommit !== baseCommit) {
    assert.deepEqual(landed.parents.map((p) => p.sha), [baseCommit], "Landed AWS pin must descend directly from the approved base");
    const base = await rootTree(github, baseCommit);
    const oldPin = pinIn(base);
    assert.ok(oldPin && oldPin !== productCommit, "No pin update was needed or the base has no gitlink");
    assert.deepEqual(otherEntries(base), otherEntries(frozen), "Landed AWS commit changed more than the gitlink");
  }
}

export async function verifyPlannedSource(github, source, mergeBase = null) {
  const version = source.ref.slice("refs/tags/".length);
  const channel = version.slice(1).split(".").slice(0, 2).join(".");
  const branch = `release/${channel}`;

  const path = `.github/release-plans/${version}.yaml`;
  const approved = await approvedPlan(github, version, path, mergeBase !== null);
  if (!approved) {
    assert.equal(await frozenRadiusPin(github, source.commit), null,
      "A pin-aware AWS release requires a merged Radius Prepare Release PR");
    return; // A main-ancestral tag predating the submodule need not have a plan.
  }
  const { plan, merge, planBlob } = approved;
  assert.equal(plan.schemaVersion, 2);
  assert.equal(plan.version, version);
  assert.equal(plan.channel, channel);
  assert.equal(plan.releaseBranch, branch);
  assert.equal(plan.releasePlanPath, path);
  const siblings = plan.siblingRepositories.filter((sibling) =>
    sibling.name === aws.repo || sibling.repository === source.repository);
  assert.equal(siblings.length, 1, "Expected exactly one AWS sibling");
  const [sibling] = siblings;
  assert.equal(sibling.name, aws.repo);
  assert.equal(sibling.repository, source.repository);
  const hasIntent = Object.hasOwn(sibling, "radiusPin");
  if (!hasIntent) {
    assert.equal(sibling.sourceCommit, source.commit, "AWS tag differs from the approved sibling source");
    if (mergeBase === null) return;
  }
  await requireAncestor(github, aws, source.commit, branch);
  if (hasIntent && sibling.sourceRef === "main") {
    assert.match(sibling.sourceCommit, sha);
    await requireAncestor(github, aws, sibling.sourceCommit, "main");
  } else {
    assert.equal(sibling.sourceRef, branch);
  }
  const frozen = await rootTree(github, source.commit);
  const pin = pinIn(frozen);
  assert.ok(pin, "Release source must retain the Radius gitlink");
  assert.equal(plan.source.productCommit, pin, "Radius gitlink differs from approved source.productCommit");
  if (mergeBase !== null) await requireTrustedTree(github, source, mergeBase, frozen);

  if (plan.source.productRef === "HEAD") {
    assert.ok(plan.releaseType === "rc" && version.endsWith("-rc.1"), "Only a first RC can start from main");
    assert.deepEqual(merge.parents.map((parent) => parent.sha), [pin],
      "First RC must pin the Radius Prepare Release merge parent");
  } else {
    assert.equal(plan.source.productRef, `refs/remotes/origin/${branch}`);
    await requireAncestor(github, radius, pin, branch);
  }
  if (hasIntent) await verifyLandedLock(github, {
    version, planBlob, sibling, productCommit: pin, landedCommit: source.commit, frozen
  });
}
