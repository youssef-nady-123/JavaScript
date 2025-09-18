/*
    ====================
    == 035 while loop ==
    ====================
    syntax
        let i=initialization;       // initial value 
        while(condition){
            // block of code 
            // increment/decrement
        }
*/

let names = ['Osama', 'Mohamed', 'Ahmed', 'Sayed'];


let index = 0;      // this is the initialization 
while (names.length > index){
    console.log(names[index]);
    index++;        // very important, without this will make infinit loop
}