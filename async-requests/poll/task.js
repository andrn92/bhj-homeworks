const pollTitle = document.getElementById("poll__title")
const pollAnswers = document.getElementById("poll__answers")

let xhr = new XMLxhrRequest()
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll')
xhr.responseType = "json"
xhr.send()

// console.log(xhr)

xhr.onreadystatechange = function () {
    if(xhr.readyState === 4) {
        pollTitle.innerText = xhr.response.data.title

        let answers = xhr.response.data.answers

        for (let answer of answers) {
            pollAnswers.insertAdjacentHTML("afterBegin", `<button class="poll__answer">${answer}</button>`)
        }

        let buttons = document.getElementsByClassName("poll__answer")

        for (let btn of buttons) {
            btn.addEventListener('click', () => alert('Спасибо, ваш голос засчитан!'))
        }
    }
}