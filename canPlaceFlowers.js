// You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule.

// Example 1:

// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: true
// Example 2:

// Input: flowerbed = [1,0,0,0,1], n = 2
// Output: false

var canPlaceFlowers = function (flowerbed, n) {
  let result = 0;
  let zeroCounter = 0;

  flowerbed.unshift(0);
  flowerbed.push(0);

  console.log(flowerbed);

  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 0) {
      zeroCounter++;
    } else {
      zeroCounter >= 3
        ? (result = result + Math.ceil(zeroCounter / 2) - 1)
        : result;
      zeroCounter = 0;
    }
  }

  if (zeroCounter >= 3) {
    result = result + Math.ceil(zeroCounter / 2) - 1;
  }

  console.log(result);

  return result >= n;
};

console.log(canPlaceFlowers([1, 0, 0, 0, 1, 0, 0], 2));
