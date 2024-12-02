describe('Abstractions example', () => {
  // Separation of interface from input/output
  // Define the interface (web page: HTML ,etc., LLM chat: natural language/voice)
  // Define what is common as constants: INPUT and OUTPUT
  // Use implicit "should" assertions to capture the replaceable STATE of the interface for the web page
  // Use implicit "unknown type" assertions to capture the replaceable STATE of the LLM interface. but that's not our concern here
  // Use explicit "expect" assertions to capture the fixed PURPOSE
  context('Given I am on the home page', () => {
    const contract = {
      ENDPOINT: '',
      STATE: { isAlreadyHandled: false },
      INPUT: 'green',
      OUTPUT: {
        name: 'green',
        hex: '#008000',
      },
      CONTEXT: { language: 'FR-fr', advertisingId: 123 },
    }
    beforeEach(() => {
      cy.intercept('/colours/green', JSON.stringify(contract.OUTPUT)).as(
        'getColour'
      )
      cy.visit('/')
    })
    context(`When I request the colour ${contract.INPUT}`, () => {
      // The request is made implicitly when the page loads
      it('Then I receive its hex value', () => {
        cy.wait('@getColour').then(async (interception) => {
          const colour = interception.response.body
          // The OUTPUT could be returned to the screen or read out by LLM chat
          expect(colour).equal(JSON.stringify(contract.OUTPUT))
        })
      })
    })
  })
})
