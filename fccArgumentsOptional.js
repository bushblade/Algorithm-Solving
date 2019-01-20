function addTogether(a, b) {
  const isNum = n => typeof n === 'number'
  if (isNum(a) && isNum(b)) {
    return a + b
  } else if (!b && isNum(a)) {
    return c => (isNum(c) ? a + c : undefined)
  }
}

console.log(addTogether(2)(3))
