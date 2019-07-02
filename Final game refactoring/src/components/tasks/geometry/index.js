function geometry() {
	let task = _.sample(['square', 'rectangle', 'right triangle']);
	let firstNum = Math.floor(Math.random() * 11);
	let secondNum = Math.floor(Math.random() * 11);
	let res;
	let str = '';

	switch (task) {
		case 'square':
			str = firstNum + " and " + firstNum;
			res = firstNum * firstNum;
			break;
		case 'rectangle':
			str = firstNum + " and " + secondNum;
			res = firstNum * secondNum;
			break;
		case 'right triangle':
			str = firstNum + " and " + secondNum;
			res = firstNum * secondNum / 2;
			break;
	}

	let div = document.getElementById("task");
	div.className = "taskForm geometry";

	div.innerHTML ="<h3>Please, calculate the area of geometry figure: </h3><p class=\"condition\">what is the area of "
	+ task +" with sides "+str+"?</p><input autofocus type=\"text\" id=\"answer\" class=\"taskAnswer\" placeholder=\"number\">";

	return res;
}

function runTask() {
	let res = geometry();
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

export { geometry as geometry };