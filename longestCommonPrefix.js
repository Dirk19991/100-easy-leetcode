// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

var longestCommonPrefix = function (strs) {
  if (strs.length === 1) {
    return strs[0];
  }

  let shortest = strs[0];

  strs.forEach((str) => {
    if (str.length < shortest.length) {
      shortest = str;
    }
  });

  let longestPrefix = '';

  for (let i = 1; i <= shortest.length; i++) {
    let prefix = shortest.slice(0, i);
    console.log(prefix, strs);
    if (strs.every((str) => str.startsWith(prefix))) {
      longestPrefix = prefix;
    } else {
      return longestPrefix;
    }
  }

  return longestPrefix;
};

console.log(longestCommonPrefix(['a']));
