const flat = arr => {
  if (!arr.length) return []
  const [first, ...rest] = arr
  return Array.isArray(first) ? flat([...first, ...rest]) : [first, ...flat(rest)]
}

const testArr = [[1, 2, 3, [4, 5, [9, 9, 9]]], [6, 7, 8]]

console.log(flat(testArr))
