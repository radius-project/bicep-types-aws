# Understanding the bicep-types-aws workflows

## Build and schema updates

`build.yaml` builds the Go downloader and TypeScript generator and runs the existing
generator tests. A separate read-only job exercises the publishing helper and
native Bicep/ORAS fixtures using checked-in schemas/output and a local registry.
It receives no AWS, Azure, App-key or package-write credentials.

It runs on pull requests into `main` and `release/*`. Before checking out the
`radius` submodule, both jobs run `.github/scripts/check-radius-pin.sh`, which fails
with a clear message unless the commit's `.gitmodules` maps `radius` to
`https://github.com/radius-project/radius` and the submodule pins a commit in that
repository. Its tests run with `node --test .github/scripts/check-radius-pin.test.mjs`.

The generator tests are in `src/aws-type-generator/src/*.test.ts`, and the downloader tests, including the breaking change check, are in `src/aws-type-downloader`. The build also compiles the templates in `src/aws-type-generator/bicep-test` with the Bicep CLI against types generated from the test fixtures. Run it locally with `npm run build && npm run test:bicep` in `src/aws-type-generator`, with `bicep` on your `PATH`. Last, `npm run test:reports` changes the Radius test fixtures and checks that the breaking-change report and the reference docs show the changes.

## `generate-types.yaml`

This workflow downloads the latest AWS resource type schemas, regenerates the Bicep types and the reference documentation, and opens a pull request with the changes. It runs every Monday and can also be started manually from `main`; runs started from other branches are skipped. Every run uses the `generate-aws-types` branch, so if the pull request is still open, it is updated instead of a new one being opened. If nothing changed, no pull request is opened. AWS moves the last updated time of a type when it redeploys the type, even if the schema did not change, so the downloader only rewrites a type's file when its schema changed.

The downloader keeps the types that AWS Cloud Control can create, including create-and-delete-only types that it can't update, and the read-only types that AWS creates on its own. A read-only type's schema has a read handler but no create handler, and a create-and-delete-only type's schema has a create handler but no update handler. Other types that Cloud Control can't create, such as legacy and deprecated types, are left out.

The pull request body lists the changes that can break existing templates: removed resource types, types that became read-only, types that can no longer be updated, removed properties, properties that became required, and properties whose type changed. This report and the reference documentation read the effective types, AWS's types with the schemas and extra properties Radius owns applied, so they cover Radius's changes too. The report compares them with the effective types from the previous AWS types and the Radius commit in `artifacts/radius-commit`. If that file has no commit, the workflow fails, because the report would hide Radius's changes. It also lists the new read-only and create-and-delete-only types, so a reviewer can check that each one belongs in the extension. The lists are cut short to fit in the pull request body. The job summary of the workflow run has longer lists, which are cut short only past the job summary limits set in `generate-types.yaml`. To run the checks locally, copy `artifacts/types` to another directory, extract the Radius commit in `artifacts/radius-commit` to another directory, run the downloader, and then run:

```bash
cd src/aws-type-generator
npm run start -- --input ../../artifacts/types --output ../../artifacts/bicep \
  --previous-input <copy of the previous types> --previous-radius <previous Radius checkout> \
  --effective-output <effective types> --previous-effective-output <previous effective types>
cd ../aws-type-downloader
go run . breaking-changes --old <previous effective types> --new <effective types>
go run . added-types --old <copy of the previous types> --new ../../artifacts/types
python ../../.github/scripts/generate-reference-docs.py <effective types> ../../docs/reference/supported-resources.md
```

Use a new or empty directory for each effective types directory. The generator never deletes or replaces a file there, so it fails if the directory already has JSON files, such as from an earlier run.

The generator also applies the schemas and extra properties Radius owns, from the commit the `radius` submodule pins, and the pull request body names that commit. If AWS publishes a type or a property with the same name as one Radius provides, the generator keeps Radius's type and AWS's property, and the workflow opens an issue titled "AWS types clash with Radius types" instead of failing. A run that finds the same clashes as any issue with that title, open or closed, changes nothing. A run that finds different clashes adds them as a comment on the open issue, or opens a new one if none is open. A clash is reported when either side is new, compared with what the checked-in types were generated from: `artifacts/types` on `main`, and the Radius commit recorded in `artifacts/radius-commit`, which the workflow updates on every run. A type clash is new if either the AWS type or Radius's hand-written schema is new. A property clash is new if either the type's property or Radius's extra property is new, where the type's property comes from AWS's schema or Radius's, whichever the extension used. A clash both sides already had isn't reported again, so a clash a person reviewed and kept stays quiet. Close the issue after the pull request that refreshes the types merges.

Merging the pull request publishes the updated types through `publish-main-bicep.yaml`.

The workflow needs these repository secrets: `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` to read the AWS CloudFormation registry, and `RADIUS_TYPES_BOT_CLIENT_ID` and `RADIUS_TYPES_BOT_PRIVATE_KEY` for the GitHub App that opens the pull request. The app needs read and write access to contents and pull requests on this repository. The issue is opened with the workflow's own token.
Its secret-bearing job runs only on canonical protected current main. It uses the
existing AWS schema identity and the types-bot App; neither is a GHCR credential.
The workflow reuses the existing App credentials and repository-scoped token
permissions; this migration does not add App grants or bypass branch protection.

## Publishing ownership after final ACR caller retirement

| Workflow | Source | Writes |
| --- | --- | --- |
| `publish-main-bicep.yaml` | Protected current main, push or manual dispatch | GHCR `bicep-types-aws:edge` only |
| `publish-release-bicep.yaml` | Default-main `repository_dispatch`, selecting a frozen stable/RC source | GHCR full stable/RC version without `v` ONLY |
| Coordinated Radius release finalizer ([radius-project/radius#13178](https://github.com/radius-project/radius/pull/13178)) | Frozen tagged release after the coordinated cutover | GHCR stable `latest`/`X.Y`; its production ACR calls must be retired separately |

This is the final AWS caller-removal stage, not the initial GHCR activation.
The main workflow no longer dispatches a private copy or reads back ACR.
The legacy tag-only `publish-bicep.yaml`, its `get_release_version.py` helper,
and the now-unused AWS-owned mirror and correlation monitor are removed.
Do not land this retirement until the GHCR versioned publishers, Radius consumer
defaults and coordinated release path are working and old writers have drained;
see the last-stage prerequisites below.

The AWS release producer still never writes stable aliases or ACR compatibility
tags. Its default-main controller, frozen source, immutable full-version rules,
artifact authentication and release-record ABI are unchanged by caller retirement.
Existing ACR artifacts remain readable; no registry content is deleted or copied
en masse. Historical development ACR `aws:latest` corresponded to GHCR `edge`,
not GHCR stable `latest`; retirement makes no continuing parity claim.

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
capture, checks `schemas/radius-commit` against the frozen gitlink for pin-aware
sources, and imports only the data-only OCI graph. Before its first registry
write, it wraps the exact verified types layer as a local Bicep extension and
compiles a controller-owned template. For a pinned source, the template reads
`AWS.MSK/ServerlessCluster@default`'s `BootstrapBrokerStringSaslIam`. Missing
type warnings fail the check just like errors. A historical release whose Git
history **never** contained `radius` instead compiles an S3 bucket template;
deleting or replacing the gitlink does not qualify. The same check runs on
recovered snapshots, without regenerating them. The frozen source can never
choose commands, helpers or destinations in a privileged job.

The fresh uploader uses this repository's `GITHUB_TOKEN` with `packages: write`.
It authenticates Actions evidence and copies a validated data-only Bicep OCI graph.
It never executes generated content, runs npm scripts, or receives an App private
key or AWS credentials. No repository-wide write defaults or publishing PAT are
needed. This follows Radius's protected-main, trusted-workflow-maintainer model;
package access remains repository-scoped, not restricted globally to one workflow.

Neither publishing workflow receives the private publisher App key or dispatches
to `azure-octo/radius-publisher`. There is no Azure login, production ACR write,
`id-token: write`, or new source-org OIDC trust. Keep existing App secrets used
elsewhere; caller removal does not revoke credentials or change their grants.

Bicep `0.46.1` and ORAS `1.3.4` are checksum-pinned. Packaging uses an explicit
temporary `ociEnabled: true` configuration. Generated resource identities remain
`@default`; index settings retain legacy versions (`latest`, stable `X.Y`, full
RC). OCI full-version tags and annotations are separate from these type settings.

## Bootstrap and public availability

Start with an authorized current-main publication. Its first write can create
`ghcr.io/radius-project/bicep-types-aws` as a private package; it does not require
the package to exist or be public before upload. The uploader retains its digest
and receipt, then checks Public visibility and anonymous access **before** marking
the publication successful. A private-upload failure does not regenerate.
A package administrator must then use Package settings ->
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

`aws-bicep-edge-<run_id>-<attempt>/receipt.json` records GHCR progress:
`prepared`, `partial`, `uploaded` (possibly awaiting Public), `superseded`, or
`published`. Only verification of the uploaded digest, Public package visibility
and anonymous manifest bytes sets `published`. It means GHCR publication only;
there is no pending copy request or assertion of ACR success. Errors and timeouts
fail visibly and retain receipts. The raw snapshot and edge receipt still have
90-day retention. Retry uses the original snapshot/evidence, never refreshed
schema output.

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

The tag must resolve to the exact source SHA. For a plan with `radiusPin`, the
Radius controller must use the landed commit from the verified receipt for
dispatch and collection, not the pre-pin base in `siblingRepositories[].sourceCommit`.
Plans without `radiusPin` use the frozen sibling `sourceCommit` directly.
Full-version tags follow a
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
- Historical tags and release branches retain old workflow definitions.
  Removing callers on main does not disable their reruns. Preserve the coordinated
  writer drain below rather than treating caller removal as credential revocation.

No new IAM attestation, credential broker, App, tag policy or environment change
is required solely to adopt this publishing pattern. This does not certify every
historical workflow or the credentials' complete permissions, or authorize a
merge, public visibility change or production dispatch.

## Last-stage retirement prerequisites

This is a cross-repository, non-atomic rollout, not a feature toggle:

1. Make GHCR versioned publishing, Radius consumer defaults and the coordinated
   Radius GHCR release path work before removing the legacy tag caller. Validate
   paired stable/RC publication, anonymous restore, aliases, original-snapshot
   recovery and historical reconciliation. Land the version-matched source
   ancestry fix [#385](https://github.com/radius-project/bicep-types-aws/pull/385)
   before this retirement; keep controller ancestry main-only and source/API
   failures closed. This retirement does not replace that fix.
2. Pause new releases, finish unpublished legacy plans, enter the AWS main
   maintenance window and drain queued/running old source **and receiver** jobs,
   including older workflow revisions and concurrency keys. Already-generated
   ACR full versions may differ from GHCR; do not overwrite immutable versions.
   Existing published-state readers and historical reconciliation stay supported.
3. Remove the AWS callers in this stage and the Radius production ACR caller
   dependencies in its separate final stage, after its GHCR consumer-default
   layer. Preserve Test ACR and unrelated images, recipes and workflows.
4. Stop the private production receiver **last**, only after both repositories'
   callers and pending work are drained. Its separate retirement must reject
   production requests visibly while Test remains functional. Old tags and
   release branches still contain legacy callers; historical reruns after the
   stop must fail honestly, not return a success-shaped fallback.

Keep existing ACR resources, supported artifacts and read access. Do not copy all
old tags, delete artifacts, revoke existing App secrets used elsewhere, or add a
new global IAM policy. No changes to private/shared Test code are part of this
AWS retirement. Review readiness is not permission to merge or activate it;
merging still starts main's GHCR publishing workflow.

Local fixtures do not authorize or perform live GHCR/ACR/AWS calls, identity or
settings writes, release dispatches, merges, private publisher edits, or upstream
Radius changes. Keep ACR resources and supported artifacts; no deletion is part of
this handoff. Passing local checks and review readiness do not activate publishing.
