// An array is monotonic if it is either monotone increasing or monotone decreasing.

// An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j]. An array nums is monotone decreasing if for all i <= j, nums[i] >= nums[j].

// Given an integer array nums, return true if the given array is monotonic, or false otherwise.

// Example 1:

// Input: nums = [1,2,2,3]
// Output: true
// Example 2:

// Input: nums = [6,5,4,4]
// Output: true

var isMonotonic = function (nums) {
  let direction;

  for (let i = 1; i < nums.length; i++) {
    console.log(i, direction);
    if (direction === 'increasing') {
      if (nums[i] < nums[i - 1]) return false;
    }
    if (direction === 'decreasing') {
      if (nums[i] > nums[i - 1]) return false;
    }
    if (!direction) {
      if (nums[i] > nums[i - 1]) {
        direction = 'increasing';
      }
      if (nums[i] < nums[i - 1]) {
        direction = 'decreasing';
      }
    }
  }

  return true;
};

console.log(isMonotonic([5, 3, 2, 4, 1]));
