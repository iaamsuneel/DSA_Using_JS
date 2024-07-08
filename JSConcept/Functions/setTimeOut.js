/* `setTimeout` is a built-in JavaScript
 function used to execute a piece of code or function after a specified delay.
  The delay is measured in milliseconds.  */

//setTimeout(function, delay);
// setTimeout(()=> console.log('hello),delay)
//`function`: The function to be executed after the delay.
//`delay`: The time, in milliseconds, to wait before executing the function.
function greet() {
	console.log("hello setTimeOut");
}
setTimeout(greet, 1000);
//Key Points
// `setTimeout` returns a timeout ID
// which can be used to cancel the timeout using `clearTimeout`.
// The actual delay might be longer than specified
// due to other operations in the event loop.
// Example with clearTimeout

let timeoutId = setTimeout(greet, 2000);
console.log("timeoutId--->", timeoutId);
// Cancel the timeout ,
clearTimeout(timeoutId);

// you can also pass addition arguments to the setTimeout method
function checkArguments(str, str2) {
	console.log("Greeting!", str, str2);
}
setTimeout(checkArguments, 5000, "Hello", "Suneel");
