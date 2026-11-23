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
The workflow reuses the existing App credentials and repository-scoped token
permissions; this migration does not add App grants or bypass branch protection.

## Publishing ownership after the controlled handoff

| Workflow | Source | Writes |
| --- | --- | --- |
| `publish-main-bicep.yaml` | Protected current main, push or manual dispatch | Publishes GHCR `bicep-types-aws:edge`, then requests the private publisher copy its exact digest to ACR `aws:latest` |
| `publish-release-bicep.yaml` | Default-main `repository_dispatch`, selecting a frozen stable/RC source | GHCR full stable/RC version without `v` ONLY |
| `publish-bicep.yaml` | `v*` tag push or manual dispatch on a `v*` tag only | Retains legacy private ACR publication for current Radius releases |
| Pending Radius R3 finalizer ([radius-project/radius#13178](https://github.com/radius-project/radius/pull/13178)) | Future coordinated tagged release after activation | GHCR stable `latest`/`X.Y`; requests private full stable/RC ACR copies and eligible stable channel promotion |

This handoff removes only the legacy dispatcher's **main** trigger. Keep its
`v*` tag path and `get_release_version.py` until
[radius-project/radius#13178](https://github.com/radius-project/radius/pull/13178)
ships and the tagged handoff is activated; current Radius releases still depend
on that ACR publication. The tag caller uses the existing publisher App and
version/channel mapping. Its `<full-version>-<source-sha>` release identifier
is present in the JSON payload and passed to the shared correlated monitor, which
dispatches or resumes the matching run without time-window discovery or a separate
duplicate dispatch. Main dispatch is rejected even when started manually.
Old tags still contain earlier caller YAML, so the private publisher's legacy-main
guard and coordinated writer drain remain part of the handoff.
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
The pending Radius R3 finalizer will coordinate tagged compatibility after its
activation; it is not the current release path. Production Azure login and ACR writes remain exclusively in
`azure-octo/radius-publisher`: `radius-project` workflows cannot publish there.
Source identity, immutable full-version rules and the R3 record ABI are unchanged.

## Capture and credential boundary

Each producer job initializes `INPUT_DIRECTORY` under
`$RUNNER_TEMP/aws-bicep-publication` through `GITHUB_ENV` before its other steps.
All schema/snapshot downloads, uploads and receipts in that job use this path;
jobs exchange artifacts, not local directories. The upload action rejects literal
`.`/`..` path segments, so do not use a workspace-relative parent path.

Each new publication captures the actual schema inputs, generated types and native
OCI layout once. The capture includes the Radius-owned schemas and extra
properties from the pinned `radius` submodule under `schemas/radius`, plus its
commit in `schemas/radius-commit`. Generation uses that explicit snapshot path,
so both upstream schema sources are retained for retries without changing the
release-record contract. The downloader needs CloudFormation `ListTypes` and
`DescribeType` for public AWS-owned resource schemas in `us-west-2`. It reuses the
existing `AWS_ACCESS_KEY_ID`/`AWS_SECRET_ACCESS_KEY` credentials used for schema
generation. The downloader performs reads; this is not a claim about the
identity's complete IAM permissions. Do not substitute a developer's default AWS
credentials. Publishing workflows pass AWS credentials only to the trusted downloader step,
after dependencies have been built, not to generator scripts or the uploader.

Release orchestration and tooling come from the default-branch commit selected by
GitHub for `repository_dispatch`, **not** from tag-controlled workflow YAML.
A separate schema-input job runs only the controller's downloader with the
existing `publish-bicep` environment's AWS credentials. A fresh, unprivileged job
runs the frozen generator without environment secrets or package-write authority.
The uploader checks out the controller commit, authenticates the original
capture, and imports only the data-only OCI graph. The frozen source can never
choose commands, helpers or destinations in a privileged job.

The fresh uploader uses this repository's `GITHUB_TOKEN` with `packages: write`.
It authenticates Actions evidence and copies a validated data-only Bicep OCI graph.
It never executes generated content, runs npm scripts, or receives an App private
key or AWS credentials. No repository-wide write defaults or publishing PAT are
needed. This follows Radius's protected-main, trusted-workflow-maintainer model;
package access remains repository-scoped, not restricted globally to one workflow.

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
`v0.62.1-rc.2`. Tag pushes do not start the release producer. The trusted Radius
controller uses its existing sibling-repository Contents-write token to send
`repository_dispatch` with event type `aws-bicep-release` and this payload:

```json
{
  "version": "v0.62.1",
  "sourceCommit": "<frozen AWS source SHA>"
}
```

The dispatch endpoint does not return a run ID or guarantee idempotency. The
Radius controller must durably record request intent before its first POST and
reconcile subsequent attempts by discovery, never automatically redispatch after
an uncertain response. A run title is only a discovery hint, not source evidence.
Do not delete request intent or reconstruct missing generation to bypass an
ambiguous outcome.

The tag must resolve to the exact source SHA; Radius independently
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

For release snapshots, root `source.json` is
`{source, manifestDigest}`. `source` retains `repository`, tag `ref`, frozen
`commit`, workflow path, original `runId` and `generationAttempt`, and adds:

```json
{
  "controller": {
    "repository": "radius-project/bicep-types-aws",
    "ref": "refs/heads/main",
    "commit": "<original capture run's default-main SHA>"
  }
}
```

Publishing and original-generation runs must each authenticate as default-main
`repository_dispatch` runs of this workflow. Their controller SHAs are checked
against protected main history independently of the frozen tag/source SHA.
The full stable or dotted-RC tag must still resolve to the frozen source SHA.
The producer first accepts source ancestry on main, without requiring a release
branch. Only a successful comparison proving the source is not on main permits a
second check against `release/X.Y`, derived from that validated version.
Release-only backports must be ancestors of (or equal to) that channel's head;
wrong-channel or unrelated sources are rejected. Missing branches, API failures
and invalid comparisons fail closed. Every main and release branch response must
match the requested name exactly; redirects to renamed branches are rejected
before comparing their tips. Neither current nor original capture
controllers may use this release-branch fallback. The Radius collector separately
enforces the exact source branch selected by the approved release plan; the
producer accepts the allowed main/channel union, not the plan's branch choice.
Actions artifact run metadata binds to the controller, not the tagged source.
The collector verifies the raw artifact digest before parsing `source.json` and
binding its source, controller and original generation to API evidence. Recovery
may run a newer controller but must retain the original capture's controller.
Main snapshots are unchanged. The final public record below is also unchanged:

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

For a separate recovery run, an authorized caller sends another
`aws-bicep-release` repository dispatch with the **same version and sourceCommit**
and both numeric `generationRunId` and `generationRunAttempt` of the original
successful capture. These fields must be supplied together. The previous
publication must have failed; another active publication
must finish first. A new dispatch after a successful publishing run fails rather
than creating a second successful no-op. Rerunning that same successful run ID
is supported and emits a record for its new publishing attempt.
Later queued or pending dispatches waiting for the release concurrency lock do
not block the current capture; earlier history and completed runs still do.
Recovery skips schema refresh but allows the uploader after a successful capture
passthrough, unless the workflow was cancelled.

Missing, expired, ambiguous or mismatched original capture evidence is fatal.
Restore the original evidence through the approved recovery process; never
refresh AWS schemas to reconstruct a previously captured/published version.
The Radius controller reads artifacts with an AWS-only Actions/Contents/Metadata
read App token and persists its authenticated record before creating the Radius
tag. The AWS producer does not modify the Deployment Engine lock.

## Trust model and existing credentials

The publishing boundary follows the established Radius pattern: reviewed,
protected-main workflow code controls credential use, generation and publication
run in separate jobs, and a fresh publisher authenticates artifacts before
copying a fixed manifest to a fixed destination. Authorized workflow maintainers
remain trusted; this migration is not a redesign of repository-wide authority.

- PR build/test jobs receive no AWS secrets, publisher App keys or package-write
  permission. Main schema capture and the existing schema-update workflow run
  trusted protected-main code. Release candidate generation has no environment
  secrets or package-write authority; its controller and publisher come from
  default main, not the candidate.
- Reuse the existing organization/environment AWS credentials for the existing
  schema reads. The release schema job retains the `publish-bicep` environment's
  reviewer gate. Main capture uses the credentials already available to this
  repository. Secret availability at both scopes does not itself give PR code
  access, and no secret grants or approval bypasses are added here.
- `GITHUB_TOKEN` package access is repository-scoped in both AWS and Radius.
  Environment approval is not a global restriction on alternate workflow
  definitions. Protecting against an authorized maintainer changing those
  definitions would be a different trust model, not an AWS-only prerequisite.
- Existing tag-triggered legacy publication and its App credentials remain during
  staging. This change retains the tag-only caller and removes its main trigger; old tags
  still retain their workflow definitions. Preserve the coordinated writer drain
  and existing release behavior below rather than treating caller removal as
  credential revocation.

No new IAM attestation, credential broker, App, tag policy or environment change
is required solely to adopt this publishing pattern. This does not certify every
historical workflow or the credentials' complete permissions, or authorize a
merge, public visibility change or production dispatch.

## Coordinated handoff prerequisites

This is a cross-repository, non-atomic rollout, not a feature toggle:

Reuse the existing publisher App credentials and trusted-main pattern rather than
adding a general IAM attestation or operator-approval migration gate. This does
not claim the credentials' complete permissions were audited. Keep the actual
source/candidate isolation, Public availability checks and writer-drain sequence;
no new Azure federation or production credential grant in `radius-project` is needed.
Review readiness is not permission to merge: merging starts the publishing
workflow, and a public package permits its downstream private-copy request.

The companion implementation is
[azure-octo/radius-publisher#38](https://github.com/azure-octo/radius-publisher/pull/38)
merged as `4438d85adcf53f192217d53cd393352237433ca7`; the private copy capability
is deployed. Merge this caller after its source producer and before the first
public `edge` activation. Drain queued/running old workflow revisions,
including those using old concurrency keys; the new lock cannot stop them.

1. Prepare the GHCR staging producer using the existing schema credentials and validate
   stable/RC evidence and original-snapshot recovery. Before bootstrapping Public
   `edge`, merge the A2 caller described below after this producer. The private
   copy capability is already deployed; its legacy main-generation gate rejects
   requests once `edge` exists.
2. Prepare this AWS caller that requests a copy of main's exact GHCR digest to
   ACR `aws:latest` from the existing private publisher and removes the legacy
   schema-regenerating main trigger, retaining tagged publication until
   `radius-project/radius#13178` ships. Keep existing Azure authentication
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
   At the future R3 cutover, retire the tag-only caller and its version helper
   only after `radius-project/radius#13178` ships. The retained legacy tag writer must not generate the
   same new GHCR-contract release concurrently with R3's digest-pinned copy.
   Already-generated ACR full versions may contain different bytes; pause/drain
   unpublished legacy plans and old caller revisions instead of overwriting those
   immutable versions or assuming caller removal changes historical content.
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
