import { data as data } from "./data";
import { KeyboardEvent as KeyboardEvent } from "../settings";

export default class Heroes {
	constructor(stage) {
		this.data = data;
		this.stage = stage;
		this.hero = localStorage["heroes_name"];
		this.colorOfHero =  Math.floor(Math.random() * 4) + 1;
		this.currSpell;

		this.defendHeroLayer = new Konva.Layer();
		this.combatHeroLayer = new Konva.Layer();
		this.animHeroLayer = new Konva.Layer();
		this.fxHeroLayer = new Konva.Layer();
	}

	load() {
		return this.getHeroInLocation();
	}

	getHeroInLocation() {
		this.stage.add(this.defendHeroLayer);
		this.stage.add(this.combatHeroLayer);
		this.stage.add(this.animHeroLayer);
		this.stage.add(this.fxHeroLayer);

		this.drawCombat();
	}

	drawCombat() {
		let hero = JSON.parse(localStorage["heroes_name"]);
		let dataPath = this.data[hero]["combat"];
		let imgPath = "./assets/images/heroes/" + hero + "/" + this.colorOfHero + "/" + dataPath["name"];
		
		this.drawImage(dataPath, imgPath, this.combatHeroLayer);
	}

	drawDefend() {
		let hero = JSON.parse(localStorage["heroes_name"]);
		let dataPath = this.data[hero]["defend"];
		let imgPath = "./assets/images/heroes/" + hero + "/" + this.colorOfHero + "/" + dataPath["name"];

		this.drawImage(dataPath, imgPath, this.defendHeroLayer);

		this.stage.add(this.defendHeroLayer);
	}

	drawImage(dataPath, imgPath, layer) {
		let image = new Image();
		image.src = imgPath;
		image.onload = () => {
			for (let key in dataPath["detail"]) {
				let detailPath = dataPath["detail"][key];

				let img = this.konvaImage(
					document.documentElement.clientWidth/2 + detailPath["x"] - 580, 
					Math.max((document.documentElement.clientHeight - 720) / 2, 0) + detailPath["y"] + Math.min(document.documentElement.clientHeight/2 - 130, 330), 
					image,
					detailPath["width"],
					detailPath["height"],
				);
				img.crop({
					x: detailPath["cropX"],
				  	y: detailPath["cropY"],
				  	width: detailPath["width"],
				  	height: detailPath["height"]
				});
				img.scale({ x: 0.5, y: 0.5 });
				if (detailPath["rotate"] == "true") img.rotation(90);

				layer.add(img);

				if (detailPath["animation"] != undefined) {
					var period = 2000;
					var amplitude =detailPath["animation"]["amplitude"];

					var anim = new Konva.Animation(function(frame) {
      					var scale = Math.sin(frame.time * 2 * Math.PI / period) * amplitude;
						img.rotate(scale) ;
					}, layer);
					anim.start();
				}
			}
			layer.draw();
		}
	}

	addModalwithSpells() {
		return new Promise((resolve, reject) => {
			let hero = JSON.parse(localStorage["heroes_name"]);
			let modal = document.getElementById("modal_window");

			modal.className = "modal spell_choose";
			modal.innerHTML = '';
			modal.style.display = "flex";
			modal.style.left = (Math.min(document.documentElement.clientWidth, 1920) - 800)/2 + 'px';
			modal.style.top = (Math.min(document.documentElement.clientHeight, 1080) - 600)/2 + 'px';
			modal.style.width = 800 + 'px';
			modal.style.background = "url(./assets/images/battle/overlays2.png) no-repeat";
			modal.style.height = 600 + "px";
    		modal.style["background-size"] = "contain";
			modal.innerHTML = "<div class=\"spell_content\"><img class=\"investigate_img\" src=\"./assets/images/heroes/" + hero + "/" + this.colorOfHero
				+ "/investigate.png\" /><div id=\"spells\" class=\"spells\"></div></div>";

			let spellsForm = document.getElementById("spells");
			let dataPath = this.data[hero]["combat_skill"];

			let count = dataPath["count"] - 1;
			let p, img, description;
			while (count >= 0) {
				p = document.createElement('p');
				p.className = "spell_item";
				spellsForm.appendChild(p);

				img = document.createElement('img');
				img.className = "spell";
				img.id = count;
				img.src = "./assets/images/heroes/" + hero + "/"+dataPath[count]["icon"];

				img.addEventListener('click', (event) => {
					this.currSpell = event.target.id;
					modal.style.display = "none";

					resolve();
				});

				description = document.createElement('p');
				description.className = "description";
				description.innerHTML = "<p>Max: " + dataPath[count]["damage"]["max"] 
				+ "</p><p>Min: " + dataPath[count]["damage"]["min"] 
				+ "</p><p>HP: " + dataPath[count]["health"] + "</p>";

				p.appendChild(img);
				p.appendChild(description);

				count--;
			}

			// document.addEventListener('keydown', (event) => {
			// 	if (event.keyCode === KeyboardEvent.DIGIT1 || event.keyCode === KeyboardEvent.NUMPAD1) getSpell(0);
			// 	else if (event.keyCode === KeyboardEvent.DIGIT2 || event.keyCode === KeyboardEvent.NUMPAD2) getSpell(1);
			// 	else if (event.keyCode === KeyboardEvent.DIGIT3 || event.keyCode === KeyboardEvent.NUMPAD3) getSpell(2);
			// 	else if (event.keyCode === KeyboardEvent.DIGIT4 || event.keyCode === KeyboardEvent.NUMPAD4) getSpell(3);
			// 	else if (event.keyCode === KeyboardEvent.DIGIT5 || event.keyCode === KeyboardEvent.NUMPAD5) getSpell(4);
			// 	else if (event.keyCode === KeyboardEvent.DIGIT6 || event.keyCode === KeyboardEvent.NUMPAD6) getSpell(5);
			// 	else if (event.keyCode === KeyboardEvent.DIGIT7 || event.keyCode === KeyboardEvent.NUMPAD7) getSpell(6);
			// });

			let self = this;
			function getSpell(spell_id) {
				self.currSpell = spell_id;
				document.getElementsByClassName("spell_choose")[0].style.display = "none";

				resolve();
			}
		});
	}

	clearSpellLayers() {
		this.animHeroLayer.destroy();
		this.fxHeroLayer.destroy();

		this.animHeroLayer = new Konva.Layer();
		this.fxHeroLayer = new Konva.Layer();

		this.stage.add(this.animHeroLayer);
		this.stage.add(this.fxHeroLayer);
	}

	drawSpell(spell) {
		let hero = JSON.parse(localStorage["heroes_name"]);
		this.hero = hero;
		let dataPathAnim = this.data[hero]["combat_skill"][spell]["anim"];
		let imgPathAnim = "./assets/images/heroes/" + hero + "/" + this.colorOfHero + "/" + dataPathAnim["name"];
		let dataPathFx = this.data[hero]["combat_skill"][spell]["fx"];
		let imgPathFx = "./assets/images/heroes/" + hero + "/fx/" + dataPathFx["name"];

		this.drawSpellImg(dataPathAnim, imgPathAnim, this.animHeroLayer);
		this.drawSpellImg(dataPathFx, imgPathFx, this.fxHeroLayer);
	}

	drawSpellImg(dataPath, imgPath, layer) {
		let image = new Image();
		image.src = imgPath;
		image.onload = () => {
			for (let key in dataPath["detail"]) {
				let detailPath = dataPath["detail"][key];

				let img = this.konvaImage(
					document.documentElement.clientWidth/2 + detailPath["x"] - 100, 
					Math.max((document.documentElement.clientHeight - 720) / 2, 0) + detailPath["y"] + Math.min(document.documentElement.clientHeight/2 - 130, 330), 
					image,
					detailPath["width"],
					detailPath["height"],
				);
				img.crop({
					x: detailPath["cropX"],
				  	y: detailPath["cropY"],
				  	width: detailPath["width"],
				  	height: detailPath["height"]
				});
				img.scale({ x: 0.5, y: 0.5 });
				if (detailPath["rotate"] == "true") img.rotation(90);

				layer.add(img);
			}
			layer.draw();
		}
	}

	getDamage(spell) {
		let hero = JSON.parse(localStorage["heroes_name"]);
		let damage = this.data[hero]["combat_skill"][spell]["damage"];

		if (damage == undefined) return 0;

		let max = damage["max"];
		let min = damage["min"]

		return Math.floor(Math.random() * (max + 1 - min)) + min;
	}

	getHealth() {
		let hero = JSON.parse(localStorage["heroes_name"]);
		let health = this.data[hero]["combat_skill"][this.currSpell]["health"];

		if (health == undefined) return 0;

		return health;
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
		let text = new Konva.Text({
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

		this.textLayer.add(text);
		this.stage.add(this.textLayer);
	}
}