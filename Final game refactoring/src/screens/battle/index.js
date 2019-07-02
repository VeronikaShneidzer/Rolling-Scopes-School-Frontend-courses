import { data as heroesData } from "../hero/data";
import { data as monstersData } from "../monster/data";
import { drawTextHP, drawHPImage } from '../../components/battle/index'

export default class Battle {
	constructor(stage, globalLayer) {
		this.heroesData = heroesData;
		this.monstersData = monstersData;
		this.stage = stage;
		this.globalLayer = globalLayer;

		this.heroHP;
		this.monsterHP;
		this.maxHP;

		this.monsterTextHPlayer = new Konva.Layer();
		this.heroTextHPlayer = new Konva.Layer();
		this.monsterHPlayer = new Konva.Layer();
		this.heroHPlayer = new Konva.Layer();

		this.hero = JSON.parse(localStorage["heroesName"]);
		this.colorOfHero =  Math.floor(Math.random() * 4) + 1;
	}

	load() {
		this.addLayersOnStage();
		
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

	addLayersOnStage() {
		this.stage.add(this.monsterTextHPlayer);
		this.stage.add(this.heroTextHPlayer);
		this.stage.add(this.monsterHPlayer);
		this.stage.add(this.heroHPlayer);
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
		let hero = JSON.parse(localStorage["heroesName"]);

		this.heroHP = 100 + this.heroesData[hero]["hp"];
		this.monsterHP = 100 + this.monstersData[localStorage["currentLocationsId"]]["monsters"][monster]["hp"];
		this.maxHP = (this.heroHP > this.monsterHP) ? this.heroHP : this.monsterHP;
	}

	drawMonsterTextHP() {
		this.drawTextHP(this.monsterHP, 430, this.monsterTextHPlayer);
	}

	drawHeroTextHP() {
		this.drawTextHP(this.heroHP, -480, this.heroTextHPlayer);
	}

	drawTextHP(hp, coordinate, layer) {
		drawTextHP(hp, coordinate, layer, this.maxHP);
	}

	drawMonsterHP() {
		this.drawHPImage(this.monsterHP, 430, this.monsterHPlayer, 0);
	}

	drawHeroHP() {
		this.drawHPImage(this.heroHP, -430, this.heroHPlayer, 1);
	}

	drawHPImage(hp, coordinate, layer, trigger) {
		drawHPImage(hp, coordinate, layer, trigger, this.maxHP);
	}

	drawNames() {
		let hero = JSON.parse(localStorage["heroesName"]);
		let userName = this.heroesData[hero]["name"] + ' ' + JSON.parse(localStorage["userName"]);
		let monsterName = JSON.parse(localStorage["monsterName"]).slice(1, -1);

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

		this.globalLayer.add(text1);
		this.globalLayer.add(text2);
		this.globalLayer.draw();
	}

	drawAnnouncement() {
		let image = new Image();
		image.src = "./../../screens/battle/images/announcement_combat.png";
		image.onload = () => {
			let img = this.konvaImage(
				(document.documentElement.clientWidth - 104)/2, 
				Math.max((document.documentElement.clientHeight - 720) / 2, 0), 
				image,
				104, 
				138
			);

			this.globalLayer.add(img);
			this.globalLayer.draw();
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
			image.src = "./../../screens/battle/images/frame_gold.png";
			image.onload = () => {
				let img = this.konvaImage(
					x, 
					Math.max((document.documentElement.clientHeight - 720) / 2, 0) + 30, 
					image,
					366, 
					63
				);

				this.globalLayer.add(img);
				this.globalLayer.draw();
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
