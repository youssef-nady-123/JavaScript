/*
    ===========================
    == 038 function advanced ==
    ===========================
*/

function full_info(name = 'unknown', age = 20) {
    console.log(`the name is: ${name} and age is ${age}`);
}

full_info('osama', 'ahmed');        // the name is: osama and age is ahmed


// if you did not write any argument will use the default values
full_info();        // the name is: unknown and age is 20


// generate randon year
function generateYears(start, end) {
    for (let i = start; i <= end; i++) {
        console.log(`${i}`);
    }
}

// function call 
generateYears(1982, 2021);      // will print all 