const controlFontSize = document.querySelector('.book__control_font-size')
const book = document.getElementById('book')

controlFontSize.onclick = function(event) {
  event.preventDefault()
  for (let elem of controlFontSize.children) {
    if (elem.classList.contains('font-size_active')) {
      elem.classList.remove('font-size_active')
    }
  }
  event.target.classList.add('font-size_active')
  let size = event.target.dataset.size
  book.className = 'book'
  if (size) {
    book.classList.add(`book_fs-${size}`)
  } 
} 