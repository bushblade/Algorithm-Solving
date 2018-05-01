//Strip Comments
function solution(input, markers) {
  let check = true
  return [...input].reduce((str, x, i, arr) => {
    if (markers.includes(arr[i += 1])) check = false
    else if (x === '\n') check = true
    if (check) str += x
    return str
  }, '')
}
// console.log(solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"]))

// Your order please
function order(words){
  return words.split(' ').sort((a,b) => a.match(/\d/g) - b.match(/\d/g)).join(' ') || ''
}

// console.log(order("is2 Thi1s T4est 3a"))

//GPS navigation
// complete the function so that it returns the fastest route
const roads = [
    {from: 0, to: 1, drivingTime: 5},
    {from: 0, to: 2, drivingTime: 10},
    {from: 1, to: 2, drivingTime: 10},
    {from: 1, to: 3, drivingTime: 2},
    {from: 2, to: 3, drivingTime: 2},
    {from: 2, to: 4, drivingTime: 5},
    {from: 3, to: 2, drivingTime: 2},
    {from: 3, to: 4, drivingTime: 10}
]

function navigate(numberOfIntersections, roads, start, finish) {
  return roads.map(x => Object.entries(x))
}
console.log(navigate(5, roads, 0, 4))
// should return [0, 1, 3, 2, 4]. Fastest time is 5 + 2 + 2 + 5 = 14 minutes