module.exports = function getZerosCount(number, base) {
  //  https://comeoncodeon.wordpress.com/2010/02/17/number-of-zeores-and-digits-in-n-factorial-in-base-b/

  let initialNumber = number;
  let initialBase = base;

  for (let i = 2; i <= base; i++) {
    if (initialBase % i === 0) {
      let baseCounter = 0;

      while (initialBase % i === 0) {
        baseCounter++;
        initialBase = ~~(initialBase / i);
      }

      let summOfTemps = 0;
      let tempNumber = number;

      while (tempNumber / i > 0) {
        tempNumber = ~~(tempNumber / i);
        summOfTemps += tempNumber;
      }

      initialNumber = Math.min(initialNumber, summOfTemps / baseCounter);
    }
  }
  return ~~(initialNumber);
}
