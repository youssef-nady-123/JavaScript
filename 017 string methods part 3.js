/*
    ===============================
    == 017 string methods part 3 ==
    ===============================
*/
let text = 'hello world using javascript';

// substring(start, end): used to cut the string, take sub-string from string
console.log(text.substring(0, 5));      // hello

// if the end is not determined, will complete to the end 
console.log(text.substring(6));         // world using javascript


// substr(start, num_of_characters): used to cut the string, take sub-string from string
console.log(text.substr(0, 5));     // hello

// includes(value, start): check if the string includes the specific substring or not, return boolean value 
console.log(text.includes('python'));       // false
console.log(text.includes('world'));        // true 

// startsWith(value, start): check if the string is starts with specific string or not, return boolean value 
console.log(text.startsWith('hello world'));        // true 
console.log(text.startsWith('x'));      // false

// endsWith(value, start): check if the string is ends with specific string or not, return boolean value 
console.log(text.endsWith('javascript'));     // true
console.log(text.endsWith('x'));              // false