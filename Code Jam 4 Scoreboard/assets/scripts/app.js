'use strict';

import { parseRequest as parseRequest } from './response/parseRequest.js';

window['_'] = require('lodash');
window['Chart'] = require('chart.js');

window.onload = function () {
	let session = document.getElementsByName('session');

	_.forEach(session, item => {
		item.addEventListener('change', function() {
			document.getElementById("myChart").style.display = "none";
			parseRequest(item);
			item.checked = false;
		});
	});
};

