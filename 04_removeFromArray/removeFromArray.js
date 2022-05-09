const removeFromArray = function(array, remove) {

    for (i = 1; i < arguments.length; i++) {

        if (array.includes(arguments[i]) === false){
            continue
        } else {
            let removeIndex = array.indexOf(arguments[i]);
            array.splice(removeIndex, 1);
        }
       
    }
    return array

    
};

// Do not edit below this line
module.exports = removeFromArray;
