/*
    ===============================
    == 058 DOM, check attributes ==
    ===============================
    element.attributes
    element.hasAttribute
    element.hasAttributes
    element.removeAttribute

    <p id="p">hello world</p>
*/

let p = document.querySelector('#p');
console.log(p);


// check if the element has attributes or not 
console.log(p.hasAttribute('title'));       // false
console.log(p.hasAttribute('id'));         // true


// set attribute to element
p.setAttribute('title', 'print hello world');


// show all attributes of the element
console.log(p.attributes);      // NamedNodeMap {0: id, 1: title, id: id, title: title, length: 2}


// delete specific attribute
p.removeAttribute('title');

console.log(p.attributes);      // NamedNodeMap {0: id, id: id, length: 1}
