;(async function colours() {
  const colours = await fetch('colours')
  const json = await colours.json()
  console.log(json)
})()
;(async function green() {
  const colours = await fetch('colours/green')
  const json = await colours.json()
  console.log(json)
})()
