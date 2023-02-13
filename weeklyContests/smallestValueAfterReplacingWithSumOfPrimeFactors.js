// You are given a positive integer n.

// Continuously replace n with the sum of its prime factors.

// Note that if a prime factor divides n multiple times, it should be included in the sum as many times as it divides n.
// Return the smallest value n will take on.

// Example 1:

// Input: n = 15
// Output: 5
// Explanation: Initially, n = 15.
// 15 = 3 * 5, so replace n with 3 + 5 = 8.
// 8 = 2 * 2 * 2, so replace n with 2 + 2 + 2 = 6.
// 6 = 2 * 3, so replace n with 2 + 3 = 5.
// 5 is the smallest value n will take on.
// Example 2:

// Input: n = 3
// Output: 3
// Explanation: Initially, n = 3.
// 3 is the smallest value n will take on.

var smallestValue = function (n) {
  let finalResult = 0;

  let variable = n;
  function sumOfPrimeFactors(num) {
    const initialNum = num;
    const factors = [];
    let divisor = 2;

    while (num >= 2) {
      if (num % divisor === 0) {
        factors.push(divisor);
        num = num / divisor;
      } else {
        divisor++;
      }
    }

    let result = factors.reduce((acc, elem) => (acc += elem), 0);

    if (result === initialNum) {
      finalResult = result;
    }

    return result;
  }

  while (finalResult === 0) {
    let result = sumOfPrimeFactors(variable);
    console.log(variable);
    variable = result;
  }

  return finalResult;
};

console.log(smallestValue(3));
