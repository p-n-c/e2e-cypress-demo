import { terminalLog } from '../support/axe'

describe('Axe accessibility checks', () => {
  context('Given I am on the compliant test card page', () => {
    beforeEach(() => {
      cy.visit('https://examples.people-and-code.com/accessibility/test-card')
    })
    context('When the page has loaded', () => {
      it('Then there should be no detectable a11y violations on load', () => {
        cy.injectAxe()
        cy.checkA11y(null, null, terminalLog)
      })
    })
  })

  context('Given I am on the non-compliant test card page', () => {
    beforeEach(() => {
      cy.visit(
        'https://examples.people-and-code.com/accessibility/bad-test-card'
      )
    })
    context('When the page has loaded', () => {
      it('Then there should be no detectable a11y violations on load', () => {
        cy.visit(
          'https://examples.people-and-code.com/accessibility/bad-test-card'
        )
        cy.injectAxe()
        cy.checkA11y(null, null, terminalLog)
      })
    })
  })
})
