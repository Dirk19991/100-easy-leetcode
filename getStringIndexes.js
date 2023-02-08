function getStringIndexes(str) {
  str = str.toLowerCase();

  const map = new Map();

  for (let i = 0; i < str.length; i++) {
    const element = str[i];
    if (!map.has(element)) {
      console.log(map.keys);
      map.set(element, [i]);
    } else {
      map.set(element, [...map.get(element), i]);
    }
  }
  let result = [];
  for (let entry of map.entries()) {
    let str = '';
    str += `${entry[0]}: [`;
    for (let elem of entry[1]) {
      str += elem + ', ';
    }
    str = str.slice(0, str.length - 2) + ']';

    result.push(str);
  }
  return result;
}

console.log(getStringIndexes('aaaaAbbbbBccccccCA'));
