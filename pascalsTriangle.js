// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

// Example 1:

// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// Example 2:

// Input: numRows = 1
// Output: [[1]]

var generate = function (numRows) {
  const resArr = [];
  for (let i = 0; i < numRows; i++) {
    resArr.push(Array(i + 1).fill(0));
  }

  resArr[0][0] = 1;
  resArr[1][0] = 1;
  resArr[1][1] = 1;

  for (let i = 2; i < resArr.length; i++) {
    resArr[i][0] = 1;
    resArr[i][i] = 1;

    for (let j = 1; j < i; j++) {
      resArr[i][j] = resArr[i - 1][j] + resArr[i - 1][j - 1];
    }
  }

  return resArr;
};

console.log(generate(3));
