// Ques: 1
// Define an object with two properties and a method
const obj = {
  a: 1,
  b: 2,
  // Method to return the sum of properties a and b
  sum() {
    return this.a + this.b;
  },
};
// Create a new function 'res' by binding the 'sum' method to 'obj'
// This ensures 'this' inside 'sum' will always refer to 'obj'
const res = obj.sum.bind(obj);
// Log the object and the bound function (res is not executed here)
//console.log(res()); // Output: 3
//console.log(obj, res); // Output: the object and the bound function reference

// bind , call , apply

// Ques :2
function someThing(x, y) {
  console.log(arguments); // [Arguments] { '0': 5, '1': 5 }
  arguments[1] = 12;
  return x + y;
}
//console.log(someThing(5, 5));

// Rotate the array k times and return the same array in O(n) time
function reverseArr(start, end, arr) {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
  return arr;
}
// left rotation --->  [1,2,3,4,5] ----> [3,4,5,1,2]

function rotateLeft(arr, k) {
  let start = 0;
  let end = arr.length;
  k = k % end;
  reverseArr(start, end - 1, arr);
  reverseArr(0, k - 1, arr);
  reverseArr(k, end - 1, arr);
  return arr;
}
console.log("left Rotation :: ", rotateLeft([1, 2, 3, 4, 5], 2)); // [3,4,5,1,2]

function rotateRight(arr, k) {
  let start = 0;
  let end = arr.length;
  k = k % end;
  reverseArr(start, end - 1, arr);
  reverseArr(0, k - 1, arr);
  reverseArr(k, end - 1, arr);
  return arr;
}
console.log("right Rotation :: ", rotateRight([1, 2, 3, 4, 5], 2)); // [4,5,1,2,3]
