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
  validateManifest, verifyArtifact, verifyCapture, verifySource, versions
} from "./publish-bicep.mjs";

const sha = "a".repeat(40);
const source = {
  repository, ref: "refs/tags/v0.62.1", commit: sha,
  workflow: releaseWorkflow, runId: 100, generationAttempt: 1
};
const main = { ...source, workflow: mainWorkflow, ref: "refs/heads/main" };
const artifact = {
  id: 200, name: snapshotName(source), expired: false, size_in_bytes: 10,
  digest: `sha256:${"b".repeat(64)}`, created_at: "2026-10-01T00:01:00Z",
  workflow_run: { id: 100, head_sha: sha, head_branch: "v0.62.1" }
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
  head_sha: s.commit, head_branch: s.ref.replace(/^refs\/(heads|tags)\//, ""),
  path: s.workflow, event: "push", status: "completed", conclusion: "failure"
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

test("only canonical main and full stable/dotted RC events are eligible", () => {
  const context = {
    repo: { owner: "radius-project", repo: "bicep-types-aws" },
    eventName: "push", ref: source.ref, sha, runId: 100
  };
  const env = {
    GITHUB_WORKFLOW_REF: `${repository}/${releaseWorkflow}@${source.ref}`,
    GITHUB_RUN_ATTEMPT: "1", GITHUB_REF_PROTECTED: "true"
  };
  assert.deepEqual(identity(context, env), source);
  for (const ref of ["refs/tags/v0.62", "refs/tags/v0.62.1-rc1",
    "refs/tags/v0.62.1-rc.0", "refs/tags/v01.2.3", "refs/heads/topic",
    "refs/tags/v0.62.1+meta"]) {
    assert.throws(() => identity({ ...context, ref }, env));
  }
  assert.throws(() => identity({ ...context, eventName: "pull_request" }, env));
  assert.throws(() => identity({ ...context, repo: { owner: "fork", repo: "bicep-types-aws" } }, env));
  assert.throws(() => identity(context, { ...env, GITHUB_WORKFLOW_REF: "wrong" }));
  assert.deepEqual(identity({ ...context, ref: main.ref }, {
    ...env, GITHUB_WORKFLOW_REF: `${repository}/${mainWorkflow}@${main.ref}`
  }), main);
  assert.throws(() => identity({ ...context, ref: main.ref }, {
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

test("missing, expired, ambiguous, oversized and substituted snapshots fail closed", () => {
  assert.equal(selectSnapshot([artifact], source, false), artifact);
  assert.equal(selectSnapshot([], source, false), undefined);
  assert.throws(() => selectSnapshot([], { ...source, generationAttempt: 2 }, false));
  assert.throws(() => selectSnapshot([], source, true));
  assert.throws(() => selectSnapshot([artifact, artifact], source, false));
  for (const change of [
    { expired: true }, { digest: "bad" }, { size_in_bytes: maximumSnapshotSize + 1 },
    { name: "wrong" }, { workflow_run: { ...artifact.workflow_run, head_sha: "c".repeat(40) } }
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
  checkReleaseHistory([{ ...old, conclusion: "success" }], retry, source, false);
  const recovery = { ...source, runId: 101 };
  checkReleaseHistory([apiRun(recovery)], retry, retry, false);
  assert.throws(() => checkReleaseHistory([{ ...old, conclusion: "success" }], recovery, source, true));
  assert.throws(() => checkReleaseHistory([old], recovery, recovery, false));
  checkReleaseHistory([old], recovery, source, true);
  assert.throws(() => checkReleaseHistory([{ ...old, status: "in_progress" }], recovery, source, true));
  assert.throws(() => checkReleaseHistory([{ ...old, head_sha: "c".repeat(40) }], recovery, source, true));
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

test("older main SHA or older capture run at the SAME SHA never overwrites newer edge", async (t) => {
  const directory = await scratch(t);
  for (const changes of [
    { mainSha: "c".repeat(40) },
    { runs: [{ ...apiRun(main), id: 101, run_number: 101, conclusion: "success" }] },
    { runs: [{ ...apiRun(main), id: 101, run_number: 101, conclusion: "failure" }] }
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

test("workflow authority and evidence wiring remain bounded", async () => {
  const read = (name) => readFile(new URL(`../workflows/${name}`, import.meta.url), "utf8");
  for (const name of ["publish-main-bicep.yaml", "publish-release-bicep.yaml"]) {
    const text = await read(name);
    const [generation, uploader] = text.split("\n  publish:\n");
    assert.ok(uploader);
    assert.doesNotMatch(generation, /packages: write|id-token: write|PRIVATE_KEY/);
    assert.match(uploader, /packages: write/);
    assert.doesNotMatch(uploader, /AWS_ACCESS|AWS_SECRET|npm |go build|id-token: write|azure\/login|PRIVATE_KEY/);
    assert.match(text, /archive: false/);
    assert.match(text, /skip-decompress: true/);
    assert.match(text, /digest-mismatch: error/);
    assert.match(text, /cancel-in-progress: false/);
    assert.doesNotMatch(text, /biceptypes\.azurecr\.io|:latest|permission-contents: write/);
  }
  const release = await read("publish-release-bicep.yaml");
  assert.match(release, new RegExp(`name: ${captureJob}`));
  assert.match(release, /record\/aws-bicep-extension\.json/);
  const generation = await read("generate-types.yaml");
  assert.match(generation, /github\.repository == 'radius-project\/bicep-types-aws' && github\.ref == 'refs\/heads\/main' && github\.ref_protected/);
  assert.ok(generation.indexOf("branch.commit.sha !== context.sha") < generation.indexOf("secrets.AWS_ACCESS_KEY_ID"));
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
        "--input", input, "--output", output, option, version]);
      const index = JSON.parse(await readFile(join(output, "index.json")));
      assert.deepEqual(index.settings, { name: "aws", version, isSingleton: false });
      assert.deepEqual(Object.keys(index.resources), ["AWS.Kinesis/Stream@default"]);
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
    await cp(join(root, "artifacts/bicep"), join(directory, "generated"), { recursive: true });
    // Model the generator's legacy index metadata without calling AWS or changing tracked output.
    const indexPath = join(directory, "generated/index.json");
    const index = JSON.parse(await readFile(indexPath));
    index.settings.version = versions(s).typeVersion;
    await writeFile(indexPath, JSON.stringify(index));
    const archive = await capture(s, directory, registry,
      join(directory, "schemas"), join(directory, "generated"));
    assert.ok((await lstat(archive)).size <= maximumSnapshotSize);
    const a = {
      ...artifact, size_in_bytes: (await lstat(archive)).size,
      digest: hash(await readFile(archive)),
      workflow_run: { ...artifact.workflow_run, head_branch: ref.slice("refs/tags/".length) }
    };
    const { api } = github(s);
    const result = await prepare(api, archive, s, a, directory);
    const localTarget = `${registry}/published`;
    const run = async (args, options) => {
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
