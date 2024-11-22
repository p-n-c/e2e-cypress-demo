import { constants } from '../support/variables'

describe('Environment check', () => {
  it('clicking on the "Human-readable sitemap" should navigate to the sitemap page', () => {
    cy.visit(constants.SITE)
    cy.contains('Human-readable sitemap').click()
    cy.url().should('include', '/sitemap')
  })
})
