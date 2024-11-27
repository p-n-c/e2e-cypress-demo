export const thresholds = {
  performance: 100,
  accessibility: 100,
  'first-contentful-paint': 1000,
  'largest-contentful-paint': 1000,
  interactive: 1000,
  seo: 90,
  'best-practices': 80,
  // pwa: 50,
}

export const lighthouseConfig = {
  formFactor: 'desktop',
  screenEmulation: { disabled: true },
}

// See https://glebbahmutov.com/blog/cypress-lighthouse/
export const lighthouseTask = (lighthouse) => {
  let txt
  const task = lighthouse((lighthouseReport) => {
    let lighthouseScoreText = ''
    let lighthouseResult = lighthouseReport?.lhr?.categories
    let lighthousePerformance =
      'Performance: ' + lighthouseResult?.performance?.score * 100 + '\n'
    let lighthouseAccessibility =
      'Accessibility: ' + lighthouseResult?.accessibility?.score * 100 + '\n'
    let lighthouseBestPractices =
      'Best Practices: ' +
      lighthouseResult?.['best-practices']?.score * 100 +
      '\n'
    let lighthouseSEO = 'SEO: ' + lighthouseResult?.seo?.score * 100 + '\n'
    lighthouseScoreText =
      lighthousePerformance +
      lighthouseAccessibility +
      lighthouseBestPractices +
      lighthouseSEO

    console.log(lighthouseScoreText)
    txt = lighthouseScoreText
  })

  return { task, txt }
}
