module.exports = function sum() {
	if (arguments[0] == undefined) return 0;

	let curr = []
	for (let i = 0; i < arguments.length; i++) {
		curr.push(arguments[i]);
	}

  
	return function f() {
		if (arguments[0] == undefined) {
			return curr.reduce((x, y) => x + y);
		}

		for (let i = 0; i < arguments.length; i++) {
			if (typeof +arguments[i] == 'number') curr.push(+arguments[i]);
		}

		return f;
	};
}