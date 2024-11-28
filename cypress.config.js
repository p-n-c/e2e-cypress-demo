/* eslint-disable no-unused-vars */
import { defineConfig } from 'cypress'
import { lighthouse, prepareAudit } from '@cypress-audit/lighthouse'
import { lighthouseTask } from './cypress/support/lighthouse.js'

export default defineConfig({
  e2e: {
    setupNodeEvents(on) {
      on('task', {
        log(message) {
          console.log(message)

          return null
        },
        table(message) {
          console.table(message)

          return null
        },
        // lighthouse: lighthouse(),
        async lighthouse(allOptions) {
          // calling the function is important
          const { task, txt } = lighthouseTask(lighthouse)

          const report = await task(allOptions)
          // insert the text into the report returned the test
          report.txt = txt
          return report
        },
      }),
        on('before:browser:launch', (browser = {}, launchOptions) => {
          prepareAudit(launchOptions)
        })
    },
    baseUrl: 'http://localhost:1234',
    experimentalRunAllSpecs: true,
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/report',
    overwrite: false,
    html: true,
    json: true,
  },
})
