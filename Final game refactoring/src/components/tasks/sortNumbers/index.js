function sortNumbers() {
	let arr = new Array(5);
	arr = arr.fill(0).map((item) => Math.floor(Math.random() * 10));

	let div = document.getElementById("task");
	div.className = "taskForm sortNumbers";

	div.innerHTML ="<h3>Please, sort following numbers and write them from \",\": </h3><p class=\"condition\">" + 
	arr.join(' ') + "</p>" + 
	"<input autofocus type=\"text\" id=\"answer\" class=\"taskAnswer\" placeholder=\"number\">";

	let res = arr.sort().join(',');

	return res;
}

function runTask() {
	let res = sortNumbers();
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

export { sortNumbers as sortNumbers };