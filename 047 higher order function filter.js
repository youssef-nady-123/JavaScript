/*
    ======================================
    == 047 higher order function filter ==
    ======================================
    - method creates a new array 
    - with all elements that pass the test implemented by the provided function 

    syntax:
        filter(callBackFunction(element, index, array){}, thisArg)
        - element: the current element being processed in the array 
        - index: the index of the current element being processed in the array 
        - array: the current array 
*/


// get even number only
let numbers = [11, 20, 2, 5, 17, 10];

// test map VS filter
let addMap = numbers.map(function (element) {
    return element + element;
});
console.log(addMap); // [ 22, 40, 4, 10, 34, 20 ]

/*
    filter()
        - used to create a new array with all elements that pass a test (provided as a callback function).
        - returns a new array containing only the elements that pass a certain condition (defined in a callback function).
        - It does not change the original array.
*/

// get friends with name starts with A
let friends = ["Ahmed", "Sameh", "Sayed", "Asmaa", "Amged", "Mona"];


/*
    if the element pass through the test, will return the element, else the element will be discarded 
*/ 
let filterFriends = friends.filter(function(element){
    return element.startsWith('A');
});
console.log(filterFriends);     // [ "Ahmed", "Asmaa", "Amged" ]

const n = [1, 2, 3, 4, 5, 6];
const even = n.filter((num) => num % 2 === 0);
console.log(even); // [2, 4, 6]

const nums = [5, 12, 8, 130, 44];
const filtered = nums.filter((n) => n > 10);
console.log(filtered); // [12, 130, 44]

const mixed = [0, 1, false, 2, "", 3, null];
const clean = mixed.filter(Boolean);
console.log(clean); // [1, 2, 3]

const products = [
    { name: "Laptop", available: true },
    { name: "Phone", available: false },
];

const availableProducts = products.filter((p) => p.available);
console.log(availableProducts); // [{ name: "Laptop", available: true }]


const letters = ['a', 'b', 'c', 'd'];
const evenIndex = letters.filter((_, index) => index % 2 === 0);
console.log(evenIndex); // ['a', 'c']