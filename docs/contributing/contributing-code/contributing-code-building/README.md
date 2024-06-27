# Building the repository

## Prerequisites

Please make sure to have the below prerequisites installed for building this repository
- Go 1.18
- node/npm 14+

## Instructions

Once you have the prerequisites installed, you can build the repository with below instructions:

1. Clone this repository
2. [Configure the AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html)
3. Run `go run main.go --output ../../artifacts/types --clean` in the `src/aws-type-downloader` folder
4. Run `npm run --prefix ./src/aws-type-generator start -- --input ../../artifacts/types --output ../../artifacts/bicep`

Note: `npm run --prefix` does not preserve the current working directory, so the extra `../..` is needed.

go run main.go --output /Users/shruthikumar/Documents/project_radius/bicep-types-aws/artifacts/types --clean