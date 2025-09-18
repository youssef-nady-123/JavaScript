/*
    ========================
    == 013 Number methods ==
    ========================
*/

// use two dots to call a method 
// convert the number to string 
console.log(typeof(100..toString()));       // string

// toFixed(): returns a string representing the number with 0 digits after deciaml point number by default
console.log((100.65).toFixed());      // 101

// represent the number with 2 digits after the deciaml point number 
console.log((10.667).toFixed(2));        // 10.67

// parseInt(): is a method used to convert the string number to integer number 
console.log(parseInt("100.10"));        // 100 
console.log(parseInt("11"));            // 11
console.log(parseInt("osama + 10"));    // NaN

// parseFloat(): is a method used to convert the string number to floating point number
console.log(parseFloat("osama 10"));        // NaN
console.log(parseFloat("10.36"));       // 10.36
console.log(parseFloat("10.54 This Is a Number"));      // 10.54

// check if the number is integer or not
console.log(Number.isInteger(10));          // true 

// check if the number is NaN or not 
console.log(Number.isNaN("10"));            // false
console.log(Number.isNaN("osama" - 10));    // true 