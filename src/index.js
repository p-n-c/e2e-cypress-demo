;(async function init() {
  const response = await fetch('colours')
  const json = await response.json()
  console.log(json)
})()
