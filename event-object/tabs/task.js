  let tabColl = document.getElementsByClassName("tab");
	let contentColl = document.getElementsByClassName("tab__content");
[...tabColl].forEach((tab,indexTab) => tab.onclick = (elem) => {
	
	let down = [];
[...tabColl].forEach((s) => s.classList.remove("tab_active"));
let target = elem.target;
target.classList.add("tab_active");
[...contentColl].forEach((content,indexContent,arr) => {
	[...contentColl].forEach((a) => a.classList.remove("tab__content_active"));
	
	down.push(indexContent);
	
	if(down.indexOf(indexTab) !== -1){
		arr[down.indexOf(indexTab)].classList.add("tab__content_active");
}
})
});

