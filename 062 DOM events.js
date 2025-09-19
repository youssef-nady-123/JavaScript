/*
    =====================
    == 062 DOM, Events ==
    =====================
    - use events on HTML
    - use events on 
    
    <button id="btn">Button</button>
*/

let btn = document.getElementById('btn');

// onclick       → fires when the user clicks on an element
btn.onclick = function(){
    document.body.style.backgroundColor = '#567';
}

// onmouseover: when the mouse over the button will style the button
btn.onmouseover = function () {
    this.style.color = 'white';
    this.style.backgroundColor = '#fa0';
}

// oncontextmenu → fires when the user right-clicks (context menu)
// onmouseleave  → fires when the mouse pointer leaves the element
// onload        → fires when the page (or an element like image/script) has fully loaded
// onscroll      → fires when the user scrolls the page or an element
// onresize      → fires when the browser window size changes
// onfocus       → fires when an element (like input) gains focus
// onblur        → fires when an element (like input) loses focus
// onsubmit      → fires when a form is submitted
