/*
    =========================
    == 033 break, continue ==
    =========================
*/

let names = ['osama', 'mohamed', 'ahmed', 'ali', 'mona'];

/*
    break: used to stop the loop 
    continue: used to discard the element of the loop 
*/ 


// print all names on array, if reach to ahmed, stop the loop.
for(let i=0; i<names.length; i++){
    if(names[i] === 'ahmed'){
        break;
    }else{
        console.log(`${names[i]}`);
    }
}

console.log(`=`.repeat(22));

// print all names on array, if reach to ahmed, discard ahmed
for(let i=0; i<names.length; i++){
    if(names[i] === 'ahmed'){
        continue;
    }else{
        console.log(`${names[i]}`);
    }
}

console.log(`=`.repeat(22));