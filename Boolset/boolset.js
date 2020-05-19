function boolset() {
	let array = [
				  'a', true,
				  'b', true,
				  'c', false,
				  'd', true,
				  'e', false
				];

	let arr = _.chunk(array,2);
	// => [['a', true],['b', true],['c', false],['d', true],['e', false]];

	arr = _.fromPairs(arr);
	// => {a: true, b: true, c: false, d: true, e: false}

	let a = _.reduce(arr, function(result, value, key) {
		(result[value] || (result[value] = [])).push(key);
  		return result;
		}, {});
	// => {true: ['a', 'b', 'd'], false: ['c', 'e']}

	let c = _.map(a, (x, y) => {  return x});
	// => [{true: ['a', 'b', 'd']}, {false: ['c', 'e']}]

	let b = _.head(c);
	// => ['a', 'b', 'd']

	// In one string^
	_.head(
		_.map(
			_.reverse(
				_(array).chunk(2)
						.fromPairs()
						.reduce(function(result, value, key) {
							(result[value] || (result[value] = [])).push(key);
							return result;}, {})
			), (x, y) => {  return x}
		)
	);
}