// Given two integer arrays nums1 and nums2, sorted in non-decreasing order, return the minimum integer common to both arrays. If there is no common integer amongst nums1 and nums2, return -1.

// Note that an integer is said to be common to nums1 and nums2 if both arrays have at least one occurrence of that integer.

// Example 1:

// Input: nums1 = [1,2,3], nums2 = [2,4]
// Output: 2
// Explanation: The smallest element common to both arrays is 2, so we return 2.
// Example 2:

// Input: nums1 = [1,2,3,6], nums2 = [2,3,4,5]
// Output: 2
// Explanation: There are two common elements in the array 2 and 3 out of which 2 is the smallest, so 2 is returned.

var getCommon = function (nums1, nums2) {
  if (nums1[0] === nums2[0]) {
    return nums1[0];
  }

  let biggerArray;
  let lesserArray;

  if (nums1[0] > nums2[0]) {
    biggerArray = nums1;
    lesserArray = nums2;
  } else {
    biggerArray = nums2;
    lesserArray = nums1;
  }

  for (let i = 0; i < biggerArray.length; i++) {
    if (lesserArray.includes(biggerArray[i])) {
      return biggerArray[i];
    }
  }

  return -1;
};

console.log(
  getCommon(
    [
      11, 15, 28, 31, 36, 42, 46, 54, 58, 63, 64, 67, 75, 76, 76, 79, 83, 85,
      87, 90,
    ],
    [
      3, 6, 8, 13, 15, 19, 22, 25, 29, 29, 32, 35, 43, 43, 48, 55, 81, 90, 91,
      94,
    ]
  )
);
