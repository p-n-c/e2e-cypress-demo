describe('Fixtures check', () => {
  context('Given I am on the home page', () => {
    beforeEach(() => {
      cy.intercept('/colours', { fixture: 'colours.json' }).as('getColours')
      cy.visit('/')
    })
    context('When I request all colours', () => {
      // The request is made implicitly when the page loads
      it('Then I receive all colours', () => {
        cy.wait('@getColours').then((interception) => {
          const colours = interception.response.body
          expect(colours).to.not.be.null
          expect(colours).to.have.lengthOf(4)
        })
      })
    })
  })
})
