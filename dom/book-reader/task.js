let colorColl = document.querySelectorAll(".color");
let bookContent = document.querySelector(".book__content");
let bookSize = document.querySelectorAll(".font-size");


bookSize.forEach((elem) => elem.addEventListener("click", (e) => {
    e.preventDefault();
    if (elem.dataset.size === "small") {
        book.classList.add("book_fs-small");
        book.classList.remove("book_fs-big");
    } else if (elem.dataset.size === "big") {
        book.classList.add("book_fs-big");
        book.classList.remove("book_fs-small");
    } else if (elem.dataset.size !== "big" && elem.dataset.size !== "small") {
        book.classList.remove("book_fs-big","book_fs-small");
    }
}));


colorColl.forEach((el) => el.addEventListener("click", (e) => {
    e.preventDefault();
    let div = el.closest("div");


    div.querySelectorAll(".color").forEach((i) => i.classList.remove("color_active"));

    for (let fromDiv of div.querySelectorAll(".color")) {
        if (fromDiv === el) {
            fromDiv.classList.add("color_active");
            if (e.target.classList.contains("text_color_" + e.target.dataset.textColor)) {
               Array.from(bookContent.classList).forEach((className) => {
                if(className.startsWith("book_color-")){
                    bookContent.classList.remove(className);
                }})
                bookContent.classList.add("book_color-" + e.target.dataset.textColor);

            }
            else {
                Array.from(bookContent.classList).forEach((className) => {
                    if(className.startsWith("book_bg-")){
                        bookContent.classList.remove(className);
                    }})
                bookContent.classList.add("book_bg-" + e.target.dataset.bgColor);

            };
        }
    }

}));
