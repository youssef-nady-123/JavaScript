/*
    ====================================
    == 077 scroll, focus, print, stop ==
    ====================================
    - stop()
    - print()
    - focus()
    - scrollTo(x, y)
    - scroll(x, y)
    - scrollBy(x, y)
*/

// stop the loading of resources
window.stop();

// prunt the current page
// window.print();

// focus on specific window 
// let newWindow = window.open('https://www.google.com', "", 'width=500,height=500');

// open the target on new window then run 
// newWindow.focus();


document.body.style.height = '1000px';
window.scroll(0, 500);