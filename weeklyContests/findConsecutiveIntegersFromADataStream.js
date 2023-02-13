// You are given two 0-indexed strings word1 and word2.

// A move consists of choosing two indices i and j such that 0 <= i < word1.length and 0 <= j < word2.length and swapping word1[i] with word2[j].

// Return true if it is possible to get the number of distinct characters in word1 and word2 to be equal with exactly one move. Return false otherwise.

// Example 1:

// Input: word1 = "ac", word2 = "b"
// Output: false
// Explanation: Any pair of swaps would yield two distinct characters in the first string, and one in the second string.
// Example 2:

// Input: word1 = "abcc", word2 = "aab"
// Output: true
// Explanation: We swap index 2 of the first string with index 0 of the second string. The resulting strings are word1 = "abac" and word2 = "cab", which both have 3 distinct characters.
// Example 3:

// Input: word1 = "abcde", word2 = "fghij"
// Output: true
// Explanation: Both resulting strings will have 5 distinct characters, regardless of which indices we swap.

var DataStream = function (value, k) {
  let integers = [];

  this.limit = k;
  this.val = value;
  this.consec = (number) => {
    if (integers.length === k) {
      integers.shift();
    }
    integers.push(number);
    if (integers.length < k) {
      return false;
    }
    if (!integers.every((int) => int === this.val)) {
      return false;
    }
    return true;
  };
};

const datastream = new DataStream(4, 3);

console.log(datastream.consec(4));
console.log(datastream.consec(4));
console.log(datastream.consec(4));
console.log(datastream.consec(3));
