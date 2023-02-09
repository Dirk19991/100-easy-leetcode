// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

// Example 1:

// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].
// Example 2:

// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]

var sortedSquares = function (nums) {
  const res = [];
  let pivotIndex;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] >= 0 && nums[i - 1] <= 0) {
      pivotIndex = Math.abs(nums[i]) > Math.abs(nums[i - 1]) ? i - 1 : i;
      Math.abs(nums[i]) > Math.abs(nums[i - 1])
        ? res.push(nums[i - 1] ** 2)
        : res.push(nums[i] ** 2);
      break;
    }
  }

  if (pivotIndex === undefined) {
    return nums[0] < 0
      ? nums.reverse().map((el) => el ** 2)
      : nums.map((el) => el ** 2);
  }

  let left = pivotIndex - 1;
  let right = pivotIndex + 1;

  while (left >= 0 || right <= nums.length - 1) {
    if (left < 0) {
      res.push(nums[right] ** 2);
      right++;
    } else if (right > nums.length - 1) {
      res.push(nums[left] ** 2);
      left--;
    } else if (Math.abs(nums[left]) <= Math.abs(nums[right])) {
      res.push(nums[left] ** 2);
      left--;
    } else if (Math.abs(nums[left]) > Math.abs(nums[right])) {
      console.log(nums[left], nums[right]);
      res.push(nums[right] ** 2);
      right++;
      console.log(res);
    }
  }

  return res;
};

console.log(sortedSquares([-1, 2, 2]));
