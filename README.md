# Summary

This repo contains the tooling for Bicep support for AWS types. The tools in this repository can be used to:

- List AWS's supported resource types using their native schema format
- Convert AWS's native schema format to Bicep's schema format

## Contents

- `/artifacts/types`: contains a dump of AWS's types
- `/artifacts/bicep`: contains the Bicep schema output to be used by the compiler
- `/src/aws-type-downloader`: updates the dump of AWS's types in `/artifacts/types`
- `/src/aws-type-generator`: generates Bicep schema from `/artifacts/types` and updates `/artifacts/bicep`

We **check-in** the generated assets so we can easily visualize the differences when changes are made. Also, this means it's possible to iterate on `aws-type-generator` without an AWS account.

## Prerequisites

- Go 1.18
- node/npm 14+

## Instructions

1. Clone this repository
2. [Configure the AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html)
3. Run `go run ./src/aws-type-downloader/main.go --output ./artifacts/types --clean`
4. Run `npm run --prefix ./src/aws-type-generator start -- --input ../../artifacts/types --output ../../artifacts/bicep`

Note: `npm run --prefix` does not preserve the current working directory, so the extra `../..` is needed.