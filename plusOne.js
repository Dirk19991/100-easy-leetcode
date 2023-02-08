// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

// Example 1:

// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].

var plusOne = function (digits) {
  const num =
    digits.length >= 16 ? BigInt(digits.join('')) : +digits.join('') + 1;

  console.log(
    (num + 1n)
      .toString()
      .split('')
      .map((el) => +el)
  );
  return digits.length >= 19
    ? (num + 1n)
        .toString()
        .split('')
        .map((el) => +el)
    : num
        .toString()
        .split('')
        .map((el) => +el);
};

console.log(plusOne([9, 6, 6, 2, 5, 4, 3, 0, 6, 1, 2, 3, 5, 3, 8, 2, 5]));
