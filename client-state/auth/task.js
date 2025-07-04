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
		let startLink = document.querySelector("body").outerHTML;
		 document.querySelector("body").innerHTML = "Неверный логин и пароль";
		setTimeout(() => document.querySelector("body").outerHTML =  startLink ,3000);
}

		
console.log(response)};
	xhr.send(data);
	e.currentTarget.reset();
	
})
