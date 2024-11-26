describe('Fixtures check', () => {
  context('Given I am on the home page', () => {
    beforeEach(() => {
      cy.intercept('/colours', { fixture: 'colours' }).as('getColours')
      cy.visit('/')
    })
    it('When I make an API request I should receive colours', () => {
      cy.wait('@getColours').then(async (interception) => {
        const colours = interception.response.body
        assert.isNotNull(
          interception.response.body,
          'call to API to get colours succeeds'
        )
        assert.strictEqual(
          colours.length,
          4,
          'call to API to get 4 colours succeeds'
        )
        expect(colours.length, 'returned colours').equal(4)
      })
    })
  })
})
