function drawHPImage(hp, coordinate, layer, trigger, maxHP) {
	let scale = (hp == 0) ? 0.001 : hp/maxHP;
	
	let image = new Image();
	image.src = "./images/target_h_4.png";
	image.onload = () => {
		let img = konvaImage(
			document.documentElement.clientWidth/2 + coordinate, 
			Math.max((document.documentElement.clientHeight - 720) / 2, 0) - 30, 
			image,
			280*scale, 
			206
		);

		if (trigger == 0) img.scaleX(-1);

		layer.add(img);
		layer.draw();
	}

	return layer;
}

function konvaImage(iX, iY, iImage, iWidth, iHeight) {
	return new Konva.Image({
		x: iX,
		y: iY,
		image: iImage,
		width: iWidth,
		height: iHeight
	});
}

function runExample() {
	var stage = new Konva.Stage({
		container: 'gameField',
		width: 800,
		height: 300,
	});

	var layer = new Konva.Layer();

	let hp = 200;

	layer = drawHPImage(hp, -document.documentElement.clientWidth/2 + 100, layer, 1, 331);

	stage.add(layer);
}

window.onload = () => runExample();

export { drawHPImage };