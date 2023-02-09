// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

// Example 1:

// Input: s = "leetcode"
// Output: 0
// Example 2:

// Input: s = "loveleetcode"
// Output: 2
// Example 3:

// Input: s = "aabb"
// Output: -1

var firstUniqChar = function (s) {
  const hashTable = {};

  for (let i = 0; i < s.length; i++) {
    const element = s[i];
    if (!hashTable[element]) {
      hashTable[element] = 1;
    } else {
      hashTable[element]++;
    }
  }

  console.log(hashTable);

  const uniqueLetters = Object.entries(hashTable)
    .filter((elem) => elem[1] === 1)
    .map((elem) => elem[0]);

  console.log(uniqueLetters);

  for (let i = 0; i < s.length; i++) {
    if (uniqueLetters.includes(s[i])) {
      return i;
    }
  }

  return -1;
};

console.log(firstUniqChar('leetcode'));
