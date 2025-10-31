# What is TypeScript?
TypeScript is an open-source superset of JavaScript developed by Microsoft. It adds optional static typing, interfaces, and modern features on top of JavaScript, which helps catch errors at compile time, improve code quality, and make applications more scalable and maintainable. Since TypeScript compiles down to plain JavaScript, it can run anywhere JavaScript runs.

# Why TypeScript is used? 
TypeScript is used because it adds static typing to JavaScript, which helps catch errors early at compile time instead of runtime

# Difference between type and interface in TypeScript.
1.  interface : when defining the shape of an object or class contract (especially for public APIs).
2.  type: when you need unions, intersections, or advanced type constructs.

1. # Basic Object Shape

# Using interface
interface User {
  id: number;
  name: string;
}

# Using type
type UserType = {
  id: number;
  name: string;
};

const u1: User = { id: 1, name: "Suneel" };
const u2: UserType = { id: 2, name: "Yadav" };
# 👉 Both work the same here.

2. # Extending

# Interface extends
interface Person {
  name: string;
}
interface Employee extends Person {
  salary: number;
}
const emp1: Employee = { name: "Raj", salary: 50000 };


# Type extends (with & intersection)
type PersonType = {
  name: string;
};
type EmployeeType = PersonType & {
  salary: number;
};
const emp2: EmployeeType = { name: "Rahul", salary: 60000 };
# 👉 Both can extend, but interface uses extends while type uses &.

3. # Declaration Merging
# ✅ Interface allows merging
interface Car {
  brand: string;
}

interface Car {
  speed: number;
}

const c1: Car = { brand: "BMW", speed: 250 };


# ❌ Type does NOT allow merging
type Bike = {
  brand: string;
};

// Error: Duplicate identifier "Bike"
// type Bike = {
//   speed: number;
// };

# 👉 Only interface supports declaration merging.

4. # Unions & Primitives (Only Type)
# ✅ Possible with type
type ID = string | number; // Union
type Point = [number, number]; // Tuple
type Status = "active" | "inactive"; // Literal type

let id1: ID = 101;
let id2: ID = "A102";
let state: Status = "active";
let coords: Point = [10, 20];

# ❌ Not possible with interface
# interface ID = string | number; // ❌ Error
# 👉 Only type can handle unions, tuples, and primitives.

5. # Classes (Only Interface is natural)

interface Animal {
  name: string;
  sound(): void;
}

class Dog implements Animal {
  name = "Puppy";
  sound() {
    console.log("Woof!");
  }
}

const d = new Dog();
d.sound(); // Woof!
# 👉 Classes naturally implement interfaces, not types.



 
