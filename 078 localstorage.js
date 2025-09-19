/*
    ======================
    == 078 localstorage ==
    ======================
    - setItem
    - getItem
    - removeItem
    - clear
    - key

    how to get the local storage 
    - application -> local storage -> select the page that you are work on 
*/

// save new item 
window.localStorage.setItem('color', 'red');

// another way to save on the local storage 
window.localStorage.fontWeight = 'bold';

// another way to add new elements on the local storage 
window.localStorage['fontSize'] = '20px';


// get items from the local storage 
console.log(window.localStorage.getItem('color'));       // red

// another way to get values from the local storage 
console.log(window.localStorage.fontSize);           // 20px

// another way to get values from the local storage 
console.log(window.localStorage['fontWeight']);     // bold

// get the key on the local storage based on its index
console.log(window.localStorage.key(0));        // color

// remove element from the local storage 
window.localStorage.removeItem('color');

// delete all keys from the local storage
window.localStorage.clear();