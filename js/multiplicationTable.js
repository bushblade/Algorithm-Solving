//create a function that given a number returns multiplication table up to that number

const createMultiTable = num => {
  let multiTable = [],
    row = new Array(num + 1).fill(0).map((x, i) => x = i);
  row.forEach(x => multiTable.push(row.map(a => a * x)));
  multitable = multiTable.map((x, i) => x[0] = row[i]);
  multiTable[0] = row;
  console.log(multiTable);
}
createMultiTable(5);