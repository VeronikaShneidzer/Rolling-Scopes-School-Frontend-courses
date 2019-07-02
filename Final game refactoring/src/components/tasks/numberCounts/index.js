function numberCounts() {
	let arr = new Array(10);
	arr = arr.fill(0).map((item) => Math.floor(Math.random() * 10));

	let number = Math.floor(Math.random() * 10);
	let res = 0;

	arr.forEach((item) => {
		if (item == number) res++;
	});

	let div = document.getElementById("task");
	div.className = "taskForm numberCounts";
	
	div.innerHTML = "<h3>Please, write how much is the number " + number + " in the text: </h3><p class=\"condition\">" + 
	arr.join(' ') + "</p>" + "<input autofocus type=\"text\" id=\"answer\" class=\"taskAnswer\" placeholder=\"number\">";

	return res;
}

function runTask() {
	let res = numberCounts();
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

export { numberCounts as numberCounts };