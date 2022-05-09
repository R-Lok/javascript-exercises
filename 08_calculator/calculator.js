const add = function(numOne, numTwo) {
  return numOne + numTwo;
	
};

const subtract = function(numOne, numTwo) {
	return numOne - numTwo;
};

const sum = function(array) {
  let sumResult = 0
	for (i = 0; i < array.length; i++) {
    sumResult += array[i];
  }

  return sumResult;

};

const multiply = function(array) {

  let multiplyResult = 1

  for (i = 0; i < array.length; i++) {
      multiplyResult *= array[i];
    } 

    return multiplyResult;

}

const power = function(number, power) {
	
  return number ** power;

};

const factorial = function(number) {

  let factorialResult = 1

  for (i = 1; i <= number; i++) {
      factorialResult *= i;
    }

    return factorialResult;
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
