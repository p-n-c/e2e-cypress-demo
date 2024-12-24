import { thresholds } from '../support/lighthouse.js'

describe('Lighthouse audit', () => {
  context('Given I am on the home page', () => {
    beforeEach(() => {
      cy.visit('https://people-and-code.com/')
    })
    context('When the page has loaded', () => {
      it('Then it should pass the Lighthouse audit', () => {
        cy.lighthouse(thresholds)
      })
    })
  })
})
