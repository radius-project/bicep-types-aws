// Copyright 2026 The Radius Authors.
// Licensed under the Apache License, Version 2.0.

import assert from "node:assert/strict";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import monitorRemoteWorkflow from "./monitor-remote-workflow.mjs";
import {
  developmentMirror, hash, identity, mainWorkflow, newerMainRun, repository,
  target, tool, verifyCapture, verifySource
} from "./publish-bicep.mjs";

const digestPattern = /^sha256:[a-f0-9]{64}$/;
const positive = (n) => Number.isSafeInteger(n) && n > 0;
const save = (directory, receipt) =>
  writeFile(join(directory, "receipt.json"), JSON.stringify(receipt, null, 2) + "\n");

export function copyRequest(source, receipt) {
  assert.equal(source.workflow, mainWorkflow);
  assert.equal(source.ref, "refs/heads/main");
  assert.equal(receipt.status, "ghcr-published", "GHCR publication must succeed before mirroring");
  assert.equal(receipt.visibility, "public");
  const { record } = receipt;
  assert.equal(record.name, "aws-bicep-types");
  assert.deepEqual(record.source, { repository, commit: source.commit });
  assert.match(source.commit, /^[a-f0-9]{40}$/);
  assert.equal(record.version, "edge");
  assert.equal(record.reference, `${target}:edge`);
  assert.match(record.digest, digestPattern);
  assert.equal(receipt.uploadedDigest, record.digest);
  const generation = record.generation;
  assert.equal(generation.workflow, mainWorkflow);
  assert.equal(generation.runId, source.runId, "Main recovery must reuse the same run");
  assert.ok(positive(generation.runId) && positive(generation.runAttempt));
  assert.ok(generation.runAttempt <= source.generationAttempt);
  assert.ok(positive(generation.artifactId));
  assert.match(generation.artifactDigest, digestPattern);
  const releaseIdentifier = `copy-aws-edge-${source.commit}-${generation.runId}-${generation.runAttempt}-${record.digest.slice(7)}`;
  assert.ok(releaseIdentifier.length <= 200);
  return {
    mode: "copy",
    source_repository: repository,
    source_ref: source.ref,
    source_sha: source.commit,
    registry_target: "aws",
    rel_channel: "edge",
    digest: record.digest,
    release_identifier: releaseIdentifier,
    source_evidence: {
      run_id: generation.runId,
      run_attempt: generation.runAttempt,
      artifact_id: generation.artifactId,
      artifact_digest: generation.artifactDigest
    }
  };
}

export async function mirrorMain({
  github, publisherGithub, core, source, receipt, directory, run = tool,
  monitor = monitorRemoteWorkflow
}) {
  try {
    const payload = copyRequest(source, receipt);
    receipt.status = "mirror-pending";
    receipt.mirror = {
      reference: developmentMirror, status: "pending",
      release_identifier: payload.release_identifier
    };
    await save(directory, receipt);
    const current = async () => {
      assert.equal(await verifySource(github, source), source.commit, "Superseded main mirror");
      assert.equal(await newerMainRun(github, source), false, "Superseded main mirror run");
    };
    await current();
    const generation = receipt.record.generation;
    const { data: artifact } = await github.rest.actions.getArtifact({
      owner: "radius-project", repo: "bicep-types-aws", artifact_id: generation.artifactId,
      request: { signal: AbortSignal.timeout(20_000) }
    });
    assert.equal(artifact.digest, generation.artifactDigest);
    await verifyCapture(github, {
      ...source, generationAttempt: generation.runAttempt
    }, artifact);
    const anonymous = join(directory, "anonymous");
    await mkdir(anonymous, { recursive: true });
    await writeFile(join(anonymous, "config.json"), "{}\n");
    const options = { env: { ...process.env, DOCKER_CONFIG: anonymous }, timeout: 60_000 };
    const verify = async (reference) => assert.equal(
      hash(await run(["oras", "manifest", "fetch", reference], options)),
      payload.digest, `Anonymous manifest digest mismatch: ${reference}`
    );
    await verify(`${target}:edge`);
    const inputs = {
      OWNER: "azure-octo", REPO: "radius-publisher",
      WORKFLOW_FILE: "publish-bicep-types-aws.yml", EVENT_TYPE: "bicep-types-aws",
      RELEASE_IDENTIFIER: payload.release_identifier, CLIENT_PAYLOAD: JSON.stringify(payload),
      REUSE_SUCCESSFUL: "false"
    };
    let failure;
    receipt.mirror.status = "requested";
    await save(directory, receipt);
    await monitor({
      github: publisherGithub,
      onRunFound: () => save(directory, receipt),
      core: {
        getInput: (name) => inputs[name] ?? "",
        info: (message) => core.info(message),
        setFailed: (message) => { failure = message; },
        setOutput: (name, value) => { receipt.mirror[name] = value; }
      }
    });
    assert.ok(!failure, failure);
    assert.equal(receipt.mirror.conclusion, "success", "Missing correlated publisher success");
    assert.match(receipt.mirror.run_id ?? "", /^[1-9]\d*$/, "Missing private publisher run");
    await current();
    await verify(`${target}:edge`);
    await verify(developmentMirror);
    receipt.mirror.status = "verified";
    receipt.mirror.digest = payload.digest;
    receipt.status = "published";
    return receipt;
  } catch (error) {
    if (receipt.mirror) {
      receipt.mirror.status = "failed";
      receipt.mirror.error = error instanceof Error ? error.message : String(error);
    }
    throw error;
  } finally {
    await save(directory, receipt);
  }
}

export default async function script({ github, publisherGithub, core, context }) {
  try {
    const source = identity(context, process.env);
    assert.equal((await tool(["git", "rev-parse", "HEAD"])).trim(), source.commit);
    const directory = core.getInput("directory", { required: true });
    const receipt = JSON.parse(await readFile(join(directory, "receipt.json"), "utf8"));
    await mirrorMain({ github, publisherGithub, core, source, receipt, directory });
  } catch (error) {
    core.setFailed(error instanceof Error ? error.message : String(error));
  }
}
