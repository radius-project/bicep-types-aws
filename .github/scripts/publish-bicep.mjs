// Copyright 2026 The Radius Authors.
// Licensed under the Apache License, Version 2.0.

import assert from "node:assert/strict";
import { execFile } from "node:child_process";
import { createHash } from "node:crypto";
import { lstat, mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { promisify } from "node:util";

export const repository = "radius-project/bicep-types-aws";
export const packageName = "bicep-types-aws";
export const target = `ghcr.io/radius-project/${packageName}`;
export const developmentMirror = "biceptypes.azurecr.io/aws:latest";
export const releaseWorkflow = ".github/workflows/publish-release-bicep.yaml";
export const mainWorkflow = ".github/workflows/publish-main-bicep.yaml";
export const captureJob = "Capture versioned AWS Bicep types";
const repo = { owner: "radius-project", repo: "bicep-types-aws" };
const shaPattern = /^(?!0{40}$)[a-f0-9]{40}$/;
const digestPattern = /^sha256:[a-f0-9]{64}$/;
const releasePattern =
  /^refs\/tags\/v(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(-rc\.[1-9]\d*)?$/;
const provider = "application/vnd.ms.bicep.provider.";
export const maximumSnapshotSize = 64 * 1024 * 1024;
export const hash = (bytes) =>
  `sha256:${createHash("sha256").update(bytes).digest("hex")}`;
const positive = (n) => Number.isSafeInteger(n) && n > 0;
const load = async (path) => JSON.parse(await readFile(path, "utf8"));
const save = (path, value) =>
  writeFile(path, JSON.stringify(value, null, 2) + "\n");
const request = () => ({ signal: AbortSignal.timeout(20_000) });
export const snapshotName = (source) => `${packageName}-${source.runId}.tar`;

export async function tool(args, options = {}) {
  const { stdout } = await promisify(execFile)(args[0], args.slice(1), {
    timeout: 180_000,
    maxBuffer: 1024 * 1024,
    ...options
  });
  return stdout;
}

export function identity(context, env) {
  assert.equal(`${context.repo.owner}/${context.repo.repo}`, repository);
  assert.ok(["push", "workflow_dispatch"].includes(context.eventName));
  const main = context.ref === "refs/heads/main";
  const match = context.ref.match(releasePattern);
  assert.ok(main || match, "Only main or full stable/dotted RC tags may publish");
  if (main) assert.equal(env.GITHUB_REF_PROTECTED, "true");
  const workflow = main ? mainWorkflow : releaseWorkflow;
  assert.equal(
    env.GITHUB_WORKFLOW_REF,
    `${repository}/${workflow}@${context.ref}`
  );
  assert.match(context.sha, shaPattern);
  assert.ok(positive(context.runId));
  assert.match(env.GITHUB_RUN_ATTEMPT, /^[1-9]\d*$/);
  assert.ok(positive(Number(env.GITHUB_RUN_ATTEMPT)));
  return {
    repository,
    ref: context.ref,
    commit: context.sha,
    workflow,
    runId: context.runId,
    generationAttempt: Number(env.GITHUB_RUN_ATTEMPT)
  };
}

export function versions(source) {
  if (source.ref === "refs/heads/main")
    return { version: "edge", typeVersion: "latest" };
  const match = source.ref.match(releasePattern);
  assert.ok(match, "Invalid full release version");
  const version = source.ref.slice("refs/tags/v".length);
  return {
    version,
    typeVersion: match[4] ? version : `${match[1]}.${match[2]}`
  };
}

export function originalSource(source, runId, attempt) {
  assert.equal(Boolean(runId), Boolean(attempt), "Supply original run AND attempt");
  if (!runId) return source;
  assert.equal(source.workflow, releaseWorkflow, "Cross-run recovery is release-only");
  for (const value of [runId, attempt]) {
    assert.match(value, /^[1-9]\d*$/);
    assert.ok(positive(Number(value)));
  }
  return {
    ...source,
    runId: Number(runId),
    generationAttempt: Number(attempt)
  };
}

export async function verifyRun(github, source) {
  const { data: run } = await github.rest.actions.getWorkflowRunAttempt({
    ...repo,
    run_id: source.runId,
    attempt_number: source.generationAttempt,
    request: request()
  });
  assert.equal(run.id, source.runId);
  assert.equal(run.run_attempt, source.generationAttempt);
  assert.equal(run.repository.full_name, repository);
  assert.equal(run.head_repository.full_name, repository);
  assert.equal(run.head_sha, source.commit);
  assert.equal(run.head_branch, source.ref.replace(/^refs\/(heads|tags)\//, ""));
  assert.equal(run.path, source.workflow);
  assert.ok(["push", "workflow_dispatch"].includes(run.event));
  return run;
}

export async function verifySource(github, source) {
  await verifyRun(github, source);
  const { data: main } = await github.rest.repos.getBranch({
    ...repo, branch: "main", request: request()
  });
  assert.equal(main.protected, true, "Protected main is required");
  if (source.workflow === releaseWorkflow) {
    const { data: tag } = await github.rest.repos.getCommit({
      ...repo, ref: source.ref, request: request()
    });
    assert.equal(tag.sha, source.commit, "Release tag moved from the frozen source");
    const { data: comparison } = await github.rest.repos.compareCommitsWithBasehead({
      ...repo, basehead: `${source.commit}...${main.commit.sha}`, request: request()
    });
    assert.ok(
      ["ahead", "identical"].includes(comparison.status),
      "Release source must belong to trusted main history"
    );
  }
  return main.commit.sha;
}

export async function newerMainRun(github, source) {
  const current = await verifyRun(github, source);
  assert.ok(positive(current.run_number), "Missing publishing run sequence");
  const runs = await github.paginate(github.rest.actions.listWorkflowRuns, {
    ...repo, workflow_id: "publish-main-bicep.yaml",
    branch: "main", per_page: 100, request: request()
  });
  return runs.some((run) =>
    run.id !== source.runId && run.head_branch === "main" &&
    run.path === mainWorkflow && ["push", "workflow_dispatch"].includes(run.event) &&
    run.repository.full_name === repository && run.head_repository.full_name === repository &&
    positive(run.run_number) && run.run_number > current.run_number
  );
}

export function verifyArtifact(artifact, source) {
  assert.ok(positive(artifact.id));
  assert.equal(artifact.name, snapshotName(source));
  assert.equal(artifact.expired, false, "Original snapshot expired; do not regenerate");
  assert.ok(artifact.size_in_bytes > 0 && artifact.size_in_bytes <= maximumSnapshotSize);
  assert.match(artifact.digest, digestPattern);
  assert.equal(artifact.workflow_run.id, source.runId);
  assert.equal(artifact.workflow_run.head_sha, source.commit);
  assert.equal(
    artifact.workflow_run.head_branch,
    source.ref.replace(/^refs\/(heads|tags)\//, "")
  );
}

export async function verifyCapture(github, source, artifact) {
  verifyArtifact(artifact, source);
  await verifyRun(github, source);
  const jobs = await github.paginate(github.rest.actions.listJobsForWorkflowRunAttempt, {
    ...repo, run_id: source.runId, attempt_number: source.generationAttempt,
    per_page: 100, request: request()
  });
  const name = source.workflow === releaseWorkflow ? captureJob : "Capture main AWS Bicep types";
  const captures = jobs.filter((job) => job.name === name);
  assert.equal(captures.length, 1, "Missing or ambiguous original capture job");
  const job = captures[0];
  assert.equal(job.status, "completed");
  assert.equal(job.conclusion, "success", "Original capture did not succeed");
  const created = Date.parse(artifact.created_at);
  assert.ok(
    created >= Date.parse(job.started_at) && created <= Date.parse(job.completed_at),
    "Snapshot was not uploaded by the recorded successful capture attempt"
  );
}

export function selectSnapshot(artifacts, source, reuseRequested) {
  const matches = artifacts.filter((artifact) => artifact.name === snapshotName(source));
  assert.ok(matches.length <= 1, "Ambiguous snapshot");
  if (matches.length) {
    verifyArtifact(matches[0], source);
    return matches[0];
  }
  assert.ok(
    source.generationAttempt === 1 && !reuseRequested,
    "Original snapshot missing; recover the original evidence, never regenerate on retry"
  );
  return undefined;
}

export function checkReleaseHistory(runs, source, generation, reuseRequested) {
  const branch = source.ref.slice("refs/tags/".length);
  const previous = runs.filter((run) =>
    run.id !== source.runId && run.head_branch === branch &&
    ["push", "workflow_dispatch"].includes(run.event)
  );
  assert.ok(previous.every((run) => run.head_sha === source.commit),
    "A previous run used another source for this version");
  assert.ok(previous.every((run) => run.status === "completed"),
    "Another publication/recovery is active; wait for it to finish");
  assert.ok(previous.every((run) => run.conclusion !== "success"),
    "This version already has a successful publishing run; rerun that same run instead");
  if (previous.length) {
    assert.ok(reuseRequested || source.generationAttempt > 1,
      "Previous version history exists; supply original capture run and attempt");
    assert.ok(
      generation.runId === source.runId || previous.some((run) => run.id === generation.runId),
      "Original generation run is not part of this version's history"
    );
  }
}

export async function existingManifest(reference, run = tool) {
  try {
    return await run(["oras", "manifest", "fetch", reference]);
  } catch (error) {
    if (
      error.code === 1 &&
      error.stderr?.trim() ===
        `Error response from registry: failed to fetch the content of "${reference}": ${reference}: not found`
    ) return null;
    throw error;
  }
}

export async function packageInfo(github) {
  const { data } = await github.rest.packages.getPackageForOrganization({
    org: repo.owner, package_type: "container", package_name: packageName,
    request: request()
  });
  return data;
}

export async function select(github, source, generation, reuseRequested, run = tool) {
  const main = await verifySource(github, source);
  if (source.workflow === mainWorkflow)
    assert.equal(main, source.commit, "Start generation from current protected main");
  await verifyRun(github, generation);
  if (source.workflow === releaseWorkflow) {
    const runs = await github.paginate(github.rest.actions.listWorkflowRuns, {
      ...repo, workflow_id: "publish-release-bicep.yaml",
      branch: source.ref.slice("refs/tags/".length), per_page: 100, request: request()
    });
    checkReleaseHistory(runs, source, generation, reuseRequested);
  }
  const artifacts = await github.paginate(github.rest.actions.listWorkflowRunArtifacts, {
    ...repo, run_id: generation.runId, per_page: 100, request: request()
  });
  const artifact = selectSnapshot(artifacts, generation, reuseRequested);
  if (!artifact && source.workflow === releaseWorkflow) {
    // Main bootstraps the package; release absence must never be inferred from denied access.
    await packageInfo(github);
    const existing = await existingManifest(`${target}:${versions(source).version}`, run);
    assert.equal(existing, null, "Version already exists without original capture; never regenerate");
  }
  return artifact;
}

export async function capture(source, directory, registry, schemas, generated, run = tool) {
  assert.match(registry, /^localhost:[0-9]+$/);
  assert.equal(source.generationAttempt, 1, "Never recapture on retry");
  const scratch = join(directory, "capture");
  await mkdir(join(scratch, "docker"), { recursive: true });
  await save(join(scratch, "docker/config.json"), {});
  await save(join(scratch, "bicepconfig.json"), {
    experimentalFeaturesEnabled: { ociEnabled: true }
  });
  const index = await load(join(generated, "index.json"));
  assert.deepEqual(index.settings, {
    name: "aws", version: versions(source).typeVersion, isSingleton: false
  });
  assert.ok(Object.keys(index.resources).length > 0);
  assert.ok(Object.keys(index.resources).every((name) => name.endsWith("@default")));
  const localReference = `${registry}/aws:capture-${versions(source).version}`;
  await run([
    "bicep", "publish-extension", join(generated, "index.json"),
    "--target", `br:${localReference}`
  ], { cwd: scratch, env: {
    ...process.env, DOCKER_CONFIG: join(scratch, "docker"),
    BICEP_TRUSTED_REGISTRIES: "localhost"
  } });
  const layout = join(scratch, "layout");
  await run(["oras", "cp", "--from-plain-http", "--to-oci-layout",
    localReference, `${layout}:bundle`]);
  const descriptor = (await load(join(layout, "index.json"))).manifests[0];
  await save(join(layout, "source.json"), { source, manifestDigest: descriptor.digest });
  // Preserve input/output evidence without extracting or executing it in the uploader.
  const archive = join(directory, snapshotName(source));
  await run(["tar", "-cf", archive, "-C", layout,
    "oci-layout", "index.json", "blobs", "source.json",
    "-C", directory, "schemas", "generated"]);
  assert.ok((await lstat(archive)).size <= maximumSnapshotSize,
    "Snapshot exceeds the collector's 64 MiB limit");
  return archive;
}

export function validateManifest(manifest, config) {
  assert.equal(manifest.schemaVersion, 2);
  assert.equal(manifest.mediaType, "application/vnd.oci.image.manifest.v1+json");
  assert.equal(manifest.artifactType, `${provider}artifact`);
  assert.equal(manifest.config.mediaType, `${provider}config.v1+json`);
  assert.equal(manifest.layers.length, 1, "Only one data layer is allowed");
  assert.equal(manifest.layers[0].mediaType, `${provider}layer.v1.tar+gzip`);
  assert.equal(manifest.annotations?.["bicep.serialization.format"], "v1");
  assert.ok(!manifest.subject);
  for (const blob of [manifest.config, ...manifest.layers]) {
    assert.match(blob.digest, digestPattern);
    assert.ok(Number.isSafeInteger(blob.size) && blob.size >= 0);
    assert.ok(!blob.urls, "Foreign blob URLs are forbidden");
  }
  assert.deepEqual(config, {}, "Executable provider configuration is forbidden");
}

export async function prepare(github, archive, expectedSource, artifact, directory, run = tool) {
  verifyArtifact(artifact, expectedSource);
  const stat = await lstat(archive);
  assert.ok(stat.isFile() && stat.size > 0 && stat.size <= maximumSnapshotSize);
  assert.equal(hash(await readFile(archive)), artifact.digest, "Snapshot digest mismatch");
  const metadata = JSON.parse(await run(["tar", "-xOf", archive, "source.json"]));
  assert.ok(positive(metadata.source.generationAttempt));
  assert.ok(metadata.source.generationAttempt <= expectedSource.generationAttempt);
  assert.deepEqual(
    { ...metadata.source, generationAttempt: expectedSource.generationAttempt },
    expectedSource, "Snapshot source mismatch"
  );
  await verifyCapture(github, metadata.source, artifact);
  const raw = await run(["oras", "manifest", "fetch", "--oci-layout", `${archive}:bundle`]);
  assert.equal(hash(raw), metadata.manifestDigest);
  const manifest = JSON.parse(raw);
  validateManifest(manifest, {});
  validateManifest(manifest, JSON.parse(await run([
    "oras", "manifest", "fetch-config", "--oci-layout", `${archive}:bundle`
  ])));
  const layout = join(directory, "layout");
  await run(["oras", "cp", "--from-oci-layout", "--to-oci-layout",
    `${archive}@${metadata.manifestDigest}`, `${layout}:bundle`]);
  const { version } = versions(expectedSource);
  manifest.annotations = {
    ...manifest.annotations,
    "org.opencontainers.image.source": `https://github.com/${repository}`,
    "org.opencontainers.image.revision": expectedSource.commit,
    "org.opencontainers.image.version": version
  };
  const stamped = JSON.stringify(manifest) + "\n";
  await writeFile(join(directory, "manifest.json"), stamped);
  await run(["oras", "manifest", "push", "--oci-layout",
    `${layout}:bundle`, join(directory, "manifest.json")]);
  const record = {
    name: "aws-bicep-types",
    source: { repository, commit: expectedSource.commit },
    version,
    reference: `${target}:${version}`,
    digest: hash(stamped),
    generation: {
      workflow: expectedSource.workflow,
      runId: metadata.source.runId,
      runAttempt: metadata.source.generationAttempt,
      artifactId: artifact.id,
      artifactDigest: artifact.digest
    }
  };
  const receipt = { status: "prepared", record };
  await save(join(directory, "receipt.json"), receipt);
  return receipt;
}

export async function publish(github, source, receipt, directory, run = tool) {
  const { record } = receipt;
  assert.equal(record.reference, `${target}:${versions(source).version}`);
  assert.deepEqual(record.source, { repository, commit: source.commit });
  assert.match(record.digest, digestPattern);
  try {
    const main = await verifySource(github, source);
    if (source.workflow === mainWorkflow &&
        (main !== source.commit || await newerMainRun(github, source))) {
      assert.equal(source.generationAttempt, 1,
        "Superseded retry may be partial; recover publication from current main");
      receipt.status = "superseded";
      return;
    }
    let existing = null;
    if (source.workflow === releaseWorkflow) {
      await packageInfo(github);
      existing = await existingManifest(record.reference, run);
    }
    if (existing !== null) {
      assert.equal(hash(existing), record.digest, "Full-version conflict; never overwrite");
    } else {
      receipt.status = "partial";
      if (source.workflow === mainWorkflow)
        receipt.mirror = { reference: developmentMirror, status: "pending" };
      await save(join(directory, "receipt.json"), receipt);
      await run(["oras", "cp", "--from-oci-layout",
        `${join(directory, "layout")}@${record.digest}`, record.reference]);
    }
    assert.equal(hash(await run(["oras", "manifest", "fetch", record.reference])), record.digest);
    receipt.status = "uploaded";
    receipt.uploadedDigest = record.digest;
    if (source.workflow === mainWorkflow) {
      receipt.mirror.status = "copying";
      await save(join(directory, "receipt.json"), receipt);
      // Pin the source to the captured digest, never resolve mutable edge again for copying.
      await run(["oras", "cp", `${target}@${record.digest}`, developmentMirror]);
      assert.equal(hash(await run(["oras", "manifest", "fetch", developmentMirror])),
        record.digest, "ACR development mirror digest mismatch");
      assert.equal(hash(await run(["oras", "manifest", "fetch", record.reference])),
        record.digest, "GHCR edge changed during compatibility publication");
      receipt.mirror.status = "verified";
      receipt.mirror.digest = record.digest;
      await save(join(directory, "receipt.json"), receipt);
    }
    const pkg = await packageInfo(github);
    receipt.visibility = pkg?.visibility ?? "unknown";
    assert.equal(receipt.visibility, "public",
      "Upload retained. A package admin must make bicep-types-aws Public, then retry using the original snapshot");
    const anonymous = join(directory, "anonymous");
    await mkdir(anonymous, { recursive: true });
    await save(join(anonymous, "config.json"), {});
    assert.equal(hash(await run(["oras", "manifest", "fetch", record.reference], {
      env: { ...process.env, DOCKER_CONFIG: anonymous }
    })), record.digest, "Anonymous manifest verification failed");
    receipt.status = "published";
    await mkdir(join(directory, "record"), { recursive: true });
    await save(join(directory, "record/aws-bicep-extension.json"), record);
    return record;
  } finally {
    await save(join(directory, "receipt.json"), receipt);
  }
}

export default async function script({ github, core, context }) {
  try {
    const source = identity(context, process.env);
    const directory = core.getInput("directory", { required: true });
    await mkdir(directory, { recursive: true });
    assert.equal((await tool(["git", "rev-parse", "HEAD"])).trim(), source.commit);
    const runId = core.getInput("generation_run_id");
    const attempt = core.getInput("generation_run_attempt");
    const generation = originalSource(source, runId, attempt);
    const operation = core.getInput("operation", { required: true });
    if (operation === "select") {
      const artifact = await select(github, source, generation, Boolean(runId));
      core.setOutput("artifact_id", artifact?.id ?? "");
      core.setOutput("generation_run_id", generation.runId);
      core.setOutput("reuse", String(Boolean(artifact)));
      core.setOutput("type_version", versions(source).typeVersion);
    } else if (operation === "capture") {
      assert.equal(runId, "", "Explicit recovery may only reuse");
      await verifySource(github, source);
      await capture(source, directory, core.getInput("registry", { required: true }),
        join(directory, "schemas"), join(directory, "generated"));
    } else if (operation === "prepare") {
      await verifySource(github, source);
      const id = Number(core.getInput("artifact_id", { required: true }));
      assert.ok(positive(id));
      const { data: artifact } = await github.rest.actions.getArtifact({
        ...repo, artifact_id: id, request: request()
      });
      const files = await readdir(join(directory, "download"));
      assert.equal(files.length, 1, "Expected exactly one raw snapshot");
      const receipt = await prepare(github, join(directory, "download", files[0]),
        generation, artifact, directory);
      if (attempt) assert.equal(receipt.record.generation.runAttempt, Number(attempt));
    } else if (operation === "publish") {
      const record = await publish(github, source, await load(join(directory, "receipt.json")), directory);
      core.setOutput("published", String(Boolean(record)));
    } else {
      throw new Error(`Unknown operation: ${operation}`);
    }
  } catch (error) {
    core.setFailed(error instanceof Error ? error.message : String(error));
  }
}
