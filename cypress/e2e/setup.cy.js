describe('Set up check', () => {
  context('Given I am on the home page', () => {
    beforeEach(() => {
      cy.visit('/')
    })
    context('When I click on the "Human-readable sitemap"', () => {
      beforeEach(() => {
        cy.contains('Human-readable sitemap').click()
      })
      it('Then I should navigate to the sitemap page', () => {
        cy.url().should('include', '/sitemap')
      })
    })
  })
})
