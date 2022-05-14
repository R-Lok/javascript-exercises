const findTheOldest = function(peopleArray) {

   peopleArray.forEach(person => {if (person.yearOfDeath === undefined) {
        person.yearOfDeath = new Date().getFullYear();
    } else {
        return;
    }
});

    let peopleSorted = peopleArray.sort((personA, personB) => {
        if (personA.yearOfDeath - personA.yearOfBirth > personB.yearOfDeath - personB.yearOfBirth) {
            return -1
        } else {
            return 1
        }
    })
    return peopleSorted[0];
};

// Do not edit below this line
module.exports = findTheOldest;
