let cookie = document.getElementById("cookie");
let cliker = document.getElementById("clicker__counter");
let oldTime = new Date();
cookie.onclick = () => {
let timeNow = new Date();
 
    let mid = 1/(timeNow.getSeconds() - oldTime.getSeconds());
    number.textContent = mid;
    oldTime = timeNow;
 

    if (cookie.width === 200) {
        cookie.width = 300;
        cliker.textContent++;
    } else {
        cookie.width = 200;
        cliker.textContent++;
    }
    
     
};



let count = document.createElement("div");
let number = document.createElement("span");
number.id = "number";
number.textContent = 0;
count.className = "clicker__status";
count.id = "count";
count.textContent = "Скорость клика ";
document.children[0].children[1].children[1].children[0].children[0].children[0].append(count);
document.children[0].children[1].children[1].children[0].children[0].children[0].children[1].append(number);


setInterval(() => cliker.textContent = 0, 60000);