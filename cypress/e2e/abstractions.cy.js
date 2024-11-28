describe('Abstractions example', () => {
  // Separation of interface from input/output
  // Define the interface (web page: HTML ,etc., LLM chat: natural language/voice)
  // Define what is common as constants: INPUT and OUTPUT
  // Use implicit "should" assertions to capture the replaceable STATE of the interface
  // Use explicit "expect" assertions to capture the fixed PURPOSE
  context('Given I am on the home page', () => {
    beforeEach(() => {
      cy.visit('/')
    })
    it('When I select the colour green Then I get back green colour details', () => {
      const contract = {
        INPUT: 'green',
        OUTPUT: {
          name: 'green',
          hex: '#008000',
        },
      }
      cy.intercept('/colours', JSON.stringify(contract.OUTPUT)).as('getColour')
      // The INPUT could come from a web page or be relayed via LLM chat
      cy.visit(`/${contract.INPUT}`)
      cy.wait('@getColour').then(async (interception) => {
        const colour = interception.response.body
        // The OUTPUT could be returned to the screen or read out by LLM chat
        expect(colour).equal(JSON.stringify(contract.OUTPUT))
      })
    })
  })
})
