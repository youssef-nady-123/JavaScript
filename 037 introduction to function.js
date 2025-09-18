/*
    ==================================
    == 037 introduction to function ==
    ==================================
    - function is a block of code that do a specific task
    - based on "DRY" -> don't repeat yourself
    - there are two types of functions
        1- user-defined functions
        2- built-in functions
    - syntax
        function func_name(){
            block of code 
        }
*/

console.log(typeof console.log);        // function

// create a function 
function hello(){
    console.log(`hello world`);
}

// function call
hello();        // hello world

/*
    --------------------------
    -- parameter / argument --
    --------------------------
    function say_hello(name){
    console.log(`Hello ${name}`);
    }
    
    function: define a function 
    say_hello: function name
    (name): name called parameter 
    console.log(`Hello ${name}`);: this called block of code
*/

function say_hello(name){
    console.log(`Hello ${name}`);
}

/*
    say_hello('ahmed');
    say_hello: function name 
    ahmed: called argument
*/
say_hello('ahmed');     // Hello ahmed