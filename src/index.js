class Sorter {
  constructor() {
    this.array = [];
    this.compareFunction = (a, b) => a - b;
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
    const newArr = [];

    indices.forEach((elem) => {
      newArr.push(this.array[elem]);
      this.array[elem] = null;
    });
    
    newArr.sort(this.compareFunction);
    
    this.array.forEach((elem, i, arr) => {
     if(elem === null){
       arr[i] = newArr.shift()
     }
    });
  }

  setComparator(compareFunction) {
    this.compareFunction = compareFunction;
  }
}

module.exports = Sorter;