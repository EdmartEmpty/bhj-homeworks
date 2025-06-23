document.addEventListener("DOMContentLoaded", () => {
    
    let cards = document.querySelectorAll(".card");
  let timers = [];
    let start = Array.from(cards).map(() => 0);

    function switcher (){
        
    cards.forEach((el,index) => {
         
        let row = el.querySelectorAll(".rotator__case");
        row.forEach((e) => e.classList.remove("rotator__case_active"));
        
        row[start[index]].style.color = row[start[index]].dataset.color;
        let speed =  row[start[index]].dataset.speed;
        
        row[start[index]].classList.add("rotator__case_active");
        
        start[index] = (start[index]+1)% row.length;

        if (timers[index]) {
            clearTimeout(timers[index]);
        }

       timers[index] = setTimeout(switcher,speed);
    })}
    ;
  switcher();
})
