import LoadingScreen from "./screens/loadingScreen/index";
import HeroesScreen from "./screens/heroesScreen/index";
import Logic from "./screens/gameLogic/index";

import { settings as settings } from "./settings";

class Game {
	constructor(stage) {
		this.stage = stage;
		this.loadingScreen = new LoadingScreen(this.stage);
		this.heroesScreen = new HeroesScreen(this.stage);
		this.gameLogic = new Logic(this.stage, this.globalLayer);
	}

	start() {
		this.loadingScreen.load()
		.then(() => {
			this.stage.clear();
			return this.heroesScreen.load();
		})
		.then(() => {
			this.stage.destroyChildren();
			return this.gameLogic.start();
		});

		//this.gameLogic.start();
	}
}
var stage, globalLayer;

function initializeKonvaStage() {
    stage = new Konva.Stage({
      container: 'gameField',
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
    });
}

function setVariablesToLocalStorege() {
	localStorage.clear();
	for (let key in settings) {
		if (!localStorage[key]) localStorage.setItem(key, JSON.stringify(settings[key]));
	}
}

function initialize() {
	setVariablesToLocalStorege();
	activateRestartButton();
	startNewGame();
}

function activateRestartButton() {
    function restartGame() {
		document.getElementsByClassName("tableOfRecords")[0].style.display = "none";
		document.getElementById("gameField").style.display = "block";
		stage.clear();
		startNewGame();
    }

	let restartGameButton = document.getElementById("restartGameButton");
	restartGameButton.addEventListener('click', restartGame);
}

function startNewGame() {
	initializeKonvaStage();
	let game = new Game(stage, globalLayer);
    game.start();
}

window.onload = () => initialize();
