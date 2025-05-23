const pollTitle = document.getElementById("poll__title")
const pollAnswers = document.getElementById("poll__answers")
pollAnswers.style.cssText = 'display: flex; flex-flow: row nowrap; justify-content: center;'

let xhr = new XMLHttpRequest()
let url = 'https://students.netoservices.ru/nestjs-backend/poll'
xhr.open('GET', url)
xhr.responseType = "json"
xhr.send()

xhr.onload = function () {
  if(xhr.status == 200) {
    pollTitle.innerText = xhr.response.data.title

    let answers = xhr.response.data.answers

    for (let answer of answers) {
        pollAnswers.insertAdjacentHTML("afterBegin", `<button class="poll__answer">${answer}</button>`)
    }

    for (let btn of pollAnswers.children) {
        let styleButton = 'padding: 8px;'
        if (btn == pollAnswers.firstElementChild) {
            btn.style.cssText = styleButton
        } else {
            btn.style.cssText = 'margin-left: 3px;' + styleButton 
        }
        btn.addEventListener('click', () => alert('Спасибо, ваш голос засчитан!'))
    }
  } else if (xhr.status == 404) {
    console.log("Page Not Found")
  } else if (xhr.status == 500) {
    console.log("Internal Server Error")
  } else {
    console.log("Bad request")
  }
}