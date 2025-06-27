let links = document.querySelectorAll(".has-tooltip");
 



links.forEach((link) => link.addEventListener("click", (event) => {
    event.preventDefault();
    
    let tooltip = link.querySelector(".tooltip");
    
    if(!tooltip){
        tooltip = document.createElement("div");
        tooltip.classList.add("tooltip");
        tooltip.textContent = link.getAttribute("title");
         const { left, top } = link.getBoundingClientRect();
        tooltip.style.top = (top + 18) + "px";
        tooltip.style.left = (left) + "px";

         link.appendChild(tooltip);

    }
   
        tooltip.classList.toggle("tooltip_active");

        document.querySelectorAll(".tooltip").forEach((e) => {if(e !== tooltip){
            e.classList.remove("tooltip_active");
        }})

}));