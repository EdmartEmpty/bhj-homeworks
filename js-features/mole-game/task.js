let killerCounter = document.getElementById("dead");
let loseCounter = document.getElementById("lost");
for(let i = 1; i < 10; i++){
	let name = "hole";
	let t = document.getElementById(name+i);
	t.onclick = () => {
		if(t.className.includes( 'hole_has-mole' ))
		{
			killerCounter.textContent++;
			console.log(killerCounter.textContent);
		
		}
		else if (!t.className.includes( 'hole_has-mole' )){
			loseCounter.textContent++;
		
			
}
			
		if(+killerCounter.textContent === 10)
			{
			window.alert("Победа!");
			killerCounter.textContent = 0;
			loseCounter.textContent = 0;
			}
		if(+loseCounter.textContent === 5){
				window.alert("Поражение!");
				loseCounter.textContent = 0;
				killerCounter.textContent = 0;
				//window.history.go(0);
			}
				};
		
				};
