/* A callback function in JavaScript is a function 
that is passed as an argument to another function. 
The calling function can then execute the callback function at a later time,
 typically when an asynchronous operation has completed. */
function set(x) {
    console.log("first", x);
    setTimeout(() => {
        console.log("Second");
    }, 3000);
}
set(6);
