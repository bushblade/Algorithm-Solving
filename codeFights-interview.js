function firstNotRepeatingCharacter(s) {
  let obj = [...s].reduce((o, x) => {
    o[x] ? o[x]++ : o[x] = 1
    return o
  }, {})
  return Object.keys(obj).filter(x => obj[x] === 1)[0] || '_'
}
// console.log(firstNotRepeatingCharacter("abacabaabacaba"))

function firstDuplicate(a) {
  let temp = {}
  for (let i = 0; i < a.length; i++) {
    temp[a[i]] ? temp[a[i]]++ : temp[a[i]] = 1
      if(temp[a[i]] === 2){
        return a[i]
      }
    }
  return -1
}

console.log(firstDuplicate([2, 3, 3, 1, 5, 2]))