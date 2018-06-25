//##################### The Journey Begins ######################

function add(param1, param2) {
  return param1 += param2
}
// console.log(add(1, 2))

function centuryFromYear(year) {
  return Math.ceil(year / 100)
}
// console.log(centuryFromYear(1905))

function checkPalindrome(inputString) {
  return inputString.toLowerCase() === inputString.toLowerCase().split('').reverse().join('')
}
// console.log(checkPalindrome("aabaa"))

//################### Edge of the ocean ####################

function adjacentElementsProduct(inputArray) {
  return inputArray.reduce((sum, x, i) => {
    x * inputArray[i + 1] > sum ? sum = x * inputArray[i + 1] : false
    return sum
  }, Number.NEGATIVE_INFINITY)
}
// console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]))

const shapeArea = n => n * (n - 1) * 2 + 1

// console.log(shapeArea(5))

function makeArrayConsecutive2(statues) {
  let sorted = statues.sort((a, b) => a - b)
  let result = []
  for (let i = sorted[0]; i < sorted[sorted.length - 1]; i++) {
    !sorted.includes(i) ? result.push(i) : false
  }
  return result.length
}
// console.log(makeArrayConsecutive2([6, 2, 3, 8]))

function almostIncreasingSequence(sequence) {
  let count = 0
  sequence.forEach((x, i) => {
    x <= sequence[i - 1] ? count++ : false
    x <= sequence[i - 2] && sequence[i + 1] <= sequence[i - 1] ? count += 2 : false
  })
  return count <= 1
}
// console.log(almostIncreasingSequence([1, 3, 2, 1]))


function matrixElementsSum(matrix) {
  let avoid = []
  let price = 0
  matrix.forEach((arr, indx) => {
    arr.forEach((x, i) => {
      if (!avoid.includes(i)) {
        x === 0 ? avoid.push(i) : false
        price += x
      }
    })
  })
  return price
}
// console.log(matrixElementsSum([
//   [0, 1, 1, 2],
//   [0, 5, 0, 0],
//   [2, 0, 3, 3]
// ]))

//###################### Smooth Sailing ##############################

function allLongestStrings(inputArray) {
  return inputArray.filter(x => x.length === Math.max(...inputArray.map(x => x.length)))
}
// console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]))

function commonCharacterCount(s1, s2) {
  const match = s1.split('').filter(x => s2.split('').includes(x)),
    makeObj = str => {
      return str.split('').reduce((obj, x) => {
        if (match.includes(x)) {
          obj[x] ? obj[x]++ : obj[x] = 1
        }
        return obj
      }, {})
    }
  let s1Obj = makeObj(s1),
    s2Obj = makeObj(s2),
    result = 0
  for (letter in s1Obj) {
    s1Obj[letter] < s2Obj[letter] ? result += s1Obj[letter] : result += s2Obj[letter]
  }
  return result
}
// console.log(commonCharacterCount("aabcc", "adcaa"))


function isLucky(n) {
  const ticketArr = String(n).split('')
  const chunkSize = ticketArr.length / 2
  let i = 0
  let chunkedUp = []
  while (i < ticketArr.length) {
    chunkedUp.push(ticketArr.splice(i, chunkSize))
  }
  i += chunkSize
  return chunkedUp[0].reduce((sum, x) => sum += Number(x), 0) === chunkedUp[1].reduce((sum, x) => sum += Number(x), 0)
}
// console.log(isLucky(1230))


function sortByHeight(a) {
  const sorted = a.filter(x => x !== -1).sort((a, b) => a - b)
  return a.map(x => x === -1 ? x : sorted.shift())
}

// console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]))


function reverseParentheses(s) {
  let brackets = s.split('').filter(x => x === '(')
  brackets.forEach(() => {
    let arr = [...s],
      lastL = arr.lastIndexOf('('),
      nextR = arr.indexOf(')', lastL),
      chunk = arr.slice(lastL, nextR + 1),
      removeLnR = chunk.filter(x => x !== '(' && x !== ')')
    s = s.replace(chunk.join(''), removeLnR.reverse().join(''))
  })
  return s
}

// console.log(reverseParentheses("abc(cba)ab(bac)c"))
// console.log(reverseParentheses("The ((quick (brown) (fox) jumps over the lazy) dog)"))


//############ Exploring the Waters ###############################################################################

function alternatingSums(a) {
  return a.reduce((w, x, i) => {
    i % 2 === 0 ? w[0] += x : w[1] += x
    return w
  }, [0, 0])
}

// console.log(alternatingSums([50, 60, 60, 45, 70]))


function addBorder(picture) {
  picture = picture.map(x => x = `*${x}*`)
  let border = Array(picture[0].length).fill('*').join('')
  picture.push(border)
  picture.unshift(border)
  return picture
}

// console.log(addBorder(["abc", "ded"]))

function areSimilar(a, b) {
  let ari = a.filter((x, i) => x !== b[i])
  let bri = b.filter((x, i) => x !== a[i])
  return ari.reverse().every((x, i) => x === bri[i]) ? true : false
}

// console.log(areSimilar([1, 2, 3], [1, 2, 3]))

function arrayChange(inputArray) {
  let count = 0
  for (let i = 1; i < inputArray.length; i++) {
    if (inputArray[i] <= inputArray[i - 1]) {
      inputArray[i] = inputArray[i] += 1
      count++
      i = i - 1
    }
  }
  return count
}
// console.log(arrayChange([2, 1, 10, 1]))

function palindromeRearranging(inputString) {
  let check = [...inputString].reduce((o, x) => {
    o[x] ? o[x]++ : o[x] = 1
    return o
  }, {})
  let count = 0
  for (v in check) {
    check[v] % 2 !== 0 ? count++ : false
  }
  return count < 2
}
// console.log(palindromeRearranging("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaabc"))

//####################### Island of Knowledge ###############################

function areEquallyStrong(yl, yr, fl, fr) {
  return [yl, yr].filter((x) => [fl, fr].includes(x)).length === 2
}
// console.log(areEquallyStrong(5, 5, 10, 10))

function arrayMaximalAdjacentDifference(inputArray) {
  return inputArray.reduce((a, x, i, arr) => {
    let prev = Math.abs(x - arr[i - 1])
    let next = Math.abs(x - arr[i + 1])
    let b = prev > next ? prev : next
    b > a ? a = b : false
    return a
  }, 0)
}
// console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]))

function isIPv4Address(inputString) {
  return inputString.split('.').length === 4 ?
    inputString.split('.').every(x => /^\d+$/.test(x) && x >= 0 && x <= 255) :
    false
}
// console.log(isIPv4Address("0..1.0.0"))

function avoidObstacles(inputArray) {
  const sorted = inputArray.sort((a, b) => a - b)
  // const arr = Array(Math.max(...inputArray) + 2).fill(0).map((x, i) => i)
  console.log(sorted)
  let result = []
  let i = 0
  const chunk = a => {
    if (a[i += 1] !== (a[i] + 1)) {
      result.push(a.splice(0, i))
    }
    i++
    if (a.length > 0) chunk(a)
    console.log(i)
    console.log(a)
  }
  chunk(sorted)
  return result
}
console.log(avoidObstacles([5, 3, 6, 7, 9, 2,12,18]))