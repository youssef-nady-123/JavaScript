/*
    =====================================
    == 072 setTimeout and clearTimeout ==
    =====================================
    - setTimeout(function, timeout, additional params)
    - clearTimeout(identifier)

    <button id="btn">stop</button>
*/

// this function will run after 3 seconds
setTimeout(function () {
    console.log('hello world');
}, 3000);


function say_message(user) {
    console.log(`iam message for ${user}`);
}

// using the settimeout() with the additoinal params
setTimeout(say_message, 10000, 'osama');


// assign setTimeout() to a variable
let counter = setTimeout(function () {
    console.log('hello world');
}, 5000);

let btn = document.getElementById('btn');

btn.onclick = function () {
    // stop the setTimeout() functiomn
    clearTimeout(counter);
}