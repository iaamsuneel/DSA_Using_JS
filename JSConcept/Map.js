// Create a Map
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200],
]);
console.log("fruits-->", fruits);
// add elements to a Map with the set() method:
//The set() method can also be used to change existing Map values:
fruits.set("new Data", 500);
//The get() method gets the value of a key in a Map:
console.log("get key", fruits.get("apples")); // Returns 500
console.log("last", fruits);

// Iterate Hash Map
fruits.forEach((item) => {
    console.log("itemm---->", item);
});
// Differences between JavaScript Objects and Maps:
/* Object                    	                 Map
Not directly iterable   	               Directly iterable
Do not have a size property	               Have a size property
Keys must be Strings (or Symbols)	        Keys can be any datatype
Keys are not well ordered	                Keys are ordered by insertion
Have default keys	                        Do not have default keys */
