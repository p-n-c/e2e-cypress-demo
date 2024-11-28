import { constants } from '../support/variables'

describe('Network emissions check', () => {
  context('Given I am on the home page', () => {
    beforeEach(() => {
      cy.collectNetworkResponses('/').as('responses')
    })
    context('When the page has loaded', () => {
      it('Then calculated emissions from network requests should be less than 1 g of Co2', () => {
        cy.get('@responses').then((data) => {
          cy.wrap(data)
            .calculateEmissions(constants.DOMAIN)
            .then((calculation) => {
              expect(calculation.emissions).to.be.lte(constants.MAX_EMISSIONS)
              expect(calculation.greenHosting).to.be.false
            })
        })
      })
    })
  })
})
