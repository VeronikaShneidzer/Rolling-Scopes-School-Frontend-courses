module.exports = function makeExchange(currency) {
	if (currency >= 10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};
	if (currency <= 0) return {};

	let result = {};

	if (currency >= 50) {
		result["H"] = Math.floor(currency / 50);
		currency -= result["H"] * 50;
	}

	if (currency >= 25) {
		result["Q"] = Math.floor(currency / 25);
		currency -= result["Q"] * 25;
	}

	if (currency >= 10) {
		result["D"] = Math.floor(currency / 10);
		currency -= result["D"] * 10;
	}

	if (currency >= 5) {
		result["N"] = Math.floor(currency / 5);
		currency -= result["N"] * 5;
	}

	if (currency >= 1) {
		result["P"] = currency;
	}

	return result;
}
