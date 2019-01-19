const arrayToShuffle1 = ["a", "b", "c", "d", "e", "f", "g"];
const arrayToShuffle2 = ["a", "b", "c", "d", "e", "f", "g"];

function shuffleArray(array) {
   for (let i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
   }
   return array;
}

console.log(shuffleArray(arrayToShuffle1));

//without a loop

const shuffle = arry => {
   arry.forEach((x, i) => {
      let rnd = Math.floor(Math.random() * arry.length),
         temp = arry[i]
      arry[i] = arry[rnd]
      arry[rnd] = temp
   })
  return arry
}
shuffle(arrayToShuffle2)
