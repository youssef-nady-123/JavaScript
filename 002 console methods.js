/*
    =========================
    == 002 console methods == 
    =========================
*/ 

// used to write normal message, debug info, status messages, usually like black color 
console.log('hello world');     // hello world

// used to log error message or problems, usually like red color 
console.error('error message');

// display data as a nice table in the console
console.table(['osama', 'mohamed', 'khaled']);

// style the message on the console, use the directive "%c" before the text that will be stayled
console.log('hello from %cjs file', 'color: #fa0; font-size: 22px');