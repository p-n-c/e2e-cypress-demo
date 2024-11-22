# E2E client demo

E2E client demo for workshop.

## Project template

Node.js is a prerequisite.

This project was set up using a People and Code template. Included in this project are:

- prettier
- eslint
- stylelint
- parcel

## Cypress

We installed Cypress as a dev dependency.

`npm install cypress --save-dev`

or

`npm i -D cypress`

And we added a script:

`"cy:open": "cypress open"`

To run Cypress run `npm run cy:open` in the terminal.

## Cypress ESLint

We added a Cypress [eslint plugin](https://github.com/cypress-io/eslint-plugin-cypress):

`npm i -D eslint-plugin-cypress`

And updated the `eslint.config.js` file:

```node
pluginCypress.configs.recommended,
pluginCypress.configs.globals,
```

### POC Test

We ran Cypress to verify it was correctly installed:

`cypress open`

And then created a [configuration](https://docs.cypress.io/app/get-started/open-the-app) for e2e testing.

We selected Chrome as our browser.

#### First spec

Once we were set up and ready to start, we added an initial test following instructions from [Cypress](https://docs.cypress.io/app/end-to-end-testing/writing-your-first-end-to-end-test):

- Create new spec
- Accept default path and create
- Run the spec

This worked as expected. We then changed the site to the default URL used when the current project is run.

- Run `npm run start` in the terminal
- Change the site to visit in the spec to <http://localhost:1234> (or the allocated port if 1234 is in use)
- Re-run the spec in the Cypress test runner

## Intellisense

To add intellisense, we created a `jsconfig.json` file and added:

```node
{
  "include": ["./node_modules/cypress", "cypress/**/*.js"]
}
```
