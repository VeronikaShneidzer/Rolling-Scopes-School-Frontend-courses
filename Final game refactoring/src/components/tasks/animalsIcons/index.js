function animalsIcons() {
	let animal = _.sample(['badger', 'cat', 'cow', 'dog', 'donkey', 'duck', 'hen', 'monkey', 'owl', 'rabbit']);
	let res = animal;

	let div = document.getElementById("task");
	div.className = "taskForm animalsIcons";

	div.innerHTML ="<h3>Please, answert what is on image (badger, cat, cow, dog, donkey, duck, hen, monkey, owl, rabbit): </h3><p class=\"condition\">" + 
	"<img src=\"https://raw.githubusercontent.com/jonnymccullagh/animal_icons/master/PNG/"+animal+".png\">" + 
	"</p><input autofocus type=\"text\" id=\"answer\" class=\"taskAnswer\" placeholder=\"word\">";

	return res;
}

function runTask() {
	let res = animalsIcons();
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

export { animalsIcons as animalsIcons };