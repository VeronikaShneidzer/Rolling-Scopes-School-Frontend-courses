function colorOfBlock() {
	let res = _.sample(['white', 'grey', 'yellow', 'orange', 'red', 'pink', 'violet', 'green', 'blue']);

	let div = document.getElementById("task");
	div.className = "taskForm colorOfBlock";

	div.innerHTML ="<h3>Please, write the color of block. </h3><p class=\"condition\"></p><input autofocus type=\"text\" id=\"answer\" class=\"taskAnswer\" placeholder=\"color\">";

	document.getElementsByClassName("condition")[0].style.background = res;
			
	return res;
}

function runTask() {
	let res = colorOfBlock();
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

export { colorOfBlock as colorOfBlock };