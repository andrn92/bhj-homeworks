let timer = document.getElementById('timer')
let startTime = Number(timer.innerText)
let counter = 0
function changeTime(time) {
  time = String(time)
  if (time < 10) time = '0' + time
  timer.innerHTML = '00:00:' + time

}
let timerId = setTimeout(function run() {
  changeTime(startTime)
  if (startTime < 1 && counter == 0) {
      setTimeout(()=> alert("Вы победили в конкурсе!"), 0)
      counter += 1
      clearInterval(timerId)
  } else if (startTime > 0) startTime -= 1
  timerId = setTimeout(run, 1000)
}, 0)