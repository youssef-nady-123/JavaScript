/*
    ================
    == 012 Number ==
    ================
    - double precision 
    - syntactic sugar "_"
    - e
    - **
    - with decimal 
    - number + bigint 
    - number min value 
    - number max value 
*/

console.log(1000000);       // 1000000

// the JS engine will ignore the underscore symbol 
console.log(1_000_000);     // 1000000

// write "e" then number of zeros that will be used 
console.log(1e6);       // 1000000

// using the exponent
console.log(10**6);     // 1000000

// convert the string number to integer 
console.log(Number("10"));      // 10
console.log(typeof Number);     // function 

// the max number value can be used on Javascript 
console.log(Number.MAX_SAFE_INTEGER);       // 9007199254740991

// the max value can reach on the language 
console.log(Number.MAX_VALUE);           // 1.7976931348623157e+308
console.log(Number.MAX_VALUE + 10);      // 1.7976931348623157e+308