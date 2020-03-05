function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function sum(arr) {
  if (arr.length === 0) {
    return 0;
  }
  return arr.reduce((total, num) => {
    return total + num;
  });
}

function multiply(arr) {
  return arr.reduce((total, num) => {
    return total * num;
  });
}

function power(num1, num2) {
  return Math.pow(num1, num2);
}

function factorial(num) {
  let result = 1;
  for (let i = num; i > 1; i--) {
    result *= i;
  }
  return result;
}

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
