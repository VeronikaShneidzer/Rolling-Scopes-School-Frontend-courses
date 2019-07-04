import Loading_screen from "./loading_screen/loading_screen";
import Heroes_loading_screen from "./heroes_loading_screen/heroes_loading_screen";
import Logic from "./game_logic/logic";

import { settings as settings } from "./settings";

class Game {
	constructor(stage) {
		this.stage = stage;
		this.loading_screen = new Loading_screen(this.stage);
		this.heroes_loading_screen = new Heroes_loading_screen(this.stage);
		this.gameLogic = new Logic(this.stage, this.global_layer);
	}

	start() {
		this.loading_screen.load()
		.then(() => {
			return this.heroes_loading_screen.load();
		})
		.then(() => {
			this.stage.destroyChildren();
			return this.gameLogic.start();
		});

		//this.gameLogic.start();
	}
}
var game, stage, global_layer;

function initializeKonvaLayers() {
    stage = new Konva.Stage({
      container: 'game-field',
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
    });
}

function setToLocalStorege() {
	for (let key in settings) {
		if (!localStorage[key]) localStorage.setItem(key, JSON.stringify(settings[key]));
	}
}

function initialize() {
	setToLocalStorege();
	newGame();
}

function newGame() {
	initializeKonvaLayers();
	game = new Game(stage, global_layer);
    game.start();

    function runEvent() {
		document.getElementsByClassName("tableOfRecords")[0].style.display = "none";
		document.getElementById("game-field").style.display = "block";
		newGame();
    }

	let restart_game_button = document.getElementById("restart_game_button");
	restart_game_button.addEventListener('click', runEvent);

 //    document.getElementsByClassName("task_modal")[0].addEventListener('keydown', function(event) {
	// 	if (event.keyCode === KeyboardEvent.ENTER) runEvent();
	// });
}

window.onload = (function() {    
	initialize();
})();