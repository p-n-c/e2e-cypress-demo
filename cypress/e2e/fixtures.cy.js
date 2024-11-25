describe('Environment check', () => {
  it('clicking on the "Human-readable sitemap" should navigate to the sitemap page', () => {
    cy.intercept('/colours', { fixture: 'colours' }).as('getColours')
    cy.visit('/')
    cy.wait('@getColours').then(async (interception) => {
      for (const [key, value] of Object.entries(interception.response)) {
        cy.log(`${key}: ${value}`)
      }
      const colours = interception.response.body
      assert.isNotNull(
        interception.response.body,
        'Call to API to get colours succeeds'
      )
      assert.strictEqual(
        colours.length,
        4,
        'Call to API to get 4 colours succeeds'
      )
      expect(colours.length).equal(4)
    })
  })
})
