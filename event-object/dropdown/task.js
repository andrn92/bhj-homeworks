const dropdownValue = document.querySelector('.dropdown__value')
const dropdownList = document.querySelector('.dropdown__list')
dropdownValue.onclick = function(event) {
  if (dropdownValue.nextElementSibling == dropdownList) {
    dropdownList.classList.toggle('dropdown__list_active')
  }
}
dropdownList.onclick = function(event) {
  event.preventDefault()
  if (event.target.closest('a')) {
    dropdownValue.innerHTML = event.target.innerHTML
  }
  dropdownList.classList.remove('dropdown__list_active')
}