/* What are the differences between call(), apply() and bind() ?
Call method will invokes the function immediately
 with the given this value and allow us to pass the arguments one by one with comma separator.
Apply method will invokes the function immediately with 
given this value and allow us to pass the arguments as an array.
Bind method will return a new function with the given
 this value and arguments which can be invoked later. */

// Call function
function userData(profile, city) {
    console.log(this.fname + "  " + profile + " " + city);
}
const userInfo = {
    fname: "Yash",
    lname: "kumar",
    age: 24,
    degree: "BTech",
};
userData.call(userInfo, "Developer", "Noida");
// apply
const arr = ["Developer", "Noida"];
userData.apply(userInfo, arr);
// bind
function sum(a, b) {
    return a * b;
}
const sumValue = sum.bind(null, 4);
console.log("sumValue", sumValue(9));
