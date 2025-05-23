let valute
const valuteContainer = document.getElementById('items')
const loader = document.getElementById('loader')

let xhr = new XMLHttpRequest()
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses')
xhr.responseType = "json"
xhr.send()

xhr.onreadystatechange = function () {
    if(xhr.readyState === 4) {
        valute = xhr.response.response.Valute
        console.log(valute)
        console.log(typeof(valute))    
    }

    loader.classList.toggle('loader_active')

    for (let valuteItem of valute) {
        valuteContainer.insertAdjacentHTML("afterBegin",
        `<div class="item__code">${valuteItem.CharCode}</div>
        <div class="item__value">${valuteItem.Value}</div>
        <div class="item__currency">руб.</div>`)
    }
}

// const item = document.getElementById("items")
// const Http = new XMLHttpRequest()
// const url = "https://students.netoservices.ru/nestjs-backend/slow-get-courses"
// Http.open("GET", url)
// Http.responseType = "json"
// Http.send()
// Http.onload = function () {
//   if (Http.status == 200) {
//     const data = Http.response.response.Valute
//     document.getElementById("loader").classList.remove("loader_active")
//     for (let i in data) {
//       item.insertAdjacentHTML('beforeEnd', `<div class="item"><div class="item__code">${data[i].CharCode}</div><div class="item__value">${ data[i].Value}</div><div class="item__currency">руб.</div></div>`)
//     }
//   } else if (Http.status == 404) {
//     console.log("Page Not Found")
//   } else if (Http.status == 500) {
//     console.log("Internal Server Error")
//   } else {
//     console.log("Bad request")
//   }
// }
