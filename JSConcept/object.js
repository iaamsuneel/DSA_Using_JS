const person = {
    name: "John",
    age: 30,
    city: "New York"
};
console.log(person)
// using for in
for (let x in person) {
    console.log(person[x])
}
//JavaScript Object Constructors
function obj(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}
const res = new obj("SparxIt", "Solutions", 24, "Left")
console.log(res.firstName + " " + res.lastName + " " + res.age + " " + res.eyeColor)