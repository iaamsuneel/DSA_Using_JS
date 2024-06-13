/* Promise is an object , that will produce a single value some time in the future , completion or
 failure of an asynchronous operation in javascript.
At any point of time, promise will be in any of these below states.,
Fulfilled: Action related to promise is succeded.
Rejected: Action related to the promise is failed.
Pending: Promise is neither fulfilled nor rejected.
Settled: Promise has been fulfilled or rejected.
Promise can be consumed by registering the functions using .then() and .catch() methods.
Promise constructor: will take one argument which is a callback function,
This callback function takes 2 arguments resolve and reject.
*/
/* const promise = new Promise(function (resolve, reject) {
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
    .then((response) => {
        console.log("success", response);
    })
    .catch((error) => {
        console.log("failed", error.message);
    }); */
// How to Handle Many Promises at Once
/* const promise1 = Promise.resolve(`First Promise's Value`);
const promise2 = new Promise((resolve, reject) =>
    setTimeout(resolve, 3000, `Second Promise's Value`)
);
const promise3 = new Promise((resolve) =>
    setTimeout(resolve, 2000, `Third Promise's Value`)
); */
// if any reject
/* const promise1 = Promise.resolve(`First Promise's Value`);
const promise2 = new Promise((resolve, reject) =>
    setTimeout(reject, 2000, `First reason for rejection`)
);
const promise3 = new Promise((resolve, reject) =>
    setTimeout(reject, 3000, `Second reason for rejection`)
); */

//Promise.all([promise1, promise2, promise3]);
// The Promise.all() method
//const promiseResult = Promise.all([promise1, promise2, promise3]);
/* promiseResult
    .then((res) => {
        //console.log(res) -->[ "First Promise's Value", "Second Promise's Value","Third Promise's Value"]
        res.forEach((item) => {
            console.log("item-->", item);
        });
    })
    .catch((err) => {
        console.log(err);
    }); */
// The Promise.race() method
/* const promiseResult = Promise.race([promise1, promise2, promise3]);
promiseResult
    .then((res) => {
        console.log("res-->", res);
    })
    .catch((error) => console.error(error)); */
// The Promise.any() method
/* const promise1 = new Promise((resolve) =>
    setTimeout(resolve, 3000, `First Promise's Value`)
);
const promise2 = new Promise((resolve) =>
    setTimeout(resolve, 2000, `Second Promise's Value`)
);
const promise3 = Promise.reject(`Third Promise's Value`);

const promiseResult = Promise.any([promise1, promise2, promise3]);
promiseResult
    .then((res) => {
        console.log("res-->", res);
    })
    .catch((error) => console.error(error)); */
// The Promise.allSettled() method
/* const promise1 = new Promise((resolve) =>
    setTimeout(resolve, 3000, `First Promise's Value`)
);
const promise2 = new Promise((resolve) =>
    setTimeout(resolve, 2000, `Second Promise's Value`)
);
const promise3 = Promise.reject(`Third Promise's Value`);
Promise.allSettled([promise1, promise2, promise3]);
Promise.allSettled([promise1, promise2, promise3]).then(console.log); */
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
