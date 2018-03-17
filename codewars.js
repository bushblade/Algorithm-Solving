//Duplicate encoder

function duplicateEncode(word) {
  let obj = [...word.toLowerCase()].reduce((o, x) => {
    o[x] ? o[x]++ : o[x] = 1
    return o
  }, {})
  return [...word.toLowerCase()].map(x => obj[x] > 1 ? ')' : '(').join('')
}

console.log(duplicateEncode('din'))
console.log(duplicateEncode('recede'))
console.log(duplicateEncode('Success'))

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

console.log(iqTest("2 4 7 8 10"))

//sum of the first nth tern of Series
// Your task is to write a function which returns the sum of following series upto nth term(parameter).

function SeriesSum(n) {
  return Array(n).fill(1).map((x, i) => 3 * i + 1).reduce((a, b) => a += 1 / b, 0).toFixed(2)
}

console.log(SeriesSum(5))

// Find the divisors! 
function divisors(integer) {
  let r = Array(integer).fill(0).map((x, i) => i).filter(x => integer % x === 0 && x > 1)
  return r.length > 0 ? r : `${integer} is prime`
}
console.log(divisors(12))


//Binary addition
function addBinary(a, b) {
  return (a + b).toString(2)
}
console.log(addBinary(3, 4))

//catergarize new member
//senior 55 or over and hadicap greater than 7
function openOrSenior(data) {
  return data.map(x => x[0] >= 55 && x[1] > 7 ? 'Senior' : 'Open')
}
console.log(openOrSenior([
  [18, 20],
  [45, 2],
  [61, 12],
  [37, 6],
  [21, 21],
  [78, 9]
]))

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
decodeMorse = function (morseCode) {
  return morseCode.split(' ')
  .map(x => MORSE_CODE[x] ? MORSE_CODE[x] : ' ' )
  .join('')
  .split(' ')
  .filter(x => x)
  .join(' ')
}
console.log(decodeMorse('.... . -.--   .--- ..- -.. .'))

//disemvowel trolls
function disemvowel(str) {
  return str.replace(/[aeiou]/ig,'')
}
console.log(disemvowel("This website is for losers LOL!"))