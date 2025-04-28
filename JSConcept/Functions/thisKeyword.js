// 𝐖𝐡𝐚𝐭 𝐢𝐬 𝐭𝐡𝐢𝐬 𝐢𝐧 𝐣𝐚𝐯𝐚𝐬𝐜𝐫𝐢𝐩𝐭 ?
// this refers to the object that is currently executing the code

/*  𝐖𝐡𝐚𝐭 𝐢𝐬 𝐭𝐡𝐞 𝐯𝐚𝐥𝐮𝐞 𝐨𝐟 𝐭𝐡𝐢𝐬 𝐢𝐧 𝐠𝐥𝐨𝐛𝐚𝐥 𝐬𝐜𝐨𝐩𝐞 ?
Its a global object. its value can be global or window. It depends on
where you are running javascript code.(like browser or node
environment etc) */

/*  𝐈 𝐰𝐢𝐥𝐥 𝐮𝐬𝐞 𝐧𝐨𝐧 𝐬𝐭𝐫𝐢𝐜𝐭 𝐦𝐨𝐝𝐞. 𝐍𝐨𝐰 𝐢𝐟 𝐢 𝐮𝐬𝐞 𝐭𝐡𝐢𝐬 𝐢𝐧𝐬𝐢𝐝𝐞 𝐚 𝐟𝐮𝐧𝐜𝐭𝐢𝐨𝐧, 𝐰𝐡𝐚𝐭 𝐰𝐢𝐥𝐥 𝐛𝐞 𝐭𝐡𝐞
𝐨𝐮𝐭𝐩𝐮𝐭 ?
Its a global object.
In non strict mode, when ever this keyword value is null or undefined,
javascript will replace it’s value with global object.(Due to this
substitution) */

// 𝐈𝐧 𝐬𝐭𝐫𝐢𝐜𝐭 𝐦𝐨𝐝𝐞, 𝐖𝐡𝐚𝐭 𝐰𝐢𝐥𝐥 𝐭𝐡𝐞 𝐯𝐚𝐥𝐮𝐞 𝐨𝐟 𝐭𝐡𝐢𝐬 𝐢𝐧𝐬𝐢𝐝𝐞 𝐚 𝐟𝐮𝐧𝐜𝐭𝐢𝐨𝐧 ?
function x() {
  console.log(this);
}
//x()

// 1. In a Regular Function (Global Context)
// In non-strict mode, this refers to the global object (in browsers, it's the window object).

function showThis() {
  console.log(this);
}

//showThis(); // In a browser, this will log the 'window' object.

// 2. Inside an Object Method
const person = {
  name: "Suneel",
  greet: function () {
    console.log(this.name);
  },
};

person.greet(); // Output: Suneel

// 3. In a Constructor Function
// In a constructor function
// (i.e., when using the new keyword), this refers to the new object being created.
function Person(name) {
  this.name = name;
}
const person1 = new Person("John");
console.log(person1.name); // Output: John
// Here, this refers to the object that is created when the Person constructor is called with new.

// 4. Arrow Functions
// In arrow functions,
// this is not bound to the function itself,
// but rather it takes the this value from the enclosing lexical context.

const obj = {
  name: "Bob",
  greet: function () {
    setTimeout(() => {
      console.log(this.name); // Arrow function uses 'this' from greet() method
    }, 1000);
  },
};
obj.greet(); // Output: Bob
// In this example, even though setTimeout is a regular function,
// the arrow function inside it inherits this from the surrounding greet method, which refers to obj.

// Summary:
// this refers to the object or context that is executing the code.
// In methods, it refers to the object the method belongs to.
// In constructor functions, it refers to the newly created object.
// In arrow functions, this refers to the context from where the function was defined (lexical scoping).
 