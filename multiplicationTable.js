//create a function that given a number returns multiplication table up to that number

const createMultiTable = num => {
   let multiTable = [];
   let row = new Array(num + 1).fill(0).map((x, i) => x = i);
   row.forEach((i, x) => multiTable.push(row.map(item => item * x)));
   multiTable.forEach((item, index) => item.splice(item[0], 1, row[index]));
   multiTable[0] = row;
   console.log(multiTable);
}
createMultiTable(5);