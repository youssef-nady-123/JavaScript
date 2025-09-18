/*
    ============================
    == 004 intro to variables == 
    ============================
    variable: is a container that hold data inside it, allow you to use it more
    you must declare first, then use it
    if used the variable before declare it, will return "undefined"
*/

// declare a variable 
let name;

// initialize the variable 
name = 'osama';
console.log(name);      // osama

// when create HTML element, and give it ID, immediately you create a gloabl variable when create the elemnt
// <div id="hello">hello world</div>
console.log(hello.innerHTML);     // hello world

hello.innerHTML = 'change the html content';
console.log(hello.innerHTML);     // change the html content