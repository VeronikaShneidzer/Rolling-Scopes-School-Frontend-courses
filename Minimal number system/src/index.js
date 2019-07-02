module.exports = function getBase(base) {
	if (base % 2 == 0) {
		for (let i = 3; i <= 36; i += 2) {
			let b = base;

			while (b % i == 1) {
				b = Math.floor(b / i);
				if (b == 1) return i;
			}
		}
	}
	else {
		for (let i = 2; i <= 36; i++) {
			let b = base;

			while (b % i == 1) {
				b = Math.floor(b / i);
				if (b == 1) return i;
			}
		}
	}

	return base - 1;
}
