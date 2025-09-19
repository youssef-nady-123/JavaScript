/*
    ======================
    == 054 this keyword ==
    ======================
    - this keyword refers to the object that is currently executing the function.
    - this refers to the owner of the function 
    
    -------------
    -- summary -- 
    -------------
        this = depends on how the function is called.
        Arrow functions → inherit this from outer scope.
        Methods → this = the object before the dot.
        Constructors → this = new object.
        call/apply/bind → manually set this.
*/

// in the global scope refers to the window object
console.log(this);      // window


// this refers to the object that owns the method
const user = {
    name: "Youssef",
    greet: function () {
        console.log(this.name);
    }
};
user.greet();       // Youssef


