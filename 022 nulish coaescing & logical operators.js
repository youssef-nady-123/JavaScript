/*
    ================================================
    == 022 nulish coaescing operator & logical or ==
    ================================================
    used when cause problem on representation of the info to user
*/

// ======================
// == 01 logical or || == 
// ======================
// related to undefined, null, falsy values
let price = 100;
console.log(`the price is: ${price}`);      // the price is: 100

// if the value of price is undefined, null, 0 will write other value 
price = undefined;
console.log(`the price is: ${price || 200}`);    // the price is: 200

price = null;
console.log(`the price is: ${price || 200}`);    // the price is: 200

price = 0;
console.log(`the price is: ${price || 200}`);    // the price is: 200

// you can show the boolean values of the data
console.log(Boolean(''));       // false
console.log(Boolean(0));        // false
console.log(Boolean("0"));      // true
console.log(Boolean('hello'));  // true

// ============================
// == 02 nulish coaescing ?? == 
// ============================
// related to undefined, null values

price = undefined;
console.log(`the price is: ${price ?? 200}`);    // the price is: 200

// if the type of data is falsy, will ignore 200
price = 0;
console.log(`the price is: ${price ?? 200}`);       // the price is: 0