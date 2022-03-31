//Strip Comments
function solution(input, markers) {
  let check = true
  return [...input].reduce((str, x, i, arr) => {
    if (markers.includes(arr[(i += 1)])) check = false
    else if (x === '\n') check = true
    if (check) str += x
    return str
  }, '')
}
// console.log(solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"]))

// Your order please
function order(words) {
  return (
    words
      .split(' ')
      .sort((a, b) => a.match(/\d/g) - b.match(/\d/g))
      .join(' ') || ''
  )
}

// console.log(order("is2 Thi1s T4est 3a"))

String.prototype.toAlternatingCase = function() {
  return [...this].reduce(
    (str, ltr) => (/[a-z]/.test(ltr) ? (str += ltr.toUpperCase()) : (str += ltr.toLowerCase())),
    ''
  )
}

// console.log('TesTing'.toAlternatingCase())
function validatePIN(pin) {
  return [...pin].every(l => /\d/.test(l)) && (pin.length === 4 || pin.length === 6)
}

// console.log(validatePIN('1234'))

function highestRank(arr) {
  const hash = arr.reduce((obj, n) => {
    obj[n] ? obj[n]++ : (obj[n] = 1)
    return obj
  }, {})
  const most = hash[Object.keys(hash).sort((a, b) => hash[b] - hash[a])[0]]
  return Number(
    Object.keys(hash)
      .filter(key => hash[key] === most)
      .sort((a, b) => b - a)[0]
  )
}

// console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12]))

var countSheep = function(num) {
  return Array(num)
    .fill()
    .map((x, i) => `${i + 1} sheep...`)
    .join('')
}

// console.log(countSheep(3))

function solution(number) {
  return [...Array(number - 1)]
    .map((x, i) => i + 1)
    .reduce(
      (arr, x) => {
        if (x % 5 === 0 && x % 3 === 0) arr[2]++
        if (x % 5 === 0 && x % 3 !== 0) arr[1]++
        if (x % 3 === 0 && x % 5 !== 0) arr[0]++
        return arr
      },
      [0, 0, 0]
    )
}

// console.log(solution(20))

function solveIt(a, b) {
  let alice = 0,
    bob = 0
  a.forEach((x, i) => {
    if (x > b[i]) alice++
    else if (x < b[i]) bob++
  })
  if (alice > bob) {
    return `${alice}, ${bob}: Alice made "Kurt" proud!`
  } else if (bob > alice) {
    return `${alice}, ${bob}: Bob made "Jeff" proud!`
  } else {
    return `${alice}, ${bob}: that looks like a "draw"! Rock on!`
  }
}

// console.log(solve([47, 67, 22], [26, 47, 12]))

function balancedNum(number) {
  const str = String(number)
  let [left, right] = [...str].reduce(
    (arr, num, i, a) => {
      if (i < a.length / 2) arr[0].push(num)
      else arr[1].push(num)
      return arr
    },
    [[], []]
  )
  if (str.length % 2 === 0) {
    left.pop()
    right.shift()
  } else {
    left.pop()
  }
  left = left.reduce((sum, num) => (sum += Number(num)), 0)
  right = right.reduce((sum, num) => (sum += Number(num)), 0)
  return left === right ? 'Balanced' : 'Not Balanced'
}

// console.log(balancedNum(29559))

function toCamelCase(str) {
  let words = str.split(/-|_/)
  for (let i in words) {
    if (i > 0) words[i] = [...words[i]].map((x, i) => (i === 0 ? x.toUpperCase() : x)).join('')
  }
  return words.join('')
}

// console.log(toCamelCase("the-stealth-warrior"))

function twoSum(numbers, target) {
  console.log(numbers, target)
  for (const i in numbers) {
    for (const j in numbers) {
      if (numbers[i] + numbers[j] === target && i !== j) {
        return [i, j].map(x => Number(x))
      }
    }
  }
}

// console.log(twoSum([ 0, 1, 2, 3 ], 3))

function replaceZero(arr) {
  let longest = 0
  const longestArrOfOnes = a =>
    a
      .join('')
      .split('0')
      .sort((c, d) => d.length - c.length).length
  return arr.reduce((result, val, indx) => {
    let tempArr = [...arr]
    if (val === 0) {
      tempArr[indx] = 1
      if (longestArrOfOnes(tempArr) >= longest) {
        longest = longestArrOfOnes(tempArr)
        result = indx
      }
    }
    return result
  }, 0)
}

// console.log(replaceZero([1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1]))

function tickets(peopleInLine) {
  let pockets = {
    25: 0,
    50: 0
  }
  for (let person of peopleInLine) {
    if (person === 25) pockets[25]++
    else if (person === 50) {
      pockets[25]--
      pockets[50]++
      if (pockets[25] < 0) return 'NO'
    } else {
      pockets[25]--
      if (pockets[50] > 0) pockets[50]--
      else pockets[25] -= 2
      if (pockets[25] < 0 || pockets[50] < 0) return 'NO'
    }
  }
  return 'YES'
}

// console.log(tickets([25, 50, 25, 100, 25, 25, 25, 100, 25, 25, 25, 100, 25, 50, 25, 100, 25, 25, 50, 100, 50, 100]))

weirdReverse = a => a.sort(n => 1)

// console.log(weirdReverse([1, 2, 3, 'a', 'b', 'c', []]))

function predictAge(age1, age2, age3, age4, age5, age6, age7, age8) {
  return Math.floor(Math.sqrt([...arguments].map(n => n * n).reduce((s, x) => s + x, 0)) / 2)
}

// console.log(predictAge(65, 60, 75, 55, 60, 63, 64, 45))

function high(x) {
  const alpha = 'abcdefghijklmnopqrstuvwxyz',
    wordScore = word => [...word].reduce((s, l) => s + alpha.indexOf(l) + 1, 0),
    scores = x.split(' ').map(word => wordScore(word)),
    indxOfBiggest = scores.indexOf(Math.max(...scores))
  return x.split(' ')[indxOfBiggest]
}

// console.log(high('man i need a taxi up to ubud'))

function countInversions(array) {
  return array.reduce((sum, n, i, arr) => {
    arr.slice(i + 1).forEach(x => (n > x ? sum++ : 0))
    return sum
  }, 0)
}

// console.log(countInversions([1,3,2,4]))

function reverseVowels(str) {
  const vowels = 'aeiouAEIOU',
    vowelsInStr = [...str].filter(l => vowels.includes(l))
  return [...str].reduce((s, l) => {
    vowels.includes(l) ? (s += vowelsInStr.pop()) : (s += l)
    return s
  }, '')
}

// console.log(reverseVowels("Tomatoes"))

function digits(num) {
  return [...`${num}`]
    .map(n => Number(n))
    .reduce((arr, num, indx, or) => {
      arr.push(...or.filter((x, i) => i > indx).map(a => a + num))
      return arr
    }, [])
}

// console.log(digits(12345))

function highlight(code) {
  const syntax = charset => {
    if (/^F+$/g.test(charset)) return `<span style="color: pink">${charset}</span>`
    else if (/^L+$/g.test(charset)) return `<span style="color: red">${charset}</span>`
    else if (/^R+$/g.test(charset)) return `<span style="color: green">${charset}</span>`
    else if (/^\d+$/g.test(charset)) return `<span style="color: orange">${charset}</span>`
    else return charset
  }
  let temp = ''
  return [...code].reduce((str, char, indx, or) => {
    temp += char
    if (/\d/.test(char)) {
      if (!/\d/.test(or[indx + 1])) {
        str += syntax(temp)
        temp = ''
      }
    } else if (or[indx + 1] !== char) {
      str += syntax(temp)
      temp = ''
    }
    return str
  }, '')
}

// console.log(highlight('345F'))

function wave(s) {
  return [...s]
    .map((letter, indx) => [...s].map((l, i) => (i === indx ? l.toUpperCase() : l)).join(''))
    .filter((str, j) => /[a-z]/i.test([...s][j]))
}

// console.log(wave(" Huw   sdoqov "))

function parse(data) {
  let arr = [],
    output = 0
  const p = {
    i: () => output++,
    d: () => output--,
    s: () => (output = output * output),
    o: () => arr.push(output)
  }
  data.split('').forEach(l => {
    if (p[l]) p[l]()
  })
  return arr.length >= 1 ? arr : output
}

// console.log(parse("iiisdoso"))

function unluckyDays(year) {
  return Array(12)
    .fill()
    .filter((x, i) => new Date(year, i, 13).getDay() === 5).length
}

// console.log(unluckyDays(2015))

// function solve(str, k) {
//   return [...str].reduce((s, n, i) => {
//     let sub = str.substr(i, str.length - k)
//     if (Number(sub) > s) s = Number(sub)
//     return s
//   }, 0)
// }

// console.log(solve('123',1))

function reverseWords(str) {
  return str
    .split(' ')
    .map(w => [...w].reverse().join(''))
    .join(' ')
}

// console.log(reverseWords('The quick brown fox jumps over the lazy dog.'))

function timeForMilkAndCookies(date) {
  const [a, b, c, ...rest] = date.toString().split(' ')
  return b === 'Dec' && c === '24'
}

// console.log(timeForMilkAndCookies(new Date(2013, 11, 24)))

function passHash(str) {
  const crypto = require('crypto')
  const hash = crypto.createHash('md5')
  hash.update(str)
  return hash.digest('hex')
}

// console.log(passHash('password'))

const sumCubes = (n, total = 0) => {
  const cubed = n * n * n
  return n === 1 ? total + 1 : sumCubes(--n, total + cubed)
}

// console.log(sumCubes(2))

function numPrimorial(n) {
  let prime = 2
  const isPrime = (n, x = 2) => (x === n ? true : n % x !== 0 ? isPrime(n, ++x) : false)
  const getNext = n => (isPrime(n) ? n : getNext(n + 1))
  const primes = Array(n)
    .fill()
    .map((n, i) => {
      if (i === 0) return prime
      else {
        prime = getNext(++prime)
        return prime
      }
    })
  return primes.reduce((acc, p) => acc * p)
}

// console.log(numPrimorial(3))

// const solve = s => {
//   const alphaValues = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
//     .split('')
//     .reduce((obj, l, i) => ({ ...obj, [l]: i + 1 }), {})
//   return s.split('').reduce((perm, l) => {
//     const difference = 27 - alphaValues[l]
//     return perm * difference
//   }, 1)
// }

// console.log(solve('XYZ'))

function addLetters(...letters) {
  if (!letters.length) return 'z'
  const alphabet = [...'abcdefghijklmnopqrstuvwxyz']

  const indexOfAdded =
    letters.reduce((a, b) => {
      const calc = a + alphabet.indexOf(b) + 1
      return calc > 26 ? calc - 26 : calc
    }, 0) - 1

  return alphabet[indexOfAdded]
}

// console.log(addLetters('a', 'n', 'n'))

const solve = s => {
  const vowels = 'aeiou'
  const vowelsArr = []
  let str = ''
  for (const letter of s) {
    if (vowels.includes(letter)) {
      str += letter
    } else {
      vowelsArr.push(str)
      str = ''
    }
  }
  return vowelsArr.sort((a, b) => b.length - a.length)[0].length
}

// console.log(solve('codewarriors'))

const removeDuplicateWords = s => [...new Set(s.split(' '))].join(' ')

// console.log(removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'))

const oddOnesOut = people =>
  people.filter(person => people.filter(p => p === person).length % 2 === 0)

// console.log(oddOnesOut([1, 2, 3, 1, 3, 3]))

function password(str) {
  if (str.length < 8) return false
  const hasUppercase = /[A-Z]/.test(str),
    hasNumbers = /[0-9]/.test(str),
    hasLowerCase = /[a-z]/.test(str)
  return hasUppercase && hasNumbers && hasLowerCase
}

// console.log(password('Abcd1234'))

function evaporator(content, evap_per_day, threshold) {
  const thresholdVolume = (content / 100) * threshold
  // let day = 0
  const calcDay = (c = content, day = 0) =>
    c <= thresholdVolume ? day : calcDay(c - (c / 100) * evap_per_day, ++day)
  // while (content > thresholdVolume) {
  //   day++
  //   content = content - (content / 100) * evap_per_day
  // }
  // return day
  return calcDay()
}

// console.log(evaporator(10, 10, 10))

function* range(start = 0, end = 10, step = 1) {
  let current = start - step
  while (current < end) {
    current += step
    yield current
  }
}

function* oddNumberGenerator() {
  let n = -1
  while (true) {
    n += 2
    yield n
  }
}

function rowSumOddNumbers(n) {
  let triangle = []
  const oddNumbers = oddNumberGenerator()
  let row = 0
  while (row < n) {
    row++
    const arr = Array(row)
      .fill()
      .map(() => oddNumbers.next().value)
    triangle.push(arr)
  }
  return triangle[triangle.length - 1].reduce((a, b) => a + b)
}

console.log(rowSumOddNumbers(42))

console.log(42 ** 3)
