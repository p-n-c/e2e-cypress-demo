describe('Set up check', () => {
  context('Given I am on the home page', () => {
    beforeEach(() => {
      cy.visit('/')
    })
    it('When I click on the "Human-readable sitemap" I should navigate to the sitemap page', () => {
      cy.contains('Human-readable sitemap').click()
      cy.url().should('include', '/sitemap')
    })
  })
})
