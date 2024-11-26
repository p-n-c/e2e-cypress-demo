import { extractHostname } from '../support/utils.js'

describe('Unit tests', () => {
  before(() => {
    // check if the import worked correctly
    expect(extractHostname, 'extractHostname').to.be.a('function')
  })

  it('The utils function tests should pass', () => {
    const testCases = [
      ['http://localhost:1234/', 'localhost:1234'],
      ['https://the-public-good.com/', 'the-public-good.com'],
      ['https://subdomain.example.com/path', 'subdomain.example.com'],
      ['localhost:1234', 'localhost:1234'], // URL without scheme
      ['example.com', 'example.com'], // Bare domain
      ['https://example.com:8080/', 'example.com:8080'], // With port
    ]

    testCases.forEach(([input, expected]) => {
      const result = extractHostname(input)
      expect(result).equal(expected)
    })
  })
})
