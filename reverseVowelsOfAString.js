// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

// Example 1:

// Input: s = "hello"
// Output: "holle"
// Example 2:

// Input: s = "leetcode"
// Output: "leotcede"

var reverseVowels = function (s) {
  const allVowels = ['a', 'e', 'i', 'o', 'u'];
  const wordVowels = [];

  for (let i = 0; i < s.length; i++) {
    const letter = s[i];
    if (allVowels.includes(letter)) {
      wordVowels.push(letter);
    }
  }

  return s.split('').map((letter) => {
    if (allVowels.includes(letter)) {
      return wordVowels.pop();
    } else {
      return letter;
    }
  });
};
