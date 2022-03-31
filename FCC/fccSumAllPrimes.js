function sumPrimes(num) {
  const isPrime = (n, x = 2) => {
    return x === n ? true : n % x !== 0 ? isPrime(n, ++x) : false
  }
  const addPrimes = (t = 0, i = 2) => {
    if (i <= num) {
      return isPrime(i) ? addPrimes((t += i), ++i) : addPrimes(t, ++i)
    }
    return t
  }
  return addPrimes()
}

console.log(sumPrimes(977))

// refactored

function sumPrimes(num) {
  const isPrime = (n, x = 2) => (x === n ? true : n % x !== 0 ? isPrime(n, ++x) : false)

  const addPrimes = (t = 0, i = 2) =>
    i <= num ? (isPrime(i) ? addPrimes((t += i), ++i) : addPrimes(t, ++i)) : t

  return addPrimes()
}
