const repeatString = function(string, repeats) {
    let output = ""

    if (repeats >= 0) {

    for (i = 1; i <= repeats; i++) {
        output += string
    }
    return output
} else {
    return "ERROR"
    }
}

// Do not edit below this line
module.exports = repeatString;
