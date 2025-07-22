const arr = [
  { name: "Akshay", age: 26 },
  { name: "Neerj", age: 25 },
  { name: "Vishal", age: 24 },
  { name: "Kabir", age: 24 },
  { name: "Lav", age: 25 },
  { name: "Suneel", age: 26 },
];
// Group items on the basis of age of given array of object
function groupBy(arr) {
  const obj = {};
  arr.forEach((item) => {
    if (obj[item.hotel_date]) {
      obj[item.hotel_date].push(item);
    } else {
      obj[item.hotel_date] = [item];
    }
  });
  return obj;
}
console.log("Group By Age", groupBy(arr));
