// Given two positive integers left and right, find the two integers num1 and num2 such that:

// left <= nums1 < nums2 <= right .
// nums1 and nums2 are both prime numbers.
// nums2 - nums1 is the minimum amongst all other pairs satisfying the above conditions.
// Return the positive integer array ans = [nums1, nums2]. If there are multiple pairs satisfying these conditions, return the one with the minimum nums1 value or [-1, -1] if such numbers do not exist.

// A number greater than 1 is called prime if it is only divisible by 1 and itself.

// Example 1:

// Input: left = 10, right = 19
// Output: [11,13]
// Explanation: The prime numbers between 10 and 19 are 11, 13, 17, and 19.
// The closest gap between any pair is 2, which can be achieved by [11,13] or [17,19].
// Since 11 is smaller than 17, we return the first pair.
// Example 2:

// Input: left = 4, right = 6
// Output: [-1,-1]
// Explanation: There exists only one prime number in the given range, so the conditions cannot be satisfied.

var closestPrimes = function (left, right) {
  let closestGap = Infinity;
  let candidateNum1;
  let candidateNum2;
  let currentNum1;
  let currentNum2;

  function isPrime(num) {
    if (num === 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  for (let i = left; i <= right; i++) {
    if (isPrime(i)) {
      if (!currentNum1) {
        currentNum1 = i;
      } else if (!currentNum2) {
        currentNum2 = i;
      } else {
        currentNum1 = currentNum2;
        currentNum2 = i;
      }

      if (currentNum2 - currentNum1 < closestGap) {
        closestGap = currentNum2 - currentNum1;
        candidateNum1 = currentNum1;
        candidateNum2 = currentNum2;
      }
    }
  }

  if (!currentNum1 || !currentNum2) {
    return [-1, -1];
  }

  return [candidateNum1, candidateNum2];
};

console.log(closestPrimes(10, 19));
