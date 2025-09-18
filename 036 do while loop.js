/*
    =======================
    == 036 do while loop ==
    =======================
    - make the loop at least one time, then check the condition 
    syntax
        do{
            // block of code 
        } while (condition);
*/

// at least print on the console "hello world" one time 
do{
    console.log(`hello world`);
} while (false);

// if the condition is true, will loop 
let products = ['phone', 'computer', 'tablet', 'pc', 'server'];

let i=0; 
do{
    console.log(products[i]);
    i++;
} while (products.length > i);