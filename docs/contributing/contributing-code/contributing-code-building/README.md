# Building the repository

## Prerequisites

Please make sure to have the below prerequisites installed for building this repository

- Go matching `src/aws-type-downloader/go.mod`
- Node.js 20.19+ (or another version supported by the locked dependencies) and npm

## Instructions

Once you have the prerequisites installed, you can build the repository with below instructions:

1. Clone this repository
2. [Configure the AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html)
3. Run `go run main.go --output ../../artifacts/types --clean` in the `src/aws-type-downloader` folder
4. Run `npm run --prefix ./src/aws-type-generator start -- --input ../../artifacts/types --output ../../artifacts/bicep` in the root folder

Note: `npm run --prefix` does not preserve the current working directory, so the extra `../..` is needed.

## Offline generation and publishing fixtures

Initialize and build the pinned type library before building the generator:

```bash
git submodule update --init --recursive
npm --prefix bicep-types/src/bicep-types ci
npm --prefix bicep-types/src/bicep-types run build
npm --prefix src/aws-type-generator ci
npm --prefix src/aws-type-generator run build
npm --prefix src/aws-type-generator test -- --runInBand
```

To generate from checked-in schemas without AWS access, run the generator with
`--input` pointing to `artifacts/types` and `--output` pointing to a temporary
directory. `--releaseVersion` controls extension index metadata, not resource
API versions (`@default`) or the OCI publication tag.

The publishing helper tests require no dependencies beyond Node:

```bash
node --test .github/scripts/publish-bicep.test.mjs
```

For native fixtures, install checksum-pinned tools into a user-owned directory,
add it to `PATH`, and run with Docker available:

```bash
bash .github/scripts/install-bicep-tools.sh /absolute/path/to/tools
PATH="/absolute/path/to/tools:$PATH" bash .github/scripts/test-publish-bicep.sh
```

These fixtures use checked-in generated types and raw schemas; they test native
packaging, full-version publishing/retry/conflict and a representative AWS compile.
They do not call AWS, GHCR or ACR, and do not establish live credential readiness.
The local HTTP registry is disposable and removed when the fixture exits.
OCI-enabled publication to literal TLS `localhost` can select HTTP; use a trusted
non-loopback registry alias when testing TLS. This does not imply that all Bicep
restore operations require that workaround.