import { terminalLog } from '../support/axe'

describe('Axe check', () => {
  beforeEach(() => {
    cy.visit('http://localhost:57201/accessibility/bad-test-card.html')
    // cy.visit('https://p-n-c.github.io/website/accessibility/test-card.html')
    cy.injectAxe()
  })

  it('should have no detectable a11y violations on load', () => {
    // Test the page at initial load
    // cy.checkA11y()
    // cy.checkA11y(null, {
    //   includedImpacts: ['moderate'], // critical, serious
    // })
    cy.checkA11y(null, null, terminalLog)
  })
})
