//this number can be changed by user input in a form
let input = Number(prompt('length of number to guess'));

const numberToGuess = numLength => new Array(numLength)
  .fill(9)
  .map(i => Math.floor(Math.random() * i) + 1);

let winningNumber = numberToGuess(input);
// console.log(winningNumber);

let guess = prompt(`guess the ${winningNumber.length} didgit number`)
  .split('')
  .map(x => Number(x));

// console.log(guess);

//show user which ones match
const guessAgain = (arr1, arr2) => {
  let checked = arr1.map((x, i) => x === arr2[i] ? x = x : x = 'X');
  return checked;
}

//check the guess
const checkGuess = (arr1, arr2) => {
  return arr1.filter((x, i) => x !== arr2[i]).length === 0 ? true : false;
}

const runChecks = () => {
  if (checkGuess(winningNumber, guess)) {
    alert(`you win the number was ${winningNumber}`);
  } else {
    guess = prompt(`you matched ${guessAgain(winningNumber, guess)}`)
      .split('')
      .map(x => Number(x));
    runChecks();
  }
}
runChecks();