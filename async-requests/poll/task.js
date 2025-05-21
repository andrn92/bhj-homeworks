let pollTitle = document.getElementById("poll__title");
let pollAnswers = document.getElementById("poll__answers");

let Http = new XMLHttpRequest();
Http.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
Http.responseType = "json";
Http.send();

console.log(Http);

Http.onreadystatechange = function () {
    if(Http.readyState === 4) {
        pollTitle.innerText = Http.response.data.title;

        let answers = Http.response.data.answers;

        for (let answer of answers) {
            pollAnswers.insertAdjacentHTML("afterBegin", `<button class="poll__answer">${answer}</button>`)
        }

        let buttons = document.getElementsByClassName("poll__answer");

        for (let btn of buttons) {
            btn.addEventListener('click', () => alert('Спасибо, ваш голос засчитан!'))
        }
    }
}