let formList = document.querySelector("form");




formList.addEventListener("submit", (event) => {
    event.preventDefault();
    if (formList.querySelector("input").value) {

        let aria = formList.querySelector("input");


        let div = document.createElement("div");
        let divIndiv = document.createElement("div");
        let remove = document.createElement("a");



        divIndiv.classList.add("task__title");
        divIndiv.textContent = aria.value;
      
       
        formList.insertAdjacentElement("afterend", div);
        div.insertAdjacentElement("afterBegin", divIndiv);
        div.insertAdjacentElement("beforeEnd", remove);

        remove.outerHTML = `<a href="#" class = "task__remove">&times;</a>`;
        div.classList.add("task");
        localStorage.setItem(aria.value, div.outerHTML);
        aria.value = "";

        
        div.addEventListener("click", (el) => {
            el.currentTarget.remove();
            delete localStorage[aria.value];
        });

    }



})





for (let p in localStorage) {
    if (localStorage.getItem(p)) {
         let element = document.createElement("div");
        formList.insertAdjacentElement("afterend", element);
        element.outerHTML = localStorage.getItem(p);
        element.textContent = p;
    }


}

 let link = document.querySelectorAll(".task");

  if(link){
    link.forEach(el => el.addEventListener("click", (e)=>  
        {
       
        
        delete localStorage[e.currentTarget.querySelector("div").textContent];
        e.currentTarget.remove()
    }));
 };


