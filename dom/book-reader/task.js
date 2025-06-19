let book = document.querySelector(".book__content");
let bookSize = document.querySelectorAll(".font-size");
 let colorColl = document.querySelectorAll(".color");
 
console.log(colorColl);
 
bookSize.forEach((elem) => elem.addEventListener("click", (e) => {
    e.preventDefault();
    if(elem.dataset.size === "small"){
        book.classList.add("book_fs-small");
        book.classList.remove("book_fs-big");
    } else if(elem.dataset.size === "big"){
        book.classList.add("book_fs-big");
        book.classList.remove("book_fs-small");
    } else if (elem.dataset.size !== "big" && elem.dataset.size !== "small") {
        book.classList.remove("book_fs-big");
        book.classList.remove("book_fs-small");
    }
     }));


     colorColl.forEach((elem,i,arr) => elem.addEventListener("click", (e)=> {
        e.preventDefault();
        console.log(elem.dataset.textColor);
        if(elem.classList.contains("text_color_black")){
            book.classList.remove("book_color-gray","book_color-whitesmoke");
            book.classList.add("book_color-black");
             
            elem.classList.add("color_active");
            arr[1].classList.remove("color_active");
            arr[2].classList.remove("color_active");
        } 
         else if (elem.classList.contains("text_color_gray")){
            book.classList.remove("book_color-black","book_color-whitesmoke");
            book.classList.add("book_color-gray");
             
            elem.classList.add("color_active");
            arr[0].classList.remove("color_active");
            arr[2].classList.remove("color_active");
        }
        else if (elem.classList.contains("text_color_whitesmoke")){
            book.classList.remove("book_color-black","book_color-gray");
            book.classList.add("book_color-whitesmoke");
             
            elem.classList.add("color_active");
            arr[0].classList.remove("color_active");
            arr[1].classList.remove("color_active");
        }
         else if(elem.classList.contains("bg_color_black")){
            book.classList.remove("book_bg-whitesmoke","book_bg-gray");
            book.classList.add("book_bg-black");

            elem.classList.add("color_active");

            arr[4].classList.remove("color_active");
            arr[5].classList.remove("color_active");
        } 
         else if (elem.classList.contains("bg_color_gray")){
            book.classList.remove("book_bg-whitesmoke","book_bg-black");
            book.classList.add("book_bg-gray");

            elem.classList.add("color_active");
            arr[3].classList.remove("color_active");
            arr[5].classList.remove("color_active");
        }
        else if (elem.classList.contains("bg_color_white")){
            book.classList.remove("book_bg-black","book_bg-gray");
            book.classList.add("book_bg-bg-whitesmoke");

            elem.classList.add("color_active");
            arr[3].classList.remove("color_active");
            arr[4].classList.remove("color_active");
        }
        

     }))