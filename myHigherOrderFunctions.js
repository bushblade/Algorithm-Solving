Array.prototype.myForEach = function(fn) {
  for (let i = 0; i < this.length; i++) {
    fn(this[i], i, this)
  }
}

Array.prototype.myEvery = function(fn) {
  let bool = true
  for (let i = 0; i < this.length; i++) {
    if (!fn(this[i], i, this)) {
      bool = false
    }
  }
  return bool
}

Array.prototype.myMap = function(fn) {
  let newArr = []
  for (let i = 0; i < this.length; i++) {
    newArr.push(fn(this[i], i, this))
  }
  return newArr
}

Array.prototype.myFilter = function(fn) {
  let newArr = []
  for (let i = 0; i < this.length; i++) {
    if (fn(this[i], i, this)) {
      newArr.push(this[i])
    }
  }
  return newArr
}

Array.prototype.myReduce = function(fn, acc = 0) {
  for (let i = 0; i < this.length; i++) {
    acc = fn(acc, this[i], i, this)
  }
  return acc
}

Array.prototype.myLastIndexOf = function(val) {
  for (let i = this.length - 1; i >= 0; i--) {
    if (this[i] === val) {
      return i
    }
  }
  return -1
}
