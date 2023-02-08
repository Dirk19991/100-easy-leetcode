// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

// Example 1:

// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Example 2:

// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]

var reverseString = function (s) {
  const mid = Math.floor(s.length / 2);

  for (let i = 0; i < mid; i++) {
    console.log(s[i], s[s.length - 1 - i]);
    let temp = s[i];
    s[i] = s[s.length - 1 - i];
    s[s.length - 1 - i] = temp;
    console.log(s);
  }

  return s;
};

console.log(reverseString(['H', 'a', 'n', 'n', 'a', 'h']));
