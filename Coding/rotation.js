// Function to reverse elements in the given range
function reverse(arr, start, end) {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
}
// 1. Right Rotation
// i/p: [1,2,3,4,5] , o/p : [4,5,1,2,3] ,k=2
// Function to perform right rotation using the reversal algorithm
function rightRotate(arr, k) {
  let n = arr.length;
  k = k % n; // Optimize to handle cases where k > n
  // Step 1: Reverse the entire array
  reverse(arr, 0, n - 1); // Example: [1,2,3,4,5] -> [5,4,3,2,1]
  // Step 2: Reverse the first 'k' elements
  reverse(arr, 0, k - 1); // Example: [5,4,3,2,1] -> [4,5,3,2,1]
  // Step 3: Reverse the remaining 'n-k' elements
  reverse(arr, k, n - 1); // Example: [4,5,3,2,1] -> [4,5,1,2,3]
  return arr;
}
// Test case
console.log(rightRotate([1, 2, 3, 4, 5], 2)); // Output: [4, 5, 1, 2, 3]
