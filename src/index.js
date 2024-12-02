;(async function colours() {
  const colours = await fetch('/colours')
  const json = await colours.json()
  console.log(json)
})()
;(async function green() {
  const colours = await fetch('/colours/green')
  const json = await colours.json()
  console.log(json)
})()

const btn = document.getElementById('display-message-btn')
const msg = document.getElementById('hidden-message-txt')

btn.addEventListener('click', () => {
  msg.classList.remove('hidden')
})
