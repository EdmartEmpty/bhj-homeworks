let dropList = document.querySelectorAll(".dropdown__list");
let dropValue = document.querySelectorAll(".dropdown__value");
let dropItemColl = document.querySelectorAll(".dropdown__item");
let linkColl = document.querySelectorAll(".dropdown__link");


dropValue.forEach((el,index) => el.addEventListener("click", function(e) {
	
	dropList[index].classList.toggle("dropdown__list_active");
	}));

linkColl.forEach((link) => link.addEventListener("click",(event) => {
		event.preventDefault();
	
		console.log();
	}))
// for (let i= 0; i<dropValue.length; i++){dropValue[i].onclick = (e) => {
//     let target = e.target;
// 	 dropList[i].classList.toggle("dropdown__list_active");
	 

// 	[...linkColl].forEach((el)=> el.onclick = (e) => {
// 		e.preventDefault();
		
// 		let link = e.target;
// 		target.textContent = link.textContent;
// 		dropList[i].classList.remove("dropdown__list_active");
// }
// 	);
    
// }}


	linkColl.forEach((link) => link.addEventListener("click", function(event) {
		
        event.preventDefault();
    	let node = link.closest("div");
	
	
	node.querySelector(".dropdown__value").textContent = event.target.textContent;
	
	node.querySelector(".dropdown__list").classList.remove("dropdown__list_active");
	  
    }));
