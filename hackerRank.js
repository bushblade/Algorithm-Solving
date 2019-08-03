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

closestNumbers([4, 4, 2, 1, 3])
