
let xhr = new XMLHttpRequest();

xhr.open("GET", " https://students.netoservices.ru/nestjs-backend/poll");

let xhrPost = new XMLHttpRequest();

xhrPost.open("POST", "https://students.netoservices.ru/nestjs-backend/poll");

xhrPost.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');


xhrPost.addEventListener("readystatechange", () => {
    if (xhrPost.readyState === xhrPost.DONE) {
        let responsePOst = JSON.parse(xhrPost.responseText);
        
        responsePOst.stat.forEach((el) => {
            let arrResponsePost = document.createElement("div");
        document.querySelector(".card").appendChild(arrResponsePost);
        arrResponsePost.innerHTML = `${el.answer} : <b>${el.votes}%</b>`;
        })
        
    }
})

xhr.addEventListener("readystatechange", () => {
   
    if (xhr.readyState === xhr.DONE && xhr.status === 200) {
        let response = JSON.parse(xhr.responseText);
         
        document.getElementById("poll__title").append(response.data.title);

        let arrAnswers = response.data.answers;

        arrAnswers.forEach((element, index) => {


            let button = document.createElement("button");
            button.classList.add("poll__answer");
            document.getElementById("poll__answers").appendChild(button);
            button.innerHTML = element;
            button.dataset.index = index;
            button.dataset.id = response.id;

        });

    }
   
});
 
document.addEventListener("click", (e) => {
    if(e.target.classList. contains("poll__answer")){
    alert("Спасибо ваш голос учтен");
    
    xhrPost.send(`vote=${e.target.dataset.id}&answer=${e.target.dataset.index}`);
    
    document.getElementById("poll__answers").style.display = "none";
    }
});

xhr.send();

