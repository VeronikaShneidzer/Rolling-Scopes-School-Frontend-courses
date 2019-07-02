/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */

module.exports = function getLoveTrianglesCount(preferences = []) {
  let counter = 0;

  preferences.forEach(function(element, i) {
    let one = element;
    let two = preferences[one - 1];

    if (i + 1 == preferences[two - 1]) counter++;
  });

  return ~~(counter/3);
};
