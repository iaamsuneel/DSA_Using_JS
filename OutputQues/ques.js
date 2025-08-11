// Example 1:
/* console.log("begins");
setTimeout(() => {
  console.log("setTimeout 1");
  Promise.resolve().then(() => {
    // micro queue
    console.log("promise 1");
  });
}, 0); // macroqueue
new Promise(function (resolve, reject) {
  console.log("promise 2");
  setTimeout(function () {
    // macroqueue
    console.log("setTimeout 2");
    resolve("resolve 1");
  }, 0); // micro queue
}).then((res) => {
  console.log("dot then 1");
  setTimeout(() => {
    // macro task queue
    console.log(res);
  }, 0);
}); */
// begins
// promise 2
// setTimeout 1
// promise 1
// setTimeout 2
// dot then 1
// resolve 1

// Example 2 :
console.log("start");
setTimeout(() => { // macrotask
  console.log("timeout");
}, 0);
Promise.resolve().then((ress) => {
  console.log("Promise");
}) 
// micro task queue
 (async() => { // mirco task queue ( high Priority task)
  console.log("async start");
  await null;
  console.log("async end");
})()
queueMicrotask(() => {
  console.log("micrptask");
});
console.log('end')

// start
// end
// Promise
// async start
// async end
// micrptask
// timeout

