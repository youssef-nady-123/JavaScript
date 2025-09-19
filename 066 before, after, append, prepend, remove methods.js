/* 
    ================================================
    == 066 before, after, append, prepend, remove ==
    ================================================

    <div id="my-div">this is div <span>this is span</span></div>
*/

let element = document.querySelector('#my-div');
element.style.cssText = 'color: white; background-color: #567; width: fit-content; padding: 10px; margin: 10px 0 ; ';

let createdP = document.createElement('p');
// write text inside the paragraph
createdP.appendChild(document.createTextNode('this is paragraph'));

// write text before the div
element.before('hello using before');

// write text after the div
element.after('hello using after');

// also can write HTML Tag
element.after(createdP);


// append(): used to append the text, HTML tag inside the element
// at the end of the element 
element.append(' appended element');

// prepend(): used to append the text, HTML tag inside the element
// at the first of the element
element.prepend('add at the first, ');


// remove(): used to delete the element from the DOM tree 
element.remove();