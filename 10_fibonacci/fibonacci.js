const fibonacci = function(number) {
    number = parseInt(number);

    if (number > 0) {
        let fiboArray = [1, 1];
        for (i = 2; i < number; i++) {
            fiboArray.push(fiboArray[i-1] + fiboArray[i-2]);
        }
        return fiboArray[number - 1];
    } else if (number === 0) {
        return 0;
    } else {
        return 'OOPS';
    }
    
};


// Do not edit below this line
module.exports = fibonacci;
