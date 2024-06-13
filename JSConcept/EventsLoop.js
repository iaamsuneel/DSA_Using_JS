const tom = () => console.log("Tom");
const jerry = () => console.log("Jerry");
const doggy = () => console.log("Doggy");
(function () {
    for (var i = 0; i < 2; i++) {
        setTimeout(() => {
            console.log(i);
        });
        const promise1 = Promise.resolve(`Second Promise's Value`);
        promise1.then((res) => {
            console.log(res);
        });
    }
    setTimeout(tom, 50);
    console.log("Hello Ravindra");
    setTimeout(doggy, 30);

    new Promise((resolve) => {
        resolve("resolve Promise");
    }).then((res) => {
        console.log("promise First", res);
    });
    jerry();
    setTimeout(() => {
        console.log("setTime Outtt");
    });
})();
