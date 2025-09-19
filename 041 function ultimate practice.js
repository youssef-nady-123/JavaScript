/*
    ====================================
    == 041 function ultimate practice ==
    ====================================
    - function advanced practice
        - parameters
        - default
        - rest 
        - loop
        - condition
*/

function showInfo(user='unknown', age='unknown', rate=0, show='yes', ...skills){
    document.write(`<div>`);
    document.write(`<h1> wellcome, ${user} </h1>`);
    document.write(`<p>age, ${age}</p>`);
    document.write(`<p>hour rate, $${rate}</p>`);
    
    if(show === "yes"){
        
        if(skills.length > 0){
            document.write(`<h3>all skills are: </h3>`);
            for(let x=0; x<skills.length; x++){
                document.write(`<p>- ${skills[x]}</p>`);
            }
        }else{
            document.write(`<p> no skills are found </p>`);
        }
        
    }else{
        document.write(`<p> skills are hidden </p>`);
    }
    
    document.write(`</div>`);
}

// function call 
showInfo('osama', 25, 20, 'yes', 'html', 'css', 'js', 'php', 'mysql');

document.write('<hr>');

// the skills will not be shown
showInfo('ahmed', 23, 15, 'no', 'html', 'css', 'bootstrap', 'js', 'vue js', 'node Js');