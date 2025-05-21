let dropdownValue = document.querySelector('.dropdown__value')
let dropdownList = document.querySelector('.dropdown__list')
dropdownValue.onclick = function(event) {
  if (dropdownValue.nextElementSibling == dropdownList) {
    dropdownList.classList.toggle('dropdown__list_active')
  }
}
dropdownList.onclick = function(event) {
  event.preventDefault()
  dropdownValue.innerHTML = event.target.innerHTML
  dropdownList.classList.remove('dropdown__list_active')
}