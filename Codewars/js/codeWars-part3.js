function mutations(alice, bob, word, first) {
  const a = { state: 1, memory: alice }
  const b = { state: 1, memory: bob }

  const players = first === 0 ? [a, b] : [b, a]

  const wordCache = new Map()

  let currentWord = word

  let currentPlayer = 0

  const wordIsValid = w =>
    [...currentWord].filter((l, i) => l === w[i]).length === 3 &&
    [...new Set([...w])].length === 4 &&
    !wordCache.has(w)

  const checkMemory = player => {
    for (let w of player.memory) {
      if (wordIsValid(w)) {
        wordCache.set(w, 1)
        currentWord = w
        player.state = 1
        return
      }
    }
    player.state = 0
  }

  // first turn
  checkMemory(players[0])
  wordCache.set(word, 1)
  checkMemory(players[1])

  while (players.every(p => p.state === 1)) {
    checkMemory(players[currentPlayer])
    currentPlayer = currentPlayer === 0 ? 1 : 0
  }

  return a.state > b.state ? 0 : a.state < b.state ? 1 : -1
}

const alice = ['plat', 'rend', 'bear', 'soar', 'mare', 'pare', 'flap', 'neat', 'clan', 'pore'],
  bob = ['boar', 'clap', 'farm', 'lend', 'near', 'peat', 'pure', 'more', 'plan', 'soap']

// console.log(mutations(alice, bob, 'maze', 0))

function* fibGen() {
  let firstRun = true
  let first = 0
  let second = 1
  while (true) {
    if (firstRun) {
      yield 1
      firstRun = false
    } else {
      let next = first + second
      yield next
      first = second
      second = next
    }
  }
}

function perimeter(n) {
  const fibGenerator = fibGen()
  return (
    Array(n + 1)
      .fill()
      .map(() => fibGenerator.next().value)
      .reduce((a, b) => a + b) * 4
  )
}

// console.log(perimeter(5))

const peakHeight = mountain => {
  let layer = 1
  let contoured = mountain.map(subArr => subArr.map(item => (item === ' ' ? 0 : layer)))
  if (contoured.every(subArr => subArr.every(n => n === 0))) return 0
  if ([].concat(...contoured).filter(n => n === layer).length < 3) return 1

  const canIncrease = (subArrIndex, index) => {
    const prev = contoured[subArrIndex][index - 1] ? contoured[subArrIndex][index - 1] : -1
    const next = contoured[subArrIndex][index + 1] ? contoured[subArrIndex][index + 1] : -1
    const prevSub = contoured[subArrIndex - 1] ? contoured[subArrIndex - 1][index] : -1
    const nextSub = contoured[subArrIndex + 1] ? contoured[subArrIndex + 1][index] : -1
    return [prev, next, prevSub, nextSub].every(item => item >= layer - 1)
  }

  const checkContours = (i = 0) => {
    if (i === contoured.length) return false
    if (contoured[i].some((n, index) => canIncrease(i, index))) return true
    return checkContours(++i)
  }

  while (checkContours()) {
    layer++
    contoured = contoured.map((subArr, index) =>
      subArr.map((n, i) => (canIncrease(index, i) ? layer : n))
    )
  }
  return layer - 1 === 0 ? 1 : layer - 1
}

// console.log(
//   peakHeight([
//     ['^', '^', '^', '^', '^', '^', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
//     [' ', '^', '^', '^', '^', '^', '^', '^', '^', ' ', ' ', ' ', ' ', ' '],
//     [' ', ' ', '^', '^', '^', '^', '^', '^', '^', ' ', ' ', ' ', ' ', ' '],
//     [' ', ' ', '^', '^', '^', '^', '^', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
//     [' ', ' ', '^', '^', '^', '^', '^', '^', '^', '^', '^', '^', '^', ' '],
//     [' ', ' ', '^', '^', '^', '^', '^', '^', ' ', ' ', ' ', ' ', ' ', ' '],
//     [' ', ' ', '^', '^', '^', '^', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
//   ])
// )

var siegfried = function(week, str) {
  if (week >= 1) {
    str = str.replace(/ci/g, 'si')
    str = str.replace(/Ci/g, 'Si')
    str = str.replace(/ce/g, 'se')
    str = str.replace(/Ce/g, 'Se')
    str = str.replace(/c(?!h)/g, 'k')
    str = str.replace(/C(?!h)/g, 'K')
  }

  if (week >= 2) {
    str = str.replace(/ph/g, 'f')
    str = str.replace(/Ph/g, 'F')
  }

  if (week >= 3) {
    str = str.replace(/(\w{3,})(e)\b/g, '$1')
    str = str.replace(/([a-zA-Z])\1/gi, '$1')
  }

  if (week >= 4) {
    str = str.replace(/th/g, 'z')
    str = str.replace(/Th/g, 'Z')
    str = str.replace(/wr/g, 'r')
    str = str.replace(/Wr/g, 'R')
    str = str.replace(/wh/g, 'v')
    str = str.replace(/Wh/g, 'V')
    str = str.replace(/w/g, 'v')
    str = str.replace(/W/g, 'V')
  }

  if (week >= 5) {
    str = str.replace(/ou/g, 'u')
    str = str.replace(/Ou/g, 'U')
    str = str.replace(/an/g, 'un')
    str = str.replace(/An/g, 'Un')
    str = str.replace(/ing\b/g, 'ink')
    str = str.replace(/\bSm/g, 'Schm')
  }

  return str
}
const english =
  "\
This is KAOS!! We don't play with Code-Wars here!! \
So there will be trouble for you this time Mr Maxwell Smart! \
We have received all the photographic evidence we need so choose carefully what you say next! \
I hope you will co-operate with KAOS and do exactly what we want Mr Smart otherwise I won't be happy with you! \
In fact, if you misbehave that would make me very unhappy indeed... \
And you certainly would not want to make me unnecesarily cross would you Mr Maxwell Smart?\
"
// console.log(siegfried(5, english))

function pyramid(n, arr = [], count = 1) {
  return count > n
    ? arr
    : pyramid(
        n,
        [
          ...arr,
          Array(count)
            .fill()
            .map(() => 1)
        ],
        ++count
      )
}

// console.log(pyramid(0))

const fireAndFury = tweet => {
  if (tweet.replace(/[FIREURY]/g, '').length > 0) return 'Fake tweet.'
  const firesNfurys = tweet.match(/FIRE|FURY/g)

  if (!firesNfurys) return 'Fake tweet.'

  let chunked = [[firesNfurys[0]]]
  let fNfIndex = 1
  while (fNfIndex < firesNfurys.length) {
    const lastInChunked = chunked.length - 1
    if (chunked[lastInChunked][0] === firesNfurys[fNfIndex]) {
      chunked[lastInChunked].push(firesNfurys[fNfIndex])
    } else {
      chunked.push([firesNfurys[fNfIndex]])
    }
    fNfIndex++
  }

  const fire = length => {
    return length === 1 ? 'You are fired!' : `You${' and you'.repeat(length - 1)} are fired!`
  }

  const fury = length => {
    return length === 1 ? 'I am furious.' : `I am${' really'.repeat(length - 1)} furious.`
  }

  return chunked
    .reduce((acc, fof) => {
      acc += fof[0] === 'FIRE' ? fire(fof.length) : fury(fof.length)
      acc += ' '
      return acc
    }, '')
    .trim()
}

// console.log(fireAndFury('FIRE FURY'))

function findMissingLetter(array) {
  let alpha = 'abcdefghijklmnopqrstuvwxyz'
  if (array[0].toUpperCase() === array[0]) alpha = alpha.toUpperCase()

  alpha = alpha.slice(alpha.indexOf(array[0]))

  const check = (arr, index = 0) =>
    arr[index] !== alpha[index] ? alpha[index] : check(arr, ++index)

  return check(array)
}

// console.log(findMissingLetter(['b', 'c', 'd', 'f']))

const oldLadySwallows = animals => {
  const predator = {
    fly: 'spider',
    spider: 'bird',
    bird: 'cat',
    cat: 'dog',
    dog: 'goat',
    goat: 'cow',
    cow: 'horse'
  }

  let result = []

  for (let animal of animals) {
    result.push(animal)
    result = result.filter(prey => !predator[prey] || !result.includes(predator[prey]))
    if (animal === 'horse') break
  }

  return result
}

// console.log(oldLadySwallows(['bird', 'cow', 'cow', 'horse', 'bird', 'cat', 'cow']))

function* yearGen(thirdYear) {
  let count = 0
  while (true) {
    count++
    if (count < 2) yield 15
    else if (count < 3) yield 9
    else yield thirdYear
  }
}

const ownedCatAndDog = (catYears, dogYears) => {
  const calcAge = (years, generator, age = 0) => {
    const current = generator.next().value
    return years >= current ? calcAge(years - current, generator, ++age) : age
  }
  return [calcAge(catYears, yearGen(4)), calcAge(dogYears, yearGen(5))]
}

// console.log(ownedCatAndDog(56, 64))

const solution = (number, total = 0) => {
  --number
  if (number % 3 === 0 || number % 5 === 0) total += number
  return number <= 0 ? total : solution(number, total)
}
// console.log(solution(10))

const isIncreasing = strNum =>
  [...strNum].every((sn, i, oa) => (i === 0 ? true : Number(sn) >= Number(oa[i - 1])))

const addsToN = (strNum, n) => [...strNum].reduce((acc, sn) => acc + Number(sn), 0) === n

const checkNumber = (strNum, n) => {
  if (!addsToN(strNum, n)) return false
  else return isIncreasing(strNum)
}

function generateNumbers(start, end, sum) {
  let current = start
  let result = []
  while (current > end) {
    let str = current + ''
    if (checkNumber(str, sum)) result.push(str)
    current--
  }
  return result
}

function findAll(n, k) {
  const biggestN = Array(k)
    .fill(Math.ceil(n / k))
    .join('')

  const smallestN = Array(k)
    .fill(1)
    .join('')

  const sequence = generateNumbers(biggestN, smallestN, n)

  return sequence.length ? [sequence.length, sequence[sequence.length - 1], sequence[0]] : []
}

// console.log(findAll(39, 9))

const josephus = (items, k) => {
  let result = [],
    index = 0
  while (items.length > 0) {
    index = (index + k - 1) % items.length
    result = [...result, ...items.splice(index, 1)]
  }
  return result
}

// console.log(josephus([1, 2, 3, 4, 5, 6, 7], 3))

const letterFrequency = text =>
  Object.entries(
    [...text.toLowerCase().replace(/\W/g, '')].reduce((acc, c) => {
      acc[c] ? acc[c]++ : (acc[c] = 1)
      return acc
    }, {})
  )
    .sort((a, b) => b[1] - a[1])
    .sort((a, b) => {
      if (a[1] === b[1]) {
        return a[0] < b[0] ? -1 : 0
      } else return 0
    })

// console.log(letterFrequency('wklv lv d vhfuhw phvvdjh'))

class Magic extends Number {
  constructor(number = 0) {
    super(number)
    this.value = number
    this.canGetValue = false
  }
  valueOf() {
    return this.value
  }
  setupValue(num) {
    if (!this.value || !this.canGetValue) {
      this.value = num
      this.operation = function(x) {
        return x
      }
    } else {
      this.operation(num)
      this.canGetValue = false
    }
  }
  // Value getters
  get zero() {
    this.setupValue(0)
    return this
  }
  get one() {
    this.setupValue(1)
    return this
  }
  get two() {
    this.setupValue(2)
    return this
  }
  get three() {
    this.setupValue(3)
    return this
  }
  get four() {
    this.setupValue(4)
    return this
  }
  get five() {
    this.setupValue(5)
    return this
  }
  get six() {
    this.setupValue(6)
    return this
  }
  get seven() {
    this.setupValue(7)
    return this
  }
  get eight() {
    this.setupValue(8)
    return this
  }
  get nine() {
    this.setupValue(9)
    return this
  }
  get ten() {
    this.setupValue(10)
    return this
  }
  // Operation getters
  get plus() {
    this.operation = function(val) {
      this.value = this.value + val
    }
    this.canGetValue = true
    return this
  }
  get times() {
    this.operation = function(val) {
      this.value = this.value * val
    }
    this.canGetValue = true
    return this
  }
  get divideBy() {
    this.operation = function(val) {
      this.value = this.value / val
    }
    this.canGetValue = true
    return this
  }
  get minus() {
    this.operation = function(val) {
      this.value = this.value - val
    }
    this.canGetValue = true
    return this
  }
}

const FluentCalculator = new Magic()

console.log(FluentCalculator.eight - 0)
console.log(FluentCalculator.two - 0)
console.log(FluentCalculator.one - 0)
console.log(FluentCalculator.five - 0)

console.log(FluentCalculator.one.plus.five.times.ten - 0)
console.log(FluentCalculator.one.plus.five.times.five - 0)
