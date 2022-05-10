'use strict';

function calcAge(birthYear) {
    const age = 2022 - birthYear;
    function printAge() {
        const output = `your are ${age} and born in ${birthYear}`
        console.log(output);
        if (birthYear >= 1981 && birthYear <= 1996) {
            const str = `you are millenial, ${firstName}`
            console.log(str);
        }
    }
    printAge()
    return age;
}

const firstName = 'Jonas'
console.log(calcAge(1989))

