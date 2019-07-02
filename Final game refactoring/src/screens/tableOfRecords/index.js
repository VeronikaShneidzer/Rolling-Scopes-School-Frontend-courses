import { data as heroesData } from "../hero/data";

export default class TableOfRecords {
	constructor(stage) {
		this.stage = stage;
		this.table = JSON.parse(localStorage["tableOfRecords"]);
	}

	load(table) {
		return this.getTable();
	}

	getTable() {
		this.draw();
	}

	draw() {
		this.table = _.sortBy(this.table, 'monsters').reverse();

		document.getElementsByTagName("body")[0].style.overflow = "auto";
		document.getElementById("gameField").style.display = "none";
		document.getElementById("gameField").innerHTML = "";
		document.getElementById("modalWindow").style.display = "none";
		document.getElementById("modalWindow").style["background"] = "rgba(0, 0, 0, 0)";
		document.getElementsByClassName("taskModal")[0].style.background = "rgba(0, 0, 0, 0)";
		document.getElementsByClassName("tableOfRecords")[0].style.display = "flex";

		let table = document.getElementsByClassName('tableItems')[0];
		let tableItem;

		for (let i = 0; i < this.table.length; i++) {
			let item = this.table[i];

			tableItem = document.createElement('p');
			tableItem.className = "tableItem";
			tableItem.innerHTML = 
			"<img class=\"heroImg\" src=\"./../../screens/tableOfRecords/images/heroes/" + item['data'][0]
			+ "/portrait_roster.png\" /><p class=\"name\">" + item['data'][1] 
			+ "</p><p class=\"count\">" + item['monsters'] + "</p>";
			table.appendChild(tableItem);
		}
	}
}