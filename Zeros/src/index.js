module.exports = function zeros(expression) {
  console.log(expression);
  let numOfNulls = 0;
  let numOfTwo = 0;
  let numOfFive = 0;

  let arrOfFactorials = expression.split("*");

  let resOfFactorials = arrOfFactorials.map(function(currValue) {
    let numValue = parseInt(currValue);

    if (currValue.length - (numValue + "").length == 1) {
      return factorial(numValue, 'simple');
    }
    else {
      return factorial(numValue, '');
    }
  });

  countOfTwoAndFive(resOfFactorials);
  numOfNulls += (numOfTwo < numOfFive) ? numOfTwo : numOfFive;

  return numOfNulls;

  function factorial(num, trigger) {
    let res = 1;

    if (trigger === 'simple') {
      while (num !== 0) {
        if (num % 5 == 0 || num % 2 == 0) {
          res = bigToSmall(res, num);
          res = nullCounter(res);
          }
        num--;
      }
    }
    else {
      while (num > 0) {
        if (num % 5 == 0 || num % 2 == 0) {
          res = bigToSmall(res, num);
          res = nullCounter(res);
          }
        num -= 2;
      }
    }

    return res;
  }

  function nullCounter(num) {
    let temp = 0;

    while (num % 10 == 0) {
      num = num / 10;
      temp++;
    }
    numOfNulls += temp;

    return num;
  }

  function bigToSmall(res, temp) {
    while (temp % 5 == 0) {
      res *= 5;
      temp /= 5;
    }
    while (temp % 2 == 0) {
      res *= 2;
      temp /= 2;
    }

    return res;
  }

  function countOfTwoAndFive(arr) {
    for (let i = 0; i < arr.length; i++) {
      let temp = arr[i];

      while (temp % 5 == 0) {
        temp /= 5;
        numOfFive++;
      }
      while (temp % 2 == 0) {
        temp /= 2;
        numOfTwo++
      }
    }
  }
}
