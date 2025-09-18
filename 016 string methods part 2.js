/*
    ===============================
    == 016 string methods part 2 ==
    ===============================
    - indexOf(): search about sub-string on the string from left side
    - lastIndexOf(): search about sub-string on the string from the right side
*/
let text = 'hello world from elzero web school';

// indexOf(): search about sub-string on the string 
console.log(text.indexOf('world'));     // 6
console.log(text.indexOf('web'));       // 24

// slice(): cut sub string from string 
console.log(text.slice(0, 5));      // hello

// if the end is not determined, end will be last character
console.log(text.slice(6));     // world from elzero web school

// repeat(): repeat the string 
console.log("hello world ".repeat(2));    // hello world hello world 
console.log("*".repeat(20));        // ********************

// split(): split the string into an array
console.log(text.split());      // ['hello world from elzero web school']
console.log(text.split(' '));       //  ['hello', 'world', 'from', 'elzero', 'web', 'school']