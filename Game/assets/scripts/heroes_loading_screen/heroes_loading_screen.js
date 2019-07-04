import { data as data } from "./data";
import { KeyboardEvent as KeyboardEvent } from "../settings";

export default class Heroes_loading_screen {
	constructor(stage) {
		this.data = data;
		this.stage = stage;
		
		this.hero = "crusader";
		this.choose_hero = "crusader";
		this.global_layer = new Konva.Layer();
		this.infoLayer = new Konva.Layer();
		this.scaleConst = Math.min(document.documentElement.clientHeight, 842)/842;
	}

	load() {
		return this.getHeroesLoadScreen();
	}

	getHeroesLoadScreen() {
		return new Promise((resolve, reject) => {
			this.drawListOfHeroes();
			this.drawStartButton()
			.then(() => {
				this.stage.clear();
				resolve();
			})
		});
	}

	drawStartButton() {
		let self = this;
		return new Promise((resolve, reject) => {
			let image = new Image();
			image.src = "./assets/images/heroes_loading_screen/printing.png";
			image.onload = () => {
				let img = self.konvaImage(
					740, 
					document.documentElement.clientHeight - 120, 
					image,
					80,
					80,
				);
				img.on('click', setHeroName);

				// document.addEventListener('keydown', (event) => {
				// 	if (event.keyCode === KeyboardEvent.ENTER) setHeroName();
				// });

				function setHeroName() {
					localStorage.setItem("heroes_name", JSON.stringify(self.choose_hero));

			    	resolve();
				}

				self.global_layer.add(img);
				self.stage.add(self.global_layer);
			}
		});
	}

	drawHistory() {
		let scale = document.documentElement.clientHeight / this.data["heroes"][this.hero]["history"]["height"];
		let image = new Image();
		image.src = "./assets/images/heroes_loading_screen/heroes/" + this.hero + "/" + this.data["heroes"][this.hero]["history"]["name"];
		image.onload = () => {
			let img = this.konvaImage(
				900, 
				0, 
				image,
				this.data["heroes"][this.hero]["history"]["width"]*scale,
				document.documentElement.clientHeight,
			);
			this.infoLayer.add(img);
			this.stage.add(this.infoLayer);
		}
	}

	drawHeader() {
		let scale = (document.documentElement.clientHeight/2 - 50)/this.data["heroes"][this.hero]["history"]["height"];
		let image = new Image();
		image.src = "./assets/images/heroes_loading_screen/heroes/" + this.hero + "/" + this.data["heroes"][this.hero]["header"]["name"];
		image.onload = () => {
			let img = this.konvaImage(
				0, 
				0, 
				image,
				this.data["heroes"][this.hero]["history"]["height"] * scale * 2,
				document.documentElement.clientHeight / 2 - 50
			);
			this.infoLayer.add(img);
			this.stage.add(this.infoLayer);
		}
	}

	drawSelectedAbility(key, x, y) {
		let selectedAbilityLayer = new Konva.Layer();
		let image = new Image();
		image.src = "./assets/images/heroes_loading_screen/selected_ability.png";
		image.onload = () => {
			let img = this.konvaImage(
				80 + 110*x - 30, 
				document.documentElement.clientHeight / 2 - 50 + 120*y, 
				image,
				145, 
				145
			);
			img.opacity(0);
		    img.on('click', () => {
		    	let opacity = img.opacity();

		    	if (opacity == 1) {
		    		img.opacity(0);
		    	}
		    	else {
		    		img.opacity(1);
		    		if (this.data["heroes"][key]["availability"] == "inaccessible") img.opacity(0);
		    		this.hero = key;
		    		if (this.data["heroes"][key]["availability"] != "inaccessible") this.choose_hero = this.hero;
		    		this.infoLayer.clear();
		    		this.drawHeader();
		    		this.drawHistory();
		    	}
		        selectedAbilityLayer.draw();
		    });

			selectedAbilityLayer.add(img);
			this.stage.add(selectedAbilityLayer);
		}
	}

	drawDefoltAbility(key, x, y) {
		let image = new Image();
		image.src = "./assets/images/heroes_loading_screen/defolt_ability.png";
		image.onload = () => {
			let img = this.konvaImage(
				80 + 110*x - 30, 
				document.documentElement.clientHeight / 2 - 50 + 120*y, 
				image,
				145, 
				145
			);
			if (this.data["heroes"][key]["availability"] == "inaccessible") img.opacity(0);

			this.global_layer.add(img);
			this.stage.add(this.global_layer);
			this.drawSelectedAbility(key, x, y);
		}
	}

	drawPortrait(key, x, y) {
		let image = new Image();
		image.src = "./assets/images/heroes_loading_screen/heroes/" + key + "/" + this.data["portrait"]["name"];
		image.onload = () => {
			let img = this.konvaImage(
				80 + 110*x, 
				document.documentElement.clientHeight / 2 - 50 + 120*y + 30, 
				image,
				this.data["portrait"]["width"], 
				this.data["portrait"]["height"]
			);

			this.global_layer.add(img);
			this.stage.add(this.global_layer);
		}
	}

	drawListOfHeroes() {
		let count = this.data["countOfHeroes"];
		let x = 0;
		let y = 0;
		for (let key in this.data["heroes"]) {
			this.drawPortrait(key, x, y);
			this.drawDefoltAbility(key, x, y);

			x++;
			if (x == 7) {
				y++;
				x = 0;
			}
		}
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
}