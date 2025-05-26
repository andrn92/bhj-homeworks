const tasksList = document.getElementById('tasks__list')
const taskInput = document.getElementById('task__input')
const button = document.getElementById('tasks__add')

button.addEventListener('click', function() {
    let elem = Array.from(tasksList.children).find((task) => 
      task.querySelector('.task__title').innerText == taskInput.value
    )
    if (!elem) {
      tasksList.insertAdjacentHTML('beforeend', `<div class="task"><div class="task__title">${taskInput.value}</div><a href="#" class="task__remove">&times</a></div>`)
    }

})

tasksList.addEventListener('click', function(event) {
  if (event.target.className == 'task__remove') {
    event.preventDefault()
    event.target.parentElement.remove()
  }
})
