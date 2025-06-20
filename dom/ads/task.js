document.addEventListener("DOMContentLoaded", () => {
    
    let cards = document.querySelectorAll(".card");
   
    let start = Array.from(cards).map(() => 0);

    function switcher (){
        
    cards.forEach((el,index) => {
         
        let row = el.querySelectorAll(".rotator__case");
        row.forEach((e) => e.classList.remove("rotator__case_active"));
        
          row[start[index]].style.color = row[start[index]].dataset.color;
            row[start[index]].classList.add("rotator__case_active");
             
      
         
        start[index] < cards[0].querySelectorAll(".rotator__case").length - 1?  ++start[index] : start[index] = 0;
      
    
    })}
    ;
    setInterval(switcher,1000);
})