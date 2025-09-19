/*
    =========================================================
    == 057 DOM, Get and Set element content and attributes ==
    =========================================================
*/

// <div class="js"> JavaScript <span>Div</span> &lt;Span&gt;</div>
// <a href="https://www.google.com" class="link">google</a>

let myElement = document.querySelector('.js');


/*
    - Returns or sets the HTML markup contained inside an element.
    - It parses HTML tags and renders them as elements in the DOM.
    - Downside: innerHTML can expose you to XSS (cross-site scripting) vulnerabilities if you insert untrusted user input.
    - Use innerHTML only when you need to insert real HTML.
*/
console.log(myElement.innerHTML);       //  JavaScript <span>Div</span> &lt;Span&gt;


/*
    - Returns or sets the plain text content of an element.
    - It does not parse HTML tags, but treats them as text.
    - Use textContent when you want plain text.
*/
console.log(myElement.textContent);     // JavaScript Div <Span>


// Replaces the text inside the element.
myElement.textContent = 'Text From Main JS File';
console.log(myElement);


// This replaces everything inside the element with the string "Text From Main JS File"
myElement.innerHTML = "Text From Main JS File";
console.log(myElement);


let myLink = document.querySelector('.link');
console.log(myLink.getAttribute('class'));      // link
console.log(myLink.getAttribute('href'));       // https://www.google.com


// change attributes, or set attributes if not exists
myLink.setAttribute('href', "https://youtube.com");

// set attributes, if not exists 
myLink.setAttribute('title', 'go to youtube');