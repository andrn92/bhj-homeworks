const form = document.getElementById("signin__form")
const button = document.getElementById('signin__btn')
const welcome = document.getElementById('welcome')
const userId = document.getElementById('user_id')
form.addEventListener("submit", function(event) {
  event.preventDefault()
  const login = form.elements.login.value
  const password = form.elements.password.value
  let url = 'https://students.netoservices.ru/nestjs-backend/auth'
  fetch(url, { 
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ login, password })
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      welcome.classList.add('welcome_active')
      userId.textContent = data.user_id
      localStorage.setItem('user', JSON.stringify(data.user))
    } else {
      alert("Login or password is incorrect")
    }
  })
  .catch(error => {
    console.error('Error sending data:', error)
  })
})    
