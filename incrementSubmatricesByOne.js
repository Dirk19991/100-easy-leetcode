// You are given a positive integer n, indicating that we initially have an n x n 0-indexed integer matrix mat filled with zeroes.

// You are also given a 2D integer array query. For each query[i] = [row1i, col1i, row2i, col2i], you should do the following operation:

// Add 1 to every element in the submatrix with the top left corner (row1i, col1i) and the bottom right corner (row2i, col2i). That is, add 1 to mat[x][y] for for all row1i <= x <= row2i and col1i <= y <= col2i.
// Return the matrix mat after performing every query.

// Example 1:

// Input: n = 3, queries = [[1,1,2,2],[0,0,1,1]]
// Output: [[1,1,0],[1,2,1],[0,1,1]]
// Explanation: The diagram above shows the initial matrix, the matrix after the first query, and the matrix after the second query.
// - In the first query, we add 1 to every element in the submatrix with the top left corner (1, 1) and bottom right corner (2, 2).
// - In the second query, we add 1 to every element in the submatrix with the top left corner (0, 0) and bottom right corner (1, 1).

var rangeAddQueries = function (n, queries) {
  let matrix = new Array(n).fill(0).map((elem) => Array(n).fill(0));

  queries.forEach((query) => {
    for (let i = query[0]; i <= query[2]; i++) {
      for (let j = query[1]; j <= query[3]; j++) {
        matrix[i][j]++;
      }
    }
  });

  return matrix;
};

console.log(
  rangeAddQueries(13, [
    [3, 1, 7, 3],
    [7, 5, 7, 8],
    [4, 12, 6, 12],
    [2, 8, 6, 11],
    [9, 11, 10, 11],
    [9, 3, 11, 11],
    [0, 12, 10, 12],
    [10, 5, 11, 12],
    [4, 7, 6, 12],
    [0, 2, 9, 6],
    [12, 7, 12, 11],
    [2, 7, 3, 8],
    [2, 9, 6, 12],
    [10, 7, 10, 12],
    [11, 6, 11, 7],
    [3, 2, 12, 9],
  ])
);
