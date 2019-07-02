function progression() {
	let firstNum = Math.floor(Math.random() * 10);
	let secondNum = Math.floor(Math.random() * 10);

	let res = firstNum + secondNum*5;

	let div = document.getElementById("task");
	div.className = "taskForm progression";

	div.innerHTML ="<h3>Please, calculate the last number: </h3><p class=\"condition\">" + 
	(firstNum + secondNum*1) + ', ' +
	(firstNum + secondNum*2) + ', ' +
	(firstNum + secondNum*3) + ', ' +
	(firstNum + secondNum*4) + ', ' + "</p>" + 
	"<input autofocus type=\"text\" id=\"answer\" class=\"taskAnswer\" placeholder=\"number\">";

	return res;
}

function runTask() {
	let res = progression();
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

export { progression as progression };