/*
    ===============================
    == 015 string methods part 1 ==
    ===============================
*/

let text = 'hello world using javascript';

// charAt(): get the character at specific index
console.log(text.charAt(0));        // h
console.log(text.charAt(10));       // d

// get the character at specific index
console.log(text[0]);       // h
console.log(text[10]);      // d

// length: return the length of the string
console.log(text.length);       // 28

// trim(): remove white spaces from the string [left, right sides]
console.log("   hello world   ".trim());        // hello world

// toUpperCase(): return the string in capital letters 
console.log("Hello World".toUpperCase());       // HELLO WORLD

// toLowerCase(): 
console.log('Hello World'.toLowerCase());       // hello world