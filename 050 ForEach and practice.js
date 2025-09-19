/*
    ==============================
    == 050 ForEach and practice ==
    ==============================
    forEach
        method executes a provided function once for each array element
    syntax
        forEach(callBackFunction(), thisArg)
    the callBackFunction has 3 arguments 
    1- element: the current element being processed in the array
    2- the index of the current element being processed in teh array 
    3- the current array 
*/

// get the index + value 
let colors = ["red", "green", "blue"];

colors.forEach((color, index) => {
    console.log(`Color at index ${index} is ${color}`);
});



// sum numbers using forEach
let numbers = [10, 20, 30, 40];
let sum = 0;

numbers.forEach((num) => {
    sum += num;
});

console.log("Total sum:", sum);     // Total sum: 100


// work with objects
let users = [
    { name: "Ali", age: 20 },
    { name: "Sara", age: 25 },
    { name: "Omar", age: 30 }
];

users.forEach((user) => {
    console.log(`${user.name} is ${user.age} years old`);
});
