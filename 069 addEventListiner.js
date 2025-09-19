/*
    ==========================
    == 069 addEventListener ==
    ==========================
    - used to add multiple events to the element

    <p id="my-p">this is parahraph</p>
*/

let p = document.getElementById('my-p');

p.addEventListener('click', function() {
    console.log('message from click');
});

p.addEventListener('mouseover', function() {
    console.log('message from mouse over');
});


p.addEventListener('mouseleave', function() {
    console.log('message from mouse leave');
});
