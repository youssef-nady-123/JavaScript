/*
    ===================================
    == 045 higher order function map ==
    ===================================
    higher order function 
        - is a function that accepts functions as parameters and/or returns a function 

    map
        - method create a new array 
        - map return a new array 
        - populated with the results of calling a provided function on every element 
        - syntax
            map(callBackFunction(element, index, array){}, thisArg)
            element: the currennt element being processed in the array 
            index: the index of current element being processed in the array 
            array: the current array 
*/

let myNumbers = [1, 2, 3, 4];

// Question: multiply each number with itself
let newArray = [];
for(let i=0; i<myNumbers.length; i++){
    newArray.push( myNumbers[i] + myNumbers[i] );
}

console.log(newArray);      // [ 2, 4, 6, 8 ]

/*
    using anther method "map()"
    map(function(element, index, array) { ... }, )
*/
let addSelf = myNumbers.map( function(element, index, arr){
    return element + element;
}, 10);

console.log(addSelf);       // [ 2, 4, 6, 8 ]


// same solution but using arrow function 
let addSelfElement = myNumbers.map( (element)=> element + element);
console.log(addSelfElement);        // [ 2, 4, 6, 8 ]


// if you have the function 
function addition(ele){
    return ele + ele;
}

let add = myNumbers.map(addition);
console.log(add);       // [ 2, 4, 6, 8 ]

// the old array is not affected 
console.log(myNumbers);     // [ 1, 2, 3, 4 ]