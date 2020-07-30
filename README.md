# SolsticeTest

## Choices
- I used [Nx](https://nx.dev), a set of dev tools for building monorepos, as the starting point for building this
    - It is massive overkill for this project, but I'd been reading about it and wanted to play with it. I took this opportunity to do so.
    - I structured the build roughly as if it was going to be a large monorepo so I could try more of Nx's features
    - My Review: It's pretty great. A much nicer solution for monorepos than Lerna. Solid CLI and generator.  
- There are two apps
    - `solstice`
        - a Typescript/React frontend
    - `api`
        - a Typescript/Express backend
- There are two libraries
    - `api-interfaces`
        - TS interfaces shared front and back end
    - `utils`
        - general lib for shared/general React components and utility functions
- I wrote very few unit tests to save time. I wrote no e2e tests but Nx sets the framework up for you in React, so that's why it's there.
- The app is not pretty, I apologize :(

## Development server

Run `nx serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `nx g @nrwl/react:component my-component --project=my-app` to generate a new component.

## Build

Run `nx build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `nx test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.
