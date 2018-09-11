class Sorter {
  constructor() {
    this.array = [];
    this.size = 0;
    this.compareFunction = (a, b) => a - b;
  } 

  add(element) {
    this.array.push(element);
    this.size++;
  }

  at(index) {
    return this.array[index];
  }

  get length() {
    return this.size;
  }

  toArray() {
    return this.array;
  }

  sort(indices) {
    var newArr = [];
    var arr = this.array;
    indices.forEach(function(elem){
      newArr.push(arr[elem]);
      arr[elem] = null;
    });
    
    newArr.sort(this.compareFunction);
    
    arr.forEach(function(elem, i, arr){
     if(elem === null){
       arr[i] = newArr.shift()
     }
    });
    this.array = arr;
  }

  setComparator(compareFunction) {
    this.compareFunction = compareFunction;
  }
}

module.exports = Sorter;