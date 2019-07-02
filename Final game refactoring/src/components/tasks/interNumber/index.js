function interNumber() {
	let num = Math.floor(Math.random() * 1000000);
	let res = num;

	let div = document.getElementById("task");
	div.className = "taskForm interNumber"

	div.innerHTML ="<h3>Please, inter the number: </h3><p class=\"condition\">" + num 
	+ "</p><input autofocus type=\"text\" id=\"answer\" class=\"taskAnswer\" placeholder=\"number\">";
			
	return res;
}

function runTask() {
	let res = interNumber();
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

export { interNumber as interNumber };