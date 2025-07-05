let r = document.createElement("div");
r.style.width = "30px";
r.style.height = "20px";
r.style.backgroundColor = "black";
r.style.color = "white";
r.style.borderRadius = "10px";
r.style.fontSize = "20px"; 
r.style.position = "absolute";
r.style.top = "70px";
r.style.right = "430px";
r.innerHTML = "&times;";
r.style.textAlign = "center";
document.querySelector(".welcome").appendChild(r);

r.addEventListener("click", () => {
    document.querySelector(".welcome").classList.remove("welcome_active");
    document.querySelector(".signin").classList.add("signin_active");
	localStorage.clear();
})

if(localStorage.getItem("user")){
	document.querySelector(".welcome").classList.add("welcome_active");
			document.getElementById("user_id").textContent = localStorage.getItem("user");
			document.querySelector(".signin").classList.remove("signin_active");
			
}


let form = document.getElementById("signin__form");


form.addEventListener("submit", (e) => {
	e.preventDefault();
	let data = new FormData(form);
	let xhr = new XMLHttpRequest();
	xhr.open("POST","https://students.netoservices.ru/nestjs-backend/auth");
	xhr.onload = () => {
		let response = JSON.parse(xhr.response);
			if(response.success === true){
			document.querySelector(".welcome").classList.add("welcome_active");
			document.getElementById("user_id").textContent = response.user_id;
			document.querySelector(".signin").classList.remove("signin_active");
			localStorage.setItem("user",response.user_id);
} else if(response.success === false) {
		let l = document.createElement("div");
		document.getElementById("signin").appendChild(l);
		l.textContent = "Неверный логин и пароль"
		setTimeout(()=> l.remove(),4000);
}

		
console.log(response)};
	xhr.send(data);
	e.currentTarget.reset();
	
})
