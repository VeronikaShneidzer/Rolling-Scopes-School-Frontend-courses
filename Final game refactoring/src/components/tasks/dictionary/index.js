import { dictionaryRusEn as dictionaryRusEn } from "./data";

function dictionary() {
	let words = _.sample(dictionaryRusEn);
	let en = _.sample(words["en"]);
	let rus = words["rus"];

	let div = document.getElementById("task");
	div.className = "taskForm dictionary";

	div.innerHTML ="<h3>Please, translate the word: </h3><p class=\"condition\">" + en + 
	" is </p><input autofocus type=\"text\" id=\"answer\" class=\"taskAnswer\" placeholder=\"word\">";

	return rus;
}

function runTask() {
	let rus = dictionary();
	let solved = false;
	let runEvent = (func) => {
		let temp = document.querySelector('#answer').value;

		rus.some((word) => {
			if (temp == word) solved = true;
		});

		let blockWithAnswer = document.getElementById("getRightAnswer");

		if (solved) {
			blockWithAnswer.innerHTML = "Your solution is right!";
		}
		else {
			blockWithAnswer.innerHTML = "Your solution is wrong! Right answer is " + rus.join(', ') + ".";
		}
	}

	document.getElementById("taskButton").addEventListener('click', runEvent);
}

window.onload = () => runTask();

export { dictionary as dictionary };