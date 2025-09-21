/*
    ===============================
    == 079 localstorage practice ==
    ===============================

    <h1>change the background color: </h1>
    <button id="red">red</button>
    <button id="green">greed</button>
    <button id="blue">blue</button>
    <button id="gold">gold</button>
*/

let gold = document.getElementById('gold');
let red = document.getElementById('red');
let green = document.getElementById('green');
let blue = document.getElementById('blue');

// Apply saved background color when page loads
window.onload = function () {
    let savedColor = localStorage.getItem('backgroundColor');
    if (savedColor) {
        document.body.style.backgroundColor = savedColor;
    }
}

gold.onclick = function () {
    document.body.style.backgroundColor = 'gold';
    localStorage.setItem('backgroundColor', 'gold');
}

red.onclick = function () {
    document.body.style.backgroundColor = 'red';
    localStorage.setItem('backgroundColor', 'red');
}

green.onclick = function () {
    document.body.style.backgroundColor = 'green';
    localStorage.setItem('backgroundColor', 'green');
}

blue.onclick = function () {
    document.body.style.backgroundColor = 'blue';
    localStorage.setItem('backgroundColor', 'blue');
}