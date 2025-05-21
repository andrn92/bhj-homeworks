let holeGame = document.querySelector('.hole-game')
let dead = document.getElementById('dead')
let lost = document.getElementById('lost')
let hit = 0
let past = 0
let gameOver = false
let message
holeGame.onclick = function(event) {
  if (event.target.classList.contains('hole_has-mole')) {
    hit += 1
  } else {
    past += 1
  }
  dead.innerText = hit
  lost.innerText = past
  if (past == 5 || hit == 10) gameOver = true
  if (gameOver) {
    if (past == 5) message = 'You lost!'
    if (hit == 10) message = 'You won!'
    hit = 0
    past = 0
    alert(message)
    dead.innerText = hit
    lost.innerText = past
    gameOver = false
  }
}