/* Shallow copy: A shallow copy creates a new object or array and copies the
references of the original elements */

/* Deep copy:
A deep copy creates a new object or array that has its own copies of
the properties of the original object. */

// Shallow Copy :
// 𝟏𝐬𝐭 𝐂𝐚𝐬𝐞:
let originalArray = [1, 2, [3, 4]];
let shallowCopy = [...originalArray];

shallowCopy[2][0] = 100;
console.log(originalArray); // [1, 2, [100, 4]]
console.log(shallowCopy); // [1, 2, [100, 4]]

// 𝟐𝐧𝐝 𝐂𝐚𝐬𝐞:
let a = [1, 2, 3, 4];
let b = [...a];
b[0] = 6;
console.log(a); // [1,2,3,4]
console.log(b); // [6,2,3,4]

// Deep Copy
let originalArray1 = [1, 2, [3, 4]];
let deepCopy = JSON.parse(JSON.stringify(originalArray1));
deepCopy[2][0] = 200;
console.log("originalArray1", originalArray1);
console.log("deepCopy", deepCopy);

// 3rd Case:

let originalObject = {
  name: "Suneel",
  address: {
    city: "Noida",
    visitedLocation: ["Noida", "Allahabad"],
  },
};
// Shallow copy
let shallowCopy1 = { ...originalObject };
//shallowCopy1["name"] = "Velocis";
//shallowCopy1["address"]["city"] = "New Delhi";
//console.log("Original 1", originalObject); //
/* {
    name: 'Suneel',
    address: { city: 'New Delhi', visitedLocation: [ 'Noida', 'Allahabad' ] }
  } */
console.log("shallowCopy 1", shallowCopy1);
/* {
    name: 'Velocis',
    address: { city: 'New Delhi', visitedLocation: [ 'Noida', 'Allahabad' ] }
  } */
// Deep Copy
let deepCopy1 = JSON.parse(JSON.stringify(originalObject));
deepCopy1["name"] = "Velocis";
deepCopy1["address"]["city"] = "New Delhi";
console.log("Original 1", originalObject); //
/* {
    name: 'Suneel',
    address: { city: 'New Delhi', visitedLocation: [ 'Noida', 'Allahabad' ] }
  } */
console.log("Deep Copy 1", deepCopy1);
/* {
    name: 'Velocis',
    address: { city: 'New Delhi', visitedLocation: [ 'Noida', 'Allahabad' ] }
  } */

// using lodash dependency
