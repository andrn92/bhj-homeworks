const form = document.getElementById("form")
const progress = document.getElementById("progress")

form.onsubmit = function(event) {
  event.preventDefault()
  let xhr = new XMLHttpRequest()
  let url = 'https://students.netoservices.ru/nestjs-backend/upload'

  xhr.upload.onprogress = function(event) {
    progress.setAttribute('max', event.total);
    progress.value = event.loaded;
  }

  xhr.onloadend = function() {
    if (xhr.status > 199 && xhr.status < 300) {
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