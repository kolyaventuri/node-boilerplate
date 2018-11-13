# Boilerplate
### My Personal Boilerplate Application

This is the setup for the bulk of my Node.JS web apps. Figured I would throw it together in one repo for easy access to me, as well as anyone else who wants to use it.

## Tech Stack
- [Node.JS](https://nodejs.org/en/)
- [Express](https://expressjs.com)
- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Webpack](https://webpack.js.org/)
  - Webpack dev / hot middleware
  - Webpack merge
- [Flow](https://flow.org/)
- [XO](https://github.com/xojs/xo) for linting
- [Jest](https://jestjs.io/) for testing
- [Nodemon](https://nodemon.io/) (ignores `src/` directory)

## Installation

- Clone down the repository with `git clone git@github.com/kolyaventuri/node-boilerplate.git ./{YOUR_PROJECT_DIR}`
- Add your github origin using `git remove origin master && git remote add origin {YOUR_GIT_ORIGIN}`
- Install dependenices with `npm i`
- Rename the project in `package.json`

## Running
- The app can be started with `npm start`
- It can be run in development mode (Nodemon for auto-reload) with `npm run dev`

## Running tests
- Jest can be run with `npm test` (note, this will also run `xo` for linting)

## Linting
- Linting is accomplished using xo, with `npm run lint`

## Notes
- A `beforeCommit` hook is defined in the `package.json` file that forces linter to pass to be able to commit
