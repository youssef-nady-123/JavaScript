/*
    ======================================
    == 049 higher order function reduce ==
    ======================================
    reduce
        method executes a reducer function on each element of the array 
        resulting in a single output value 
    syntax  
        - array.reduce(callbackFunction, initialValue)
        callback inside reduce() take 4 arguments
        - callbackFunction(accumulator, currentValue, currentIndex, sourceArray)
        1- accumulator → stores the result after each iteration.
        2- currentValue → the element currently being processed in the array.
        3- currentIndex → the index of the current element.
        4- sourceArray → the array on which reduce() is called.
*/

// sum the values inside the list and return the result 
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);  // initialValue = 0

console.log(sum); // 15



// find the minimum
const nums = [3, 7, 2, 9, 5];

const max = nums.reduce((acc, curr) => {
    return acc > curr ? acc : curr;
}, nums[0]);

console.log(max); // 9


// sum even values only 
let myNumbers = [1, 2, 3, 4, 5, 6];
let myResult = myNumbers.reduce((acc, cur) => {
    if (cur % 2 === 0) {
        return acc + cur;
    }
    return acc;
}, 0);

console.log(myResult);      // 12