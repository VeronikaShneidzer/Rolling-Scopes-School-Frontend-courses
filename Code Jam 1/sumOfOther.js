function sumOfOther(arr) {
    if (arr.length === 0 || typeof arr != 'Array') return null;

    let total = arr.reduce((a, b) => { return a + b; });

    return arr.map(x => total - x);
}

sumOfOther(true);
sumOfOther('string');
sumOfOther([]);
sumOfOther([1]);
sumOfOther([2, 3, 4, 1]);
