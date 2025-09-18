/*
    =======================
    == 028 slicing array ==
    =======================
*/

let admins = ['osama', 'mohamed', 'ahmed', 'ali', 'sayed'];

/*
    slice(start, end):
        - used to extract a portion of an array into a new array, without modifying the original array
        - end is not included
        - start: (optional) The index to start slicing (inclusive).
        - end: (optional) The index to end slicing (exclusive). If omitted, it slices till the end of the array.
        - the result will create new array element 
*/
console.log(admins.slice(1, 3));        // ['mohamed', 'ahmed']
console.log(admins.slice(2));           // ['ahmed', 'ali', 'sayed']

/*
    splice(start, deletecCount, theItemToAdd):
        - used to add, remove, or replace elements in an array 
        - it modifies the original array 
        - deletecCount: number of elements to remove
        - theItemToAdd: the items to add on the array 
*/ 

// add elements on array 
admins.splice(0, 0, 'mona');
console.log(admins);       // ['mona', 'osama', 'mohamed', 'ahmed', 'ali', 'sayed']

// remove elements 
admins.splice(0, 3);   
console.log(admins);        // ['ahmed', 'ali', 'sayed']