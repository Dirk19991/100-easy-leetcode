// In an alien language, surprisingly, they also use English lowercase letters, but possibly in a different order. The order of the alphabet is some permutation of lowercase letters.

// Given a sequence of words written in the alien language, and the order of the alphabet, return true if and only if the given words are sorted lexicographically in this alien language.

// Example 1:

// Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
// Output: true
// Explanation: As 'h' comes before 'l' in this language, then the sequence is sorted.
// Example 2:

// Input: words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"
// Output: false
// Explanation: As 'd' comes after 'l' in this language, then words[0] > words[1], hence the sequence is unsorted.

var isAlienSorted = function (words, order) {
  let hash = {};
  order.split('').forEach((letter, index) => (hash[letter] = index));

  function compare(word1, word2) {
    for (let i = 0; i < word2.length; i++) {
      if (hash[word2[i]] > hash[word1[i]]) {
        return true;
      }

      if (hash[word2[i]] < hash[word1[i]]) {
        console.log(word2[i], word1[i]);
        return false;
      }
    }

    if (word1.length > word2.length) {
      return false;
    } else {
      return true;
    }
  }

  for (let i = 1; i < words.length; i++) {
    if (!compare(words[i - 1], words[i])) {
      return false;
    }
  }

  return true;
};

console.log(isAlienSorted(['apple', 'app'], 'abcdefghijklmnopqrstuvwxyz'));
