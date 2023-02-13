// You are given a 0-indexed integer array nums and an integer k. You have a starting score of 0.

// In one operation:

// choose an index i such that 0 <= i < nums.length,
// increase your score by nums[i], and
// replace nums[i] with ceil(nums[i] / 3).
// Return the maximum possible score you can attain after applying exactly k operations.

// The ceiling function ceil(val) is the least integer greater than or equal to val.

// Example 1:

// Input: nums = [10,10,10,10,10], k = 5
// Output: 50
// Explanation: Apply the operation to each array element exactly once. The final score is 10 + 10 + 10 + 10 + 10 = 50.
// Example 2:

// Input: nums = [1,10,3,3,3], k = 3
// Output: 17
// Explanation: You can do the following operations:
// Operation 1: Select i = 1, so nums becomes [1,4,3,3,3]. Your score increases by 10.
// Operation 2: Select i = 1, so nums becomes [1,2,3,3,3]. Your score increases by 4.
// Operation 3: Select i = 2, so nums becomes [1,1,1,3,3]. Your score increases by 3.
// The final score is 10 + 4 + 3 = 17.

var maxKelements = function (nums, k) {
  if (nums.length === 1) {
    let result = 0;
    while (k > 0) {
      result += nums[0];
      nums[0] = Math.ceil(nums[0] / 3);
      k--;
    }
    return result;
  }

  let result = 0;
  let sortedNums = nums.sort((a, b) => b - a);

  while (k > 0) {
    console.log(result);
    for (let i = 0; i < sortedNums.length; i++) {
      if (sortedNums[i] >= sortedNums[i + 1]) {
        result += sortedNums[i];
        sortedNums[i] = Math.ceil(sortedNums[i] / 3);
        i--;
        k--;
        break;
      } else {
        result += sortedNums[i + 1];

        sortedNums[i + 1] = Math.ceil(sortedNums[i] / 3);
        k--;
        break;
      }
    }
  }

  return result;
};

console.log(maxKelements([672579538, 806947365, 854095676, 815137524], 3));
