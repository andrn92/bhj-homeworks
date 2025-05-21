let form = document.getElementById("form");
let progress = document.getElementById("progress");

form.addEventListener('submit', () => {
    const formData = new FormData(form);

    let Http = new XMLHttpRequest();
    Http.open('GET', 'https://students.netoservices.ru/nestjs-backend/upload');
    Http.send(formData);

    Http.upload.onprogress = function() {
        alert( 'Загружено на сервер');
    }

    Http.upload.onprogress = function(event) {
        console.log(event);
    }
})