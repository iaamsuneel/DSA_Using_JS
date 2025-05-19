// Create a Map
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200],
]);
// add elements to a Map with the set() method:
//The set() method can also be used to change existing Map values:
fruits.set("add", 500);
//The get() method gets the value of a key in a Map:
/* console.log("get key", fruits.get("apples")); // Returns 500
console.log("last", fruits); */

// Iterate Hash Map
/* fruits.forEach((item) => {
  console.log("itemm---->", item);
}); */
// Differences between JavaScript Objects and Maps:
/* Object                    	                 Map
Not directly iterable   	               Directly iterable
Do not have a size property	               Have a size property
Keys must be Strings (or Symbols)	        Keys can be any datatype
Keys are not well ordered	                Keys are ordered by insertion
Have default keys	                        Do not have default keys */

// example
const map = new Map();
// adding and Updating Key-Value Pairs
map.set("key1", 200);
map.set("key2", 400);
map.set("key", 100);
map.set("key3", 300);
map.set("key4", 1700);
console.log("map", map);
// Retrieving Values using key
const res = map.get("key2");
console.log("res", res);
// Removing Key-Value Pairs
map.delete("key1");
console.log("delete", map);
// Getting the Size of a Map
console.log(map.size);
// iterate using the forEach() method
map.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});
// or using the for .. of loop
for (const [key, value] of map) {
  console.log(`${key}: ${value}`);
}
