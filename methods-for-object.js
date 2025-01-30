function calcSumNumericFields(obj) {
  let sum = 0;

  for (let key in obj) {
    if (typeof obj[key] === 'number') {
      sum += obj[key];
    }
  }

  return sum;
}

// вариант метда № 1 возвращает отсортированый [] с названиями полей
function getSortedKeysByNumericFields(obj) {
  let arr = Object.entries(obj)
    .filter((item) => typeof item[1] === 'number')
    .sort((a, b) => b[1] - a[1]);

  return arr.map((item) => item[0]);
}

// вариант метода № 2 возвращает отсортированый [] с названиями полей
/* function getSortedKeysByNumericFields(obj) {
  let arr = [];

  for (let key in obj) {
    if (typeof obj[key] === 'number') {
      arr.push([key, obj[key]]);
    }
  }

  return arr.sort((a, b) => b[1] - a[1]).map((item) => item[0]);
} */

  const user = {
    name: 'Vasya',
    friends: 5,
    likes: 19,
    projects: 7
  };

console.log(calcSumNumericFields(user)); // 31
console.log(getSortedKeysByNumericFields(user)); //  [likes, projects, friends]