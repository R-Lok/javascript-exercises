const sumAll = function(numOne, numTwo) {

    if (typeof(numOne) !== 'number' || typeof(numTwo) !== 'number' 
        || (numOne || numTwo) < 0) {
        return "ERROR"
    }

    
    if (numOne > numTwo) {
        let tempTwo = numTwo;
        numTwo = numOne;
        numOne = tempTwo;
    }
    
    let sum = 0

    for (i = numOne; i <= numTwo; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
