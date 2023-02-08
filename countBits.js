var countBits = function (n) {
  const numberArr = Array(n + 1).fill(0);

  for (let i = 0; i < numberArr.length; i++) {
    const binary = i.toString(2);
    const ones = binary.split('').filter((digit) => digit === '1');
    numberArr[i] = ones.length;
  }

  return numberArr;
};

console.log(countBits(5));
