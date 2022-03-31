const recursiveSort = arr => {
  const copy = [...arr]
  const min = Math.min(...copy)
  copy.splice(copy.indexOf(min), 1)
  return arr.length === 0 ? [] : [min].concat(recursiveSort(copy))
}

const toCharCode = arr => arr.map(c => c.charCodeAt(0))

const toString = arr => arr.map(n => String.fromCharCode(n))

const sortArrWithRecursion = arr => {
  return arr.every(c => typeof c === 'number')
    ? recursiveSort(arr)
    : toString(recursiveSort(toCharCode(arr)))
}

console.log(sortArrWithRecursion(['y', 't', 'b', 'e', 'a']))

console.log(recursiveSort([5, 4, 6, 3, 7, 3]))
