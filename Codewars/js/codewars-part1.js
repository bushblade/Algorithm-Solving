//Duplicate encoder

function duplicateEncode(word) {
  let obj = [...word.toLowerCase()].reduce((o, x) => {
    o[x] ? o[x]++ : o[x] = 1
    return o
  }, {})
  return [...word.toLowerCase()].map(x => obj[x] > 1 ? ')' : '(').join('')
}

// console.log(duplicateEncode('din'))
// console.log(duplicateEncode('recede'))
// console.log(duplicateEncode('Success'))

//Bob is preparing to pass IQ test. The most frequent task in this test is to find out
//which one of the given numbers differs from the others. Bob observed that one number usually
//differs from the others in evenness. Help Bob — to check his answers, he needs a program that
//among the given numbers finds one that is different in evenness, and return a position of this number.

function iqTest(numbers) {
  let arr = numbers.split(' '),
    even = arr.filter(x => x % 2 === 0),
    odd = arr.filter(x => x % 2 !== 0)
  return even.length > odd.length ? arr.indexOf(odd[0]) + 1 : arr.indexOf(even[0]) + 1
}

// console.log(iqTest("2 4 7 8 10"))

//sum of the first nth tern of Series
// Your task is to write a function which returns the sum of following series upto nth term(parameter).

function SeriesSum(n) {
  return Array(n).fill(1).map((x, i) => 3 * i + 1).reduce((a, b) => a += 1 / b, 0).toFixed(2)
}

// console.log(SeriesSum(5))

// Find the divisors!
function divisors(integer) {
  let r = Array(integer).fill(0).map((x, i) => i).filter(x => integer % x === 0 && x > 1)
  return r.length > 0 ? r : `${integer} is prime`
}
// console.log(divisors(12))


//Binary addition
function addBinary(a, b) {
  return (a + b).toString(2)
}
// console.log(addBinary(3, 4))

//catergarize new member
//senior 55 or over and hadicap greater than 7
function openOrSenior(data) {
  return data.map(x => x[0] >= 55 && x[1] > 7 ? 'Senior' : 'Open')
}
// console.log(openOrSenior([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]))

//decode the mores code
const MORSE_CODE = {
  '-.-.--': '!',
  '.-..-.': '"',
  '...-..-': '$',
  '.-...': '&',
  '.----.': '\'',
  '-.--.': '(',
  '-.--.-': ')',
  '.-.-.': '+',
  '--..--': ',',
  '-....-': '-',
  '.-.-.-': '.',
  '-..-.': '/',
  '-----': '0',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '---...': ':',
  '-.-.-.': ';',
  '-...-': '=',
  '..--..': '?',
  '.--.-.': '@',
  '.-': 'A',
  '-...': 'B',
  '-.-.': 'C',
  '-..': 'D',
  '.': 'E',
  '..-.': 'F',
  '--.': 'G',
  '....': 'H',
  '..': 'I',
  '.---': 'J',
  '-.-': 'K',
  '.-..': 'L',
  '--': 'M',
  '-.': 'N',
  '---': 'O',
  '.--.': 'P',
  '--.-': 'Q',
  '.-.': 'R',
  '...': 'S',
  '-': 'T',
  '..-': 'U',
  '...-': 'V',
  '.--': 'W',
  '-..-': 'X',
  '-.--': 'Y',
  '--..': 'Z',
  '..--.-': '_',
  '...---...': 'SOS'
}
decodeMorse = function(morseCode) {
  return morseCode.split(' ')
    .map(x => MORSE_CODE[x] ? MORSE_CODE[x] : ' ')
    .join('')
    .split(' ')
    .filter(x => x)
    .join(' ')
}
// console.log(decodeMorse('.... . -.--   .--- ..- -.. .'))

//disemvowel trolls
function disemvowel(str) {
  return str.replace(/[aeiou]/ig, '')
}
// console.log(disemvowel("This website is for losers LOL!"))

//Directions reduction
function dirReduc(arr) {
  const rules = {
    NORTH: 'SOUTH',
    SOUTH: 'NORTH',
    EAST: 'WEST',
    WEST: 'EAST'
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] === rules[arr[i]]) {
      arr.splice(i, 2)
      i -= 2
    }
  }
  return arr
}
// console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]))

//sort the odd
function sortArray(array) {
  let odd = array.filter(x => x % 2 !== 0).sort((a, b) => a - b)
  let count = -1
  return array.map(x => {
    if (x % 2 !== 0) {
      count++
      return odd[count]
    }
    else {
      return x
    }
  })
}
// console.log(sortArray([5, 3, 2, 8, 1, 4]))

//bit counting
var countBits = function(n) {
  return n.toString(2).replace(/0/g, '').length
}
// console.log(countBits(1234))

//which are in
function inArray(array1, array2) {
  return array1.filter(x => array2.join(' ').match(x) !== null).sort()
}
// console.log(inArray(["xyz", "live", "strong"], ["lively", "alive", "harp", "sharp", "armstrong"]))

// Simple Encryption #1 - Alternating Split
function encrypt(text, n) {
  if (text === null) return null
  if (n <= 0) return text
  let arrs = text.split('').reduce((a, x, i) => {
    i > 0 && i % 2 !== 0 ? a[0].push(x) : a[1].push(x)
    return a
  }, [
    [],
    []
  ])
  let t = arrs[0].concat(arrs[1]).join('')
  return encrypt(t, n - 1)
}

function decrypt(encryptedText, n) {
  if (encryptedText === null) return null
  if (n <= 0) return encryptedText
  let arrs = encryptedText.split('').reduce((a, x, i) => {
    i >= Math.floor(encryptedText.length / 2) ? a[0].push(x) : a[1].push(x)
    return a
  }, [
    [],
    []
  ])
  let result = arrs[0].reduce((b, e, c) => {
    b += e
    arrs[1][c] ? b += arrs[1][c] : false
    return b
  }, '')
  return decrypt(result, n - 1)
}

// console.log(encrypt('This is a test!', 2))

//calculating with functions
const zero = a => a ? eval(`0${a}`) : '0',
  one = a => a ? eval(`1${a}`) : '1',
  two = a => a ? eval(`2${a}`) : '2',
  three = a => a ? eval(`3${a}`) : '3',
  four = a => a ? eval(`4${a}`) : '4',
  five = a => a ? eval(`5${a}`) : '5',
  six = a => a ? eval(`6${a}`) : '6',
  seven = a => a ? eval(`7${a}`) : '7',
  eight = a => a ? eval(`8${a}`) : '8',
  nine = a => a ? eval(`9${a}`) : '9',
  plus = a => a ? `+${a}` : '+',
  minus = a => a ? `-${a}` : '-',
  times = a => a ? `*${a}` : '*',
  dividedBy = a => a ? `/${a}` : '/'

// console.log(seven(times(five())))

// Stop gninnipS My sdroW!
function spinWords(str) {
  return str.split(' ')
    .map(x => x.length >= 5 ? [...x].reverse().join('') : x)
    .join(' ')
}
// console.log(spinWords("Hey fellow warriors"))

//validate credit card
function validate(n) {
  return [...String(n)]
    .map(b => Number(b))
    .reverse()
    .map((x, i) => i > 0 && i % 2 !== 0 ?
      x * 2 > 9 ? x * 2 - 9 : x * 2 :
      x)
    .reduce((a, e) => a + e, 0) % 10 === 0
}
// console.log(validate(2121))

//kebabize
function kebabize(str) {
  return [...str].filter(x => x.match(/[a-z]/i))
    .map((x, i) => i > 0 ? x.replace(/[A-Z]/, `-${x}`) : x)
    .join('').toLowerCase()
}
// console.log(kebabize('camelsHaveThreeHumps'))

//Especially Joyful Numbers
function numberJoy(n) {
  let n1 = [...String(n)].reduce((s, x) => s + Number(x), 0)
  return n1 * Number([...String(n1)].reverse().join('')) === n
}
// console.log(numberJoy(1729))

//IP Validation
const isValidIP = str => str.split('.').filter(x => !x.match(/\s/) && x >= 0 && x <= 255).length === 4

// console.log(isValidIP('1.2.3.4'))

// Exclamation marks series #3: Remove all exclamation marks from sentence except at the end
const remove = s => {
  let check = true,
    exc = [...s].reverse().reduce((str, x) => {
      if (check) x === '!' ? str += x : check = false
      return str
    }, '')
  return [...s].filter(x => x !== '!').concat(exc).join('')
}

// console.log(remove("Hi!! Hi!!!"))

//Sleigh Authentication
function Sleigh() {}

Sleigh.prototype.authenticate = function(name, password) {
  return name === 'Santa Claus' && password === "Ho Ho Ho!" ? true : false
}

//sum of intervals
const sumIntervals = intervals => {
  const inc = (s, e) => {
      s = s += 1
      numbers.add(s)
      s < e ? inc(s, e) : false
    },
    numbers = new Set()
  intervals.forEach(x => inc(x[0], x[1]))
  return Array.from(numbers).length
}
// console.log(sumIntervals(
//   [
//     [11, 15],
//     [6, 10],
//     [1, 2]
//   ]))

const number = busStops => busStops.reduce((n, x) => n + (x[0] - x[1]), 0)

//Anagram detection
const isAnagram = (t, o) => [...t.toLowerCase()].sort().join('') === [...o.toLowerCase()].sort().join('')

// console.log(isAnagram("foefet", "toffee"))

class FileNameExtractor {
  static extractFileName(dirtyFileName) {
    return dirtyFileName.slice(0, dirtyFileName.lastIndexOf('.')).replace(/^\d+_/, '')
  }
}
// console.log(FileNameExtractor.extractFileName('1_This_is_an_otherExample.mpg.OTHEREXTENSIONadasdassdassds34'))

//find unique number
function findUniqArr(arr) {
  let obj = arr.reduce((ob, x) => {
    ob[x] ? ob[x]++ : ob[x] = 1
    return ob
  }, {})
  return Number(Object.keys(obj).find(x => obj[x] === 1 ? x : false))
}
// console.log(findUniq([1, 1, 1, 2, 1, 1]))

//find the unique string
function findUniq(arr) {
  let stage3 = arr.map(x => x.toLowerCase())
    .map(x => {
      let s = new Set()
      x.split('').sort().forEach(l => s.add(l))
      return Array.from(s).join('')
    })
  let obj = stage3.reduce((ob, x, i) => {
    ob[x] ? ob[x]++ : ob[x] = 1
    return ob
  }, {})
  return arr[stage3.indexOf(Object.keys(obj).find(x => obj[x] === 1 ? x : false))]
}
// console.log(findUniq(['Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a']))
// console.log(findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]))

const testStr = 'testingggggg'

let res = Array.from(new Set([...testStr])).sort().join('')

// console.log(res)

//Are the numbers in order
const inAscOrder = arr => arr.slice(0).sort((a, b) => a - b).every((x, i) => x === arr[i])

// console.log(inAscOrder([1, 2, 4, 7, 19]))

//check three and two
function checkThreeAndTwo(array) {
  const obj = array.reduce((o, x) => {
    o[x] ? o[x]++ : o[x] = 1
    return o
  }, {})
  let vals = Object.values(obj)
  return vals.length === 2 ? vals.some(x => x === 3) : false
}
// console.log(checkThreeAndTwo(['a', 'b', 'a', 'a', 'a']))

//descending order
const descendingOrder = n => Number([...String(n)].sort().reverse().join(''))
// console.log(descendingOrder(21445))

//sort numbers
const solution = nums => nums === null ? [] : nums.sort((a, b) => a - b)
// console.log(solution([1, 2, 10, 50, 5]))

//Sum of integers in a string
const sumOfIntegersInString = s => (s.match(/[0-9]+/g) || []).reduce((s, x) => s + Number(x), 0)

// console.log(sumOfIntegersInString("The Great Depression lasted from 1929 to 1939."))

//Day of the week
function getDayOfTheWeek(date) {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  return days[new Date(date).getDay()]
}
// console.log(getDayOfTheWeek('1/1/2017'))

//Find the stray number
function stray(numbers) {
  let obj = numbers.reduce((o, x) => {
    o[x] ? o[x]++ : o[x] = 1
    return o
  }, {})
  return Number(Object.keys(obj).filter(x => obj[x] === 1)[0])
}
// console.log(stray([1, 1, 2, 1, 1, 1, 1, ]))


//Get middle characters or character
function getMiddle(s) {
  return s.length % 2 === 0 ? s.substr((s.length / 2) - 1, 2) : s.substr(s.length / 2, 1)
}

// console.log(getMiddle('test'))

//Death star construction
function deathStar(week) {
  let w = week.slice(0, week[7]).reduce((arr, x) => {
    arr[0] -= x[0]
    arr[1] -= x[1]
    arr[2] -= x[2]
    return arr
  }, [100, 75, 50]).map(e => e < 0 ? 0 : e)
  return w.every(v => v === 0) ? 'The station is completed!' :
    `The station is destroyed! It needed ${w[0]} iron, ${w[1]} steel and ${w[2]} chromium for completion.`
}
// console.log(deathStar([
//   [100, 75, 49],
//   [20, 15, 20],
//   [10, 15, 10],
//   [50, 50, 20],
//   [20, 15, 10],
//   [20, 15, 10],
//   [20, 15, 10], 1
// ]))

// Row weights
function rowWeights(array) {
  return array.reduce((a, x, i) => {
    i % 2 === 0 ? a[0] += x : a[1] += x
    return a
  }, [0, 0])
}
// console.log(rowWeights([50, 60, 70, 80]))

// form the minimum
function minValue(values) {
  return Number(Array.from(new Set(values))
    .sort()
    .reduce((s, x) => s += x, ''))
}
// console.log(minValue([
//   1,
//   3,
//   1
// ]))

// CamelCase method
String.prototype.camelCase = function() {
  return this.split(' ').map(x => [...x].map((e, i) => i === 0 ? e.toUpperCase() : e).join('')).join('')
}
// console.log('test case'.camelCase())

//odd even
const oddOrEven = array => array.reduce((n, x) => n += x, 0) % 2 === 0 ? 'even' : 'odd'

// console.log(oddOrEven([2, 5, 34, 6]))

//shortest words
const findShort = s => Math.min(...s.split(' ').map(x => x.length))


// console.log(findShort("bitcoin take over the world maybe who knows perhaps"))

// Hello W... wait what?

const helloWorld = () => {
  const p = num => num += one,
    zero = Number(false),
    one = Number(true),
    two = p(one),
    three = p(two),
    four = p(three),
    five = p(four),
    six = p(five),
    seven = p(six),
    eight = p(seven),
    nine = p(eight),
    arr = [
      [seven, two],
      [one, zero, one],
      [one, zero, eight],
      [one, zero, eight],
      [one, one, one],
      [three, two],
      [eight, seven],
      [one, one, one],
      [one, one, four],
      [one, zero, eight],
      [one, zero, zero],
      [three, three]
    ]
  return arr.map(x => String.fromCharCode(x.join(String()))).join(String())
}

console.log(helloWorld())