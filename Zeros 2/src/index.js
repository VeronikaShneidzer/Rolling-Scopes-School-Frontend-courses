module.exports = function getZerosCount(number) {
  console.log(number);

  let countOf2 = 0;
  let countOf5 = 0;

  while (number != 0) {
    let n = number;
    while (n % 2 == 0) {
        n /= 2;
        countOf2++;
    }
    while (n % 5 == 0) {
        n /= 5;
        countOf5++;
    }
    number--;
  }

  return (countOf2 <= countOf5) ? countOf2 : countOf5;
}
