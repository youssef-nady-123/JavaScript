/* 
    =======================================
    == 064 class list object and methods ==
    =======================================
    DOM [class list]
        - classList
        -- length
        -- contains
        -- item(index)
        -- add
        -- remove
        -- toggle

    <div id="my-div" class="one two show test">div with many classes</div>
*/

let element = document.getElementById('my-div');

// get all class list of the element
console.log(element.classList);     // DOMTokenList(4) [ "one", "two", "show", "test" ]

// get the type of the classList element
console.log(typeof element.classList);      // object


// length: give the number of 'classes' applied to that element 
console.log(element.classList.length);      // 4

// contains(): check if the element has class name or not?
// return boolean values
console.log(element.classList.contains('first'));   // false
console.log(element.classList.contains('one'));     // true

// item(): return the class based on its index [return the value of the index]
console.log(element.classList.item('0'));      // one 

// return the second class name 
console.log(element.classList.item('1'));       // two 

// return the third class name
console.log(element.classList.item('2'));       // show 

/*
    ===============
    == add class == 
    ===============
    - add one or more classes 
*/ 
element.onclick = function() {
    // add two classes to the element 
    element.classList.add('add-one', 'add-two');
    console.log(element.classList);
};


/*
    ==================
    == remove class == 
    ==================
    - delete one or more classes 
    - if does not exists will not change anything
*/ 
element.onmouseover = function() {
    element.classList.remove('add-one');
    console.log(element.classList);
}

/*
    ============
    == toggle == 
    ============
    - If the element already has the class add-one, it will remove it.
    - If the element does not have the class, it will add it
*/
element.onmousemove = function(){
    element.classList.toggle('add-one');
}