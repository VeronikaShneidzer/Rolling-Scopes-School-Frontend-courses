import { words as words } from "./data";

function interWord() {
	let word = _.sample(words);
	let res = word;

	let div = document.getElementById("task");
	div.className = "taskForm interWord";

	div.innerHTML ="<h3>Please, inter the word: </h3><p class=\"condition\">" + word 
	+ "</p><input autofocus type=\"text\" id=\"answer\" class=\"taskAnswer\" placeholder=\"word\">";
			
	return res;
}

function runTask() {
	let res = interWord();
	let solved;
	let runEvent = (func) => {
		let temp = document.querySelector('#answer').value;

		solved = (temp == res);

		let blockWithAnswer = document.getElementById("getRightAnswer");

		if (solved) {
			blockWithAnswer.innerHTML = "Your solution is right!";
		}
		else {
			blockWithAnswer.innerHTML = "Your solution is wrong! Right answer is " + res + ".";
		}
	}

	document.getElementById("taskButton").addEventListener('click', runEvent);
}

window.onload = () => runTask();

export { interWord as interWord };