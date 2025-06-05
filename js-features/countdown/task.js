
const element = document.getElementById("timer");
let start = new Date(0, 0, 0, 0, 0, 59);
element.textContent = Intl.DateTimeFormat("ru", { hour: "numeric", minute: "numeric", second: "numeric" }).format(start);
function timer() {
    if (start.getSeconds() === 0 && start.getMinutes() === 0 && start.getHours() === 0) {
        alert("Вы победили в конкурсе!");
        clearInterval(intervalId);
        
       document.location.assign("https://m.vk.com/",);
    }


    element.textContent = Intl.DateTimeFormat("ru", { hour: "numeric", minute: "numeric", second: "numeric" }).format(start);
    start.setSeconds(start.getSeconds() - 1);

}

let intervalId = setInterval(timer, 1000);

