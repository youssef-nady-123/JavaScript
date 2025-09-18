/*
    ===================================
    == 025 add and remove from array ==
    ===================================
    - index start from zero 

    array methods 
    - unshift()     add element to the first 
    - push()        add element to the end 
    - shift()       remove first element from array 
    - pop()         remove last element from array 
*/

let names = ['osama', 'mohamed', 'khaled'];

// add element to the first 
names.unshift('mona');
console.log(names);     // ['mona', 'osama', 'mohamed', 'khaled']

// add element to the end 
names.push('alaa');
console.log(names);     // ['mona', 'osama', 'mohamed', 'khaled', 'alaa']

// remove first element from array 
names.shift();
console.log(names);     // ['osama', 'mohamed', 'khaled', 'alaa']

// remove last element from array 
names.pop();
console.log(names);     // ['osama', 'mohamed', 'khaled']