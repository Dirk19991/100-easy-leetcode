// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1

var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  let lastLeft = 0;
  let lastRight = 0;

  while (right >= left) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    if (target < nums[mid]) {
      right = mid - 1;
      lastRight = right;
    } else {
      left = mid + 1;
      lastLeft = left;
    }
  }

  return Math.max(lastLeft, lastRight);
};

searchInsert([1, 3, 5, 6, 8, 9], 7);
