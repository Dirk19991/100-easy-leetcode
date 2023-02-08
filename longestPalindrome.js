// Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

// Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

// Example 1:

// Input: s = "abccccdd"
// Output: 7
// Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.
// Example 2:

// Input: s = "a"
// Output: 1
// Explanation: The longest palindrome that can be built is "a", whose length is 1.

var longestPalindrome = function (s) {
  const hashTable = {};

  for (let i = 0; i < s.length; i++) {
    const element = s[i];
    if (!hashTable[element]) {
      hashTable[element] = 1;
    } else {
      hashTable[element]++;
    }
  }

  let sortedValues = Object.values(hashTable).sort((a, b) => b - a);
  let biggestOdd = 0;

  for (let i = 0; i < sortedValues.length; i++) {
    const element = sortedValues[i];
    if (element % 2 !== 0) {
      biggestOdd = element;
      sortedValues = sortedValues.slice(0, i).concat(sortedValues.slice(i + 1));
      break;
    }
  }

  return (
    sortedValues
      .map((elem) => {
        if (elem % 2 === 0) {
          return elem;
        } else {
          return elem - 1;
        }
      })
      .reduce((acc, elem) => acc + elem, 0) + biggestOdd
  );
};

console.log(longestPalindrome('bb'));
