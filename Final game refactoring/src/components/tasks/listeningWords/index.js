function listeningWords() {
	let animal = _.sample(['badger', 'cat', 'cow', 'dog', 'donkey', 'duck', 'hen', 'monkey', 'owl', 'rabbit']);
	let synth = window.speechSynthesis;
	let word = new SpeechSynthesisUtterance(animal);

	let div = document.getElementById("task");
	div.className = "taskForm listeningWords";

	div.innerHTML ="<h3>Please, enter the listened word: </h3><p class=\"condition\">" + 
	"<img id=\"runWord\" src=\"./images/run.png\">" + 
	"</p><input autofocus type=\"text\" id=\"answer\" class=\"taskAnswer\" placeholder=\"word\">";

	document.getElementById("runWord").addEventListener('click', (event) => {
		synth.speak(word);
	});

	let res = animal;
			
	return res;
}

function runTask() {
	let res = listeningWords();
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

export { listeningWords as listeningWords };