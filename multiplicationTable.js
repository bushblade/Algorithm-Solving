//create a function that given a number returns multiplication table up to that number

function createMultiTable(num) {
  let multiTable = [];
  let row = [];
  //create first array
  for (let i = 0; i <= num; i++) {
    row.push(i);
  }
  row.forEach((i, x) => multiTable.push(row.map(item => item * x)));
  multiTable.forEach((item, index) => item.splice(item[0], 1, row[index]));
  multiTable[0] = row;
  console.log(multiTable);
}
createMultiTable(5);
