/*
    ============================
    == 042 anonymous function ==
    ============================
    - must declare the function then call it
    - can not call the function, then create it
*/

// create anonymous function 
let sum = function(num1, num2){
    return num1 + num2;
}

// anonymous function call
console.log(sum(10, 20));       // 30

/*  
    setTimeout()
    - used to run function once after specific time 
    - syntax
        setTimeout(()=> {}, time in ms)
*/

// the function will run after 2 seconds
setTimeout(()=>{
    console.log('hello world');
}, 2000);