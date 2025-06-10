let dropList = document.getElementsByClassName("dropdown__list");
let dropValue = document.getElementsByClassName("dropdown__value");
let dropItemColl = document.getElementsByClassName("dropdown__item");
let linkColl = document.getElementsByClassName("dropdown__link");
 



for (let i= 0; i<dropValue.length; i++){dropValue[i].onclick = (e) => {
    let target = e.target;
	 dropList[i].classList.toggle("dropdown__list_active");
	[...linkColl].forEach((el)=> el.onclick = (e) => {
		e.preventDefault();
		target.textContent = e.target.textContent;
		dropList[i].classList.remove("dropdown__list_active");
}
	);
    
}}


