'use strict';

function getUsers() {
	return new Promise(function(resolve, reject) {
		let XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
		let xhr = new XHR();

		xhr.open("GET", "https://cors.io/?https://drive.google.com/uc?export=download&id=1FPWvxF7ucm7mGmQkKghgpJs0JZ2oUZnP", true);
		xhr.send();
		xhr.onreadystatechange = () => {
			if (xhr.readyState === 4 && xhr.status === 200) {
				resolve(JSON.parse(xhr.responseText));
			}
		};
	})
}

function getSessions() {
	return new Promise(function(resolve, reject) {
		let XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
		let xhr = new XHR();

		xhr.open("GET", "https://cors.io/?https://drive.google.com/uc?export=download&id=1S6u1jtkz_iSFacb1W1xr2tjc0aKbqQLk", true);
		xhr.send();
		xhr.onreadystatechange = () => {
			if (xhr.readyState === 4 && xhr.status === 200) {
				resolve(JSON.parse(xhr.responseText));
			}
		};
	})
}

export { getUsers as getUsers };
export { getSessions as getSessions };