# SolsticeTest

## Running the Site
### Prerequisites
- [Yarn](https://classic.yarnpkg.com/en/docs/install)
- [Node](https://nodejs.org/en/)

### Running
- `yarn install`
- `yarn start`
- Navigate to `http://localhost:4200/`
- Enjoy

Alternatively, `npm install` and `npm run start` _should_ also work if you don't want to use yarn. 

## Choices
- I used [Nx](https://nx.dev), a set of dev tools for building monorepos, as the starting point for building this
    - It is massive overkill for this project, but I'd been reading about it and wanted to play with it. I took this opportunity to do so.
    - I structured the build roughly as if it was going to be a large monorepo so I could try more of Nx's features
    - My Review: It's pretty great. A much nicer solution for monorepos than Lerna. Solid CLI and generator.  
- I decided against spending the time to deploy this somewhere. You already have DevOps capability, so I decided proving I could figure out deploying this to AWS was less important than the other parts

## Layout
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


## Next Steps/Todos
There's a million things left to do for this to be production quality, but the biggest IMO are:
- Error Handling
    - There's none. There's no notice if API requests fail, no handling of 404s etc
- Tests
    - I wrote very few unit tests to save time. I wrote no e2e tests but Nx sets the framework up for you in React, so that's why it's there.
    - Also need to set up a CI/CD flow
- Design
    - It's... not great. I am not a designer.

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
