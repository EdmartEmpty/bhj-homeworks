let fieldText =  document.getElementById("editor");

if(localStorage.getItem("text")){
	fieldText.value = localStorage.getItem("text");
}

fieldText.style.resize = "none";


 fieldText.addEventListener("change", () => {
     localStorage.setItem("text", fieldText.value)});

let button = document.createElement("input");
button.setAttribute("type","button");

document.querySelector(".card").appendChild(button);
button.style.width = "70px";
button.value = "Сбросить";

button.addEventListener("click", () => {
    fieldText.value = "";
    localStorage.clear();
})
