import { data as data } from "./data";
import { KeyboardEvent as KeyboardEvent } from "./../../settings";
import { getFormToUser }  from '../../components/login';

export default class LoadingScreen {
	constructor(stage) {
		this.data = data;
		this.stage = stage;
		this.globalLayer = new Konva.Layer();
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
		return getFormToUser();
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

		this.globalLayer.add(text);
		this.globalLayer.draw();
	}

	drawFire() {
		let image = new Image();
		image.src = "./../../screens/loadingScreen/images/fire.png";
		image.onload = () => {
			let img = this.konvaImage(
				(Math.min(document.documentElement.clientWidth, 1920) - 60)/2, 
				(Math.min(document.documentElement.clientHeight, 1080) - 60), 
				image,
				51, 
				48
			);
			this.globalLayer.add(img);
			this.globalLayer.draw();
		}
	}

	drawOverlays() {
		let image = new Image();
		image.src = "./../../screens/loadingScreen/images/overlay1.png";
		image.onload = () => {
			let img = this.konvaImage(
				(Math.min(document.documentElement.clientWidth, 1920) - 689*this.scaleConst)/2, 
				(Math.min(document.documentElement.clientHeight, 1080) - 842*this.scaleConst), 
				image,
				689*this.scaleConst, 
				842*this.scaleConst
			);
			this.globalLayer.add(img);
			this.globalLayer.draw();
		}
	}

	drawBackground() {
		return new Promise((resolve, reject) => {
			let idOfScreen = Math.floor(Math.random() * this.data["countOfLoadingScreens"]) + 1;
			let scaleConst = Math.min(document.documentElement.clientWidth, 1920)/1920;

			let image = new Image();
			image.src = "./../../screens/loadingScreen/images/screens/loading_screen" + idOfScreen + ".png";
			image.onload = () => {
				let img = this.konvaImage(
					0, 
					0, 
					image,
					1920*scaleConst, 
					1080*scaleConst
				);
				this.globalLayer.add(img);
				this.stage.add(this.globalLayer);
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