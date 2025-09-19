/*
    ============================================
    == 060 product with title and description ==
    ============================================
    this practice used to create product with heading and paragraph
*/

// Create a <div> element and assign it to 'myMainElement'
myMainElement = document.createElement('div');

// Create a <h1> element for the product title
myHeading = document.createElement('h1');

// Create a <p> element for the product description
myParagraph = document.createElement('p');

// Create a text node for the heading
let myHeadingText = document.createTextNode('Product Title');

// Create a text node for the paragraph
let myParagraphText = document.createTextNode('Product Description');

// Append the text node to the <h1> element
myHeading.appendChild(myHeadingText);

// Append the text node to the <p> element
myParagraph.appendChild(myParagraphText);

// Append the <h1> and <p> to the main <div>
myMainElement.appendChild(myHeading);
myMainElement.appendChild(myParagraph);

// Set class name for styling (optional)
myMainElement.className = 'product';

// Set background color of the <div>
myMainElement.style.backgroundColor = '#567';

// Set the width to fit content
myMainElement.style.width = 'fit-content';

// Add padding inside the <div>
myMainElement.style.padding = '10px 20px';

// Add rounded corners to the <div>
myMainElement.style.borderRadius = '10px';

// Finally, append the styled <div> to the body of the HTML document
document.body.appendChild(myMainElement);
