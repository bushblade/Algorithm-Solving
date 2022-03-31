function dropElements(arr, func) {
  return func(arr[0]) ? arr.slice(0) : arr.length > 0 ? dropElements(arr.slice(1), func) : []
}

console.log(dropElements([1, 2, 3, 4], n => n > 5))
