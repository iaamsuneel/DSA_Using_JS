/* Promise is an object that represents the eventual
 completion (or failure) of an asynchronous operation
 and returns a single value in the future. 
 a promise can be in one of these states:
  // Pending: The initial state, where the promise is neither fulfilled nor rejected.
  // Fulfilled: The operation completed successfully, and the promise has a resulting value.
 // Rejected: The operation failed, and the promise has a reason for failure.
 // Settled: The promise has either been fulfilled or rejected,
 meaning it is no longer pending.
Promises can be consumed by registering callback functions
 using the .then(), .catch(), and .finally() methods.
Promise constructor: will take one argument which is a callback function,
This callback function takes 2 arguments resolve and reject.
*/
const promise = new Promise(function (resolve, reject) {
  const x = "RadheKrishna";
  const y = "Radhe";
  if (x === y) {
    resolve("Valid");
  } else {
    let err = new Error("Invalid");
    reject(err);
  }
});
promise
  .then((value) => console.log("Fulfilled:", value))
  .catch((error) => console.error("Rejected:", error))
  .finally(() => console.log("Settled:"));
// How to Handle Many Promises at Once
const promise1 = Promise.resolve(`First Promise's Value`);
const promise2 = new Promise((resolve, reject) =>
  setTimeout(resolve, 3000, `Second Promise's Value`)
);
const promise3 = new Promise((resolve) =>
  setTimeout(resolve, 2000, `Third Promise's Value`)
);
// if any reject
const promise11 = Promise.resolve(`First Promise's Value`);
const promise22 = new Promise((resolve, reject) =>
  setTimeout(reject, 2000, `First reason for rejection`)
);
const promise33 = new Promise((resolve, reject) =>
  setTimeout(reject, 3000, `Second reason for rejection`)
);

//Promise.all([promise1, promise2, promise3]);
// The Promise.all() method
/* What is Promise.all()?
Answer:
Promise.all() takes an array of promises and returns a single promise that resolves
 when all of the promises resolve, or rejects as soon as one promise rejects.
If all promises resolve, Promise.all() returns an array of the resolved values.
If one promise rejects, the whole Promise.all() operation fails. */
//const promiseResult = Promise.all([promise1, promise2, promise3]);
promiseResult
  .then((res) => {
    //console.log(res) -->[ "First Promise's Value", "Second Promise's Value","Third Promise's Value"]
    res.forEach((item) => {
      console.log("item-->", item);
    });
  })
  .catch((err) => {
    console.log(err);
  });
// The Promise.race() method
/* What is Promise.race()?
Answer:
Promise.race() returns a promise that resolves or rejects
 as soon as the first promise in the iterable resolves or rejects. */
const promiseResult = Promise.race([promise1, promise2, promise3]);
promiseResult
  .then((res) => {
    console.log("res-->", res);
  })
  .catch((error) => console.error(error));
// The Promise.any() method
/* Promise.any(): Resolves when the first promise resolves, 
but it ignores rejections until all promises reject. */
const promise111 = new Promise((resolve) =>
  setTimeout(resolve, 3000, `First Promise's Value`)
);
const promise222 = new Promise((resolve) =>
  setTimeout(resolve, 2000, `Second Promise's Value`)
);
const promise333 = Promise.reject(`Third Promise's Value`);

const promiseResult11 = Promise.any([promise1, promise2, promise3]);
promiseResult
  .then((res) => {
    console.log("res-->", res);
  })
  .catch((error) => console.error(error));
// The Promise.allSettled() method
const promise1111 = new Promise((resolve) =>
  setTimeout(resolve, 3000, `First Promise's Value`)
);
const promise2222 = new Promise((resolve) =>
  setTimeout(resolve, 2000, `Second Promise's Value`)
);
const promise3333 = Promise.reject(`Third Promise's Value`);
Promise.allSettled([promise1, promise2, promise3]);
Promise.allSettled([promise1, promise2, promise3]).then(console.log);
///// real example------->

const fakePeople = [
  { name: "Kabir", location: "Noida" },
  { name: "Suneel", location: "Delhi" },
  { name: "Akshay", location: "All" },
];

// The Promise.all() method
// The Promise.race() method
// The Promise.any() method
// The Promise.allSettled() method
const fakeAPICall = (i) => {
  const returnTime = Math.floor(Math.random * 1000);
  return new Promise((resolve, reject) => {
    if (i >= 0 && i < fakePeople.length) {
      setTimeout(() => resolve(fakePeople[i], returnTime));
    } else {
      reject({ message: "Index is out of range" });
    }
  });
};

const getAllData = () => {
  Promise.all([fakeAPICall(0), fakeAPICall(1), fakeAPICall(2)])
    .then((values) => {
      console.log("result--->", values);
    })
    .catch((error) => [console.log("error--->", error)]);
};
getAllData();

/// Key Differences from Other Promise Methods:
/* Promise.all(): Resolves when all promises have successfully resolved,
 but rejects if any promise rejects.
Promise.race(): Resolves or rejects
 as soon as one of the input promises resolves or rejects.
Promise.any(): Resolves when the first promise
 resolves and ignores rejections unless all promises reject.
Promise.allSettled(): Resolves once all promises settle,
 whether they resolve or reject. It never rejects itself. */
