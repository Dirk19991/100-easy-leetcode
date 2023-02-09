// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// return searchB(arr.slice(0, mid)) || searchB(arr.slice(mid));

// Input: nums = [-1,0,3,5,9,12,15], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4
// Example 2:

// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1

var search = function (nums, target) {
  function searchB(arr) {
    
    if (arr.length === 0) {
      return;
    }
    if (arr.length === 1) {
      return arr[0] === target ? lastIndex : false;
    } else {
      let mid = Math.floor(arr.length / 2);

      return (
        searchB(
          arr.slice(0, mid),
          lastIndex % 2 === 0 ? lastIndex / 2 : Math.floor(lastIndex / 2)
        ) || searchB(arr.slice(mid), lastIndex)
      );
    }
  }

  return searchB(nums, 5);
};

console.log(search([-1, 0, 3, 5, 9, 12], 9));
