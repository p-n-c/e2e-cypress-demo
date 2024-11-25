import { constants } from '../support/variables'

describe('Network emissions check', () => {
  it('should calculate emissions from network requests', () => {
    cy.collectNetworkResponses('/')
      .calculateEmissions(constants.DOMAIN)
      .then((calculation) => {
        expect(calculation.emissions).to.be.lte(constants.MAX_EMISSIONS)
        expect(calculation.greenHosting).to.be.false
      })
  })
})
