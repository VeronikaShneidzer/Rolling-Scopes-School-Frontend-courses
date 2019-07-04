import { data as data } from "./data";
import { KeyboardEvent as KeyboardEvent } from "../settings";

export default class Loading_screen {
	constructor(stage) {
		this.data = data;
		this.stage = stage;

		this.global_layer = new Konva.Layer();
		this.scaleConst = Math.min(document.documentElement.clientHeight, 842)/842;
	}

	load() {
		return this.getLoadScreen();
	}

	getLoadScreen() {
		return new Promise((resolve, reject) => {
			this.drawBackground()
			.then(() => {
				this.drawOverlays();
				this.drawTextInfo();
				this.drawFire();
				return this.getFormToUser();

			})
			.then(() => {
				resolve();
			})
		});
	}

	getFormToUser() {	
		return new Promise((resolve, reject) => {
			let modal = document.getElementById("modal_window");
			modal.className = "modal loading_screen_modal";
			modal.style.display = "block";
			modal.style.left = (Math.min(document.documentElement.clientWidth, 1920) - 500)/2 + 'px';
			modal.style.top = (Math.min(document.documentElement.clientHeight, 1080) - 450) + 'px';

			let form = document.createElement('form');
			modal.appendChild(form);

			let p = document.createElement('p');
			p.style.background = 'url(\'./assets/images/loading_screen/frame.png\') no-repeat';
			p.style["background-size"] = "contain";
			p.innerHTML = '<input type="text" id="nickname" name="Name" placeholder="Nickname" autofocus>';
			form.appendChild(p);

			let button = document.createElement('p');
			button.style["text-align"] = "right";
			button.innerHTML = '<img class="age_limit" src="./assets/images/loading_screen/18.png" /><img id="start_game_button" class="start-game-button" src="./assets/images/loading_screen/printing.png" />'
			form.appendChild(button);

			start_game_button.addEventListener('click', start);

		 //    document.getElementsByClassName("loading_screen_modal")[0].addEventListener('keydown', function(event) {
			// 	if (event.keyCode === KeyboardEvent.ENTER) start();
			// });

		    let self = this;
			function start() {
				let name = document.querySelector('#nickname').value;
				if (name != "") {
					localStorage.setItem("user_name", JSON.stringify(name));
					document.getElementById("modal_window").innerHTML = '';
					document.getElementById("modal_window").style.display = 'none';
					self.stage.clear();
					resolve();
				}
			}
	    });
	}

	drawTextInfo() {
		let text = this.konvaText(
			"[ Please, add information about yourself. ]", 
			(Math.min(document.documentElement.clientWidth, 1920) - 380)/2, 
			(Math.min(document.documentElement.clientHeight, 1080) - 842*this.scaleConst) + 670*this.scaleConst, 
			380, 
			16, 
			'center', 
			'#d1c184',
			"Ubuntu"
		);

		this.global_layer.add(text);
		this.global_layer.draw();
	}

	drawFire() {
		let image = new Image();
		image.src = "./assets/images/loading_screen/fire.png";
		image.onload = () => {
			let img = this.konvaImage(
				(Math.min(document.documentElement.clientWidth, 1920) - 60)/2, 
				(Math.min(document.documentElement.clientHeight, 1080) - 60), 
				image,
				51, 
				48
			);
			this.global_layer.add(img);
			this.global_layer.draw();
		}
	}

	drawOverlays() {
		let image = new Image();
		image.src = "./assets/images/loading_screen/overlay1.png";
		image.onload = () => {
			let img = this.konvaImage(
				(Math.min(document.documentElement.clientWidth, 1920) - 689*this.scaleConst)/2, 
				(Math.min(document.documentElement.clientHeight, 1080) - 842*this.scaleConst), 
				image,
				689*this.scaleConst, 
				842*this.scaleConst
			);
			this.global_layer.add(img);
			this.global_layer.draw();
		}
	}

	drawBackground() {
		return new Promise((resolve, reject) => {
			let idOfScreen = Math.floor(Math.random() * this.data["countOfLoadingScreens"]) + 1;
			let scaleConst = Math.min(document.documentElement.clientWidth, 1920)/1920;

			let image = new Image();
			image.src = "./assets/images/loading_screen/screens/loading_screen" + idOfScreen + ".png";
			image.onload = () => {
				let img = this.konvaImage(
					0, 
					0, 
					image,
					1920*scaleConst, 
					1080*scaleConst
				);
				this.global_layer.add(img);
				this.stage.add(this.global_layer);
				resolve();
			}
		});
	}

	konvaImage(iX, iY, iImage, iWidth, iHeight) {
		return new Konva.Image({
			x: iX,
			y: iY,
			image: iImage,
			width: iWidth,
			height: iHeight
		});
	}

	konvaText(textT, textX, textY, textWidth, textFontSize, textAlign, color, font) {
		return new Konva.Text({
			x: textX,
			y: textY,
			width: textWidth,
			text: textT,
			fontSize: textFontSize,
			fontFamily: font,
			fontStyle: 'normal',
			align: textAlign,
			fill: color
		});
	}
}