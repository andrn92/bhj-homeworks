const form = document.getElementById("form")
const progress = document.getElementById("progress")

form.addEventListener('submit', () => {
    const formData = new FormData(form)

    let xhr = new XMLxhrRequest()
    xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/upload')
    xhr.send(formData)

    xhr.upload.onprogress = function() {
        alert( 'Загружено на сервер')
    }

    xhr.upload.onprogress = function(event) {
        console.log(event)
    }
})