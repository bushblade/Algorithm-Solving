var list1 = [1, 2, 3, 4, 5, 6, 7]
var list2 = ["a", "b", "c"]
//combine the above two arrays so they result as shown in the result array below
var result = [1, "a", 2, "b", 3, "c", 4, 5, 6, 7]

const combine = (list1, list2) => {
  return list1.reduce((a, x, i) => {
    a.push(x)
    list2[i] ? a.push(list2[i]) : false
    return a
  }, [])
}
console.log(combine(list1, list2))