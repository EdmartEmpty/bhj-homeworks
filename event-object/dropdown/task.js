let dropList = document.querySelector(".dropdown__list");
let dropValue = document.querySelector(".dropdown__value");
let dropItemColl = document.getElementsByClassName("dropdown__item");
let linkColl = document.getElementsByClassName("dropdown__link");


 
dropValue.addEventListener("click", () => {
    dropList.classList.add("dropdown__list_active");
});

dropValue.addEventListener("dblclick", (e) => {
    
    dropList.classList.remove("dropdown__list_active");
});


for (let i = 0; i < dropItemColl.length; i++) {
    dropItemColl[i].addEventListener("click", (e) => {
        e.preventDefault();
        dropList.classList.remove("dropdown__list_active");
        // dropValue.textContent = dropItemColl[i].children[0].textContent;
        dropValue.textContent = linkColl[i].closest(".dropdown__link").textContent;
        console.log(dropItemColl[i].children[0].textContent);

        
    });
   
}