// You are given two linked-lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// Example:
// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

const addLinkedLists = (list1, list2) => {
  const numberify = list => Number(list.reverse().join(''))
  const result = numberify(list1) + numberify(list2)
  return `${result}`
    .split('')
    .map(s => Number(s))
    .reverse()
}

console.log(addLinkedLists([2, 4, 3], [5, 6, 4]))
