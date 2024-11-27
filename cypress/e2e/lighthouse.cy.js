import { thresholds } from '../support/lighthouse.js'

describe('Lighthouse audit', () => {
  context('Given I am on the home page', () => {
    beforeEach(() => {
      cy.visit('https://p-n-c.github.io/website')
    })
    it('Then it should pass the Lighthouse audit', () => {
      cy.lighthouse(thresholds)
    })
  })
})
