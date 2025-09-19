/*
    ================================
    == 043 return nested function ==
    ================================
*/

function sayMessage(fName, lName){
    let message = `Hello`;

    // nested function 
    function concatMessage(){
        message = `${message} ${fName} ${lName}`;
    }

    concatMessage();
    return message;
}

// function call 
console.log(sayMessage('Osama', 'Mohamed'));    // Hello Osama Mohamed