function getFormToUser() {	
	return new Promise((resolve, reject) => {
		let modalWindow = document.getElementById("modalWindow");
		modalWindow.className = "modal loadingScreenModal";
		modalWindow.style.display = "block";
		modalWindow.style.left = (Math.min(document.documentElement.clientWidth, 1920) - 500)/2 + 'px';
		modalWindow.style.top = (Math.min(document.documentElement.clientHeight, 1080) - 450) + 'px';

		let form = document.createElement('form');
		modalWindow.appendChild(form);

		let nameInput = document.createElement('p');
		nameInput.style.background = 'url(\'./images/frame.png\') no-repeat';
		nameInput.style["background-size"] = "contain";
		nameInput.innerHTML = '<input type="text" id="nickname" name="Name" placeholder="Nickname" autofocus>';
		form.appendChild(nameInput);

		let button = document.createElement('p');
		button.style["text-align"] = "right";
		button.innerHTML = '<img class="ageLimit" src="./images/18.png" />' + 
		'<img id="startGameButton" class="startGameButton" src="./images/printing.png" />';
		form.appendChild(button);

		activateStartButton(resolve);
    });
}

function activateStartButton(resolve) {
	document.getElementById("startGameButton").addEventListener('click', () => {
		start();
		resolve();
	});

	let func;
    document.getElementsByClassName("loadingScreenModal")[0].addEventListener('keydown', func = (event) => {
		if (event.keyCode === KeyboardEvent.ENTER) {
			start();
			document.getElementsByClassName("loadingScreenModal")[0].removeEventListener('keydown', func);
			resolve();
		}
	});

    let self = this;
	function start() {
		let name = document.querySelector('#nickname').value;
		if (name != "") {
			localStorage.setItem("userName", JSON.stringify(name));
			document.getElementById("modalWindow").innerHTML = '';
			document.getElementById("modalWindow").style.display = 'none';
		}
	}
}

function runExample() {
	getFormToUser();
}

window.onload = () => runExample();

export { getFormToUser };