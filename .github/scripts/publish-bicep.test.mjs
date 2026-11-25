// Copyright 2026 The Radius Authors.
// Licensed under the Apache License, Version 2.0.

import assert from "node:assert/strict";
import { test } from "node:test";
import { cp, lstat, mkdir, mkdtemp, readFile, readdir, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import {
  capture, captureJob, checkReleaseHistory, existingManifest, hash, identity,
  mainWorkflow, maximumSnapshotSize, originalSource, packageInfo, prepare, publish,
  releaseWorkflow, repository, select, selectSnapshot, snapshotName, target, tool,
  validateManifest, verifyArtifact, verifyCapture, verifySource, versions,
  releaseRunName, resolveGeneration, prepareSchemas, schemaSnapshotName, frozenRadiusPin
} from "./publish-bicep.mjs";

const sha = "a".repeat(40);
const controllerSha = "c".repeat(40);
const fixturePin = "e".repeat(40);
const source = {
  repository, ref: "refs/tags/v0.62.1", commit: sha,
  workflow: releaseWorkflow, runId: 100, generationAttempt: 1,
  controller: { repository, ref: "refs/heads/main", commit: controllerSha }
};
const { controller: unusedController, ...mainSource } = source;
const main = { ...mainSource, workflow: mainWorkflow, ref: "refs/heads/main" };
const artifact = {
  id: 200, name: snapshotName(source), expired: false, size_in_bytes: 10,
  digest: `sha256:${"b".repeat(64)}`, created_at: "2026-10-01T00:01:00Z",
  workflow_run: { id: 100, head_sha: controllerSha, head_branch: "main" }
};
const manifest = {
  schemaVersion: 2, mediaType: "application/vnd.oci.image.manifest.v1+json",
  artifactType: "application/vnd.ms.bicep.provider.artifact",
  config: {
    mediaType: "application/vnd.ms.bicep.provider.config.v1+json",
    digest: `sha256:${"1".repeat(64)}`, size: 2
  },
  layers: [{
    mediaType: "application/vnd.ms.bicep.provider.layer.v1.tar+gzip",
    digest: `sha256:${"2".repeat(64)}`, size: 12
  }],
  annotations: { "bicep.serialization.format": "v1" }
};
const apiRun = (s = source) => ({
  id: s.runId, run_attempt: s.generationAttempt, run_number: s.runId,
  repository: { full_name: repository }, head_repository: { full_name: repository },
  head_sha: s.controller?.commit ?? s.commit, head_branch: "main",
  path: s.workflow, event: s.workflow === releaseWorkflow ? "repository_dispatch" : "push",
  display_title: s.workflow === releaseWorkflow ? releaseRunName(s) : "Main",
  status: "completed", conclusion: "failure"
});
function github(s = source, overrides = {}) {
  const state = {
    mainSha: sha, protected: true, tagSha: sha, comparison: "identical", radiusPin: fixturePin,
    runs: [], artifacts: [], visibility: "public",
    jobs: [{
      name: s.workflow === releaseWorkflow ? captureJob : "Capture main AWS Bicep types",
      status: "completed", conclusion: "success",
      started_at: "2026-10-01T00:00:00Z", completed_at: "2026-10-01T00:02:00Z"
    }],
    ...overrides
  };
  const api = {
    rest: {
      git: { getTree: async () => ({ data: { truncated: false, tree: [
        { path: "radius", type: "commit", mode: "160000", sha: state.radiusPin }
      ] } }) },
      repos: {
        getBranch: async () => ({ data: { name: "main", protected: state.protected, commit: { sha: state.mainSha } } }),
        getCommit: async () => ({ data: { sha: state.tagSha } }),
        compareCommitsWithBasehead: async () => ({ data: { status: state.comparison } })
      },
      actions: {
        getArtifact: async () => ({ data: {
          ...artifact, workflow_run: {
            ...artifact.workflow_run, head_sha: s.controller?.commit ?? s.commit, head_branch: "main"
          }
        } }),
        getWorkflowRunAttempt: async ({ run_id, attempt_number }) => ({
          data: { ...apiRun(s), id: run_id, run_number: run_id, run_attempt: attempt_number }
        }),
        listWorkflowRuns: () => state.runs,
        listWorkflowRunArtifacts: () => state.artifacts,
        listJobsForWorkflowRunAttempt: () => state.jobs
      },
      packages: {
        getPackageForOrganization: async () => ({ data: { visibility: state.visibility } })
      }
    },
    paginate: async (method) => method()
  };
  return { api, state };
}
const scratch = async (t) => {
  const path = await mkdtemp(join(tmpdir(), "aws-bicep-test-"));
  t.after(() => rm(path, { recursive: true, force: true }));
  return path;
};
function receipt(s = source, bytes = JSON.stringify(manifest)) {
  const version = versions(s).version;
  return {
    status: "prepared",
    record: {
      name: "aws-bicep-types", source: { repository, commit: s.commit },
      version, reference: `${target}:${version}`, digest: hash(bytes),
      generation: {
        workflow: s.workflow, runId: s.runId, runAttempt: 1,
        artifactId: artifact.id, artifactDigest: artifact.digest
      }
    }
  };
}
const missing = (reference) => Object.assign(new Error("not found"), {
  code: 1,
  stderr: `Error response from registry: failed to fetch the content of "${reference}": ${reference}: not found\n`
});

test("release control is default-main dispatch with a separately frozen source", () => {
  const context = {
    repo: { owner: "radius-project", repo: "bicep-types-aws" },
    eventName: "repository_dispatch", ref: "refs/heads/main", sha: controllerSha, runId: 100,
    payload: { action: "aws-bicep-release", client_payload: { version: "v0.62.1", sourceCommit: sha } }
  };
  const env = {
    GITHUB_WORKFLOW_REF: `${repository}/${releaseWorkflow}@refs/heads/main`,
    GITHUB_RUN_ATTEMPT: "1", GITHUB_REF_PROTECTED: "true"
  };
  assert.deepEqual(identity(context, env), source);
  for (const version of ["v0.62", "v0.62.1-rc1", "v0.62.1-rc.0", "v01.2.3", "topic", "v0.62.1+meta"]) {
    assert.throws(() => identity({ ...context, payload: {
      ...context.payload, client_payload: { ...context.payload.client_payload, version }
    } }, env));
  }
  for (const eventName of ["push", "workflow_dispatch"])
    assert.throws(() => identity({ ...context, eventName, ref: source.ref }, env));
  assert.throws(() => identity({ ...context, ref: "refs/heads/candidate" }, env));
  assert.throws(() => identity({ ...context, payload: {
    ...context.payload, client_payload: { ...context.payload.client_payload, command: "candidate-command" }
  } }, env));
  for (const extra of [
    { generationRunId: 90 }, { generationRunAttempt: 1 },
    { generationRunId: "90", generationRunAttempt: 1 },
    { generationRunId: 90, generationRunAttempt: 0 }
  ]) assert.throws(() => identity({ ...context, payload: {
    ...context.payload, client_payload: { ...context.payload.client_payload, ...extra }
  } }, env));
  assert.throws(() => identity({ ...context, eventName: "pull_request" }, env));
  assert.throws(() => identity({ ...context, repo: { owner: "fork", repo: "bicep-types-aws" } }, env));
  assert.throws(() => identity(context, { ...env, GITHUB_WORKFLOW_REF: "wrong" }));
  assert.deepEqual(identity({ ...context, sha, eventName: "push", ref: main.ref }, {
    ...env, GITHUB_WORKFLOW_REF: `${repository}/${mainWorkflow}@${main.ref}`
  }), main);
  assert.throws(() => identity({ ...context, sha, eventName: "push", ref: main.ref }, {
    ...env, GITHUB_WORKFLOW_REF: `${repository}/${mainWorkflow}@${main.ref}`,
    GITHUB_REF_PROTECTED: "false"
  }));
});

test("OCI versions do not change legacy extension metadata or @default API versions", () => {
  assert.deepEqual(versions(main), { version: "edge", typeVersion: "latest" });
  assert.deepEqual(versions(source), { version: "0.62.1", typeVersion: "0.62" });
  assert.deepEqual(versions({ ...source, ref: "refs/tags/v0.62.1-rc.2" }),
    { version: "0.62.1-rc.2", typeVersion: "0.62.1-rc.2" });
});

test("frozen release source must still resolve and its controller must belong to protected main", async () => {
  await verifySource(github().api, source);
  for (const state of [{ tagSha: "c".repeat(40) }, { protected: false }, { comparison: "diverged" }]) {
    await assert.rejects(verifySource(github(source, state).api, source));
  }
});

function releaseHistory(s = source, overrides = {}) {
  const { api, state } = github(s, {
    mainSha: "d".repeat(40), releaseSha: "e".repeat(40),
    releaseBranch: "release/0.62",
    sourceMain: "diverged", sourceRelease: "ahead", controllerMain: "ahead",
    ...overrides
  });
  const branches = [];
  const comparisons = [];
  api.rest.repos.getBranch = async ({ branch }) => {
    branches.push(branch);
    if (branch === "main")
      return { data: { name: "main", protected: state.protected, commit: { sha: state.mainSha } } };
    assert.equal(branch, state.releaseBranch, "Only the version-matched channel may be queried");
    if (state.branchError) throw state.branchError;
    return { data: { name: branch, commit: { sha: state.releaseSha } } };
  };
  api.rest.repos.compareCommitsWithBasehead = async ({ basehead }) => {
    comparisons.push(basehead);
    const [base, head] = basehead.split("...");
    if (base === s.commit && state.comparisonError) throw state.comparisonError;
    if (head === state.releaseSha && state.releaseComparisonError) throw state.releaseComparisonError;
    const status = base !== s.commit ? state.controllerMain :
      head === state.mainSha ? state.sourceMain : state.sourceRelease;
    return { data: { status } };
  };
  return { api, state, branches, comparisons };
}

test("release-only stable and RC sources accept only their version-matched channel", async () => {
  for (const [ref, releaseBranch] of [
    [source.ref, "release/0.62"], ["refs/tags/v0.62.1-rc.2", "release/0.62"],
    ["refs/tags/v1.73.2", "release/1.73"]
  ]) {
    for (const sourceMain of ["behind", "diverged"]) {
      for (const sourceRelease of ["ahead", "identical"]) {
        const s = { ...source, ref };
        const { api, state, branches, comparisons } = releaseHistory(s, {
          sourceMain, sourceRelease, releaseBranch
        });
        assert.equal(await verifySource(api, s), state.mainSha);
        assert.deepEqual(branches, ["main", "main", releaseBranch]);
        assert.deepEqual(comparisons, [
          `${controllerSha}...${state.mainSha}`, `${sha}...${state.mainSha}`,
          `${sha}...${state.releaseSha}`
        ]);
      }
    }
  }
});

test("main release sources do not require a release branch and main publication is unchanged", async () => {
  for (const sourceMain of ["ahead", "identical"]) {
    const { api, state, branches } = releaseHistory(source, {
      sourceMain, branchError: new Error("release branch does not exist")
    });
    assert.equal(await verifySource(api, source), state.mainSha);
    assert.deepEqual(branches, ["main", "main"]);
  }
  const { api, state, branches, comparisons } = releaseHistory(main);
  assert.equal(await verifySource(api, main), state.mainSha);
  assert.deepEqual(branches, ["main"]);
  assert.deepEqual(comparisons, []);
});

test("renamed release branches are rejected before comparing their tips", async () => {
  for (const name of ["release/0.63", "renamed-release", undefined]) {
    const { api, state, comparisons } = releaseHistory();
    const getBranch = api.rest.repos.getBranch;
    api.rest.repos.getBranch = async (args) => {
      const response = await getBranch(args);
      if (args.branch !== "main") response.data.name = name;
      return response;
    };
    await assert.rejects(verifySource(api, source), /Release branch name must match/);
    assert.deepEqual(comparisons, [
      `${controllerSha}...${state.mainSha}`, `${sha}...${state.mainSha}`
    ]);
  }
});

test("both main lookups reject protected renamed branches before ancestry comparison", async () => {
  for (const lookup of [1, 2]) {
    for (const name of ["renamed-main", undefined]) {
      const { api, state, comparisons, branches } = releaseHistory();
      const getBranch = api.rest.repos.getBranch;
      let mainLookups = 0;
      api.rest.repos.getBranch = async (args) => {
        const response = await getBranch(args);
        if (args.branch === "main" && ++mainLookups === lookup) response.data.name = name;
        return response;
      };
      await assert.rejects(verifySource(api, source), /Main branch name must match/);
      assert.deepEqual(comparisons, lookup === 1 ? [] : [`${controllerSha}...${state.mainSha}`]);
      assert.deepEqual(branches, Array(lookup).fill("main"));
    }
  }
});

test("unrelated or wrong-channel sources and malformed release versions fail closed", async () => {
  for (const sourceRelease of ["behind", "diverged", "unknown", undefined]) {
    const { api, branches } = releaseHistory(source, { sourceRelease });
    await assert.rejects(verifySource(api, source));
    assert.deepEqual(branches, ["main", "main", "release/0.62"]);
  }
  for (const ref of ["refs/tags/v0.62", "refs/tags/v0.62.1-rc1", "refs/tags/v00.62.1"]) {
    const s = { ...source, ref };
    const { api, branches } = releaseHistory(s);
    await assert.rejects(verifySource(api, s), /Invalid full release version/);
    assert.ok(branches.every((branch) => branch === "main"));
  }
});

test("source API failures and invalid main comparisons never authorize release fallback", async () => {
  for (const status of [401, 403, 404, 500, undefined]) {
    const error = Object.assign(new Error("comparison unavailable"), { status });
    const { api, branches } = releaseHistory(source, { comparisonError: error });
    await assert.rejects(verifySource(api, source), (actual) => actual === error);
    assert.deepEqual(branches, ["main", "main"]);
    const channel = releaseHistory(source, { branchError: error });
    await assert.rejects(verifySource(channel.api, source), (actual) => actual === error);
    const channelComparison = releaseHistory(source, { releaseComparisonError: error });
    await assert.rejects(verifySource(channelComparison.api, source), (actual) => actual === error);
  }
  for (const sourceMain of ["unknown", "", undefined]) {
    const { api, branches } = releaseHistory(source, { sourceMain });
    await assert.rejects(verifySource(api, source));
    assert.deepEqual(branches, ["main", "main"]);
  }
  for (const changes of [{ mainSha: "invalid" }, { releaseSha: "invalid" }]) {
    await assert.rejects(verifySource(releaseHistory(source, changes).api, source));
  }
});

test("release ancestry cannot rescue a moved tag or an off-main current or original controller", async () => {
  for (const changes of [{ tagSha: "f".repeat(40) }, { controllerMain: "diverged" }]) {
    const { api, branches } = releaseHistory(source, changes);
    await assert.rejects(verifySource(api, source));
    assert.ok(branches.every((branch) => branch === "main"));
  }
  const { api, branches } = releaseHistory(source, { controllerMain: "behind" });
  await assert.rejects(resolveGeneration(api, { ...source, runId: 101 }, "100", "1"));
  assert.deepEqual(branches, ["main"]);
});

test("release branch advances preserve frozen source and original capture recovery", async () => {
  const { api, state, branches } = releaseHistory();
  await verifySource(api, source);
  state.mainSha = "f".repeat(40);
  state.releaseSha = "b".repeat(40);
  const current = { ...source, runId: 101, controller: { ...source.controller, commit: state.mainSha } };
  const original = await resolveGeneration(api, current, "100", "1");
  assert.deepEqual(original, source);
  assert.equal(await verifySource(api, original), state.mainSha);
  assert.equal(branches.filter((branch) => branch === "release/0.62").length, 2);
});

test("cross-run recovery requires an original run and capture attempt", () => {
  assert.deepEqual(originalSource(source, "90", "2"), {
    ...source, runId: 90, generationAttempt: 2
  });
  for (const args of [["90", ""], ["", "2"], ["0", "1"], ["90", "1.5"]])
    assert.throws(() => originalSource(source, ...args));
  assert.throws(() => originalSource(main, "90", "1"));
});

test("recovery authenticates the original controller independently of the current controller", async (t) => {
  const current = {
    ...source, runId: 101,
    controller: { ...source.controller, commit: "d".repeat(40) }
  };
  const { api } = github(source);
  const generation = await resolveGeneration(api, current, "100", "1");
  assert.deepEqual(generation, source);
  const directory = await scratch(t);
  const archive = join(directory, "snapshot.tar");
  await writeFile(archive, "original capture");
  const originalArtifact = { ...artifact, digest: hash(await readFile(archive)) };
  const raw = JSON.stringify(manifest);
  const run = async (args) => {
    if (args.includes("schemas/radius-commit")) return fixturePin;
    if (args[0] === "tar") return JSON.stringify({ source, manifestDigest: hash(raw) });
    if (args.includes("fetch-config")) return "{}";
    if (args.includes("fetch")) return raw;
    return "";
  };
  const prepared = await prepare(api, archive, generation, originalArtifact, directory, run);
  assert.deepEqual(prepared.record.generation, {
    workflow: releaseWorkflow, runId: 100, runAttempt: 1,
    artifactId: artifact.id, artifactDigest: originalArtifact.digest
  });
  assert.deepEqual(Object.keys(prepared.record).sort(),
    ["name", "source", "version", "reference", "digest", "generation"].sort());
  assert.deepEqual(prepared.record.source, { repository, commit: sha });
  await assert.rejects(prepare(api, archive, generation, originalArtifact, directory,
    (args) => args.includes("schemas/radius-commit") ? controllerSha : run(args)), /frozen gitlink/);
  await assert.rejects(prepare(api, archive, generation, originalArtifact, directory, (args) => {
    if (args.includes(".github/scripts/smoke-test-aws-types.sh")) throw new Error("invalid packaged overlay");
    assert.ok(!args.includes("push"), "Never stamp a rejected recovery snapshot");
    return run(args);
  }), /invalid packaged overlay/);
  await assert.rejects(prepare(api, archive, { ...generation, controller: current.controller },
    originalArtifact, directory, run));
  for (const mutation of [
    { event: "push" }, { head_branch: "v0.62.1" }, { path: mainWorkflow },
    { display_title: `Publish AWS v0.62.1 at ${"e".repeat(40)}` }
  ]) {
    api.rest.actions.getWorkflowRunAttempt = async () => ({ data: { ...apiRun(source), ...mutation } });
    await assert.rejects(resolveGeneration(api, current, "100", "1"));
  }
});

test("schema handoff verifies controller job, digest and safe data before extracting", async (t) => {
  const directory = await scratch(t);
  const archive = join(directory, "inputs.tar");
  await writeFile(archive, "raw schema input");
  const inputArtifact = {
    ...artifact, name: schemaSnapshotName(source), digest: hash(await readFile(archive))
  };
  const { api, state } = github(source);
  state.jobs[0].name = "Capture AWS schema inputs";
  let extracted = false;
  const run = async (args) => {
    if (args.includes("-xOf")) return JSON.stringify(source);
    if (args.includes("-tf")) return "source.json\nschemas/\nschemas/AWS::S3::Bucket.json\n";
    if (args.includes("-tvf")) return "-rw-r--r-- source.json\ndrwxr-xr-x schemas/\n-rw-r--r-- schemas/AWS::S3::Bucket.json\n";
    extracted = true;
    return "";
  };
  await prepareSchemas(api, archive, source, inputArtifact, directory, run);
  assert.equal(extracted, true);
  for (const invalid of ["../escape", "/absolute", "schemas/../../escape"]) {
    extracted = false;
    await assert.rejects(prepareSchemas(api, archive, source, inputArtifact, directory,
      (args) => args.includes("-tf") ? invalid : run(args)));
    assert.equal(extracted, false);
  }
  extracted = false;
  await assert.rejects(prepareSchemas(api, archive, source, inputArtifact, directory,
    (args) => args.includes("-tvf") ? "lrwxrwxrwx schemas/link" : run(args)), /links/);
  assert.equal(extracted, false);
  state.jobs[0].conclusion = "failure";
  await assert.rejects(prepareSchemas(api, archive, source, inputArtifact, directory, run));
  assert.equal(extracted, false);
});

test("missing, expired, ambiguous, oversized and substituted snapshots fail closed", () => {
  assert.equal(selectSnapshot([artifact], source, false), artifact);
  assert.equal(selectSnapshot([], source, false), undefined);
  assert.throws(() => selectSnapshot([], { ...source, generationAttempt: 2 }, false));
  assert.throws(() => selectSnapshot([], source, true));
  assert.throws(() => selectSnapshot([artifact, artifact], source, false));
  for (const change of [
    { expired: true }, { digest: "bad" }, { size_in_bytes: maximumSnapshotSize + 1 },
    { name: "wrong" }, { workflow_run: { ...artifact.workflow_run, head_sha: sha } }
  ]) assert.throws(() => verifyArtifact({ ...artifact, ...change }, source));
});

test("original successful capture remains valid when later publication failed", async () => {
  await verifyCapture(github().api, source, artifact);
  for (const change of [
    { conclusion: "failure" }, { name: "Another job" },
    { completed_at: "2026-10-01T00:00:30Z" }
  ]) {
    const { api, state } = github();
    state.jobs[0] = { ...state.jobs[0], ...change };
    await assert.rejects(verifyCapture(api, source, artifact));
  }
});

test("successful duplicate dispatch fails; same run retry and explicit failed recovery differ", () => {
  const old = apiRun();
  const retry = { ...source, generationAttempt: 2 };
  checkReleaseHistory([{ ...old, conclusion: "success" }], retry, source, false, 100);
  const recovery = { ...source, runId: 101 };
  checkReleaseHistory([apiRun(recovery)], retry, retry, false, 100);
  assert.throws(() => checkReleaseHistory([{ ...old, conclusion: "success" }], recovery, source, true, 101));
  assert.throws(() => checkReleaseHistory([old], recovery, recovery, false, 101));
  checkReleaseHistory([old], recovery, source, true, 101);
  assert.throws(() => checkReleaseHistory([{ ...old, status: "in_progress" }], recovery, source, true, 101));
  assert.throws(() => checkReleaseHistory([{ ...old, display_title: `Publish AWS v0.62.1 at ${"d".repeat(40)}` }], recovery, source, true, 101));
});

test("later queued dispatches cannot prevent the active release's first capture", async () => {
  for (const status of ["queued", "pending"]) {
    // Run IDs are deliberately not ordered: only the authenticated run_number decides.
    const later = { ...apiRun(), id: 99, run_number: 11, status, conclusion: null };
    const { api } = github(source, { runs: [later] });
    api.rest.actions.getWorkflowRunAttempt = async () => ({
      data: { ...apiRun(), run_number: 10 }
    });
    assert.equal(await select(api, source, source, false, async (args) => {
      throw missing(args.at(-1));
    }), undefined);
  }
});

test("release ordering retains completed, active and earlier recovery history", () => {
  const other = { ...apiRun(), id: 99, run_number: 11 };
  for (const status of ["in_progress", "waiting", "completed"]) {
    assert.throws(() => checkReleaseHistory(
      [{ ...other, status }], source, source, false, 10));
  }
  assert.throws(() => checkReleaseHistory(
    [{ ...other, conclusion: "success" }], source, source, true, 10), /successful/);
  for (const status of ["queued", "pending"]) {
    assert.throws(() => checkReleaseHistory(
      [{ ...other, run_number: 9, status }], source, source, false, 10), /active/);
  }
  const recovery = { ...source, runId: 101 };
  checkReleaseHistory([
    apiRun(source),
    { ...other, id: 102, run_number: 102, status: "queued" }
  ], recovery, source, true, 101);
  assert.throws(() => checkReleaseHistory([], source, source, false, undefined), /authenticated/);
  assert.throws(() => checkReleaseHistory(
    [{ ...other, run_number: undefined, status: "queued" }], source, source, false, 10), /history/);
});

test("preflight refuses an existing version without capture before generation", async () => {
  await assert.rejects(select(github().api, source, source, false,
    async () => JSON.stringify(manifest)), /never regenerate/);
  await assert.rejects(select(github(source, { artifacts: [] }).api,
    { ...source, generationAttempt: 2 }, { ...source, generationAttempt: 2 }, false),
    /snapshot missing/);
});

test("authorization/transport failures are not registry or package absence", async () => {
  const reference = `${target}:0.62.1`;
  assert.equal(await existingManifest(reference, async () => { throw missing(reference); }), null);
  for (const error of [
    Object.assign(new Error("denied"), { code: 1, stderr: "403 Forbidden" }),
    Object.assign(new Error("absent"), { code: 1, stderr: "404 Not Found" }),
    new Error("connection reset")
  ]) await assert.rejects(existingManifest(reference, async () => { throw error; }));
  for (const status of [401, 403, 404, 500]) {
    const { api } = github();
    api.rest.packages.getPackageForOrganization = async () => { throw Object.assign(new Error("API failure"), { status }); };
    await assert.rejects(packageInfo(api));
    await assert.rejects(select(api, source, source, false));
  }
});

test("reject executable config, extra layers and foreign blob URLs", () => {
  validateManifest(manifest, {});
  assert.throws(() => validateManifest(manifest, { executable: "bad" }));
  assert.throws(() => validateManifest({ ...manifest, layers: [...manifest.layers, manifest.layers[0]] }, {}));
  assert.throws(() => validateManifest({ ...manifest, config: { ...manifest.config, urls: ["https://example.invalid"] } }, {}));
});

test("same-run retry record retains original capture attempt and artifact digest", async (t) => {
  const directory = await scratch(t);
  const archive = join(directory, "snapshot.tar");
  await writeFile(archive, "immutable snapshot");
  const actualArtifact = { ...artifact, digest: hash(await readFile(archive)) };
  const raw = JSON.stringify(manifest);
  const run = async (args) => {
    if (args.includes("schemas/radius-commit")) return fixturePin;
    if (args[0] === "tar") return JSON.stringify({ source, manifestDigest: hash(raw) });
    if (args.includes("fetch-config")) return "{}";
    if (args.includes("fetch")) return raw;
    return "";
  };
  const result = await prepare(github().api, archive,
    { ...source, generationAttempt: 3 }, actualArtifact, directory, run);
  assert.equal(result.record.generation.runAttempt, 1);
  assert.equal(result.record.generation.runId, 100);
  assert.equal(result.record.generation.artifactDigest, actualArtifact.digest);
  await assert.rejects(prepare(github().api, archive, source,
    { ...actualArtifact, digest: artifact.digest }, directory, run), /digest mismatch/);
});

test("identical release retry verifies only; conflicting versions never write", async (t) => {
  const directory = await scratch(t);
  const bytes = JSON.stringify(manifest);
  const commands = [];
  const run = async (args) => { commands.push(args); return bytes; };
  await publish(github().api, source, receipt(), directory, run);
  assert.ok(commands.every((args) => !args.includes("cp")));
  assert.deepEqual(await readdir(join(directory, "record")), ["aws-bicep-extension.json"]);
  commands.length = 0;
  await assert.rejects(publish(github().api, source, receipt(), directory, async (args) => {
    commands.push(args); return "different";
  }), /conflict/);
  assert.ok(commands.every((args) => !args.includes("cp")));
});

test("release publication never writes ACR or emits compatibility state", async (t) => {
  for (const ref of ["refs/tags/v0.62.1", "refs/tags/v0.62.1-rc.2"]) {
    const s = { ...source, ref };
    const directory = await scratch(t);
    const result = receipt(s);
    let uploaded = false;
    await publish(github(s).api, s, result, directory, async (args) => {
      assert.ok(args.every((arg) => !arg.includes("azurecr.io")));
      if (args.includes("cp")) uploaded = true;
      if (args.includes("fetch") && !uploaded) throw missing(result.record.reference);
      return JSON.stringify(manifest);
    });
    assert.equal(uploaded, true);
    assert.equal(result.status, "published");
    assert.equal(result.mirror, undefined);
  }
});

test("main is published only after uploaded digest, Public and anonymous GHCR verification", async (t) => {
  const directory = await scratch(t);
  const result = receipt(main);
  const commands = [];
  const { api } = github(main);
  api.rest.packages.getPackageForOrganization = async () => {
    assert.equal(result.status, "uploaded");
    assert.equal(result.uploadedDigest, result.record.digest);
    return { data: { visibility: "public" } };
  };
  await publish(api, main, result, directory, async (args, options) => {
    commands.push(args);
    if (options?.env) {
      assert.equal(result.status, "uploaded");
      assert.equal(result.visibility, "public");
      assert.deepEqual(JSON.parse(await readFile(join(options.env.DOCKER_CONFIG, "config.json"))), {});
    } else {
      assert.equal(result.status, "partial");
    }
    return JSON.stringify(manifest);
  });
  assert.equal(commands.filter((args) => args.includes("cp")).length, 1);
  assert.equal(commands.filter((args) => args.includes("fetch")).length, 2);
  assert.ok(commands.every((args) => args.every((arg) => !arg.includes("azurecr.io"))));
  const saved = JSON.parse(await readFile(join(directory, "receipt.json")));
  assert.equal(saved.status, "published");
  assert.equal(saved.mirror, undefined);
  assert.deepEqual(JSON.parse(await readFile(join(directory, "record/aws-bicep-extension.json"))), result.record);
});

test("main upload and anonymous verification failures never report published", async (t) => {
  for (const failure of ["copy", "uploaded-digest", "anonymous-denied", "anonymous-digest"]) {
    const directory = await scratch(t);
    const result = receipt(main);
    await assert.rejects(publish(github(main).api, main, result, directory, async (args, options) => {
      if (failure === "copy" && args.includes("cp")) throw new Error("Interrupted upload");
      if (failure === "uploaded-digest" && args.includes("fetch")) return "wrong bytes";
      if (options?.env) {
        if (failure === "anonymous-denied") throw new Error("403 Forbidden");
        if (failure === "anonymous-digest") return "wrong bytes";
      }
      return JSON.stringify(manifest);
    }));
    const saved = JSON.parse(await readFile(join(directory, "receipt.json")));
    assert.equal(saved.status, failure.startsWith("anonymous") ? "uploaded" : "partial");
    assert.equal(saved.mirror, undefined);
    await assert.rejects(lstat(join(directory, "record")), { code: "ENOENT" });
  }
});

test("main bootstraps before any package read and retains private-upload receipt", async (t) => {
  const directory = await scratch(t);
  const { api } = github(main, { visibility: "private" });
  let copied = false;
  api.rest.packages.getPackageForOrganization = async () => {
    assert.equal(copied, true, "No existence/Public lookup before the first main push");
    return { data: { visibility: "private" } };
  };
  await assert.rejects(publish(api, main, receipt(main), directory, async (args) => {
    if (args.includes("cp")) copied = true;
    return JSON.stringify(manifest);
  }), /make bicep-types-aws Public/);
  const saved = JSON.parse(await readFile(join(directory, "receipt.json")));
  assert.equal(saved.status, "uploaded");
  assert.equal(saved.uploadedDigest, receipt(main).record.digest);
  assert.equal(saved.visibility, "private");
  assert.equal(saved.mirror, undefined);
  await assert.rejects(lstat(join(directory, "record")), { code: "ENOENT" });
});

test("main publication read failure is surfaced after upload, not treated as absence", async (t) => {
  const directory = await scratch(t);
  const { api } = github(main);
  api.rest.packages.getPackageForOrganization = async () => {
    throw Object.assign(new Error("Denied package lookup"), { status: 403 });
  };
  await assert.rejects(publish(api, main, receipt(main), directory,
    async () => JSON.stringify(manifest)), /Denied package lookup/);
  assert.equal(JSON.parse(await readFile(join(directory, "receipt.json"))).status, "uploaded");
});

test("older main SHA or older capture run at the SAME SHA never writes GHCR", async (t) => {
  const directory = await scratch(t);
  for (const changes of [
    { mainSha: "c".repeat(40) },
    { runs: [{ ...apiRun(main), id: 101, run_number: 101, conclusion: "success" }] },
    { runs: [{ ...apiRun(main), id: 101, run_number: 101, conclusion: "failure" }] },
    { runs: [{ ...apiRun(main), id: 101, run_number: 101, status: "queued", conclusion: null }] }
  ]) {
    const { api } = github(main, changes);
    const run = async () => assert.fail("No registry operations after supersession");
    const initial = receipt(main);
    await publish(api, main, initial, directory, run);
    assert.equal(initial.status, "superseded");
    await assert.rejects(publish(api, { ...main, generationAttempt: 2 }, receipt(main), directory, run),
      /Superseded retry/);
  }
});

test("missing main supersession evidence fails before GHCR write", async (t) => {
  const directory = await scratch(t);
  const { api } = github(main);
  api.rest.actions.listWorkflowRuns = () => { throw new Error("Actions evidence denied"); };
  await assert.rejects(publish(api, main, receipt(main), directory,
    async () => assert.fail("No registry writes without supersession evidence")), /Actions evidence denied/);
});

test("producer artifact paths use initialized runner temp without dot segments", async (t) => {
  const directory = await scratch(t);
  for (const [name, expectedPaths] of [
    ["publish-main-bicep.yaml", { capture: 1, publish: 2 }],
    ["publish-release-bicep.yaml", { select: 0, schemas: 1, capture: 2, publish: 3 }]
  ]) {
    const text = await readFile(new URL(`../workflows/${name}`, import.meta.url), "utf8");
    const [workflow, jobsText] = text.split("\njobs:\n");
    assert.doesNotMatch(workflow, /INPUT_DIRECTORY|runner\.temp/);
    const jobs = [...jobsText.matchAll(/^  ([a-z]+):\n([\s\S]*?)(?=^  [a-z]+:\n|$(?![\s\S]))/gm)];
    assert.deepEqual(jobs.map(([, id]) => id), Object.keys(expectedPaths));
    for (const [, id, body] of jobs) {
      assert.doesNotMatch(body.split("\n    steps:\n")[0], /INPUT_DIRECTORY|runner\.temp/);
      const initialization = body.match(/    steps:\n      - name: Set publication directory\n        run: (.+)/)?.[1];
      assert.ok(initialization, `Initialize ${name}:${id} before using the directory`);
      assert.equal([...body.matchAll(/INPUT_DIRECTORY=/g)].length, 1, "Steps share the initialized directory");
      const temp = join(directory, `${name}-${id} temp`);
      const envPath = join(directory, `${name}-${id}.env`);
      await tool(["bash", "-c", initialization], {
        env: { ...process.env, RUNNER_TEMP: temp, GITHUB_ENV: envPath }
      });
      const initialized = await readFile(envPath, "utf8");
      assert.equal(initialized, `INPUT_DIRECTORY=${temp}/aws-bicep-publication\n`);
      const expandedDirectory = initialized.trim().slice("INPUT_DIRECTORY=".length);
      let paths = 0;
      for (const [, step] of body.matchAll(/(?:^|\n)      - ([\s\S]*?)(?=\n      - |$(?![\s\S]))/g)) {
        if (!/uses: actions\/(?:upload|download)-artifact@/.test(step)) continue;
        paths++;
        const path = step.match(/^          path: (.+)$/m)?.[1];
        assert.ok(path?.startsWith("${{ env.INPUT_DIRECTORY }}"), `${name}:${id}: ${path}`);
        const expanded = path.replace("${{ env.INPUT_DIRECTORY }}", expandedDirectory)
          .replace(/\$\{\{ github\.run_id \}\}/g, "100");
        assert.ok(expanded.startsWith(`${temp}/`), expanded);
        assert.doesNotMatch(expanded, /\$\{\{/);
        assert.ok(expanded.split("/").every((segment) => segment !== "." && segment !== ".."),
          `upload-artifact rejects relative path segments: ${expanded}`);
      }
      assert.equal(paths, expectedPaths[id], `Check every artifact path in ${name}:${id}`);
    }
  }
});

test("workflow authority and evidence wiring remain bounded", async () => {
  const read = (name) => readFile(new URL(`../workflows/${name}`, import.meta.url), "utf8");
  for (const name of ["publish-main-bicep.yaml", "publish-release-bicep.yaml"]) {
    const text = await read(name);
    const AsyncFunction = Object.getPrototypeOf(async () => {}).constructor;
    for (const [, body] of text.matchAll(/script: \|\n((?: {12}.*\n)+)/g))
      assert.doesNotThrow(() => new AsyncFunction("github", "getOctokit", "core", "context",
        body.replace(/^ {12}/gm, "")));
    const [generation, uploader] = text.split("\n  publish:\n");
    assert.ok(uploader);
    assert.doesNotMatch(generation, /packages: write|id-token: write|azure\/login|BICEPTYPES_|PRIVATE_KEY/);
    assert.match(uploader, /packages: write/);
    assert.doesNotMatch(uploader, /AWS_ACCESS|AWS_SECRET|npm |go build|PRIVATE_KEY/);
    assert.match(text, /archive: false/);
    assert.match(text, /skip-decompress: true/);
    assert.match(text, /digest-mismatch: error/);
    assert.match(text, /cancel-in-progress: false/);
    assert.match(generation, /--radius "\$\{INPUT_DIRECTORY\}\/schemas\/radius"/);
    assert.match(generation, /git -C (candidate\/)?radius rev-parse HEAD > "\$\{INPUT_DIRECTORY\}\/schemas\/radius-commit"/);
    assert.doesNotMatch(text, /id-token: write|azure\/login|BICEPTYPES_|az acr|azurecr\.io|radius-publisher|RADIUS_PUBLISHER_BOT|mirror/);
    if (name === "publish-main-bicep.yaml") {
      assert.doesNotMatch(uploader, /receipt_artifact_id|outputs:/);
      assert.match(uploader, /name: aws-bicep-edge-/);
      assert.match(uploader, /DOCKER_CONFIG=\$\{RUNNER_TEMP\}\/bicep-write-credentials/);
      assert.match(text, /group: aws-bicep-main/);
    } else {
      assert.doesNotMatch(text, /id-token: write|azure\/login|BICEPTYPES_|az acr|azurecr\.io|:latest/);
    }
  }
  const release = await read("publish-release-bicep.yaml");
  assert.match(release, /repository_dispatch:\n    types: \[aws-bicep-release\]/);
  assert.doesNotMatch(release, /\n  push:|\n  workflow_dispatch:/);
  const schemas = release.split("\n  schemas:\n")[1].split("\n  capture:\n")[0];
  const capture = release.split("\n  capture:\n")[1].split("\n  publish:\n")[0];
  const publish = release.split("\n  publish:\n")[1];
  assert.match(publish, /if: \$\{\{ !cancelled\(\) && needs\.capture\.result == 'success' \}\}/,
    "Recovery must run after successful capture even when schemas was skipped, but never after cancellation/failure");
  assert.match(schemas, /environment: publish-bicep/);
  assert.doesNotMatch(schemas, /npm |node candidate|candidate\/src\/aws-type-downloader/);
  assert.doesNotMatch(capture, /environment:|secrets\.|packages: write|id-token: write/);
  assert.match(capture, /node candidate\/src\/aws-type-generator/);
  assert.match(release, new RegExp(`name: ${captureJob}`));
  assert.match(release, /record\/aws-bicep-extension\.json/);
  const generation = await read("generate-types.yaml");
  assert.match(generation, /github\.repository == 'radius-project\/bicep-types-aws' && github\.ref == 'refs\/heads\/main' && github\.ref_protected/);
  assert.ok(generation.indexOf("branch.commit.sha !== context.sha") < generation.indexOf("secrets.AWS_ACCESS_KEY_ID"));
  for (const path of [
    "../workflows/publish-bicep.yaml", "get_release_version.py",
    "mirror-main-bicep.mjs", "monitor-remote-workflow.mjs"
  ]) {
    await assert.rejects(lstat(new URL(path, import.meta.url)), { code: "ENOENT" });
  }
});

test("generator CLI preserves legacy dashed arguments and default resource identities", {
  skip: process.env.AWS_BICEP_TEST_GENERATOR !== "true"
}, async (t) => {
  const directory = await scratch(t);
  const input = join(directory, "schemas");
  await mkdir(input);
  await cp(resolve("src/aws-type-generator/testdata/AWS::Kinesis::Stream.json"),
    join(input, "AWS::Kinesis::Stream.json"));
  for (const version of ["latest", "0.62", "0.62.1-rc.2"]) {
    for (const option of ["--release-version", "--releaseVersion"]) {
      const output = join(directory, `${version}-${option}`);
      await tool(["node", resolve("src/aws-type-generator/dist/src/main.js"),
        "--input", input, "--output", output,
        "--radius", resolve("src/aws-type-generator/testdata/radius"), option, version]);
      const index = JSON.parse(await readFile(join(output, "index.json")));
      assert.deepEqual(index.settings, { name: "aws", version, isSingleton: false });
      assert.ok(index.resources["AWS.Kinesis/Stream@default"]);
      assert.ok(index.resources["AWS.S3/Object@default"], "Retain Radius-owned handwritten types");
      assert.ok(Object.keys(index.resources).every((name) => name.endsWith("@default")));
    }
  }
});

test("only a frozen source with no Radius gitlink history gets the legacy smoke", async () => {
  const { api } = github();
  api.rest.git.getTree = async () => ({ data: { truncated: false, tree: [] } });
  api.rest.repos.listCommits = async (args) => {
    assert.equal(args.sha, sha); assert.equal(args.path, "radius"); return { data: [] };
  };
  assert.equal(await frozenRadiusPin(api, sha), null);
  api.rest.repos.listCommits = async () => ({ data: [{ sha }] });
  await assert.rejects(frozenRadiusPin(api, sha), /removed/);
  api.rest.git.getTree = async () => ({ data: { truncated: true, tree: [] } });
  await assert.rejects(frozenRadiusPin(api, sha), /incomplete Git tree/);
  api.rest.git.getTree = async () => ({ data: { truncated: false, tree: [{ path: "radius", type: "blob" }] } });
  await assert.rejects(frozenRadiusPin(api, sha), /must be a gitlink/);
});

test("generator CLI packages the real pinned Radius MSK property; dropping the overlay fails the smoke", {
  skip: process.env.AWS_BICEP_TEST_GENERATOR !== "true"
}, async (t) => {
  const directory = await scratch(t);
  const input = join(directory, "input");
  await mkdir(input);
  await cp(resolve("artifacts/types/AWS::MSK::ServerlessCluster.json"), join(input, "msk.json"));
  const pinned = resolve("radius");
  assert.equal((await tool(["git", "-C", pinned, "rev-parse", "HEAD"])).trim(),
    (await tool(["git", "rev-parse", "HEAD:radius"])).trim());
  const missing = join(directory, "missing");
  await mkdir(join(missing, "pkg/aws/extraproperties"), { recursive: true });
  await writeFile(join(missing, "pkg/aws/extraproperties/extra_properties.json"), "{}");
  for (const radius of [pinned, missing]) {
    const output = await scratch(t);
    await tool(["node", resolve("src/aws-type-generator/dist/src/main.js"), "--input", input,
      "--radius", radius, "--output", output]);
    const pkg = join(output, "aws.tgz");
    await tool(["bicep", "publish-extension", join(output, "index.json"), "--target", pkg]);
    await tool(["tar", "-xzf", pkg, "-C", output, "types.tgz"]);
    const compile = () => tool(["bash", ".github/scripts/smoke-test-aws-types.sh", join(output, "types.tgz"), "radius"]);
    if (radius === pinned) await compile();
    else await assert.rejects(compile, /BootstrapBrokerStringSaslIam/);
  }
});

test("native Bicep/ORAS raw snapshot, stable/RC publish, retry, restore and conflict", {
  skip: !process.env.AWS_BICEP_TEST_REGISTRY
}, async (t) => {
  const root = resolve(".");
  const registry = process.env.AWS_BICEP_TEST_REGISTRY;
  assert.match(registry, /^localhost:\d+$/);
  for (const ref of ["refs/tags/v0.62.1", "refs/tags/v0.62.1-rc.2"]) {
    const s = { ...source, ref };
    const directory = await scratch(t);
    await cp(join(root, "artifacts/types"), join(directory, "schemas"), { recursive: true });
    const radiusInputs = join(directory, "schemas/radius/pkg/aws");
    await mkdir(join(radiusInputs, "extraproperties"), { recursive: true });
    await cp(join(root, "radius/pkg/aws/extraproperties/extra_properties.json"),
      join(radiusInputs, "extraproperties/extra_properties.json"));
    if ((await readdir(join(root, "radius/pkg/aws"))).includes("schemas"))
      await cp(join(root, "radius/pkg/aws/schemas"), join(radiusInputs, "schemas"), { recursive: true });
    const radiusCommit = (await tool(["git", "-C", "radius", "rev-parse", "HEAD"])).trim();
    assert.equal(radiusCommit, (await tool(["git", "rev-parse", "HEAD:radius"])).trim());
    await writeFile(join(directory, "schemas/radius-commit"), `${radiusCommit}\n`);
    await writeFile(join(directory, "source.json"), JSON.stringify(s));
    const schemaArchive = join(directory, schemaSnapshotName(s));
    await tool(["tar", "-cf", schemaArchive, "-C", directory, "source.json", "schemas"]);
    const received = join(directory, "received");
    await mkdir(received);
    const schemaApi = github(s);
    schemaApi.state.jobs[0].name = "Capture AWS schema inputs";
    await prepareSchemas(schemaApi.api, schemaArchive, s, {
      ...artifact, id: 201, name: schemaSnapshotName(s),
      size_in_bytes: (await lstat(schemaArchive)).size,
      digest: hash(await readFile(schemaArchive))
    }, received);
    assert.equal(await readFile(join(received, "schemas/radius-commit"), "utf8"), `${radiusCommit}\n`);
    if (process.env.AWS_BICEP_TEST_GENERATOR === "true") {
      await tool(["node", resolve("src/aws-type-generator/dist/src/main.js"),
        "--input", join(received, "schemas"), "--output", join(directory, "generated"),
        "--radius", join(received, "schemas/radius"), "--releaseVersion", versions(s).typeVersion]);
    } else {
      await cp(join(root, "artifacts/bicep"), join(directory, "generated"), { recursive: true });
    }
    // Model the generator's legacy index metadata without calling AWS or changing tracked output.
    const indexPath = join(directory, "generated/index.json");
    const index = JSON.parse(await readFile(indexPath));
    index.settings.version = versions(s).typeVersion;
    await writeFile(indexPath, JSON.stringify(index));
    const archive = await capture(s, directory, registry,
      join(directory, "schemas"), join(directory, "generated"));
    assert.equal((await tool(["tar", "-xOf", archive, "schemas/radius-commit"])).trim(), radiusCommit);
    assert.equal(await tool(["tar", "-xOf", archive, "schemas/radius/pkg/aws/extraproperties/extra_properties.json"]),
      await readFile(join(radiusInputs, "extraproperties/extra_properties.json"), "utf8"));
    assert.ok((await lstat(archive)).size <= maximumSnapshotSize);
    const a = {
      ...artifact, size_in_bytes: (await lstat(archive)).size,
      digest: hash(await readFile(archive)),
      workflow_run: { ...artifact.workflow_run }
    };
    const { api } = github(s, { radiusPin: radiusCommit });
    const result = await prepare(api, archive, s, a, directory);
    const localTarget = `${registry}/published`;
    const run = async (args, options) => {
      assert.ok(args.every((arg) => !arg.includes("azurecr.io")));
      const mapped = args.map((arg) => arg.replaceAll(target, localTarget));
      if (mapped.some((arg) => arg.startsWith(`${localTarget}:`))) {
        mapped.push(args.includes("cp") ? "--to-plain-http" : "--plain-http");
      }
      try { return await tool(mapped, options); }
      catch (error) {
        if (error.stderr) error.stderr = error.stderr.replaceAll(localTarget, target);
        throw error;
      }
    };
    await publish(api, s, result, directory, run);
    await publish(api, { ...s, generationAttempt: 2 }, result, directory, run);
    assert.equal(result.record.generation.runAttempt, 1);
    assert.deepEqual(await readdir(join(directory, "record")), ["aws-bicep-extension.json"]);
    if (process.env.AWS_BICEP_TEST_EVIDENCE_DIRECTORY) {
      const evidence = join(resolve(process.env.AWS_BICEP_TEST_EVIDENCE_DIRECTORY), versions(s).version);
      await mkdir(evidence, { recursive: true });
      await cp(archive, join(evidence, snapshotName(s)));
      await cp(join(directory, "record/aws-bicep-extension.json"), join(evidence, "aws-bicep-extension.json"));
      await cp(join(directory, "manifest.json"), join(evidence, "manifest.json"));
      await writeFile(join(evidence, "source.json"), await tool(["tar", "-xOf", archive, "source.json"]));
    }
    const compile = join(directory, "compile");
    await mkdir(compile);
    await cp(join(root, ".github/scripts/testdata/aws-publish/main.bicep"), join(compile, "main.bicep"));
    await writeFile(join(compile, "bicepconfig.json"), JSON.stringify({
      experimentalFeaturesEnabled: { extensibility: true, ociEnabled: true },
      extensions: { aws: `br:${localTarget}:${versions(s).version}` }
    }));
    await tool(["bicep", "build", join(compile, "main.bicep")], {
      env: {
        ...process.env, HOME: directory, DOCKER_CONFIG: join(directory, "anonymous"),
        BICEP_TRUSTED_REGISTRIES: "localhost"
      }
    });

    await assert.rejects(publish(api, s, receipt(s, "conflicting content"), directory, run), /conflict/);
  }
});

test("native GHCR main interruption, original-snapshot recovery and same-SHA supersession", {
  skip: !process.env.AWS_BICEP_TEST_REGISTRY
}, async (t) => {
  const registry = process.env.AWS_BICEP_TEST_REGISTRY;
  assert.match(registry, /^localhost:\d+$/);
  const localTarget = `${registry}/development`;
  const run = async (args, options) => {
    assert.ok(args.every((arg) => !arg.includes("azurecr.io")));
    const mapped = args.map((arg) => arg.replaceAll(target, localTarget));
    if (args.includes("cp")) {
      mapped.push("--to-plain-http");
    } else {
      mapped.push("--plain-http");
    }
    return tool(mapped, options);
  };
  const directory = await scratch(t);
  await cp(resolve("artifacts/types"), join(directory, "schemas"), { recursive: true });
  const radiusPin = (await tool(["git", "rev-parse", "HEAD:radius"])).trim();
  await writeFile(join(directory, "schemas/radius-commit"), `${radiusPin}\n`);
  await cp(resolve("artifacts/bicep"), join(directory, "generated"), { recursive: true });
  const indexPath = join(directory, "generated/index.json");
  const index = JSON.parse(await readFile(indexPath));
  index.settings.version = "latest";
  await writeFile(indexPath, JSON.stringify(index));
  const archive = await capture(main, directory, registry,
    join(directory, "schemas"), join(directory, "generated"));
  const a = {
    ...artifact, size_in_bytes: (await lstat(archive)).size,
    digest: hash(await readFile(archive)),
    workflow_run: { ...artifact.workflow_run, head_sha: main.commit }
  };
  const { api } = github(main, { radiusPin });
  api.rest.actions.getArtifact = async () => ({ data: a });
  const result = await prepare(api, archive, main, a, directory);
  await assert.rejects(publish(api, main, result, directory, async (args, options) => {
    const output = await run(args, options);
    if (args.includes("cp")) throw new Error("Interrupted after GHCR upload");
    return output;
  }), /Interrupted after GHCR upload/);
  const saved = JSON.parse(await readFile(join(directory, "receipt.json")));
  assert.equal(saved.status, "partial");
  assert.equal(saved.mirror, undefined);
  await assert.rejects(lstat(join(directory, "record")), { code: "ENOENT" });
  assert.equal(hash(await run(["oras", "manifest", "fetch", `${target}:edge`])), result.record.digest);

  // Changed live generation inputs cannot affect recovery from the retained raw archive.
  delete index.resources[Object.keys(index.resources)[0]];
  await writeFile(indexPath, JSON.stringify(index));
  const recoveryDirectory = await scratch(t);
  const retry = { ...main, generationAttempt: 2 };
  const recovered = await prepare(api, archive, retry, a, recoveryDirectory);
  assert.deepEqual(recovered.record, result.record);
  await publish(api, retry, recovered, recoveryDirectory, run);
  assert.equal(hash(await run(["oras", "manifest", "fetch", `${target}:edge`])), result.record.digest);
  assert.equal(recovered.status, "published");
  assert.equal(recovered.uploadedDigest, result.record.digest);
  assert.equal(recovered.visibility, "public");
  assert.equal(recovered.mirror, undefined);
  assert.equal(recovered.record.generation.runAttempt, 1);
  assert.deepEqual(JSON.parse(await readFile(join(recoveryDirectory, "record/aws-bicep-extension.json"))),
    result.record);
  assert.equal(hash(await readFile(archive)), a.digest);

  const newer = { ...main, runId: 101 };
  // Production captures have separate scratch registries; isolate this capture in the shared fixture.
  const newerArchive = await capture(newer, directory, registry,
    join(directory, "schemas"), join(directory, "generated"),
    (args, options) => tool(args.map((arg) =>
      arg.replace(`${registry}/aws:capture-edge`, `${registry}/newer-aws:capture-edge`)), options));
  const newerArtifact = {
    ...a, name: snapshotName(newer), id: 201,
    size_in_bytes: (await lstat(newerArchive)).size,
    digest: hash(await readFile(newerArchive)),
    workflow_run: { ...a.workflow_run, id: 101 }
  };
  const newerApi = github(newer, { radiusPin }).api;
  newerApi.rest.actions.getArtifact = async () => ({ data: newerArtifact });
  const newerResult = await prepare(newerApi, newerArchive, newer, newerArtifact, directory);
  assert.notEqual(newerResult.record.digest, result.record.digest);
  await publish(newerApi, newer, newerResult, directory, run);
  const superseded = github(main, { runs: [apiRun(newer)] }).api;
  await assert.rejects(publish(superseded, retry, recovered, recoveryDirectory,
    async () => assert.fail("Superseded same-SHA retry must not touch GHCR")), /Superseded retry/);
  assert.equal(hash(await run(["oras", "manifest", "fetch", `${target}:edge`])), newerResult.record.digest);
});
