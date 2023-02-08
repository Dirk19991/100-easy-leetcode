// Example 1:

// Input: s = "abc", t = "ahbgdc"
// Output: true
// Example 2:

// Input: s = "axc", t = "ahbgdc"
// Output: false

var isSubsequence = function (s, t) {
  const stack = [];
  let j = 0;

  for (let i = 0; i < t.length; i++) {
    if (t[i] === s[j]) {
      stack.push(t[i]);
      j++;
    }
  }

  console.log(stack, j);

  return j === s.length;
};

console.log(isSubsequence('axc', 'ahbgdc'));
