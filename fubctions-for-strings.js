function capitalizeTheFirstLetter(str) {
  str = str[0].toUpperCase() + str.slice(1);
  return str;
}

function trimStringByLength(str, maxLength) {
  const regex = /[\s,.!?:;]/;

  if (str.length <= maxLength) {
    return str;
  }

  if (regex.test(str.at(maxLength))) {
    return `${str.slice(0, maxLength)}...`;
  } else {
    for (let i = maxLength - 1; i >= 0; i--) {
      if (regex.test(str.at(i))) {
        return `${str.slice(0, i)}...`;
      }
    }
  }
}

function isCheckingSubstring(str1, str2) {
  return str1.includes(str2) || str2.includes(str1);
}

const trimStr = 'Это очень длинная строка, которую мы хотим обрезать';

console.log(capitalizeTheFirstLetter('иван')); // Иван
console.log(trimStringByLength(trimStr, 40)); // Это очень длинная строка, которую мы...
console.log(isCheckingSubstring('привет мир', 'мир')); // true