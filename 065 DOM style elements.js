/* 
    ===================================
    == 065 DOM [CSS], style elements ==
    ===================================
    - style 
    - cssText
    - removeProperty(property name)
    - setProperty(property name)

        <div id="my-div">div with many classes</div>
*/

let element = document.getElementById('my-div');

// the normal styling of element
element.style.backgroundColor = '#567';


// write the CSS code beside each other 
element.style.cssText = "font-size: 25px; font-weight: bold; color: #567";


// remove property: used to remove property from the CSS codes
element.style.removeProperty('color');
element.style.removeProperty('font-weight');

// set property: used to add CSS codes style
element.style.setProperty('font-weight', 'bold');


// edit the External CSS files: edit the first file 
document.styleSheets[0].rules[0].style.removePropertyProperty('line-height');