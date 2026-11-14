// Copyright 2026 The Radius Authors.
// Licensed under the Apache License, Version 2.0.

import assert from "node:assert/strict";
import { test } from "node:test";
import { cp, lstat, mkdir, mkdtemp, readFile, readdir, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import {
  capture, captureJob, checkReleaseHistory, developmentMirror, existingManifest, hash, identity,
  mainWorkflow, maximumSnapshotSize, originalSource, packageInfo, prepare, publish,
  releaseWorkflow, repository, select, selectSnapshot, snapshotName, target, tool,
  validateManifest, verifyArtifact, verifyCapture, verifySource, versions,
  releaseRunName, resolveGeneration, prepareSchemas, schemaSnapshotName
} from "./publish-bicep.mjs";
import { copyRequest, mirrorMain } from "./mirror-main-bicep.mjs";
import monitorRemoteWorkflow from "./monitor-remote-workflow.mjs";

const sha = "a".repeat(40);
const controllerSha = "c".repeat(40);
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
    mainSha: sha, protected: true, tagSha: sha, comparison: "identical",
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
      repos: {
        getBranch: async () => ({ data: { protected: state.protected, commit: { sha: state.mainSha } } }),
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
const ghcrReceipt = () => ({
  ...receipt(main), status: "ghcr-published", visibility: "public",
  uploadedDigest: receipt(main).record.digest,
  mirror: { reference: developmentMirror, status: "pending" }
});
const mirrorOptions = (directory, overrides = {}) => ({
  github: github(main).api, publisherGithub: {}, core: { info: () => {} },
  source: main, receipt: ghcrReceipt(), directory,
  run: async () => JSON.stringify(manifest),
  monitor: async ({ core }) => {
    core.setOutput("run_id", "900");
    core.setOutput("run_url", "https://github.com/azure-octo/radius-publisher/actions/runs/900");
    core.setOutput("conclusion", "success");
  },
  ...overrides
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

test("frozen release source must still resolve and belong to protected main history", async () => {
  await verifySource(github().api, source);
  for (const state of [{ tagSha: "c".repeat(40) }, { protected: false }, { comparison: "diverged" }]) {
    await assert.rejects(verifySource(github(source, state).api, source));
  }
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

test("main uploads GHCR only and leaves a pending private mirror receipt", async (t) => {
  const directory = await scratch(t);
  const result = receipt(main);
  const commands = [];
  await publish(github(main).api, main, result,
    directory, async (args) => { commands.push(args); return JSON.stringify(manifest); });
  assert.equal(commands.filter((args) => args.includes("cp")).length, 1);
  assert.ok(commands.every((args) => args.every((arg) => !arg.includes("azurecr.io"))));
  const saved = JSON.parse(await readFile(join(directory, "receipt.json")));
  assert.equal(saved.status, "ghcr-published");
  assert.deepEqual(saved.mirror,
    { reference: developmentMirror, status: "pending" });
});

test("copy ABI binds original generation and keeps retry correlation stable", () => {
  const result = ghcrReceipt();
  const payload = copyRequest(main, result);
  assert.deepEqual(payload, {
    mode: "copy", source_repository: repository, source_ref: "refs/heads/main", source_sha: sha,
    registry_target: "aws", rel_channel: "edge", digest: result.record.digest,
    release_identifier: `copy-aws-edge-${sha}-100-1-${result.record.digest.slice(7)}`,
    source_evidence: {
      run_id: 100, run_attempt: 1, artifact_id: artifact.id, artifact_digest: artifact.digest
    }
  });
  assert.deepEqual(copyRequest({ ...main, generationAttempt: 3 }, result), payload);
  assert.ok(payload.release_identifier.length <= 200);
  const changed = structuredClone(result);
  changed.record.generation.runId = 101;
  assert.notEqual(copyRequest({ ...main, runId: 101 }, changed).release_identifier, payload.release_identifier);
  changed.record.digest = changed.uploadedDigest = hash("different schema generation");
  assert.notEqual(copyRequest({ ...main, runId: 101 }, changed).release_identifier, payload.release_identifier);
  for (const status of ["prepared", "uploaded", "superseded"])
    assert.throws(() => copyRequest(main, { ...result, status }));
  assert.throws(() => copyRequest(source, result));
});

test("private copy success requires correlated success and anonymous exact-digest reads", async (t) => {
  const directory = await scratch(t);
  const options = mirrorOptions(directory, {
    monitor: async ({ core }) => {
      assert.equal(core.getInput("REUSE_SUCCESSFUL"), "false");
      assert.equal(core.getInput("WORKFLOW_FILE"), "publish-bicep-types-aws.yml");
      assert.equal(core.getInput("EVENT_TYPE"), "bicep-types-aws");
      assert.deepEqual(JSON.parse(core.getInput("CLIENT_PAYLOAD")), copyRequest(main, ghcrReceipt()));
      core.setOutput("run_id", "900");
      core.setOutput("conclusion", "success");
    },
    run: async (args, options) => {
      assert.deepEqual(args.slice(0, 3), ["oras", "manifest", "fetch"]);
      assert.deepEqual(JSON.parse(await readFile(join(options.env.DOCKER_CONFIG, "config.json"))), {});
      return JSON.stringify(manifest);
    }
  });
  await mirrorMain(options);
  assert.equal(options.receipt.status, "published");
  assert.equal(options.receipt.mirror.status, "verified");
  assert.equal(options.receipt.mirror.digest, options.receipt.record.digest);
});

test("mirror integrates public monitor with App API and preserves exact request and remote run identity", async (t) => {
  const directory = await scratch(t);
  const payload = copyRequest(main, ghcrReceipt());
  let dispatches = 0;
  const remoteRun = {
    id: 901, event: "repository_dispatch",
    display_title: `bicep-types-aws / ${payload.release_identifier}`,
    status: "completed", conclusion: "success",
    html_url: "https://github.com/azure-octo/radius-publisher/actions/runs/901"
  };
  const publisherGithub = {
    paginate: async () => [{ ...remoteRun, id: 900 }],
    rest: {
      actions: { listWorkflowRuns: async () => ({ data: { workflow_runs: [remoteRun] } }) },
      repos: { createDispatchEvent: async (request) => {
        dispatches++;
        assert.deepEqual(request, {
          owner: "azure-octo", repo: "radius-publisher", event_type: "bicep-types-aws",
          client_payload: payload
        });
      } }
    }
  };
  const options = mirrorOptions(directory, { publisherGithub, monitor: monitorRemoteWorkflow });
  await mirrorMain(options);
  assert.equal(dispatches, 1, "Previous successful copy must not skip fresh reconciliation");
  assert.equal(options.receipt.mirror.run_id, "901");
  assert.equal(options.receipt.mirror.run_state, "found");
  assert.equal(options.receipt.mirror.run_url, remoteRun.html_url);
  assert.equal(options.receipt.mirror.release_identifier, payload.release_identifier);
  assert.equal(options.receipt.status, "published");
});

test("mirror checkpoints discovered remote identity before an interrupted polling wait", async (t) => {
  for (const reuseActive of [false, true]) {
    const directory = await scratch(t);
    const payload = copyRequest(main, ghcrReceipt());
    const remoteRun = {
      id: 901, event: "repository_dispatch",
      display_title: `bicep-types-aws / ${payload.release_identifier}`,
      status: "in_progress", conclusion: null,
      html_url: "https://github.com/azure-octo/radius-publisher/actions/runs/901"
    };
    let dispatches = 0;
    let checkpoint;
    const publisherGithub = {
      paginate: async () => reuseActive ? [remoteRun] : [],
      rest: {
        actions: { listWorkflowRuns: async () => ({ data: { workflow_runs: [remoteRun] } }) },
        repos: { createDispatchEvent: async () => { dispatches++; } }
      }
    };
    await assert.rejects(mirrorMain(mirrorOptions(directory, {
      publisherGithub,
      monitor: (options) => monitorRemoteWorkflow({
        ...options,
        sleep: async () => {
          // Read before either monitor completion or mirrorMain's finally block.
          checkpoint = JSON.parse(await readFile(join(directory, "receipt.json"), "utf8"));
          throw new Error("Polling interrupted");
        }
      })
    })), /Polling interrupted/);
    assert.equal(dispatches, reuseActive ? 0 : 1);
    assert.equal(checkpoint.status, "mirror-pending");
    assert.equal(checkpoint.mirror.status, "requested");
    assert.equal(checkpoint.mirror.run_id, "901");
    assert.equal(checkpoint.mirror.run_url, remoteRun.html_url);
    assert.equal(checkpoint.mirror.run_state, "found");
    assert.equal(checkpoint.mirror.release_identifier, payload.release_identifier);
    assert.equal(checkpoint.mirror.conclusion, undefined);
  }
});

test("mirror failure, unknown acceptance and wrong bytes retain honest partial receipts", async (t) => {
  for (const failure of ["mirror", "edge", "remote", "unknown", "missing-conclusion"]) {
    const directory = await scratch(t);
    let dispatched = false;
    await assert.rejects(mirrorMain(mirrorOptions(directory, {
      monitor: async ({ core }) => {
        dispatched = true;
        if (failure === "unknown") {
          core.setOutput("run_state", "unknown");
          core.setFailed("Timed out after uncertain dispatch; inspect before retry");
        } else {
          core.setOutput("run_id", "900");
          if (failure !== "missing-conclusion")
            core.setOutput("conclusion", failure === "remote" ? "failure" : "success");
          if (failure === "remote") core.setFailed("Private publisher failed");
        }
      },
      run: async (args) => {
        if (dispatched &&
          args.includes(failure === "mirror" ? developmentMirror : `${target}:edge`))
          return "wrong manifest";
        return JSON.stringify(manifest);
      }
    })));
    const saved = JSON.parse(await readFile(join(directory, "receipt.json")));
    assert.equal(saved.status, "mirror-pending");
    assert.equal(saved.uploadedDigest, receipt(main).record.digest);
    assert.equal(saved.mirror.status, "failed");
    assert.ok(saved.mirror.error);
    if (failure === "unknown") assert.equal(saved.mirror.run_state, "unknown");
    else assert.equal(saved.mirror.run_id, "900");
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
  assert.equal(saved.mirror.status, "pending");
  assert.equal(saved.mirror.digest, undefined);
  await assert.rejects(mirrorMain(mirrorOptions(directory, {
    receipt: saved, monitor: async () => assert.fail("Private GHCR must not dispatch")
  })), /GHCR publication must succeed/);
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

test("older main SHA or older capture run at the SAME SHA never writes either registry", async (t) => {
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

test("missing main supersession evidence fails before either registry write", async (t) => {
  const directory = await scratch(t);
  const { api } = github(main);
  api.rest.actions.listWorkflowRuns = () => { throw new Error("Actions evidence denied"); };
  await assert.rejects(publish(api, main, receipt(main), directory,
    async () => assert.fail("No registry writes without supersession evidence")), /Actions evidence denied/);
});

test("mirror refuses stale SHA, newer same-SHA run, missing evidence and anonymous GHCR denial before dispatch", async (t) => {
  for (const overrides of [
    { mainSha: "c".repeat(40) },
    { runs: [{ ...apiRun(main), id: 101, run_number: 101, status: "queued" }] },
    { runs: [{ ...apiRun(main), id: 101, run_number: 101, conclusion: "failure" }] },
    { jobs: [] }
  ]) {
    const directory = await scratch(t);
    await assert.rejects(mirrorMain(mirrorOptions(directory, {
      github: github(main, overrides).api,
      monitor: async () => assert.fail("Superseded or invalid evidence must not dispatch")
    })), /Superseded|Missing or ambiguous original capture job/);
  }
  const directory = await scratch(t);
  await assert.rejects(mirrorMain(mirrorOptions(directory, {
    run: async () => { throw new Error("403 Forbidden"); },
    monitor: async () => assert.fail("Anonymous GHCR failure must not dispatch")
  })), /403 Forbidden/);
});

test("mirror fails on changed capture evidence and preserves remote result if superseded during copy", async (t) => {
  const directory = await scratch(t);
  for (const change of [{ expired: true }, { digest: hash("substituted") }]) {
    const { api } = github(main);
    let dispatched = false;
    api.rest.actions.getArtifact = async () => ({ data: {
      ...artifact, workflow_run: { ...artifact.workflow_run, head_sha: main.commit }, ...change
    } });
    await assert.rejects(mirrorMain(mirrorOptions(directory, {
      github: api, monitor: async () => { dispatched = true; }
    })));
    assert.equal(dispatched, false);
  }
  const { api, state } = github(main);
  const options = mirrorOptions(directory, {
    github: api, monitor: async ({ core }) => {
      core.setOutput("run_id", "900");
      core.setOutput("conclusion", "success");
      state.runs = [{ ...apiRun(main), id: 101, run_number: 101 }];
    }
  });
  await assert.rejects(mirrorMain(options), /Superseded main mirror run/);
  assert.equal(options.receipt.mirror.run_id, "900");
  assert.equal(options.receipt.mirror.conclusion, "success");
  assert.equal(options.receipt.mirror.status, "failed");
  assert.equal(options.receipt.status, "mirror-pending");
});

test("workflow authority and evidence wiring remain bounded", async () => {
  const read = (name) => readFile(new URL(`../workflows/${name}`, import.meta.url), "utf8");
  for (const name of ["publish-main-bicep.yaml", "publish-release-bicep.yaml"]) {
    const text = await read(name);
    const AsyncFunction = Object.getPrototypeOf(async () => {}).constructor;
    for (const [, body] of text.matchAll(/script: \|\n((?: {12}.*\n)+)/g))
      assert.doesNotThrow(() => new AsyncFunction("github", "getOctokit", "core", "context",
        body.replace(/^ {12}/gm, "")));
    const [generation, rest] = text.split("\n  publish:\n");
    const [uploader, mirror] = rest.split("\n  mirror:\n");
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
    assert.doesNotMatch(text, /id-token: write|azure\/login|BICEPTYPES_|az acr/);
    if (name === "publish-main-bicep.yaml") {
      assert.match(mirror, /RADIUS_PUBLISHER_BOT_PRIVATE_KEY/);
      assert.match(mirror, /owner: azure-octo/);
      assert.match(mirror, /repositories: radius-publisher/);
      assert.match(mirror, /if: needs.publish.outputs.published == 'true'/);
      assert.doesNotMatch(mirror, /packages: write|AWS_ACCESS|AWS_SECRET|npm |go build|docker\/login/);
      assert.match(mirror, /timeout-minutes: 25/);
      assert.match(mirror, /aws-bicep-mirror-/);
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
  await assert.rejects(read("publish-bicep.yaml"), { code: "ENOENT" });
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
    const { api } = github(s);
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

test("native two-registry main parity, interrupted original-snapshot recovery and same-SHA supersession", {
  skip: !process.env.AWS_BICEP_TEST_REGISTRY || !process.env.AWS_BICEP_TEST_MIRROR
}, async (t) => {
  const registry = process.env.AWS_BICEP_TEST_REGISTRY;
  const mirrorRegistry = process.env.AWS_BICEP_TEST_MIRROR;
  assert.match(registry, /^localhost:\d+$/);
  assert.match(mirrorRegistry, /^localhost:\d+$/);
  assert.notEqual(registry, mirrorRegistry);
  const localTarget = `${registry}/development`;
  const localMirror = `${mirrorRegistry}/aws:latest`;
  const run = async (args, options) => {
    const mapped = args.map((arg) => arg.replaceAll(target, localTarget)
      .replaceAll(developmentMirror, localMirror));
    if (args.includes("cp")) {
      if (!args.includes("--from-oci-layout")) mapped.push("--from-plain-http");
      mapped.push("--to-plain-http");
    } else {
      mapped.push("--plain-http");
    }
    return tool(mapped, options);
  };
  const directory = await scratch(t);
  await cp(resolve("artifacts/types"), join(directory, "schemas"), { recursive: true });
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
  const { api } = github(main);
  api.rest.actions.getArtifact = async () => ({ data: a });
  const result = await prepare(api, archive, main, a, directory);
  await publish(api, main, result, directory, run);
  const originalPayload = copyRequest(main, result);
  await assert.rejects(mirrorMain(mirrorOptions(directory, {
    github: api, receipt: result, run,
    monitor: async () => { throw new Error("Interrupted before private copy"); }
  })), /Interrupted before private copy/);
  const saved = JSON.parse(await readFile(join(directory, "receipt.json")));
  assert.equal(saved.uploadedDigest, result.record.digest);
  assert.equal(saved.mirror.status, "failed");
  assert.equal(hash(await run(["oras", "manifest", "fetch", `${target}:edge`])), result.record.digest);
  await assert.rejects(tool(["oras", "manifest", "fetch", "--plain-http", localMirror]), /not found/);

  // Changed live generation inputs cannot affect recovery from the retained raw archive.
  delete index.resources[Object.keys(index.resources)[0]];
  await writeFile(indexPath, JSON.stringify(index));
  const recoveryDirectory = await scratch(t);
  const retry = { ...main, generationAttempt: 2 };
  const recovered = await prepare(api, archive, retry, a, recoveryDirectory);
  assert.deepEqual(recovered.record, result.record);
  await publish(api, retry, recovered, recoveryDirectory, run);
  assert.deepEqual(copyRequest(retry, recovered), originalPayload);
  // Only this local test receiver writes the second registry; the source caller only reads it.
  const localReceiver = async ({ core }) => {
    const payload = JSON.parse(core.getInput("CLIENT_PAYLOAD"));
    await tool(["oras", "cp", "--from-plain-http", "--to-plain-http",
      `${localTarget}@${payload.digest}`, localMirror]);
    core.setOutput("run_id", "900");
    core.setOutput("conclusion", "success");
  };
  await mirrorMain(mirrorOptions(recoveryDirectory, {
    github: api, source: retry, receipt: recovered, run, monitor: localReceiver
  }));
  for (const reference of [`${target}:edge`, developmentMirror])
    assert.equal(hash(await run(["oras", "manifest", "fetch", reference])), result.record.digest);
  assert.equal(recovered.status, "published");
  assert.equal(recovered.mirror.digest, result.record.digest);
  assert.equal(recovered.record.generation.runAttempt, 1);
  assert.equal(hash(await readFile(archive)), a.digest);

  const newer = { ...main, runId: 101 };
  const newerArchive = await capture(newer, directory, mirrorRegistry,
    join(directory, "schemas"), join(directory, "generated"));
  const newerArtifact = {
    ...a, name: snapshotName(newer), id: 201,
    size_in_bytes: (await lstat(newerArchive)).size,
    digest: hash(await readFile(newerArchive)),
    workflow_run: { ...a.workflow_run, id: 101 }
  };
  const newerApi = github(newer).api;
  newerApi.rest.actions.getArtifact = async () => ({ data: newerArtifact });
  const newerResult = await prepare(newerApi, newerArchive, newer, newerArtifact, directory);
  assert.notEqual(newerResult.record.digest, result.record.digest);
  await publish(newerApi, newer, newerResult, directory, run);
  await mirrorMain(mirrorOptions(directory, {
    github: newerApi, source: newer, receipt: newerResult, run, monitor: localReceiver
  }));
  const superseded = github(main, { runs: [apiRun(newer)] }).api;
  await assert.rejects(publish(superseded, retry, recovered, recoveryDirectory,
    async () => assert.fail("Superseded same-SHA retry must not touch either registry")), /Superseded retry/);
  await assert.rejects(mirrorMain(mirrorOptions(recoveryDirectory, {
    github: superseded, source: retry, receipt: { ...recovered, status: "ghcr-published" },
    run: async () => assert.fail("Stale mirror must not read registries"),
    monitor: async () => assert.fail("Stale mirror must not dispatch")
  })), /Superseded main mirror run/);
  for (const reference of [`${target}:edge`, developmentMirror])
    assert.equal(hash(await run(["oras", "manifest", "fetch", reference])), newerResult.record.digest);
});
