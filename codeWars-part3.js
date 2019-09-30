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

console.log(findMissingLetter(['b', 'c', 'd', 'f']))
