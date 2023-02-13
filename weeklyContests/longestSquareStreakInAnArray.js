// You are given an integer array nums. A subsequence of nums is called a square streak if:

// The length of the subsequence is at least 2, and
// after sorting the subsequence, each element (except the first element) is the square of the previous number.
// Return the length of the longest square streak in nums, or return -1 if there is no square streak.

// A subsequence is an array that can be derived from another array by deleting some or no elements without changing the order of the remaining elements.

// Example 1:

// Input: nums = [4,3,6,16,8,2]
// Output: 3
// Explanation: Choose the subsequence [4,16,2]. After sorting it, it becomes [2,4,16].
// - 4 = 2 * 2.
// - 16 = 4 * 4.
// Therefore, [4,16,2] is a square streak.
// It can be shown that every subsequence of length 4 is not a square streak.
// Example 2:

// Input: nums = [2,3,5,6,7]
// Output: -1
// Explanation: There is no square streak in nums so return -1.

var longestSquareStreak = function (nums) {
  const mappedNums = nums.map((elem) => {
    let marker = 0;
    while (Math.sqrt(elem) % 1 === 0) {
      elem = Math.sqrt(elem);
      marker = 1;
    }
    return [elem, marker];
  });

  let hash = {};
  console.log(mappedNums);
  mappedNums.forEach((num) => {
    if (!hash[num[0]] && num[1]) {
      hash[num[0]] = 1;
    } else if (hash[num[0]] && num[1]) {
      hash[num[0]]++;
    }
  });

  console.log(hash);

  let result = Object.values(hash).sort((a, b) => b - a)[0];

  return result === 1 ? -1 : result;
};

console.log(longestSquareStreak([4, 3, 6, 16, 8, 2]));
