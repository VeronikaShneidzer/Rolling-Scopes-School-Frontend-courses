import { data as data } from "./data";
import { KeyboardEvent as KeyboardEvent } from "./../../settings";

export default class HeroesScreen {
	constructor(stage) {
		this.data = data;
		this.stage = stage;
		
		this.hero = "crusader";
		this.chooseHero = "crusader";
		this.globalLayer = new Konva.Layer();
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
		return new Promise((resolve, reject) => {
			let image = new Image();
			image.src = "./../../screens/heroesScreen/images/printing.png";
			image.onload = () => {
				let img = this.konvaImage(
					740, 
					document.documentElement.clientHeight / 3 - 20, 
					image,
					80,
					80,
				);

				this.addMouseAndKeyEvent(img, resolve);

				this.globalLayer.add(img);
				this.stage.add(this.globalLayer);
			}
		});
	}

	addMouseAndKeyEvent(img, resolve) {
		img.on('click', () => {
			setHeroName();

			resolve();
		});

		let func;
		document.addEventListener('keydown', func = (event) => {
			handler(event);
			document.removeEventListener('keydown', func);

			resolve();
		});

		let setHeroName = () => {
			localStorage.setItem("heroesName", JSON.stringify(this.chooseHero));
		}
		let handler = (event) => {
			if (event.keyCode === KeyboardEvent.ENTER) {
				setHeroName();
			}
		}
	}

	drawHistory() {
		let scale = document.documentElement.clientHeight / this.data["heroes"][this.hero]["history"]["height"];
		let image = new Image();
		image.src = "./../../screens/heroesScreen/images/heroes/" + this.hero + "/" + this.data["heroes"][this.hero]["history"]["name"];
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
		image.src = "./../../screens/heroesScreen/images/heroes/" + this.hero + "/" + this.data["heroes"][this.hero]["header"]["name"];
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

	drawSelectedAbility(hero, coordinateX, coordinateY) {
		let selectedAbilityLayer = new Konva.Layer();
		let image = new Image();
		image.src = "./../../screens/heroesScreen/images/selected_ability.png";
		image.onload = () => {
			let img = this.konvaImage(
				80 + 110*coordinateX - 30, 
				document.documentElement.clientHeight / 2 - 50 + 120*coordinateY, 
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
		    		if (this.data["heroes"][hero]["availability"] == "inaccessible") img.opacity(0);
		    		this.hero = hero;
		    		if (this.data["heroes"][hero]["availability"] != "inaccessible") this.chooseHero = this.hero;
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

	drawDefoltAbility(hero, coordinateX, coordinateY) {
		let image = new Image();
		image.src = "./../../screens/heroesScreen/images/defolt_ability.png";
		image.onload = () => {
			let img = this.konvaImage(
				80 + 110*coordinateX - 30, 
				document.documentElement.clientHeight / 2 - 50 + 120*coordinateY, 
				image,
				145, 
				145
			);
			if (this.data["heroes"][hero]["availability"] == "inaccessible") img.opacity(0);

			this.globalLayer.add(img);
			this.stage.add(this.globalLayer);
		}
	}

	drawPortrait(hero, coordinateX, coordinateY) {
		let image = new Image();
		image.src = "./../../screens/heroesScreen/images/heroes/" + hero + "/" + this.data["portrait"]["name"];
		image.onload = () => {
			let img = this.konvaImage(
				80 + 110*coordinateX, 
				document.documentElement.clientHeight / 2 - 50 + 120*coordinateY + 30, 
				image,
				this.data["portrait"]["width"], 
				this.data["portrait"]["height"]
			);

			this.globalLayer.add(img);
			this.stage.add(this.globalLayer);
			this.drawSelectedAbility(hero, coordinateX, coordinateY);
		}
	}

	drawListOfHeroes() {
		let coordinateX = 0;
		let coordinateY = 0;
		for (let hero in this.data["heroes"]) {
			this.drawPortrait(hero, coordinateX, coordinateY);
			this.drawDefoltAbility(hero, coordinateX, coordinateY);

			coordinateX++;
			if (coordinateX == 7) {
				coordinateY++;
				coordinateX = 0;
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