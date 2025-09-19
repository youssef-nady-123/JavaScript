/*
    ================================
    == 051 introduction to Object ==
    ================================
    Object
        - what is object: an object is a data structure that stores data in key–value pairs
        - the object can include properties and methods

*/

console.log(typeof window);     // object
console.log(typeof location);     // object

// testing window object 
window.console.log('hello world');      // hello world

let person = {
    name: "Youssef",
    age: 24,
    isStudent: true,
    greet: function () {
        console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
    }
};


// access the object properties
console.log(person.name);   // "Youssef"
console.log(person['age']);    // 24
console.log(person.isStudent); // true


// access the object methods
person.greet();
// "Hello, my name is Youssef and I am 24 years old."