function addNumbers(num1, num2) {
  return num1 + num2;
}

function subtractNumbers(num1, num2) {
  return num1 - num2;
}

function multiplyNumbers(num1, num2) {
  return num1 * num2;
}

function divideNumbers(num1, num2) {
  return num1 / num2;
}

const operations = {
  add: addNumbers,
  subtract: subtractNumbers,
  multiply: multiplyNumbers,
  divide: divideNumbers,
};

function calculate(num1, num2, operationFunction) {
  return operationFunction(num1, num2);
}

const selectedOperation = 'multiply';
console.log(calculate(6, 3, operations[selectedOperation])); // 18