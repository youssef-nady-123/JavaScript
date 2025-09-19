/*
    ================================
    == 074 window location object ==
    ================================
    - location object
        href Get/Set [URL | Hash | File | Mail]
        host
        hash: used to set the anchor part, do not include the hash sign (#).
        protocol
        reload()
        replace()
        assign()
*/

console.log(location);      // will display the location object methods and properties

// print the href: hyperText reference
console.log(location.href);     // http://127.0.0.1:5500/index.html

// you can change the href
// location.href = 'https://www.google.com/';
console.log(location.href);

// print the host -> ip address + port number 
console.log(location.host);     // 127.0.0.1:5500

// print the hostname
console.log(location.hostname);     // 127.0.0.1

// print the port number
console.log(location.port);     // 5500

// print the protocol
console.log(location.protocol);     // http:

/*
    get the hash section
        <a href="/js/js_strings.asp#part2">JavaScript Strings</a> 
        then the hash is ->  location.hash = "part5"; 
*/
console.log(location.hash);


// reload the page 
location.reload()

/*
    replace(): used to replace the current page 
    the current page will be removed from the history 
*/ 
// location.replace('https://www.google.com/');


/*
    assign(): used to replace the current page 
    the current page will be saved on the history 
*/ 
location.assign('https://www.google.com/');