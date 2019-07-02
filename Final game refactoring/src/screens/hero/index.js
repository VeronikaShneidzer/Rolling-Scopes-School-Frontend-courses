import { data as data } from "./data";
import { KeyboardEvent as KeyboardEvent } from "./../../settings";

export default class Hero {
	constructor(stage) {
		this.data = data;
		this.stage = stage;
		this.hero = localStorage["heroesName"];
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
		this.addLayersOnStage();
		this.drawCombat();
	}

	addLayersOnStage() {
		this.stage.add(this.defendHeroLayer);
		this.stage.add(this.combatHeroLayer);
		this.stage.add(this.animHeroLayer);
		this.stage.add(this.fxHeroLayer);
	}

	drawCombat() {
		let hero = JSON.parse(localStorage["heroesName"]);
		let dataPath = this.data[hero]["combat"];
		let imgPath = "./../../screens/hero/images/" + hero + "/" + this.colorOfHero + "/" + dataPath["name"];
		
		this.drawImage(dataPath, imgPath, this.combatHeroLayer);
	}

	drawDefend() {
		let hero = JSON.parse(localStorage["heroesName"]);
		let dataPath = this.data[hero]["defend"];
		let imgPath = "./../../screens/hero/images/" + hero + "/" + this.colorOfHero + "/" + dataPath["name"];

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
			let hero = JSON.parse(localStorage["heroesName"]);
			let modal = document.getElementById("modalWindow");

			modal.className = "modal spellChoose";
			modal.innerHTML = '';
			modal.style.display = "flex";
			modal.style.left = (Math.min(document.documentElement.clientWidth, 1920) - 800)/2 + 'px';
			modal.style.top = (Math.min(document.documentElement.clientHeight, 1080) - 600)/2 + 'px';
			modal.style.width = 800 + 'px';
			modal.style.background = "url(./../../screens/hero/images/overlays2.png) no-repeat";
			modal.style.height = 600 + "px";
    		modal.style["background-size"] = "contain";
			modal.innerHTML = "<div class=\"spellContent\"><img class=\"investigateImg\" src=\"./../../screens/hero/images/" + hero + "/" + this.colorOfHero
				+ "/investigate.png\" /><div id=\"spells\" class=\"spells\"></div></div>";

			this.drawSpellsIcons(resolve, hero);
			this.addKeydownListenersToSpells(resolve);
		});
	}

	drawSpellsIcons(resolve, hero) {
		let spellsForm = document.getElementById("spells");
		let dataPath = this.data[hero]["combat_skill"];

		let count = dataPath["count"] - 1;
		let spellItem;
		while (count >= 0) {
			spellItem = document.createElement('p');
			spellItem.className = "spellItem";
			spellsForm.appendChild(spellItem);

			this.addSpellImage(spellItem, resolve, dataPath, count, hero);
			this.addSpellDescription(spellItem, dataPath, count);

			count--;
		}
	}

	addKeydownListenersToSpells(resolve) {
		let func;
		document.addEventListener('keydown', func = (event) => {
			if (event.keyCode === KeyboardEvent.DIGIT1 || event.keyCode === KeyboardEvent.NUMPAD1) {
				getSpell(0);
				document.removeEventListener('keydown', func);
			}
			else if (event.keyCode === KeyboardEvent.DIGIT2 || event.keyCode === KeyboardEvent.NUMPAD2) {
				getSpell(1);
				document.removeEventListener('keydown', func);
			}
			else if (event.keyCode === KeyboardEvent.DIGIT3 || event.keyCode === KeyboardEvent.NUMPAD3) {
				getSpell(2);
				document.removeEventListener('keydown', func);
			}
			else if (event.keyCode === KeyboardEvent.DIGIT4 || event.keyCode === KeyboardEvent.NUMPAD4) {
				getSpell(3);
				document.removeEventListener('keydown', func);
			}
			else if (event.keyCode === KeyboardEvent.DIGIT5 || event.keyCode === KeyboardEvent.NUMPAD5) {
				getSpell(4);
				document.removeEventListener('keydown', func);
			}
			else if (event.keyCode === KeyboardEvent.DIGIT6 || event.keyCode === KeyboardEvent.NUMPAD6) {
				getSpell(5);
				document.removeEventListener('keydown', func);
			}
			else if (event.keyCode === KeyboardEvent.DIGIT7 || event.keyCode === KeyboardEvent.NUMPAD7) {
				getSpell(6);
				document.removeEventListener('keydown', func);
			}
		});

		let getSpell = (spellId) => {
			this.currSpell = spellId;
			//document.getElementsByClassName("spellChoose")[0].style.display = "none";

			resolve();
		}
	}

	addSpellImage(spellItem, resolve, dataPath, count, hero) {
		let img = document.createElement('img');
		img.className = "spell";
		img.id = count;
		img.src = "./../../screens/hero/images/" + hero + "/" + dataPath[count]["icon"];

		spellItem.appendChild(img);

		img.addEventListener('click', (event) => {
			this.currSpell = event.target.id;
			document.getElementById("modalWindow").style.display = "none";

			resolve();
		});
	}

	addSpellDescription(spellItem, dataPath, count) {
		let description = document.createElement('p');
		description.className = "description";
		description.innerHTML = "<p>Max: " + dataPath[count]["damage"]["max"] 
		+ "</p><p>Min: " + dataPath[count]["damage"]["min"] 
		+ "</p><p>HP: " + dataPath[count]["health"] + "</p>";

		spellItem.appendChild(description);	
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
		let hero = JSON.parse(localStorage["heroesName"]);
		this.hero = hero;
		let dataPathAnim = this.data[hero]["combat_skill"][spell]["anim"];
		let imgPathAnim = "./../../screens/hero/images/" + hero + "/" + this.colorOfHero + "/" + dataPathAnim["name"];
		let dataPathFx = this.data[hero]["combat_skill"][spell]["fx"];
		let imgPathFx = "./../../screens/hero/images/" + hero + "/fx/" + dataPathFx["name"];

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
		let hero = JSON.parse(localStorage["heroesName"]);
		let damage = this.data[hero]["combat_skill"][spell]["damage"];

		if (damage == undefined) return 0;

		let max = damage["max"];
		let min = damage["min"]

		return Math.floor(Math.random() * (max + 1 - min)) + min;
	}

	getHealth() {
		let hero = JSON.parse(localStorage["heroesName"]);
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