# Understanding bicep-types-aws repo code organization

This document describes the high-level organization of code for the bicep-types-aws repository. The goal of this document is to capture most of the important details, not every single thing will be described here.

In general you should ask for guidance before creating a new top-level folder in the repo or creating a new folder in `pkg/`. There is usually a better place to put something.


## Root Folders

| Folder                      | Description                                                                           |
| --------------------------- | --------------------------------------------------------------------------------------|
| `/artifacts/types`          | contains a dump of AWS's types                                                        |
| `/artifacts/bicep`          | contains the Bicep schema output to be used by the compiler                           |
| `/src/aws-type-downloader`  | updates the dump of AWS's types in `/artifacts/types`                                 |
| `/src/aws-type-generator`   | generates Bicep schema from `/artifacts/types` and `/radius`, and updates `/artifacts/bicep` |
| `/radius`                   | the Radius repository, as a git submodule pinned to one commit                        |


We **check-in** the generated assets so we can easily visualize the differences when changes are made. Also, this means it's possible to iterate on `aws-type-generator` without an AWS account.

## Schemas from Radius

Radius serves some AWS types with its own handlers, and some types return extra read-only properties. The generator reads these from the `radius` submodule, so the Bicep types match what Radius serves. It never changes `/artifacts/types`, which stays a copy of AWS's types.

| Path in Radius                                   | Generator flag                 | What the generator does                                                                                                                                     |
| ------------------------------------------------ | ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `pkg/aws/schemas/native/`                        | `--radius-native-schemas`      | Each schema replaces AWS's schema for the same type, or adds the type                                                                                       |
| `pkg/aws/schemas/handwritten/`                   | `--radius-handwritten-schemas` | Adds each type. If AWS also publishes the type, keeps the Radius schema and reports a clash                                                                |
| `pkg/aws/extraproperties/extra_properties.json`  | `--radius-extra-properties`    | Adds each type's extra properties as read-only. If the type already has a property with the same name, keeps that property, skips the extra one, and reports a clash |

The generator reads every `.json` file under the schema directories, skips `*.metadata.json` files, and keys each schema on its `typeName`, not its file name. A schema directory that doesn't exist has no schemas. Paths are relative to `--radius`, which defaults to `../../radius`. `--clash-report <file>` writes the clashes as Markdown. With both `--previous-input <dir>` (earlier AWS types) and `--previous-radius <dir>` (an earlier Radius checkout), it writes only clashes where either side is new.

The extension now depends on a Radius version, so the submodule pins a Radius commit:

- On `main`, the submodule pins a Radius `main` commit. Dependabot moves it forward.
- On a release branch, the submodule must pin the Radius commit the release ships, `source.productCommit` in Radius's `.github/release-plans/vX.Y.Z.yaml`. Set it with `git -C radius fetch --depth 1 origin <commit> && git -C radius checkout <commit>`, then commit the `radius` change.

`artifacts/radius-commit` is not the pin. It records the Radius commit the checked-in types were generated from, so the weekly refresh can tell which Radius schemas are new.

To read the pinned commit at a ref: `gh api repos/radius-project/bicep-types-aws/contents/radius?ref=<ref> --jq .sha`.
