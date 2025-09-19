/*
    ========================
    == 044 arrow function ==
    ========================
    - is a short hand function 
    - syntax
        let function_name = ()=> {
            // block of code;
        }
*/

// arrow function with one line statement
let x = ()=> "hello world";
console.log(x());       // hello world


// arrow function with multiple line statement 
let sum = (n1, n2)=>{
    let result = n1 + n2;
    return result;
}
console.log(sum(10, 20));       // 30

