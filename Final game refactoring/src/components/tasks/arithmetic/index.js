function arithmetic() {
	let operators = ['*', '+', '-', '/'];

	let firstNum = Math.floor(Math.random() * 11) + 1;
	let secondNum = Math.floor(Math.random() * 11) + 1;

	let operator = _.sample(operators);
	let res;

	switch (operator) {
		case '*':
			res = firstNum * secondNum;
			break;
		case '+':
			res = firstNum + secondNum;
			break;
		case '-':
			res = (firstNum > secondNum) ? firstNum - secondNum : secondNum - firstNum;
			break;
		case '/':
			res = Math.floor(Math.random() * 11);
			firstNum = res * secondNum;
			break;
	}

	let div = document.getElementById("task");
	div.className = "taskForm arithmetic";

	let str = (firstNum > secondNum) 
		? firstNum + " " + operator + " " + secondNum 
		: secondNum + " " + operator + " " + firstNum

	div.innerHTML ="<h3>Please, calculate: </h3><p class=\"condition\">" + str 
	+ " = </p><input autofocus type=\"text\" id=\"answer\" class=\"taskAnswer\" placeholder=\"number\">";
			
	return res;
}

function runTask() {
	let res = arithmetic();
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

export { arithmetic as arithmetic };