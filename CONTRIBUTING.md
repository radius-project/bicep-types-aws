# Contributing

This Repository is part of the Radius project. For general information please see [Radius](https://github.com/radius-project/radius) repository.

## Table of contents

- [Building the repo](./docs/contributing/contributing-code/contributing-code-building/)
- [Understanding repo organization](./docs/contributing/contributing-code/contributing-code-organization/)
- [Understanding repo workflows](./docs/contributing/contributing-code/contributing-code-workflows/)
- [Release backports](#release-backports)

## Current status

We welcome small pull request contributions from anyone (docs improvements, bug fixes, minor features.) as long as they follow a few guidelines:

- For very minor changes like correcting a typo feel free to send a pull request. Otherwise ... 
- Please start by [choosing an existing issue](https://github.com/radius-project/radius/issues), or [opening an issue](https://github.com/radius-project/radius/issues/new/choose) to work on.
- The maintainers will respond to your issue, please work with the maintainers to ensure that what you're doing is in scope for the project before writing any code.
- If you have any doubt whether a contribution would be valuable, feel free to ask.

## Release backports

To backport a squash-merged `main` PR to an existing `release/X.Y` branch, apply the `backport release/X.Y` label (before or after merge). The shared `release-backport` workflow queues one reviewable PR per channel; review and rebase-merge backports, never squash them. It never merges automatically. Existing release branches need this thin caller to advance the queue on pushes; until bootstrapped, run `release-backport` manually from `main` with `channel: X.Y`. See the [shared release-backport guide](https://github.com/radius-project/.github/blob/main/eng/SYNC.md#release-backports) for setup, App permissions, and conflict recovery.

## Code of conduct

This project has adopted the [Contributor Covenant](http://contributor-covenant.org/).
For more information see [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md)
