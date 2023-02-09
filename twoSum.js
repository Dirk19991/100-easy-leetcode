// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

var twoSum = function (nums, target) {
  const sortedNums = [...nums].sort((a, b) => a - b);
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    
    if (sortedNums[left] + sortedNums[right] > target) {
      right--;
    } else if (sortedNums[left] + sortedNums[right] < target) {
      left++;
    } else {
      let num1 = nums.findIndex((num) => num === sortedNums[left]);
      let num2 = nums.findIndex((num) => num === sortedNums[right]);
      if (num1 === num2) {
        for (let i = nums.length - 1; i >= 0; i--) {
         
          if (nums[i] === sortedNums[right]) {
            num2 = i;
            break;
          }
        }
      }
      return [num1, num2];
    }
  }
};
console.log(twoSum([2, 7, 11, 15], 9));
