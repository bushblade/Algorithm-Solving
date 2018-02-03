//set variables
let input,
  winningNum,
  guess;

init();

function init() {
  setInput();
  storeGuess();
  runChecks();
}

function setInput() {
  input = Number(prompt('length of number to guess'));
  setWinningNum(input);
}

function setWinningNum(x) {
  winningNum = new Array(x)
    .fill(9)
    .map(i => Math.floor(Math.random() * i) + 1);
}

function storeGuess() {
  guess = prompt(`guess the ${winningNum.length} didgit number`)
    .split('')
    .map(x => Number(x));
}

//show user which ones match
function guessAgain(arr1, arr2) {
  let checked = arr1.map((x, i) => x === arr2[i] ? x = x : x = 'X');
  return checked;
}

//check the guess
function checkGuess(arr1, arr2) {
  return arr1.filter((x, i) => x !== arr2[i]).length === 0 ? true : false;
}

function runChecks() {
  if (checkGuess(winningNum, guess)) {
    alert(`you win the number was ${winningNum}`);
    playAgain();
  } else {
    guess = prompt(`you matched ${guessAgain(winningNum, guess)}`)
      .split('')
      .map(x => Number(x));
    runChecks();
  }
}

function playAgain() {
  confirm('Play again?') ? init() : alert('Thanks for playing!');
}