/*
    ==========================
    == 021 ternary operator ==
    ==========================
    condition ? if true : if else;

    - usually used in short if statement
*/

let number = -10;

// check if the number is even or odd
console.log(number % 2 == 0 ? "even number" : "odd number");

// check the number is positive or odd
console.log(number >= 0 ? "positive number" : "negative number");

// can store the result of the condition inside variable
let gender = "male";
let result = gender === "male" ? "gender is male" : "gender is female";

console.log(result); // gender is male

// if there are more one condition
let age = 20;

age >= 20
    ? console.log(20)
    : age > 20 && age < 60
    ? console.log("20 to 60")
    : age > 60
    ? console.log("larger than 60")
    : "unknown";        // this the else "else condition"
