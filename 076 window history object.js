/*
    ===============================
    == 076 window history object ==
    ===============================
    - method loads a URL (page) from the history list.
    - method only works if the page exist in the history list.
    - history API
        properties
            length
        methods
            back()
            forward()
            go(delta) => position in history
    
    history.go(-1) is the same as history.back().
    history.go(1) is the same as history.forward().
*/

// show the history object details
console.log(history);

// get the history length, the current page is counted
console.log(history.length);

// go page back
history.back();

// go page forward 
history.forward();

// make reload to the page
history.go(0);