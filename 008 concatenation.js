/*
    =======================
    == 008 concatenation ==
    =======================
    - using [+] sign
    - using [``] back tech sign
*/

let firstName = 'osama';
let lastName = 'mohamed';

// concatenate using plus symbol 
console.log(firstName + lastName);      // osamamohamed
console.log(firstName + ' ' + lastName);        // osama mohamed

// new method for concatenation using backtick 
console.log(`name is: ${firstName} ${lastName}`);       // name is: osama mohamed

let markUp = `
    <div class='card'>
        <div class='child'>
            <h1> card title</h1>
            <p> hello world, create a card using JS </p>
        </div>
    </div>
`;

document.write(markUp);