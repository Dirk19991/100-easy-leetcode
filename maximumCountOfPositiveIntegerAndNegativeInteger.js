// 2529. Maximum Count of Positive Integer and Negative Integer
// Easy
// 260
// 15
// Companies
// Given an array nums sorted in non-decreasing order, return the maximum between the number of positive integers and the number of negative integers.

// In other words, if the number of positive integers in nums is pos and the number of negative integers is neg, then return the maximum of pos and neg.
// Note that 0 is neither positive nor negative.

// Example 1:

// Input: nums = [-2,-1,-1,1,2,3]
// Output: 3
// Explanation: There are 3 positive integers and 3 negative integers. The maximum count among them is 3.
// Example 2:

// Input: nums = [-3,-2,-1,0,0,1,2]
// Output: 3
// Explanation: There are 2 positive integers and 3 negative integers. The maximum count among them is 3.

var maximumCount = function (nums) {
  let positives = 0;
  let negatives = 0;

  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if (element < 0) {
      negatives++;
    }
    if (element > 0) {
      positives++;
    }
  }
  return Math.max(positives, negatives);
};
