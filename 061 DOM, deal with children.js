/*
    =================================
    == 061 DOM, deal with children ==
    =================================
    - children: will return element only 
    - childNodes: return elements, text, comments
    - firstChild: return first child [element, text, comment]
    - lastChild: return last child [element, text, comment]
    - firstElementChid: 
    - lastElementChild: 

        <div>
        hello div
        <p>hello p</p>
        <span>hello span</span>
        <!-- comment -->
        hello
    </div>
*/


let myElement = document.querySelector('div');

// get the children inside the parent
console.log(myElement.children);    // HTMLCollection(2) [p, span]

// can specify the child using its index
console.log(myElement.children[0]);     // p

// return elements, text, comments
console.log(myElement.childNodes);      // NodeList(7) [text, p, text, span, text, comment, text]

// return first element, text, comment
console.log(myElement.childNodes[0]);

// return first child
console.log(myElement.firstChild);      // text

// return the last child 
console.log(myElement.lastChild);       // text

console.log(myElement.firstElementChild);       // p

console.log(myElement.lastElementChild);      // span