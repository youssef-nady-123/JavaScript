/*
    =======================
    == 034 loop practice ==
    =======================
*/

let products = ['keyboard', 'mouse', 'pen', 'pad', 'iphone', 'laptop'];
let colors = ['red', 'green', 'blue'];
let showCount = 3;

document.write(`<h1> Show ${showCount} Products</h1>`);
for(let i=0; i<showCount; i++){
    document.write(`<div>`);
    document.write(`<h2>[${i + 1}] ${products[i].toUpperCase()} </h2>`);
    for(let j=0; j<colors.length; j++){
        document.write(`<h3>- ${colors[j]}</h3>`);
    }
    document.write(`</div>`);
}
