// example 1
const tom = () => console.log("Tom");
const jerry = () => console.log("Jerry");
const doggy = () => console.log("Doggy");
const cartoon = async () => {
    console.log("Cartoon");
    setTimeout(tom, 50);
    setTimeout(doggy, 30);
    await new Promise((resolve, reject) =>
        resolve("I am a Promise, Really?")
    ).then((resolve) => console.log(resolve));
    await new Promise((resolve, reject) =>
        resolve("I am a Promise after Promise!")
    ).then((resolve) => console.log(resolve));

    jerry();
};
cartoon();
// example 2
/* const seconds = new Date().getTime() / 1000;
setTimeout(() => {
    console.log(`Ran after ${new Date().getTime() / 1000 - seconds} seconds`);
}, 0);

while (true) {
    if (new Date().getTime() / 1000 - seconds >= 2) {
        console.log("Good, looped for 2 seconds");
        break;
    }
} */
// example 3
// iife
(() => {
    console.log("this is the start");
    setTimeout(() => {
        console.log("Callback 1: this is a msg from call back");
    }, 0);
    console.log("this is just a message");
    setTimeout(() => {
        console.log("Callback 2: this is a msg from call back");
    }, 0);
    console.log("this is the end");
})();
