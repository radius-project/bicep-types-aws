# Understanding the bicep-types-aws workflows

## Build and schema updates

`build.yaml` builds the Go downloader and TypeScript generator and runs the existing
generator tests. A separate read-only job exercises the publishing helper and
native Bicep/ORAS fixtures using checked-in schemas/output and a local registry.
It receives no AWS, Azure, App-key or package-write credentials.

`generate-types.yaml` refreshes the checked-in schemas and opens a generation PR.
Its secret-bearing job runs only on canonical protected current main. It uses the
existing AWS schema identity and the types-bot App; neither is a GHCR credential.
The App's maximum grants/installations and effective branch review/bypass policy
must be reviewed independently of the smaller token scopes requested by the job.

## Staged publishing ownership

| Workflow | Source | Writes |
| --- | --- | --- |
| `publish-main-bicep.yaml` | Protected current main, push or manual dispatch | `ghcr.io/radius-project/bicep-types-aws:edge` |
| `publish-release-bicep.yaml` | Trusted main-history `vX.Y.Z` or `vX.Y.Z-rc.N` tag | GHCR full version without `v` |
| `publish-bicep.yaml` | Existing canonical main/tag publication | Dispatches the legacy external ACR publisher |

The GHCR workflows are a staging layer. The old dispatcher is deliberately still
active: ACR development `aws:latest`, stable `aws:X.Y`, and full prerelease tags
remain owned by `azure-octo/radius-publisher`. No second ACR writer is introduced.
Its independent AWS schema refresh can differ from GHCR's capture; staging does
not promise registry digest parity. ACR development `latest` maps to GHCR `edge`,
not GHCR stable `latest`.

The new AWS release producer never writes stable aliases or compatibility tags.
The coordinated Radius finalizer will own GHCR stable `latest`/`X.Y` and tagged
ACR mirrors after approval. The subsequent AWS handoff must establish a same-digest
GHCR `edge` to ACR `aws:latest` copy in the trusted-main uploader before retiring
the old main publisher.

## Capture and credential boundary

Each new publication captures the actual schema inputs, generated types and native
OCI layout once. The downloader needs CloudFormation `ListTypes` and
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

Bicep `0.46.1` and ORAS `1.3.4` are checksum-pinned. Packaging uses an explicit
temporary `ociEnabled: true` configuration. Generated resource identities remain
`@default`; index settings retain legacy versions (`latest`, stable `X.Y`, full
RC). OCI full-version tags and annotations are separate from these type settings.

## Bootstrap and public availability

Start with an authorized current-main publication. Its first write can create
`ghcr.io/radius-project/bicep-types-aws` as a private package; it does not require
the package to exist or be public before upload. A private-upload failure retains
the digest and receipt. A package administrator must then use Package settings ->
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
`schemas/` and `generated/` directories. A successful publishing attempt uploads
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

1. Deploy the GHCR staging producer, verify the schema identity, bootstrap Public
   `edge`, and validate stable/RC evidence and original-snapshot recovery.
2. Prepare the AWS follow-up that mirrors main's exact GHCR digest to ACR
   `aws:latest` and removes the legacy production dispatcher. Reuse the existing
   `BICEPTYPES_CLIENT_ID`, `BICEPTYPES_TENANT_ID` and
   `BICEPTYPES_SUBSCRIPTION_ID` only after verifying their values, ACR scope and
   federation for the new main uploader's actual OIDC claims. Existing trust for
   the private publisher does not authorize this repository automatically.
3. Prepare a separately authorized change in
   `azure-octo/radius-publisher/.github/workflows/publish-bicep-types-aws.yml`
   that rejects production `aws` requests, including the missing-target default,
   before checkout/credentials, while preserving explicit `test/aws` and all
   unrelated workflows. Old tags retain old dispatch YAML, so deleting only the
   current-main caller is insufficient.
4. Confirm Radius's existing release App can request AWS-only evidence reads.
   Grant the Radius repository explicit Write under the AWS package's Manage
   Actions access only after its candidate-writer boundary is ready. This is
   separate from the App's artifact-read access.
5. Pause new release creation, finish unpublished legacy release plans, establish
   an AWS main-publication maintenance window, and drain queued/running old
   production Bicep writers. A new private guard does not stop already-running
   jobs. Preserve reconciliation of already-published historical releases.
6. Apply the private guard and AWS main-mirror/dispatch handoff, verify main
   digest parity, then activate the Radius release finalizer. Rehearse paired RC
   and approved stable publication, aliases, partial recovery and ACR compatibility
   before resuming releases. A deliberate publication gap is safer than competing
   writers; existing ACR reads remain available.

No live identity/settings change, private guard, main mirror or cutover is
performed merely by adding the staging workflows. Keep ACR resources and supported
artifacts; retiring mirror writes requires the later agreed policy.
