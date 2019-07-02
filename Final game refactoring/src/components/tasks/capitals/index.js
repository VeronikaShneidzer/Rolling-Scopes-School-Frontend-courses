import { countriesCapitals as countriesCapitals } from "./data";

function capitals() {
	let word = _.sample(countriesCapitals);
	let country = word["country"];
	let res = word["city"];

	let div = document.getElementById("task");
	div.className = "taskForm capitals";

	div.innerHTML ="<h3>Please, inter the capital of country (or null). </h3><p class=\"condition\">What is the capital of "+
	country+"? </p><input autofocus type=\"text\" id=\"answer\" class=\"taskAnswer\" placeholder=\"city\">";
	
	return res;
}

function runTask() {
	let res = capitals();
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

export { capitals as capitals };