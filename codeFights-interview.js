function firstNotRepeatingCharacter(s) {
  let obj = [...s].reduce((o, x) => {
    o[x] ? o[x]++ : o[x] = 1
    return o
  }, {})
  return Object.keys(obj).filter(x => obj[x] === 1)[0] || '_'
}
// console.log(firstNotRepeatingCharacter("abacabaabacaba"))

function firstDuplicate(a) {
  let temp = {}
  for (let i = 0; i < a.length; i++) {
    temp[a[i]] ? temp[a[i]]++ : temp[a[i]] = 1
    if (temp[a[i]] === 2) {
      return a[i]
    }
  }
  return -1
}

// console.log(firstDuplicate([2, 3, 3, 1, 5, 2]))

function rotateImage(a) {
  return a.reverse().map((x, i) => a.map(e => e[i]))
}
// console.log(rotateImage([
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ]))

function sudoku2(grid) {
  let solved = false
  const check = arr => {
    arr = arr.filter(x => x !== '.')
    let s = Array.from(new Set([...arr]))
    s.length === arr.length ? solved = true : solved = false
  }
  const cols = grid.map((x, i) => grid.map(e => e[i]))
  // console.log(cols)

  grid.forEach(a => check(a))
  cols.forEach(c => check(c))
  
  const gridA = grid.splice(0, 3),
        gridB = grid.splice(0, 3),
        gridC = grid.splice(0, 3)
       
  console.log(gridA)
  console.log(gridB)
  console.log(gridB)
  
  return solved
}
console.log(sudoku2([
  ['.', '.', '.', '1', '4', '.', '.', '2', '.'],
  ['.', '.', '6', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '1', '.', '.', '.', '.', '.', '.'],
  ['.', '6', '7', '.', '.', '.', '.', '.', '9'],
  ['.', '.', '.', '.', '.', '.', '8', '1', '.'],
  ['.', '3', '.', '.', '.', '.', '.', '.', '6'],
  ['.', '.', '.', '.', '.', '7', '.', '.', '.'],
  ['.', '.', '.', '5', '.', '.', '.', '7', '.']
]))