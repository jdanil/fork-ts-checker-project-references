# Fork TS Checker w/ Project References Testbed

Testbed to experiment with project references support in fork-ts-checker-webpack-plugin@5.

## Structure

- lerna monorepo using yarn workspaces.
- `app` package is configured to consume `lib` via typescript project reference

## Debugging

Some apparent issues:

- cannot import module with namespace syntax.

Steps to reproduce:

1. `git clone`
1. `yarn install`
1. `cd packages/app`
1. `yarn start`
   - fails. cannot import module with namespace syntax.

Mitigation:

Without updating the plugin, we can work around the issue by importing via:

- direct import
  - `import { ForkTsCheckerWebpackPlugin } from "fork-ts-checker-webpack-plugin/lib/ForkTsCheckerWebpackPlugin.js";`
- enabling `esModuleInterop` and using a default import
  - `import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin`
- require without type definitions
  - `const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')`
