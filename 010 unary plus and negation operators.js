/*
    ===========================================
    == 010 unary plus and negation operators == 
    ===========================================
    + unary plus [return number if its not number]
    - unary negation [return number if its not number + negates it]
    
    Tests
    - normal number 
    - string number 
    - string negative number 
    - string text 
    - float 
    - hexadecimal number system 
    - null
    - true 
    - false
*/

console.log(+100);      // 100     --> number 
console.log(+"100");    // 100     --> number 
console.log(+"-100");   // -100    --> number
console.log(+"10.2");   // 10.2    --> number 
console.log(+0XFF);     // 255     --> number 
console.log(+null);     // 0       --> number 
console.log(+true);     // 1       --> number
console.log(+false);    // 0       --> number

console.log(-100);      // -100     --> number 
console.log(-"100");    // -100     --> number 
console.log(-"-100");   // 100     --> number
console.log(-"10.2");   // -10.2    --> number 
console.log(-0XFF);     // -255     --> number 
console.log(-null);     // -0       --> number 
console.log(-true);     // -1       --> number
console.log(-false);    // -0       --> number