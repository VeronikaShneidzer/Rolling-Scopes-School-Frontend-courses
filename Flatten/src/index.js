module.exports = function flatten(array) {
	if (Array.isArray(array) != true || array.length == 0) return [];

	let arr = [];

	returnArr(array);
	
	return arr;

	function returnArr(a) {
		for (let i = 0; i < a.length; i++) {
			if (Array.isArray(a[i])) returnArr(a[i]);
			else arr.push(a[i]);
		}
	}
}
