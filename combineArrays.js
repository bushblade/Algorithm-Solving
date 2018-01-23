var list1 = [1, 2, 3, 4, 5, 6, 7];
var list2 = ['a', 'b', 'c'];
//combine the above two arrays so they result as this array
var result = [1, 'a', 2, 'b', 3, 'c', 4, 5, 6, 7];


var newArray = [];

function combine(list1, list2) {
   list1.forEach(function(i, index) {
      newArray.push(i);
      list2[index] ? newArray.push(list2[index]) : false;
   });
   console.log(newArray);
   return newArray;
}

combine(list1, list2);