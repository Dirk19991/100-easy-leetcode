// Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

// Example 1:

// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]
// Example 2:

// Input: nums = [1,1]
// Output: [2]

var findDisappearedNumbers = function (nums) {
  let hashMap = {};

  let count = 1;
  for (let i = 0; i < nums.length; i++) {
    hashMap[count] = 0;
    count++;
  }

  nums.forEach((num) => {
    if (hashMap[num] === 0) {
      hashMap[num]++;
    }
  });
  return Object.entries(hashMap)
    .filter((elem) => elem[1] === 0)
    .map((elem) => +elem[0]);
};

console.log(findDisappearedNumbers([1, 1]));
