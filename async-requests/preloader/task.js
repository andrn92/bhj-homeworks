let valutes
const currencies = document.getElementById('items')
const loader = document.getElementById('loader')

let xhr = new XMLHttpRequest()
let url = 'https://students.netoservices.ru/nestjs-backend/slow-get-courses'
xhr.open('GET', url)
xhr.responseType = "json"
xhr.send()

xhr.onload = function () {
  if (xhr.status == 200) {
    valutes = xhr.response.response.Valute
    loader.classList.toggle('loader_active')

    for (let valuteItem in valutes) {
      currencies.insertAdjacentHTML("beforeend",
      `<div class="item"><div class="item__code">${valutes[valuteItem].CharCode}</div>
      <div class="item__value">${valutes[valuteItem].Value}</div>
      <div class="item__currency">руб.</div></div>`)
    }
  } else if (xhr.status == 404) {
    console.log("Page Not Found")
  } else if (xhr.status == 500) {
    console.log("Internal Server Error")
  } else {
    console.log("Bad request")
  }
}

// xhr.onreadystatechange = function () {
//   if(xhr.readyState === 4) {
//     data = xhr.response
// }