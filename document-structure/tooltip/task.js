let links = document.querySelectorAll(".has-tooltip");
let div = document.createElement("div");
div.classList.add("tooltip");




links.forEach((link) => link.addEventListener("click", (event) => {
    event.preventDefault();
    function show() {
        div.textContent = event.target.getAttribute("title");
        div.classList.add("tooltip_active");


        const { left, top } = event.target.getBoundingClientRect();
        div.style.top = (top + 18) + "px";
        div.style.left = (left) + "px";

        event.target.appendChild(div);

    }

    show();

    link.addEventListener("mouseout", () => {
        
            div.classList.remove("tooltip_active")
           
      
    });
}));