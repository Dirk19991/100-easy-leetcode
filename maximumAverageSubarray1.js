// You are given an integer array nums consisting of n elements, and an integer k.

// Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

// Example 1:

// Input: nums = [1,12,-5,-6,50,3], k = 4
// Output: 12.75000
// Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
// Example 2:

// Input: nums = [5], k = 1
// Output: 5.00000

var findMaxAverage = function (nums, k) {
  let max = -Infinity;
  let prev;

  for (let i = 0; i <= nums.length - k; i++) {
    let subArr;
    let sum;
    let average;

    if (prev === undefined) {
      subArr = nums.slice(i, i + k);
      sum = subArr.reduce((acc, elem) => (acc += elem), 0);
      prev = sum;
      average = sum / k;
    } else {
      sum = prev - nums[i - 1] + nums[i - 1 + k];

      average = sum / k;
      prev = sum;
    }

    max = Math.max(max, average);
  }

  return max;
};

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));
