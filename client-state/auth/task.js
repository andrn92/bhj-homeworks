const signin = document.getElementById("signin")
signin.classList.add('signin_active')
const form = document.getElementById("signin__form")
const button = document.getElementById('signin__btn')
const welcome = document.getElementById('welcome')
const userId = document.getElementById('user_id')
button.addEventListener("click", function(event) {
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
      let usId = localStorage.getItem('user_id')  
      welcome.classList.add('welcome_active')
      signin.classList.remove('signin_active')
      if (!usId) {
        localStorage.setItem('user_id', data.user_id)
        userId.textContent = data.user_id
      } else {
        userId.textContent = usId
      }
    } else {
      alert("Login or password is incorrect")
    }
  })
  .catch(error => {
    console.error('Error sending data:', error)
  })
})    
