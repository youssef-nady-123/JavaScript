/*
    =======================
    == 027 sorting array ==
    =======================
*/

let admins = ['osama', 'mohamed', 100, 200, 15, 5];

/*
    sort()
        - used to sort elements on array 
        - It sorts the array alphabetically (for strings) or numerically (for numbers) by default
*/
console.log(admins.sort());     // [100, 15, 200, 5, 'mohamed', 'osama']


/*
    reverse()
        - used to reverse the order of the elements in an array
*/
console.log(admins.reverse());      // ['osama', 'mohamed', 5, 200, 15, 100]