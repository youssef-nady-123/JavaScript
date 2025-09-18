/*
    ==================================
    == 040 function rest parameters ==
    ==================================
    - rest parameters
        - only one allowed 
        - must be last element
*/

function calc(num1, num2){
    return num1 + num2;
}

console.log(calc(10, 20));      // 30

function sum(...numbers){
    let result = 0;
    for(let i=0; i<numbers.length; i++){
        result += numbers[i];
    }
    return result;
}

console.log(sum(1,2,3,4,5));        // 15