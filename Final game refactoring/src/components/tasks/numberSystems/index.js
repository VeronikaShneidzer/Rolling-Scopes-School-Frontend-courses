function numberSystems() {
	let firstNum = _.sample([2, 8, 16, 10]);
	let secondNum = Math.floor(Math.random() * 11);

	let res = secondNum.toString(firstNum);

	let div = document.getElementById("task");
	div.className = "taskForm numberSystems";

	div.innerHTML ="<h3>Please, translate a number from 10 to another number system: </h3><p class=\"condition\">" + 
	secondNum + " in " + firstNum + " = </p><input autofocus type=\"text\" id=\"answer\" class=\"taskAnswer\" placeholder=\"number\">";

	return res;
}

function runTask() {
	let res = numberSystems();
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

export { numberSystems as numberSystems };