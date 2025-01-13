# Understanding the bicep-types-aws workflows

This document describes the workflows that run during pull requests to the bicep-types-aws repository. 

## `build.yaml`

This workflow is used to build and test the AWS downloader and AWS generator to ensure that no errors or bugs are present when we download the AWS resource type schema from the CloudControl API. The tests run as part of this workflow can be found under `src/aws-type-generator/src/convert.test.ts`. 

## `approve-publish.yaml` and `publish-bicep.yaml`

These workflows are used hand-in-hand to publish the generated Bicep types to ACR. The `publish-bicep.yaml` workflow downloads and generates the latest AWS resource type schemas into Bicep types and handles uploading Bicep types to ACR. We have to be able to authenticate to Azure from Github pipeline runs in order to publish the types. This requires pull requests (opened from the main repository and from forks) to have access to authentication secrets when the publish workflow is running. 

We give pull requests access to run the publish workflow using the `approve-publish.yaml` workflow. This workflow must be approved by a maintainer or an approver of the repo to start and also kicks of a run of the `publish-bicep.yaml` workflow in a secure, trusted environment with access to the necessary secrets.