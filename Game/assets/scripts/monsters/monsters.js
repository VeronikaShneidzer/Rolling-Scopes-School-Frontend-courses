import { data as data } from "./data";
import { adjectives as adjectives } from "./data";
import { names as names } from "./data";
import { settings as settings } from "../settings";

export default class Monsters {
	constructor(stage) {
		this.data = data;
		this.names = names;
		this.adjectives = adjectives;
		this.stage = stage;

		this.monster;
		this.currSpell;
		this.location = localStorage["currentLocationsId"];

		this.defendMonsterLayer = new Konva.Layer();
		this.combatMonsterLayer = new Konva.Layer();
		this.animMonsterLayer = new Konva.Layer();
		this.fxMonsterLayer = new Konva.Layer();
	}

	load() {
		return this.getMonsterInLocation();
	}

	getMonsterInLocation() {
		this.stage.add(this.defendMonsterLayer);
		this.stage.add(this.combatMonsterLayer);
		this.stage.add(this.animMonsterLayer);
		this.stage.add(this.fxMonsterLayer);

		this.chooseMonster();
		this.drawCombat();
	}

	createMonsterName() {
		let gameName = this.data[this.location]["monsters"][this.monster]["name"];
		let monsterName = ' ' + _.sample(adjectives) + ' ' + gameName + ' ' + _.sample(names);

		localStorage.setItem("monster_name", JSON.stringify(monsterName));
	}

	chooseMonster() {
		let monsterNumber = Math.floor(Math.random() * (+this.data[this.location]["monstersCount"] - 1)) + 1;
		
		for (let key in this.data[this.location]["monsters"]) {
			this.monster = key;
			monsterNumber--;
			if (monsterNumber == 0) break;
		}
		localStorage.setItem("monster", JSON.stringify(this.monster));
		
		this.createMonsterName();
	}

	drawDefend() {
		let dataPath = this.data[this.location]["monsters"][this.monster]["defend"];
		let imgPath = "./assets/images/monsters/" + this.monster + "/anim/" + dataPath["name"];

		this.drawImage(dataPath, imgPath, this.defendMonsterLayer);

		this.stage.add(this.defendMonsterLayer);
	}

	drawCombat() {
		let dataPath = this.data[this.location]["monsters"][this.monster]["combat"];
		let imgPath = "./assets/images/monsters/" + this.monster + "/anim/" + dataPath["name"];

		this.drawImage(dataPath, imgPath, this.combatMonsterLayer);
	}

	drawImage(dataPath, imgPath, layer) {
		let image = new Image();
		image.src = imgPath;
		image.onload = () => {
			for (let key in dataPath["detail"]) {
				let detailPath = dataPath["detail"][key];

				let img = this.konvaImage(
					-120 - (document.documentElement.clientWidth/2 + detailPath["x"] + 200), 
					(Math.max((document.documentElement.clientHeight - 720) / 2, 0) + detailPath["y"] + Math.min(document.documentElement.clientHeight/2 - 130, 330)), 
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
					var amplitude = detailPath["animation"]["amplitude"];

					var anim = new Konva.Animation(function(frame) {
      					var scale = Math.sin(frame.time * 2 * Math.PI / period) * amplitude;
						img.rotate(scale) ;
					}, layer);
					anim.start();
				}
			}
			layer.scaleX(-1);
			layer.draw();
		}
	}

	clearSpellLayers() {
		this.animMonsterLayer.destroy();
		this.fxMonsterLayer.destroy();

		this.animMonsterLayer = new Konva.Layer();
		this.fxMonsterLayer = new Konva.Layer();

		this.stage.add(this.animMonsterLayer);
		this.stage.add(this.fxMonsterLayer);
	}

	drawSpell() {
		this.currSpell = Math.floor(Math.random() * this.data[this.location]["monsters"][this.monster]["attack"]["count"]);
		
		let dataPathAnim = this.data[this.location]["monsters"][this.monster]["attack"][this.currSpell]["anim"];
		let imgPathAnim = "./assets/images/monsters/" + this.monster + "/anim/" + dataPathAnim["name"];
		let dataPathFx = this.data[this.location]["monsters"][this.monster]["attack"][this.currSpell]["fx"];
		let imgPathFx = "./assets/images/monsters/" + this.monster + "/fx/" + dataPathFx["name"];

		this.drawSpellImg(dataPathAnim, imgPathAnim, this.animMonsterLayer);
		this.drawSpellImg(dataPathFx, imgPathFx, this.fxMonsterLayer);
	}

	drawSpellImg(dataPath, imgPath, layer) {
		let image = new Image();
		image.src = imgPath;
		image.onload = () => {
			for (let key in dataPath["detail"]) {
				let detailPath = dataPath["detail"][key];

				let img = this.konvaImage(
					-120 - (document.documentElement.clientWidth/2 + detailPath["x"] + 200), 
					(Math.max((document.documentElement.clientHeight - 720) / 2, 0) + detailPath["y"] + Math.min(document.documentElement.clientHeight/2 - 130, 330)), 
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
			layer.scaleX(-1);
			layer.draw();
		}
	}

	getDamage() {
		let damage = this.data[this.location]["monsters"][this.monster]["attack"][this.currSpell]["damage"];

		return Math.floor(Math.random() * (damage["max"]+1 - damage["min"])) + damage["min"];
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