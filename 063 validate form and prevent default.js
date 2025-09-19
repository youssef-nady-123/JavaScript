/* 
    ===========================================
    == 063 validate from and prevent default ==
    ===========================================
*/

let userInput = document.querySelector('[name="username"]');
let ageInput = document.querySelector('[name="age"]');

document.forms[0].onsubmit = function (event) {
    let userValid = false;
    let ageValid = false;

    // validate username (not empty, max 10 chars)
    if (userInput.value !== "" && userInput.value.length <= 10) {
        userValid = true;
    }

    // validate age (not empty)
    if (ageInput.value !== "") {
        ageValid = true;
    }

    // stop form if any validation fails
    if (!userValid || !ageValid) {
        event.preventDefault();
        alert("Please check your inputs!");
    }
};

// prevent default link action
document.links[0].onclick = function (event) {
    console.log(event);
    event.preventDefault();
};
