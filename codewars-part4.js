// redKnight

function* moves(knightY, pawnX, knightX = 0) {
  const colours = ['White', 'Black']

  while (true) {
    ++pawnX
    knightX += 2
    knightY = knightY === 0 ? 1 : 0
    yield { colour: colours[knightY], pawnX, knightX }
  }
}

function redKnight(N, P) {
  for (const { colour, knightX, pawnX } of moves(N, P, 0)) {
    if (knightX >= pawnX) return [colour, knightX]
  }
}

// console.log(redKnight(0, 7))
// console.log(redKnight(0, 436456))

// Thinking & Testing: Uniq or not Uniq
function removeDuplicates(arr) {
  return Array.from(new Set(arr))
}
function testit(a, b) {
  return removeDuplicates(a)
    .concat(...removeDuplicates(b))
    .sort((a, b) => a - b)
}

// console.log(testit([1, 2], [2, 4]))
