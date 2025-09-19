/*
    =====================
    == 068 DOM cloning ==
    =====================
    - cloneNode(Deep)
    -- Deep can be True or False
        -> if true will take all attributes and elements 
        -> if false will take all attributes, but does not take elements inside the element

    <p id="my-p" class="my-p">this is <span>p</span></p>
    <div>div</div>
    */

// want to copy the <p> inside the <div>
let myP = document.querySelector('p').cloneNode(true);
let myDiv = document.querySelector('div');


// change the id of the clone element
myP.id = `${myP.id}-clone`;

// move the clone element
myDiv.appendChild(myP);