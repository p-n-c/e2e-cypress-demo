import { node } from '@danhartley/emissions'
/* eslint-disable no-undef */
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('collectNetworkResponses', (url) => {
  const networkResponses = []

  cy.intercept('*', (req) => {
    req.on('response', (res) => {
      const responseSize = res.body
        ? Buffer.byteLength(JSON.stringify(res.body))
        : 0

      networkResponses.push({
        url: req.url,
        method: req.method,
        status: res.statusCode,
        size: responseSize,
        isCached: res.statusCode === 304,
        contentType: res.headers['content-type'] || 'unknown',
      })
    })
  })

  cy.visit(url)
  cy.wrap(networkResponses)
})

Cypress.Commands.add(
  'calculateEmissions',
  { prevSubject: true },
  (responses, domain) => {
    const totalBytes = responses.reduce(
      (sum, response) => sum + response.size,
      0
    )

    return cy.wrap(
      node.getEmissions({
        bytes: totalBytes,
        model: '1byte',
        hostingOptions: { domain },
      })
    )
  }
)
