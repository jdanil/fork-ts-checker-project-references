# Fork TS Checker w/ Project References Testbed

Testbed to experiment with project references support in fork-ts-checker-webpack-plugin@5.

## Structure

- lerna monorepo using yarn workspaces.
- `app` package is configured to consume `lib` via typescript project reference

## Debugging

Some apparent issues:

- cold start does not build referenced projects
- compilation appears to occur but changes are not reflected

Steps to reproduce:

1. `git clone`
1. `yarn install`
1. `cd packages/app`
1. `yarn start`
   - fails. need to `tsc --build` first.
1. `yarn compile`
1. `yarn start`
   - runs successfully now.
1. open up localhost in the browser
1. edit `app/src/index.tsx`
   - changes are reflected in the browser with hot reloading
1. edit `lib/src/index/tsx`
   - terminal shows referenced project is recompiled
   - changes are not reflected in the browser, even after refresh
