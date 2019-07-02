import { KeyboardEvent as KeyboardEvent } from "./../../settings";
import { numberCounts, sortNumbers, animalsIcons, progression, time, capitals, 
	colorOfBlock, geometry, equation, interNumber, interWord, numberSystems, 
	listeningWords, dictionary, arithmetic } from '../../components/tasks/index';

export default class Task {
	constructor(colorOfHero) {
		this.colorOfHero;
		this.isTaskSolved = false;
		this.task = ['arithmetic',   'dictionary',  'listeningWords', 'numberSystems', 'interWord', 
					  'interNumber', 'equation',    'geometry',       'colorOfBlock',  'capitals',     
					  'time',        'progression', 'animalsIcons',   'sortNumbers',   'numberCounts'];
	}

	addModalwithTask(colorOfHero) {
		return new Promise((resolve, reject) => {
			this.colorOfHero = colorOfHero;
			this.isTaskSolved = false;

			let heroName = JSON.parse(localStorage["heroesName"]);
			let modal = document.getElementById("modalWindow");

			modal.className = "modal taskModal";
			modal.innerHTML = '';
			modal.position = 'relative';
			modal.style.display = "flex";
			modal.style.left = (Math.min(document.documentElement.clientWidth, 1920) - 800)/2 + 'px';
			modal.style.top = (Math.min(document.documentElement.clientHeight, 1080) - 480)/2 + 'px';
			modal.style.width = 800 + 'px';
			document.getElementsByClassName("taskModal")[0].style.background = "url(./../../screens/task/images/overlays1.png) no-repeat";
			modal.style.height = 480 + "px";
    		modal.style["background-size"] = "contain";
			modal.innerHTML = "<div class=\"taskContent\"><img class=\"campImg\" src=\"./../../screens/hero/images/" + heroName + "/" + this.colorOfHero
				+ "/camp.png\" /><div id=\"task\" class=\"taskForm\"></div></div><img id=\"taskButton\" class=\"taskButton\" src=\"./../../screens/task/images/ok.png\" />";

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
		let runEvent = (func) => {
			let temp = document.querySelector('#answer').value;

			document.getElementsByClassName("taskModal")[0].style.display = "none";
			document.getElementsByClassName("taskModal")[0].innerHTML = "";
			if (temp == res) {
				this.isTaskSolved = true;
				resolve();
			}
			else {
				resolve();
			}
		}
		
		document.getElementById("taskButton").addEventListener('click', runEvent);

		let func;
		document.addEventListener('keydown', func = (event) => {
			if (event.keyCode === KeyboardEvent.ENTER) {
				runEvent(func);
				document.removeEventListener('keydown', func);
			}
		});
	}

	numberCounts() {
		return new Promise((resolve, reject) => {
			let res = numberCounts();
			
			this.setResult(res, resolve);
		});
	}

	sortNumbers() {
		return new Promise((resolve, reject) => {
			let res = sortNumbers();
			
			this.setResult(res, resolve);
		});
	}

	animalsIcons() {
		return new Promise((resolve, reject) => {
			let res = animalsIcons();

			this.setResult(res, resolve);
		});
	}

	progression() {
		return new Promise((resolve, reject) => {
			let res = progression();
			
			this.setResult(res, resolve);
		});
	}

	time() {
		return new Promise((resolve, reject) => {
			let res = time();

			this.setResult(res, resolve);
		});
	}

	capitals() {
		return new Promise((resolve, reject) => {
			let res = capitals();

			this.setResult(res, resolve);
		});
	}

	colorOfBlock() {
		return new Promise((resolve, reject) => {
			let res = colorOfBlock();
			
			this.setResult(res, resolve);
		});
	}

	geometry() {
		return new Promise((resolve, reject) => {
			let res = geometry();

			this.setResult(res, resolve);
		});
	}

	equation() {
		return new Promise((resolve, reject) => {
			let res = equation();

			this.setResult(res, resolve);
		});
	}

	interNumber() {
		return new Promise((resolve, reject) => {
			let res = interNumber();

			this.setResult(res, resolve);
		});
	}

	interWord() {
		return new Promise((resolve, reject) => {
			let res = interWord();

			this.setResult(res, resolve);
		});
	}

	numberSystems() {
		return new Promise((resolve, reject) => {
			let res = numberSystems();

			this.setResult(res, resolve);
		});
	}

	listeningWords() {
		return new Promise((resolve, reject) => {
			let res = listeningWords();

			this.setResult(res, resolve);
		});
	}

	dictionary() {
		return new Promise((resolve, reject) => {
			let rus = dictionary();

			let runEvent = (func) => {
				let temp = document.querySelector('#answer').value;
				rus.some((word) => {
					if (temp == word) {
						document.getElementById("modalWindow").style.display = "none";
						document.getElementsByClassName("taskModal")[0].innerHTML = "";
						resolve();
					}
					else {
						resolve();
					}
				});
			}
			
			document.getElementById("taskButton").addEventListener('click', runEvent);

			let func;
			document.addEventListener('keydown', func = (event) => {
				if (event.keyCode === KeyboardEvent.ENTER) {
					runEvent(func);
					document.removeEventListener('keydown', func);
				}
			});
		});
	}

	arithmetic() {
		return new Promise((resolve, reject) => {
			let res = arithmetic();

			this.setResult(res, resolve);
		});
	}

}