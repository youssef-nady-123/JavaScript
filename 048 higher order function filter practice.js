/*
    ===============================================
    == 048 higher order function filter practice ==
    ===============================================
    - filter()
        used to filter the elements, all elements that return true will be added on the new array, else will be discarded 

    - map()
        used to execute specific function on the element and return all the element after execute the function on all elements

*/

// filter words more than 4 characters
let sentence = "i love foood code too playing much";

let smallWords = sentence.split(' ').filter(function(element){
    return element.length <= 4;
}).join(' ');
console.log(smallWords);        // i love code too much

// ==============================================================

// ignore numbers using map() function
let ignoreNumbers = "Elz123er4o"

let ign = ignoreNumbers.split('').map(function(element){
    return isNaN(parseInt(element)) ? element : "";
}).join('');
console.log(ign);       // Elzero

// ==============================================================

// ignore numbers using filter() function
let ignoreNumbers2 = "Elz123er4o"

let ign2 = ignoreNumbers.split('').filter(function(element){
    return isNaN(parseInt(element));
}).join('');
console.log(ign2);       // Elzero

// ==============================================================

// ignore numbers using map and return boolean values
let ignoreNumbers3 = "Elz123er4o"

let ign3 = ignoreNumbers.split('').map(function(element){
    return isNaN(parseInt(element));
}).join('');
console.log(ign3);       // truetruetruefalsefalsefalsetruetruefalsetrue

// ==============================================================

// return numbers only 
let mix = "A13BS2ZX";

let mixedContent = mix.split('').filter(function(element){
    // use ! before isNaN() method the inverse the condition 
    return !isNaN(parseInt(element));
}).join('');

console.log(mixedContent);      // 132

// ==============================================================

// return numbers only + multiply itself
let mix2 = "A13BS2ZX";

let mixedContent2 = mix.split('').filter(function(element){
    // use ! before isNaN() method the inverse the condition 
    return !isNaN(parseInt(element));
}).map(function(element){
    return element * element;
}).join('');

console.log(mixedContent2);      // 194