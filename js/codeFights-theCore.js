//############### intro Gates ################

function addTwoDigits(n) {
  return [...String(n)].reduce((a, x) => a + Number(x), 0)
}
console.log(addTwoDigits(29))


function largestNumber(n) {
  return Number('9'.repeat(n))
}
console.log(largestNumber(2))


function candies(n, m) {
  return m - m % n
}
console.log(candies(3, 10))

function seatsInTheater(nCols, nRows, col, row) {
  return (nCols - (col - 1)) * (nRows - row)
}
console.log(seatsInTheater(16, 11, 5, 3))

function maxMultiple(divisor, bound) {
  while (bound % divisor !== 0) {
    bound--
  }
  return bound
}
console.log(maxMultiple(3, 10))

function circleOfNumbers(n, fn) {
  let result = fn > n / 2 ? fn - n / 2 : fn + n / 2
  return result === n ? 0 : result
}
console.log(circleOfNumbers(6, 3))

function lateRide(n) {
  return [...`${Math.floor(n/60)}${n % 60}`].reduce((s, x) => s + Number(x), 0)
}
console.log(lateRide(808))

function phoneCall(min1, min2_10, min11, s) {
  return Array(s).fill(0).map((x, i) => {
    if (i === 0) {
      return min1
    } else if (i > 9) {
      return min11
    } else {
      return min2_10
    }
  }).reduce((mins, x) => {
    s = s - x
    s >= 0 ? mins++ : false
    return mins
  }, 0)
}
console.log(phoneCall(10, 1, 2, 22))

//############ At the crossroads ###############################

function reachNextLevel(experience, threshold, reward) {
  return experience + reward >= threshold
}
console.log(reachNextLevel(10, 15, 5))

function knapsackLight(value1, weight1, value2, weight2, maxW) {
  
}
console.log(knapsackLight(10, 5, 6, 4, 8))