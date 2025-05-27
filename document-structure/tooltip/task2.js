const elements = document.querySelectorAll('.has-tooltip')
let div = document.createElement('div')
div.className = 'tooltip'
document.body.append(div)
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
const res = []
main.addEventListener('click', function(event) {
  res.append(event.target)
  if (event.target.closest('.has-tooltip')) {
    event.target.preventDefault()
    let coords = event.target.getBoundingClientRect()
    div.classList.toggle('tooltip_active')
    div.style.cssText = `position: absolute; top: ${coords.bottom + window.pageYOffset}px; left: ${coords.left + window.pageXOffset}px;`
    div.innerHTML = event.target.title
  }

})
console.log(res)
// console.log(mainArr.length)
// console.log(Array.from(main.children).length)