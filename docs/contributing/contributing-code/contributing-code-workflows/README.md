# Understanding the bicep-types-aws workflows

## Build and schema updates

`build.yaml` builds the Go downloader and TypeScript generator and runs the existing
generator tests. A separate read-only job exercises the publishing helper and
native Bicep/ORAS fixtures using checked-in schemas/output and two local registries.
It receives no AWS, Azure, App-key or package-write credentials.

The generator tests are in `src/aws-type-generator/src/*.test.ts`, and the downloader tests, including the breaking change check, are in `src/aws-type-downloader`. The build also compiles the templates in `src/aws-type-generator/bicep-test` with the Bicep CLI against types generated from the test fixtures. Run it locally with `npm run build && npm run test:bicep` in `src/aws-type-generator`, with `bicep` on your `PATH`.

## `generate-types.yaml`

This workflow downloads the latest AWS resource type schemas, regenerates the Bicep types and the reference documentation, and opens a pull request with the changes. It runs every Monday and can also be started manually from `main`; runs started from other branches are skipped. Every run uses the `generate-aws-types` branch, so if the pull request is still open, it is updated instead of a new one being opened. If nothing changed, no pull request is opened. AWS moves the last updated time of a type when it redeploys the type, even if the schema did not change, so the downloader only rewrites a type's file when its schema changed.

The downloader keeps the types that AWS Cloud Control can create, including create-and-delete-only types that it can't update, and the read-only types that AWS creates on its own. A read-only type's schema has a read handler but no create handler, and a create-and-delete-only type's schema has a create handler but no update handler. Other types that Cloud Control can't create, such as legacy and deprecated types, are left out.

The pull request body lists the changes that can break existing templates: removed resource types, types that became read-only, types that can no longer be updated, removed properties, properties that became required, and properties whose type changed. It also lists the new read-only and create-and-delete-only types, so a reviewer can check that each one belongs in the extension. The lists are cut short to fit in the pull request body. The job summary of the workflow run has longer lists, which are cut short only past the job summary limits set in `generate-types.yaml`. To run the checks locally, copy `artifacts/types` to another directory, run the downloader, and then run:

```bash
cd src/aws-type-downloader
go run . breaking-changes --old <copy of the previous types> --new ../../artifacts/types
go run . added-types --old <copy of the previous types> --new ../../artifacts/types
```

The generator also applies the schemas and extra properties Radius owns, from the commit the `radius` submodule pins, and the pull request body names that commit. If AWS publishes a type or a property with the same name as one Radius provides, the generator keeps Radius's type and AWS's property, and the workflow opens an issue titled "AWS types clash with Radius types" instead of failing. A run that finds the same clashes as any issue with that title, open or closed, changes nothing. A run that finds different clashes adds them as a comment on the open issue, or opens a new one if none is open. A clash is reported when either side is new, compared with what the checked-in types were generated from: `artifacts/types` on `main`, and the Radius commit recorded in `artifacts/radius-commit`, which the workflow updates on every run. A type clash is new if either the AWS type or Radius's hand-written schema is new. A property clash is new if either the type's property or Radius's extra property is new, where the type's property comes from AWS's schema or Radius's, whichever the extension used. A clash both sides already had isn't reported again, so a clash a person reviewed and kept stays quiet. Close the issue after the pull request that refreshes the types merges.

Merging the pull request publishes the updated types through `publish-main-bicep.yaml`.

The workflow needs these repository secrets: `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` to read the AWS CloudFormation registry, and `RADIUS_TYPES_BOT_CLIENT_ID` and `RADIUS_TYPES_BOT_PRIVATE_KEY` for the GitHub App that opens the pull request. The app needs read and write access to contents and pull requests on this repository. The issue is opened with the workflow's own token.
Its secret-bearing job runs only on canonical protected current main. It uses the
existing AWS schema identity and the types-bot App; neither is a GHCR credential.
The App's maximum grants/installations and effective branch review/bypass policy
must be reviewed independently of the smaller token scopes requested by the job.

## Publishing ownership after the controlled handoff

| Workflow | Source | Writes |
| --- | --- | --- |
| `publish-main-bicep.yaml` | Protected current main, push or manual dispatch | Publishes GHCR `bicep-types-aws:edge`, then requests the private publisher copy its exact digest to ACR `aws:latest` |
| `publish-release-bicep.yaml` | Trusted main-history `vX.Y.Z` or `vX.Y.Z-rc.N` tag | GHCR full stable/RC version without `v` ONLY |
| Existing approved Radius R3 finalizer | Coordinated tagged release | GHCR stable `latest`/`X.Y`; requests private full stable/RC ACR copies and eligible stable channel promotion |

The current legacy `publish-bicep.yaml` dispatcher is removed by this handoff.
Old tags still contain its caller YAML, so the separately authorized private
publisher guard is a **merge and rollout blocker**, not optional cleanup.
ACR development `aws:latest` maps to GHCR `edge`, not GHCR stable `latest`.
The earlier A1 staging workflows and legacy publisher captured fresh schemas
independently and made **no parity claim**; parity begins with this controlled
main handoff, not with historical staging artifacts.

The private exact-digest copy capability is deployed in
[azure-octo/radius-publisher#38](https://github.com/azure-octo/radius-publisher/pull/38).
Merge the producer first, then the AWS copy-request caller in
[#322](https://github.com/radius-project/bicep-types-aws/pull/322), before activating
public packages. Merging this producer starts its main publishing workflow;
it does not itself activate public distribution. The private main-generation gate
rejects legacy production-main requests once canonical GHCR `edge` exists: the
old payload cannot prove ordering between live schema refreshes at the same SHA.
Only positively absent `edge` permits legacy main generation; authorization or
lookup errors fail closed. Do not expect legacy ACR main generation to continue
normally after bootstrap. Tagged legacy requests and Test remain unchanged by
that main-specific gate.

The AWS release producer never writes stable aliases or ACR compatibility tags.
The existing approved Radius R3 finalizer alone coordinates tagged compatibility
after activation. Production Azure login and ACR writes remain exclusively in
`azure-octo/radius-publisher`: `radius-project` workflows cannot publish there.
Source identity, immutable full-version rules and the R3 record ABI are unchanged.

## Capture and credential boundary

Each new publication captures the actual schema inputs, generated types and native
OCI layout once. The capture includes the Radius-owned schemas and extra
properties from the pinned `radius` submodule under `schemas/radius`, plus its
commit in `schemas/radius-commit`. Generation uses that explicit snapshot path,
so both upstream schema sources are retained for retries without changing the
release-record contract. The downloader needs CloudFormation `ListTypes` and
`DescribeType` for public AWS-owned resource schemas in `us-west-2`. Verify that
the existing `AWS_ACCESS_KEY_ID`/`AWS_SECRET_ACCESS_KEY` identity is available to
this repository and limited to the required read operations; a workflow reference
does not prove either condition. Do not substitute a developer's default AWS
credentials. AWS credentials are passed only to the trusted downloader step,
after dependencies have been built, not to generator scripts or the uploader.

The fresh uploader uses this repository's `GITHUB_TOKEN` with `packages: write`.
It authenticates Actions evidence and copies a validated data-only Bicep OCI graph.
It never executes generated content, runs npm scripts, or receives an App private
key or AWS credentials. No repository-wide write defaults or publishing PAT are
needed. Existing PR-caller controls, App authority and main protection must still
be verified before operational package grants; package access is repository-scoped.

Only a separate trusted-main mirror job receives the existing
`RADIUS_PUBLISHER_BOT_APP_ID` and `RADIUS_PUBLISHER_BOT_PRIVATE_KEY`. Its App token
is scoped to `azure-octo/radius-publisher` with Contents write, Actions read and
Metadata read for dispatch and correlated monitoring. Source evidence uses this
repository's read-only `GITHUB_TOKEN`. Neither token is forwarded in the payload.
There is no Azure login, production ACR write, `id-token: write`, or new source-org
OIDC trust in this workflow. The mirror job has no package-write permission, AWS
credentials, npm execution or generated-code execution. The GHCR uploader and
schema capture receive no publisher App key.

Bicep `0.46.1` and ORAS `1.3.4` are checksum-pinned. Packaging uses an explicit
temporary `ociEnabled: true` configuration. Generated resource identities remain
`@default`; index settings retain legacy versions (`latest`, stable `X.Y`, full
RC). OCI full-version tags and annotations are separate from these type settings.

## Bootstrap and public availability

Start with an authorized current-main publication. Its first write can create
`ghcr.io/radius-project/bicep-types-aws` as a private package; it does not require
the package to exist or be public before upload. The uploader retains its digest
and pending-mirror receipt, then checks Public visibility and anonymous access
**before** the private copy job can run. A private-upload failure does not dispatch
or regenerate. A package administrator must then use Package settings ->
Change visibility -> Public. Retry the same run/snapshot, or publish current main
again, and verify restore with an empty credential store/cache.

Releases require that main has bootstrapped the package. Authentication failures
(including GHCR 403 responses) are never interpreted as a missing package/version.
After upload, the workflow checks Public visibility and an anonymous manifest
fetch; deployment readiness additionally requires a real anonymous Bicep restore.

Main publication is serialized. Immediately before writes, the uploader verifies
both the main SHA and whether a newer authenticated main run exists. A newer run
supersedes an older snapshot even at the **same SHA**, because live schemas may
have changed. A superseded first attempt performs no writes; an ambiguous old
retry fails and requires recovery from current main.

After GHCR succeeds, the mirror job downloads that run's receipt, validates source
and original capture metadata, and sends `mode: copy` to the existing
`bicep-types-aws` event / `publish-bicep-types-aws.yml` private workflow. Fixed
allowlists derive GHCR `edge` and ACR `aws:latest`; no arbitrary destination is
accepted. The private publisher copies `source@digest` without regeneration,
annotation rewriting or recompression. The source caller then anonymously fetches
the ACR manifest and verifies its SHA-256, as well as current GHCR `edge`.

The shared payload is:

```json
{
  "mode": "copy",
  "source_repository": "radius-project/bicep-types-aws",
  "source_ref": "refs/heads/main",
  "source_sha": "<40 lowercase hex>",
  "registry_target": "aws",
  "rel_channel": "edge",
  "digest": "sha256:<final GHCR manifest hash>",
  "release_identifier": "copy-aws-edge-<source_sha>-<generation_run_id>-<generation_run_attempt>-<manifest digest hex>",
  "source_evidence": {
    "run_id": 123,
    "run_attempt": 1,
    "artifact_id": 456,
    "artifact_digest": "sha256:<original raw snapshot hash>"
  }
}
```

Evidence points to the original generation TAR, not the publication receipt ZIP.
The source caller validates the captured bundle and its binding to the digest.
The private receiver trusts the approved App caller for that binding and validates
public Actions metadata, canonical source identity, manifest provenance and current
edge. It does not independently download source artifacts or private release plans.
No new cross-repository artifact-read credential or result artifact is required.

The correlation identifier is stable across publication retries of the same
capture. The public Radius correlation monitor is reused with
`REUSE_SUCCESSFUL=false`: active matching work is reused, completed successes are
reconciled again, and uncertain dispatch acceptance is monitored without blindly
redispatching. Inspect the retained receipt and remote run before retrying an
unknown outcome. Private workflow success alone is insufficient without matching
anonymous destination bytes. The 25-minute mirror job leaves room around the
monitor's 15-minute budget for validation and receipt upload.

`aws-bicep-edge-<run_id>-<attempt>/receipt.json` records GHCR progress:
`uploaded` (possibly awaiting Public) or `ghcr-published`, with mirror `pending`.
`aws-bicep-mirror-<run_id>-<attempt>/receipt.json` retains `mirror-pending` plus
remote correlation/run identity, conclusion or unknown state on failure.
Only successful remote completion and digest verification set `status: published`
and `mirror.status: verified`. Errors and timeouts fail visibly and retain receipts.
Retry uses the original snapshot/evidence, never refreshed schema output.

The private service serializes copy, legacy generation and promotion per target,
then rechecks protected main SHA, current edge digest and generation run-number
freshness immediately before writing. A newer canonical run, even queued/failed at
the same SHA, supersedes an older request. The source caller checks freshness too,
but source-side serialization alone cannot protect delayed private copies.
The first authenticated fresh copy may replace unannotated legacy development
`latest`; immutable full-version conflicts still fail and stable alias guards remain.
The pair is not registry-transactional; a parity gap can persist until recovery.

## Versioned evidence and recovery

Only full stable versions and dotted RCs are supported, for example `v0.62.1` and
`v0.62.1-rc.2`. The tag must resolve to the exact source SHA; Radius independently
matches it to the controller-frozen AWS commit. Full-version tags follow a
publish-once CI policy: identical retries verify content, conflicting digests fail,
and no release path force-overwrites an existing version.

The capture job is named `Capture versioned AWS Bicep types`. It uploads the raw
file `bicep-types-aws-<generationRunId>.tar` with native Actions `archive: false`,
an immutable artifact ID and SHA-256, a 64 MiB maximum and 90-day retention.
The tar contains the native OCI layout, `source.json`, and the original
`schemas/` (including pinned Radius inputs) and `generated/` directories.
A successful publishing attempt uploads
`aws-bicep-extension-<publishRunId>-<publishAttempt>`, containing exactly one file:
`aws-bicep-extension.json`. Partial receipts are uploaded separately.

The record has this shape:

```json
{
  "name": "aws-bicep-types",
  "source": {
    "repository": "radius-project/bicep-types-aws",
    "commit": "<frozen source SHA>"
  },
  "version": "0.62.1",
  "reference": "ghcr.io/radius-project/bicep-types-aws:0.62.1",
  "digest": "sha256:<manifest digest>",
  "generation": {
    "workflow": ".github/workflows/publish-release-bicep.yaml",
    "runId": 123,
    "runAttempt": 1,
    "artifactId": 456,
    "artifactDigest": "sha256:<raw artifact digest>"
  }
}
```

Rerun a failed job/run to reuse its original snapshot. A same-run publishing retry
retains the original successful capture attempt even when the publishing attempt
increases. An overall failed run is valid generation evidence if its capture job
succeeded and the artifact was created within that job's timestamps.

For a separate recovery run, manually select the **same tag** and supply both
`generation-run-id` and `generation-run-attempt` of the original successful
capture. The previous publication must have failed; another active publication
must finish first. A new dispatch after a successful publishing run fails rather
than creating a second successful no-op. Rerunning that same successful run ID
is supported and emits a record for its new publishing attempt.

Missing, expired, ambiguous or mismatched original capture evidence is fatal.
Restore the original evidence through the approved recovery process; never
refresh AWS schemas to reconstruct a previously captured/published version.
The Radius controller reads artifacts with an AWS-only Actions/Contents/Metadata
read App token and persists its authenticated record before creating the Radius
tag. The AWS producer does not modify the Deployment Engine lock.

## Coordinated handoff prerequisites

This is a cross-repository, non-atomic rollout, not a feature toggle:

Review readiness does not authorize production activation. Scoped publisher App
grants, package access/Public availability and the controlled writer-drain plan
remain operational prerequisites. No new Azure federation or production
credential grant in `radius-project` is part of these prerequisites.

The companion implementation is
[azure-octo/radius-publisher#38](https://github.com/azure-octo/radius-publisher/pull/38)
merged as `4438d85adcf53f192217d53cd393352237433ca7`; the private copy capability
is deployed. Merge this caller after its source producer and before the first
public `edge` activation. Drain queued/running old workflow revisions,
including those using old concurrency keys; the new lock cannot stop them.

1. Prepare the GHCR staging producer, verify the schema identity, and validate
   stable/RC evidence and original-snapshot recovery. Before bootstrapping Public
   `edge`, merge the A2 caller described below after this producer. The private
   copy capability is already deployed; its legacy main-generation gate rejects
   requests once `edge` exists.
2. Prepare this AWS caller that requests a copy of main's exact GHCR digest to
   ACR `aws:latest` from the existing private publisher and removes the legacy
   schema-regenerating production dispatcher. Keep existing Azure authentication
   in `azure-octo/radius-publisher`; do not add Azure login, federation or ACR
   credentials to this repository. Authenticate the source-owned GHCR evidence
   and copy the fixed digest without regenerating schemas.
3. Use the deployed private publisher's authenticated exact-digest copy path and
   legacy main gate, which permits regeneration only on positively absent
   canonical GHCR `edge`, before generation
   and again before writing under its target lock. A validated edge rejects legacy
   main requests with `use mode:copy`; auth, network and invalid-manifest errors
   never mean absence. Preserve tagged legacy requests, explicit `test/aws` and
   all unrelated/needed Radius, DE and SWA workflows. Coordinate
   retirement of tagged legacy writers with the release cutover; old tags retain
   old dispatch YAML, so deleting only the current-main caller is insufficient.
4. Confirm Radius's existing release App can request AWS-only evidence reads.
   Grant the Radius repository explicit Write under the AWS package's Manage
   Actions access only after its candidate-writer boundary is ready. This is
   separate from the App's artifact-read access.
5. Pause new release creation, finish unpublished legacy release plans, establish
   an AWS main-publication maintenance window, and drain queued/running old
   production Bicep writers. A new private guard does not stop already-running
   jobs. Preserve reconciliation of already-published historical releases.
6. Apply the private publisher and AWS copy-request handoff, verify main digest
   parity, then activate the Radius release finalizer. Rehearse paired RC
   and approved stable publication, aliases, partial recovery and ACR compatibility
   before resuming releases. A deliberate publication gap is safer than competing
   writers; existing ACR reads remain available.

The required rollout order is non-atomic: pause **new** releases, finish unpublished
legacy plans, enter the AWS main maintenance window and drain all queued/running
old production Bicep writers, apply the private guard plus this main mirror, verify
same-digest parity, activate R3, rehearse RC/stable/recovery and historical
reconciliation, then resume releases. Existing ACR reads and already-published
historical reconciliation remain supported throughout.

Local fixtures do not authorize or perform live GHCR/ACR/AWS calls, identity or
settings writes, release dispatches, merges, private publisher edits, or upstream
Radius changes. Keep ACR resources and supported artifacts; no deletion is part of
this handoff. Passing local checks and review readiness do not activate publishing.
