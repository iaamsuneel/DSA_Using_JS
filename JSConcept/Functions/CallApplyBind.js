// 1. Call Method
// The call() method is used to invoke a function
// with a specified this context and individual arguments.
// Basic Example:
function someThing(name, location) {
  console.log(this.skills, name, location);
}
const obj = { skills: "frontend Developer" };
someThing("Suneel", "Noida"); // undefined Suneel Noida
someThing.call(obj, "Suneel", "Noida"); // frontend Developer Suneel Noida
// Advanced Example:
// call() is often used to borrow methods from other objects.
// Here's how you can borrow a method from one object and apply it to another.
const car = {
  make: "Toyota",
  model: "Corolla",
  getInfo: function (city, country) {
    console.log(`${this.make} ${this.model} is in ${city}, ${country}`);
  },
};
const bike = { make: "Honda", model: "CBR500" };
// Borrowing the getInfo method from car and applying it to bike using call()
car.getInfo.call(bike, "Tokyo", "Japan"); // Output: "Honda CBR500 is in Tokyo, Japan"

// 2.  apply
// apply() is similar to call(),
// but the difference is that apply()
// expects the arguments to be passed as an array (or array-like object).

// apply() is used to call a function with
// a specified this context, passing arguments as an array.

function greet(city, country) {
  console.log(`Hello from ${this.name} in ${city}, ${country}`);
}
const person = { name: "Bob" };
greet.apply(person, ["London", "England"]); // Output: "Hello from Bob in London, England"

// 3. Bind :
// The bind() method creates a new function that,
// when invoked, has its this context set to a specific value and can also accept pre-set arguments.
// bind() creates a new function that always refers to a specific this
function greet() {
  console.log(`Hello, ${this.name}`);
}
const objs = { name: "Charlie" };

// Using bind() to create a new function bound to the 'objs' object
const greetCharlie = greet.bind(objs);

greetCharlie(); // Output: "Hello, Charlie"
