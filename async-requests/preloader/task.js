const item = document.getElementById("items");
const Http = new XMLHttpRequest();
const url = "https://students.netoservices.ru/nestjs-backend/slow-get-courses"
Http.open("GET", url)
Http.responseType = "json"
Http.send()
Http.onload = function () {
  if (Http.status == 200) {
    const data = Http.response.response.Valute
    document.getElementById("loader").classList.remove("loader_active");
    for (let i in data) {
      item.insertAdjacentHTML('beforeEnd', `<div class="item"><div class="item__code">${data[i].CharCode}</div><div class="item__value">${ data[i].Value}</div><div class="item__currency">руб.</div></div>`)
    };
  } else if (Http.status == 404) {
    console.log("Page Not Found")
  } else if (Http.status == 500) {
    console.log("Internal Server Error")
  } else {
    console.log("Bad request")
  }
}