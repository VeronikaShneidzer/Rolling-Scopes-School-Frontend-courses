import { data as heroesData } from "../heroes/data";

export default class Table_of_records {
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
		document.getElementById("game-field").style.display = "none";
		document.getElementById("game-field").innerHTML = "";
		document.getElementById("modal_window").style.display = "none";
		document.getElementById("modal_window").style["background"] = "rgba(0, 0, 0, 0)";
		document.getElementsByClassName("task_modal")[0].style.background = "rgba(0, 0, 0, 0)";
		document.getElementsByClassName("tableOfRecords")[0].style.display = "flex";

		let table = document.getElementsByClassName('tableItems')[0];
		let p;

		for (let i = 0; i < this.table.length; i++) {
			let item = this.table[i];
			p = document.createElement('p');
			p.className = "table_item";
			p.innerHTML = 
			"<img class=\"hero_img\" src=\"./assets/images/heroes/" + item['data'][0]
			+ "/portrait_roster.png\" /><p class=\"name\">" + item['data'][1] 
			+ "</p><p class=\"count\">" + item['monsters'] + "</p>";
			table.appendChild(p);
		}
	}
}