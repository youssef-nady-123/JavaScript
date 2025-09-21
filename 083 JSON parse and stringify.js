/*
    ==================================
    == 083 JSON parse and stringify ==
    ==================================
    JSON.parse(): convert the text data to JS object 
    JSON.stringify(): convert the JS object to JSON 
*/

const myJsonObjectFromServer = '{"Username": "Osama", "age": 39}';

// get the type of the JSON object
console.log(typeof myJsonObjectFromServer);     // string
console.log(myJsonObjectFromServer);            // {"Username": "Osama", "age": 39}

// JSON.parse(): used to converts the JSON string into an object 
const myJsObject = JSON.parse(myJsonObjectFromServer);

console.log(myJsObject);            // {Username: 'Osama', age: 39}
console.log(typeof myJsObject);     // object


// change the data inside the Object 
myJsObject['Username'] = "Mohamed";
myJsObject['Age'] = 40;

// convert the JS object to JSON string 
const newJsonObject = JSON.stringify(myJsObject);

console.log(typeof newJsonObject);      // string
console.log(newJsonObject);     // {"Username":"Mohamed","age":39,"Age":40}