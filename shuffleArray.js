const arrayToShuffle1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
const arrayToShuffle2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g']

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1))
    var temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  return array
}

// console.log(shuffleArray(arrayToShuffle1));

//without a loop

// const shuffle = arry => {
//   const shuffled = [...arry]
//   shuffled.forEach((x, i) => {
//     const rnd = Math.floor(Math.random() * shuffled.length),
//       temp = shuffled[i]
//     shuffled[i] = shuffled[rnd]
//     shuffled[rnd] = temp
//   })
//   return shuffled
// }

const shuffle = arry =>
  arry.reduce(
    (acc, x) => {
      const rnd = Math.floor(Math.random() * acc.length),
        temp = x
      x = acc[rnd]
      acc[rnd] = temp
      return acc
    },
    [...arry]
  )

console.log(shuffle(arrayToShuffle2))
