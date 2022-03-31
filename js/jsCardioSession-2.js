// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// ex. longestWord('Hi there, my name is Brad') === 'there,'

function longestWord(sen) {
  // SOLUTION 1 - Return a single longest word
  // SOLUTION 2 - Return an array and include multiple words if they have the same length
  // SOLUTION 3 - Only return an array if multiple words, otherwise return a string
  let wordArr = sen.toLowerCase().replace(/[^a-z /s]/g, '').split(' ')
  let longestWord = wordArr[0]
  wordArr.forEach(x => x.length > longestWord ? longestWord = x : false)
  let multiWord = wordArr.filter(x => x.length === longestWord.length)
  return multiWord.length > 1 ? multiWord : longestWord
}

// CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray(C) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

// function chunkArray(arr, len) {
//   let resArr = []
//   while (arr.length > 0) {
//     resArr.push(arr.splice(0, len))
//   }
//   return resArr
// }

const chunkArray = (arr, n) => {
  const a = [],
    chunk = () => {
      a.push(arr.splice(0, n))
      if(arr.length > 0) chunk()
    }
  chunk()
  return a
}

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 2))

// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

// function flattenArray(arrays) {
//   return arrays.reduce((a, x) => {
//     x.forEach(e => a.push(e))
//     return a
//   }, [])
// }

function flattenArray(arrays) {
  return arrays.reduce((a, x) => a.concat(x), [])
}

console.log(flattenArray([
  [1, 2],
  [3, 4],
  [5, 6],
  [7]
]))

// CHALLENGE 4: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

function isAnagram(str1, str2) {
  const lowerAbc = str => str.toLowerCase().replace(/[^a-z]/g, '').split('')
  if (lowerAbc(str1).length === lowerAbc(str2).length) {
    return lowerAbc(str1).every(x => lowerAbc(str2).includes(x))
  }
  else {
    return false
  }
}
console.log(isAnagram('elbow', 'below'))

// CHALLENGE 5: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'

function letterChanges(str) {
  const alphbt = [...'abcdefghijklmnopqrstuvwxyz']
  const vowels = [...'aeiou']
  return str.split(' ')
    .map(word => word.split('')
      .map(letter => {
        let indx = alphbt.indexOf(letter)
        return alphbt.indexOf(letter) === alphbt.length - 1 ? alphbt[0] : alphbt[indx += 1]
      })
      .map(ltr => vowels.includes(ltr) ? ltr.toUpperCase() : ltr)
      .join(''))
    .join(' ')
}

// Call Function
const output = letterChanges('hello there')

console.log(output)