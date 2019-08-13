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

// console.log(addLinkedLists([2, 4, 3], [5, 6, 4]))

// Imagine you are building a compiler. Before running any code, the compiler must check that the parentheses in the program are balanced. Every opening bracket must have a corresponding closing bracket. We can approximate this using strings.

// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// - Open brackets are closed by the same type of brackets.
// - Open brackets are closed in the correct order.
// - Note that an empty string is also considered valid.

const validBrackets = str => {
  if (str.length % 2 !== 0) return false
  return str.length === 0 ? true : validBrackets(str.replace(/(\(\))|(\[\])|(\{\})/gi, ''))
}

console.log(validBrackets('([{}])()'))
