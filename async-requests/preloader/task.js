
if(localStorage.getItem("one")){
    document.querySelector(".loader").classList.remove("loader_active");
document.getElementById("items").innerHTML = localStorage.getItem("one");
}

let xhr = new XMLHttpRequest();

xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/slow-get-courses");

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState == xhr.DONE && xhr.status == 200) {
        let response = JSON.parse(xhr.responseText);
        document.querySelector(".loader").classList.remove("loader_active");
        console.log(response);
        document.getElementById("items").innerHTML = "";
        for (let property in response.response.Valute){
            console.log(response.response.Valute[property].CharCode);
            console.log(response.response.Valute[property].Value);
            let div = document.createElement("div");
            
        document.getElementById("items").appendChild(div);
        div.outerHTML = `<div class="item"><div class="item__code">
                    ${response.response.Valute[property].CharCode}
                </div>
                <div class="item__value">
                    ${response.response.Valute[property].Value};
                </div>
                <div class="item__currency">
                    руб.
                </div></div>`;
        }
        
    }
    localStorage.setItem("one",document.getElementById("items").innerHTML);
})

xhr.send();

