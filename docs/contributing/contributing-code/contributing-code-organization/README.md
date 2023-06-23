# Understanding Bicep-Types-AWS repo code organization

This document describes the high-level organization of code for the Radius repository. The goal of this document is to capture most of the important details, not every single thing will be described here.

In general you should ask for guidance before creating a new top-level folder in the repo or creating a new folder in `pkg/`. There is usually a better place to put something.


## Root Folders

| Folder                      | Description                                                                           |
| --------------------------- | --------------------------------------------------------------------------------------|
| `/artifacts/types`          | contains a dump of AWS's types                                                        |
| `/artifacts/bicep`          | contains the Bicep schema output to be used by the compiler                           |
| `/src/aws-type-downloader`  | updates the dump of AWS's types in `/artifacts/types`                                 |
| `/src/aws-type-generator`   | generates Bicep schema from `/artifacts/types` and updates `/artifacts/bicep`         |


We **check-in** the generated assets so we can easily visualize the differences when changes are made. Also, this means it's possible to iterate on `aws-type-generator` without an AWS account.
