/*
    =========================
    == 031 for loop part 2 ==
    =========================
*/


/*
    from the following array "data", if exist string data type, insert
    this string data into array "onlyNames"
*/
let data = [1, 2, "ahmed", 3, 'osama', 'mohamed', 'khaked'];
let onlyNames = [];

for(let i=0; i<data.length; i++){
    if(typeof data[i] === "string"){
        onlyNames.push(data[i]);
    }
}

console.log(onlyNames);     // ['ahmed', 'osama', 'mohamed', 'khaked']