const myarray = [1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

const chunkArray = ([...arr], n) => {
  const chunk = (a = []) => {
    a.push(arr.splice(0, n))
    return arr.length > 0 ? chunk(a) : a
  }
  return chunk()
}

console.log(chunkArray(myarray, 2))

console.log(myarray)
