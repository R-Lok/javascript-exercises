const reverseString = function(word) {
    let wordLetters = word.split("")
    wordLetters.reverse()
    return wordLetters.join("")

};

// Do not edit below this line
module.exports = reverseString;
