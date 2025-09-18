/*
    ===========================
    == 019 logical operators ==
    ===========================
    !       Not
    &&      And
    ||      Or
*/

// Not: get the inverse value 
console.log(!true);         // false
console.log(!false);        // true 

// And: all conditions must be true 
let name = 'osama';
let age = 25;
console.log(name == "osama" && age == 25);      // true 
console.log(name == "ahmed" && age == 25);      // false 

// Or: one of the the given conditions must be true 
console.log(name == "osama" || age == 23);      // true 