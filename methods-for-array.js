//Вариант аналога метода slice № 1
function mySlice(arr, start = 0, end = arr.length) {
  const result = [];

  if (end < 0) {
    end = arr.length + end;
  }

  if (start < 0) {
    start = arr.length + start;
  }

  for (let i = start; i < end; i++) {
    result.push(arr[i]);
  }

  return result;
};

/* Вариант аналога метода slice № 2
function mySlice(arr, start = 0, end = arr.length) {
  return arr.filter((_, i) => {
    if (end < 0) {
      end = arr.length + end;
    }
    if (start < 0) {
      start = arr.length + start;
    }
    return i >= start && i < end;
  });
}; */

// аналог метода indexOf
function myIndexOf(arr, item, from = 0) {
  if (from < 0) {
    from = arr.length + from;
  }

  for (let i = from; i < arr.length; i++) {
    if (arr[i] === item) {
      return i;
    }
  }

  return -1;
}

// аналог метода includes
function myIncludes(arr, item, from = 0) {
  if (from < 0) {
    from = arr.length + from;
  }

  for (let i = from; i < arr.length; i++) {
    if (arr[i] === item) {
      return true;
    }
  }

  return false;
}

const arr = [5, 4, 8, 3, 1, 0];

console.log(mySlice(arr, 1, 3)); // [4, 8]
console.log(myIndexOf(arr, 4, 0)); // 1
console.log(myIncludes(arr, 3, 2)); // true