describe('SEO verification', () => {
  context('When I am on the home page', () => {
    beforeEach(() => {
      cy.visit('https://p-n-c.github.io/website/')
    })

    it('Then meta title should be accessible and valid', () => {
      const minLength = 40
      const maxLength = 80
      cy.title().then((title) => {
        // Check value
        expect(title, 'value').equal(
          'P&C - Specialists in responsible web development.'
        )
        // Check minimum length
        expect(title.length).to.be.at.least(minLength, 'min length')
        // Check maximum length
        expect(title.length).to.be.at.most(maxLength, 'max length')
      })
    })

    it('Then meta description should be accessible and valid', () => {
      const minLength = 50
      const maxLength = 160

      cy.log('- - USING SHOULD - -')
      cy.get('meta[name="description"]')
        .should(
          'have.attr',
          'content',
          'Specialists in responsible web development - best practice and tools to monitor performance, accessibility, sustainability and security.'
        )
        .and('have.attr', 'content')
        .its('length')
        .and('be.at.least', minLength)
        .and('be.lessThan', maxLength)

      cy.log('- - USING EXPECT - -')
      cy.get('meta[name="description"]')
        .invoke('attr', 'content')
        .then((content) => {
          // Check exact content
          expect(content, 'content').to.equal(
            'Specialists in responsible web development - best practice and tools to monitor performance, accessibility, sustainability and security.'
          )

          // Check length constraints
          expect(content.length).to.be.at.least(minLength, 'min length')
          expect(content.length).to.be.lessThan(maxLength, 'max length')
        })
    })

    it('Then verify JSON-LD structured data', () => {
      // Query the script tag with type application/ld+json
      cy.get("script[type='application/ld+json']").then((scriptTag) => {
        // Parse the JSON-LD from text to JSON to simplify inspection
        const jsonLD = JSON.parse(scriptTag.text())

        expect(jsonLD['@context']).equal('https://schema.org')
        expect(jsonLD['name']).equal('People and Code', 'The company name')
      })
    })
  })
})
