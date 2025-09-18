/*
    =======================
    == 029 joining array ==
    =======================
*/

let admins = ['ahmed', 'osama'];
let names = ['khaled', 'ali'];


/*
    concat():
        - used to join arrays
        - return a new array 
*/
let allNames = admins.concat(names);
console.log(allNames);      // ['ahmed', 'osama', 'khaled', 'ali']

/*
    join()
        - method is used to join all the elements of an array into a single string.
        - method does not modify the original array — it simply returns a new string made by joining the elements.
*/

let all = admins.join(' - ');
console.log(all);                       // ahmed - osama
console.log(admins.join(' @ '));        // ahmed @ osama
console.log(admins.join(', ').toUpperCase());        // AHMED, OSAMA
console.log(typeof all);                // string


// split(): used to convert the string into array
let x = 'osama elzero';
console.log(x.split(' '));      // ['osama', 'elzero']