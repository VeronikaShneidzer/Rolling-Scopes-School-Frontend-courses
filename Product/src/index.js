module.exports = function multiply(first, second) {
  let firstNum = numToArr(first).reverse();
  let secondNum = numToArr(second).reverse();
  let res = [];

  for (let i = 0; i < first.length; i++) {
    for (let j = 0; j < second.length; j++) {
      if (isNaN(res[i + j])) res[i + j] = 0;
      res[i + j] += firstNum[i] * secondNum[j];
    }
  }
  for (let k = 0; k <= first.length + second.length; k++) {
    if (isNaN(res[k + 1])) res[k + 1] = 0;
    res[k + 1] = Math.floor(res[k + 1] + res[k] / 10);
    res[k] = Math.floor(res[k] % 10);
  }
  while (res[res.length - 1] == 0) res.pop();

  return res.reverse().join('');

  function numToArr(number) {
    let arr = [];
    let n = '' + number;

    for (let i = 0; i < number.length; i++) {
      arr[i] = n[i];
    }

    return arr;
  }
}
