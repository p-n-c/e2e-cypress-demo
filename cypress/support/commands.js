import { node } from '@danhartley/emissions'
import '@cypress-audit/lighthouse/commands'

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
