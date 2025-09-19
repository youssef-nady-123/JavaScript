/*
    ==========================================
    == 055 create object with create method ==
    ==========================================
*/

// create object using create object 
let student = Object.create({});


student.firstName = 'osama';
student.lastName = 'mohamed';

console.log(student);       // Object { firstName: "osama", lastName: "mohamed" }