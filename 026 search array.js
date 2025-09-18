/*
    =========================
    == 026 searching array ==
    =========================
*/

let names = ['ahmed', 'mohamed', 'ahmed', 'khaled', 'ahmed'];

/*
    indexOf(searchElement, fromIndex)
    - used to search about element on the array from the "first" element on array 
    - if the searchElement is not found will return -1
        - searchElement: the item you want to search for 
        - fromIndex: the index to start searching from, default is zero
*/
console.log(names.indexOf('ahmed'));        // 0
console.log(names.indexOf('ahmed', 1))      // 2


/*
    lastIndexOf(searchElement, fromIndex)
        - used to search about element on the array from the "last" element on array 
        - if the searchElement is not found will return -1
        - searchElement: the item you want to search for 
        - fromIndex: the index to start searching from, default is zero
*/
console.log(names.lastIndexOf('ahmed'));          // 4
console.log(names.lastIndexOf('ahmed', 1));       // 0
console.log(names.lastIndexOf('ahmed', -1));      // 4
console.log(names.lastIndexOf('mona'));           // -1


/*
includes(valueToFind, fromIndex)
- used to check if an array contains a specific element, it return boolean values
- valueToFind: the item you want to search for 
- fromIndex: the index to start searching from, default is zero
*/
console.log(names.includes('ahmed'));        // true
console.log(names.includes('osama'));        // false 