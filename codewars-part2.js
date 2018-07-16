//Strip Comments
function solution(input, markers) {
  let check = true
  return [...input].reduce((str, x, i, arr) => {
    if (markers.includes(arr[i += 1])) check = false
    else if (x === '\n') check = true
    if (check) str += x
    return str
  }, '')
}
// console.log(solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"]))

// Your order please
function order(words) {
  return words.split(' ').sort((a, b) => a.match(/\d/g) - b.match(/\d/g)).join(' ') || ''
}

// console.log(order("is2 Thi1s T4est 3a"))

String.prototype.toAlternatingCase = function () {
  return [...this].reduce((str, ltr) => /[a-z]/.test(ltr) ? str += ltr.toUpperCase() : str += ltr.toLowerCase(), '')
}

// console.log('TesTing'.toAlternatingCase())
function validatePIN(pin) {
  return [...pin].every(l => /\d/.test(l)) && (pin.length === 4 || pin.length === 6)
}

// console.log(validatePIN('1234'))

function highestRank(arr) {
  const hash = arr.reduce((obj, n) => {
    obj[n] ? obj[n]++ : obj[n] = 1
    return obj
  }, {})
  const most = hash[Object.keys(hash).sort((a, b) => hash[b] - hash[a])[0]]
  return Number(Object.keys(hash).filter((key) => hash[key] === most).sort((a, b) => b - a)[0])
}

// console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12]))

var countSheep = function (num) {
  return Array(num).fill().map((x, i) => `${i+1} sheep...`).join('')
}

// console.log(countSheep(3))

function solution(number) {
  return [...Array(number - 1)].map((x, i) => i + 1).reduce((arr, x) => {
    if (x % 5 === 0 && x % 3 === 0) arr[2]++
      if (x % 5 === 0 && x % 3 !== 0) arr[1]++
        if (x % 3 === 0 && x % 5 !== 0) arr[0]++
          return arr
  }, [0, 0, 0])
}

// console.log(solution(20))

function solve(a, b) {
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
  let [left, right] = [...str].reduce((arr, num, i, a) => {
    if (i < a.length / 2) arr[0].push(num)
    else arr[1].push(num)
    return arr
  }, [
    [],
    []
  ])
  if (str.length % 2 === 0) {
    left.pop()
    right.shift()
  } else {
    left.pop()
  }
  left = left.reduce((sum, num) => sum += Number(num), 0)
  right = right.reduce((sum, num) => sum += Number(num), 0)
  return left === right ? "Balanced" : "Not Balanced"
}

console.log(balancedNum(29559))

function toCamelCase(str) {
  let words = str.split(/-|_/)
  for (let i in words) {
    if (i > 0) words[i] = [...words[i]].map((x, i) => i === 0 ? x.toUpperCase() : x).join('')
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
  const longestArrOfOnes = a => a.join('').split('0').sort((c, d) => d.length - c.length).length
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

