describe('Selector options', () => {
  context('Given I am on the home page', () => {
    beforeEach(() => {
      cy.visit('/').as('visit')
    })
    context('When I click on the "Display message" button', () => {
      beforeEach(() => {
        cy.contains('Display message').as('btn')
        cy.get('@btn').click()
      })
      it('Then the message, "Hello!", should be displayed', () => {
        cy.get('@btn').should('contain', 'Display message')
        cy.contains('Hello!').should('be.visible')
      })
    })
  })
})
