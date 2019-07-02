function time() {
	let num = Math.floor(Math.random() * 11);
	let res = 60 * num;

	let div = document.getElementById("task");
	div.className = "taskForm time";

	div.innerHTML ="<h3>Please, calculate how much seconds in minutes: </h3><p class=\"condition\">"+num+
	" minutes is <input autofocus type=\"text\" id=\"answer\" class=\"taskAnswer\" placeholder=\"number\"> seconds.</p>";

	return res;
}

function runTask() {
	let res = time();
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

export { time as time };