import { terminalLog } from '../support/axe'

describe('Axe check', () => {
  it('should have no detectable a11y violations on load', () => {
    cy.visit('https://p-n-c.github.io/website/accessibility/test-card.html')
    cy.injectAxe()
    cy.checkA11y(null, null, terminalLog)
  })

  it('should have lots of detectable a11y violations on load', () => {
    cy.visit('https://p-n-c.github.io/website/accessibility/bad-test-card.html')
    cy.injectAxe()
    cy.checkA11y(null, null, terminalLog)
  })
})
