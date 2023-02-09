// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

// Example 1:

// Input: ransomNote = "a", magazine = "b"
// Output: false
// Example 2:

// Input: ransomNote = "aa", magazine = "ab"
// Output: false
// Example 3:

// Input: ransomNote = "aa", magazine = "aab"
// Output: true

var canConstruct = function (ransomNote, magazine) {
  const hash = {};

  for (let i = 0; i < magazine.length; i++) {
    const element = magazine[i];
    if (!hash[element]) {
      hash[element] = 1;
    } else {
      hash[element]++;
    }
  }
  for (let i = 0; i < ransomNote.length; i++) {
    const element = ransomNote[i];
    if (!hash[element]) {
      return false;
    } else {
      hash[element]--;
    }
  }
};
