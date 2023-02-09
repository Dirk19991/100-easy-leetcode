// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".

// Example 1:

// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3
// Example 2:

// Input: jewels = "z", stones = "ZZ"
// Output: 0

var numJewelsInStones = function (jewels, stones) {
  const hashTable = {};

  for (let i = 0; i < jewels.length; i++) {
    const element = jewels[i];
    hashTable[element] = 0;
  }

  for (let i = 0; i < stones.length; i++) {
    const element = stones[i];
    if (hashTable[element] !== undefined) {
      hashTable[element]++;
    }
  }

  return Object.values().reduce((acc, elem) => (acc += elem), 0);
};
