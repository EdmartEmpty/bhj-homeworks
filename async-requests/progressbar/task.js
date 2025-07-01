
let inputForm = document.getElementById("form");

let progressLine = document.getElementById("progress");




inputForm.addEventListener("submit", (el) => {
    el.preventDefault();
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/upload", true);
    if(xhr.readyState === xhr.OPENED){
        progressLine.value += 0.25;
    }
    let file = new FormData(inputForm);
    xhr.upload.addEventListener("progress", (e)=> progressLine.value = e.loaded / e.total);

    xhr.upload.addEventListener("load", () => {
        xhr.addEventListener("readystatechange", () =>{
            if(xhr.readyState === xhr.DONE){
                alert("Загрузка завершена!");
            }
        })
        });

   xhr.upload.onerror = () => alert("Ошибка загрузки!");

    xhr.send(file);
})

