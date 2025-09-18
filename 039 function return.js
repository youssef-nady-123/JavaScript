/*
    =========================
    == 039 function return ==
    =========================
    - any code written after "return" will be discarded
*/

function say_hello(){
    return "hello world";
}

console.log(say_hello());           // hello world
document.write(say_hello());        // hello world

function full_info(name, age){
    return `name is: ${name}, and age is: ${age}`;
}

console.log(full_info());        // name is: undefined, and age is: undefined

console.log(full_info('osama', 25));        // name is: osama, and age is: 25

// can store the function result on variable
let result = full_info('ahmed', 22);
console.log(result);        // name is: ahmed, and age is: 22

// create a function that sum two numbers
function calc(num1, num2){
    let result = num1 + num2;
    return result;
}

// function call 
console.log(calc(10, 20));      // 30
