const elements = document.querySelectorAll('.has-tooltip')
let div = document.createElement('div')
div.className = 'tooltip'
const script = document.querySelector('script')
const mainArr = []
const main = document.createElement('div')
for (let elem of Array.from(document.body.children).slice(1,-1)) {
  mainArr.push(elem)
  elem.remove()
}
for (let el of mainArr) {
  main.append(el)
}
script.before(main)
script.before(div)
main.addEventListener('click', function(event) {
  if (event.target.closest('.has-tooltip')) {
    event.preventDefault()
    let coords = event.target.getBoundingClientRect()
    let oldLeft = Number(div.style.left.slice(0,-2))
    div.classList.toggle('tooltip_active')
    div.style.cssText = `position: absolute; top: ${coords.bottom + window.pageYOffset}px; left: ${coords.left + window.pageXOffset}px;`
    div.innerHTML = event.target.title
    if (oldLeft != Number(div.style.left.slice(0,-2))) {
      div.classList.add('tooltip_active')
    }
  }
})