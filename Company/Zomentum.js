// INPUT: [-1,0,-1,1,0,-1]
// OUTPUT:[-1,-1,-1,0,0,1]
function sortArray(arr) {
  let left = 0,
    mid = 0,
    right = arr.length - 1;
  while (mid <= right) {
    if (arr[mid] == -1) {
      [arr[left], arr[mid]] = [arr[mid], arr[left]];
      left++;
      mid++;
      console.log("arr if::", arr, left, mid, right);
    } else if (arr[mid] == 0) {
      mid++;
      console.log("else if::", arr, left, mid, right);
    } else {
      [arr[mid], arr[right]] = [arr[right], arr[mid]];
      right--;
      console.log("else::", arr, left, mid, right);
    }
  }
  return arr;
}
console.log("sortArray::", sortArray([-1, 0, -1, 1, 0, -1])); // [ -1, -1, -1, 0, 0, 1 ]
