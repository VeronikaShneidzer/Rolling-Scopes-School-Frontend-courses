function drawTextHP(hp, coordinate, layer) {
	let text = new Konva.Text({
		x: document.documentElement.clientWidth/2 + coordinate,
		y: Math.max((document.documentElement.clientHeight - 720) / 2, 0) + 115,
		width: 50,
		text: hp,
		fontSize: 30,
		fontFamily: "Times New Roman",
		fontStyle: 'normal',
		align: 'center',
		fill: '#58c52d'
	});

	layer.add(text);
	layer.draw();

	return layer;
}

function konvaText(textT, textX, textY, textWidth, textFontSize, textAlign, color, font) {
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

function runExample() {
	var stage = new Konva.Stage({
		container: 'gameField',
		width: 800,
		height: 300,
	});

	var layer = new Konva.Layer();

	let hp = 200;

	layer = drawTextHP(hp, -document.documentElement.clientWidth/2 + 400, layer);

	stage.add(layer);
}

window.onload = () => runExample();

export { drawTextHP as drawTextHP };