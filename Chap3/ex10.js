let matrix = [
  // outer array
  [1, 5, 3], // row 0 // inner array
  [36, 7, 4], // row 1 // inner array
  [45, 2, 7], // row 2// inner array
  //col0 1 2
];

// data can be in a nested array format.
// we can create games using nested array (tic tac toe, chess, bingo game, )
// The normal arrays are 1 dimensional.
// This is 2 dimensional.
// we have rows and column which acts like indexes.

// Extracting values from the array
// The first line extracts a complete inner array. Then we can use it to extract the single value.
// const innerArray = outerArray[index];
// const singleValue = innerArray[index];

const row1 = matrix[0]; // gives [1, 5, 3],
console.log(row1);
const firstValue = row1[0];
console.log(firstValue);

// We can directly use the outer array to extract the single values using the rowIndex and column index
// const singleValue = outerArray[rowIndex][colIndex];

let secondValue = matrix[0][1];
console.log(secondValue);
