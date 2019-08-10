const plusMinus = arr =>
  arr
    .reduce(
      (acc, n) => {
        n > 0 ? acc[0]++ : n < 0 ? acc[1]++ : acc[2]++
        return acc
      },
      [0, 0, 0]
    )
    .forEach(n => console.log((n / arr.length).toFixed(6)))

// plusMinus([1, 1, 0, -1, -1])

const closestNumbers = numbers => {
  const sorted = [...new Set(numbers)].sort((a, b) => a - b)

  const smallestDifference = sorted.reduce((acc, n, i, srtd) => {
    const diff = srtd[i + 1] - n
    return diff < acc ? diff : acc
  }, Math.max(...numbers) - Math.min(...numbers))

  sorted.forEach((n, i, srtd) => {
    const next = srtd[i + 1]
    if (next - n === smallestDifference) console.log(n, next)
  })
}

// closestNumbers([6, 2, 4, 10])

const staircase = n => {
  const createStr = (hashLength, str = '') =>
    str.length < n ? createStr(hashLength, (str += str.length < hashLength ? ' ' : '#')) : str
  const print = i => {
    if (i > 0) {
      console.log(createStr(n - (n - i) - 1))
      return print(--i)
    }
  }
  return print(n)
}

// staircase(6)

const miniMaxSum = arr => {
  const sorted = [...arr].sort((a, b) => a - b)
  const min = sorted.slice(0, 4).reduce((a, n) => a + n)
  const max = sorted
    .reverse()
    .slice(0, 4)
    .reduce((a, n) => a + n)
  console.log(min, max)
}

miniMaxSum([1, 2, 3, 4, 5])

const birthdayCakeCandles = ar =>
  [...ar].sort((a, b) => b - a).filter((x, i, a) => x === a[0]).length
