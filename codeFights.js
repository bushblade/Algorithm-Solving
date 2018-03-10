//##################### The Journey Begins ######################

function add(param1, param2) {
  return param1 += param2
}
console.log(add(1, 2))

function centuryFromYear(year) {
  return Math.ceil(year / 100)
}
console.log(centuryFromYear(1905))

function checkPalindrome(inputString) {
  return inputString.toLowerCase() === inputString.toLowerCase().split('').reverse().join('')
}
console.log(checkPalindrome("aabaa"))

//################### Edge of the ocean ####################

function adjacentElementsProduct(inputArray) {
  return inputArray.reduce((sum, x, i) => {
    x * inputArray[i + 1] > sum ? sum = x * inputArray[i + 1] : false
    return sum
  }, Number.NEGATIVE_INFINITY)
}
console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]))

const shapeArea = n => n * (n - 1) * 2 + 1

console.log(shapeArea(5))

function makeArrayConsecutive2(statues) {
  let sorted = statues.sort((a, b) => a - b)
  let result = []
  for (let i = sorted[0]; i < sorted[sorted.length - 1]; i++) {
    !sorted.includes(i) ? result.push(i) : false
  }
  return result.length
}
console.log(makeArrayConsecutive2([6, 2, 3, 8]))

function almostIncreasingSequence(sequence) {
  let count = 0
  sequence.forEach((x, i) => {
    x <= sequence[i - 1] ? count++ : false
    x <= sequence[i - 2] && sequence[i + 1] <= sequence[i - 1] ? count += 2 : false
  })
  return count <= 1
}
console.log(almostIncreasingSequence([1, 3, 2, 1]))


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
console.log(matrixElementsSum([
  [0, 1, 1, 2],
  [0, 5, 0, 0],
  [2, 0, 3, 3]
]))

//###################### Smooth Sailing ##############################

function allLongestStrings(inputArray) {
  return inputArray.filter(x => x.length === Math.max(...inputArray.map(x => x.length)))
}
console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]))

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
console.log(commonCharacterCount("aabcc", "adcaa"))


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
console.log(isLucky(1230))


function sortByHeight(a) {
  const sorted = a.filter(x => x !== -1).sort((a, b) => a - b)
  return a.map(x => x === -1 ? x : sorted.shift())
}

console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]))


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

console.log(reverseParentheses("abc(cba)ab(bac)c"))
console.log(reverseParentheses("The ((quick (brown) (fox) jumps over the lazy) dog)"))


//############ Exploring the Waters ###############################################################################

function alternatingSums(a) {
  return a.reduce((w, x, i) => {
    i % 2 === 0 ? w[0] += x : w[1] += x
    return w
  }, [0, 0])
}

console.log(alternatingSums([50, 60, 60, 45, 70]))


function addBorder(picture) {
  picture = picture.map(x => x = `*${x}*`)
  let border = Array(picture[0].length).fill('*').join('')
  picture.push(border)
  picture.unshift(border)
  return picture
}

console.log(addBorder(["abc", "ded"]))

function areSimilar(a, b) {
  let ari = a.filter((x, i) => x !== b[i])
  let bri = b.filter((x, i) => x !== a[i])
  return ari.reverse().every((x, i) => x === bri[i]) ? true : false
}

console.log(areSimilar([1, 2, 3], [1, 2, 3]))

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
console.log(arrayChange([2, 1, 10, 1]))

function palindromeRearranging(inputString) {
  let check = inputString.split('').reduce((o, x) => {
    o[x] ? o[x]++ : o[x] = 1
    return o
  }, {})
  let count = 0
  for (v in check){
    check[v] % 2 === 0 ? delete check[v] : count++
  }
  if(count > 1){
    return false
  } else if(count === 1 && inputString % 2 !== 0){
    return true
  } else {
    return true
  }
}
console.log(palindromeRearranging("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaabc"))