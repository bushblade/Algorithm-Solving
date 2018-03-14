// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {
  return str.split('').reverse().join('')
}



// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(str) {
  return str.split('').reverse().join('') === str
}
console.log(isPalindrome('abba'))



// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {
  return Number([...`${int}`].reverse().join(''))
}
console.log(reverseInt(476))



// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
function capitalizeLetters(str) {
  return str.toLowerCase().split(' ')
    .map(x => x[0].toUpperCase().concat(x.substr(1)))
    .join(' ')
}



// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
function maxCharacter(str) {
  let strArray = str.toLowerCase().split(''),
    record = {},
    greatest = 0,
    maxChar = ''
  strArray.forEach(letter => record[letter] = 0)
  strArray.forEach(letter => record[letter]++)
  for (e in record){
    if (record[e] > greatest){
      greatest = record[e]
      maxChar = e
    }
  }
  return maxChar
}



// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz() {
  let array = new Array(100).fill(0).map((x,i) => x = i + 1)
  array.forEach(x =>{
    if (x % 5 === 0 && x % 3 === 0){
    console.log('FizzBuzz')
    } else if (x % 3 === 0){
      console.log('Fizz')
    } else if (x % 5 === 0){
      console.log ('Buzz')
    } else {
      console.log(x)
    }
  })
}



// Call Function
const output = maxCharacter('JavascripttTTTaaaaaaaaaa')

console.log(output);