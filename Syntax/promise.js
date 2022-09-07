/* "I Promise a Result!"
"Producing code" is code that can take some time
"Consuming code" is code that must wait for the result
A Promise is a JavaScript object that links producing code and consuming code

A JavaScript Promise object can be:
Pending
Fulfilled
Rejected

The Promise object supports two properties: state and result.
While a Promise object is "pending" (working), the result is undefined.
When a Promise object is "fulfilled", the result is a value.
When a Promise object is "rejected", the result is an error object.

note-:
Promise.then() takes two arguments, a callback for success and another for failure.
Both are optional, so you can add a callback for success or failure only.
*/
const myPromise = new Promise((resolve, reject) => {
    let x = 6
    if (x == 7) {
        resolve('Promise is resolved successfully.');
    } else {
        reject('Promise is rejected');
    }
})
    .then((message) => {
        console.log(message)
    })
    .catch((error) => {
        console.log(error)
    })