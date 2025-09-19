/*
    =============
    == 056 DOM ==
    =============
    - in the document.querySelector(), we get the first object
    - in the document.getElementsByClassName(), get array of all objects, and use indexing to get the specific object you want to access 
    - in the document.getElementsByTagName(), get array of all objects, and use indexing to get the specific object you want to access 
*/

/*  
    -----------------
    -- in the HTML -- 
    -----------------
        <h1 id="head">hello world</h1>
        <p class="paragraph">hello world</p>
        <h1 class="paragraph">hello world</h1>
        <form>
            <input name='user' type="text" value="username">
        </form>
*/


// get the element using its id -> document.getElementById()
let myIdElement = document.getElementById('head');
console.log(myIdElement);       // <h1 id="head">hello world</h1>

// get the element by its tag name -> getElementsByTagName
let myTagELement = document.getElementsByTagName('h1')[0];
console.log(myTagELement);      // <h1 id="head">hello world</h1>


// get the element using its class name 
let myClassElement = document.getElementsByClassName('paragraph')[0];
console.log(myClassElement);        // <p class="paragraph">


// using query selector, get the element by its ID using # before the ID name 
let myQuery = document.querySelector('#head');
console.log(myQuery.innerHTML);       // hello world


// using query selector, get the element by its class name using . before the class name 
let MySecondQuery = document.querySelector('.paragraph');
console.log(MySecondQuery.innerHTML);       // hello world


// using querySelectorAll(), to get all objects on array 
let queryAll = document.querySelectorAll('.paragraph');
console.log(queryAll);      // [ p.paragraph, h1.paragraph ]


// get the title of the page 
console.log(document.title);    // Document

// get the body of the page 
console.log(document.body);


// get the forms, will get HTML collection, array of forms 
console.log(document.forms);

// get the images on the page 
console.log(document.images);

// get the first form 
console.log(document.forms[0]);

// access the froms using its properties 
console.log(document.forms[0].user.value);      // username

// get the links on the page 
console.log(document.links);
console.log(document.links[0].alt);
console.log(document.links[0].href);