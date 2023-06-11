// remove duplicate values
// Example 1 using for loop
const arr = [7, 2, 4, 5, 7];
function duplicate(arr) {
  const dupArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        dupArr.push(arr[i]);
        arr.splice(i, 1);
      }
    }
  }
  console.log("Duplicates Values In Array-->", dupArr); // [ 7 ]
}
duplicate(arr); // output-> [ 7, 2, 5 ]
console.log("Remove Duplicates Using loop-->", arr); //[ 2, 4, 5, 7 ]
// Example 2 Using filter Function
const res = arr.filter((item, index) => {
  return index === arr.indexOf(item);
});
console.log("Remove Duplicates Using Filter Function-->", res); //[ 2, 4, 5, 7 ]
// Example using Set
const newArr = new Set(arr);
console.log("Remove Duplicates Using Set-->", [...newArr]); // [ 2, 4, 5, 7 ]
