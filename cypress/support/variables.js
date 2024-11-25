import { extractHostname } from './utils.js'

const MAX_EMISSIONS = 1
const DOMAIN = extractHostname(Cypress.config().baseUrl)

export const constants = {
  MAX_EMISSIONS,
  DOMAIN,
}
