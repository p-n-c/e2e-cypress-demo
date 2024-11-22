const MAX_EMISSIONS = 1

const DOMAIN = 'localhost:1234'
const SITE = 'http://localhost:1234'

describe('Environment check spec', () => {
  it('clicking on the "Human-readable sitemap" link navigates to the sitemap page', () => {
    cy.visit(SITE)
    cy.contains('Human-readable sitemap').click()
    cy.url().should('include', '/sitemap')
  })
})

describe('Network emissions check', () => {
  it('should calculate emissions from network requests', () => {
    cy.collectNetworkResponses(SITE)
      .calculateEmissions(DOMAIN)
      .then((calculation) => {
        expect(calculation.emissions).to.be.lte(MAX_EMISSIONS)
        expect(calculation.greenHosting).to.be.false
      })
  })
})
