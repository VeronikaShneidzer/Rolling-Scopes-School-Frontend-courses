function equation() {
	let firstNum = Math.floor(Math.random() * 10);
	let secondNum = Math.floor(Math.random() * 10);

	let res;

	if (+firstNum == +secondNum) res = '=';
	else if (+firstNum > +secondNum) res = '>';
	else res = '<';

	let div = document.getElementById("task");
	div.className = "taskForm equation";

	div.innerHTML ="<h3>Please, inter right symbol (=, >, <): </h3><p class=\"condition\">" + firstNum + 
	"<input autofocus type=\"text\" id=\"answer\" class=\"taskAnswer\" placeholder=\"=, >, <\">" + secondNum + "</p>";
	
	return res;
}

function runTask() {
	let res = equation();
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

export { equation as equation };