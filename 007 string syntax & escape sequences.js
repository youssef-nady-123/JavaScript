/*
    ==========================================
    == 007 string syntax & escape sequences ==
    ==========================================
    - can write string in single qoute 
    - can write string in double qoutes [best practice]

    escape sequences
    - \n: escape new line 
    - \t: escape tabe 
    = \\: escape back slash 
*/

console.log('hello world');
console.log("hello world");

console.log("hello \"world\"");     // hello "world"
console.log('hello \'world\'')      // hello 'world
console.log('hello \\world\\');     // hello \world\

// line continue, and back slash called escape charachter
console.log('hello \
world \
on \
mult \
lines');        // hello world on mult lines
