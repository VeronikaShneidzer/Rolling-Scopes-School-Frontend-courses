import { data as heroesData } from "../heroes/data";
import { data as monstersData } from "../monsters/data";
import { settings as settings } from "../settings";

export default class Battle {
	constructor(stage, global_layer) {
		this.heroesData = heroesData;
		this.monstersData = monstersData;
		this.stage = stage;
		this.global_layer = global_layer;

		this.heroHP;
		this.monsterHP;
		this.maxHP;

		this.monsterTextHPlayer = new Konva.Layer();
		this.heroTextHPlayer = new Konva.Layer();
		this.monsterHPlayer = new Konva.Layer();
		this.heroHPlayer = new Konva.Layer();

		this.hero = JSON.parse(localStorage["heroes_name"]);
		this.colorOfHero =  Math.floor(Math.random() * 4) + 1;
	}

	load() {
		this.stage.add(this.monsterTextHPlayer);
		this.stage.add(this.heroTextHPlayer);
		this.stage.add(this.monsterHPlayer);
		this.stage.add(this.heroHPlayer);
		
		return this.getBattleInfo();
	}

	getBattleInfo() {
		return new Promise((resolve, reject) => {
			this.drawOverlays()
			.then(() => {
				this.drawAnnouncement();
			})
			.then(() => {				
				resolve();
			})
		});
	}

	cleaHP() {
		this.monsterTextHPlayer.destroy();
		this.heroTextHPlayer.destroy();
		this.monsterHPlayer.destroy();
		this.heroHPlayer.destroy();

		this.monsterTextHPlayer = new Konva.Layer();
		this.heroTextHPlayer = new Konva.Layer();
		this.monsterHPlayer = new Konva.Layer();
		this.heroHPlayer = new Konva.Layer();

		this.stage.add(this.monsterTextHPlayer);
		this.stage.add(this.heroTextHPlayer);
		this.stage.add(this.monsterHPlayer);
		this.stage.add(this.heroHPlayer);
	}

	getMaxHP() {
		let monster = JSON.parse(localStorage["monster"]);
		let hero = JSON.parse(localStorage["heroes_name"]);

		this.heroHP = 100 + this.heroesData[hero]["hp"];
		this.monsterHP = 100 + this.monstersData[localStorage["currentLocationsId"]]["monsters"][monster]["hp"];
		this.maxHP = (this.heroHP > this.monsterHP) ? this.heroHP : this.monsterHP;
	}

	drawMonsterTextHP() {
		let scale = this.monsterHP/this.maxHP;

		let text = new Konva.Text({
			x: document.documentElement.clientWidth/2 + 480 - 50,
			y: Math.max((document.documentElement.clientHeight - 720) / 2, 0) + 115,
			width: 50,
			text: this.monsterHP,
			fontSize: 30,
			fontFamily: "Times New Roman",
			fontStyle: 'normal',
			align: 'center',
			fill: '#58c52d'
		});

		this.monsterTextHPlayer.add(text);
		this.monsterTextHPlayer.draw();
	}

	drawHeroTextHP() {
		let scale = this.heroHP/this.maxHP;

		let text = new Konva.Text({
			x: document.documentElement.clientWidth/2 - 480,
			y: Math.max((document.documentElement.clientHeight - 720) / 2, 0) + 115,
			width: 50,
			text: this.heroHP,
			fontSize: 30,
			fontFamily: "Times New Roman",
			fontStyle: 'normal',
			align: 'center',
			fill: '#58c52d'
		});

		this.heroTextHPlayer.add(text);
		this.heroTextHPlayer.draw();
	}

	drawMonsterHP() {
		let scale = (this.monsterHP == 0) ? 0.001 : this.monsterHP/this.maxHP;

		let image = new Image();
		image.src = "./assets/images/battle/target_h_4.png";
		image.onload = () => {
			let img = this.konvaImage(
				document.documentElement.clientWidth/2 + 430 - 280*scale, 
				Math.max((document.documentElement.clientHeight - 720) / 2, 0) - 30, 
				image,
				280*scale, 
				206
			);

			this.monsterHPlayer.add(img);
			this.monsterHPlayer.draw();
		}
	}

	drawHeroHP() {
		let scale = (this.heroHP == 0) ? 0.001 : this.heroHP/this.maxHP;

		let image = new Image();
		image.src = "./assets/images/battle/target_h_4.png";
		image.onload = () => {
			let img = this.konvaImage(
				document.documentElement.clientWidth/2 - 430, 
				Math.max((document.documentElement.clientHeight - 720) / 2, 0) - 30, 
				image,
				280*scale, 
				206
			);

			this.heroHPlayer.add(img);
			this.heroHPlayer.draw();
		}
	}

	drawNames() {
		let hero = JSON.parse(localStorage["heroes_name"]);
		let userName = this.heroesData[hero]["name"] + ' ' + JSON.parse(localStorage["user_name"]);
		let monsterName = JSON.parse(localStorage["monster_name"]).slice(1, -1);

		let text1 = this.konvaText(
			userName, 
			document.documentElement.clientWidth/2 - 500, 
			Math.max((document.documentElement.clientHeight - 720) / 2, 0) + 52, 
			366, 
			16, 
			'center', 
			'#d1c184',
			"Times New Roman"
		);
		let text2 = this.konvaText(
			monsterName, 
			document.documentElement.clientWidth/2 + 134, 
			Math.max((document.documentElement.clientHeight - 720) / 2, 0) + 52, 
			366, 
			16, 
			'center', 
			'#d1c184',
			"Times New Roman"
		);

		this.global_layer.add(text1);
		this.global_layer.add(text2);
		this.global_layer.draw();
	}

	drawAnnouncement() {
		let image = new Image();
		image.src = "./assets/images/battle/announcement_combat.png";
		image.onload = () => {
			let img = this.konvaImage(
				(document.documentElement.clientWidth - 104)/2, 
				Math.max((document.documentElement.clientHeight - 720) / 2, 0), 
				image,
				104, 
				138
			);

			this.global_layer.add(img);
			this.global_layer.draw();
		}
	}

	drawOverlays() {
		return new Promise((resolve, reject) => {
			this.drawNameOverlay(document.documentElement.clientWidth/2 - 500)
			.then(() => {
				return this.drawNameOverlay(document.documentElement.clientWidth/2 + 134);
			})
			.then(() => {
				resolve();
			});
		});		
	}

	drawNameOverlay(x) {
		return new Promise((resolve, reject) => {
			let image = new Image();
			image.src = "./assets/images/battle/frame_gold.png";
			image.onload = () => {
				let img = this.konvaImage(
					x, 
					Math.max((document.documentElement.clientHeight - 720) / 2, 0) + 30, 
					image,
					366, 
					63
				);

				this.global_layer.add(img);
				this.global_layer.draw();
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