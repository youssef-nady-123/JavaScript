/*
    ===============================================
    == 040 higher order function reduce practice ==
    ===============================================
    reduce
        method executes a reducer function on each element of the array 
        resulting in a single output value 
    syntax  
        - array.reduce(callbackFunction, initialValue)
*/

// find the biggest Word 
const words = ['bla', 'propaganda', 'other', 'aaa', 'battery', 'test', 'elzero web school'];

let biggest = words.reduce((accumulator, current) => accumulator.length < current.length ? current : accumulator);

console.log(biggest);       // elzero web school


// remove charachters and join the letters
const charachters = [ '@','E', '@', 'L', '@', 'Z', '@', 'E', 'R', 'O'];

let finalString = charachters.filter(element => element != '@').reduce((accumulator, current)=> accumulator + current);
console.log(finalString);       // ELZERO


// another solution 
let final = charachters.filter(element => element != '@').reduce((accumulator, current)=> accumulator + current);
console.log(final);     // ELZERO
