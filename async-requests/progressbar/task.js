const form = document.getElementById("form")
const progress = document.getElementById("progress")

form.onsubmit = function(event) {
  event.preventDefault()
  let xhr = new XMLHttpRequest()
  let url = 'https://students.netoservices.ru/nestjs-backend/upload'

  xhr.upload.onprogress = function(event) {
    let i = 0.0
    let delay = 800
    let timerId = setTimeout(function run() {
      if (i < 1.2) {
        progress.setAttribute('value', i)
      } else {
        clearTimeout(timerId)
      }
      i += 0.2
      timerId = setTimeout(run, delay)
    }, 0)
    
  }

  xhr.onloadend = function() {
    if (xhr.status == 200) {
    console.log("Success")
    } else {
    console.log("Error " + this.status)
    }
  }
  const formData = new FormData()
  const file = this.elements.file.files[0]
  formData.append('file', file)
  xhr.open('POST', url)
  xhr.send(formData)
}