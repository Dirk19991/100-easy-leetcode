// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.

var isPalindrome = function (s) {
  let formattedString = s
    .toLowerCase()
    .split('')
    .filter(
      (elem) =>
        (elem.charCodeAt(0) >= 48 && elem.charCodeAt(0) <= 57) ||
        (elem.charCodeAt(0) >= 97 && elem.charCodeAt(0) <= 122)
    )
    .join('');

  if (formattedString.length % 2 !== 0) {
    formattedString =
      formattedString.slice(0, Math.floor(formattedString.length / 2)) +
      formattedString.slice(Math.floor(formattedString.length / 2) + 1);
  }

  console.log(formattedString.length);

  const stack = [];

  for (let i = 0; i < formattedString.length; i++) {
    if (
      stack[stack.length - 1] === formattedString[i] &&
      i >= formattedString.length / 2
    ) {
      stack.pop();
    } else {
      stack.push(formattedString[i]);
    }
  }

  console.log(stack);

  return stack.length === 0;
};

isPalindrome(",'6``c4i,::,i4ckk6',");
