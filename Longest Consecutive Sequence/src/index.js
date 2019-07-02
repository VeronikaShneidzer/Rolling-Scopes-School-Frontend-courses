module.exports = function longestConsecutiveLength(array) {
  if (array.length == 0) return 0;
  else if (array.length == 1) return 1;
  else {
    array.sort(function (previous, current) {
      if (previous > current) return 1;
      if (previous < current) return -1;
      return 0;
    });

    let currentLength = 1;
    let maxLength = 1;
    let temp = 0;

    for (let i = 0; i < array.length - 1; i++) {
      temp = array[i+1] - array[i];
      if (temp === 0) continue;
      currentLength = (temp === 1) ? currentLength + 1 : 1;
      maxLength = Math.max(currentLength, maxLength);
    }

    return maxLength;
  }
}
