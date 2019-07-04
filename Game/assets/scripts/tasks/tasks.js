import { names as names } from "../monsters/data";
import { countries as countries } from "./data";
import { dictionaryRusEn as dictionaryRusEn } from "./data";

export default class Task {
	constructor(colorOfHero) {
		this.colorOfHero;
		this.solved = false;
		this.task = ['arithmetic',   'dictionary',  'listeningWords', 'numberSystems', 'interWord', 
					  'interNumber', 'equation',    'geometry',       'colorOfBlock',  'capitals',     
					  'time',        'progression', 'animalsIcons',   'sortNumbers',   'numberCounts'];
	}

	addModalwithTask(colorOfHero) {
		return new Promise((resolve, reject) => {
			this.colorOfHero = colorOfHero;
			this.solved = false;
			let hero = JSON.parse(localStorage["heroes_name"]);
			let modal = document.getElementById("modal_window");

			modal.className = "modal task_modal";
			modal.innerHTML = '';
			modal.position = 'relative';
			modal.style.display = "flex";
			modal.style.left = (Math.min(document.documentElement.clientWidth, 1920) - 800)/2 + 'px';
			modal.style.top = (Math.min(document.documentElement.clientHeight, 1080) - 480)/2 + 'px';
			modal.style.width = 800 + 'px';
			document.getElementsByClassName("task_modal")[0].style.background = "url(./assets/images/battle/overlays1.png) no-repeat";
			modal.style.height = 480 + "px";
    		modal.style["background-size"] = "contain";
			modal.innerHTML = "<div class=\"task_content\"><img class=\"camp_img\" src=\"./assets/images/heroes/" + hero + "/" + this.colorOfHero
				+ "/camp.png\" /><div id=\"task\" class=\"task_form\"></div></div><img id=\"task_button\" class=\"taskButton\" src=\"./assets/images/battle/ok.png\" />";

			let task = _.sample(this.task);

			switch(task) {
				case 'arithmetic': 
					this.arithmetic().then(() => { resolve(); });
					break;
				case 'numberSystems': 
					this.numberSystems().then(() => { resolve(); });
					break;
				case 'interWord': 
					this.interWord().then(() => { resolve(); });
					break;
				case 'interNumber': 
					this.interNumber().then(() => { resolve(); });
					break;
				case 'equation': 
					this.equation().then(() => { resolve(); });
					break;
				case 'geometry': 
					this.geometry().then(() => { resolve(); });
					break;
				case 'colorOfBlock': 
					this.colorOfBlock().then(() => { resolve(); });
					break;
				case 'capitals': 
					this.capitals().then(() => { resolve(); });
					break;
				case 'time': 
					this.time().then(() => { resolve(); });
					break;
				case 'progression': 
					this.progression().then(() => { resolve(); });
					break;
				case 'animalsIcons': 
					this.animalsIcons().then(() => { resolve(); });
					break;
				case 'sortNumbers': 
					this.sortNumbers().then(() => { resolve(); });
					break;
				case 'dictionary': 
					this.dictionary().then(() => { resolve(); });
					break;
				case 'listeningWords': 
					this.listeningWords().then(() => { resolve(); });
					break;
				case 'numberCounts': 
					this.numberCounts().then(() => { resolve(); });
					break;
			}
		});
	}

	setResult(res, resolve) {
		let self = this;
		function runEvent() {
			let temp = document.querySelector('#answer').value;
			if (temp == res) {
				self.solved = true;
				document.getElementsByClassName("task_modal")[0].style.display = "none";
				document.getElementsByClassName("task_modal")[0].innerHTML = "";
				resolve();
			}
			else {
				document.getElementsByClassName("task_modal")[0].style.display = "none";
				document.getElementsByClassName("task_modal")[0].innerHTML = "";
				resolve();
			}
		}
		
		document.getElementById("task_button").addEventListener('click', runEvent);

		document.addEventListener('keydown', function(event) {
			if (event.keyCode === KeyboardEvent.ENTER) runEvent();
		});
	}

	numberCounts() {
		return new Promise((resolve, reject) => {
			let arr = new Array(10);
			arr = arr.fill(0).map((item) => Math.floor(Math.random() * 10));
			let number = Math.floor(Math.random() * 10);
			let res = 0;
			arr.forEach((item) => {
				if (item == number) res++;
			});
			console.log(arr);
			console.log(res);

			let div = document.getElementById("task");
			div.className = "task_form numberCounts";

			div.innerHTML ="<h3>Please, write how much is the number "+number+" in the text: </h3><p class=\"condition\">" + 
			arr.join(' ') + "</p>" + 
			"<input autofocus type=\"text\" id=\"answer\" class=\"taskAnswer\" placeholder=\"number\">";
			
			this.setResult(res, resolve);
		});
	}

	sortNumbers() {
		return new Promise((resolve, reject) => {
			let arr = new Array(5);
			arr = arr.fill(0).map((item) => Math.floor(Math.random() * 10));

			let div = document.getElementById("task");
			div.className = "task_form sortNumbers";

			div.innerHTML ="<h3>Please, sort following numbers and write them from space: </h3><p class=\"condition\">" + 
			arr.join(' ') + "</p>" + 
			"<input autofocus type=\"text\" id=\"answer\" class=\"taskAnswer\" placeholder=\"number\">";

			let res = arr.sort().join(' ');
			
			this.setResult(res, resolve);
		});
	}

	animalsIcons() {
		return new Promise((resolve, reject) => {
			let animal = _.sample(['badger', 'cat', 'cow', 'dog', 'donkey', 'duck', 'hen', 'monkey', 'owl', 'rabbit']);
			let res = animal;

			let div = document.getElementById("task");
			div.className = "task_form animalsIcons";

			div.innerHTML ="<h3>Please, answert what is on image (badger, cat, cow, dog, donkey, duck, hen, monkey, owl, rabbit): </h3><p class=\"condition\">" + 
			"<img src=\"https://raw.githubusercontent.com/jonnymccullagh/animal_icons/master/PNG/"+animal+".png\">" + 
			"</p><input autofocus type=\"text\" id=\"answer\" class=\"taskAnswer\" placeholder=\"word\">";

			this.setResult(res, resolve);
		});
	}

	progression() {
		return new Promise((resolve, reject) => {
			let firstNum = Math.floor(Math.random() * 10);
			let secondNum = Math.floor(Math.random() * 10);

			let res = firstNum + secondNum*5;

			let div = document.getElementById("task");
			div.className = "task_form progression";

			div.innerHTML ="<h3>Please, calculate the last number: </h3><p class=\"condition\">" + 
			(firstNum+ secondNum*1) + ', ' +
			(firstNum+ secondNum*2) + ', ' +
			(firstNum+ secondNum*3) + ', ' +
			(firstNum+ secondNum*4) + ', ' + "</p>" + 
			"<input autofocus type=\"text\" id=\"answer\" class=\"taskAnswer\" placeholder=\"number\">";
			
			this.setResult(res, resolve);
		});
	}

	time() {
		return new Promise((resolve, reject) => {
			let num = Math.floor(Math.random() * 11); //relace to 61
			let res = 60 * num;

			let div = document.getElementById("task");
			div.className = "task_form time";

			div.innerHTML ="<h3>Please, calculate how much seconds in minutes: </h3><p class=\"condition\">"+num+
			" minutes is <input autofocus type=\"text\" id=\"answer\" class=\"taskAnswer\" placeholder=\"number\"> seconds.</p>";

			this.setResult(res, resolve);
		});
	}

	capitals() {
		return new Promise((resolve, reject) => {
			let word = _.sample(countries);
			let country = word["country"];
			let res = word["city"];

			let div = document.getElementById("task");
			div.className = "task_form capitals";

			div.innerHTML ="<h3>Please, inter the capital of country (or null). </h3><p class=\"condition\">What is the capital of "+
			country+"? </p><input autofocus type=\"text\" id=\"answer\" class=\"taskAnswer\" placeholder=\"city\">";
			
			this.setResult(res, resolve);
		});
	}

	colorOfBlock() {
		return new Promise((resolve, reject) => {
			let res = _.sample(['white', 'grey', 'yellow', 'orange', 'red', 'pink', 'violet', 'green', 'blue']);

			let div = document.getElementById("task");
			div.className = "task_form colorOfBlock";

			div.innerHTML ="<h3>Please, write the color of block. </h3><p class=\"condition\"></p><input autofocus type=\"text\" id=\"answer\" class=\"taskAnswer\" placeholder=\"color\">";

			document.getElementsByClassName("condition")[0].style.background = res;
			
			this.setResult(res, resolve);
		});
	}

	geometry() {
		return new Promise((resolve, reject) => {
			let task = _.sample(['square', 'rectangle', 'right triangle']);
			let firstNum = Math.floor(Math.random() * 11);
			let secondNum = Math.floor(Math.random() * 11);
			let res;
			let str = '';

			switch (task) {
				case 'square':
					str = firstNum + " and " + firstNum;
					res = firstNum * firstNum;
					break;
				case 'rectangle':
					str = firstNum + " and " + secondNum;
					res = firstNum * secondNum;
					break;
				case 'right triangle':
					str = firstNum + " and " + secondNum;
					res = firstNum * secondNum / 2;
					break;
			}

			let div = document.getElementById("task");
			div.className = "task_form geometry";

			div.innerHTML ="<h3>Please, calculate the area of geometry figure: </h3><p class=\"condition\">what is the area of "
			+ task +" with sides "+str+"?</p><input autofocus type=\"text\" id=\"answer\" class=\"taskAnswer\" placeholder=\"number\">";

			this.setResult(res, resolve);
		});
	}

	equation() {
		return new Promise((resolve, reject) => {
			let firstNum = Math.floor(Math.random() * 10);
			let secondNum = Math.floor(Math.random() * 10);

			let res;

			if (+firstNum == +secondNum) res = '=';
			else if (+firstNum > +secondNum) res = '>';
			else res = '<';

			let div = document.getElementById("task");
			div.className = "task_form equation";

			div.innerHTML ="<h3>Please, inter right symbol (=, >, <): </h3><p class=\"condition\">" + firstNum + 
			"<input autofocus type=\"text\" id=\"answer\" class=\"taskAnswer\" placeholder=\"=, >, <\">" + secondNum + "</p>";
			
			this.setResult(res, resolve);
		});
	}

	interNumber() {
		return new Promise((resolve, reject) => {
			let num = Math.floor(Math.random() * 1000000);
			let res = num;

			let div = document.getElementById("task");
			div.className = "task_form interNumber"

			div.innerHTML ="<h3>Please, inter the number: </h3><p class=\"condition\">" + num 
			+ "</p><input autofocus type=\"text\" id=\"answer\" class=\"taskAnswer\" placeholder=\"number\">";
			this.setResult(res, resolve);
		});
	}

	interWord() {
		return new Promise((resolve, reject) => {
			let word = _.sample(names);
			let res = word;

			let div = document.getElementById("task");
			div.className = "task_form interWord";

			div.innerHTML ="<h3>Please, inter the word: </h3><p class=\"condition\">" + word 
			+ "</p><input autofocus type=\"text\" id=\"answer\" class=\"taskAnswer\" placeholder=\"word\">";
			this.setResult(res, resolve);
		});
	}

	numberSystems() {
		return new Promise((resolve, reject) => {
			let firstNum = _.sample([2, 8, 16, 10]);
			let secondNum = Math.floor(Math.random() * 11);

			let res = secondNum.toString(firstNum);

			let div = document.getElementById("task");
			div.className = "task_form numberSystems";

			div.innerHTML ="<h3>Please, translate a number from 10 to another number system: </h3><p class=\"condition\">" + 
			secondNum + " in " + firstNum + " = </p><input autofocus type=\"text\" id=\"answer\" class=\"taskAnswer\" placeholder=\"number\">";

			this.setResult(res, resolve);
		});
	}

	listeningWords() {
		return new Promise((resolve, reject) => {
			let animal = _.sample(['badger', 'cat', 'cow', 'dog', 'donkey', 'duck', 'hen', 'monkey', 'owl', 'rabbit']);
			let synth = window.speechSynthesis;
			let word = new SpeechSynthesisUtterance(animal);

			let div = document.getElementById("task");
			div.className = "task_form listeningWords";

			div.innerHTML ="<h3>Please, enter the listened word: </h3><p class=\"condition\">" + 
			"<img id=\"run_word\" src=\"./assets/images/battle/run.png\">" + 
			"</p><input autofocus type=\"text\" id=\"answer\" class=\"taskAnswer\" placeholder=\"word\">";

			document.getElementById("run_word").addEventListener('click', (event) => {
				synth.speak(word);
			});

			let res = animal;

			this.setResult(res, resolve);
		});
	}

	dictionary() {
		return new Promise((resolve, reject) => {
			let words = _.sample(dictionaryRusEn);
			let en = _.sample(words["en"]);
			let rus = words["rus"];

			let div = document.getElementById("task");
			div.className = "task_form dictionary";

			div.innerHTML ="<h3>Please, translate the word: </h3><p class=\"condition\">" + en + 
			" is </p><input autofocus type=\"text\" id=\"answer\" class=\"taskAnswer\" placeholder=\"word\">";

			document.getElementById("task_button").addEventListener('click', (event) => {
				let temp = document.querySelector('#answer').value;
				rus.some((word) => {
					if (temp == word) {
						document.getElementById("modal_window").style.display = "none";
						document.getElementsByClassName("task_modal")[0].innerHTML = "";
						resolve();
					}
				});
			});
		});
	}

	arithmetic() {
		return new Promise((resolve, reject) => {
			let operators = ['*', '+', '-', '/'];

			let firstNum = Math.floor(Math.random() * 11) + 1;
			let secondNum = Math.floor(Math.random() * 11) + 1;

			let operator = _.sample(operators);
			let res;

			switch (operator) {
				case '*':
					res = firstNum * secondNum;
					break;
				case '+':
					res = firstNum + secondNum;
					break;
				case '-':
					res = (firstNum > secondNum) ? firstNum - secondNum : secondNum - firstNum;
					break;
				case '/':
					res = Math.floor(Math.random() * 11);
					firstNum = res * secondNum;
					break;
			}

			let div = document.getElementById("task");
			div.className = "task_form arithmetic";

			let str = (firstNum > secondNum) 
				? firstNum + " " + operator + " " + secondNum 
				: secondNum + " " + operator + " " + firstNum

			div.innerHTML ="<h3>Please, calculate: </h3><p class=\"condition\">" + str 
			+ " = </p><input autofocus type=\"text\" id=\"answer\" class=\"taskAnswer\" placeholder=\"number\">";

			this.setResult(res, resolve);
		});
	}

}