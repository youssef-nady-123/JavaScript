/*
    ================================
    == 085 call stack and web API ==
    ================================
    - to understand Ajax, Fetch, promises

    call stack || stack trace
        - javascript engine uses a call stack to manage execution contexts
        - mechanisms to make the interpreter trace your calls
        - when function executed it removed from the stack 
        - after function is finished executing the interpreter continue from the last point 
        - code execution is synchronous
        - call stack detect web API methods and leave it to the browser to handle it 
    
    Web API 
        - methods available from the environment => browser 
*/

function one() {
    console.log('one');
}

function two() {
    one();
    console.log('two');
}

function three() {
    two();
    console.log('three');
}

// call the last function 
three();