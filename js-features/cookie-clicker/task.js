let clickerCounter = document.getElementById('clicker__counter')
let clicksPerSecond = document.getElementById('clicks_per_second')
let cookie = document.getElementById('cookie')
cookie.style.height = '128px'
let cookieStyle = getComputedStyle(cookie)
let cookieWidth = Number(cookieStyle.width.slice(0,-2))
let cookieHeight = Number(cookieStyle.height.slice(0,-2))
let counter = 1
let width, height
let startTime
function startTimer() {
  return new Date().getTime()
}
function getSize() {
  if (counter % 2) {
      counter += 1
      return [cookieWidth * 1.25, cookieHeight * 1.25]
  } else {
      counter += 1
      return [cookieWidth, cookieHeight]
  }
}
cookie.onclick = function() {
  if (counter == 1) {
      startTime = startTimer()
  }
  [width, height] = getSize()
  let time = (new Date().getTime() - startTime)/1000
  cookie.style.width = `${width}px`
  cookie.style.height = `${height}px`
  let speed = ((counter - 1)/time).toFixed(2)
  if (speed == Infinity) speed = counter - 1   
  clicksPerSecond.innerText = speed
  clickerCounter.innerText = counter - 1
}