const performance = require('perf_hooks')

// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

function sumFibs(num) {
  const calcFib = (total = 2, arrFib = [1, 1]) => {
    let sum = arrFib[0] + arrFib[1]
    if (sum <= num) {
      return sum % 2 !== 0
        ? calcFib(total + sum, [sum, ...arrFib])
        : calcFib(total, [sum, ...arrFib])
    }
    return total
  }
  return calcFib()
}

console.log(sumFibs(4))

// return an array for all numbers in the fibonacci sequence up to n
const fibGen = (num, arr = [1, 1]) => {
  const [last, secLast] = [...arr].reverse()
  return last + secLast > num ? arr : fibGen(num, [...arr, last + secLast])
}

console.log(fibGen(29))

const functionWithPeformanceTest = fn => (...args) => {
  const start = performance.now()
  fn(...args)
  return `Function completed in ${performance.now() - start} milliseconds`
}

const fibGenWithPerformance = functionWithPeformanceTest(fibGen)

fibGenWithPerformance(Math.pow(10, 10))
