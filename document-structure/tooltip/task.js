const elements = document.querySelectorAll('.has-tooltip')
let div = document.createElement('div')
div.className = 'tooltip'
document.body.append(div)
for (let element of elements) {
  element.addEventListener('click', function(event) {
    event.preventDefault()
    let coords = element.getBoundingClientRect()
    let oldLeft = Number(div.style.left.slice(0,-2))
    div.classList.toggle('tooltip_active')
    div.style.cssText = `position: absolute; top: ${coords.bottom + window.pageYOffset}px; left: ${coords.left + window.pageXOffset}px;`
    div.innerHTML = element.title
    if (oldLeft != Number(div.style.left.slice(0,-2))) {
      div.classList.add('tooltip_active')
    }
  })
}