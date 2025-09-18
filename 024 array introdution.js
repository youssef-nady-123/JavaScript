/*
    ============================
    == 024 array introduction ==
    ============================
*/

// create an array 
let admins = ['osama', 'mohamed', 'ali'];

// create an aarray 
let fruits = new Array();

// access array elements
console.log(admins[0]);     // osama
console.log(admins[-1]);     // undefined

// edit the array elements
admins[0] = 'ahmed';
console.log(admins[0]);     // ahmed

// create nested array
let names = ['osama', 'mohamed', ['mona', 'alaa']];

// access elements on nested array
console.log(names[2][0]);       // mona

// print the first letter of the first element on array 
console.log(names[2][0][0]);        // m

// check if the data is array !
console.log(Array.isArray(admins));     // true 