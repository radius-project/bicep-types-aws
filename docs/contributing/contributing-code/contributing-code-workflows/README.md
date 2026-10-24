# Understanding the bicep-types-aws workflows

This document describes the workflows that run during pull requests to the bicep-types-aws repository. 

## `build.yaml`

This workflow is used to build and test the AWS downloader and AWS generator to ensure that no errors or bugs are present when we download the AWS resource type schema from the CloudControl API. The generator tests are in `src/aws-type-generator/src/convert.test.ts`, and the downloader tests, including the breaking change check, are in `src/aws-type-downloader`.

## `generate-types.yaml`

This workflow downloads the latest AWS resource type schemas, regenerates the Bicep types and the reference documentation, and opens a pull request with the changes. It runs every Monday and can also be started manually from `main`; runs started from other branches are skipped. Every run uses the `generate-aws-types` branch, so if the pull request is still open, it is updated instead of a new one being opened. If nothing changed, no pull request is opened.

The pull request body lists the changes that can break existing templates: removed resource types, removed properties, properties that became required, and properties whose type changed. The list is cut short to fit in the pull request body, and the job summary of the workflow run has the full list. To run the check locally, copy `artifacts/types` to another directory, run the downloader, and then run:

```bash
cd src/aws-type-downloader
go run . breaking-changes --old <copy of the previous types> --new ../../artifacts/types
```

Merging the pull request publishes the updated types through `publish-bicep.yaml`.

The workflow needs these repository secrets: `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` to read the AWS CloudFormation registry, and `RADIUS_TYPES_BOT_CLIENT_ID` and `RADIUS_TYPES_BOT_PRIVATE_KEY` for the GitHub App that opens the pull request. The app needs read and write access to contents and pull requests on this repository.

## `approve-publish.yaml` and `publish-bicep.yaml`

These workflows are used hand-in-hand to publish the generated Bicep types to ACR. The `publish-bicep.yaml` workflow downloads and generates the latest AWS resource type schemas into Bicep types and handles uploading Bicep types to ACR. We have to be able to authenticate to Azure from Github pipeline runs in order to publish the types. This requires pull requests (opened from the main repository and from forks) to have access to authentication secrets when the publish workflow is running. 

We give pull requests access to run the publish workflow using the `approve-publish.yaml` workflow. This workflow must be approved by a maintainer or an approver of the repo to start and also kicks of a run of the `publish-bicep.yaml` workflow in a secure, trusted environment with access to the necessary secrets.