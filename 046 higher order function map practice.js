/*
    ============================================
    == 046 higher order function map practice ==
    ============================================
    - swap cases
    - inverted numbers
    - ignore boolean value
*/

let swappingCases = 'elZERo';
let invertedNumbers = [1, -10, -20, 15, 100, -30];
let ignoreNumbers = 'Elz123er4o';

let sw = swappingCases.split("").map(function(element){
    // condition ? true ? true : false;
    return element === element.toUpperCase() ? element.toLowerCase() : element.toUpperCase();
}).join("");

console.log(sw);        // ELzerO

// ===========================================================

let inv = invertedNumbers.map(function(element){
    /*
    negation sign [ - ]
        - if the number is positive, convert it to negative
        - if the number is negative, convert it to positive
    */ 
    return -element;
});
console.log(inv);       // [ -1, 10, 20, -15, -100, 30 ]

// ===========================================================

let ign = ignoreNumbers.split('').map(function(element){
    
    // condition ? true : false;
    // if the element is numbber, return it, else do not return anything 
    return isNaN(parseInt(element)) ? element : "" ;
}).join("");
console.log(ign);       // Elzero