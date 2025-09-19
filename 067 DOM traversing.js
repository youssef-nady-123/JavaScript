/*
    =========================
    == 067 DOM Traversing ==
    =========================

    - nextSibling            // gets the next node (could be text, comment, or element)
    - previousSibling        // gets the previous node (could be text, comment, or element)
    - nextElementSibling     // gets the next sibling element only (ignores text/comments)
    - previousElementSibling // gets the previous sibling element only (ignores text/comments)
    - parentElement          // gets the parent element node of the current element

        <div id="my-div">
        <span class="one">one</span>
        <!-- comment -->
        <span class="two">two</span>
        <!-- comment -->
        <span class="three">three</span>
    </div>
*/

let spanTwo = document.querySelector('.two');

console.log(spanTwo.nextSibling);       // <!--  comment  -->
console.log(spanTwo.nextElementSibling);        // spanTwo.nextElementSibling

console.log(spanTwo.previousElementSibling);        // <span class="one">

// get the parent element
console.log(spanTwo.parentElement);     // <div id="my-div">