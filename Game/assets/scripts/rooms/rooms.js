import { data as data } from "./data";

export default class Room {
	constructor(stage, global_layer) { 
		this.data = data;
		this.stage = stage;
		this.global_layer = global_layer;

		this.idOfLoc = JSON.parse(localStorage["currentLocationsId"]);
		this.idOfRoom = JSON.parse(localStorage["currentRoomId"]);
	}

	load() {
		return this.loadRoom();
	}

	loadRoom() {
		return new Promise((resolve, reject) => {
			this.changeRoom();
			this.drawRoom()
			.then(() => {
				resolve();
			})
		});
	}

	changeRoom(resolve) {
		this.idOfRoom = JSON.parse(localStorage["currentRoomId"]);

		if (this.idOfRoom == data["locations"][this.idOfLoc]["rooms"]) {
			this.idOfRoom = 1;
			localStorage["currentLocationsId"] = (localStorage["currentLocationsId"] == data["lengthCounter"]) ? 0 : +localStorage["currentLocationsId"] + 1;
			this.idOfLoc = localStorage["currentLocationsId"];
		}
		else this.idOfRoom++;

		localStorage["currentRoomId"] = this.idOfRoom;

		return;
	}

	drawRoom() {
		return new Promise((resolve, reject) => {
			this.stage.clear();

			let scale = Math.min(document.documentElement.clientHeight, 720)/720;
			
			let image = new Image();
			image.src = "./assets/images/locations/" + this.data["locations"][this.idOfLoc]["name"] + "/room" + (+this.idOfRoom) + ".png";
			image.onload = () => {
				let img = this.konvaImage(
					(document.documentElement.clientWidth - 1920*scale)/2,
					Math.max((document.documentElement.clientHeight - 720) / 2, 0), 
					image, 
					1920*scale, 
					Math.min(document.documentElement.clientHeight, 720)
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
}