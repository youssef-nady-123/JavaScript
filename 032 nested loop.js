/*
    =====================
    == 032 nested loop ==
    =====================
*/

let products = ['Mouse', 'Pad', 'Pen'];
let colors = ['Red', 'Green', 'Black'];
let models = [2022, 2023];

// nested loop practice
for (let i=0; i<products.length; i++){
    console.log('='.repeat(20));
    console.log(`= ${products[i]}`);
    console.log('='.repeat(20));

    console.log(`colors: `);
    for(let j=0; j<colors.length; j++){
        console.log(`- ${colors[j]}`);
    }

    console.log(`models: `);
    for(let j=0; j<models.length; j++){
        console.log(`- ${models[j]}`);
    }
}