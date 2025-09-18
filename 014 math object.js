/*
    =====================
    == 014 Math Object ==
    =====================
*/

let number = 10.3;
let number2 = 10.654;

// ceil: get the bigtest number of the given number 
console.log(Math.ceil(number));     // 11
console.log(Math.ceil(number2));    // 11

// round: get the nearest number (if the decimal number >= 5 add 1, else discard decimal)
console.log(Math.round(number));        // 10
console.log(Math.round(number2));       // 11

// floor: discard the decimal point number 
console.log(Math.floor(number));        // 10
console.log(Math.floor(number2));       // 10

// min: get the min value 
console.log(Math.min([10, 1, 2]));      // 1

// max: get the max value 
console.log(Math.min([10, 1, 2]));      // 1

// pow: get the power of the given number
console.log(Math.pow(10, 2));       // 100
console.log(Math.pow(2, 3));        // 8

// random: get random decimal value from 0 to 1
console.log(Math.random());

// trunc: return the integer part of the given number 
console.log(Math.trunc(99.5));      // 99

// trunc like floor 
console.log(Math.floor(99.5));      // 99