let elements = document.querySelectorAll('.has-tooltip')
let div = document.createElement('div')
div.className = 'tooltip'
document.body.append(div)
for (let element of elements) {
  element.onclick = function(event) {
    event.preventDefault()
    let coords = element.getBoundingClientRect()
    div.classList.toggle('tooltip_active')
    div.style.cssText = `top: ${coords.bottom}px; left: ${coords.left}px;`
    div.innerHTML = element.title
  }
}
