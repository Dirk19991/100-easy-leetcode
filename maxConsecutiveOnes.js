var findMaxConsecutiveOnes = function (nums) {
  let totalMax = 0;
  let currentMax = 0;
  nums.forEach((num) => {
    if (num === 1) {
      currentMax++;
    } else {
      currentMax > totalMax ? (totalMax = currentMax) : totalMax;
      currentMax = 0;
    }
  });

  return totalMax;
};
