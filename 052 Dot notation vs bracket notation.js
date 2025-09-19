/*
    ==========================================
    == 052 Dot notation vs bracket notation ==
    ==========================================
*/

const user = {
    firstName: "osama",
    lastName: "mohamed",
    age: 25,
    1: true,
    fullInfo: function(){
        return `${this.firstName} ${this.lastName
        }, and age is: ${this.age}`
    }
};

// you can access the property of the object using dot notation
console.log(user.firstName);     // osama

// we use brack notation when the key is number 
console.log(user[1]);       // true

// access the methods of the property using the dot notation 
console.log(user.fullInfo());       // osama mohamed, and age is: 25