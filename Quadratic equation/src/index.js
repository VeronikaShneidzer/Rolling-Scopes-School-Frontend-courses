module.exports = function solveEquation(equation) {
  let arr = equation.split(' ');
  let a = +arr[0];
  let b = (arr[3] === '-') ? (0 - +arr[4]) : +arr[4];
  let c = (arr[7] === '-') ? (0 - +arr[8]) : +arr[8];

  while (a % 2 === 0 && b % 2 === 0 && c % 2 === 0) {
    a /= 2;
    b /= 2;
    c /= 2;
  }

  let d = b * b - 4 * a * c;

  if (d === 0) return (0 - b) / (2 * a);
  else if (d > 0) {
    let x1 = (0 - b + Math.round(Math.sqrt(d))) / (2 * a);
    let x2 = (0 - b - Math.round(Math.sqrt(d))) / (2 * a);

    return [Math.round(x1), Math.round(x2)].sort(function (a, b) {
      if (a > b) return 1;
      if (a < b) return -1;
      return 0;
    });
  }
  else return 0;
}
