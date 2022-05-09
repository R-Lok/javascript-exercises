// trim whitespace from string to get rid of spaces

// turn string into array

// get length of array

// get mid point of the length = array.length / 2, use math.floor to round down, since if it is an odd number of letters the letter in the exact middle does not need to be checked

// compare first array element with last array element

// increment first array element, decrement last array element, compare again

// stop when i = array.length / 2 - 1

const palindromes = function (string) {

    let noSpaces = string.replace(/\s/g, "").toLowerCase();
    noSpaces = noSpaces.replace(/[^a-z0-9]/gi, "");
    let stringLetters = noSpaces.split("");
    let noSpacesLength = stringLetters.length;
    let outcome

    for (i = 0; i < Math.floor(noSpacesLength/2 - 1); i++) {
        if (stringLetters[i] === stringLetters[noSpacesLength - 1 - i]) {
            outcome = true
        } else {
            return false
        }
    }
    return outcome;

};

// Do not edit below this line
module.exports = palindromes;
