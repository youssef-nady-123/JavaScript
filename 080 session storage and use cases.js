/*
    =======================================
    == 080 session storage and use cases ==
    =======================================
    - the data saved on the active session only 
        - setItem
        - getItem
        - removeItem
        - clear
        - key
    - while using the localStorage the data will be saved even you close the browser, but when using the session storage the data will be lost if you close the the tab of the page
*/

window.localStorage.setItem('color', '#064');
window.sessionStorage.setItem('color', '#055');

// if reload the background color will be exists, if close the tab, will loss the background color
document.body.style.backgroundColor = sessionStorage.getItem('color');