class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');

    this.reset();

    this.registerEvents();
  }

  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
  }

  registerEvents() {
    let body = document.querySelector("body");
	  let word = body.querySelector(".word");
	  let playerWord = "";
	  body.addEventListener("keyup",(e)=> {
				playerWord += e.key;
				if(e.key.toLowerCase() ===  this.currentSymbol.textContent){
					 this.success();
} else {
	this.fail();
}		
  });

  }

  success() {
    if(this.currentSymbol.classList.contains("symbol_current")) this.currentSymbol.classList.remove("symbol_current");
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;

    if (this.currentSymbol !== null) {
      this.currentSymbol.classList.add('symbol_current');
      return;
    }

    if (++this.winsElement.textContent === 10) {
      alert('Победа!');
      this.reset();
    }
    this.setNewWord();
  }

  fail() {
    if (++this.lossElement.textContent === 5) {
      alert('Вы проиграли!');
      this.reset();
    }
    this.setNewWord();
  }

  setNewWord() {
    const word = this.getWord();

    this.renderWord(word);
  }

  getWord() {
    const words = [
        'bob',
        'awesome',
        'netology',
        'hello',
        'kitty',
        'rock',
        'youtube',
        'popcorn',
        'cinema',
        'love',
        'javascript'
      ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? 'symbol_current': ''}">${s}</span>`
      )
      .join('');
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  }
}

new Game(document.getElementById('game'))

let taimer =  document.createElement("p");
let displayTaimer = document.createElement("span");



taimer.textContent = "Таймер обратного отсчёта :";
taimer.id = "taimer";

document.querySelector(".status").append(taimer);
 taimer.append(displayTaimer);
let symbolLength = document.querySelectorAll(".symbol");
 displayTaimer.textContent = document.querySelectorAll(".symbol").length;
displayTaimer.textContent = document.querySelectorAll(".symbol").length
 let t  = setInterval(()=> {displayTaimer.textContent--
				if(+displayTaimer.textContent === 0){
alert("Вы проиграли");
clearInterval(t);
}
},1000);
