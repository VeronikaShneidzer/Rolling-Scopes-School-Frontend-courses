class Sorter {
  constructor() {
    this.array = [];
    this.compareFunction = function (a, b) {
      if (a > b) return 1;
      if (a < b) return -1;
      return 0;
    };
  }

  add(element) {
    this.array.push(element);
  }

  at(index) {
    return this.array[index];
  }

  get length() {
    return this.array.length;
  }

  toArray() {
    return this.array;
  }

  sort(indices) {
    let temp = [];

    indices.forEach(x => {
        temp.push(this.array[x]);
        this.array[x] = undefined;
    });

    temp.sort(this.compareFunction);

    this.array = this.array.map(x => (x == undefined) ? temp.shift() : x);

    return this.array;
  }

  setComparator(compareFunction) {
    this.compareFunction = compareFunction;
  }
}

module.exports = Sorter;
