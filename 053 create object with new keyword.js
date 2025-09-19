/*
    ========================================
    == 053 create object with new keyword ==
    ========================================
*/

let user = {};

console.log(user);      // Object {  }


// you can add properties and methods using dot, bracket notation
user.age = 25;
user['firstName'] = "osama",
user.lastName = 'mohamed';



console.log(user);      // Object { age: 25, firstName: "osama", lastName: "mohamed" }


// if the property exists will update the value
user.firstName = 'ahmed';
console.log(user.firstName);        // ahmed


// add method on the objects
user.say_helloo = function(){
    return 'hello world';
};

console.log(user.say_helloo());     // hello world

/*
    =====================================
    == create object using new keyword == 
    =====================================
*/ 

let student = new Object();
student.id = '12100';
student.firstName = 'ahmed';
student.lastName = 'mohamed';
student['gpa']  = 2.5;

console.log(student);       // Object { id: "12100", firstName: "ahmed", lastName: "mohamed", gpa: 2.5 }


// also you can add method as you like 
student.fullName = function(){
    return `${this.firstName} ${this.lastName}`;
}

console.log(student.fullName());        // ahmed mohamed