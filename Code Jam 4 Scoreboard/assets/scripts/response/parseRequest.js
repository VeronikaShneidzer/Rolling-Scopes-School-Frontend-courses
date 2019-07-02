'use strict';

import { getUsers as getUsers } from '../request/xmlRequest.js';
import { getSessions as getSessions } from '../request/xmlRequest.js';

function parseRequest(session) {
	Promise.all([getUsers(), getSessions()]).then(values => { 
		createTable(session, values);
		createChart();
	});
}

function createTable(session, values) {
	let table = document.getElementById("table");
	table.innerHTML = '';

	let headerOfTable = document.createElement('tr');
	table.appendChild(headerOfTable);

	let cell = document.createElement("th");
	cell.innerHTML = "Display Name";
	headerOfTable.appendChild(cell);

	_.forEach(values[1][session.value]["puzzles"], item => {
		let cell = document.createElement("th");
		cell.innerHTML = item.name;
		headerOfTable.appendChild(cell);
	});

	let headerOfOurTime = document.createElement("th");
	headerOfOurTime.innerHTML = "Total time";
	headerOfTable.appendChild(headerOfOurTime);

	let comparison = document.createElement("th");
	comparison.innerHTML = "Comparison";
	headerOfTable.appendChild(comparison);

	_.forEach(values[0], (user, index) => {
		let row = document.createElement('tr');
		table.appendChild(row);

		let cell = document.createElement("td");
		cell.innerHTML = user.displayName;
		row.appendChild(cell);

		let finalTime = 0;
		_.forEach(values[1][session.value]["rounds"], item => {
			if (item["solutions"][user.uid] == undefined) {
				let cell = document.createElement("td");
				cell.title = "Not solved";
				cell.innerHTML = "150";
				row.appendChild(cell);
				finalTime += 150;
			}
			else {
				let cell = document.createElement("td");
				cell.title = (!item["solutions"][user.uid]["code"]) ? "Not solved" : item["solutions"][user.uid]["code"];
				cell.innerHTML = (item["solutions"][user.uid]["correct"] == "Correct") ? item["solutions"][user.uid]["time"]["$numberLong"] : "150";
				row.appendChild(cell);
				finalTime += +item["solutions"][user.uid]["time"]["$numberLong"];
			}
		});

		let ourTime = document.createElement("td");
		ourTime.innerHTML = finalTime;
		row.appendChild(ourTime);

		let comparison = document.createElement("td");
		comparison.innerHTML = "<input type=\"checkbox\" value=\"" + (+index + 1) + "\">";
		row.appendChild(comparison);
	});
}

function createChart() {
	let headerOFTable = document.getElementsByTagName('tr')[0];
	let titels = headerOFTable.getElementsByTagName('th');
	let arrOfLabels = [];
	_.forEach(titels, item => {
		arrOfLabels.push(item.textContent);
	});

	arrOfLabels = _.slice(arrOfLabels, 1, -2);

	let checkboxes = document.querySelectorAll("[type=\'checkbox\']");
	_.forEach(checkboxes, item => {
		item.addEventListener('change', function() {
			let checkboxes = document.querySelectorAll(":checked");
			let arrOfNames = [];
			let arrOfTimes = [];

			_.forEach(checkboxes, item => {
				let row = document.getElementsByTagName('tr')[item.value];
				let elem = row.getElementsByTagName('td');

				let arrOfDatas = [];
				_.forEach(elem, item => {
					arrOfDatas.push(item.textContent);
				});

				arrOfNames.push(_.slice(arrOfDatas, 0, 1));
				arrOfTimes.push(_.slice(arrOfDatas, 1, -2));
			});

			if (arrOfNames.length >= 10) arrOfNames = _.slice(arrOfNames, 0, 10);
			if (arrOfTimes.length >= 10) arrOfTimes = _.slice(arrOfTimes, 0, 10);

			let datasForChart = [];
			let colors = ['#7F00FF', '#FFFF00', '#0000FF', '#FF8000', '#00FFFF', '#FF0000', '#000000', '#FF0090', '#330000', '#808080'];
			for (let i = 0; i < arrOfNames.length; i++) {
				//Часто давали похожие цвета. Пришлось создать массив
				// let r = Math.floor(Math.random() * (255));
				// let g = Math.floor(Math.random() * (255));
				// let b = Math.floor(Math.random() * (255));
				// let color ='#' + r.toString(16) + g.toString(16) + b.toString(16);

				let arr = {
		 			label: arrOfNames[i],
		            data: arrOfTimes[i],
		            borderColor: colors[i],
		            backgroundColor: colors[i],
		            borderWidth: 3,
		            fill: false
		        };

				datasForChart.push(arr);
			}

			let ctx = document.getElementById("myChart");
			ctx.style.display = "block";
			
			let myChart = new Chart(ctx, {
			    type: 'line',
			    data: {
			        labels: arrOfLabels,
			        datasets: datasForChart
			    },
			    options: {
			        scales: {
			            yAxes: [{
			                ticks: {
			                    beginAtZero:true
			                }
			            }]
			        }
			    }
			});

		});
	});
}

export { parseRequest as parseRequest };