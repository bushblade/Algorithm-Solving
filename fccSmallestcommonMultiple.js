function smallestCommons(arr) {
  const [a, b] = [...arr].sort((x, y) => x - y)
  const fullArr = Array(b - a + 1)
    .fill()
    .map((n, i) => a + i)
  const findLcm = (n = b) => (n % a === 0 && n % b === 0 ? n : findLcm(++n))

  const lcm = findLcm()
  let val = lcm
  while (!fullArr.every(num => val % num === 0)) {
    val += lcm
  }
  return val
}
